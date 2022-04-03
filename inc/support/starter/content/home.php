<?php
/**
 * Home starter content.
 */
return [
	'post_type'    => 'page',
	'post_title'   => _x( 'Home', 'Theme starter content', 'wecodeart' ),
	'post_content' => '<!-- wp:cover {"minHeight":100,"minHeightUnit":"vh","gradient":"primary-to-vivid-purple","contentPosition":"center center","isDark":false,"align":"full","className":"py-5 text-center","customCSS":"selector {\n  min-height: calc(100vh - 70px)!important\n}"} -->
	<div class="wp-block-cover alignfull is-light py-5 text-center" style="min-height:100vh">
	<span aria-hidden="true" class="wp-block-cover__background has-background-dim-100 has-background-dim has-background-gradient has-primary-to-vivid-purple-gradient-background"></span>
	<div class="wp-block-cover__inner-container">
	<!-- wp:heading {"textAlign":"center","level":1,"textColor":"white","className":"mb-5 display-5"} -->
	<h1 class="has-text-align-center mb-5 display-5 has-white-color has-text-color" id="create-and-grow">Create and grow<br>your unique website today</h1>
	<!-- /wp:heading -->
	<!-- wp:paragraph {"align":"center","textColor":"white","className":"lead mb-5"} -->
	<p class="has-text-align-center lead mb-5 has-white-color has-text-color">Programmatically work but low hanging fruit so new economy cross-pollination. Quick sync new<br>economy onward and upward.</p>
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
	
	<!-- wp:group {"className":"my-md-5","layout":{"inherit":true}} -->
	<div class="wp-block-group my-md-5">
	<!-- wp:columns {"style":{"spacing":{"blockGap":"2rem"}},"className":"flex-column flex-md-row"} -->
	<div class="wp-block-columns flex-column flex-md-row">
	<!-- wp:column {"className":"p-2 mt-5 shadow-sm rounded"} -->
	<div class="wp-block-column p-2 mt-5 shadow-sm rounded">
	<!-- wp:image {"align":"center","width":65,"height":65,"sizeSlug":"large"} -->
	<div class="wp-block-image">
	<figure class="aligncenter size-large is-resized">
	<img src="' . trailingslashit( get_template_directory_uri() ) . 'assets/images/calculator.svg" alt="" width="65" height="65"/>
	</figure></div>
	<!-- /wp:image -->
	<!-- wp:heading {"textAlign":"center","textColor":"primary","level":3} -->
	<h3 class="has-text-align-center has-primary-color has-text-color">Is FREE! Forever</h3>
	<!-- /wp:heading -->
	<!-- wp:paragraph {"align":"center"} -->
	<p class="has-text-align-center">WeCodeArt Framework will allways be free with all future updates.</p>
	<!-- /wp:paragraph -->
	</div>
	<!-- /wp:column -->
	<!-- wp:column {"className":"p-2 my-5 mt-md-0 shadow rounded"} -->
	<div class="wp-block-column p-2 my-5 mt-md-0 shadow rounded">
	<!-- wp:image {"align":"center","width":65,"height":65,"sizeSlug":"large"} -->
	<div class="wp-block-image">
	<figure class="aligncenter size-large is-resized">
	<img src="' . trailingslashit( get_template_directory_uri() ) . 'assets/images/clock.svg" alt="" width="65" height="65"/>
	</figure>
	</div>
	<!-- /wp:image -->
	<!-- wp:heading {"textAlign":"center","textColor":"primary","level":3} -->
	<h3 class="has-text-align-center has-primary-color has-text-color">Unparalleled speed</h3>
	<!-- /wp:heading -->
	<!-- wp:paragraph {"align":"center"} -->
	<p class="has-text-align-center">Fastest loading times of all WP.org themes. See for yourself by doing a speedtest.</p>
	<!-- /wp:paragraph -->
	</div>
	<!-- /wp:column -->
	<!-- wp:column {"className":"p-2 mt-md-5 mb-5 mb-md-0 shadow-sm rounded"} -->
	<div class="wp-block-column p-2 mt-md-5 mb-5 mb-md-0 shadow-sm rounded">
	<!-- wp:image {"align":"center","width":65,"height":65,"sizeSlug":"large"} -->
	<div class="wp-block-image">
	<figure class="aligncenter size-large is-resized">
	<img src="' . trailingslashit( get_template_directory_uri() ) . 'assets/images/delivery.svg" alt="" width="65" height="65"/>
	</figure>
	</div>
	<!-- /wp:image -->
	<!-- wp:heading {"textAlign":"center","textColor":"primary","level":3} -->
	<h3 class="has-text-align-center has-primary-color has-text-color">Fast work turnaround</h3>
	<!-- /wp:heading -->
	<!-- wp:paragraph {"align":"center"} -->
	<p class="has-text-align-center">Build simple sites in no time with Gutenberg pagebuilder. No extra plugins are required.</p>
	<!-- /wp:paragraph -->
	</div>
	<!-- /wp:column -->
	</div>
	<!-- /wp:columns -->
	</div>
	<!-- /wp:group -->
	
	<!-- wp:group {"layout":{"inherit":true}} -->
	<div class="wp-block-group">
	<!-- wp:columns -->
	<div class="wp-block-columns">
	<!-- wp:column -->
	<div class="wp-block-column">
	<!-- wp:media-text {"align":"","mediaLink":"https://picsum.photos/id/1/800/800","mediaType":"image"} -->
	<div class="wp-block-media-text is-stacked-on-mobile">
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
	<!-- wp:media-text {"align":"","backgroundColor":"light","mediaPosition":"right","mediaLink":"https://picsum.photos/id/119/800/800","mediaType":"image"} -->
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
	<!-- /wp:column -->
	</div>
	<!-- /wp:columns -->
	</div>
	<!-- /wp:group -->

	<!-- wp:group {"className":"my-5","layout":{"inherit":true}} -->
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
	<img src="' . trailingslashit( get_template_directory_uri() ) . 'assets/images/user-circle.png" alt="" width="65" height="65"/>
	</figure>
	<!-- /wp:image -->
	<!-- wp:quote -->
	<blockquote class="wp-block-quote"><p>“What is the point of being alive if you don`t at least try to do something remarkable?”</p><cite>SEAN FISHER</cite></blockquote>
	<!-- /wp:quote -->
	</div>
	<!-- /wp:column -->
	<!-- wp:column {"className":"mb-3 mb-lg-0"} -->
	<div class="wp-block-column mb-3 mb-lg-0"><!-- wp:image {"width":65,"height":65,"sizeSlug":"large"} -->
	<figure class="wp-block-image size-large is-resized">
	<img src="' . trailingslashit( get_template_directory_uri() ) . 'assets/images/user-circle.png" alt="" width="65" height="65"/>
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
	<img src="' . trailingslashit( get_template_directory_uri() ) . 'assets/images/user-circle.png" alt="" width="65" height="65"/>
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
	
	<!-- wp:cover {"minHeight":555,"minHeightUnit":"px","gradient":"primary-to-vivid-purple","isDark":false,"align":"full","className":"py-5 text-center"} -->
	<div class="wp-block-cover alignfull is-light py-5 text-center" style="min-height:555px">
	<span aria-hidden="true" class="wp-block-cover__background has-background-dim-100 has-background-dim has-background-gradient has-primary-to-vivid-purple-gradient-background"></span>
	<div class="wp-block-cover__inner-container">
	<!-- wp:heading {"textAlign":"center","textColor":"white","className":"mb-5 display-5"} -->
	<h2 class="has-text-align-center mb-5 display-5 has-white-color has-text-color" id="let-s-work-together-on-your-next-web-project">Let’s work together on your <br>next web project</h2>
	<!-- /wp:heading -->
	<!-- wp:paragraph {"align":"center","textColor":"white","className":"lead mb-5","fontSize":"medium"} -->
	<p class="has-text-align-center lead mb-5 has-white-color has-text-color has-medium-font-size">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus <br>nec ullamcorper mattis, pulvinar dapibus leo.</p>
	<!-- /wp:paragraph -->
	<!-- wp:buttons {"contentJustification":"center"} -->
	<div class="wp-block-buttons is-content-justification-center">
	<!-- wp:button {"className":"is-style-outline","textColor":"white"} -->
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