<?php
/**
 * WeCodeArt Framework.
 *
 * WARNING: This file is part of the core WeCodeArt Framework. DO NOT edit this file under any circumstances.
 * Please do all modifications in the form of a child theme.
 *
 * @package 	WeCodeArt Framework
 * @subpackage 	WP-Customizer Styles
 * @copyright   Copyright (c) 2021, WeCodeArt Framework
 * @since 		5.0.0
 * @version		5.0.0
 */

namespace WeCodeArt\Admin\Customizer\Modules\Styles\Controls;

defined( 'ABSPATH' ) || exit();

use WeCodeArt\Admin\Customizer\Modules\Styles\Controls as Control_Processor;
use function WeCodeArt\Functions\get_prop;

/**
 * Customizer Font Output
 */
class Font extends Control_Processor {
	/**
	 * Processes a single item from the `output` array.
	 *
	 * @param 	array	$output	The `output` item.
	 *
	 * @return 	void
	 */
	protected function process_output( $output ) {
		$output = wp_parse_args( $output, [
			'media_query' => 'global',
			'element'     => 'body',
			'prefix'      => '',
			'suffix'      => '',
		] );

		$value = get_prop( $output, 'value' );
		
		// Value is already sanitized before being added in DB (customizer controls), however
		// The generated styles array is sanitized again based on property/value when the CSS string is generated
		$value = $output['prefix'] . $this->get_property_value( 'font-family', $value ) . $output['suffix'];

		$this->styles[ $output['media_query'] ][ $output['element'] ][ $output['property'] ] = $value;
	}
}