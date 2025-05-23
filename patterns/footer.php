<?php
/**
 * Title: Footer
 * Slug: wecodeart/footer
 * Categories: wecodeart, footer
 * Block Types: core/template-part/footer
 * Inserter: false
 */
?>
<!-- wp:group {"layout":{"type":"constrained"}} -->
<div class="wp-block-group">
	<!-- wp:columns {"verticalAlignment":"top","style":{"spacing":{"blockGap":"1rem"}},"className":"flex-column flex-md-row flex-wrap py-5 g-5 g-lg-3"} -->
	<div class="wp-block-columns are-vertically-aligned-top flex-column flex-md-row flex-wrap py-5 g-5 g-lg-3">
		<!-- wp:column {"className":"col-12 col-lg-5 pe-lg-5"} -->
		<div class="wp-block-column col-12 col-lg-5 pe-lg-5">
			<!-- wp:heading {"level":6,"className":"fw-700"} -->
			<h6 class="wp-block-heading fw-700"><?php esc_html_e( 'Stay Updated', 'wecodeart' ); ?></h6>
			<!-- /wp:heading -->
			<!-- wp:paragraph {"textColor":"secondary","fontSize":"small"} -->
			<p class="has-secondary-color has-text-color has-small-font-size">WordPress goodies and UI Frameworks designed and built for developers. Our products are made specifically to be used by developers, which means that we know how important it is to use clean, quality and standardized code.</p>
			<!-- /wp:paragraph -->
			<!-- wp:buttons {"className":"mt-2"} -->
			<div class="wp-block-buttons mt-2">
				<!-- wp:button {"textColor":"dark","className":"is-style-link","fontSize":"small"} -->
				<div class="wp-block-button has-custom-font-size is-style-link has-small-font-size">
					<a class="wp-block-button__link has-dark-color has-text-color wp-element-button"><?php esc_html_e( 'Read More', 'wecodeart' ); ?></a>
				</div>
				<!-- /wp:button -->
			</div>
			<!-- /wp:buttons -->
		</div>
		<!-- /wp:column -->
		<!-- wp:column {"className":""} -->
		<div class="wp-block-column">
			<!-- wp:heading {"level":6,"className":"fw-700"} -->
			<h6 class="wp-block-heading fw-700"><?php esc_html_e( 'Links', 'wecodeart' ); ?></h6>
			<!-- /wp:heading -->
			<!-- wp:navigation {"overlayMenu":"never","hasIcon":false,"layout":{"type":"flex","orientation":"vertical"},"style":{"spacing":{"blockGap":"var:preset|spacing|xs"}},"fontSize":"small"} /-->
		</div>
		<!-- /wp:column -->
		<!-- wp:column {"className":""} -->
		<div class="wp-block-column">
			<!-- wp:heading {"level":6,"className":"fw-700"} -->
			<h6 class="wp-block-heading fw-700"><?php esc_html_e( 'Social', 'wecodeart' ); ?></h6>
			<!-- /wp:heading -->
			<!-- wp:social-links {"iconColor":"secondary","iconBackgroundColor":"accent","openInNewTab":true,"showLabels":true,"size":"has-small-icon-size","style":{"spacing":{"blockGap":{"top":"var:preset|spacing|sm","left":"var:preset|spacing|xs"}}},"className":"","layout":{"type":"flex","orientation":"horizontal"}} -->
			<ul class="wp-block-social-links has-small-icon-size has-visible-labels has-icon-color has-icon-background-color">
				<!-- wp:social-link {"url":"https://wordpress.org/themes/wecodeart/","service":"wordpress","label":"WordPress"} /-->
				<!-- wp:social-link {"url":"https://www.facebook.com/mvbican/","service":"facebook","label":"Facebook"} /-->
				<!-- wp:social-link {"url":"https://www.linkedin.com/in/mvbican/","service":"linkedin","label":"LinkedIn"} /-->
			</ul>
			<!-- /wp:social-links -->
			<!-- wp:paragraph {"fontSize":"small","fontFamily":"handwritten"} -->
			<p class="has-handwritten-font-family has-small-font-size"><?php esc_html_e( 'Be social ;)', 'wecodeart' ); ?></p>
			<!-- /wp:paragraph -->
		</div>
		<!-- /wp:column -->
	</div>
	<!-- /wp:columns -->
</div>
<!-- /wp:group -->
<!-- wp:group {"style":{"spacing":{"padding":{"top":"var:preset|spacing|g","bottom":"var:preset|spacing|g"}}},"backgroundColor":"accent","layout":{"type":"constrained"}} -->
<div class="wp-block-group has-accent-background-color has-background" style="padding-top:var(--wp--preset--spacing--g);padding-bottom:var(--wp--preset--spacing--g)">
	<!-- wp:pattern {"slug":"wecodeart/footer-credits"} /-->
</div>
<!-- /wp:group -->