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

namespace WeCodeArt\Gutenberg\Blocks\Post;

defined( 'ABSPATH' ) || exit();

use WeCodeArt\Markup;
use WeCodeArt\Singleton;
use WeCodeArt\Gutenberg\Blocks\Dynamic;
use function WeCodeArt\Functions\get_prop;

/**
 * Gutenberg Post Template block.
 */
class Template extends Dynamic {

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
	protected $block_name = 'post-template';

	/**
	 * Shortcircuit Register
	 */
	public function register_block_type() {
		add_filter( 'block_type_metadata_settings', [ $this, 'filter_render' ], 10, 2 );
	}

	/**
	 * Filter table markup
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
	 * Dynamically renders the `core/post-template` block.
	 *
	 * @param 	array 	$attributes The block attributes.
	 *
	 * @return 	string 	The block markup.
	 */
	public function render( $attributes = [], $content = '', $block = null ) {
		$page_key = isset( $block->context['queryId'] ) ? 'query-' . $block->context['queryId'] . '-page' : 'query-page';
		$page     = empty( $_GET[ $page_key ] ) ? 1 : (int) $_GET[ $page_key ];

		$query_args = build_query_vars_from_query_block( $block, $page );
		// Override the custom query with the global query if needed.
		$use_global_query = ( isset( $block->context['query']['inherit'] ) && $block->context['query']['inherit'] );
		if ( $use_global_query ) {
			global $wp_query;
			if ( $wp_query && isset( $wp_query->query_vars ) && is_array( $wp_query->query_vars ) ) {
				// Unset `offset` because if is set, $wp_query overrides/ignores the paged parameter and breaks pagination.
				unset( $query_args['offset'] );
				$query_args = wp_parse_args( $wp_query->query_vars, $query_args );

				if ( empty( $query_args['post_type'] ) && is_singular() ) {
					$query_args['post_type'] = get_post_type( get_the_ID() );
				}
			}
		}

		$query = new \WP_Query( $query_args );

		if ( ! $query->have_posts() ) {
			return '';
		}

		$classnames = [ 'wp-block-post-template' ];
		if ( isset( $block->context['displayLayout'] ) && isset( $block->context['query'] ) ) {
			if ( isset( $block->context['displayLayout']['type'] ) && 'flex' === $block->context['displayLayout']['type'] ) {
				$classnames = array_merge( $classnames, [
					'wp-block-post-template--grid',
					'row',
					'row-cols-1',
					'row-cols-md-2',
					"row-cols-lg-{$block->context['displayLayout']['columns']}"
				] );
			}
		}

		if( $value = get_prop( $attributes, 'className' ) ) {
			$classnames[] = $value;
		}

		$classnames = array_merge( $classnames, [ 'list-unstyled', 'mt-5', 'mb-0' ] );

		return Markup::wrap( 'wp-block-query', [
			[
				'tag' 	=> 'ul',
				'attrs'	=> [
					'class' => implode( ' ', $classnames )
				]
			]
		], function( $query, $block ) {
			
			while ( $query->have_posts() ) {
				$query->the_post();

				Markup::wrap( 'wp-block-post', [
					[
						'tag' 	=> 'li',
						'attrs'	=> [
							'class' => implode( ' ', get_post_class( 'wp-block-post mb-5' ) )
						]
					]
				], function( $block ) {
					echo ( new \WP_Block( $block->parsed_block, [
						'postType' => get_post_type(),
						'postId'   => get_the_ID(),
					] ) )->render( [ 'dynamic' => false ] );
				}, [ $block ] );
			}
	
			wp_reset_postdata();

		}, [ $query, $block ], false );
	}
}