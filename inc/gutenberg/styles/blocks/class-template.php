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
 * @since		6.2.3
 * @version		6.4.5
 */

namespace WeCodeArt\Gutenberg\Styles\Blocks;

defined( 'ABSPATH' ) || exit;

use WeCodeArt\Gutenberg\Styles\Processor;
use function WeCodeArt\Functions\get_prop;

/**
 * Block CSS Processor
 */
class Template extends Processor {
	/**
	 * Parses an output and creates the styles array for it.
	 *
	 * @return 	void
	 */
	protected function process_style(): void {
		$declarations = [];

		// Gap
		if( $gap = get_prop( $this->attrs, [ 'style', 'spacing', 'blockGap' ] ) ) {	
			if ( is_array( $gap ) ) {
				$gap_y	= get_prop( $gap, [ 'top' ] );
				$gap_x	= get_prop( $gap, [ 'left' ] );

				$gap_x = wecodeart( 'styles' )::format_variable( $gap_x );
				$gap_y = wecodeart( 'styles' )::format_variable( $gap_y );

				$declarations['--wp--style--block-gap'] = $gap_x;

				if( $gap_y !== $gap_x ) {
					$declarations['grid-row-gap'] = $gap_y;
				}
			} else {
				$declarations['--wp--style--block-gap'] = wecodeart( 'styles' )::format_variable( $gap );
			}
		}

		if( ! empty( $declarations ) ) {
			$this->add_declarations( $declarations );
		}

		parent::process_style();
	}
}