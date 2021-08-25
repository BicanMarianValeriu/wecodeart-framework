<?php
/**
 * WeCodeArt Framework.
 *
 * WARNING: This file is part of the core WeCodeArt Framework. DO NOT edit this file under any circumstances.
 * Please do all modifications in the form of a child theme.
 *
 * @package 	WeCodeArt Framework
 * @subpackage 	Header Class
 * @copyright   Copyright (c) 2021, WeCodeArt Framework
 * @since		3.5
 * @version		5.0.0
 */

namespace WeCodeArt\Core;

defined( 'ABSPATH' ) || exit();

use WeCodeArt\Markup;
use WeCodeArt\Singleton;
use WeCodeArt\Support\Styles;
use function WeCodeArt\Functions\get_prop;

/**
 * Framework Header
 */
class Header {

	use Singleton;

	/**
	 * Send to Constructor
	 */
	public function init() {
		add_action( 'wecodeart/header',	[ __CLASS__, 'markup' ] );
		add_action( 'init', 			[ $this, 'clean_head' ] );
	}
	
	/**
	 * Output HEADER markup function
	 * Plugin PHP fallback
	 *
	 * @uses	WeCodeArt\Markup::wrap()
	 * @since 	unknown
	 * @version	5.0.0
	 *
	 * @return 	void 
	 */
	public static function markup( $args = [] ) {
		$args 	= wp_parse_args( $args, [
			'theme' 	=> wecodeart( 'name' ),
			'slug' 		=> 'header',
			'tagName' 	=> 'header',
		] );

		Markup::wrap( 'header', [
			[
				'tag' 	=> $args['tagName'],
				'attrs' => [
					'id'	=> $args['slug'],
					'class'	=> 'site-header sticky-top wp-block-template-part',
				]
			], 
			[ 
				'tag' 	=> 'div',
				'attrs' => [
					'class'	=> 'container',
				] 
			]
		], 'gutenberg_block_header_area' );
	}

	/**
	 * Clean WP_Head of unwanted of stuff
	 *
	 * @return void
	 */
	public function clean_head() {
		if( get_theme_mod( 'general-performance-head' ) === 0 ) return;

		remove_action( 'wp_head', 'wp_generator' );
		remove_action( 'wp_head', 'rsd_link' );
		remove_action( 'wp_head', 'feed_links', 2 );
		remove_action( 'wp_head', 'feed_links_extra', 3 );
		remove_action( 'wp_head', 'wlwmanifest_link' );
		remove_action( 'wp_head', 'index_rel_link' );
		remove_action( 'wp_head', 'parent_post_rel_link', 10, 0 );
		remove_action( 'wp_head', 'start_post_rel_link', 10, 0 );
		remove_action( 'wp_head', 'adjacent_posts_rel_link', 10, 0 );
		remove_action( 'wp_head', 'rest_output_link_wp_head' );
		remove_action( 'wp_head', 'wp_shortlink_wp_head' );
		remove_action( 'wp_head', 'wp_oembed_add_discovery_links' );
		remove_action( 'wp_head', 'print_emoji_detection_script', 7 );
		remove_action( 'wp_print_styles', 'print_emoji_styles' );
		remove_action( 'template_redirect', 'rest_output_link_header', 11 );
	}
}