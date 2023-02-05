<?php
/**
 * Title: Query (List Style)
 * Slug: wecodeart/query-list
 * Categories: wecodeart, query
 * Block Types: core/query
 * Inserter: false
 */
?>
<!-- wp:query {"queryId":1,"query":{"perPage":0,"pages":0,"offset":0,"postType":"post","categoryIds":[],"tagIds":[],"order":"desc","orderBy":"date","author":"","search":"","exclude":[],"sticky":"","inherit":true}} -->
<div class="wp-block-query">
    <!-- wp:query-title {"type":"archive","className":"my-5"} /-->
    <!-- wp:term-description /-->
    <!-- wp:post-template {"className":"my-5"} -->
    <!-- wp:columns {"className":"flex-column flex-md-row gap-5 px-0 mb-5"} -->
    <div class="wp-block-columns flex-column flex-md-row gap-5 px-0 mb-5">
        <!-- wp:column {"className":"col-md-5 col-lg-4"} -->
        <div class="wp-block-column col-md-5 col-lg-4">
            <!-- wp:post-featured-image {"isLink":true,"className":"mb-3 mb-md-0"} /-->
        </div>
        <!-- /wp:column -->
        <!-- wp:column -->
        <div class="wp-block-column">
            <!-- wp:post-title {"level":3,"isLink":true} /-->
            <!-- wp:pattern {"slug":"wecodeart/entry-meta"} /-->
            <!-- wp:post-excerpt {"moreText":"Continue reading"} /-->
        </div>
        <!-- /wp:column -->
    </div>
    <!-- /wp:columns -->
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