<?php
/**
 * Title: Call to Action (Border)
 * Slug: wecodeart/cta-border
 * Categories: wecodeart, wecodeart-cta
 */
?>
<!-- wp:group {"style":{"spacing":{"padding":{"top":"var:preset|spacing|xl","bottom":"var:preset|spacing|xl"}}},"layout":{"type":"constrained"}} -->
<div class="wp-block-group" style="padding-top:var(--wp--preset--spacing--xl);padding-bottom:var(--wp--preset--spacing--xl)">
    <!-- wp:group {"style":{"spacing":{"padding":{"top":"var:preset|spacing|lg","right":"var:preset|spacing|g","bottom":"var:preset|spacing|lg","left":"var:preset|spacing|g"}},"border":{"color":"#dfdfdf","width":"1px"}},"className":"rounded shadow-sm","layout":{"type":"constrained"}} -->
    <div class="wp-block-group rounded shadow-sm has-border-color" style="border-color:#dfdfdf;border-width:1px;padding-top:var(--wp--preset--spacing--lg);padding-right:var(--wp--preset--spacing--g);padding-bottom:var(--wp--preset--spacing--lg);padding-left:var(--wp--preset--spacing--g)">
        <!-- wp:heading {"textAlign":"center","className":"fw-300"} -->
        <h2 class="has-text-align-center fw-300"><?php printf( esc_html__( 'Ready to create with %s?', 'wecodeart' ), '<strong>WeCodeArt Framework</strong>' ); ?></h2>
        <!-- /wp:heading -->
        <!-- wp:paragraph {"align":"center","style":{"spacing":{"margin":{"top":"var:preset|spacing|xs"}}},"className":"fw-300"} -->
        <p class="has-text-align-center fw-300" style="margin-top:var(--wp--preset--spacing--xs)"><?php esc_html_e( 'WeCodeArt Framework is a base WP theme, Super Fast, Optimized, and ready for any shape.', 'wecodeart' ); ?></p>
        <!-- /wp:paragraph -->
        <!-- wp:buttons {"className":"","layout":{"type":"flex","justifyContent":"center"}} -->
        <div class="wp-block-buttons">
            <!-- wp:button {"backgroundColor":"primary","style":{"border":{"radius":"40px"},"spacing":{"padding":{"right":"var:preset|spacing|md","left":"var:preset|spacing|md","top":"var:preset|spacing|sm","bottom":"var:preset|spacing|sm"}}}} -->
            <div class="wp-block-button">
                <a class="wp-block-button__link has-primary-background-color has-background wp-element-button" href="#" style="border-radius:40px;padding-top:var(--wp--preset--spacing--sm);padding-right:var(--wp--preset--spacing--md);padding-bottom:var(--wp--preset--spacing--sm);padding-left:var(--wp--preset--spacing--md)"><?php esc_html_e( 'Download Now', 'wecodeart' ); ?></a>
            </div>
            <!-- /wp:button -->
        </div>
        <!-- /wp:buttons -->
    </div>
    <!-- /wp:group -->
</div>
<!-- /wp:group -->