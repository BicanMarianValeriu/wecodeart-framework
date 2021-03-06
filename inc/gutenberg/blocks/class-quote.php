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
 * Gutenberg Quote block.
 */
class Quote extends Dynamic {

	use Singleton;

	/**
	 * Shortcircuit Register
	 */
	public function register_block_type() {
		add_filter( 'render_block', [ $this, 'filter_render' ], 10, 2 );
	}

	/**
	 * Filter table markup
	 *
	 * @param	string 	$block_content
	 * @param	array 	$block
	 */
	public function filter_render( $block_content, $block ) {		
		if ( 'core/quote' !== $block['blockName'] ) {
			return $block_content;
		}

		return $this->render( get_prop( $block, 'attrs', [] ), $block_content );
	}

	/**
	 * Dynamically renders the `core/quote` block.
	 *
	 * @param 	array 	$attributes The block attributes.
	 *
	 * @return 	string 	The block markup.
	 */
	public function render( $attributes = [], $content = '' ) {
		$doc = $this->load_html( $content );
		
		// Quote Changes
		$quote	= $doc->getElementsByTagName( 'blockquote' )->item(0);
		$figure	= $doc->createElement( 'figure' );
		$figure->setAttribute( 'class', $quote->getAttribute( 'class' ) );
		$quote->setAttribute( 'class', 'blockquote' );
		$quote->parentNode->replaceChild( $figure, $quote );
		$figure->appendChild( $quote );

		// Cite Changes
		$caption	= $doc->createElement( 'figcaption' );
		$caption->setAttribute( 'class', 'blockquote-footer' );

		$cite	= $doc->getElementsByTagName( 'cite' )->item(0);
		$cite->parentNode->replaceChild( $caption, $cite );
		$caption->appendChild( $cite );

		return $doc->saveHTML();
	}
}
