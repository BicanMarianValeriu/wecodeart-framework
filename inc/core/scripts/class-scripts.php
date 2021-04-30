<?php
/**
 * WeCodeArt Framework.
 *
 * WARNING: This file is part of the core WeCodeArt Framework. DO NOT edit this file under any circumstances.
 * Please do all modifications in the form of a child theme.
 *
 * @package 	WeCodeArt Framework
 * @subpackage 	Core\Scripts
 * @copyright   Copyright (c) 2021, WeCodeArt Framework
 * @since 		1.9
 * @version		5.0.0
 */

namespace WeCodeArt\Core;

defined( 'ABSPATH' ) || exit();

use WeCodeArt\Markup;
use WeCodeArt\Singleton;
use WeCodeArt\Core\Scripts;
use function WeCodeArt\Functions\get_prop;
use function WeCodeArt\Core\Scripts\get_asset;

/**
 * Framework Assets
 */
class Scripts {

	use Singleton;
	use Scripts\Base;

	/**
	 * Send to Constructor
	 *
	 * @since 3.6.2
	 */
	public function init() {
		// All starts here
		add_action( 'wp_enqueue_scripts', 	[ $this, 'front_scripts'		] );
		add_action( 'wp_enqueue_scripts', 	[ $this, 'localize_js' 			], 90 );
		add_action( 'wp_enqueue_scripts', 	[ $this, 'inline_js' 			], 95 );
		add_action( 'wp_default_scripts', 	[ $this, 'jquery_to_footer' 	] ); 
		// add_filter( 'script_loader_tag', 	[ $this, 'maybe_enable_attrs' 	], 10, 3 );
	}

	/**
	 * WeCodeArt JS Inline
	 *
	 * @since	4.1.5
	 * @version	4.1.8
	 *
	 * @return 	void
	 */
	public function inline_js() {
		global $wp_scripts;
		$data = 'document.addEventListener("DOMContentLoaded",function(){';
		$data .= 'var _wjs = new wecodeart.JSM(wecodeart);_wjs.loadEvents();';
		$data .= '});';
		wp_add_inline_script( $wp_scripts->queue[ count( $wp_scripts->queue ) - 1 ], $data );
	}

	/**
	 * WeCodeArt JS Object
	 *
	 * @since	3.2
	 * @version	4.1.6
	 *
	 * @return 	void
	 */
	public function localize_js() {
		global $wp_scripts;

		$wecodeart = [
			'assetsEnqueue' 	=> $wp_scripts->queue, 
			'templateDirectory' => get_template_directory_uri(),
			'isDevMode'			=> wecodeart_if( 'is_dev_mode' ),
		];

		if( is_child_theme() ) {
			$wecodeart['styleDirectory'] = get_stylesheet_directory_uri();
		}

		$wecodeart = apply_filters( 'wecodeart/filter/core/scripts/localize', $wecodeart );
		
		wp_localize_script( $this->make_handle(), 'wecodeart', $wecodeart );
	}

	/**
	 * jQuery to Footer
	 *
	 * @since	3.1.2
	 * @version	4.1.5
	 */
	public function jquery_to_footer( $wp_scripts ) {
		$config = wecodeart_config( 'scripts', [] );

		if ( ! is_admin() && get_prop( $config, 'footer', false ) ) {
			$wp_scripts->add_data( 'jquery', 			'group', 1 );
			$wp_scripts->add_data( 'jquery-core', 		'group', 1 );
			$wp_scripts->add_data( 'jquery-migrate', 	'group', 1 );
		}
	}

	/**
	 * Enqueue Front-End Styles
	 *
	 * @since	1.0
	 * @version	5.0.0
	 */
	public function front_scripts() {
		// Enqueue Styles
		wp_enqueue_style( $this->make_handle(), get_asset( 'css', 'frontend' ), [], wecodeart( 'version' ) );

		// Enqueue Scripts
		wp_enqueue_script( $this->make_handle(), get_asset( 'js', 'frontend' ), [
	 		'wp-hooks'
		], wecodeart( 'version' ), true );
		
		if ( ( is_page() || is_single() ) && comments_open() && get_option( 'thread_comments' ) ) {
			wp_enqueue_script( 'comment-reply' );
		}
	}

	/**
	 * Async / Defer.
	 *
	 * @since 	3.9.3
	 *
	 * @param 	string $tag    The script tag, generated by WordPress.
	 * @param 	string $handle The handle for the registered script.
	 * @param 	string $src    The source URL for the script.
	 *
	 * @return 	string $tag The (maybe) reformatted script tag.
	 */
	public function maybe_enable_attrs( $tag, $handle, $src ) {

		$supported_attributes = [ 'async', 'defer' ];

		$decoded_src = wp_specialchars_decode( $src );

		$query = wp_parse_url( $decoded_src, PHP_URL_QUERY );

		if ( ! $query ) {
			return $tag;
		}

		wp_parse_str( $query, $query_args );

		foreach ( $supported_attributes as $attr ) {

			if ( isset( $query_args[ $attr ] ) && 'true' === $query_args[ $attr ] ) {

				$new_src = esc_url( remove_query_arg( $attr, $decoded_src ) );

				$tag = Markup::strip_attr( $tag, 'script', $attr );
				$tag = str_replace( ' src=', ' ' . esc_attr( $attr ) . ' src=', $tag );
				$tag = str_replace( $src, $new_src, $tag );
			}
		}

		return $tag;
	}
}

// Define Child NS
namespace WeCodeArt\Core\Scripts;

/**
 * Gets asset instance.
 *
 * @param  string $file Relative file path to the asset file.
 *
 * @return \WeCodeArt\Core\Scripts\Asset
 */
function asset( $file ) {
    $asset = new Asset( wecodeart_config() );
    return $asset->set_file( $file );
}

/**
 * Gets asset file from public directory.
 *
 * @param  string $type 	Type of the asset file.
 * @param  string $name 	Name of the asset file.
 *
 * @return string
 */
function get_asset( string $type, string $name ) {
	if( ! in_array( $type, [ 'css', 'js' ] ) ) {
		return _doing_it_wrong( 
			__FUNCTION__, 
			esc_html__( 'Asset must of type CSS/JS.', 'wecodeart' ), 
			wecodeart( 'version' ) 
		);
	}

	$file_path = wecodeart_if( 'is_dev_mode' ) ? 'unminified' : 'minified';
	$file_path .= '/' . strtolower( $type ) . '/';
	$file_path .= wecodeart_if( 'is_dev_mode' ) ? $name . '.' . $type :  $name . '.min.' . $type;

    return asset( $file_path )->get_uri();
}