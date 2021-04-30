<?php
/**
 * WeCodeArt Framework.
 *
 * WARNING: This file is part of the core WeCodeArt Framework. DO NOT edit this file under any circumstances.
 * Please do all modifications in the form of a child theme.
 *
 * @package 	WeCodeArt Framework
 * @subpackage 	Support\Fonts
 * @copyright   Copyright (c) 2021, WeCodeArt Framework
 * @since 		5.0.0
 * @version		5.0.0
 */

namespace WeCodeArt\Support\Fonts;

defined( 'ABSPATH' ) || exit;

use WeCodeArt\Singleton;
use WeCodeArt\Support\Fonts;
use WeCodeArt\Admin\Request;
use WeCodeArt\Support\FileSystem;
use function WeCodeArt\Functions\get_prop;

/**
 * Manages the way Google Fonts are enqueued.
 */
final class Google {

	use Singleton;

	/**
	 * WCA FileSystem
	 *
	 * @since  	5.0.0
	 * @var 	mixed
	 */
	protected 	$FS		= null;

	/**
	 * The array of fonts
	 *
	 * @var 	array
	 */
	public 		$fonts = [];

	/**
	 * An array of all google fonts.
	 *
	 * @var 	array
	 */
	private 	$google_fonts = [];

	/**
	 * The class constructor.
	 */
	private function init() {
		// Populate the array of google fonts.
		$this->google_fonts = Fonts::get_google_fonts();
		$this->FS = FileSystem::get_instance()->set_folder( 'css' );

		add_filter( 'wp_resource_hints', [ $this, 'resource_hints' ], 10, 2 );
	}

	/**
	 * Add preconnect for Google Fonts.
	 *
	 * @param 	array  	$urls           URLs to print for resource hints.
	 * @param 	string 	$relation_type  The relation type the URLs are printed.
	 *
	 * @return 	array 	$urls           URLs to print for resource hints.
	 */
	public function resource_hints( $urls, $relation_type ) {
		if ( 'preconnect' === $relation_type ) {
			if ( version_compare( $GLOBALS['wp_version'], '4.7-alpha', '>=' ) ) {
				$urls[] = [
					'href' 	=> '//fonts.gstatic.com',
					'crossorigin',
				];
			} else {
				$urls[] = '//fonts.gstatic.com';
			}
		}

		return $urls;
	}

	/**
	 * Adds Google Font
	 *
	 * @param array $value The field arguments.
	 */
	public function add_font( $value ) {
		$key_map = [
			'font-family' => 'family',
			'font-weight' => 'variants',
		];

		$value = array_combine( array_merge( $value, $key_map ), $value );

		$value = wp_parse_args( $value, [
			'family' 	=> '',
			'variants' 	=> [ 'regular' ]
		] );

		// If is not a Google Font, don`t bother!
		if( ! Fonts::is_google_font( $value['family'] ) ) return;

		// If is new, just add it.
		if ( ! isset( $this->fonts[ $value['family'] ] ) ) {
			$this->fonts[ $value['family'] ] = [
				'family' 	=> $value['family'],
				'variants' 	=> ! empty( $value['variants'] ) ? (array) $value['variants'] : [ 'regular' ],
			];

			return;
		}

		// If already exists, just update it`s variants.
		$variants = array_merge( $this->fonts[ $value['family'] ]['variants'], $value['variants'] );
		$this->fonts[ $value['family'] ]['variants'] = $variants;
	}

	/**
	 * Determines the validity of the selected font as well as its properties.
	 * This is vital to make sure that the google-font script that we'll generate later
	 * does not contain any invalid options.
	 */
	public function process_fonts() {
		// Early exit if font-family is empty.
		if ( empty( $this->fonts ) ) {
			return [];
		}	
		
		foreach ( $this->fonts as $font => $data ) {
			// Determine if this is indeed a google font or not.
			if ( ! Fonts::is_google_font( $font ) ) {
				unset( $this->fonts[ $font ] );
				continue;
			}

			// Get all valid font variants for this font.
			$google_font = current( wp_list_filter( $this->google_fonts, [ 'family' => $font ] ) );
			$this->fonts[ $font ]['variants'] = array_intersect( $data['variants'], $google_font['variants'] );
		}

		$this->fonts = array_map( function( $font ) {
			return wp_parse_args( [
				'variants' 	=> array_map( function( $val ) {
					if ( 'italic' === $val ) return '400i';
					return str_replace( [ 'regular', 'bold', 'italic' ], [ '400', '', 'i'  ], $val );
				}, $font['variants'] ),
				'subsets'	=> [ 'latin', 'latin-ext' ]
			], $font );
		}, $this->fonts );

		return $this->fonts;
	}

