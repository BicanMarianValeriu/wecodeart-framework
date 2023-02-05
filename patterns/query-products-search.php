<?php
/**
 * Title: Query (Products - Search)
 * Slug: wecodeart/query-products-search
 * Categories: wecodeart, query
 * Block Types: core/query
 * Inserter: false
 */
?>
<!-- wp:query {"queryId":20,"query":{"perPage":"12","pages":0,"offset":0,"postType":"product","order":"desc","orderBy":"date","author":"","search":"","exclude":[],"sticky":"","inherit":true,"__woocommerceStockStatus":["instock","outofstock","onbackorder"]},"displayLayout":{"type":"flex","columns":4},"namespace":"woocommerce/product-query","layout":{"type":"default"}} -->
<div class="wp-block-query">
    <!-- wp:post-template -->
    <!-- wp:woocommerce/product-image {"saleBadgeAlign":"left","isDescendentOfQueryLoop":true} /-->
    <!-- wp:post-title {"className":"wc-block-components-product-title","isLink":true} /-->
    <!-- wp:woocommerce/product-price {"isDescendentOfQueryLoop":true} /-->
    <!-- wp:woocommerce/product-rating {"isDescendentOfQueryLoop":true} /-->
    <!-- wp:woocommerce/product-button {"isDescendentOfQueryLoop":true} /-->
    <!-- /wp:post-template -->

    <!-- wp:query-pagination {"layout":{"type":"flex","justifyContent":"center"}} -->
    <!-- wp:query-pagination-previous /-->
    <!-- wp:query-pagination-numbers /-->
    <!-- wp:query-pagination-next /-->
    <!-- /wp:query-pagination -->
    
    <!-- wp:query-no-results -->
    <!-- wp:paragraph -->
    <p><?php esc_html_e( 'No results found for your query.', 'wecodeart' ); ?></p>
    <!-- /wp:paragraph -->
    <!-- /wp:query-no-results -->
</div>
<!-- /wp:query -->