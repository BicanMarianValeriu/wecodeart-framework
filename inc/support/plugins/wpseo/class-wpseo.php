<?php
/**
 * WeCodeArt Framework.
 *
 * WARNING: This file is part of the core WeCodeArt Framework. DO NOT edit this file under any circumstances.
 * Please do all modifications in the form of a child theme.
 *
 * @package 	WeCodeArt Framework
 * @subpackage 	Support\Yoast SEO
 * @copyright   Copyright (c) 2022, WeCodeArt Framework
 * @since 		3.5
 * @version		5.4.7
 */

namespace WeCodeArt\Support\Plugins;

defined( 'ABSPATH' ) || exit;

use WeCodeArt\Singleton;
use WeCodeArt\Integration;
use WeCodeArt\Admin\Notifications;
use WeCodeArt\Admin\Notifications\Notification;
use function WeCodeArt\Functions\get_prop;

/**
 * WPSEO Integration
 */
class WPSeo implements Integration {

	use Singleton; 

	const NOTICE_ID = 'wecodeart-yoast-notice';

	/**
	 * Get Conditionals
	 *
	 * @return void
	 */
	public static function get_conditionals() {
		wecodeart( 'conditionals' )->set( [
			'is_yoast_active' => WPSeo\Condition::class,
		] );
		
		return [ 'is_yoast_active' ];
	}

	/**
	 * Send to Constructor
	 */
	public function register_hooks() {
		// Notices
		add_action( 'admin_notices',	[ $this, 'manage_notice' ] );

		// Restricted Blocks
		add_filter( 'wecodeart/filter/gutenberg/restricted',	[ $this, 'restricted_gutenberg_blocks' ] );

		// Terms Template Context
		add_filter( 'wecodeart/filter/template/context', 		[ $this, 'filter_category_context' 	], 10, 2 );

		// Author Social - note for code reviewers
		// This will be eventually removed as soon as I figure out another way (maybe PHP patterns?)
		// Its only used when Yoast SEO plugin is installed and enabled.
		// Renders author social profiles using core/social-links block markup
		add_action( 'init', [ $this, 'register_social' ] );
	}

	/**
	 * Manage Notice
	 *
	 * @since 	5.0.0
	 * @version	5.0.0
	 */
	public function manage_notice() {
		$notification = new Notification(
			esc_html__( 'YoastSEO support is enabled! Our theme works seamlessly with the best SEO plugin.', 'wecodeart' ),
			[
				'id'			=> self::NOTICE_ID,
				'type'     		=> Notification::INFO,
				'priority' 		=> 1,
				'class'			=> 'notice is-dismissible',
				'capabilities' 	=> 'activate_plugins',
			]
		);

		if( get_user_option( self::NOTICE_ID ) === 'seen' ) {
			Notifications::get_instance()->remove_notification( $notification );
			set_transient( self::NOTICE_ID, true, WEEK_IN_SECONDS );
			return;
		}

		if( get_transient( self::NOTICE_ID ) === false ) {
			Notifications::get_instance()->add_notification( $notification );
		}
	}

	/**
	 * Register Social Profiles
	 *
	 * @since	5.4.7
	 * @version 5.4.8
	 *
	 * @return 	array
	 */
	public function register_social() {
		global $shortcode_tags;
		
		// Bail if the author of the plugin decides to create one.
		if( ! isset( $shortcode_tags['yoast-author-social'] ) ) {
			$shortcode_tags['yoast-author-social'] = [ $this, 'render_social' ];
		}
	}

