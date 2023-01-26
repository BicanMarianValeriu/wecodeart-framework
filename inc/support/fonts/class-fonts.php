<?php
/**
 * WeCodeArt Framework.
 *
 * WARNING: This file is part of the core WeCodeArt Framework. DO NOT edit this file under any circumstances.
 * Please do all modifications in the form of a child theme.
 *
 * @package 	WeCodeArt Framework
 * @subpackage 	Support\Fonts
 * @copyright   Copyright (c) 2023, WeCodeArt Framework
 * @since 		5.7.1
 * @version		5.7.1
 */

namespace WeCodeArt\Support;

defined( 'ABSPATH' ) || exit;

use WeCodeArt\Singleton;
use WeCodeArt\Integration;
use WeCodeArt\Conditional\Traits\No_Conditionals;

/**
 * The Fonts object.
 */
final class Fonts implements Integration {

    use Singleton;
	use No_Conditionals;

	/**
	 * The CSS ID + Folder for registered style.
	 *
	 * @var string
	 */
	const CSS_ID = 'wp-webfonts';
	const OPTION = 'wecodeart-fonts';
	const FOLDER = 'fonts';
	const CLEANUP_FREQUENCY = 'weekly';

	/**
	 * Google Fonts.
	 *
	 * @var	null|object
	 */
	public $Google = null;

	/**
	 * Init
	 */
	public function init() {
		$this->Google = Fonts\Google::get_instance();
	}

	/**
	 * Send to Constructor
	 */
	public function register_hooks() {
		add_action( 'init', 					[ $this, 'schedule_cleanup' ] );
		add_action( 'wecodeart_cleanup_fonts', 	[ __CLASS__, 'clear_cache' 	] );
	}

	/**
	 * Compile font options from different sources.
	 *
	 * @return array    All available fonts.
	 */
	public static function get_fonts( string $type = 'all' ) {
		$data = [];

		switch ($type):
			case 'all':
				$data = array_merge( self::get_standard_fonts(), self::get_google_fonts() );
			break;
			case 'system':
				$data = self::get_standard_fonts();
			break;
			case 'google':
				$data = self::get_google_fonts();
			break;
		endswitch;

		return $data;
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
	 * Return an array of standard websafe fonts.
	 *
	 * @return array    Standard websafe fonts.
	 */
	public static function get_google_fonts() {
		return apply_filters( 'wecodeart/filter/fonts/google', Fonts::get_instance()->Google::get_fonts() );
	}

	/**
	 * Returns an array of all available subsets.
	 *
	 * @return array
	 */
	public static function get_subsets() {
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
	 * Clear All Caches.
	 *
	 * @return boolean.
	 */
	public static function clear_cache() {
		// Clear Saved Option
		delete_option( self::OPTION );

		// Clear Google Cache
		Fonts::get_instance()->Google::clear_cache();

		// Clear Folder
		wecodeart( 'files' )->set_folder( 'fonts' );

		$objects = new \RecursiveDirectoryIterator( wecodeart( 'files' )->folder );
		foreach( $objects as $name => $object ) {
			$parts 	= explode( DIRECTORY_SEPARATOR, $name );
			$name 	= end( $parts );

			if( in_array( $name, [ '.', '..' ] ) ) continue;

			wecodeart( 'files' )->clean_folder( $name );
		}

		wecodeart( 'files' )->set_folder( '' );

		return true;
	}

	/**
	 * Schedule a cleanup.
	 *
	 * @return void
	 */
	public function schedule_cleanup() {
		if ( ! is_multisite() || ( is_multisite() && is_main_site() ) ) {
			if ( ! wp_next_scheduled( 'wecodeart_cleanup_fonts' ) && ! wp_installing() ) {
				wp_schedule_event( time(), self::CLEANUP_FREQUENCY, 'wecodeart_cleanup_fonts' );
			}
		}
	}
}