<?php
/**
 * WeCodeArt Framework.
 *
 * WARNING: This file is part of the core WeCodeArt Framework. DO NOT edit this file under any circumstances.
 * Please do all modifications in the form of a child theme.
 *
 * @package 	WeCodeArt Framework
 * @subpackage 	WP-Customizer Output
 * @copyright   Copyright (c) 2021, WeCodeArt Framework
 * @since 		5.0.0
 * @version		5.0.0
 */

namespace WeCodeArt\Admin\Customizer\Modules\Styles;

defined( 'ABSPATH' ) || exit();

use WeCodeArt\Support\Styles\Processor;
use function WeCodeArt\Functions\get_prop;

/**
 * Customizer Controls CSS Processor
 */
class Controls extends Processor {

	/**
	 * Settings Name.
	 *
	 * @var 	string
	 */
	protected 	$name = '';
	protected 	$type = '';
	protected 	$value = null;

	/**
	 * The class constructor.
	 *
	 * @access 	public
	 * @param 	array        $field     The field.
	 */
	public function __construct( $field ) {
		$this->name 	= get_prop( $field, 'name' );
		$this->type 	= get_prop( $field, 'control' );
		$this->output	= get_prop( $field, 'output', [] );
		$this->value 	= get_theme_mod( $this->name, false );
		
		$this->merge_value();
		$this->generate_font();
		$this->parse_output();
	}

	/**
	 * Merge mod value.
	 *
	 * @return void
	 */
	public function merge_value() {
		foreach( $this->output as $i => $output ) {
			$this->output[$i] = wp_parse_args( [
				'value' => $this->value
			], $output );
		}
	}

	/**
	 * Processes the arguments of a field to generate google font.
	 *
	 * @param void.
	 */
	public function generate_font() {
		if( ! wecodeart_if( 'with_fonts' ) ) return;

		// Process typography fields.
		if ( $this->type === 'wecodeart-fonts' ) {
			// If we don't have a font-family then we can skip this.
			if ( ! isset( $this->value['font-family'] ) ) {
				return;
			}

			wecodeart( 'integrations' )->get( 'fonts' )::get_instance()->google->add_font( $this->value );

			return;
		}

		// Process non-typography fields.
		foreach( $this->output as $output ) {
			// If we don't have a typography-related output argument we can skip this.
			if ( ! isset( $output['property'] ) || ! in_array( $output['property'], [ 'font-family', 'font-weight' ], true ) ) {
				continue;
			}

			if ( is_string( $this->value ) ) {
				$gfonts = wecodeart( 'integrations' )->get( 'fonts' )::get_instance()->google;

				if ( 'font-family' === $output['property'] ) {
					$gfonts->add_font( [
						'font-family'  	=> $this->value,
						'font-weight'	=> [ 'regular' ]
					] );
				} elseif ( 'font-weight' === $output['property'] ) {
					foreach ( $gfonts->fonts as $key => $font ) {
						if ( ! in_array( $value, $font['variants'], true ) ) {
							$gfonts->add_font( [
								'font-family'  	=> $key ,
								'font-weight'	=> [ $value ]
							] );
						}
					}
				}
			}
		}
	}
}