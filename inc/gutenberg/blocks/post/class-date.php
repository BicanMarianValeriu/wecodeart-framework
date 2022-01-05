<?php
/**
 * WeCodeArt Framework
 *
 * WARNING: This file is part of the core WeCodeArt Framework. DO NOT edit this file under any circumstances.
 * Please do all modifications in the form of a child theme.
 *
 * @package		WeCodeArt Framework
 * @subpackage  Gutenberg\Blocks
 * @copyright   Copyright (c) 2022, WeCodeArt Framework
 * @since		5.0.0
 * @version		5.3.1
 */

namespace WeCodeArt\Gutenberg\Blocks\Post;

defined( 'ABSPATH' ) || exit();

use WeCodeArt\Singleton;
use WeCodeArt\Gutenberg\Blocks\Dynamic;
use function WeCodeArt\Functions\get_prop;

/**
 * Gutenberg Site Date block.
 */
class Date extends Dynamic {

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
	protected $block_name = 'post-date';

	/**
	 * Shortcircuit Register
	 */
	public function register() {
		add_filter( 'block_type_metadata_settings', [ $this, 'filter_render' ], 10, 2 );
	}

	/**
	 * Filter block markup
	 *
	 * @param	array 	$settings
	 * @param	array 	$data
	 */
	public function filter_render( $settings, $data ) {
		if ( $this->get_block_type() === $data['name'] ) {
			$settings = wp_parse_args( [
				'render_callback' => [ $this, 'render' ]
			], $settings );
		}
		
		return $settings;
	}

	/**
	 * Dynamically renders the `core/post-date` block.
	 *
	 * @param 	array 	$attributes The block attributes.
	 *
	 * @return 	string 	The block markup.
	 */
	public function render( $attributes = [], $content = '', $block = null ) {
		if ( ! isset( $block->context['postId'] ) ) {
			return '';
		}
	
		$post_ID	= $block->context['postId'];

		$args = [
			'post_id'	=> $post_ID,
			'attributes'=> $attributes,
			'published'	=> [
				'robot'	=> get_the_date( DATE_W3C, $post_ID ),
				'human' => get_the_date( get_prop( $attributes, 'format', '' ), $post_ID ),
			],
		];

		if ( get_the_time( 'U', $post_ID ) !== get_the_modified_time( 'U', $post_ID ) ) {
			$args = wp_parse_args( [
				'modified' => [
					'robot'	=> get_the_modified_date( DATE_W3C, $post_ID ),
					'human' => get_the_modified_date( get_prop( $attributes, 'format', '' ), $post_ID )
				],
			], $args );
		}

		return wecodeart_template( 'meta/date', $args, false );
	}

	/**
	 * Block styles
	 *
	 * @return 	string 	The block styles.
	 */
	public function styles() {
		return "
		.wp-block-post-date--updated .wp-block-post-date__updated {
			display: none;
		}
		";
	}
}
