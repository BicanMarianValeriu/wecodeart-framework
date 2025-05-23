<?php
/**
 * WeCodeArt Framework
 *
 * WARNING: This file is part of the core WeCodeArt Framework. DO NOT edit this file under any circumstances.
 * Please do all modifications in the form of a child theme.
 *
 * @package		WeCodeArt Framework
 * @subpackage  Gutenberg\Blocks
 * @copyright   Copyright (c) 2025, WeCodeArt Framework
 * @since		5.0.0
 * @version		6.0.0
 */

namespace WeCodeArt\Gutenberg\Blocks\Post;

defined( 'ABSPATH' ) || exit;

use WeCodeArt\Singleton;
use WeCodeArt\Gutenberg\Blocks\Dynamic;
use function WeCodeArt\Functions\get_prop;

/**
 * Gutenberg Site Author block.
 */
class Author extends Dynamic {

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
	protected $block_name = 'post-author';

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
	 * Dynamically renders the `core/post-author` block.
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
	
		if ( empty( $author_id = get_post_field( 'post_author', $block->context['postId'] ) ) ) {
			return '';
		}

		$args = [
			'post_id'	=> $block->context['postId'],
			'attributes'=> $attributes,
			'author'	=> (object) [
				'id' 	=> $author_id,
				'url' 	=> get_author_posts_url( $author_id ),
				'name' 	=> get_the_author_meta( 'display_name', $author_id ),
				'bio'	=> wpautop( get_the_author_meta( 'description', $author_id ) ),
			]
		];

		return wecodeart_template( 'blocks/post/author', $args, false );
	}

	/**
	 * Block styles
	 *
	 * @return 	string 	The block styles.
	 */
	public function styles() {
		return <<<CSS
			.wp-block-post-author {
				display: flex;
				flex-wrap: wrap
			}
			.wp-block-post-author__name:last-child {
				margin-bottom: 0;
			}
		CSS;
	}
}
