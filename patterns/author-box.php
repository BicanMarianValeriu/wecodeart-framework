<?php
/**
 * Title: Author Box
 * Slug: wecodeart/author-box
 * Categories: wecodeart
 */
?>
<!-- wp:group {"backgroundColor":"light","className":"px-3 px-lg-4 py-3 py-lg-5 my-5 rounded"} -->
<div class="wp-block-group px-3 px-lg-4 py-3 py-lg-5 my-5 rounded has-light-background-color has-background">
    <!-- wp:columns {"className":"g-3"} -->
    <div class="wp-block-columns g-3">
        <!-- wp:column {"className":"col-auto"} -->
        <div class="wp-block-column col-auto">
            <!-- wp:avatar {"isLink":true,"style":{"border":{"radius":"100px"}}} /-->
        </div>
        <!-- /wp:column -->
        <!-- wp:column {"style":{"spacing":{"blockGap":"var:preset|spacing|xs"}},"layout":{"type":"default"}} -->
        <div class="wp-block-column">
            <!-- wp:post-author-name {"isLink":true,"fontSize":"large"} /-->
            <!-- wp:post-author-biography /-->
        </div>
        <!-- /wp:column -->
    </div>
    <!-- /wp:columns -->
</div>
<!-- /wp:group -->