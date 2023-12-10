<?php
/**
 * Title: Social: Sharing
 * Slug: wecodeart/social-sharing
 * Categories: wecodeart, elements
 * Viewport Width: 600
 */
?>
<!-- wp:group {"style":{"spacing":{"blockGap":"var:preset|spacing|xs"}},"layout":{"type":"constrained"}} -->
<div class="wp-block-group">
    <!-- wp:paragraph {"style":{"typography":{"fontStyle":"normal","fontWeight":"700"},"elements":{"link":{"color":{"text":"var:preset|color|secondary"}}}},"textColor":"secondary"} -->
    <p class="has-secondary-color has-text-color has-link-color" style="font-style:normal;font-weight:700"><?php esc_html_e( 'Share the post:', 'wecodeart' ); ?></p>
    <!-- /wp:paragraph -->
    <!-- wp:social-links {"iconColor":"primary","iconBackgroundColor":"accent","openInNewTab":true,"namespace":"wecodeart/social-links/sharing","style":{"spacing":{"blockGap":{"top":"var:preset|spacing|xs","left":"var:preset|spacing|xs"}}}} -->
    <ul class="wp-block-social-links has-icon-color has-icon-background-color">
        <!-- wp:social-link {"url":"#","service":"wordpress"} /-->
        <!-- wp:social-link {"url":"#","service":"facebook"} /-->
        <!-- wp:social-link {"url":"#","service":"linkedin"} /-->
        <!-- wp:social-link {"url":"#","service":"twitter"} /-->
        <!-- wp:social-link {"url":"#","service":"telegram"} /-->
        <!-- wp:social-link {"url":"#","service":"whatsapp"} /-->
        <!-- wp:social-link {"url":"#","service":"pinterest"} /-->
        <!-- wp:social-link {"url":"#","service":"mail"} /-->
    </ul>
    <!-- /wp:social-links -->
</div>
<!-- /wp:group -->