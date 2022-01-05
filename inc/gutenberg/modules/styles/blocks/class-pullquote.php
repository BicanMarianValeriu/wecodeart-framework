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
 * @version		5.0.0
 */

namespace WeCodeArt\Gutenberg\Modules\Styles\Blocks;

defined( 'ABSPATH' ) || exit();

use WeCodeArt\Singleton;
use WeCodeArt\Gutenberg\Modules\Styles\Blocks as Base;
use function WeCodeArt\Functions\get_prop;

/**
 * Block CSS Processor
 */
class PullQuote extends Base {
	/**
	 * Parses an output and creates the styles array for it.
	 *
	 * @return 	null
	 */
	protected function process_extra() {		
		$output 			= [];
		$output['element'] 	= $this->element;
		
		// Block Attributes
		if ( $value = get_prop( $this->attrs, 'customMainColor', false ) ) {
			$class_name = explode( ' ', get_prop( $this->attrs, 'className', '' ) );
			$main_prop 	= in_array( 'is-style-solid-color', $class_name, true ) ? 'background-color' : 'border-color'; 
			$this->output[] = wp_parse_args( [
				'property' 	=> $main_prop,
				'value'	  	=> $value,
			], $output );
		}
		
		if ( $value = get_prop( $this->attrs, 'customTextColor', false ) ) {
			$this->output[] = wp_parse_args( [
				'property' 	=> 'color',
				'value'	  	=> $value,
			], $output );
		}
	}
}