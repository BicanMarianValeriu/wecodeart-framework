<?php
/**
 * WeCodeArt Framework
 *
 * WARNING: This file is part of the core WeCodeArt Framework. DO NOT edit this file under any circumstances.
 * Please do all modifications in the form of a child theme.
 *
 * @package		WeCodeArt Framework
 * @subpackage  Gutenberg CSS Frontend
 * @copyright   Copyright (c) 2023, WeCodeArt Framework
 * @since		5.2.8
 * @version		6.2.7
 */

namespace WeCodeArt\Gutenberg\Modules\Styles\Blocks;

defined( 'ABSPATH' ) || exit();

use WeCodeArt\Singleton;
use WeCodeArt\Gutenberg\Blocks\Post\Image;
use WeCodeArt\Gutenberg\Modules\Styles\Processor;
use function WeCodeArt\Functions\get_prop;

/**
 * Block CSS Processor
 */
class Featured extends Processor {
	/**
	 * Parses an output and creates the styles array for it.
	 *
	 * @return 	void
	 */
	protected function process_extra(): void {
		$declarations	= [];

		if( $value = get_prop( $this->attrs, 'aspectRatio' ) ) {
			$declarations['aspect-ratio'] = $value;
		}
		
		$this->add_declarations( $declarations );

		// Reset
		$declarations 	= [];

		if( $width = get_prop( $this->attrs, 'width' ) ) {
			$declarations['width'] = $width . 'px';
		}

		if( $height = get_prop( $this->attrs, 'height' ) ) {
			$declarations['height'] = $height . 'px';
		}

		if( $value = get_prop( $this->attrs, 'scale' ) ) {
			$declarations['object-fit'] = $value;
		}

		$this->add_declarations( $declarations, $this->get_selector( ' img' ) );
	}

	/**
	 * Additional selectors to remove styles from.
	 *
	 * @return 	array
	 */
	public function remove_style(): array {
		return [ 'tag_name' => 'a' ];
	}
}