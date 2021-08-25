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

namespace WeCodeArt\Support;

defined( 'ABSPATH' ) || exit;

use WeCodeArt\Singleton;
use WeCodeArt\Customizer;
use WeCodeArt\Integration;
use WeCodeArt\Admin\Request;
use function WeCodeArt\Functions\get_prop;

/**
 * The Fonts object.
 */
final class Fonts implements Integration {

    use Singleton;

	/**
	 * An array of our google fonts.
	 *
	 * @var	array
	 */
	public static $google_fonts = [];
	
	/**
	 * Google Fonts.
	 *
	 * @var	null|object
	 */
	public $google = null;

	/**
	 * Get Conditionals
	 *
	 * @return void
	 */
	public static function get_conditionals() {
		wecodeart( 'conditionals' )->set( [
			'with_fonts' => Fonts\Condition::class,
		] );
		
		return [ 'with_fonts' ];
	}

	/**
	 * Send to Constructor
	 */
	public function register_hooks() {
		$this->google = Fonts\Google::get_instance();
	}

	/**
	 * Compile font options from different sources.
	 *
	 * @return array    All available fonts.
	 */
	public static function get_all_fonts() {
		$standard_fonts = self::get_standard_fonts();
		$google_fonts   = self::get_google_fonts();
		return apply_filters( 'wecodeart/filter/support/fonts', array_merge( $standard_fonts, $google_fonts ) );
	}

	/**
	 * Return an array of standard websafe fonts.
	 *
	 * @return array    Standard websafe fonts.
	 */
	public static function get_standard_fonts() {
		return apply_filters( 'wecodeart/filter/fonts/standard', [
			[
				'family' => 'Arial, Helvetica, sans-serif'
			],
			[
				'family' => 'Arial Black, Gadget, sans-serif'
			],
			[
				'family' => 'Bookman Old Style, serif'
			],
			[
				'family' => 'Comic Sans MS, cursive'
			],
			[
				'family' => 'Courier, monospace'
			],
			[
				'family' => 'Georgia, serif'
			],
			[
				'family' => 'Garamond, serif'
			],
			[
				'family' => 'Impact, Charcoal, sans-serif'
			],
			[
				'family' => 'Lucida Console, Monaco, monospace'
			],  
			[
				'family' => 'Lucida Sans Unicode, Lucida Grande, sans-serif'
			],  
			[
				'family' => 'MS Sans Serif, Geneva, sans-serif'
			],  
			[
				'family' => 'Palatino Linotype, Book Antiqua, Palatino, serif'
			],  
			[
				'family' => 'Tahoma, Geneva, sans-serif'
			],  
			[
				'family' => 'Times New Roman, Times, serif'
			],
			[
				'family' => 'Trebuchet MS, Helvetica, sans-serif'
			],
			[
				'family' => 'Verdana, Geneva, sans-serif'
			],
			[
				'family' => 'Paratina Linotype'
			],
			[
				'family' => 'Trebuchet MS'
			],
		] );
	}

	/**
	 * Return an array of all available Google Fonts.
	 *
	 * @return array    All Google Fonts.
	 */
	public static function get_google_fonts() {
        if ( false === ( $results = get_transient( 'wecodeart/fonts/google' ) ) ) {
			// It wasn't there, so regenerate the data and save the transient
			$request_url    = add_query_arg( [
                'key' => 'AIzaSyBwIX97bVWr3-6AIUvGkcNnmFgirefZ6Sw'
            ], 'https://www.googleapis.com/webfonts/v1/webfonts' );
			$request        = new Request( $request_url, [] );
			$request->send( $request::METHOD_GET );

            $results = $request->get_response_body();
            $results = json_decode( $results, true );

			if( json_last_error() === JSON_ERROR_NONE ) {
				$results = array_map( function( $item ) {
					return wp_array_slice_assoc( $item, [ 'family', 'variants', 'subsets' ] );
				}, get_prop( $results, 'items', [] ) );
	
				set_transient( 'wecodeart/fonts/google', $results, WEEK_IN_SECONDS );   
			}
        }

        self::$google_fonts = apply_filters( 'wecodeart/filter/fonts/google', $results );

        return self::$google_fonts;
	}

	/**
	 * Returns an array of all available subsets.
	 *
	 * @return array
	 */
	public static function get_google_font_subsets() {
		return [
            'cyrillic'     => 'Cyrillic',
			'cyrillic-ext' => 'Cyrillic Extended',
			'devanagari'   => 'Devanagari',
			'greek'        => 'Greek',
			'greek-ext'    => 'Greek Extended',
			'khmer'        => 'Khmer',
			'latin'        => 'Latin',
			'latin-ext'    => 'Latin Extended',
			'vietnamese'   => 'Vietnamese',
			'hebrew'       => 'Hebrew',
			'arabic'       => 'Arabic',
			'bengali'      => 'Bengali',
			'gujarati'     => 'Gujarati',
			'tamil'        => 'Tamil',
			'telugu'       => 'Telugu',
			'thai'         => 'Thai',
        ];
	}

	/**
	 * Returns an array of all available variants.
	 *
	 * @return array
	 */
	public static function get_all_variants() {
		return [
            '100'       => esc_html__( 'Ultra-Light 100', 'wecodeart' ),
			'100light'  => esc_html__( 'Ultra-Light 100', 'wecodeart' ),
			'100italic' => esc_html__( 'Ultra-Light 100 Italic', 'wecodeart' ),
			'200'       => esc_html__( 'Light 200', 'wecodeart' ),
			'200italic' => esc_html__( 'Light 200 Italic', 'wecodeart' ),
			'300'       => esc_html__( 'Book 300', 'wecodeart' ),
			'300italic' => esc_html__( 'Book 300 Italic', 'wecodeart' ),
			'400'       => esc_html__( 'Normal 400', 'wecodeart' ),
			'regular'   => esc_html__( 'Normal 400', 'wecodeart' ),
			'italic'    => esc_html__( 'Normal 400 Italic', 'wecodeart' ),
			'500'       => esc_html__( 'Medium 500', 'wecodeart' ),
			'500italic' => esc_html__( 'Medium 500 Italic', 'wecodeart' ),
			'600'       => esc_html__( 'Semi-Bold 600', 'wecodeart' ),
			'600bold'   => esc_html__( 'Semi-Bold 600', 'wecodeart' ),
			'600italic' => esc_html__( 'Semi-Bold 600 Italic', 'wecodeart' ),
			'700'       => esc_html__( 'Bold 700', 'wecodeart' ),
			'700italic' => esc_html__( 'Bold 700 Italic', 'wecodeart' ),
			'800'       => esc_html__( 'Extra-Bold 800', 'wecodeart' ),
			'800bold'   => esc_html__( 'Extra-Bold 800', 'wecodeart' ),
			'800italic' => esc_html__( 'Extra-Bold 800 Italic', 'wecodeart' ),
			'900'       => esc_html__( 'Ultra-Bold 900', 'wecodeart' ),
			'900bold'   => esc_html__( 'Ultra-Bold 900', 'wecodeart' ),
			'900italic' => esc_html__( 'Ultra-Bold 900 Italic', 'wecodeart' ),
        ];
	}

	/**
	 * Determine if a font-name is a valid google font or not.
	 *
	 * @param   string 	$fontname The name of the font we want to check.
	 *
	 * @return  bool
	 */
	public static function is_google_font( $fontname ) {
		return ( count( wp_list_filter( self::$google_fonts, [ 'family' => $fontname ] ) ) );
	}
}