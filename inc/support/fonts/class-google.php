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
 * @since 		4.2.0
 * @version		4.2.0
 */

namespace WeCodeArt\Support\Fonts;

defined( 'ABSPATH' ) || exit;

use WeCodeArt\Support\Fonts;
use function WeCodeArt\Functions\get_prop;

/**
 * Manages the way Google Fonts are enqueued.
 */
final class Google {

	use \WeCodeArt\Singleton;

	/**
	 * If set to true, forces loading ALL variants.
	 *
	 * @static
	 * @access 	public
	 * @var 	bool
	 */
	public static $force_load_all_variants = false;

	/**
	 * The array of fonts
	 *
	 * @access 	public
	 * @var 	array
	 */
	public $fonts = [];

	/**
	 * An array of all google fonts.
	 *
	 * @access 	private
	 * @var 	array
	 */
	private $google_fonts = [];

	/**
	 * The class constructor.
	 */
	private function init() {
		// Populate the array of google fonts.
		$this->google_fonts = Fonts::get_google_fonts();
	}

	/**
	 * Processes the arguments of a field
	 * determines if it's a typography field, then takes appropriate actions.
	 *
	 * @param array $args The field arguments.
	 */
	public function generate_font( $args ) {
		// Process typography fields.
		if ( isset( $args['control'] ) && 'wecodeart-fonts' === $args['control'] ) {

			// Get the value.
			$value = get_theme_mod( $args['name'] );

			// If we don't have a font-family then we can skip this.
			if ( ! isset( $value['family'] ) || ! Fonts::is_google_font( $value['family'] ) ) {
				return;
			}

			// Add the requested google-font.
			if ( ! isset( $this->fonts[ $value['family'] ] ) ) {
				$this->fonts[ $value['family'] ] = [
					'family' 	=> $value['family'],
					'variants' 	=> $value['variants'] ?: [ 'regular' ],
				];
			}

			// Are we force-loading all variants?
			if ( true === self::$force_load_all_variants ) {
				$all_variants = Fonts::get_all_variants();
				$this->fonts[ $value['family'] ]['variants'] = array_keys( $all_variants );
			}

			return;
		}

		// Process non-typography fields.
		if ( isset( $args['output'] ) && is_array( $args['output'] ) ) {
			foreach ( $args['output'] as $output ) {

				// If we don't have a typography-related output argument we can skip this.
				if ( ! isset( $output['property'] ) || ! in_array( $output['property'], [ 'font-family', 'font-weight' ], true ) ) {
					continue;
				}

				// Get the value.
				$value = get_theme_mod( $args['name'] );

				if ( is_string( $value ) ) {
					if ( 'font-family' === $output['property'] ) {
						if ( ! array_key_exists( $value, $this->fonts ) ) {
							$this->fonts[ $value ] = [
								'family' => $value
							];
						}
					} elseif ( 'font-weight' === $output['property'] ) {
						foreach ( $this->fonts as $key => $font ) {
							if ( ! in_array( $value, $font['variants'], true ) ) {
								$this->fonts[ $key ]['variants'] = $value;
							}
						}
					}
				}
			}
		}
	}

	/**
	 * Determines the vbalidity of the selected font as well as its properties.
	 * This is vital to make sure that the google-font script that we'll generate later
	 * does not contain any invalid options.
	 */
	public function process_fonts() {
		// Early exit if font-family is empty.
		if ( empty( $this->fonts ) ) {
			return $this;
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

		return $this;
	}

	/**
	 * Goes through all our fields and then populates the $this->fonts property.
	 *
	 * @access public
	 */
	public function loop_fields() {
		$configurations = [
			[
				'name'			=> 'general-typography-primary',
				'control'  		=> 'wecodeart-fonts',
			]
		];
		
		foreach ( $configurations as $field ) $this->generate_font( $field );

		return $this;
	}
}