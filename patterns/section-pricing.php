<?php
/**
 * Title: Pricing
 * Slug: wecodeart/section-pricing
 * Categories: wecodeart
 */
?>
<!-- wp:group {"align":"full","style":{"spacing":{"padding":{"right":"var:preset|spacing|g","left":"var:preset|spacing|g","top":"var:preset|spacing|xl","bottom":"var:preset|spacing|xl"},"margin":{"top":"0","bottom":"0"}}},"layout":{"inherit":false,"contentSize":"900px","type":"constrained"}} -->
<div class="wp-block-group alignfull" style="margin-top:0;margin-bottom:0;padding-top:var(--wp--preset--spacing--xl);padding-right:var(--wp--preset--spacing--g);padding-bottom:var(--wp--preset--spacing--xl);padding-left:var(--wp--preset--spacing--g)">
    <!-- wp:heading {"textAlign":"center","className":"is-style-underline-brush"} -->
    <h2 class="wp-block-heading has-text-align-center is-style-underline-brush"><?php
    
        printf(
            esc_html__( 'Choose %s', 'wecodeart' ), 
            sprintf( '<strong><span class="has-underline">%s</span></strong>', esc_html__( 'Your Plan', 'wecodeart' ) )
        );
        
    ?></h2>
    <!-- /wp:heading -->
    <!-- wp:paragraph {"align":"center","className":"aligncenter aligncenter"} -->
    <p class="has-text-align-center aligncenter"><?php esc_html_e( 'Simple pricing plans for any size team.', 'wecodeart' ); ?></p>
    <!-- /wp:paragraph -->
    <!-- wp:columns {"style":{"spacing":{"margin":{"top":"var:preset|spacing|xl"}}},"className":"align-items-stretch"} -->
    <div class="wp-block-columns align-items-stretch" style="margin-top:var(--wp--preset--spacing--xl)">
        <!-- wp:column -->
        <div class="wp-block-column">
            <!-- wp:pattern {"slug":"wecodeart/pricing"} /-->
        </div>
        <!-- /wp:column -->
        <!-- wp:column -->
        <div class="wp-block-column">
            <!-- wp:pattern {"slug":"wecodeart/pricing-featured"} /-->
        </div>
        <!-- /wp:column -->
    </div>
    <!-- /wp:columns -->
</div>
<!-- /wp:group -->