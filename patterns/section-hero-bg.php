<?php
/**
 * Title: Hero (with background)
 * Slug: wecodeart/section-hero-bg
 * Categories: wecodeart, header
 */
?>
<!-- wp:cover {"url":"<?php echo esc_url( get_parent_theme_file_uri( 'assets/images/hero.jpg' ) ); ?>","dimRatio":20,"overlayColor":"white","focalPoint":{"x":1,"y":1},"minHeight":50,"contentPosition":"center center","isDark":false,"align":"full","style":{"spacing":{"padding":{"bottom":"var:preset|spacing|xxl","top":"var:preset|spacing|xxl","right":"var:preset|spacing|g","left":"var:preset|spacing|g"}}},"layout":{"type":"constrained","contentSize":"980px"}} -->
<div class="wp-block-cover alignfull is-light" style="padding-top:var(--wp--preset--spacing--xxl);padding-right:var(--wp--preset--spacing--g);padding-bottom:var(--wp--preset--spacing--xxl);padding-left:var(--wp--preset--spacing--g);min-height:50px">
    <span aria-hidden="true" class="wp-block-cover__background has-white-background-color has-background-dim-20 has-background-dim"></span>
    <img class="wp-block-cover__image-background" alt="" src="<?php echo esc_url( get_parent_theme_file_uri( 'assets/images/hero.jpg' ) ); ?>" style="object-position:100% 100%" data-object-fit="cover" data-object-position="100% 100%"/>
    <div class="wp-block-cover__inner-container">
        <!-- wp:heading {"textAlign":"center","className":"display-3"} -->
        <h2 class="wp-block-heading has-text-align-center display-3"><?php printf(
            esc_html__( 'WeCodeArt Framework is one of the %s Theme for %s', 'wecodeart' ),
            sprintf( '<mark style="background-color:rgba(0, 0, 0, 0)" class="has-inline-color has-primary-color has-handwritten-font-family">%s</mark>', esc_html__( 'FASTEST', 'wecodeart' ) ),
            '<strong>WordPress</strong>'
        ); ?></h2>
        <!-- /wp:heading -->
        <!-- wp:paragraph {"align":"center","className":"fw-300 mb-5","fontSize":"large"} -->
        <p class="has-text-align-center fw-300 mb-5 has-large-font-size"><?php printf(
            esc_html__( 'Fast, modern, beautiful, and easy-to-use themes powered by %s, the #1 WordPress theme framework', 'wecodeart' ),
            '<strong>WeCodeArt</strong>',
        ); ?></p>
        <!-- /wp:paragraph -->
    </div>
</div>
<!-- /wp:cover -->