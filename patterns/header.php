<?php
/**
 * Title: Header
 * Slug: wecodeart/header
 * Categories: wecodeart, header
 * Block Types: core/template-part/header
 * Inserter: false
 */
?>
<!-- wp:group {"align":"full","layout":{"inherit":true}} -->
<div class="wp-block-group alignfull">
    <!-- wp:columns {"isStackedOnMobile":false,"className":"justify-content-between"} -->
    <div class="wp-block-columns is-not-stacked-on-mobile justify-content-between">
        <!-- wp:column {"verticalAlignment":"center","className":"col-auto col-md"} -->
        <div class="wp-block-column is-vertically-aligned-center col-auto col-md">
            <!-- wp:social-links {"iconColor":"primary","style":{"spacing":{"blockGap":{"left":"var:preset|spacing|xs"}}},"className":"is-style-logos-only my-0"} -->
            <ul class="wp-block-social-links has-icon-color is-style-logos-only my-0">
                <!-- wp:social-link {"url":"https://wordpress.org/themes/wecodeart/","service":"wordpress"} /-->
                <!-- wp:social-link {"url":"https://www.facebook.com/mvbican/","service":"facebook"} /-->
            </ul>
            <!-- /wp:social-links -->
        </div>
        <!-- /wp:column -->
        <!-- wp:column {"verticalAlignment":"center","style":{"spacing":{"blockGap":"0","padding":{"top":"var:preset|spacing|xs","bottom":"var:preset|spacing|xs"}}},"className":"col-auto"} -->
        <div class="wp-block-column is-vertically-aligned-center col-auto" style="padding-top:var(--wp--preset--spacing--xs);padding-bottom:var(--wp--preset--spacing--xs)">
            <!-- wp:site-title {"textAlign":"center","style":{"typography":{"textTransform":"uppercase","fontStyle":"normal","fontWeight":"700"},"elements":{"link":{"color":{"text":"var:preset|color|primary"}}}},"fontSize":"normal"} /-->
            <!-- wp:paragraph {"align":"center","style":{"elements":{"link":{"color":{"text":"var:preset|color|secondary"}}}},"textColor":"secondary"} -->
            <p class="has-text-align-center has-secondary-color has-text-color has-link-color"><?php esc_html_e( 'Modular FSE Theme', 'wecodeart' ); ?></p>
            <!-- /wp:paragraph -->
        </div>
        <!-- /wp:column --> 
        <!-- wp:column {"verticalAlignment":"center","className":"col-auto col-md"} -->
        <div class="wp-block-column is-vertically-aligned-center col-auto col-md">
            <!-- wp:navigation {"textColor":"primary","openSubmenusOnClick":true,"overlayBackgroundColor":"primary","overlayTextColor":"white","layout":{"type":"flex","justifyContent":"right","orientation":"horizontal"},"style":{"typography":{"fontStyle":"normal","fontWeight":"500","textTransform":"uppercase"}},"fontSize":"small"} -->
                <!-- wp:navigation-link {"label":"<?php esc_html_e( 'Blog', 'wecodeart' ); ?>","type":"custom","url":"<?php echo esc_url( get_permalink( get_option( 'page_for_posts' ) ) ); ?>","isTopLevelLink":true} /-->
                <!-- wp:navigation-link {"label":"<?php esc_html_e( 'About', 'wecodeart' ); ?>","type":"custom","url":"<?php echo esc_url( get_permalink( get_page_by_path( 'about' ) ) ); ?>","isTopLevelLink":true} /-->
                <!-- wp:loginout {"displayLoginAsForm":true,"className":"is-style-modal"} /-->
                <!-- wp:search {"showLabel":false,"placeholder":"<?php esc_html_e( 'Looking for...?', 'wecodeart' ); ?>","buttonPosition":"button-only","buttonUseIcon":true,"backgroundColor":"primary","textColor":"white"} /-->
            <!-- /wp:navigation -->
        </div>
        <!-- /wp:column -->
    </div>
    <!-- /wp:columns -->
</div>
<!-- /wp:group -->