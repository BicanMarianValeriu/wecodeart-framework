<?php
/**
 * WeCodeArt Framework
 *
 * WARNING: This file is part of the core WeCodeArt Framework. DO NOT edit this file under any circumstances.
 * Please do all modifications in the form of a child theme.
 *
 * @package		WeCodeArt Framework
 * @subpackage  Gutenberg\Blocks
 * @copyright   Copyright (c) 2023, WeCodeArt Framework
 * @since		5.0.0
 * @version		5.7.2
 */

namespace WeCodeArt\Gutenberg\Blocks\Widgets;

defined( 'ABSPATH' ) || exit();

use WeCodeArt\Singleton;
use WeCodeArt\Gutenberg\Blocks\Dynamic;
use function WeCodeArt\Functions\get_prop;

/**
 * Gutenberg Calendar block.
 */
class Calendar extends Dynamic {

	use Singleton;

	/**
	 * Block namespace.
	 *
	 * @var string
	 */
	protected $namespace = 'core';

	/**
	 * Block name.
	 *
	 * @var string
	 */
	protected $block_name = 'calendar';

	/**
	 * Shortcircuit Register
	 */
	public function register() {
		\add_filter( 'render_block_core/' . $this->block_name, [ $this, 'render' ], 10, 2 );
	}

	/**
	 * Dynamically renders the `core/calendar` block.
	 *
	 * @param 	string 	$content 	The block markup.
	 * @param 	array 	$block 		The parsed block.
	 *
	 * @return 	string 	The block markup.
	 */
	public function render( $content = '', $block = [], $data = null ) {
		// Enqueue Table CSS
		if( ! wp_style_is( 'wp-block-table' ) ) {
			wp_add_inline_style(
				'wp-block-' . $this->block_name, 
				wecodeart( 'styles' )::compress( wecodeart( 'blocks' )->get( 'core/table' )::get_instance()->styles() )
			);
		}

		// Remove ID
		$content = preg_replace( '/(<[^>]+) id=".*?"/i', '$1', $content, 1 );
		// Add Bootstrap Classes
		$content = preg_replace( '/' . preg_quote( 'table class="', '/' ) . '/', 'table class="table table-bordered table-hover ', $content, 1 );

		return $content;
	}

	/**
	 * Block styles
	 *
	 * @return 	string 	The block styles.
	 */
	public function styles() {
		return "
		.wp-block-calendar {
			text-align: center;
		}
		.wp-block-calendar caption {
			color: var(--wp--preset--color--dark);
			font-size: var(--wp--preset--font-size--large);
			margin-bottom: var(--wp--style--block-gap);
		}
		.wp-block-calendar .wp-calendar-table {
			text-align: inherit;
			caption-side: top;
			width: 100%;
		}
		.wp-block-calendar .wp-calendar-table thead {
			background-color: var(--wp--preset--color--light);
		}
		.wp-block-calendar .wp-calendar-nav {
			margin-bottom: 1.5rem;
		}
		";
	}
}
