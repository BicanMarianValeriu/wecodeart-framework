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
 * @version		5.3.1
 */

namespace WeCodeArt\Gutenberg\Blocks\Design;

defined( 'ABSPATH' ) || exit();

use WeCodeArt\Singleton;
use WeCodeArt\Gutenberg\Blocks\Dynamic;
use function WeCodeArt\Functions\get_prop;

/**
 * Gutenberg Buttons blocks.
 */
class Buttons extends Dynamic {

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
	protected $block_name = 'buttons';

	/**
	 * Init
	 */
	public function init() {
		register_block_style( $this->get_block_type(), [
			'name' 	=> 'group',
            'label'	=> __( 'Group', 'wecodeart' ),
		] );
	}

	/**
	 * Shortcircuit Register
	 */
	public function register() {
		add_filter( 'render_block_core/' . $this->block_name, [ $this, 'render' ], 10, 2 );
	}

	/**
	 * Dynamically renders the `core/buttons` block.
	 *
	 * @param 	string 	$content 	The block markup.
	 * @param 	array 	$block 		The parsed block.
	 *
	 * @return 	string 	The block markup.
	 */
	public function render( $content = '', $block = [], $data = null ) {
		$attributes = get_prop( $block, 'attrs', [] );

		$direction 	= get_prop( $attributes, [ 'layout', 'orientation' ] );

		if( $direction ) {
			$search 	= '/' . preg_quote( 'wp-block-buttons', '/' ) . '/';
			$replace 	= 'wp-block-buttons are-' . $direction;
			$content	= preg_replace( $search, $replace, $content, 1 );
		}

		return $content;
	}

	/**
	 * Block styles
	 *
	 * @return 	string 	The block styles.
	 */
	public function styles() {
		return "
		.wp-block-buttons {
			display: flex;
			flex-flow: row wrap;
			gap: var(--wp--style--block-gap, 1em);
			margin-bottom: 1rem;
		}
		.wp-block-buttons.is-style-group {
			--wp--style--block-gap: 0px;
		}
		.wp-block-buttons.is-style-group:not(.are-vertical) .wp-block-button:not(:first-child) .wp-block-button__link {
			border-left: 0;
			border-top-left-radius: 0;
			border-bottom-left-radius: 0;
		}
		.wp-block-buttons.is-style-group:not(.are-vertical) .wp-block-button:not(:last-child) .wp-block-button__link {
			border-top-right-radius: 0;
			border-bottom-right-radius: 0;
		}
		.wp-block-buttons.is-style-group.are-vertical .wp-block-button:not(:first-child) {
			margin-top: -1px;
		}
		.wp-block-buttons.is-style-group.are-vertical .wp-block-button:not(:first-child) .wp-block-button__link {
			border-top-left-radius: 0;
			border-top-right-radius: 0;
		}
		.wp-block-buttons.is-style-group.are-vertical .wp-block-button:not(:last-child) .wp-block-button__link {
			border-bottom-left-radius: 0;
			border-bottom-right-radius: 0;
		}
		.wp-block-buttons.are-vertical {
			flex-direction: column;
		}
		.wp-block-buttons.is-content-justification-left {
			justify-content: flex-start;
		}
		.wp-block-buttons.is-content-justification-left.are-vertical {
			align-items: flex-start;
		}
		.wp-block-buttons.is-content-justification-center {
			justify-content: center;
		}
		.wp-block-buttons.is-content-justification-center.are-vertical {
			align-items: center;
		}
		.wp-block-buttons.is-content-justification-right {
			justify-content: flex-end;
		}
		.wp-block-buttons.is-content-justification-right.are-vertical {
			align-items: flex-end;
		}
		.wp-block-buttons.is-content-justification-space-between {
			justify-content: space-between;
		}
		.wp-block-buttons .wp-block-button {
			position: relative;
		}
		.wp-block-buttons .wp-block-button:hover,
		.wp-block-buttons .wp-block-button__link:focus,
		.wp-block-buttons .wp-block-button__link:active,
		.wp-block-buttons .wp-block-button__link.active {
			z-index: 1;
		}
		";
	}
}
