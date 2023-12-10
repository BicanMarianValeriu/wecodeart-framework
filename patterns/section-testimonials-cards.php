<?php
/**
 * Title: Testimonials (Cards)
 * Slug: wecodeart/section-testimonials-cards
 * Categories: wecodeart, testimonials
 */
?>
<!-- wp:group {"align":"full","style":{"spacing":{"padding":{"top":"var:preset|spacing|xxl","bottom":"var:preset|spacing|xxl","left":"var:preset|spacing|g","right":"var:preset|spacing|g"}}},"backgroundColor":"white","layout":{"type":"constrained"}} -->
<div class="wp-block-group alignfull has-white-background-color has-background" style="padding-top:var(--wp--preset--spacing--xxl);padding-right:var(--wp--preset--spacing--g);padding-bottom:var(--wp--preset--spacing--xxl);padding-left:var(--wp--preset--spacing--g)">
    <!-- wp:group {"style":{"spacing":{"padding":{"right":"var:preset|spacing|g","left":"var:preset|spacing|g"}}},"layout":{"type":"constrained"}} -->
    <div class="wp-block-group" style="padding-right:var(--wp--preset--spacing--g);padding-left:var(--wp--preset--spacing--g)">
        <!-- wp:heading {"textAlign":"center","className":"is-style-underline-brush"} -->
        <h2 class="wp-block-heading has-text-align-center is-style-underline-brush">
            <?php
                printf( 
                    esc_html__( 'Users %s', 'wecodeart' ), 
                    sprintf( '<strong><span class="has-underline">%s</span></strong>', esc_html__( 'Feedback', 'wecodeart' ) )
                ); 
            ?>
        </h2>
        <!-- /wp:heading -->
        <!-- wp:paragraph {"align":"center","className":"fw-300","fontSize":"medium"} -->
        <p class="has-text-align-center fw-300 has-medium-font-size">Lorem ipsum dolor sit <strong><mark  style="background-color:rgba(0, 0, 0, 0)" class="has-inline-color has-primary-color">Metus Nibendum</mark></strong> massa nisl malesuada lacinia integer nunc posuere:</p>
        <!-- /wp:paragraph -->
    </div>
    <!-- /wp:group -->
    <!-- wp:columns {"style":{"spacing":{"margin":{"top":"var:preset|spacing|xl"}}},"className":"grid"} -->
    <div class="wp-block-columns grid" style="margin-top:var(--wp--preset--spacing--xl)">
        <!-- wp:column {"className":"span-12 span-md-4"} -->
        <div class="wp-block-column span-12 span-md-4">
            <!-- wp:pattern {"slug":"wecodeart/el-testimonial-card"} /-->
        </div>
        <!-- /wp:column -->
        <!-- wp:column {"className":"span-12 span-md-4"} -->
        <div class="wp-block-column span-12 span-md-4">
            <!-- wp:pattern {"slug":"wecodeart/el-testimonial-card"} /-->
        </div>
        <!-- /wp:column -->
        <!-- wp:column {"className":"span-12 span-md-4"} -->
        <div class="wp-block-column span-12 span-md-4">
            <!-- wp:pattern {"slug":"wecodeart/el-testimonial-card"} /-->
        </div>
        <!-- /wp:column -->
    </div>
    <!-- /wp:columns -->
    <!-- wp:buttons {"layout":{"type":"flex","justifyContent":"center"},"style":{"spacing":{"margin":{"top":"var:preset|spacing|xl"}}}} -->
    <div class="wp-block-buttons" style="margin-top:var(--wp--preset--spacing--xl)">
        <!-- wp:button {"backgroundColor":"primary","style":{"border":{"radius":"50px"},"spacing":{"padding":{"top":"var:preset|spacing|sm","bottom":"var:preset|spacing|sm","left":"var:preset|spacing|md","right":"var:preset|spacing|md"}}},"className":""} -->
        <div class="wp-block-button">
            <a class="wp-block-button__link has-primary-background-color has-background wp-element-button" href="#" style="border-radius:50px;padding-top:var(--wp--preset--spacing--sm);padding-right:var(--wp--preset--spacing--md);padding-bottom:var(--wp--preset--spacing--sm);padding-left:var(--wp--preset--spacing--md)" target="_blank" rel="noreferrer noopener">Lorem Ipsum</a>
        </div>
        <!-- /wp:button -->
    </div>
    <!-- /wp:buttons -->
</div>
<!-- /wp:group -->