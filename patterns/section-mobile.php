<?php
/**
 * Title: Mobile Ready
 * Slug: wecodeart/section-mobile
 * Categories: wecodeart, featured
 */
?>
<!-- wp:group {"align":"full","style":{"spacing":{"margin":{"top":"0","bottom":"0"},"padding":{"top":"var:preset|spacing|xxl","right":"var:preset|spacing|g","left":"var:preset|spacing|g"}}},"layout":{"type":"constrained"}} -->
<div class="wp-block-group alignfull" style="margin-top:0;margin-bottom:0;padding-top:var(--wp--preset--spacing--xxl);padding-right:var(--wp--preset--spacing--g);padding-left:var(--wp--preset--spacing--g)">
    <!-- wp:heading {"textAlign":"center","className":"fw-300"} -->
    <h2 class="wp-block-heading has-text-align-center fw-300"><?php
        
        printf(
            esc_html__( 'We are %s first ... %s', 'wecodeart' ),
            sprintf( '<strong>%s</strong>', esc_html__( 'MOBILE', 'wecodeart' ) ),
            sprintf( '<mark style="background-color:rgba(0, 0, 0, 0)" class="has-inline-color has-primary-color has-shadows-into-light-font-family">%s</mark>', esc_html__( 'too!', 'wecodeart' ) )
        );
    
    ?></h2>
    <!-- /wp:heading -->
    <!-- wp:separator {"backgroundColor":"accent","className":"is-style-faded"} -->
    <hr class="wp-block-separator has-text-color has-accent-color has-alpha-channel-opacity has-accent-background-color has-background is-style-faded"/>
    <!-- /wp:separator -->
    <!-- wp:paragraph {"align":"center","textColor":"secondary","className":"fw-300","fontSize":"medium"} -->
    <p class="has-text-align-center fw-300 has-secondary-color has-text-color has-medium-font-size"><?php esc_html_e( 'WeCodeArt Themes will look amazing on any device.', 'wecodeart' ); ?></p>
    <!-- /wp:paragraph -->
    <!-- wp:columns {"verticalAlignment":"bottom","style":{"spacing":{"margin":{"top":"var:preset|spacing|lg"}}},"className":"flex-wrap g-0 g-lg-5"} -->
    <div class="wp-block-columns are-vertically-aligned-bottom flex-wrap g-0 g-lg-5"
        style="margin-top:var(--wp--preset--spacing--lg)">
        <!-- wp:column {"verticalAlignment":"bottom","style":{"spacing":{"blockGap":"var:preset|spacing|md"}},"className":"col-12 col-md-6 col-lg"} -->
        <div class="wp-block-column is-vertically-aligned-bottom col-12 col-md-6 col-lg">
            <!-- wp:columns {"verticalAlignment":"top","isStackedOnMobile":false,"className":"mb-3"} -->
            <div class="wp-block-columns are-vertically-aligned-top is-not-stacked-on-mobile mb-3">
                <!-- wp:column {"verticalAlignment":"top","className":"col-auto order-md-last"} -->
                <div class="wp-block-column is-vertically-aligned-top col-auto order-md-last">
                    <!-- wp:image {"align":"center","width":"35px","height":"35px","scale":"contain","backgroundColor":"accent","textColor":"primary","customStyle":"selector svg {\n  padding: 5px\n}\n"} -->
                    <figure class="wp-block-image aligncenter size-large is-resized has-primary-color has-accent-background-color has-text-color has-background">
                        <img src="<?php echo esc_url( get_parent_theme_file_uri( 'assets/images/icon-desktop.svg' ) ); ?>" alt="" style="object-fit:contain;width:35px;height:35px" />
                    </figure>
                    <!-- /wp:image -->
                </div>
                <!-- /wp:column -->
                <!-- wp:column {"verticalAlignment":"top","style":{"spacing":{"blockGap":"var:preset|spacing|xs"}},"className":"has-text-align-md-right"} -->
                <div class="wp-block-column is-vertically-aligned-top has-text-align-md-right">
                    <!-- wp:heading {"level":3,"style":{"typography":{"fontStyle":"normal","fontWeight":"400"}},"className":"h4 is-style-default"} -->
                    <h3 class="wp-block-heading h4 is-style-default" style="font-style:normal;font-weight:400"><?php esc_html_e( '100% Responsive', 'wecodeart' ); ?></h3>
                    <!-- /wp:heading -->
                    <!-- wp:paragraph {"textColor":"secondary","fontSize":"small"} -->
                    <p class="fhas-secondary-color has-text-color has-small-font-size"><?php esc_html_e( 'WeCodeArt Themes are fully responsive and will adapt themselves to any mobile device.', 'wecodeart' ); ?></p>
                    <!-- /wp:paragraph -->
                </div>
                <!-- /wp:column -->
            </div>
            <!-- /wp:columns -->
        </div>
        <!-- /wp:column -->
        <!-- wp:column {"verticalAlignment":"bottom","className":"col-12 col-lg order-3 order-lg-2"} -->
        <div class="wp-block-column is-vertically-aligned-bottom col-12 col-lg order-3 order-lg-2">
            <!-- wp:image {"align":"center","id":2878,"sizeSlug":"full","linkDestination":"none","className":"mt-5 mt-lg-0 mb-3"} -->
            <figure class="wp-block-image aligncenter size-full mt-5 mt-lg-0 mb-3">
                <img src="<?php echo esc_url( get_parent_theme_file_uri( 'assets/images/laptop-mobile.png' ) ); ?>" alt="" />
            </figure>
            <!-- /wp:image -->
        </div>
        <!-- /wp:column -->
        <!-- wp:column {"verticalAlignment":"bottom","style":{"spacing":{"blockGap":"var:preset|spacing|md"}},"className":"col-12 col-md-6 col-lg order-2"} -->
        <div class="wp-block-column is-vertically-aligned-bottom col-12 col-md-6 col-lg order-2">
            <!-- wp:columns {"verticalAlignment":"top","isStackedOnMobile":false,"className":"mb-3"} -->
            <div class="wp-block-columns are-vertically-aligned-top is-not-stacked-on-mobile mb-3">
                <!-- wp:column {"verticalAlignment":"top","className":"col-auto"} -->
                <div class="wp-block-column is-vertically-aligned-top col-auto">
                    <!-- wp:image {"align":"center","width":"35px","height":"35px","scale":"contain","backgroundColor":"accent","textColor":"primary","customStyle":"selector svg {\n  padding: 5px\n}\n"} -->
                    <figure class="wp-block-image aligncenter size-large is-resized has-primary-color has-accent-background-color has-text-color has-background">
                        <img src="<?php echo esc_url( get_parent_theme_file_uri( 'assets/images/icon-eye.svg' ) ); ?>" alt="" style="object-fit:contain;width:35px;height:35px" />
                    </figure>
                    <!-- /wp:image -->
                </div>
                <!-- /wp:column -->
                <!-- wp:column {"verticalAlignment":"top","style":{"spacing":{"blockGap":"var:preset|spacing|xs"}}} -->
                <div class="wp-block-column is-vertically-aligned-top">
                    <!-- wp:heading {"level":3,"style":{"typography":{"fontStyle":"normal","fontWeight":"400"}},"className":"h4 is-style-default"} -->
                    <h3 class="wp-block-heading h4 is-style-default" style="font-style:normal;font-weight:400"><?php esc_html_e( 'Retina Ready', 'wecodeart' ); ?></h3>
                    <!-- /wp:heading -->
                    <!-- wp:paragraph {"textColor":"secondary","fontSize":"small"} -->
                    <p class="has-secondary-color has-text-color has-small-font-size"><?php esc_html_e( 'With WeCodeArt Themes your website will always look perfect on any device.', 'wecodeart' ); ?></p>
                    <!-- /wp:paragraph -->
                </div>
                <!-- /wp:column -->
            </div>
            <!-- /wp:columns -->
        </div>
        <!-- /wp:column -->
    </div>
    <!-- /wp:columns -->
</div>
<!-- /wp:group -->