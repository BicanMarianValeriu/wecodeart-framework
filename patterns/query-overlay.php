<?php
/**
 * Title: Query (Overlay)
 * Slug: wecodeart/query-overlay
 * Categories: wecodeart, query
 * Block Types: core/query,
 * Inserter: false
 */
?>
<!-- wp:query {"queryId":1,"query":{"perPage":0,"pages":0,"offset":0,"postType":"post","categoryIds":[],"tagIds":[],"order":"desc","orderBy":"date","author":"","search":"","exclude":[],"sticky":"","inherit":true},"displayLayout":{"type":"flex","columns":3}} -->
<div class="wp-block-query">
    <!-- wp:query-title {"type":"archive","className":"my-5"} /-->
    <!-- wp:term-description /-->
    
    <!-- wp:post-template {"className":"my-5"} -->
    <!-- wp:cover {"useFeaturedImage":true,"dimRatio":70,"overlayColor":"primary","contentPosition":"bottom left","className":"rounded shadow-lg h-100"} -->
    <div class="wp-block-cover has-custom-content-position is-position-bottom-left rounded shadow-lg h-100">
        <span aria-hidden="true" class="wp-block-cover__background has-primary-background-color has-background-dim-70 has-background-dim"></span>
        <div class="wp-block-cover__inner-container">
            <!-- wp:group {"style":{"elements":{"link":{"color":{"text":"var:preset|color|white"}}}},"textColor":"white"} -->
            <div class="wp-block-group has-white-color has-text-color has-link-color">
            <!-- wp:post-title {"level":3,"isLink":true} /-->
            <!-- wp:pattern {"slug":"wecodeart/entry-meta"} /-->
            <!-- wp:post-excerpt {"moreText":""} /-->
            <!-- wp:read-more {"style":{"spacing":{"padding":{"top":"10px","right":"25px","bottom":"10px","left":"25px"}},"border":{"width":"1px","radius":"100px"},"typography":{"textTransform":"uppercase","fontStyle":"normal","fontWeight":"700"}},"borderColor":"light","backgroundColor":"white","textColor":"dark","fontSize":"small"} /-->            </div>
            <!-- /wp:group -->
        </div>
    </div>
    <!-- /wp:cover -->
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