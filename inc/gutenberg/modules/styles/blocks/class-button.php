<?php
/**
 * WeCodeArt Framework
 *
 * WARNING: This file is part of the core WeCodeArt Framework. DO NOT edit this file under any circumstances.
 * Please do all modifications in the form of a child theme.
 *
 * @package		WeCodeArt Framework
 * @subpackage  Gutenberg CSS Frontend
 * @copyright   Copyright (c) 2022, WeCodeArt Framework
 * @since		5.0.0
 * @version		5.1.2
 */

namespace WeCodeArt\Gutenberg\Modules\Styles\Blocks;

defined( 'ABSPATH' ) || exit();

use WeCodeArt\Singleton;
use WeCodeArt\Gutenberg\Modules\Styles\Blocks as Base;
use function WeCodeArt\Functions\get_prop;

/**
 * Block CSS Processor
 */
class Button extends Base {
	/**
	 * Parses an output and creates the styles array for it.
	 *
	 * @return 	null
	 */
	protected function process_extra() {
		$this->output 		= []; // Reset output		
		$output 			= [];
		$output['element'] 	= join( '>', [ $this->element, '.wp-block-button__link' ] );

		// Inline Style
		if( $css_style = get_prop( $this->attrs, 'style', false ) ) {
			// Spacing
			if( $spacing = get_prop( $css_style, 'spacing', false ) ) {
				if ( $padding = get_prop( $spacing, 'padding', [] ) ) {
					if( ! empty( $padding ) ) {
						foreach( $padding as $dir => $val ) {
							$this->output[] = wp_parse_args( [
								'property' 	=> 'padding-' . $dir,
								'value'	  	=> $val
							], $output );
						}
					}
				}
			}

			// Border
			if( $border = get_prop( $css_style, 'border', [] ) ) {
				if ( $value = get_prop( $border, 'radius', false ) ) {
					$this->output[] = wp_parse_args( [
						'property' 	=> 'border-radius',
						'value'	  	=> $value
					], $output );
				}
			}

			// Colors
			if ( $color = get_prop( $css_style, 'color', false ) ) {
				// Text
				if ( $value = get_prop( $color, 'text', false ) ) {
					$this->output[] = wp_parse_args( [
						'property' 	=> '--wp--color',
						'value'	  	=> $value
					], $output );
					$this->output[] = wp_parse_args( [
						'property' 	=> 'color',
						'value'	  	=> $value
					], $output );
				}
				// Background
				if ( $value = get_prop( $color, 'background', false ) ) {
					$this->output[] = wp_parse_args( [
						'property' 	=> 'background-color',
						'value'	  	=> $value
					], $output );
				}
				// Gradient
				if ( $value = get_prop( $color, 'gradient', false ) ) {
					$this->output[] = wp_parse_args( [
						'property' 	=> 'background-image',
						'value'	  	=> $value
					], $output );
				}
			}
		}
	}
}