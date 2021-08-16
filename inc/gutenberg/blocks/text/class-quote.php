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

namespace WeCodeArt\Gutenberg\Blocks\Text;

defined( 'ABSPATH' ) || exit();

use WeCodeArt\Markup;
use WeCodeArt\Singleton;
use WeCodeArt\Gutenberg\Blocks\Dynamic;
use function WeCodeArt\Functions\get_prop;

/**
 * Gutenberg Quote block.
 */
class Quote extends Dynamic {

	use Singleton;

	/**
	 * Block namespace.
	 *
	 * @var string
	 */
	protected $namespace = 'core';

	/**
	 * Block namespace.
	 *
	 * @var string
	 */
	protected $block_name = 'quote';

	/**
	 * Shortcircuit Register
	 */
	public function register_block_type() {
		add_filter( 'render_block_core/quote', [ $this, 'render' ], 10, 2 );
	}

	/**
	 * Dynamically renders the `core/quote` block.
	 *
	 * @param 	string 	$content 	The block markup.
	 * @param 	array 	$block 		The parsed block.
	 *
	 * @return 	string 	The block markup.
	 */
	public function render( $content = '', $block = [], $data = null ) {		
		$doc = $this->load_html( $content );
		
		// Quote Changes
		$quote	= $doc->getElementsByTagName( 'blockquote' )->item(0);
		if( $quote ) {
			$figure	= $doc->createElement( 'figure' );
			$figure->setAttribute( 'class', $quote->getAttribute( 'class' ) );
			$quote->setAttribute( 'class', 'blockquote' );
			$quote->parentNode->replaceChild( $figure, $quote );
			$figure->appendChild( $quote );
		}

		// Cite Changes
		$cite	= $doc->getElementsByTagName( 'cite' )->item(0);
		if( $cite ) {
			$caption = $doc->createElement( 'figcaption' );
			$caption->setAttribute( 'class', 'blockquote-footer' );
			$cite->parentNode->replaceChild( $caption, $cite );
			$caption->appendChild( $cite );
		}

		return $doc->saveHTML();
	}

	/**
	 * Block styles
	 *
	 * @return 	string 	The block styles.
	 */
	public function styles() {
		return "
		.wp-block-quote {
			border-left: 4px solid var( --wp--preset--color--primary );
			padding-left: 1rem;
		}
		.wp-block-quote .is-style-large .blockquote {
			font-size: 2rem;
		}
		.wp-block-quote .is-style-large .blockquote-footer {
			font-size: 1.5rem;
		}		
		.wp-block-quote .blockquote-footer {
			text-align: left;
		}
		";
	}
}
