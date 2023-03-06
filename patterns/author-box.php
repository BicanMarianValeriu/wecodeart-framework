<?php
/**
 * Title: Author Box
 * Slug: wecodeart/author-box
 * Categories: wecodeart
 */
?>
<!-- wp:group {"backgroundColor":"light","className":"px-3 px-lg-4 py-3 py-lg-5 my-5 rounded"} -->
<div class="wp-block-group px-3 px-lg-4 py-3 py-lg-5 my-5 rounded has-light-background-color has-background">
    <!-- wp:columns {"verticalAlignment":"top","className":"g-3"} -->
    <div class="wp-block-columns are-vertically-aligned-top g-3">
        <!-- wp:column {"verticalAlignment":"top","className":"col-auto"} -->
        <div class="wp-block-column is-vertically-aligned-top col-auto">
            <!-- wp:avatar {"isLink":true,"style":{"border":{"radius":"100px"}}} /-->
        </div>
        <!-- /wp:column -->
        <!-- wp:column {"verticalAlignment":"top","style":{"spacing":{"blockGap":"var:preset|spacing|xs"}},"layout":{"type":"default"}} -->
        <div class="wp-block-column is-vertically-aligned-top">
            <!-- wp:post-author-name {"isLink":true,"fontSize":"large"} /-->
            <!-- wp:post-author-biography /-->
        </div>
        <!-- /wp:column -->
    </div>
    <!-- /wp:columns -->
</div>
<!-- /wp:group -->