<?php
/**
 * WeCodeArt Framework.
 *
 * WARNING: This file is part of the core WeCodeArt Framework. DO NOT edit this file under any circumstances.
 * Please do all modifications in the form of a child theme.
 *
 * @package 	WeCodeArt Framework
 * @subpackage  Header Woo Cart
 * @since	 	3.9.5
 * @version    	4.0.7
 */

defined( 'ABSPATH' ) || exit();

use WeCodeArt\Markup;

/**
 * @see     WeCodeArt\Support\WooCommerce\display_cart_module
 * @param   string $subtotal    Escaped above - wp_kses_post
 * @param   string $count       Escaped above - wp_kses_data
 */
?>
<button id="mini-cart" type="button" class="dropdown-toggle"
    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"
    title="<?php esc_attr_e( 'View your shopping cart', wecodeart_config( 'textdomain' ) ); ?>">
    <span class="screen-reader-text"><?php esc_html_e( 'Show Cart', wecodeart_config( 'textdomain' ) ); ?></span>
    <?php
    
        // Subtotal
        Markup::template( [ 'header/woo-cart', 'subtotal' ], [
            'subtotal'  => $subtotal,
        ] );
        
        // Count
        Markup::template( [ 'header/woo-cart', 'count' ], [
            'count'     => $count,
        ] );

    ?>
</button>
<div class="dropdown-menu dropdown-menu-right" id="mini-woocommerce-cart" aria-labelledby="mini-cart">
    <div class="widget_shopping_cart_content"></div>
</div>