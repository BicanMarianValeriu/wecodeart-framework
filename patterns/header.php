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
        <!-- wp:column {"verticalAlignment":"center","className":"col-auto col-md-4"} -->
        <div class="wp-block-column is-vertically-aligned-center col-auto col-md-4">
            <!-- wp:social-links {"iconColor":"primary","style":{"spacing":{"blockGap":{"left":"var:preset|spacing|xs"}}},"className":"is-style-logos-only my-0"} -->
            <ul class="wp-block-social-links has-icon-color is-style-logos-only my-0">
                <!-- wp:social-link {"url":"https://wordpress.org/themes/wecodeart/","service":"wordpress"} /-->
                <!-- wp:social-link {"url":"https://www.facebook.com/mvbican/","service":"facebook"} /-->
            </ul>
            <!-- /wp:social-links -->
        </div>
        <!-- /wp:column -->
        <!-- wp:column {"verticalAlignment":"center","className":"col-auto"} -->
        <div class="wp-block-column is-vertically-aligned-center col-auto">
            <!-- wp:site-logo {"align":"center","width":60} /-->
        </div>
        <!-- /wp:column -->
        <!-- wp:column {"verticalAlignment":"center","className":"col-auto col-md-4"} -->
        <div class="wp-block-column is-vertically-aligned-center col-auto col-md-4">
            <!-- wp:navigation {"textColor":"primary","openSubmenusOnClick":true,"overlayBackgroundColor":"primary","overlayTextColor":"white","layout":{"type":"flex","justifyContent":"right","orientation":"horizontal"},"style":{"typography":{"fontStyle":"normal","fontWeight":"500","textTransform":"uppercase"}},"fontSize":"small"} -->
                <!-- wp:navigation-link {"label":"<?php esc_html_e( 'Blog', 'wecodeart' ); ?>","type":"custom","url":"<?php echo esc_url( get_permalink( get_option( 'page_for_posts' ) ) ); ?>","isTopLevelLink":true} /-->
                <!-- wp:navigation-link {"label":"<?php esc_html_e( 'About', 'wecodeart' ); ?>","type":"custom","url":"<?php echo esc_url( get_permalink( get_page_by_path( 'about' ) ) ); ?>","isTopLevelLink":true} /-->
                <!-- wp:loginout {"displayLoginAsForm":true,"className":"is-style-modal"} /-->
            <!-- /wp:navigation -->
        </div>
        <!-- /wp:column -->
    </div>
    <!-- /wp:columns -->
</div>
<!-- /wp:group -->