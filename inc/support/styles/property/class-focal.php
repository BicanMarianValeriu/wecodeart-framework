<?php
/**
 * WeCodeArt Framework.
 *
 * WARNING: This file is part of the core WeCodeArt Framework. DO NOT edit this file under any circumstances.
 * Please do all modifications in the form of a child theme.
 *
 * @package 	WeCodeArt Framework
 * @subpackage 	Support\Styles\Property\FontFamily
 * @copyright   Copyright (c) 2021, WeCodeArt Framework
 * @since 		5.0.0
 * @version		5.0.0
 */

namespace WeCodeArt\Support\Styles\Property;

defined( 'ABSPATH' ) || exit();

use WeCodeArt\Support\Styles;

/**
 * Output for CSS properties.
 */
class Focal extends Styles\Property {
	/**
	 * Modifies the value.
	 *
	 * @access protected
	 */
	protected function process_value() {
		$processed = '';

		if ( is_array( $this->value ) && isset( $this->value['x'] ) && isset( $this->value['y'] ) ) {
			$processed = ( $this->value['x'] * 100 ) . '% ' . ( $this->value['y'] * 100 ) . '%';
		}
		
		$this->value = esc_attr( $processed );
	}
}