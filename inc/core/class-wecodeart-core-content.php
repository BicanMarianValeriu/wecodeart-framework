<?php namespace WeCodeArt\Core;
// Exit if accessed directly
if ( ! defined( 'ABSPATH' ) ) exit();
// Use
use WeCodeArt\Core\Loops as Loops;
use WeCodeArt\Utilities\Markup as Markup;
/**
 * WeCodeArt Framework.
 *
 * WARNING: This file is part of the core WeCodeArt Framework. DO NOT edit this file under any circumstances.
 * Please do all modifications in the form of a child theme.
 *
 * @package 	WeCodeArt Framework
 * @subpackage 	Main Content Class
 * @copyright   Copyright (c) 2019, WeCodeArt Framework
 * @since 		v3.5
 * @version		v3.6
 */

class Content {
	/**
	 * Instance
	 *
	 * @var $_instance
	 */
	private static $_instance = NULL;

	/**
	 * Initiator
	 *
	 * @since 	v3.5
	 * @return 	object
	 */
	public static function get_instance() {
		if( self::$_instance == NULL ) self::$_instance = new self;
		return self::$_instance;
	}

	/**
	 * Class Constructor.
	 */
	public function __construct() {
		Loops::get_instance();

		add_action( 'wecodeart/hook/loop/before',	[ $this, 'content_markup_open' 	] );
		add_action( 'wecodeart/hook/loop/after',	[ $this, 'content_markup_close' ] );
		add_action( 'wecodeart_inner_markup', 		[ $this, 'render_modules' 		] );
		add_action( 'widgets_init', 				[ $this, 'register_sidebars' 	] );
	}
	
	/**
	 * Echo the opening tag markup for content
	 * @since 	unknown
	 * @version	3.6.1.1
	 * @return 	string HTML 
	 */
	public function content_markup_open() { 
		// Adds ability to filter the attributes of main content
		$attributes = Markup::generate_attr(
			'content',
			[
				'id' => 'primary',
				'class' => 'content__main col col-12 col-lg'
			]
		);
		?>
		<div <?php echo $attributes; ?>>
			<?php 
			
				/**
				 * @hooked
				 * ---
				 */
				do_action( 'wecodeart/hook/main/before' ); 
				
				$attributes = Markup::generate_attr(
					'main',
					[
						'id' => 'main',
						'class' => 'site-main'
					]
				);
			?>
			<main <?php echo $attributes; ?>>
		<?php
	}

	/**
	 * Echo the ending tag markup for content
	 * @since 	unknown
	 * @version	3.5
	 * @return 	string HTML
	 */
	public function content_markup_close() {	?>
			</main>
			<?php 
				
				/**
				 * @hooked wecodeart_numeric_posts_nav - 10
				 * ---
				 */
				do_action( 'wecodeart/hook/main/after' ); 
				
			?>
		</div>
		<?php
	}

	/**
	 * Return the required loop based on conditionals
	 * @since	v1.0
	 * @version v3.5
	 * @return	WeCodeArt Loop
	 */
	public static function get_loop() {
		if( is_404() ) Loops::fourofour();
		else Loops::default();
	}

	/**
	 * Get Primary Sidebar View
	 * @since	v1.0
	 * @version v3.6.1.1
	 * @return	HTML
	 */
	public static function display_primary_sidebar() {
		// Adds ability to filter the attributes of primary sidebar
		$attributes = Markup::generate_attr(
			'sidebar-primary',
			[
				'id' => 'secondary',
				'class' => 'content__sidebar col col-12 col-lg-4'
			]
		);
		?>
		<div <?php echo $attributes; ?>>
			<?php
				get_template_part( 'views/sidebars/sidebar', 'primary' );
			?>
		</div>
		<?php
	}

	/**
	 * Get Secondary Sidebar View
	 * @since	v1.0
	 * @version v3.5
	 * @return	HTML
	 */
	public static function display_secondary_sidebar() {
		// Adds ability to filter the attributes of secondary sidebar
		$attributes = Markup::generate_attr(
			'sidebar-secondary',
			[
				'id' => 'secondary-2',
				'class' => 'content__sidebar content__sidebar--secondary col col-sm-12 col-lg-2'
			]
		);
		?>
		<div <?php echo $attributes; ?>>
			<?php
				get_template_part( 'views/sidebars/sidebar', 'secondary' );
			?>
		</div>
		<?php
	}

	/**
	 * Variable that holds the Header Modules and Options
	 * @since	v1.5
	 * @version v3.5
	 * @return 	array
	 */
	public static function content_modules() {
		// Default Modules (Content+Sidebar)
		$modules = array();
		$modules['content'] = array(
			'label'    => __( 'Entry Content', 'wecodeart' ),
			'callback' => [ __CLASS__, 'get_loop' ]
		);
		$modules['primary'] = array(
			'label'    => __( 'Primary Sidebar', 'wecodeart' ),
			'callback' => [ __CLASS__, 'display_primary_sidebar' ]
		);
		// Optional Sidebar
		if ( apply_filters( 'wecodeart/filter/sidebar/secondary/enable', false ) ) {
			$modules['secondary'] = array(
				'label'    => __( 'Secondary Sidebar', 'wecodeart' ),
				'callback' => [ __CLASS__, 'display_secondary_sidebar' ]
			);
		}

		// Merge default modules with user modules
		return apply_filters( 'wecodeart/filter/content/modules', $modules ); 
	}

