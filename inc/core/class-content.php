<?php
/**
 * WeCodeArt Framework.
 *
 * WARNING: This file is part of the core WeCodeArt Framework. DO NOT edit this file under any circumstances.
 * Please do all modifications in the form of a child theme.
 *
 * @package 	WeCodeArt Framework
 * @subpackage 	Core\Content
 * @copyright   Copyright (c) 2021, WeCodeArt Framework
 * @since 		3.5
 * @version		5.0.0
 */

namespace WeCodeArt\Core;

defined( 'ABSPATH' ) || exit();

use WeCodeArt\Markup;
use WeCodeArt\Singleton;
use WeCodeArt\Core\Loops;
use function WeCodeArt\Functions\get_prop;

/**
 * Handles Content Containers
 */
class Content {

	use Singleton;

	/**
	 * Send to Constructor
	 * @since 3.6.2
	 */
	public function init() {
		// Fallback for plugins
		add_action( 'widgets_init',					[ $this, 'widgets_init' 		] );
		add_action( 'wecodeart/hook/loop/before',	[ $this, 'content_markup_open' 	] );
		add_action( 'wecodeart/content/markup',		[ $this, 'render_modules' 		] );
		add_action( 'wecodeart/hook/loop/after',	[ $this, 'content_markup_close' ] );
	}

	/**
	 * Add a sidebar.
	 */
	public function widgets_init() {
		register_sidebar( [
			'name'          => __( 'Main Sidebar', 'wecodeart' ),
			'id'            => 'sidebar',
			'description'   => __( 'Widgets in this area will be shown where this sidebar is rendered.', 'wecodeart' ),
			'before_widget' => '',
			'after_widget'  => '',
		] );
	}
	
	/**
	 * Echo the opening tag markup for content
	 *
	 * @since 	unknown
	 * @version	5.0.0
	 *
	 * @return 	string 
	 */
	public function content_markup_open() {
		/**
		 * @hooked - none
		 */
		do_action( 'wecodeart/hook/main/before' ); 

		?><main <?php echo Markup::generate_attr( 'main', [
			'id' 	=> 'main',
			'class' => 'site-main col-12 col-lg'
		] ); ?>><?php
	}

	/**
	 * Echo the ending tag markup for content
	 *
	 * @since 	unknown
	 * @version	3.5
	 *
	 * @return 	string
	 */
	public function content_markup_close() {	
		?></main><?php 
		/**
		 * @hooked WeCodeArt\Core\Pagination\numeric_posts_nav() - 10 
		 */
		do_action( 'wecodeart/hook/main/after' );
	}

	/**
	 * Variable that holds the Header Modules and Options
	 *
	 * @since	1.5
	 * @version	3.9.5
	 *
	 * @return 	array
	 */
	public static function content_modules() {
		$sides = (array) apply_filters( 'wecodeart/filter/content/sidebars', [
			'sidebar'
		] );

		$modules = [
			'content' => [
				'label'    	=> esc_html__( 'Entry Content', 'wecodeart' ),
				'callback' 	=> [ Loops::get_instance(), 'default' ],
			]
		];

		if( ! empty( $sides ) ) {
			foreach( $sides as $side ) {
				$side = strtolower( $side );
				$modules[$side] = [
					'label'    	=> sprintf( esc_html__( '%s Sidebar', 'wecodeart' ), ucfirst( $side ) ),
					'callback' 	=> function() use ( $side ) {
						self::render_sidebar( [ 'slug' => $side ] );
					}
				];
			}  
		}

		// Filter the generated array.
		return apply_filters( 'wecodeart/filter/content/modules', (array) $modules );
	}

	/**
	 * Returns the inner markp with wrapper based on user options
	 *
	 * @uses	WeCodeArt\Markup::wrap();
	 * @uses	WeCodeArt\Markup::sortable();
	 * @since 	unknown
	 * @version	5.0.0
	 *
	 * @return 	HTML
	 */
	public static function render_modules() {
		Markup::wrap( 'site-content',  [
				[ 'tag' => 'div', 'attrs' => [ 'class' => 'site-content wp-block-template-part' ] ],
				[ 'tag' => 'div', 'attrs' => [ 'class' => 'container' ] ],
				[ 'tag' => 'div', 'attrs' => [ 'class' => 'row' ] ]
			],
			[ Markup::get_instance(), 'sortable' ],
			[ self::content_modules(), [ 'content', 'sidebar' ] ]
		); 
	}

	/**
	 * Generate Sidebar
	 *
	 * @since	3.7.7
	 * @version	5.0.0
	 *
	 * @return	void
	 */
	public static function render_sidebar( $name = 'sidebar' ) {
		Markup::wrap( $name, [ [
			'tag' 	=> 'aside',
			'attrs' => [
				'class'	=> 'sidebar col-12 col-lg-3',
			]
		] ], 'dynamic_sidebar', [ $name ] );
	}
}