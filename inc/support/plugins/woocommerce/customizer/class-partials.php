<?php
/**
 * WeCodeArt Framework.
 *
 * WARNING: This file is part of the core WeCodeArt Framework. DO NOT edit this file under any circumstances.
 * Please do all modifications in the form of a child theme.
 *
 * @package 	WeCodeArt Framework
 * @subpackage 	WP-Customizer Woo Partials
 * @copyright   Copyright (c) 2021, WeCodeArt Framework
 * @since 		3.9.6
 * @version		5.0.0
 */

namespace WeCodeArt\Support\Plugins\WooCommerce\Customizer;

defined( 'ABSPATH' ) || exit;

/**
 * Customizer Partials
 */
class Partials {

	use \WeCodeArt\Singleton; 

	/**
	 * Send to Constructor
	 * @since x.x.x
	 */
	public function init() {}
		
	/**
	 * A function to render woo content with hooks in it
	 * Used for rendering callback in customizer only
	 *
	 * @since   3.5
	 *
	 * @return  void 
	 */
	public static function render_content() {  
		do_action( 'woocommerce_before_main_content' );
		if ( is_singular( 'product' ) ) {
			while ( have_posts() ) :
				the_post();
				wc_get_template_part( 'content', 'single-product' );
			endwhile;	
		} else {
			?>
			<header class="woocommerce-products-header">
				<?php if( apply_filters( 'woocommerce_show_page_title', true ) ) : ?>
					<h1 class="woocommerce-products-header__title page-title"><?php woocommerce_page_title(); ?></h1>
				<?php endif; ?>
				<?php do_action( 'woocommerce_archive_description' ); ?>
			</header>
			<?php if( woocommerce_product_loop() ) {
				do_action( 'woocommerce_before_shop_loop' );
				woocommerce_product_loop_start();
				if( wc_get_loop_prop( 'total' ) ) {
					while ( have_posts() ) {
						the_post(); 
						do_action( 'woocommerce_shop_loop' );
						wc_get_template_part( 'content', 'product' );
					}
				}
				woocommerce_product_loop_end();
				do_action( 'woocommerce_after_shop_loop' );
			} else { 
				do_action( 'woocommerce_no_products_found' );
			} 
		}
		do_action( 'woocommerce_after_main_content' );  
	}
}