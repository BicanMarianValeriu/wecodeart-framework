<?php
/**
 * WeCodeArt Framework.
 *
 * WARNING: This file is part of the core WeCodeArt Framework. DO NOT edit this file under any circumstances.
 * Please do all modifications in the form of a child theme.
 *
 * @package 	WeCodeArt Framework
 * @subpackage 	Core\Content
 * @copyright   Copyright (c) 2019, WeCodeArt Framework
 * @since 		3.5
 * @version		4.0.1
 */

namespace WeCodeArt\Core;

defined( 'ABSPATH' ) || exit();

use WeCodeArt\Core\Loops;
use WeCodeArt\Core\Pagination;
use WeCodeArt\Markup;

/**
 * Handles Content Containers
 */
class Content {

	use \WeCodeArt\Singleton;

	/**
	 * Send to Constructor
	 * @since 3.6.2
	 */
	public function init() {
		// WP.
		add_action( 'widgets_init', 				[ $this, 'register_sidebars' 	] );
		add_action( 'wp_body_open',					[ $this, 'skip_link' ], 0 );

		// WeCodeArt.
		add_action( 'wecodeart_inner_markup', 		[ $this, 'render_modules' 		] );
		add_action( 'wecodeart/hook/loop/before',	[ $this, 'content_markup_open' 	] );
		add_action( 'wecodeart/hook/loop/after',	[ $this, 'content_markup_close' ] );
		add_action( 'wecodeart/hook/main/after',    [ Pagination::get_instance(), 'archive' ], 10 );
	}
	
	/**
	 * Echo the opening tag markup for content
	 *
	 * @since 	unknown
	 * @version	3.6.4
	 *
	 * @return 	string 
	 */
	public function content_markup_open() { 
		// Adds ability to filter the attributes of main content.
		$attributes = Markup::generate_attr( 'content', [
			'id' 	=> 'primary',
			'class' => 'content__main col-12 col-lg'
		] );
		?>
		<div <?php echo $attributes; ?>>
			<?php 
			
				/**
				 * @hooked - none
				 */
				do_action( 'wecodeart/hook/main/before' ); 

			?>
			<main <?php echo Markup::generate_attr( 'main', [ 'id' => 'main', 'class' => 'site-main' ] ); ?>>
		<?php
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
		?>
			</main>
			<?php 
				
				/**
				 * @hooked WeCodeArt\Core\Pagination\numeric_posts_nav() - 10 
				 */
				do_action( 'wecodeart/hook/main/after' ); 
				
			?>
		</div>
		<?php
	}

