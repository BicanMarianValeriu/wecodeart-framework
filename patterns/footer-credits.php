<?php
/**
 * Title: Footer Credits
 * Slug: wecodeart/footer-credits
 * Categories: wecodeart
 */
?>
<!-- wp:group {"layout":{"inherit":true,"type":"constrained"},"align":"full","backgroundColor":"light","className":"py-3"} -->
<div class="wp-block-group alignfull py-3 has-light-background-color has-background">
	<!-- wp:paragraph {"align":"center"} -->
	<p class="has-text-align-center"><?php
	
	echo wp_kses_post( 
		sprintf(
			__( 'Copyright %s - All rights reserved. Built on %s.', 'wecodeart' ),
			'[copy] [year]',
			'[theme]'
		)
	);

	?></p>
	<!-- /wp:paragraph -->
</div>
<!-- /wp:group -->