	/**
	 * Returns the inner markp with wrapper based on user options
	 * @since 	unknown
	 * @version v3.6
	 * @uses	WeCodeArt\Utilities\Markup::wrap();
	 * @return 	HTML
	 */
	public static function render_modules() {
		$options = self::get_contextual_options();

		$class= [ 'content-area' ];
		$class[] = in_array( 'primary', 	$options['modules'] ) ? 'content-area--has-primary-sidebar' : NULL;
		$class[] = in_array( 'secondary',	$options['modules'] ) ? 'content-area--has-secondary-sidebar' : NULL;
		$class = trim( implode( ' ', $class ) );

		$wrappers = [
			[
				'tag' => 'div',
				'attrs' => [
					'class' => $class
				]
			],
			[
				'tag' => 'div',
				'attrs' => [
					'class' => $options['container']
				]
			],
			[
				'tag' => 'div',
				'attrs' => [
					'class' => 'row'
				]
			]
		];

		Markup::wrap( 'content-wrappers', $wrappers, [ __CLASS__, 'sort_modules' ] ); 
	}

	/**
	 * Return the Inner final HTML with modules selected by user for each page.
	 * @since 	unknown
	 * @version	3.5
	 * @uses	WeCodeArt\Utilities\Markup::sortable();
	 * @return 	HTML
	 */
	public static function sort_modules() {
		// Everywhere/Defaults
		$options = self::get_contextual_options();

		// Sort the modules
		Markup::sortable( self::content_modules(), $options['modules'] );
	}

	/**
	 * Get Contextual Modules Options
	 * @since 	3.5.0
	 * @version	3.6.1
	 * @return 	array 
	 */
	public static function get_contextual_options() {
		// Blog Page
		if( is_home() ) {
			return [
				'container' => get_theme_mod( 'content-layout-container-blog' ),
				'modules' 	=> get_theme_mod( 'content-layout-modules-blog' )
			];
		}

		// Page Specific Mods
		$pages = get_pages();
		foreach( $pages as $page ) {		
			$ID = $page->ID;
			if( is_page( $ID ) ) { // default must be provided since we do not set in customizer
				return [
					'container' => get_theme_mod( 'content-layout-container-page-' . $ID, 'container' ),
					'modules' 	=> get_theme_mod( 'content-layout-modules-page-' . $ID, [ 'content', 'primary' ] )
				]; 
			}
		}

		// 404 Page Mods
		$fof = get_theme_mod( 'page_for_404', '0' );
		if( is_404() && $fof !== '' ) { // default must be provided since we do not set in customizer
			return [
				'container' => get_theme_mod( 'content-layout-container-page-' . $fof, 'container' ),
				'modules' 	=> get_theme_mod( 'content-layout-modules-page-' . $fof, [ 'content', 'primary' ] )
			]; 
		}

		// Post Types Archives And Singular Context Mods 
		$public_posts = get_post_types( [ 'public' => true, 'publicly_queryable' => true ] ); 

		foreach( $public_posts as $type ) { 
			if( is_post_type_archive( $type ) ) {
				return [
					'container' => get_theme_mod( 'content-layout-container-' . $type . '-archive' ),
					'modules' 	=> get_theme_mod( 'content-layout-modules-' . $type . '-archive' )
				]; 
			}

			if( is_singular( $type ) ) {  
				$modules 	= get_theme_mod( 'content-layout-modules-' . $type . '-singular' ); 
				if( wecodeart_gutenberg_wide_or_full_content() ) $modules = [ 'content' ]; // Return content only 
				
				return [
					'container' => get_theme_mod( 'content-layout-container-' . $type . '-singular' ),
					'modules' 	=> $modules
				];
			}
		} 

		// Everywhere/Defaults
		return [
			'container' => get_theme_mod( 'content-layout-container' ),
			'modules' 	=> get_theme_mod( 'content-layout-modules' )
		];
	}

	/**
	 * Return the Inner final HTML with modules selected by user for each page.
	 * @since 	v1.0
	 * @version	v3.6.0.4
	 * @return 	void
	 */
	public function register_sidebars() {
		$primary = array(
			'class'         => 'primary',
			'id'            => 'primary',
			'name'          => __( 'Primary Sidebar', 'wecodeart' ),
			'description'   => __( 'This is the default Primary Sidebar.', 'wecodeart' ),
			'before_widget' => '<div id="%1$s" class="widget %2$s">',
			'after_widget'  => '</div>',
			'before_title'  => '<h4 class="widget__title">',
			'after_title'   => '</h4>'
		);
		register_sidebar( $primary );
		if ( apply_filters( 'wecodeart/filter/sidebars/secondary/enable', false ) ) {
			$secondary = array(
				'class'         => 'secondary',
				'id'            => 'secondary',
				'name'          => __( 'Secondary Sidebar', 'wecodeart' ),
				'description'   => __( 'Secondary Sidebar - only enabled via filter.', 'wecodeart' ),
				'before_widget' => '<div id="%1$s" class="widget %2$s">',
				'after_widget'  => '</div>',
				'before_title'  => '<h4 class="widget__title">',
				'after_title'   => '</h4>'
			);
			register_sidebar( $secondary );
		}
	}
}