	/**
	 * Get styles from URL.
	 *
	 * @since 	5.0.0
	 * @param 	string 		$font 	The URL.
	 *
	 * @return 	string
	 */
	public function get_styles( $font ) {
		$css = '';
		$url = self::get_font_url( $font );
		if( $url === false ) return $css;
		$css = $this->get_cached_url_contents( $url );
		return $this->get_local_font_styles( $css );
	}

	/**
	 * Get styles with fonts downloaded locally.
	 *
	 * @since 	5.0.0
	 * @param 	string 		$css 	The styles.
	 *
	 * @return 	string
	 */
	protected function get_local_font_styles( $css ) {
		$files = $this->get_local_files_from_css( $css );

		// Convert paths to URLs.
		foreach ( $files as $remote => $local ) {
			$files[ $remote ] = str_replace( WP_CONTENT_DIR, content_url(), $local );
		}

		return str_replace( array_keys( $files ), array_values( $files ), $css );
	}

	/**
	 * Download files mentioned in our CSS locally.
	 *
	 * @since 	5.0.0
	 * @param 	string		$css 	The CSS we want to parse.
	 *
	 * @return 	array      			Returns an array of remote URLs and their local counterparts.
	 */
	protected function get_local_files_from_css( $css ) {
		$this->FS->set_folder( 'fonts' );

		$font_files = $this->get_files_from_css( $css );
		$stored     = get_option( 'wecodeart-fonts', [] );
		$change     = false; // If in the end this is true, we need to update the cache option.

		foreach( $font_files as $font_family => $files ) {
			// The folder path for this font-family.
			$this->FS->set_folder( join( '/', [ 'fonts', $font_family ] ) );

			foreach ( $files as $url ) {
				// Get the filename and build path.
				$filename  = basename( wp_parse_url( $url, PHP_URL_PATH ) );
				$font_path = join( '/', [ $this->FS->folder, $filename ] );

				if ( file_exists( $font_path ) ) {
					// Skip if already cached.
					if ( isset( $stored[ $url ] ) ) continue;
					$stored[ $url ] = $font_path;
					$change         = true;
				}

				// Download file to temporary location.
				$tmp_path = download_url( $url );

				// Make sure there were no errors.
				if ( is_wp_error( $tmp_path ) ) continue;

				// Move temp file to final destination.
				$success = $this->FS->get_filesystem()->move( $tmp_path, $font_path, true );
				if ( $success ) {
					$stored[ $url ] = $font_path;
					$change         = true;
				}
			}
		}

		if ( $change ) {
			update_option( 'wecodeart-fonts', $stored );
		}

		// Revert back the Path
		$this->FS->set_folder( 'css' );

		return $stored;
	}

	/**
	 * Get font files from the CSS.
	 *
	 * @since 	5.0.0
	 * @param 	string 	$css 	The CSS we want to parse.
	 *
	 * @return 	array      		Returns an array of font-families and the font-files used.
	 */
	public function get_files_from_css( $css ) {
		$font_faces = explode( '@font-face', $css );
		$result = [];

		// Loop all our font-face declarations.
		foreach( $font_faces as $font_face ) {
			// Make sure we only process styles inside this declaration.
			$style = explode( '}', $font_face )[0];

			// Sanity check.
			if ( false === strpos( $style, 'font-family' ) ) continue;

			// Get an array of our font-families.
			preg_match_all( '/font-family.*?\;/', $style, $font_families );

			// Get an array of our font-files.
			preg_match_all( '/url\(.*?\)/i', $style, $font_files );

			// Get the font-family name.
			$font_family = 'unknown';
			if ( isset( $font_families[0] ) && isset( $font_families[0][0] ) ) {
				$font_family = rtrim( ltrim( $font_families[0][0], 'font-family:' ), ';' );
				$font_family = trim( str_replace( array( "'", ';' ), '', $font_family ) );
				$font_family = sanitize_key( strtolower( str_replace( ' ', '-', $font_family ) ) );
			}

			// Make sure the font-family is set in our array.
			if ( ! isset( $result[ $font_family ] ) ) {
				$result[ $font_family ] = [];
			}

			// Get files for this font-family and add them to the array.
			foreach( $font_files as $match ) {
				// Sanity check.
				if ( ! isset( $match[0] ) ) continue;

				// Add the file URL.
				$result[ $font_family ][] = rtrim( ltrim( $match[0], 'url(' ), ')' );
			}

			// Make sure we have unique items.
			// We're using array_flip here instead of array_unique for improved performance.
			$result[ $font_family ] = array_flip( array_flip( $result[ $font_family ] ) );
		}

		return $result;
	}

