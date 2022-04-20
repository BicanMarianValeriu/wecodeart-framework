<?php
/**
 * Home starter content.
 */
return [
	'post_type'    => 'page',
	'post_title'   => _x( 'Home', 'Theme starter content', 'wecodeart' ),
	'post_content' => '<!-- wp:cover {"minHeight":100,"minHeightUnit":"vh","gradient":"primary-to-vivid-purple","contentPosition":"center center","isDark":false,"align":"full","className":"py-5","customCSS":"selector {\n  min-height: calc(100vh - 70px);\n}"} -->
	<div class="wp-block-cover alignfull is-light py-5" style="min-height:100vh">
	<span aria-hidden="true" class="has-background-dim-100 wp-block-cover__gradient-background has-primary-to-vivid-purple-gradient-background has-background-dim has-background-gradient has-primary-to-vivid-purple-gradient-background"></span>
	<div class="wp-block-cover__inner-container">
	<!-- wp:heading {"textAlign":"center","level":1,"textColor":"white","className":"mb-5 display-1"} -->
	<h1 class="has-text-align-center mb-5 display-1 has-white-color has-text-color" id="create-and-grow">Create and grow<br>your unique website today</h1>
	<!-- /wp:heading -->
	<!-- wp:paragraph {"align":"center","textColor":"white","className":"fw-300 mb-5"} -->
	<p class="has-text-align-center fw-300 mb-5 has-white-color has-text-color">Programmatically work but low hanging fruit so new economy cross-pollination. Quick sync new<br>economy onward and upward.</p>
	<!-- /wp:paragraph -->
	<!-- wp:buttons {"contentJustification":"center","className":"is-style-default"} -->
	<div class="wp-block-buttons is-content-justification-center is-style-default">
	<!-- wp:button {"backgroundColor":"light","textColor":"dark"} -->
	<div class="wp-block-button">
	<a class="wp-block-button__link has-dark-color has-light-background-color has-text-color has-background" href="#">LEARN MORE</a>
	</div>
	<!-- /wp:button -->
	<!-- wp:button {"backgroundColor":"light","textColor":"dark"} -->
	<div class="wp-block-button">
	<a class="wp-block-button__link has-dark-color has-light-background-color has-text-color has-background" href="#">HIRE US</a>
	</div>
	<!-- /wp:button -->
	</div>
	<!-- /wp:buttons -->
	</div>
	</div>
	<!-- /wp:cover -->
	
	<!-- wp:group {"className":"my-5","layout":{"inherit":true}} -->
	<div class="wp-block-group my-5">
	<!-- wp:columns {"style":{"spacing":{"blockGap":"2rem"}},"className":"flex-column flex-md-row"} -->
	<div class="wp-block-columns flex-column flex-md-row">
	<!-- wp:column {"className":"p-3 mt-md-5 shadow-sm rounded"} -->
	<div class="wp-block-column p-3 mt-md-5 shadow-sm rounded">
	<!-- wp:image {"align":"center","width":65,"height":65,"sizeSlug":"large"} -->
	<figure class="wp-block-image aligncenter size-large is-resized">
	<img src="' . get_parent_theme_file_uri( 'assets/images/calculator.svg' ) . '" alt="" width="65" height="65"/>
	</figure>
	<!-- /wp:image -->
	<!-- wp:heading {"textAlign":"center","textColor":"primary","level":3} -->
	<h3 class="has-text-align-center has-primary-color has-text-color">Is FREE! Forever</h3>
	<!-- /wp:heading -->
	<!-- wp:paragraph {"align":"center"} -->
	<p class="has-text-align-center">WeCodeArt Framework will always be free with all future updates.</p>
	<!-- /wp:paragraph -->
	</div>
	<!-- /wp:column -->
	<!-- wp:column {"className":"p-3 mb-md-5 shadow rounded"} -->
	<div class="wp-block-column p-3 mb-md-5 shadow rounded">
	<!-- wp:image {"align":"center","width":65,"height":65,"sizeSlug":"large"} -->
	<figure class="wp-block-image aligncenter size-large is-resized">
	<img src="' . get_parent_theme_file_uri( 'assets/images/clock.svg' ) . '" alt="" width="65" height="65"/>
	</figure>
	<!-- /wp:image -->
	<!-- wp:heading {"textAlign":"center","textColor":"primary","level":3} -->
	<h3 class="has-text-align-center has-primary-color has-text-color">Unparalleled speed</h3>
	<!-- /wp:heading -->
	<!-- wp:paragraph {"align":"center"} -->
	<p class="has-text-align-center">Fastest loading times of all WP.org themes. See for yourself by doing a speed test.</p>
	<!-- /wp:paragraph -->
	</div>
	<!-- /wp:column -->
	<!-- wp:column {"className":"p-3 mt-md-5 shadow-sm rounded"} -->
	<div class="wp-block-column p-3 mt-md-5 shadow-sm rounded">
	<!-- wp:image {"align":"center","width":65,"height":65,"sizeSlug":"large"} -->
	<figure class="wp-block-image aligncenter size-large is-resized">
	<img src="' . get_parent_theme_file_uri( 'assets/images/delivery.svg' ) . '" alt="" width="65" height="65"/>
	</figure>
	<!-- /wp:image -->
	<!-- wp:heading {"textAlign":"center","textColor":"primary","level":3} -->
	<h3 class="has-text-align-center has-primary-color has-text-color">Fast work turnaround</h3>
	<!-- /wp:heading -->
	<!-- wp:paragraph {"align":"center"} -->
	<p class="has-text-align-center">Build simple sites in no time with Gutenberg page-builder. No extra plugins are required.</p>
	<!-- /wp:paragraph -->
	</div>
	<!-- /wp:column -->
	</div>
	<!-- /wp:columns -->
	</div>
	<!-- /wp:group -->
	
	<!-- wp:group {"align":"full","style":{"spacing":{"blockGap":{"top":"3rem","left":"3rem"}}},"className":"my-5","layout":{"inherit":true}} -->
	<div class="wp-block-group alignfull my-5">
	<!-- wp:media-text {"backgroundColor":"light","mediaLink":"https://picsum.photos/id/1/800/800","mediaType":"image"} -->
	<div class="wp-block-media-text is-stacked-on-mobile has-background has-light-background-color">
	<figure class="wp-block-media-text__media"><img src="https://picsum.photos/id/1/800/800" alt="" /></figure>
	<div class="wp-block-media-text__content">
	<!-- wp:heading -->
	<h2>Web Design</h2>
	<!-- /wp:heading -->
	<!-- wp:paragraph -->
	<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
	<!-- /wp:paragraph -->
	<!-- wp:buttons -->
	<div class="wp-block-buttons">
	<!-- wp:button {"backgroundColor":"primary","textColor":"white"} -->
	<div class="wp-block-button"><a class="wp-block-button__link has-white-color has-primary-background-color has-text-color has-background" href="#">Learn More</a></div>
	<!-- /wp:button -->
	</div>
	<!-- /wp:buttons -->
	</div>
	</div>
	<!-- /wp:media-text -->
	<!-- wp:gallery {"className":"gap-0","columns":3,"linkTo":"none","align":"full"} -->
	<figure class="wp-block-gallery alignfull has-nested-images columns-3 is-cropped gap-0">
	<!-- wp:image {"sizeSlug":"large","linkDestination":"none","style":{"color":{"duotone":["#000000","#7f7f7f"]}},"className":""} -->
	<figure class="wp-block-image size-large"><img src="https://picsum.photos/id/119/800/800" alt=""/></figure>
	<!-- /wp:image -->
	<!-- wp:image {"sizeSlug":"large","linkDestination":"none","style":{"color":{"duotone":["#000000","#7f7f7f"]}}} -->
	<figure class="wp-block-image size-large"><img src="https://picsum.photos/id/1/800/800" alt=""/></figure>
	<!-- /wp:image -->
	<!-- wp:image {"sizeSlug":"large","linkDestination":"none","style":{"color":{"duotone":["#000000","#7f7f7f"]}},"className":""} -->
	<figure class="wp-block-image size-large"><img src="https://picsum.photos/id/119/800/800" alt=""/></figure>
	<!-- /wp:image -->
	</figure>
	<!-- /wp:gallery -->
	<!-- wp:media-text {"backgroundColor":"light","mediaPosition":"right","mediaLink":"https://picsum.photos/id/119/800/800","mediaType":"image"} -->
	<div class="wp-block-media-text has-media-on-the-right is-stacked-on-mobile has-background has-light-background-color">
	<figure class="wp-block-media-text__media"><img src="https://picsum.photos/id/119/800/800" alt="" /></figure>
	<div class="wp-block-media-text__content">
	<!-- wp:heading -->
	<h2>Branding</h2>
	<!-- /wp:heading -->
	<!-- wp:paragraph -->
	<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
	<!-- /wp:paragraph -->
	<!-- wp:buttons -->
	<div class="wp-block-buttons">
	<!-- wp:button {"backgroundColor":"primary","textColor":"white"} -->
	<div class="wp-block-button"><a class="wp-block-button__link has-white-color has-primary-background-color has-text-color has-background" href="#">Learn More</a></div>
	<!-- /wp:button -->
	</div>
	<!-- /wp:buttons -->
	</div>
	</div>
	<!-- /wp:media-text -->
	</div>
	<!-- /wp:group -->

	<!-- wp:group {"style":{"spacing":{"blockGap":{"top":"1.5rem","left":"1.5rem"}}},"className":"my-5","layout":{"inherit":true}} -->
	<div class="wp-block-group my-5">
	<!-- wp:heading {"textAlign":"center"} -->
	<h2 class="has-text-align-center">What Client\'s Say</h2>
	<!-- /wp:heading -->
	<!-- wp:separator {"color":"primary","className":"is-style-dots"} -->
	<hr class="wp-block-separator has-text-color has-background has-primary-background-color has-primary-color is-style-dots"/>
	<!-- /wp:separator -->
	<!-- wp:columns {"style":{"spacing":{"blockGap":"2rem"}},"className":"flex-column flex-lg-row"} -->
	<div class="wp-block-columns flex-column flex-lg-row">
	<!-- wp:column {"className":"mb-3 mb-lg-0"} -->
	<div class="wp-block-column mb-3 mb-lg-0">
	<!-- wp:image {"width":65,"height":65,"sizeSlug":"large"} -->
	<figure class="wp-block-image size-large is-resized">
	<img src="' . get_parent_theme_file_uri( 'assets/images/user-circle.png' ) . '" alt="" width="65" height="65"/>
	</figure>
	<!-- /wp:image -->
	<!-- wp:quote -->
	<blockquote class="wp-block-quote"><p>“What is the point of being alive if you don`t at least try to do something remarkable?”</p><cite>SEAN FISHER</cite></blockquote>
	<!-- /wp:quote -->
	</div>
	<!-- /wp:column -->
	<!-- wp:column {"className":"mb-3 mb-lg-0"} -->
	<div class="wp-block-column mb-3 mb-lg-0">
	<!-- wp:image {"width":65,"height":65,"sizeSlug":"large"} -->
	<figure class="wp-block-image size-large is-resized">
	<img src="' . get_parent_theme_file_uri( 'assets/images/user-circle.png' ) . '" alt="" width="65" height="65"/>
	</figure>
	<!-- /wp:image -->
	<!-- wp:quote -->
	<blockquote class="wp-block-quote"><p>“What is the point of being alive if you don`t at least try to do something remarkable?”</p><cite>SEAN FISHER</cite></blockquote>
	<!-- /wp:quote -->
	</div>
	<!-- /wp:column -->
	<!-- wp:column {"className":"mb-3 mb-lg-0"} -->
	<div class="wp-block-column mb-3 mb-lg-0">
	<!-- wp:image {"width":65,"height":65,"sizeSlug":"large"} -->
	<figure class="wp-block-image size-large is-resized">
	<img src="' . get_parent_theme_file_uri( 'assets/images/user-circle.png' ) . '" alt="" width="65" height="65"/>
	</figure>
	<!-- /wp:image -->
	<!-- wp:quote -->
	<blockquote class="wp-block-quote"><p>“What is the point of being alive if you don`t at least try to do something remarkable?”</p><cite>SEAN FISHER</cite></blockquote>
	<!-- /wp:quote -->
	</div>
	<!-- /wp:column -->
	</div>
	<!-- /wp:columns -->
	</div>
	<!-- /wp:group -->
	
	<!-- wp:cover {"minHeight":555,"minHeightUnit":"px","gradient":"primary-to-vivid-purple","isDark":false,"align":"full","className":"py-5"} -->
	<div class="wp-block-cover alignfull is-light py-5" style="min-height:555px">
	<span aria-hidden="true" class="wp-block-cover__background has-background-dim-100 has-background-dim has-background-gradient has-primary-to-vivid-purple-gradient-background"></span>
	<div class="wp-block-cover__inner-container">
	<!-- wp:heading {"textAlign":"center","textColor":"white","className":"mb-5 display-3"} -->
	<h2 class="has-text-align-center mb-5 display-3 has-white-color has-text-color" id="let-s-work-together-on-your-next-web-project">Let`s work together on your <br>next web project</h2>
	<!-- /wp:heading -->
	<!-- wp:paragraph {"align":"center","textColor":"white","className":"fw-300 mb-5","fontSize":"medium"} -->
	<p class="has-text-align-center fw-300 mb-5 has-white-color has-text-color has-medium-font-size">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus <br>nec ullamcorper mattis, pulvinar dapibus leo.</p>
	<!-- /wp:paragraph -->
	<!-- wp:buttons {"layout":{"type":"flex","justifyContent":"center","orientation":"horizontal"}} -->
	<div class="wp-block-buttons">
	<!-- wp:button {"textColor":"white","className":"is-style-outline"} -->
	<div class="wp-block-button is-style-outline">
	<a class="wp-block-button__link has-white-color has-text-color" href="#">LEARN MORE</a>
	</div>
	<!-- /wp:button -->
	</div>
	<!-- /wp:buttons -->
	</div>
	</div>
	<!-- /wp:cover -->',
];