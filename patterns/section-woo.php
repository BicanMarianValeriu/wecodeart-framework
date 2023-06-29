<?php
/**
 * Title: WooCommerce
 * Slug: wecodeart/section-woo
 * Categories: wecodeart, wecodeart-cta
 */
?>
<!-- wp:group {"align":"full","style":{"spacing":{"padding":{"top":"var:preset|spacing|xxl","right":"var:preset|spacing|g","left":"var:preset|spacing|g"},"margin":{"top":"0","bottom":"0"}}},"backgroundColor":"primary","textColor":"white","layout":{"type":"constrained"}} -->
<div class="wp-block-group alignfull has-white-color has-primary-background-color has-text-color has-background" style="margin-top:0;margin-bottom:0;padding-top:var(--wp--preset--spacing--xxl);padding-right:var(--wp--preset--spacing--g);padding-left:var(--wp--preset--spacing--g)">
    <!-- wp:group {"layout":{"type":"flex","flexWrap":"nowrap","justifyContent":"center"}} -->
    <div class="wp-block-group">
        <!-- wp:group {"style":{"spacing":{"blockGap":"0","padding":{"top":"0.25rem","right":"0.25rem","bottom":"0.25rem","left":"0.25rem"}},"typography":{"lineHeight":"1"}},"backgroundColor":"accent","className":"overflow-hidden rounded-pill w-auto","layout":{"type":"flex","flexWrap":"nowrap","justifyContent":"center"}} -->
            <div class="wp-block-group overflow-hidden rounded-pill w-auto has-accent-background-color has-background" style="padding-top:0.25rem;padding-right:0.25rem;padding-bottom:0.25rem;padding-left:0.25rem;line-height:1">
            <!-- wp:paragraph {"style":{"typography":{"fontSize":"0.6rem"},"layout":{"selfStretch":"fill"},"spacing":{"padding":{"right":"0.45rem","bottom":"0.25rem","left":"0.45rem","top":"0.25rem"}}},"backgroundColor":"primary","textColor":"white","className":"fw-700 text-uppercase rounded-pill"} -->
            <p class="fw-700 text-uppercase rounded-pill has-white-color has-primary-background-color has-text-color has-background" style="padding-top:0.25rem;padding-right:0.45rem;padding-bottom:0.25rem;padding-left:0.45rem;font-size:0.6rem">New</p>
            <!-- /wp:paragraph -->
            <!-- wp:paragraph {"style":{"spacing":{"margin":{"right":"var:preset|spacing|g","left":"var:preset|spacing|g"}}},"textColor":"dark","fontSize":"small"} -->
            <p class="has-dark-color has-text-color has-small-font-size" style="margin-right:var(--wp--preset--spacing--g);margin-left:var(--wp--preset--spacing--g)">Blockified</p>
            <!-- /wp:paragraph -->
        </div>
        <!-- /wp:group -->
    </div>
    <!-- /wp:group -->
    <!-- wp:heading {"textAlign":"center"} -->
    <h2 class="wp-block-heading has-text-align-center"><strong>WooCommerce</strong> <mark style="background-color:rgba(0, 0, 0, 0)" class="has-inline-color has-white-color has-shadows-into-light-font-family"><?php esc_html_e( 'Ready', 'wecodeart' ); ?></mark></h2>
    <!-- /wp:heading -->
    <!-- wp:separator {"backgroundColor":"white","className":"is-style-faded"} -->
    <hr class="wp-block-separator has-text-color has-white-color has-alpha-channel-opacity has-white-background-color has-background is-style-faded" />
    <!-- /wp:separator -->
    <!-- wp:paragraph {"align":"center","fontSize":"medium","fontFamily":"shadows-into-light"} -->
    <p class="has-text-align-center has-shadows-into-light-font-family has-medium-font-size"><?php esc_html_e( 'Seamless integration with WooCommerce right from the start!', 'wecodeart' ); ?></p>
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