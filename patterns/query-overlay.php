<?php
/**
 * Title: Query (Overlay)
 * Slug: wecodeart/query-overlay
 * Categories: wecodeart, query
 * Block Types: core/query,
 * Inserter: false
 */
?>
<!-- wp:query {"queryId":1,"query":{"perPage":0,"pages":0,"offset":0,"postType":"post","order":"desc","orderBy":"date","author":"","search":"","exclude":[],"sticky":"","inherit":true},"enhancedPagination":true,"style":{"spacing":{"blockGap":"var:preset|spacing|lg"}}} -->
<div class="wp-block-query">
    <!-- wp:query-title {"type":"archive"} /-->
    <!-- wp:term-description /-->
    
    <!-- wp:post-template {"layout":{"type":"grid","columnCount":3}} -->
    <!-- wp:pattern {"slug":"wecodeart/el-entry-overlay"} /-->
    <!-- /wp:post-template -->

    <!-- wp:query-pagination -->
    <!-- wp:query-pagination-numbers /-->
    <!-- /wp:query-pagination -->

    <!-- wp:query-no-results -->
    <!-- wp:paragraph {"className":"mb-5","placeholder":"<?php esc_html_e( 'No results.', 'wecodeart' ); ?>"} -->
    <p class="mb-5"><?php esc_html_e( 'No results.', 'wecodeart' ); ?></p>
    <!-- /wp:paragraph -->
    <!-- /wp:query-no-results -->
</div>
<!-- /wp:query -->