<?php
/**
 * Title: Hero (with separator)
 * Slug: wecodeart/section-hero
 * Categories: wecodeart, wecodeart-hero
 */
?>
<!-- wp:group {"align":"full","style":{"spacing":{"blockGap":"0","margin":{"top":"0","bottom":"0"}}},"layout":{"type":"constrained"}} -->
<div class="wp-block-group alignfull" style="margin-top:0;margin-bottom:0">
    <!-- wp:group {"align":"full","style":{"spacing":{"padding":{"top":"var:preset|spacing|xxl","bottom":"var:preset|spacing|xxl","right":"var:preset|spacing|g","left":"var:preset|spacing|g"},"blockGap":"var:preset|spacing|lg"}},"backgroundColor":"primary","textColor":"white","className":"","layout":{"type":"constrained"}} -->
    <div class="wp-block-group alignfull has-white-color has-primary-background-color has-text-color has-background" style="padding-top:var(--wp--preset--spacing--xxl);padding-right:var(--wp--preset--spacing--g);padding-bottom:var(--wp--preset--spacing--xxl);padding-left:var(--wp--preset--spacing--g)">
        <!-- wp:heading {"textAlign":"center","level":1,"className":"display-4 fw-700"} -->
        <h1 class="wp-block-heading has-text-align-center display-4 fw-700"><?php esc_html_e( 'Build your website with WeCodeArt', 'wecodeart' ); ?></h1>
        <!-- /wp:heading -->
        <!-- wp:heading {"textAlign":"center","className":"display-5 fw-700 mt-0 is-style-underline-brush","customStyle":"selector .has-underline::after {\n  background: currentColor;\n}\n"} -->
        <h2 class="wp-block-heading has-text-align-center display-5 fw-700 mt-0 is-style-underline-brush"><?php printf( esc_html__( 'Get it now. Is %s forever!', 'wecodeart' ), sprintf( '<span class="has-underline">%s</span>', esc_html__( 'FREE', 'wecodeart' ) ) ); ?></h2>
        <!-- /wp:heading -->
        <!-- wp:group {"layout":{"type":"constrained","contentSize":"615px"}} -->
        <div class="wp-block-group">
            <!-- wp:paragraph {"align":"center","className":"fw-300","fontSize":"medium","customStyle":""} -->
            <p class="has-text-align-center fw-300 has-medium-font-size"><?php printf(
                esc_html( 'WeCodeArt Framework is the %s theme to embrace %s and is one of the top-rated block themes.', 'wecodeart' ),
                sprintf( '<mark style="background-color:rgba(0, 0, 0, 0)" class="has-inline-color has-white-color has-shadows-into-light-font-family">%s</mark>', esc_html__( 'FIRST', 'wecodeart' ) ),
                '<strong>Gutenberg</strong>'
            ); ?></p>
            <!-- /wp:paragraph -->
        </div>
        <!-- /wp:group -->
        <!-- wp:list {"className":"fw-700 gy-0","layout":{"type":"flex","orientation":"horizontal","justifyContent":"center"}} -->
        <ul class="fw-700 gy-0">
            <!-- wp:list-item {"className":"text-uppercase"} -->
            <li class="text-uppercase"><?php esc_html_e( 'Super high performance', 'wecodeart' ); ?></li>
            <!-- /wp:list-item -->
            <!-- wp:list-item {"className":"text-uppercase"} -->
            <li class="text-uppercase"><?php esc_html_e( 'Strict coding standards', 'wecodeart' ); ?></li>
            <!-- /wp:list-item -->
            <!-- wp:list-item {"className":"text-uppercase"} -->
            <li class="text-uppercase"><?php esc_html_e( 'Free for lifetime', 'wecodeart' ); ?></li>
            <!-- /wp:list-item -->
        </ul>
        <!-- /wp:list -->
        <!-- wp:buttons {"layout":{"type":"flex","justifyContent":"center"}} -->
        <div class="wp-block-buttons">
            <!-- wp:button {"textColor":"white","style":{"spacing":{"padding":{"top":"var:preset|spacing|g","bottom":"var:preset|spacing|g","left":"var:preset|spacing|md","right":"var:preset|spacing|md"}},"border":{"radius":"50px"}},"className":"is-style-outline"} -->
            <div class="wp-block-button is-style-outline">
                <a class="wp-block-button__link has-white-color has-text-color wp-element-button" href="#" style="border-radius:50px;padding-top:var(--wp--preset--spacing--g);padding-right:var(--wp--preset--spacing--md);padding-bottom:var(--wp--preset--spacing--g);padding-left:var(--wp--preset--spacing--md)"><?php esc_html_e( 'Download Now', 'wecodeart' ); ?></a>
            </div>
            <!-- /wp:button -->
        </div>
        <!-- /wp:buttons -->
    </div>
    <!-- /wp:group -->
    <!-- wp:separator {"align":"full","style":{"dimensions":{"minHeight":"110px"}},"backgroundColor":"primary","className":"is-style-svg-waves"} -->
    <hr class="wp-block-separator alignfull has-text-color has-primary-color has-alpha-channel-opacity has-primary-background-color has-background is-style-svg-waves" style="min-height:110px" />
    <!-- /wp:separator -->
</div>
<!-- /wp:group -->