	/**
	 * Generate Sidebar
	 *
	 * @since	3.7.7
	 * @version	3.9.5
	 *
	 * @return	void
	 */
	public static function render_sidebar( string $index ) {
		$index = strtolower( $index );

		if( ! is_active_sidebar( $index ) ) {
			return;
		}

		/**
		 * @see WP function `dynamic_sidebar`
		 * @see WeCodeArt\Markup::wrap()
		 */
		Markup::wrap( $index . '-sidebar-container', [ [
			'tag' 	=> 'div',
			'attrs' => [ 
				'class'	=> 'content__sidebar col-12 col-lg-4',
			]
		] ], function() use ( $index ) {
			$class = $index . '-sidebar';

			do_action( "wecodeart/hook/sidebar/{$index}/before" );

			Markup::wrap( $index . '-sidebar', [ [
				'tag' 	=> 'aside',
				'attrs' => [ 
					'class'		=> $index . '-sidebar',
					'itemscope' => '',
					'itemtype'	=> 'https://schema.org/WPSideBar'
				]
			] ], 'dynamic_sidebar', [ $index ] );
			
			do_action( "wecodeart/hook/sidebar/{$index}/after" );

		} );  
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
			'primary'
		] );

		$modules = [
			'content' => [
				'label'    	=> esc_html__( 'Entry Content', wecodeart_config( 'textdomain' ) ),
				'callback' 	=> [ Loops::get_instance(), 'default' ],
				'sidebar'	=> false
			]
		];

		if( ! empty( $sides ) ) {
			foreach( $sides as $side ) {
				$side = strtolower( $side );
				$modules[$side] = [
					'label'    	=> sprintf( esc_html__( '%s Sidebar', wecodeart_config( 'textdomain' ) ), ucfirst( $side ) ),
					'callback' 	=> function() use ( $side ) {
						self::render_sidebar( $side );
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
	 * @version	3.7.7
	 *
	 * @return 	HTML
	 */
	public static function render_modules() {
		$options = self::get_contextual_options();

		$class= [ 'content-area' ];
		if( in_array( 'primary', $options['modules'], true ) ) $class[] = 'content-area--has-primary-sidebar';
		if( in_array( 'secondary', $options['modules'], true ) ) $class[] = 'content-area--has-secondary-sidebar'; 

		Markup::wrap( 'content-wrappers',  [
			[ 'tag' => 'div', 'attrs' => [ 'class' => implode( ' ', $class ) ] ],
			[ 'tag' => 'div', 'attrs' => [ 'class' => $options['container'] ] ],
			[ 'tag' => 'div', 'attrs' => [ 'class' => 'row' ] ]
		], [ Markup::get_instance(), 'sortable' ], [ self::content_modules(), $options['modules'] ] ); 
	} 

	/**
	 * Registers Content Sidebars
	 *
	 * @uses	self::content_modules();
	 * @since	1.0
	 * @version	3.9.5
	 *
	 * @return 	void
	 */
	public function register_sidebars() {
		// Register Sidebar for each active footer columns.
		$sidebars 	= wp_list_filter( self::content_modules(), [ 
			'sidebar' => false 
		], 'NOT' );

		// Register Sidebar for each active footer columns.
		wecodeart( 'register_sidebars', $sidebars );
	}

	/**
	 * Skip to Content Link
	 *
	 * @since	3.8.3
	 * @version	3.9.5
	 *
	 * @return 	void
	 */
	public function skip_link() {
		?><a class="skip-link screen-reader-text" href="#content"><?php 
			esc_html_e( 'Skip to content', wecodeart_config( 'textdomain' ) ); 
		?></a> <?php
	}

	/**
	 * Get Contextual Modules Options
	 *
	 * @since 	3.5.0
	 * @version	4.0.2
	 *
	 * @return 	array 
	 */
	public static function get_contextual_options() {
		// Page Specific Mods
		foreach( get_pages() as $page ) {		
			$ID = $page->ID;
			if( is_page( $ID ) ) { // default must be provided since we do not set in customizer
				$modules = get_theme_mod( 'content-layout-modules-page-' . $ID, [ 'content', 'primary' ] );

				if( wecodeart_if( 'is_full_layout' ) && ! empty( $modules ) ) {
					$modules = [ 'content' ];
				}

				return [
					'container' => get_theme_mod( 'content-layout-container-page-' . $ID, 'container' ),
					'modules' 	=> $modules,
				];
			}
		}

		// Post Types Archives And Singular Context Mods.
		foreach( wecodeart( 'public_post_types' ) as $type ) { 
			if( is_singular( $type ) ) {  
				$modules 	= get_theme_mod( 'content-layout-modules-' . $type . '-singular' );
				
				if( wecodeart_if( 'is_full_layout' ) ) {
					$modules = [ 'content' ];
				}
				
				return [
					'container' => get_theme_mod( 'content-layout-container-' . $type . '-singular' ),
					'modules' 	=> $modules
				];
			} 
			
			if( wecodeart_if( 'is_post_archive' ) || is_post_type_archive( $type ) ) {
				return [
					'container' => get_theme_mod( 'content-layout-container-' . $type . '-archive' ),
					'modules' 	=> get_theme_mod( 'content-layout-modules-' . $type . '-archive' )
				]; 
			}
		} 

		// Everywhere/Defaults
		return [
			'container' => get_theme_mod( 'content-layout-container' ),
			'modules' 	=> get_theme_mod( 'content-layout-modules' )
		];
	}
}