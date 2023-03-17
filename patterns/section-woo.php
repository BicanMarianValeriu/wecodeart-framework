<?php
/**
 * Title: WooCommerce
 * Slug: wecodeart/section-woo
 * Categories: wecodeart, wecodeart-cta
 */
?>
<!-- wp:group {"align":"full","style":{"spacing":{"padding":{"top":"var:preset|spacing|xxl","right":"var:preset|spacing|g","left":"var:preset|spacing|g"},"margin":{"top":"0","bottom":"0"}}},"backgroundColor":"primary","textColor":"white","layout":{"type":"constrained"}} -->
<div class="wp-block-group alignfull has-white-color has-primary-background-color has-text-color has-background" style="margin-top:0;margin-bottom:0;padding-top:var(--wp--preset--spacing--xxl);padding-right:var(--wp--preset--spacing--g);padding-left:var(--wp--preset--spacing--g)">
    <!-- wp:heading {"textAlign":"center"} -->
    <h2 class="wp-block-heading has-text-align-center"><strong>WooCommerce</strong> <mark style="background-color:rgba(0, 0, 0, 0)" class="has-inline-color has-white-color has-shadows-into-light-font-family"><?php esc_html_e( 'Ready', 'wecodeart' ); ?></mark></h2>
    <!-- /wp:heading -->
    <!-- wp:separator {"backgroundColor":"white","className":"is-style-faded"} -->
    <hr class="wp-block-separator has-text-color has-white-color has-alpha-channel-opacity has-white-background-color has-background is-style-faded" />
    <!-- /wp:separator -->
    <!-- wp:paragraph {"align":"center","fontSize":"medium","fontFamily":"shadows-into-light"} -->
    <p class="has-text-align-center has-shadows-into-light-font-family has-medium-font-size"><?php esc_html_e( 'Out of the box WooCommerce Integration!', 'wecodeart' ); ?></p>
    <!-- /wp:paragraph -->
    <!-- wp:paragraph {"align":"center","className":"fw-300","fontSize":"medium"} -->
    <p class="has-text-align-center fw-300 has-medium-font-size"><?php esc_html_e( 'Super-Optimized eCommerce website built with ease.', 'wecodeart' ); ?></p>
    <!-- /wp:paragraph -->
    <!-- wp:image {"align":"center","width":300,"height":140,"sizeSlug":"full","linkDestination":"none","className":"overflow-hidden","customStyle":"selector svg {\n  margin-bottom: -70px;\n}\n"} -->
    <figure class="wp-block-image aligncenter size-full is-resized overflow-hidden">
        <img src="<?php echo esc_url( get_parent_theme_file_uri( 'assets/images/logo-woocommerce.svg' ) ); ?>" alt="" width="300" height="140"/>
    </figure>
    <!-- /wp:image -->
</div>
<!-- /wp:group -->