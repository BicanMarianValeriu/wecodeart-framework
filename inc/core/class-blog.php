<?php
/**
 * WeCodeArt Framework.
 *
 * WARNING: This file is part of the core WeCodeArt Framework. DO NOT edit this file under any circumstances.
 * Please do all modifications in the form of a child theme.
 *
 * @package 	WeCodeArt Framework
 * @subpackage 	Core\Blog
 * @copyright   Copyright (c) 2020, WeCodeArt Framework
 * @since 		4.2.0
 * @version		4.2.0
 */

namespace WeCodeArt\Core;

defined( 'ABSPATH' ) || exit(); 

use WeCodeArt\Singleton;
use WeCodeArt\Core\Loops;
use WeCodeArt\Core\Content;

/**
 * General Hooks
 */
class Blog {

	use Singleton;

	/**
	 * Blog Page ID.
	 *
	 * @var int
	 */
	protected $blog_ID;

	/**
	 * Send to Constructor
	 */
	public function init() {
		$this->blog_ID = (int) get_option( 'page_for_posts' );
		add_action( 'init',			[ $this, 'register_block' 	] );
		add_action( 'wp_body_open', [ $this, 'layout_hooks' 	] );
	}
	
	/**
	 * Blog Page Hooks.
	 *
	 * @since	4.2.0
	 *
	 * @return 	void
	 */
	public function layout_hooks() {
		// Bail if condition not met
		if( ! is_home() || ! has_blocks( $this->blog_ID ) ) return;

		// Clear default loop
		remove_action( 'wecodeart/content/markup',	[ Content::get_instance(), 'render_modules' ] );
		add_action( 'wecodeart/content/markup', 	[ $this, 'render_content' ] ); 
	}

	/**
	 * Blog Page render.
	 *
	 * @since	4.2.0
	 *
	 * @return 	void
	 */
	public function render_content() {
		Loops::render_content( $this->blog_ID );
	}

	/**
	 * Content render.
	 *
	 * @since	4.2.0
	 *
	 * @return 	void
	 */
	public function register_block() {
		$block_json = file_get_contents( get_stylesheet_directory_uri() . '/src/js/gutenberg/blocks/content/block.json' );
		$block_json = $block_json ? json_decode( $block_json, true ) : [];

		register_block_type( 'wca/content', [
			'attributes'      => $block_json['attributes'],
			'render_callback' => function( $attributes ) {
				$closure = function( $args ) use( $attributes ) {
					$class = [
						'wp-block-wca-content',
						$args[0]['attrs']['class']
					];

					if( $attributes['backgroundColor'] ) {
						$class[] = 'bg-' . $attributes['backgroundColor'];
					}

					if( $attributes['className'] ) {
						$class[] = $attributes['className'];
					}

					if( $attributes['align'] ) {
						$class[] = 'align' . $attributes['align'];
					}

					$args[0]['attrs']['class'] = implode( ' ', $class );
					
					return $args;
				};

				ob_start();
				add_filter( 'wecodeart/filter/wrappers/content-wrappers', $closure );
				Content::get_instance()::render_modules();
				remove_filter( 'wecodeart/filter/wrappers/content-wrappers', $closure );
				return ob_get_clean();
			},
		] );
	}
}