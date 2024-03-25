<?php
/**
 * Title: Footer Credits
 * Slug: wecodeart/footer-credits
 * Categories: wecodeart, footer
 * Inserter: false
 */
?>
<!-- wp:paragraph {"align":"center"} -->
<p class="has-text-align-center"><?php

echo wp_kses_post( 
	sprintf(
		__( 'Copyright %s - All rights reserved. Built on %s.', 'wecodeart' ),
		'{copy} {year}',
		'{theme}'
	)
);

?></p>
<!-- /wp:paragraph -->