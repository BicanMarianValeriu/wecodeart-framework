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
 * @since		5.5.5
 * @version		6.0.0
 */

namespace WeCodeArt\Gutenberg\Blocks\Post;

defined( 'ABSPATH' ) || exit;

use WeCodeArt\Singleton;
use WeCodeArt\Gutenberg\Blocks\Author;
use WeCodeArt\Gutenberg\Blocks\Dynamic;
use function WeCodeArt\Functions\get_prop;

/**
 * Gutenberg Site Author block.
 */
class AuthorName extends Dynamic {

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
	protected $block_name = 'post-author-name';

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
			]
		];

		return wecodeart_template( [ 'blocks/post/author', 'name' ], $args, false );
	}
}
