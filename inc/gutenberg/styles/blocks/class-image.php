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
 * @since		6.3.3
 * @version		6.3.7
 */

namespace WeCodeArt\Gutenberg\Styles\Blocks;

defined( 'ABSPATH' ) || exit;

use WeCodeArt\Singleton;
use WeCodeArt\Gutenberg\Styles;
use WeCodeArt\Gutenberg\Styles\Processor;
use function WeCodeArt\Functions\get_prop;

/**
 * Block CSS Processor
 */
class Image extends Processor {
	/**
	 * Parses an output and creates the styles array for it.
	 *
	 * @return 	void
	 */
	protected function process_style(): void {
		$declarations 	= [];

		// Apply styles to inner selectors.
		wp_style_engine_get_styles( [
			'border'	=> get_prop( $this->attrs, [ 'style', 'border' ] ),
		], [
			'selector' 	=> $this->get_selector( ' :where(img,svg)' ),
			'context'	=> Styles::CONTEXT
		] );

		// Unset the above so they are not applied to main selector.
		$this->attrs['style']['border']	= $this->attrs['style']['border'] ?? null;
		unset( $this->attrs['style']['border'] );
		
		// Handle width
		if ( $value = get_prop( $this->attrs, 'width' ) ) {
			$declarations['width'] = $value;
		}

		// Handle height
		if ( $value = get_prop( $this->attrs, 'height' ) ) {
			$declarations['height'] = $value;
		}
		
		// Handle aspect ratio
		if ( $value = get_prop( $this->attrs, 'aspectRatio' ) ) {
			$declarations['aspect-ratio'] = $value;
		}
		
		// Handle object fit
		if ( $value = get_prop( $this->attrs, 'scale' ) ) {
			$declarations['object-fit'] = $value;
		}

		if( ! empty( $declarations ) ) {
			$this->add_declarations( $declarations, $this->get_selector( ' :where(img,svg)' ) );
		}

		parent::process_style();
	}

	/**
	 * Additional selectors to remove styles from.
	 *
	 * @return 	array
	 */
	public function remove_style(): array {
		return [ 
			[ 'tag_name' => 'IMG' ]
		];
	}
}