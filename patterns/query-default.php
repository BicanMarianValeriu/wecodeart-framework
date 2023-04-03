<?php
/**
 * Title: Query (Default)
 * Slug: wecodeart/query-default
 * Categories: wecodeart, query
 * Block Types: core/query
 * Inserter: false
 */
?>
<!-- wp:query {"queryId":1,"query":{"perPage":0,"pages":0,"offset":0,"postType":"post","categoryIds":[],"tagIds":[],"order":"desc","orderBy":"date","author":"","search":"","exclude":[],"sticky":"","inherit":true},"displayLayout":{"type":"flex","columns":3}} -->
<div class="wp-block-query">
    <!-- wp:query-title {"type":"archive","className":"my-5"} /-->
    <!-- wp:term-description /-->

    <!-- wp:post-template {"className":"my-5"} -->
    <!-- wp:post-featured-image {"isLink":true} /-->
    <!-- wp:post-title {"level":3,"isLink":true} /-->
    <!-- wp:group {"className":"g-1","layout":{"type":"flex","flexWrap":"wrap","justifyContent":"center"}} -->
    <div class="wp-block-group g-1">
    <!-- wp:pattern {"slug":"wecodeart/el-entry-meta"} /-->
    </div>
    <!-- /wp:group -->
    <!-- wp:post-excerpt {"moreText":"<?php esc_html_e( 'Read more', 'wecodeart' ); ?>"} /-->
    <!-- /wp:post-template -->

    <!-- wp:query-pagination {"className":"mb-5"} -->
    <!-- wp:query-pagination-numbers /-->
    <!-- /wp:query-pagination -->
    
    <!-- wp:query-no-results -->
    <!-- wp:paragraph {"className":"mb-5","placeholder":"<?php esc_html_e( 'No results.', 'wecodeart' ); ?>"} -->
    <p class="mb-5"><?php esc_html_e( 'No results.', 'wecodeart' ); ?></p>
    <!-- /wp:paragraph -->
    <!-- /wp:query-no-results -->
</div>
<!-- /wp:query -->