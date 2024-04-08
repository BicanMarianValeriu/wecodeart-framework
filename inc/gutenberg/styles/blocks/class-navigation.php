<?php
/**
 * WeCodeArt Framework
 *
 * WARNING: This file is part of the core WeCodeArt Framework. DO NOT edit this file under any circumstances.
 * Please do all modifications in the form of a child theme.
 *
 * @package		WeCodeArt Framework
 * @subpackage  Gutenberg CSS Frontend
 * @copyright   Copyright (c) 2024, WeCodeArt Framework
 * @since		5.1.3
 * @version		6.3.7
 */

namespace WeCodeArt\Gutenberg\Styles\Blocks;

defined( 'ABSPATH' ) || exit;

use WeCodeArt\Singleton;
use WeCodeArt\Gutenberg\Styles\Processor;
use function WeCodeArt\Functions\get_prop;

/**
 * Block CSS Processor
 */
class Navigation extends Processor {
	/**
	 * Parses an output and creates the styles array for it.
	 *
	 * @return 	void
	 */
	protected function process_style(): void {
		// Navigation background
		if ( $value = get_prop( $this->attrs, 'customBackgroundColor' ) ) {
			$this->add_declarations( [
				'background-color' => $value
			] );
		}

		// Navigation item color.
		if ( $value = get_prop( $this->attrs, 'customTextColor' ) ) {
			$this->add_declarations( [
				'color' => $value
			], $this->get_selector( ' .navbar-nav .nav-link' ) );
		}
		
		// Dropdown items.
		$dropdown_selector 	= $this->get_selector( ' .dropdown-menu' );
		$dropdown_rules		= [];

		// Dropdown items color.
		if ( $value = get_prop( $this->attrs, 'overlayTextColor' ) ) {
			$dropdown_rules['--wp--dropdown-color'] = sprintf( 'var(--wp--preset--color--%s)', $value );
		}
		
		if ( $value = get_prop( $this->attrs, 'customOverlayTextColor' ) ) {
			$dropdown_rules['--wp--dropdown-color'] = $value;
		}

		// Dropdown items background color.
		$hex_color 		= null;
		$named_color 	= null;

		if ( $value = get_prop( $this->attrs, 'overlayBackgroundColor' ) ) {
			$named_color = $value;

			$dropdown_rules['--wp--dropdown-bg']			= sprintf( 'var(--wp--preset--color--%s)', $value );
			$dropdown_rules['--wp--dropdown-border-color'] 	= sprintf( 'var(--wp--preset--color--%s)', $value );
		}

		if ( $value = get_prop( $this->attrs, 'customOverlayBackgroundColor' ) ) {
			$hex_color = $value;
			
			$dropdown_rules['--wp--dropdown-bg']			= $value;
			$dropdown_rules['--wp--dropdown-border-color'] 	= $value;
		}

		// Dropdown active state
		if( $named_color !== null ) {
			$palette 	= wecodeart_json( [ 'settings', 'color', 'palette' ], [] );
			$hex_color	= get_prop( current( wp_list_filter( $palette, [ 'slug' => $named_color ] ) ), 'color' );
		}

		if( $hex_color !== null ) {
			$darken_color = wecodeart( 'styles' )::hex_brightness( $hex_color, -25 );

			$dropdown_rules['--wp--dropdown-link-hover-bg']		= $darken_color;
			$dropdown_rules['--wp--dropdown-link-active-bg']	= $darken_color;
		}

		if( ! empty( $dropdown_rules ) ) {
			$this->add_declarations( $dropdown_rules, $dropdown_selector );
		}

		parent::process_style();
	}
}