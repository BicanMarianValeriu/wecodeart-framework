<?php
/**
 * Title: Query (List Style)
 * Slug: wecodeart/query-list
 * Categories: wecodeart, query
 * Block Types: core/query
 * Inserter: false
 */
?>
<!-- wp:query {"queryId":1,"query":{"perPage":0,"pages":0,"offset":0,"postType":"post","categoryIds":[],"tagIds":[],"order":"desc","orderBy":"date","author":"","search":"","exclude":[],"sticky":"","inherit":true},"style":{"spacing":{"blockGap":"var:preset|spacing|lg"}}} -->
<div class="wp-block-query">
    <!-- wp:query-title {"type":"archive"} /-->
    <!-- wp:term-description /-->

    <!-- wp:post-template -->
    <!-- wp:columns {"className":"flex-column flex-md-row g-5 mb-5"} -->
    <div class="wp-block-columns flex-column flex-md-row g-5 mb-5">
        <!-- wp:column {"className":"col-md-5 col-lg-4"} -->
        <div class="wp-block-column col-md-5 col-lg-4">
            <!-- wp:post-featured-image {"isLink":true} /-->
        </div>
        <!-- /wp:column -->
        <!-- wp:column -->
        <div class="wp-block-column">
            <!-- wp:post-title {"level":3,"isLink":true} /-->
            <!-- wp:group {"className":"g-1","layout":{"type":"flex","flexWrap":"wrap"}} -->
            <div class="wp-block-group g-1">
            <!-- wp:pattern {"slug":"wecodeart/el-entry-meta"} /-->
            </div>
            <!-- /wp:group -->
            <!-- wp:post-excerpt {"moreText":"<?php esc_html_e( 'Read more', 'wecodeart' ); ?>"} /-->
        </div>
        <!-- /wp:column -->
    </div>
    <!-- /wp:columns -->
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