	/**
	 * Get cached url contents.
	 * If a cache doesn't already exist, get the URL contents from remote and cache the result.
	 *
	 * @since 	5.0.0
	 * @param 	string 	$url        The URL we want to get the contents from.
	 * @param 	string 	$user_agent	The user-agent to use for our request.
	 *
	 * @return 	string            	Returns the remote URL contents.
	 */
	public function get_cached_url_contents( $url = '', $user_agent = null ) {
		// Try to retrieved cached response from the gfonts API.
		$contents         = false;
		$cached_responses = get_transient( 'wecodeart/fonts/google/remote' );
		$cached_responses = ( $cached_responses && is_array( $cached_responses ) ) ? $cached_responses : [];

		if ( isset( $cached_responses[ md5( $url . $user_agent ) ] ) ) {
			return $cached_responses[ md5( $url . $user_agent ) ];
		}

		// Get the contents from remote.
		$contents = $this->get_url_contents( $url, $user_agent );

		// If we got the contents successfully, store them in a transient.
		if ( $contents ) {
			$cached_responses[ md5( $url . $user_agent ) ] = $contents;
			set_transient( 'wecodeart/fonts/google/remote', $cached_responses, WEEK_IN_SECONDS );
		}

		return $contents;
	}

	/**
	 * Get remote file contents.
	 *
	 * @since 	5.0.0
	 * @param 	string 	$url		The URL we want to get the contents from.
	 * @param 	string 	$user_agent	The user-agent to use for our request.
	 *
	 * @return 	string            	Returns the remote URL contents.
	 */
	public function get_url_contents( $url = '', $user_agent = null ) {
		if ( ! $user_agent ) {
			/**
			 * The user-agent we want to use.
			 *
			 * For woff2 format, use'Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:73.0) Gecko/20100101 Firefox/73.0'.
			 * The default user-agent is the only one compatible with woff (not woff2)
			 * which also supports unicode ranges.
			 */
			// $user_agent = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_5) AppleWebKit/603.3.8 (KHTML, like Gecko) Version/10.1.2 Safari/603.3.8';
			$user_agent = 'Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:73.0) Gecko/20100101 Firefox/73.0';
		}

		// Get the response.
		$request = new Request( $url, [ 'user-agent' => $user_agent ] );
		$request->send( $request::METHOD_GET );

		return $request->get_response_body();
	}

	/**
	 * Get remote file URL.
	 *
	 * @since 	5.0.0
	 * @param 	array 	$font
	 *
	 * @return 	mixed 	Returns the remote URL or false if is not google font.
	 */
	public static function get_font_url( $font ) {
		$font = wp_parse_args( $font, [
			'family' 	=> '',
			'variants' 	=> ''
		] );

		if( Fonts::is_google_font( trim( $font['family'] ) === false ) ) return false;

		$_italics = array_map( function( $item ) {
			return $item . 'i';
		}, range( 100, 900, 100 ) );

		// Font Family
		$family	= str_replace( ' ', '+', trim( $font['family'] ) );

		// Font Styles
		$normal = array_diff( $font['variants'], $_italics );
		$italic = array_intersect( $font['variants'], $_italics );

		// Setup Variants
		$sets 	= implode( ',', array_filter( [ count( $italic ) ? 'ital' : '', 'wght' ] ) );
		$wght 	= count( $italic ) ? implode( ';', [
			implode( ';', array_map( function( $i ) {
				return '0,' . filter_var( $i, FILTER_SANITIZE_NUMBER_INT );
			}, $normal ) ),
			implode( ';', array_map( function( $i ) {
				return '1,' . filter_var( $i, FILTER_SANITIZE_NUMBER_INT );
			}, $italic ) )
		] ) : implode( ';', $normal );

		// Create CSS2 Url
		return add_query_arg( [
			'family' => implode( ':', [ $family, implode( '@', [ $sets, $wght ] ) ] ),
			'display'=> 'swap'
		], 'https://fonts.googleapis.com/css2' );
	}
}