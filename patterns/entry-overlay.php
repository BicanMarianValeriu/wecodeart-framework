<?php
/**
 * Title: Entry (Overlay)
 * Slug: wecodeart/entry-overlay
 * Inserter: false
 */
?>
<!-- wp:cover {"useFeaturedImage":true,"dimRatio":80,"overlayColor":"primary","contentPosition":"bottom center","className":"shadow-lg rounded-1 h-100"} -->
<div class="wp-block-cover has-custom-content-position is-position-bottom-center shadow-lg rounded-1 h-100">
    <span aria-hidden="true" class="wp-block-cover__background has-primary-background-color has-background-dim-80 has-background-dim"></span>
    <div class="wp-block-cover__inner-container">
        <!-- wp:group {"style":{"elements":{"link":{"color":{"text":"var:preset|color|white"}}}},"textColor":"white","layout":{"type":"constrained"}} -->
        <div class="wp-block-group has-white-color has-text-color has-link-color">
            <!-- wp:post-title {"textAlign":"center","level":4,"isLink":true,"className":"fw-700"} /-->
            <!-- wp:group {"className":"g-1","layout":{"type":"flex","flexWrap":"wrap","justifyContent":"center"}} -->
            <div class="wp-block-group g-1">
            <!-- wp:pattern {"slug":"wecodeart/entry-meta"} /-->
            </div>
            <!-- /wp:group -->
            <!-- wp:post-excerpt {"textAlign":"center","moreText":""} /-->
            <!-- wp:read-more {"style":{"spacing":{"padding":{"top":"10px","right":"25px","bottom":"10px","left":"25px"}},"border":{"radius":"100px","width":"1px"},"typography":{"textTransform":"uppercase","fontStyle":"normal","fontWeight":"700"}},"borderColor":"light","backgroundColor":"white","textColor":"dark","fontSize":"small"} /-->
        </div>
        <!-- /wp:group -->
    </div>
</div>
<!-- /wp:cover -->