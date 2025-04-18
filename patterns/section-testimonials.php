<?php
/**
 * Title: Testimonials
 * Slug: wecodeart/section-testimonials
 * Categories: wecodeart, testimonials
 */
?>
<!-- wp:group {"align":"full","style":{"spacing":{"margin":{"top":"0","bottom":"0"},"padding":{"top":"var:preset|spacing|xl","bottom":"var:preset|spacing|xl"},"blockGap":"var:preset|spacing|md"}},"backgroundColor":"accent","layout":{"type":"constrained"}} -->
<div class="wp-block-group alignfull has-accent-background-color has-background" style="margin-top:0;margin-bottom:0;padding-top:var(--wp--preset--spacing--xl);padding-bottom:var(--wp--preset--spacing--xl)">
    <!-- wp:group {"style":{"spacing":{"padding":{"right":"var:preset|spacing|g","left":"var:preset|spacing|g"}}},"layout":{"type":"constrained"}} -->
    <div class="wp-block-group" style="padding-right:var(--wp--preset--spacing--g);padding-left:var(--wp--preset--spacing--g)">
        <!-- wp:heading {"textAlign":"center"} -->
        <h2 class="wp-block-heading has-text-align-center">
            <?php
                printf( 
                    esc_html__( 'Users %s', 'wecodeart' ), 
                    sprintf( '<strong>%s</strong>', esc_html__( 'Feedback', 'wecodeart' ) )
                ); 
            ?>
        </h2>
        <!-- /wp:heading -->
        <!-- wp:paragraph {"align":"center","className":"fw-300","fontSize":"medium"} -->
        <p class="has-text-align-center fw-300 has-medium-font-size">Lorem ipsum dolor sit <strong><mark  style="background-color:rgba(0, 0, 0, 0)" class="has-inline-color has-primary-color">Metus Nibendum</mark></strong> massa nisl malesuada lacinia integer nunc posuere:</p>
        <!-- /wp:paragraph -->
    </div>
    <!-- /wp:group -->
    <!-- wp:group {"namespace":"wecodeart/group/marquee","align":"full","className":"fade-horizontal","style":{"spacing":{"padding":{"bottom":"var:preset|spacing|g"}}},"textColor":"secondary","layout":{"type":"flex","flexWrap":"nowrap","alignItems":"center","className":"fade-horizontal"}} -->
    <div class="wp-block-group alignfull fade-horizontal has-secondary-color has-text-color" style="padding-bottom:var(--wp--preset--spacing--g)">
        <!-- wp:pattern {"slug":"wecodeart/el-testimonial"} /-->
        <!-- wp:pattern {"slug":"wecodeart/el-testimonial"} /-->
        <!-- wp:pattern {"slug":"wecodeart/el-testimonial"} /-->
        <!-- wp:pattern {"slug":"wecodeart/el-testimonial"} /-->
    </div>
    <!-- /wp:group -->
    <!-- wp:buttons {"layout":{"type":"flex","justifyContent":"center"}} -->
    <div class="wp-block-buttons">
        <!-- wp:button {"backgroundColor":"primary","style":{"border":{"radius":"50px"},"spacing":{"padding":{"top":"var:preset|spacing|sm","bottom":"var:preset|spacing|sm","left":"var:preset|spacing|md","right":"var:preset|spacing|md"}}},"className":""} -->
        <div class="wp-block-button">
            <a class="wp-block-button__link has-primary-background-color has-background wp-element-button" href="#" style="border-radius:50px;padding-top:var(--wp--preset--spacing--sm);padding-right:var(--wp--preset--spacing--md);padding-bottom:var(--wp--preset--spacing--sm);padding-left:var(--wp--preset--spacing--md)" target="_blank" rel="noreferrer noopener">Lorem Ipsum</a>
        </div>
        <!-- /wp:button -->
    </div>
    <!-- /wp:buttons -->
</div>
<!-- /wp:group -->