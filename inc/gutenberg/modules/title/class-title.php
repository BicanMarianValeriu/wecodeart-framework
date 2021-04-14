<?php
/**
 * WeCodeArt Framework
 *
 * WARNING: This file is part of the core WeCodeArt Framework. DO NOT edit this file under any circumstances.
 * Please do all modifications in the form of a child theme.
 *
 * @package		WeCodeArt Framework
 * @subpackage  Gutenberg\Title
 * @copyright   Copyright (c) 2021, WeCodeArt Framework
 * @since		4.0.3
 * @version		4.2.0
 */

namespace WeCodeArt\Gutenberg\Modules;

defined( 'ABSPATH' ) || exit();

use WeCodeArt\Singleton;
use WeCodeArt\Integration;
use WeCodeArt\Conditional\Traits\No_Conditionals;

/**
 * Handles Gutenberg Hidden entry title functionality.
 */
class Title implements Integration {

	use Singleton;
	use No_Conditionals;

	/**
	 * Register Hooks - into styles processor action if enabled
	 *
	 * @since 	4.2.0
	 *
	 * @return 	void
	 */
	public function register_hooks() {
		// Post Meta
		$this->register_meta();

		// Hidden Singular Page Title
		add_filter( 'wecodeart/filter/entry/title/disabled', 	[ $this, 'disable_title' ], 10, 2 );
		add_filter( 'body_class', 								[ $this, 'body_class' ] );
	}

	/**
	 * Register meta.
	 *
	 * @return 	void
	 */
	public function register_meta() {
		register_meta( 'post', '_wca_title_hidden', [
			'show_in_rest'  => true,
			'single'        => true,
			'type'          => 'boolean',
			'auth_callback' => function() {
				return current_user_can( 'edit_posts' );
			},
		] );
	}

	/**
	 * Maybe Disable Title
	 *
	 * @return 	bool
	 */
	public function disable_title( $disabled, $post_id ) {
		if( is_singular() && get_post_meta( $post_id, '_wca_title_hidden', true ) ) {
			$disabled = true;
		}
		
		return $disabled;
	}

	/**
	 * Replace title with blank
	 *
	 * @param 	array $classes The body classes.
	 *
	 * @return 	array Returns the new body classes.
	 */
	public function body_class( $classes ) {
		if ( ! is_admin() && ! is_search() ) {

			global $post;
			if ( isset( $post->ID ) ) {

				$hidden = get_post_meta( $post->ID, '_wca_title_hidden', true );

				if ( $hidden ) {
					$classes[] = 'has-title-hidden';
				}
			}
		}

		return $classes;
	}
}