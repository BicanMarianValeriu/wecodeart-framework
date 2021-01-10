<?php
/**
 * WeCodeArt Framework.
 *
 * WARNING: This file is part of the core WeCodeArt Framework. DO NOT edit this file under any circumstances.
 * Please do all modifications in the form of a child theme.
 *
 * @package 	WeCodeArt Framework
 * @subpackage 	Customizer\Configs\Overrides
 * @copyright   Copyright (c) 2021, WeCodeArt Framework
 * @since 		3.5
 * @version		4.2.0
 */

namespace WeCodeArt\Admin\Customizer\Configs;

defined( 'ABSPATH' ) || exit;

use WeCodeArt\Admin\Customizer\Config;

/**
 * Customizer Config Overrides
 */
class Overrides extends Config {
	/**
	 * Register Site Layout Customizer Configurations
	 *
	 * @param 	array                $configurations 
	 * @param 	WP_Customize_Manager $wp_customize instance of WP_Customize_Manager.
	 * @since 	3.5
	 *
	 * @return 	array 
	 */
	public function register( $configurations, $wp_customize ) {  
		$_configs = [
			[
				'name'			=> 'page_for_404',
				'type' 			=> 'control',
				'control'  		=> 'dropdown-pages',
				'section'		=> 'static_front_page',
				'capability'	=> 'edit_theme_options',
				'title' 		=> esc_html__( 'Page for 404', 'wecodeart' ),
				'description' 	=> esc_html__( 'Select your custom page that will show on 404 error.', 'wecodeart' ),
				'priority' 		=> 50,
				'transport'		=> 'postMessage',
				'sanitize_callback' 	=> 'absint',
				'sanitize_js_callback' 	=> 'absint'
			]
		];

		$_configs = [];

		return array_merge( $configurations, $_configs );
	}
}