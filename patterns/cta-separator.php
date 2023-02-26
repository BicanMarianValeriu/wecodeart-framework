<?php
/**
 * Title: Call to Action (Separator)
 * Slug: wecodeart/cta-separator
 * Categories: wecodeart, wecodeart-cta
 */
?>
<!-- wp:group {"align":"full","style":{"spacing":{"blockGap":"0"}},"layout":{"type":"constrained"}} -->
<div class="wp-block-group alignfull">
    <!-- wp:separator {"align":"full","style":{"spacing":{"margin":{"top":"0","bottom":"0"}},"dimensions":{"minHeight":"85px"}},"backgroundColor":"primary","className":"is-style-svg-lines flip","customStyle":"selector {\n  margin-bottom: -1px;\n}\n"} -->
    <hr class="wp-block-separator alignfull has-text-color has-primary-color has-alpha-channel-opacity has-primary-background-color has-background is-style-svg-lines flip" style="min-height:85px;margin-top:0;margin-bottom:0" />
    <!-- /wp:separator -->
    <!-- wp:group {"align":"full","style":{"spacing":{"padding":{"right":"var:preset|spacing|g","left":"var:preset|spacing|g"}}},"backgroundColor":"primary","textColor":"white","layout":{"type":"constrained"}} -->
    <div class="wp-block-group alignfull has-white-color has-primary-background-color has-text-color has-background" style="padding-right:var(--wp--preset--spacing--g);padding-left:var(--wp--preset--spacing--g)">
        <!-- wp:columns {"verticalAlignment":"center","className":"flex-wrap"} -->
        <div class="wp-block-columns are-vertically-aligned-center flex-wrap">
            <!-- wp:column {"verticalAlignment":"center","style":{"spacing":{"blockGap":"var:preset|spacing|xs"}},"className":"col-12 col-lg has-text-align-center has-text-align-lg-left","layout":{"type":"default"}} -->
            <div class="wp-block-column is-vertically-aligned-center col-12 col-lg has-text-align-center has-text-align-lg-left">
                <!-- wp:heading {"className":"fw-300"} -->
                <h2 class="wp-block-heading fw-300"><?php printf( esc_html__( 'Ready to create with %s?', 'wecodeart' ), '<strong>WeCodeArt Framework</strong>' ); ?></h2>
                <!-- /wp:heading -->
                <!-- wp:paragraph {"className":"fw-300"} -->
                <p class="fw-300"><?php esc_html_e( 'WeCodeArt Framework is a base WP theme, Super Fast, Optimized, and ready for any shape.', 'wecodeart' ); ?></p>
                <!-- /wp:paragraph -->
            </div>
            <!-- /wp:column -->
            <!-- wp:column {"verticalAlignment":"center","style":{"spacing":{"blockGap":"0"}},"className":"col-12 col-lg-auto"} -->
            <div class="wp-block-column is-vertically-aligned-center col-12 col-lg-auto">
                <!-- wp:buttons {"className":"justify-content-center justify-content-lg-start"} -->
                <div class="wp-block-buttons justify-content-center justify-content-lg-start">
                    <!-- wp:button {"backgroundColor":"white","textColor":"dark","style":{"border":{"radius":"40px"},"spacing":{"padding":{"right":"var:preset|spacing|md","left":"var:preset|spacing|md","top":"var:preset|spacing|sm","bottom":"var:preset|spacing|sm"}}}} -->
                    <div class="wp-block-button">
                        <a class="wp-block-button__link has-dark-color has-white-background-color has-text-color has-background wp-element-button" href="#" style="border-radius:40px;padding-top:var(--wp--preset--spacing--sm);padding-right:var(--wp--preset--spacing--md);padding-bottom:var(--wp--preset--spacing--sm);padding-left:var(--wp--preset--spacing--md)"><?php esc_html_e( 'Download Now', 'wecodeart' ); ?></a>
                    </div>
                    <!-- /wp:button -->
                    <!-- wp:button {"textColor":"white","className":"is-style-link"} -->
                    <div class="wp-block-button is-style-link">
                        <a class="wp-block-button__link has-white-color has-text-color wp-element-button"><?php esc_html_e( 'View Themes', 'wecodeart' ); ?></a>
                    </div>
                    <!-- /wp:button -->
                </div>
                <!-- /wp:buttons -->
            </div>
            <!-- /wp:column -->
        </div>
        <!-- /wp:columns -->
    </div>
    <!-- /wp:group -->
    <!-- wp:separator {"align":"full","style":{"spacing":{"margin":{"top":"0","bottom":"0"}},"dimensions":{"minHeight":"85px"}},"backgroundColor":"primary","className":"is-style-svg-lines","customStyle":""} -->
    <hr class="wp-block-separator alignfull has-text-color has-primary-color has-alpha-channel-opacity has-primary-background-color has-background is-style-svg-lines" style="min-height:85px;margin-top:0;margin-bottom:0" />
    <!-- /wp:separator -->
</div>
<!-- /wp:group -->