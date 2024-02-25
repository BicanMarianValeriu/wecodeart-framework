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
 * @version		6.3.5
 */

namespace WeCodeArt\Gutenberg\Blocks\Widgets;

defined( 'ABSPATH' ) || exit();

use WeCodeArt\Singleton;
use WeCodeArt\Gutenberg\Blocks\Dynamic;
use function WeCodeArt\Functions\get_prop;

/**
 * Gutenberg Query Latest Posts block.
 */
class Posts extends Dynamic {

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
	protected $block_name = 'latest-posts';

	/**
	 * Block args.
	 *
	 * @return 	array
	 */
	public function block_type_args(): array {
		return [
			'render_callback' => [ $this, 'render' ],
		];
	}
	
	/**
	 * Dynamically renders the `core/latest-posts` block.
	 *
	 * @param 	array 	$attributes	The attributes.
	 * @param 	string 	$content 	The block markup.
	 * @param 	string 	$block 		The block data.
	 *
	 * @return 	string 	The block markup.
	 */
	public function render( array $attributes = [], string $content = '', $block = null ): string {
		global $block_core_latest_posts_excerpt_length;

		$args = [
			'displayLayout' => get_prop( $attributes, [ 'postLayout' ] ) ? [
				'columns'	=> get_prop( $attributes, [ 'columns' ] ),
				'type' 		=> get_prop( $attributes, [ 'postLayout' ], 'list' ) === 'grid' ? 'flex' : 'list' 
			] : null,
			'query' 	=> [
				'postType' => 'post',
				'perPage' 	=> get_prop( $attributes, 'postsToShow', 5 ),
				'pages'		=> 0,
				'offset'	=> 0,
				'order'		=> get_prop( $attributes, 'order' ),
				'orderBy'	=> get_prop( $attributes, 'orderBy' ),
				'author'		=> get_prop( $attributes, 'selectedAuthor', '' ),
				'categoryIds' 	=> get_prop( $attributes, 'categories', [] ),
				'search'	=> '',
				'exclude'	=> '',
				'sticky'	=> '',
				'inherit'	=> false
			],
		];

		$display_author		= get_prop( $attributes, [ 'displayAuthor' ], false );
		$display_image		= get_prop( $attributes, [ 'displayFeaturedImage' ], false );
		$display_date		= get_prop( $attributes, [ 'displayPostDate' ], false );
		$display_content	= get_prop( $attributes, [ 'displayPostContent' ], false );

		// Start Template
		$template = '<!-- wp:query ' . wp_json_encode( $args ) . ' -->';
		$template .= '<div class="wp-block-query">';
		$template .= '<!-- wp:post-template {"className":"wp-block-post-template--latest"} -->';
		
		$inner_blocks = '';
		// Image
		if ( $display_image ) {
			$args	= array_filter( [
				'isLink' 	=> get_prop( $attributes, [ 'addLinkToFeaturedImage' ] ),
				'align'  	=> get_prop( $attributes, [ 'featuredImageAlign' ] ),
				'sizeSlug'	=> get_prop( $attributes, [ 'featuredImageSizeSlug' ] ),
				'width' 	=> get_prop( $attributes, [ 'featuredImageSizeWidth' ] ),
				'height' 	=> get_prop( $attributes, [ 'featuredImageSizeHeight' ] ),
			] );
			
			$inner_blocks .= '<!-- wp:post-featured-image ' . wp_json_encode( $args ) . ' /-->';
		}

		$inner_blocks .= '<!-- wp:post-title {"level":3,"isLink":true} /-->';
		
		// Meta
		if( $display_author || $display_date ) {
			$inner_blocks .= '<!-- wp:group {"style":{"spacing":{"blockGap":"var:preset|spacing|g"}},"layout":{"type":"flex","flexWrap":"nowrap"}} -->';
			$inner_blocks .= '<div class="wp-block-group">';

			// Author
			if ( $display_author ) {
				$inner_blocks .= '<!-- wp:post-author {"showAvatar":false} /-->';
			}

			// Date
			if ( $display_date ) {
				$inner_blocks .= '<!-- wp:post-date /-->';
			}

			$inner_blocks .= '</div>';
			$inner_blocks .= '<!-- /wp:group -->';
		}

		// Content
		if ( $display_content ) {
			$content_type	= get_prop( $attributes, [ 'displayPostContentRadio' ], 'excerpt' );
			
			if( $content_type === 'excerpt' ) {
				$inner_blocks .= '<!-- wp:post-excerpt {"moreText":"' . esc_html__( 'Continue reading', 'wecodeart' ) . '"} /-->';
			}

			if( $content_type === 'full_post' ) {
				$inner_blocks .= '<!-- wp:post-content /-->';
			}
		}
		
		// Allow users to change this template
		$template .= apply_filters( 'wecodeart/filter/gutenberg/latest-posts/template', $inner_blocks, $attributes );

		$template .= '<!-- /wp:post-template -->';
		$template .= '</div>';
		$template .= '<!-- /wp:query -->';

		// Allow users to change this query
		$template = apply_filters( 'wecodeart/filter/gutenberg/latest-posts/query', parse_blocks( $template ), $attributes, $args );
		// End Template
		
		$blocks = new \WP_Block_List( $template, $args );
		
		$content = '';

		add_filter( 'pre_render_block', static function() {
			remove_all_filters( 'query_loop_block_query_vars' );
			remove_filter( current_filter(), __METHOD__ );
		} ); // WooCommerce messes things up.
		
		$block_core_latest_posts_excerpt_length = get_prop( $attributes, 'excerptLength', 55 );
        add_filter( 'excerpt_length', 'block_core_latest_posts_get_excerpt_length', 20 );
		foreach( $blocks as $block ) $content .= $block->render( $block );
		remove_filter( 'excerpt_length', 'block_core_latest_posts_get_excerpt_length', 20 );

		return $content;
	}

	/**
	 * Block styles
	 *
	 * @return 	string 	The block styles.
	 */
	public function styles() {
		return "
			.wp-block-post-template.grid .wp-block-post + .wp-block-post {
				margin-top: 0;
			}
			.wp-block-post-template--latest figure:where(.alignleft,.alignright) {
				min-width: 75px;
			}
			.wp-block-post-template--latest figure:where(.alignleft,.alignright) + .wp-block-post-title {
				margin-top: 0;
			}
			.wp-block-post-template--latest figure.alignleft {
				float: left;
				margin-right: 1rem;
			}
			.wp-block-post-template--latest figure.alignright {
				float: right;
				margin-left: 1rem;
			}
		";
	}
}
