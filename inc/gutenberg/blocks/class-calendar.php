<?php
/**
 * WeCodeArt Framework
 *
 * WARNING: This file is part of the core WeCodeArt Framework. DO NOT edit this file under any circumstances.
 * Please do all modifications in the form of a child theme.
 *
 * @package		WeCodeArt Framework
 * @subpackage  Gutenberg\Blocks
 * @copyright   Copyright (c) 2021, WeCodeArt Framework
 * @since		5.0.0
 * @version		5.0.0
 */

namespace WeCodeArt\Gutenberg\Blocks;

defined( 'ABSPATH' ) || exit();

use WeCodeArt\Markup;
use WeCodeArt\Singleton;
use function WeCodeArt\Functions\get_prop;

/**
 * Gutenberg Calendar block.
 */
class Calendar extends Dynamic {

	use Singleton;

	/**
	 * Shortcircuit Register
	 */
	public function register_block_type() {
		add_filter( 'render_block', [ $this, 'filter_render' ], 10, 2 );
	}

	/**
	 * Filter calendar markup
	 *
	 * @param	string 	$block_content
	 * @param	array 	$block
	 */
	public function filter_render( $block_content, $block ) {		
		if ( 'core/calendar' !== $block['blockName'] ) {
			return $block_content;
		}

		return $this->render( get_prop( $block, 'attrs', [] ), $block_content );
	}

	/**
	 * Dynamically renders the `core/calendar` block.
	 *
	 * @param 	array 	$attributes The block attributes.
	 *
	 * @return 	string 	The block markup.
	 */
	public function render( $attributes = [], $content = '' ) {
		$doc = $this->load_html( $content );
		
		// Table Changes
		$table 		= $doc->getElementsByTagName( 'table' )->item(0);
		$table_cls  = [ $table->getAttribute( 'class' ), 'table', 'table-bordered', 'table-hover' ];
		
		// Set Table Attributes
		$table->removeAttribute( 'id' );
		$table->setAttribute( 'class', join( ' ', array_filter( $table_cls ) ) );

		return $doc->saveHTML();
	}
}
