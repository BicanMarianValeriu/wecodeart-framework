<?php
/**
 * Title: Hero (with background)
 * Slug: wecodeart/section-hero-bg
 * Categories: wecodeart, wecodeart-hero
 */
?>
<!-- wp:cover {"url":"<?php echo esc_url( get_parent_theme_file_uri( 'assets/images/hero.jpg' ) ); ?>","dimRatio":20,"overlayColor":"white","focalPoint":{"x":1,"y":1},"minHeight":50,"contentPosition":"center center","isDark":false,"align":"full","style":{"spacing":{"padding":{"bottom":"var:preset|spacing|xxl","top":"var:preset|spacing|xxl","right":"var:preset|spacing|g","left":"var:preset|spacing|g"}}}} -->
<div class="wp-block-cover alignfull is-light" style="padding-top:var(--wp--preset--spacing--xxl);padding-right:var(--wp--preset--spacing--g);padding-bottom:var(--wp--preset--spacing--xxl);padding-left:var(--wp--preset--spacing--g);min-height:50px">
    <span aria-hidden="true" class="wp-block-cover__background has-white-background-color has-background-dim-20 has-background-dim"></span>
    <img class="wp-block-cover__image-background" alt="" src="<?php echo esc_url( get_parent_theme_file_uri( 'assets/images/hero.jpg' ) ); ?>" style="object-position:100% 100%" data-object-fit="cover" data-object-position="100% 100%"/>
    <div class="wp-block-cover__inner-container">
    <!-- wp:group {"style":{"spacing":{"padding":{"top":"0","right":"0","bottom":"0","left":"0"}}},"layout":{"type":"constrained","contentSize":"950px"}} -->
    <div class="wp-block-group" style="padding-top:0;padding-right:0;padding-bottom:0;padding-left:0">
    <!-- wp:heading {"textAlign":"center","className":"display-3"} -->
    <h2 class="wp-block-heading has-text-align-center display-3">WeCodeArt Framework<br>is one of the <mark style="background-color:rgba(0, 0, 0, 0)" class="has-inline-color has-primary-color has-shadows-into-light-font-family">FASTEST</mark> Theme for <strong>WordPress</strong></h2>
    <!-- /wp:heading -->
    <!-- wp:paragraph {"align":"center","className":"fw-300 mb-5","fontSize":"large"} -->
    <p class="has-text-align-center fw-300 mb-5 has-large-font-size">Fast, modern, beautiful, and easy-to-use themes powered by <strong>WeCodeArt</strong>,<br>the #1 WordPress theme framework</p>
    <!-- /wp:paragraph -->
    </div>
    <!-- /wp:group -->
    </div>
</div>
<!-- /wp:cover -->