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
 * @since		5.3.7
 * @version		5.7.2
 */

namespace WeCodeArt\Gutenberg\Blocks\Navigation;

defined( 'ABSPATH' ) || exit();

use WeCodeArt\Singleton;
use WeCodeArt\Gutenberg\Blocks\Dynamic;
use function WeCodeArt\Functions\get_prop;

/**
 * Gutenberg Navigation Pages block.
 */
class Pages extends Dynamic {

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
	protected $block_name = 'page-list';

	/**
	 * Shortcircuit Register
	 */
	public function register() {
		\add_filter( 'block_type_metadata_settings',	[ $this, 'filter_render' ], 10, 2 );
	}

	/**
	 * Filter navigation markup
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
	 * Dynamically renders the `core/page-list` block.
	 *
	 * @param 	array 	$attributes The block attributes.
	 * @param 	string 	$content 	The block content.
	 * @param 	array 	$block 		The block data.
	 *
	 * @return 	string 	The block markup.
	 */
	public function render( $attributes = [], $content = '', $block = null ) {
		// All pages
		$all_pages = get_pages( [
			'post_status' => 'publish',
			'sort_column' => 'menu_order,post_title',
			'order'       => 'asc',
		] );

		// If there are no pages, there is nothing to show.
		if ( empty( $all_pages ) ) {
			return;
		}

		$inner_blocks 	= [];
		$top_levels		= wp_list_filter( $all_pages, [ 'post_parent' => 0 ] );

		foreach( $top_levels as $page ) {
			$inner_blocks[] = self::parse_block( $page, $all_pages );
		}

		$inner_blocks = new \WP_Block_List( $inner_blocks, $attributes );

		// Render links.
		foreach( $inner_blocks as $inner_block ) {
			$content .= $inner_block->render();
		}
		
		// If not used in navigation return only <li> elements.
		if( ! empty( $block->context ) ) {
			return $content;
		}

		// Otherwise we wrap them in <ul> tag.
		$handle_style 	= 'wp-block-navigation';

		if( ! wp_style_is( $handle_style ) ) {
			wp_enqueue_style( 'wp-block-navigation' );
			wp_enqueue_style( 'wp-block-navigation-link' );
		}

		$content = wecodeart( 'markup' )::wrap( 'wp-block-page-list', [ [
			'tag' 	=> 'ul',
			'attrs'	=> $this->get_block_wrapper_attributes( [
				'class' => 'wp-block-navigation nav'
			] )
		] ], $content, [], false );

		return $content;
	}

	/**
	 * Returns page as a parsed navigation link with inner blocks.
	 *
	 * @param 	object 	$page		Current page.
	 * @param 	array 	$all_pages 	All pages.
	 *
	 * @return 	array 	Parsed Block.
	 */
	public static function parse_block( $page, $all_pages ) {
		$block = [
			'blockName'	=> 'core/navigation-link',
			'attrs'		=> [
				'kind' 	=> 'post-type',
				'type' 	=> 'page',
				'rel'	=> (int) get_option( 'page_on_front' ) === $page->ID ? 'home' : null,
				'id'	=> $page->ID,
				'label' => $page->post_title,
				'url'	=> get_permalink( $page ),
				'isTopLevelLink' => (int) $page->post_parent === 0,
			]
		];

		$inner_blocks = wp_list_filter( $all_pages, [ 'post_parent' => $page->ID ] );

		if( ! empty( $inner_blocks ) ) {
			// Extra Assets Handle
			$handle_style 	= 'wp-block-navigation-submenu';
			$handle_script 	= 'wecodeart-gutenberg-blocks-navigation';

			if( ! wp_style_is( $handle_style ) ) {
				wp_enqueue_style( $handle_style );
			}
			
			if( ! wp_script_is( $handle_script ) ) {
				wp_enqueue_script( $handle_script, wecodeart_asset( 'js', 'modules/dropdown' ), [], wecodeart( 'version' ), true );
			}

			$block = wp_parse_args( [
				'innerBlocks' => array_map( function( $page ) use( $all_pages ) {
					return self::parse_block( $page, $all_pages );
				}, $inner_blocks )
			], $block );
		}

		return $block;
	}

	/**
	 * Block styles
	 *
	 * @return 	string 	The block styles.
	 */
	public function styles(): string {
		return "
			.wp-block-page-list {
				display: flex;
				flex-direction: column;
				align-items: flex-start;
				padding-left: 0;
				list-style: none;
			}
		";
	}
}