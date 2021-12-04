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
 * @version		5.3.3
 */

namespace WeCodeArt\Gutenberg\Blocks\Design;

defined( 'ABSPATH' ) || exit();

use WeCodeArt\Singleton;
use WeCodeArt\Gutenberg\Blocks\Dynamic;
use function WeCodeArt\Functions\get_prop;

/**
 * Gutenberg Button blocks.
 */
class Button extends Dynamic {

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
	protected $block_name = 'button';

	/**
	 * Init
	 */
	public function init() {
		register_block_style( $this->get_block_type(), [
			'name' 			=> 'link',
            'label'			=> __( 'Link', 'wecodeart' ),
			'inline_style' 	=> '.is-style-link .wp-block-button__link{background:transparent;border:none;padding:0;color:var(--wp--preset--color--primary);}'
		] );
	}
	
	/**
	 * Shortcircuit Register
	 */
	public function register() {
		add_filter( 'render_block_core/' . $this->block_name,	[ $this, 'render'			], 10, 2 );
		add_filter( 'register_block_type_args',					[ $this, 'register_args'	], 10, 2 );
	}

	/**
	 * Filter register args
	 *
	 * @param	array 	$settings
	 * @param	array 	$data
	 */
	public function register_args( $args, $name ) {
		if ( $this->get_block_type() === $name ) {
			if ( isset( $args['supports']['__experimentalSelector'] ) ) {
				$existing 	= (array) $args['supports']['__experimentalSelector'];
				$extra 		= [
					'.wp-block-file__button',
					'.wp-block-login__button',
					'.wp-block-search__button',
					'.comment-form-field .comment-form-submit'
				];
		
				$new_selectors = join( ', ', array_filter( array_merge( $existing, $extra ) ) );
		
				$args['supports']['__experimentalSelector'] = $new_selectors;
			}
		}
		
		return $args;
	}

	/**
	 * Dynamically renders the `core/button` block.
	 *
	 * @param 	string 	$content 	The block markup.
	 * @param 	array 	$block 		The parsed block.
	 *
	 * @return 	string 	The block markup.
	 */
	public function render( $content = '', $block = [], $data = null ) {
		$attributes = get_prop( $block, 'attrs', [] );

		return str_replace( '-button__width', '-button--width', $content );
	}

	/**
	 * Block styles
	 *
	 * @return 	string 	The block styles.
	 */
	public function styles() {
		return "
		.wp-block-button.has-custom-width {
			max-width: none;
		}
		.wp-block-button.has-custom-width .wp-block-button__link {
			width: 100%;
		} 
		.wp-block-button.has-custom-font-size .wp-block-button__link {
			font-size: inherit;
		}
		.wp-block-button--width-25 {
			width: calc(25% - (var(--wp--style--block-gap, 1em) * 0.75));
		}
		.wp-block-button--width-50 {
			width: calc(50% - (var(--wp--style--block-gap, 1em) * 0.5));
		}
		.wp-block-button--width-75 {
			width: calc(75% - (var(--wp--style--block-gap, 1em) * 0.25));
		}
		.wp-block-button--width-100 {
			width: 100%;
		}
		.wp-block-buttons.is-vertical > .wp-block-button--width-25 {
			width: 25%;
		}
		.wp-block-buttons.is-vertical > .wp-block-button--width-50 {
			width: 50%;
		}
		.wp-block-buttons.is-vertical > .wp-block-button--width-75 {
			width: 75%;
		}
		.wp-block-button.aligncenter {
			text-align: center;
		}
		.wp-block-button.alignright {
			text-align: right;
		}
		.wp-block-button__link.no-border-radius {
			border-radius: 0;
		}
		.wp-block-button__link {
			display: inline-block;
			vertical-align: middle;
			padding: 0.5rem 0.75rem;
			color: var(--wp--preset--color--white);
			font-size: 1rem;
			font-weight: 400;
			text-align: center;
			line-height: 1.5;
			background-color: var(--wp--preset--color--dark);
			border: 1px solid transparent;
			transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
			user-select: none;
			cursor: pointer;
		}
		.wp-block-button__link:hover {
			color: var(--wp--preset--color--white);
			text-decoration: none;
		}
		.wp-block-button__link:focus {
			outline: 0;
    		box-shadow: 0 0 0 1px #000;
		}
		.wp-block-button__link:active,
		.wp-block-button__link.active {
			box-shadow: 0 0 0 1px var(--wp--preset--color--primary);
		}
		.wp-block-button__link:active,
		.wp-block-button__link.active {
			box-shadow: 0 0 0 1px var(--wp--preset--color--primary);
		}
		.wp-block-button__link:active:focus,
		.wp-block-button__link.active:focus {
			box-shadow: 0 0 0 1px var(--wp--preset--color--primary);
		}
		.wp-block-button__link:disabled,
		.wp-block-button__link.disabled,
		fieldset:disabled .wp-block-button__link {
			pointer-events: none;
			opacity: .7;
			box-shadow: none;
		}
		.is-style-outline .wp-block-button__link {
			--wp--bg-opacity: 0;
			background-color: rgba(var(--wp--dark-rgb), var(--wp--bg-opacity));
			border-color: currentColor;
			color: var(--wp--dark);
		}
		.is-style-outline .wp-block-button__link:hover {
			--wp--bg-opacity: 1;
			border-color: var(--wp--dark);
			color: white;
		}
		.is-style-link .wp-block-button__link {
			padding: 0;
			background: transparent;
			border: none;
			color: var(--wp--preset--color--primary);
		}
		.is-style-link .wp-block-button__link:hover {
			color: var(--wp--preset--color--primary);
			box-shadow: none;
		}
		";
	}
}
