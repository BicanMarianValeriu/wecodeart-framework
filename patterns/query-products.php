<?php
/**
 * Title: Query (Products)
 * Slug: wecodeart/query-products
 * Categories: wecodeart, query
 * Block Types: core/query
 */
?>
<!-- wp:query {"queryId":20,"query":{"perPage":9,"pages":0,"offset":0,"postType":"product","order":"desc","orderBy":"date","author":"","search":"","exclude":[],"sticky":"","inherit":true,"__woocommerceAttributes":[],"__woocommerceStockStatus":["outofstock","onbackorder","instock"],"__woocommerceOnSale":false,"parents":[],"taxQuery":null},"displayLayout":{"type":"flex","columns":3},"namespace":"woocommerce/product-query"} -->
<div class="wp-block-query">
    <!-- wp:post-template -->
    <!-- wp:woocommerce/product-image {"saleBadgeAlign":"left","isDescendentOfQueryLoop":true} /-->
    <!-- wp:post-title {"className":"wc-block-components-product-title","textAlign":"center","isLink":true,"__woocommerceNamespace":"woocommerce/product-query/product-title"} /-->
    <!-- wp:woocommerce/product-price {"isDescendentOfQueryLoop":true,"textAlign":"center"} /-->
    <!-- wp:woocommerce/product-rating {"isDescendentOfQueryLoop":true} /-->
    <!-- wp:woocommerce/product-button {"isDescendentOfQueryLoop":true,"textAlign":"center"} /-->
    <!-- /wp:post-template -->
    
    <!-- wp:query-pagination {"layout":{"type":"flex","justifyContent":"center"}} -->
    <!-- wp:query-pagination-previous /-->
    <!-- wp:query-pagination-numbers /-->
    <!-- wp:query-pagination-next /-->
    <!-- /wp:query-pagination -->

    <!-- wp:query-no-results -->
    <!-- wp:paragraph {"placeholder":"Adaugă un text sau blocuri care vor fi afișate când o interogare nu găsește niciun rezultat."} -->
    <p>No results.</p>
    <!-- /wp:paragraph -->
    <!-- /wp:query-no-results -->
</div>
<!-- /wp:query -->