<?php
/**
 * WeCodeArt Framework.
 *
 * WARNING: This file is part of the core WeCodeArt Framework. DO NOT edit this file under any circumstances.
 * Please do all modifications in the form of a child theme.
 *
 * @package 	WeCodeArt Framework
 * @subpackage 	Core\Footer
 * @copyright   Copyright (c) 2019, WeCodeArt Framework
 * @since 		3.5
 * @version		4.0.1
 */

namespace WeCodeArt\Core;

defined( 'ABSPATH' ) || exit();

use WeCodeArt\Markup;
use WeCodeArt\Customizer;

/**
 * Handles Footer Area of the Framework
 */
class Footer {

	use \WeCodeArt\Singleton;

	/**
	 * Send to Constructor
	 * @since 3.6.2
	 */
	public function init() {
		add_action( 'wecodeart_footer_markup', 		[ $this, 'footer_markup' ] );
		add_action( 'wecodeart/hook/footer/bottom', [ $this, 'attribution_markup' ], 95 );
		add_action( 'widgets_init', 				[ $this, 'register_sidebars' ] );
	}
	
	/**
	 * Output FOOTER markup function
	 *
	 * @uses	WeCodeArt\Markup::wrap()
	 * @since 	1.0
	 * @version	3.7.0
	 *
	 * @return 	HTML 
	 */
	public function footer_markup() {
		Markup::wrap( 'footer', [ [
			'tag' 	=> 'footer',
			'attrs' => [
				'id' 		=> 'footer', 
				'class'		=> 'footer', 
				'itemscope' => 'itemscope',
				'itemtype' 	=> 'http://schema.org/WPFooter'
			]
		] ], function() {
			/** 
			 * @hook	'wecodeart/hook/footer/top'
			 */ 
			do_action( 'wecodeart/hook/footer/top' );
			
			/**
			 * Render the sidebars
			 */
			self::render_widgets();
			
			/** 
			 * @hook	'wecodeart/hook/footer/bottom' 	
			 * @hooked 	{
			 * - WeCodeArt\Core\Footer->attribution_markup()	- 95	Attribution 
			 * }
			 */ 
			do_action( 'wecodeart/hook/footer/bottom' ); 
		} ); 
	}

	/**
	 * Footer Attribution
	 *
	 * @uses	WeCodeArt\Markup::wrap()
	 * @since 	1.0
	 * @version 3.9.5
	 *
	 * @return 	void
	 */
	public function attribution_markup() { 

		Markup::wrap( 'footer-attribution', [ 
			[ 'tag' => 'div', 'attrs' => [ 'class' => 'footer__attribution attribution' ] ], 
			[ 'tag' => 'div', 'attrs' => [ 'class' => 'container-fluid' ] ], 
			[ 'tag' => 'div', 'attrs' => [ 'class' => 'row py-3' ] ], 
			[ 'tag' => 'div', 'attrs' => [ 'class' => 'col text-center' ] ] 
		], function() {   
			?>
			<span class="attribution__copyright"><?php echo esc_html( get_theme_mod( 'footer-copyright-text' ) ); ?></span>
			<span class="attribution__credits">
				<?php
					printf( 
						esc_html__( 'Built on %1$s.', wecodeart_config( 'textdomain' ) ), 
						'<a href="https://www.wecodeart.com/" target="_blank">WeCodeArt Framework</a>' 
					);
				?>
			</span>
			<?php
		} );  
		
	}

	/**
	 * Footer Widgetized Area
	 *
	 * @since 	3.7.7
	 *
	 * @return 	void 
	 */
	public static function render_column( int $index ) {
		if( ! is_active_sidebar( 'footer-' . $index ) ) return;
		/**
		 * @see WP function `dynamic_sidebar`
		 * @see WeCodeArt\Markup::wrap()
		 */
		Markup::wrap( 'footer-column-' . (string) $index , [ [
			'tag' 	=> 'div',
			'attrs' => [ 
				'class'	=> 'footer__column col-12 col-lg mb-4',
			]
		] ], 'dynamic_sidebar', [ 'footer-' . (string) $index ] );
	} 

	/**
	 * This function generates the columns fot the footer
	 *
	 * @since	1.5
	 * @version	3.9.5
	 *
	 * @return 	array
	 */
	public static function footer_widgets() {
		$columns = apply_filters( 'wecodeart/filter/footer/columns', (int) 4 );

		$widgets = [];
		foreach( range( 1, $columns ) as $column ) {
			$widgets['footer-' . (string) $column ] = [
				'id'		=> 'footer-' . $column,
				'label'    	=> sprintf( esc_html__( 'Footer %s', wecodeart_config( 'textdomain' ) ), $column ),
				'callback' 	=> function() use ( $column ) {
					self::render_column( $column );
				}
			];
		}
		
		// Filter the generated array.
		return apply_filters( 'wecodeart/filter/footer/widgets', (array) $widgets );
	} 

	/**
	 * Return the Footer final widgets HTML with modules selected by user
	 *
	 * @uses	WeCodeArt\Markup::wrap()
	 * @uses	WeCodeArt\Markup::sortable()
	 * @since	3.5
	 * @version 3.7.7
	 *
	 * @return 	void
	 */
	public static function render_widgets() {  
		Markup::wrap( 'footer-widgets', [
			[ 'tag' => 'div', 'attrs' => [ 'class' => 'footer__widgets' ] ],
			[ 'tag' => 'div', 'attrs' => [ 'class' => get_theme_mod( 'footer-layout-container' ) ] ],
			[ 'tag' => 'div', 'attrs' => [ 'class' => 'row pt-4' ] ]
		], [ Markup::get_instance(), 'sortable' ], [ 
			self::footer_widgets(), 
			get_theme_mod( 'footer-layout-modules' ) 
		] ); 
	}

	/**
	 * Register Sidebars Based on Active Options
	 *
	 * @since	unknown
	 * @version	3.9.7
	 *
	 * @return 	void
	 */
	public function register_sidebars() {
		// Get Default Footer Columns.
		$columns 	= self::footer_widgets();
		$options	= get_theme_mod( 'footer-layout-modules', Customizer::get_defaults( 'footer-layout-modules' ) );

		$active 	= array_intersect_key( $options, array_keys( $columns ) );

		if( empty( $active ) ) {
			return;
		}

		// Register Sidebar for each active footer columns.
		$filtered = array_filter( $columns, function( $item ) use( $active ) {
			return in_array( $item['id'], $active );
		} );

		$sidebars = wp_list_filter( $filtered, [ 
			'sidebar' => false
		], 'NOT' );

		wecodeart( 'register_sidebars', $sidebars );
	}
}