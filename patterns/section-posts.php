<?php
/**
 * Title: Latest Posts
 * Slug: wecodeart/section-posts
 * Categories: wecodeart, wecodeart-query
 */
?>
<!-- wp:group {"align":"full","style":{"spacing":{"padding":{"top":"var:preset|spacing|xl","bottom":"var:preset|spacing|md","right":"var:preset|spacing|g","left":"var:preset|spacing|g"}}},"className":"my-0","layout":{"type":"constrained"}} -->
<div class="wp-block-group alignfull my-0" style="padding-top:var(--wp--preset--spacing--xl);padding-right:var(--wp--preset--spacing--g);padding-bottom:var(--wp--preset--spacing--md);padding-left:var(--wp--preset--spacing--g)">
    <!-- wp:heading {"textAlign":"center","className":"fw-300 is-style-underline-brush"} -->
    <h2 class="wp-block-heading has-text-align-center fw-300 is-style-underline-brush">
        <span class="has-underline"><?php printf( esc_html__( 'Latest %s', 'wecodeart' ), sprintf( '<strong>%s</strong>', esc_html__( 'Posts', 'wecodeart' ) ) ); ?></span>
    </h2>
    <!-- /wp:heading -->
    <!-- wp:paragraph {"align":"center","fontSize":"medium","fontFamily":"shadows-into-light"} -->
    <p class="has-text-align-center has-shadows-into-light-font-family has-medium-font-size">Lorem ipsum dolor sit ament</p>
    <!-- /wp:paragraph -->    
    <!-- wp:query {"query":{"perPage":3,"pages":0,"offset":0,"postType":"post","order":"desc","orderBy":"date","author":"","search":"","exclude":[],"sticky":"","inherit":false,"parents":[]},"displayLayout":{"type":"flex","columns":3}} -->
    <div class="wp-block-query">
        <!-- wp:post-template {"className":"my-5"} -->
        <!-- wp:pattern {"slug":"wecodeart/entry-overlay"} /-->
        <!-- /wp:post-template -->
    </div>
    <!-- /wp:query -->
</div>
<!-- /wp:group -->