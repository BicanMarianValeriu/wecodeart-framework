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
 * Gutenberg Site Terms block.
 */
class Terms extends Dynamic {

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
	protected $block_name = 'post-terms';

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
	 * Dynamically renders the `core/post-terms` block.
	 *
	 * @param 	array 	$attributes The block attributes.
	 *
	 * @return 	string 	The block markup.
	 */
	public function render( $attributes = [], $content = '', $block = null ) {
		if ( ! isset( $block->context['postId'] ) || ! isset( $attributes['term'] ) ) {
			return '';
		}

		$terms = get_the_terms( $block->context['postId'], $attributes['term'] );
		if ( is_wp_error( $terms ) || empty( $terms ) ) {
			return '';
		}

		add_filter( 'wecodeart/filter/template/context', [ $this, 'filter_tags_context' ], 10 );

		$args = [
			'post_id'		=> $block->context['postId'],
			'count'			=> count( $terms ),
			'attributes'	=> $attributes,
			'terms'			=> get_the_term_list( $block->context['postId'], $attributes['term'], '', ', ' ),
		];

		$template = wecodeart_template( 'entry/meta/terms', $args, false );

		remove_filter( 'wecodeart/filter/template/context',	[ $this, 'filter_tags_context' ], 10 );

		return $template;
	}

	/**
	 * Extend Terms block to change tag icon.
	 *
	 * @return 	array
	 */
	public function filter_tags_context( $args ) {
		if( get_prop( $args, [ 'attributes', 'term' ], false ) === 'post_tag' ) {
			$args['icon'] = 'tags';
		}
		
		return $args;
	}
}