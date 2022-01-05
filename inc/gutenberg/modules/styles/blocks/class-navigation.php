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
 * @since		5.1.3
 * @version		5.3.3
 */

namespace WeCodeArt\Gutenberg\Modules\Styles\Blocks;

defined( 'ABSPATH' ) || exit();

use WeCodeArt\Singleton;
use WeCodeArt\Gutenberg\Modules\Styles\Blocks as Base;
use function WeCodeArt\Functions\get_prop;

/**
 * Block CSS Processor
 */
class Navigation extends Base {
	/**
	 * Parses an output and creates the styles array for it.
	 *
	 * @return 	null
	 */
	protected function process_extra() {	
		$output 			= [];
		$output['element'] 	= $this->element;
		
		// Navigation background
		if ( $value = get_prop( $this->attrs, 'customBackgroundColor' ) ) {
			$this->output[] = wp_parse_args( [
				'property' 	=> 'background-color',
				'value'	  	=> $value
			], $output );
		}

		// Navigation item color
		if ( $value = get_prop( $this->attrs, 'customTextColor' ) ) {
			$this->output[] = wp_parse_args( [
				'element'	=> join( ' ', [ $this->element, '.navbar-nav', '.nav-link' ] ),
				'property' 	=> 'color',
				'value'	  	=> $value
			], $output );
		}
		
		// Dropdowns items
		$output['element'] = join( ' ', [ $this->element, '.wp-block-navigation-link__content' ] );
		if ( $value = get_prop( $this->attrs, 'fontSize' ) ) {
			$this->output[] = wp_parse_args( [
				'property' 	=> 'font-size',
				'value'	  	=> sprintf( 'var(--wp--preset--font-size--%s)', $value )
			], $output );
		}
		
		if ( $typography = get_prop( $this->attrs, [ 'style', 'typography' ], [] ) ) {
			if ( $value = get_prop( $typography, [ 'fontFamily' ] ) ) {
				$this->output[] = wp_parse_args( [
					'property' 	=> 'font-family',
					'value'	  	=> sprintf( 'var(--wp--preset--font-family--%s)', $value )
				], $output );
			}

			if ( $value = get_prop( $typography, [ 'fontSize' ] ) ) {
				$this->output[] = wp_parse_args( [
					'property' 	=> 'font-size',
					'value'	  	=> $value
				], $output );
			}

			if ( $value = get_prop( $typography, [ 'fontStyle' ] ) ) {
				$this->output[] = wp_parse_args( [
					'property' 	=> 'font-style',
					'value'	  	=> $value
				], $output );
			}

			if ( $value = get_prop( $typography, [ 'fontWeight' ] ) ) {
				$this->output[] = wp_parse_args( [
					'property' 	=> 'font-weight',
					'value'	  	=> $value
				], $output );
			}

			if ( $value = get_prop( $typography, [ 'lineHeight' ] ) ) {
				$this->output[] = wp_parse_args( [
					'property' 	=> 'line-height',
					'value'	  	=> $value
				], $output );
			}

			if ( $value = get_prop( $typography, [ 'textTransform' ] ) ) {
				$this->output[] = wp_parse_args( [
					'property' 	=> 'text-transform',
					'value'	  	=> $value
				], $output );
			}

			if ( $value = get_prop( $typography, [ 'textDecoration' ] ) ) {
				$this->output[] = wp_parse_args( [
					'property' 	=> 'text-decoration',
					'value'	  	=> $value
				], $output );
			}
		}

		if ( $value = get_prop( $this->attrs, 'overlayTextColor' ) ) {
			$this->output[] = wp_parse_args( [
				'property' 	=> 'color',
				'value'	  	=> sprintf( 'var(--wp--preset--color--%s)', $value )
			], $output );
		}
		
		if ( $value = get_prop( $this->attrs, 'customOverlayTextColor' ) ) {
			$this->output[] = wp_parse_args( [
				'property' 	=> 'color',
				'value'	  	=> $value
			], $output );
		}

		// Dropdowns item background
		$hex_color 		= null;
		$named_color 	= null;

		if ( $value = get_prop( $this->attrs, 'overlayBackgroundColor' ) ) {
			$named_color = $value;
			$this->output[] = wp_parse_args( [
				'element'	=> join( ' ', [ $this->element, ':where(.dropdown-menu, .dropdown-item)' ] ),
				'property' 	=> 'background-color',
				'value'	  	=> sprintf( 'var(--wp--preset--color--%s)', $value )
			], $output );
			$this->output[] = wp_parse_args( [
				'element'	=> join( ' ', [ $this->element, '.dropdown-menu' ] ),
				'property' 	=> 'border-color',
				'value'	  	=> sprintf( 'var(--wp--preset--color--%s)', $value )
			], $output );
		}

		if ( $value = get_prop( $this->attrs, 'customOverlayBackgroundColor' ) ) {
			$hex_color = $value;
			$this->output[] = wp_parse_args( [
				'element'	=> join( ' ', [ $this->element, ':where(.dropdown-menu, .dropdown-item)' ] ),
				'property' 	=> 'background-color',
				'value'	  	=> $value
			], $output );
			$this->output[] = wp_parse_args( [
				'element'	=> join( ' ', [ $this->element, '.dropdown-menu' ] ),
				'property' 	=> 'border-color',
				'value'	  	=> $value
			], $output );
		}

		// Dropdown active state
		if( $named_color !== null ) {
			$palette 	= wecodeart_json( [ 'settings', 'color', 'palette', 'core' ], [] );
			$palette 	= wecodeart_json( [ 'settings', 'color', 'palette', 'theme' ], $palette );
			$palette 	= wecodeart_json( [ 'settings', 'color', 'palette', 'user' ], $palette );
			$hex_color	= get_prop( current( wp_list_filter( $palette, [ 'slug' => $named_color ] ) ), 'color' );
		}

		if( $hex_color !== null ) {
			$this->output[] = wp_parse_args( [
				'element'	=> join( ' ', [ $this->element, '.dropdown-item:is(.active,:active,:hover,:focus)' ] ),
				'property' 	=> 'background-color',
				'value'	  	=> wecodeart( 'styles' )::hex_brightness( $hex_color, -25 )
			], $output );
		}
	}
}