<?php
/**
 * WeCodeArt Framework.
 *
 * WARNING: This file is part of the core WeCodeArt Framework. DO NOT edit this file under any circumstances.
 * Please do all modifications in the form of a child theme.
 *
 * @package 	WeCodeArt Framework
 * @subpackage 	WP-Customizer Partials
 * @copyright   Copyright (c) 2021, WeCodeArt Framework
 * @since 		3.3
 * @version		5.0.0
 */

namespace WeCodeArt\Admin\Customizer;

defined( 'ABSPATH' ) || exit();

/**
 * Customizer Partials
 */
class Partials {

	use \WeCodeArt\Singleton; 

	/**
	 * Send to Constructor
	 * @since 3.6.2
	 */
	public function init() {
		add_action( 'customize_register', [ $this, 'register' ], 950 );
	}

	/**
	 * Add our Selective Refresh Partials.
	 * 
	 * @param  object $wp_customize An instance of the WP_Customize_Manager class.
	 */
	public function register( $wp_customize ) {
		// Override Defaults.
		$wp_customize->get_setting( 'blogname' 			)->transport	= 'postMessage';
		$wp_customize->get_setting( 'blogdescription' 	)->transport	= 'postMessage';
		$wp_customize->get_section( 'title_tagline' 	)->panel		= 'header';

		// Selective Refresh
		$wp_customize->selective_refresh->add_partial( 'blogname', [
			'selector'        => '.site-title a',
			'render_callback' => [ $this, 'render_blogname' ],
		] );

		$wp_customize->selective_refresh->add_partial( 'blogdescription', [
			'selector'        => '.site-description',
			'render_callback' => [ $this, 'render_blogdescription' ],
		] ); 
	}
		
	/**
	 * Render Partial Blog Name
	 */
	public static function render_blogname() {
		return get_bloginfo( 'name', 'display' );
	}

	/**
	 * Render Partial Blog Description
	 */
	public static function render_blogdescription() {
		return get_bloginfo( 'description', 'display' );
	}

	/**
	 * Render the Footer Copyright for the selective refresh partial.
	 */
	public static function render_footer_copyright() {
		$copyright = get_theme_mod( 'footer-copyright-text' );
		$copyright = str_replace( '[copy]', '&copy;', $copyright );
		$copyright = str_replace( '[year]', date( 'Y' ), $copyright );

		return wp_kses_post( $copyright );
	}
}