	/**
	 * Yoast's Author Social
	 *
	 * @since	5.4.7
	 * @version 5.4.8
	 *
	 * @return 	array
	 */
	public function render_social( $atts ) {
		global $post;

		if( ! is_object( $post ) ) return;

		$class_names	= [ 'wp-block-social-links' ];

		$map_attrs 		= [
			'class' 		=> 'className',
			'color' 		=> 'customIconColor',
			'background'	=> 'customIconBackgroundColor',
			'blank'			=> 'openInNewTab',
			'size'			=> 'size',
		];

		$default_atts 	= [
			'class'			=> 'is-style-logos-only',
			'color'			=> '',
			'background' 	=> '',
			'blank'			=> true,
			'size'			=> ''
		];

		// Convert to shortcode attributes.
		$attrs 	= array_combine( array_keys( $map_attrs ), array_values( $default_atts ) );

		$atts 	= shortcode_atts( wp_parse_args( [
			'ID'	=> $post->post_author,
		], $attrs ), $atts );

		// Save author ID.
		$author_id 	= get_prop( $atts, [ 'ID' ] );

		// Bail early if no author ID.
		if( ! $author_id ) return;

		unset( $atts['ID'] );

		// Collect Yoast's author meta.
		$socials = [];
		foreach( [
			'url',
			'facebook',
			'twitter',
			'instagram',
			'linkedin',
			'youtube',
			'myspace',
			'pinterest',
			'thumblr',
			'soundcloud',
			'wikipedia'
		] as $key ) {
			$value 	= trim( get_the_author_meta( $key, $author_id ) );

			if( empty( $value ) ) continue;

			$value 	= $key === 'twitter' ? $value = "https://twitter.com/${value}" : $value;
			$value 	= esc_url( set_url_scheme( $value, 'https' ) );

			$key 	= $key === 'url' ? 'link' : $key;

			$socials[$key] = $value;
		}

		// Bail early if author meta is empty.
		if( empty( $socials ) ) return;

		$palette 	= wecodeart_json( [ 'settings', 'color', 'palette', 'core' ], [] );
		$palette 	= wecodeart_json( [ 'settings', 'color', 'palette', 'theme' ], $palette );
		$palette 	= wecodeart_json( [ 'settings', 'color', 'palette', 'user' ], $palette );

		if( $color = get_prop( $atts, [ 'color' ] ) ) {
			$named = get_prop( current( wp_list_filter( $palette, [ 'color' => $color ] ) ), 'slug' );
			if( $named ) {
				$atts['iconColor'] = $named;
				$map_attrs[] = 'iconColor';
			}
			
			$class_names[] = 'has-icon-color';
		}
		
		if( $color = get_prop( $atts, [ 'background' ] ) ) {
			$named = get_prop( current( wp_list_filter( $palette, [ 'color' => $color ] ) ), 'slug' );
			if( $named ) {
				$atts['iconBackgroundColor'] = $named;
				$map_attrs[] = 'iconBackgroundColor';
			}

			$class_names[] = 'has-icon-background-color';
		}

		$class_names[] = get_prop( $atts, [ 'class' ], '' );

		// Convert to block attributes again while filtering the empty ones.
		$inline_attrs	= array_filter( array_combine( array_values( $map_attrs ), array_values( $atts ) ) );

		$social_html = '<!-- wp:social-links ' . wp_json_encode( $inline_attrs ) . ' -->';
		$social_html .= '<ul class="' . join( ' ', array_filter( $class_names ) ) . '">';

		foreach( $socials as $key => $value ) {
			$social_html .= '<!-- wp:social-link {"url":"' . $value . '","service":"' . $key . '"} /-->';
		}
		
		$social_html .= '</ul>';
		$social_html .= '<!-- /wp:social-links -->';

		// Allow the user to filter the template array of social blocks.
		$social_html = apply_filters( 'wecodeart/filter/wpseo/author/social', parse_blocks( $social_html ), $author_id, $socials );

		// Convert to string and render those social blocks.
		return do_blocks( serialize_blocks( $social_html ) );
	}

	/**
	 * Extend Category with Yoast's Primary Term
	 *
	 * @since	4.1.52
	 * @version	5.0.0
	 *
	 * @return 	array
	 */
	public function filter_category_context( $args, $name ) {
		if( $name !== 'entry/meta/terms.php' ) {
			return $args;
		}
		
		if( $meta = get_post_meta( get_prop( $args, 'post_id' ), '_yoast_wpseo_primary_category', true ) ) {
			$args['primary'] = (int) $meta;
		}

		return $args;
	}

	/**
	 * Filter - Restricted Yoast Blocks from theme code
	 *
	 * @since	5.0.0
	 * @version	5.0.0
	 *
	 * @return 	array
	 */
	public function restricted_gutenberg_blocks( $blocks ) {
		return wp_parse_args( [
			'yoast-seo/breadcrumbs',
		], $blocks );
	}
}