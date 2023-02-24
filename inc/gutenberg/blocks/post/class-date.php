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
	 * Block args.
	 *
	 * @return 	array
	 */
	public function block_type_args(): array {
		return [
			'render_callback' => [ $this, 'render' ]
		];
	}

	/**
	 * Dynamically renders the `core/post-date` block.
	 *
	 * @param 	array 	$attributes	The attributes.
	 * @param 	string 	$content 	The block markup.
	 * @param 	string 	$block 		The block data.
	 *
	 * @return 	string 	The block markup.
	 */
	public function render( array $attributes = [], string $content = '', $block = null ): string {
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

		return wecodeart_template( 'blocks/post/date', $args, false );
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
