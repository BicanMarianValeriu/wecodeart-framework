<?php
/**
 * Title: Call to Action (Center)
 * Slug: wecodeart/cta-center
 * Categories: wecodeart, wecodeart-cta
 */
?>
<!-- wp:cover {"url":"https://pd.w.org/2023/01/42163d169550d5270.03657997.jpg","dimRatio":80,"minHeight":50,"gradient":"primary-to-vivid-purple","align":"full","style":{"spacing":{"margin":{"top":"0","bottom":"0"},"padding":{"top":"var:preset|spacing|lg","bottom":"var:preset|spacing|lg"}}}} -->
<div class="wp-block-cover alignfull" style="margin-top:0;margin-bottom:0;padding-top:var(--wp--preset--spacing--lg);padding-bottom:var(--wp--preset--spacing--lg);min-height:50px">
    <span aria-hidden="true" class="wp-block-cover__background has-background-dim-80 has-background-dim wp-block-cover__gradient-background has-background-gradient has-primary-to-vivid-purple-gradient-background"></span>
    <img class="wp-block-cover__image-background" alt="" src="https://pd.w.org/2023/01/42163d169550d5270.03657997.jpg" data-object-fit="cover" />
    <div class="wp-block-cover__inner-container">
        <!-- wp:group {"layout":{"type":"constrained"}} -->
        <div class="wp-block-group">
            <!-- wp:heading {"textAlign":"center","className":"fw-300"} -->
            <h2 class="has-text-align-center fw-300"><?php printf( esc_html__( 'Ready to create with %s?', 'wecodeart' ), '<strong>WeCodeArt Framework</strong>' ); ?></h2>
            <!-- /wp:heading -->
            <!-- wp:paragraph {"align":"center","style":{"spacing":{"margin":{"top":"var:preset|spacing|xs"}}},"className":"fw-300"} -->
            <p class="has-text-align-center fw-300" style="margin-top:var(--wp--preset--spacing--xs)"><?php esc_html_e( 'WeCodeArt Framework is a base WP theme, Super Fast, Optimized, and ready for any shape.', 'wecodeart' ); ?></p>
            <!-- /wp:paragraph -->
            <!-- wp:buttons {"className":"","layout":{"type":"flex","justifyContent":"center"}} -->
            <div class="wp-block-buttons">
                <!-- wp:button {"backgroundColor":"white","textColor":"dark","style":{"border":{"radius":"40px"},"spacing":{"padding":{"right":"var:preset|spacing|md","left":"var:preset|spacing|md","top":"var:preset|spacing|sm","bottom":"var:preset|spacing|sm"}}}} -->
                <div class="wp-block-button">
                    <a class="wp-block-button__link has-dark-color has-white-background-color has-text-color has-background wp-element-button" href="#" style="border-radius:40px;padding-top:var(--wp--preset--spacing--sm);padding-right:var(--wp--preset--spacing--md);padding-bottom:var(--wp--preset--spacing--sm);padding-left:var(--wp--preset--spacing--md)">Download Now</a>
                </div>
                <!-- /wp:button -->
            </div>
            <!-- /wp:buttons -->
        </div>
        <!-- /wp:group -->
    </div>
</div>
<!-- /wp:cover -->