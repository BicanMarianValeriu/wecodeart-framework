<?php
/**
 * About starter content.
 */
return [
	'post_type'    => 'page',
	'post_title'   => _x( 'Features', 'Theme starter content', 'wecodeart' ),
	'post_content' => '<!-- wp:cover {"url":"' . trailingslashit( get_template_directory_uri() ) . 'assets/images/wordpress-cover.jpg","dimRatio":80,"focalPoint":{"x":"1.00","y":"1.00"},"minHeight":600,"gradient":"primary-to-vivid-purple","contentPosition":"center center","align":"full"} -->
	<div class="wp-block-cover alignfull" style="min-height:600px">
	<span aria-hidden="true" class="wp-block-cover__background has-background-dim-80 has-background-dim wp-block-cover__gradient-background has-background-gradient has-primary-to-vivid-purple-gradient-background"></span>
	<img class="wp-block-cover__image-background" alt="" src="' . trailingslashit( get_template_directory_uri() ) . 'assets/images/wordpress-cover.jpg" style="object-position:100% 100%" data-object-fit="cover" data-object-position="100% 100%"/>
	<div class="wp-block-cover__inner-container">
	<!-- wp:heading {"textAlign":"center","level":1,"className":"display-1"} -->
	<h1 class="has-text-align-center display-1" id="top-reasons">Top reasons to <mark style="background-color:#2388ed" class="has-inline-color has-white-color"><strong>choose</strong></mark><br>WeCodeArt Framework.</h1>
	<!-- /wp:heading -->
	</div>
	</div>
	<!-- /wp:cover -->
	
	<!-- wp:group {"align":"full","style":{"spacing":{"blockGap":{"top":"3rem","left":"3rem"}}},"className":"py-5","layout":{"inherit":true,"type":"constrained"}} -->
	<div class="wp-block-group alignfull py-5" id="list">
	<!-- wp:columns {"className":""} -->
	<div class="wp-block-columns">
	<!-- wp:column {"className":""} -->
	<div class="wp-block-column">
	<!-- wp:paragraph {"align":"center","className":"fw-300 mb-5","fontSize":"large"} -->
	<p class="has-text-align-center fw-300 mb-5 has-large-font-size">In addition to all goodies coming with Gutenberg editor and Full Site Editing feature in WP 5.9 WeCodeArt Framework comes with extra improvements.</p>
	<!-- /wp:paragraph -->
	<!-- wp:heading {"textAlign":"center","textColor":"primary","className":"display-2"} -->
	<h2 class="has-text-align-center display-2 has-primary-color has-text-color" id="performance">Performance-Focused</h2>
	<!-- /wp:heading -->
	</div>
	<!-- /wp:column -->
	</div>
	<!-- /wp:columns -->
	<!-- wp:columns {"style":{"spacing":{"blockGap":"2rem"}}} -->
	<div class="wp-block-columns">
	<!-- wp:column -->
	<div class="wp-block-column">
	<!-- wp:heading {"level":3} -->
	<h3>No jQuery</h3>
	<!-- /wp:heading -->
	<!-- wp:paragraph -->
	<p>WeCodeArt Framework uses Vanilla JavaScript that prevents render blocking jQuery to come in the way and affect performance.</p>
	<!-- /wp:paragraph -->
	</div>
	<!-- /wp:column -->
	<!-- wp:column -->
	<div class="wp-block-column">
	<!-- wp:heading {"level":3} -->
	<h3>Less than 25 KB</h3>
	<!-- /wp:heading -->
	<!-- wp:paragraph -->
	<p>WeCodeArt Framework requires less than 25KB of resources (CSS/JS/HTML) as compared to 100s required by the other WordPress themes. <sup>1</sup></p>
	<!-- /wp:paragraph -->
	</div>
	<!-- /wp:column -->
	<!-- wp:column -->
	<div class="wp-block-column">
	<!-- wp:heading {"level":3} -->
	<h3>Loads in just .25 second!</h3>
	<!-- /wp:heading -->
	<!-- wp:paragraph -->
	<p>WeCodeArt Framework is built for speed and fully optimized for performance. Being the most lightweight theme, it loads in less than 0.25 seconds! <sup>1</sup><br></p>
	<!-- /wp:paragraph -->
	</div>
	<!-- /wp:column -->
	</div>
	<!-- /wp:columns -->
	<!-- wp:columns -->
	<div class="wp-block-columns">
	<!-- wp:column -->
	<div class="wp-block-column">
	<!-- wp:paragraph {"textColor":"secondary","fontSize":"small"} -->
	<p class="has-secondary-color has-text-color has-small-font-size"><em>1 - Applies for the starter/blank template without any blocks. As soon as you add additional blocks these values will likely increase depending on the blocks CSS/JS and/or other media assets loaded.</em></p>
	<!-- /wp:paragraph -->
	</div>
	<!-- /wp:column -->
	</div>
	<!-- /wp:columns -->
	</div>
	<!-- /wp:group -->

	<!-- wp:group {"align":"full","style":{"spacing":{"blockGap":{"top":"3rem","left":"3rem"}}},"backgroundColor":"light","className":"py-5","layout":{"inherit":true,"type":"constrained"}} -->
	<div class="wp-block-group alignfull py-5 has-light-background-color has-background">
	<!-- wp:columns {"className":""} -->
	<div class="wp-block-columns">
	<!-- wp:column {"className":""} -->
	<div class="wp-block-column">
	<!-- wp:heading {"textAlign":"center","textColor":"primary","className":"display-2"} -->
	<h2 class="has-text-align-center display-2 has-primary-color has-text-color" id="improvements">Gutenberg Improvements</h2>
	<!-- /wp:heading -->
	</div>
	<!-- /wp:column -->
	</div>
	<!-- /wp:columns -->
	<!-- wp:columns {"style":{"spacing":{"blockGap":"2rem"}}} -->
	<div class="wp-block-columns">
	<!-- wp:column -->
	<div class="wp-block-column">
	<!-- wp:heading {"level":3} -->
	<h3>Improved Blocks Markup</h3>
	<!-- /wp:heading -->
	<!-- wp:paragraph -->
	<p>Custom and improved blocks HTML markup where required following the <a rel="noreferrer noopener" href="https://validator.w3.org/" target="_blank">W3C Markup Validation</a> standards. Rendering navigation blocks (link, home-link, dropdown, pages) using the same markup.</p>
	<!-- /wp:paragraph -->
	</div>
	<!-- /wp:column -->
	<!-- wp:column -->
	<div class="wp-block-column">
	<!-- wp:heading {"level":3} -->
	<h3>Tiny Blocks CSS/JS</h3>
	<!-- /wp:heading -->
	<!-- wp:paragraph -->
	<p>Simplified blocks CSS and Javascript code and removed unnecessary rules making it easier to adjust them as you like via Editor (Global Styles). In addition, the assets are loaded on-demand.</p>
	<!-- /wp:paragraph -->
	</div>
	<!-- /wp:column -->
	<!-- wp:column -->
	<div class="wp-block-column">
	<!-- wp:heading {"level":3} -->
	<h3>Clean Blocks Markup</h3>
	<!-- /wp:heading -->
	<!-- wp:paragraph -->
	<p>WeCodeArt Framework will collect all inline style attributes and enqueue them inline (as text) so they can be picked up by caching plugins. Custom Duotones will be loaded into 1 single SVG to save on document length.<br></p>
	<!-- /wp:paragraph -->
	</div>
	<!-- /wp:column -->
	</div>
	<!-- /wp:columns -->
	<!-- wp:columns {"style":{"spacing":{"blockGap":"2rem"}}} -->
	<div class="wp-block-columns">
	<!-- wp:column -->
	<div class="wp-block-column">
	<!-- wp:heading {"level":3} -->
	<h3>Class Utilities</h3>
	<!-- /wp:heading -->
	<!-- wp:paragraph -->
	<p>You can use the block`s Advanced Tab --&gt; Classname(s) to load additional CSS utilities. Those classes will appear as suggestions in a dropdown (margin/padding/flex utilities and more). The CSS rules for utilities will be loaded on-demand and in order of their appearance.</p>
	<!-- /wp:paragraph -->
	</div>
	<!-- /wp:column -->
	<!-- wp:column -->
	<div class="wp-block-column">
	<!-- wp:heading {"level":3} -->
	<h3>Custom Styles</h3>
	<!-- /wp:heading -->
	<!-- wp:paragraph -->
	<p>Are you familiar with CSS and do you need to add a small adjustment to your block? No worries, you can use the block`s Advanced Tab --&gt; Custom CSS to do that - with live preview. You can use any CSS syntax including media queries.</p>
	<!-- /wp:paragraph -->
	</div>
	<!-- /wp:column -->
	<!-- wp:column -->
	<div class="wp-block-column">
	</div>
	<!-- /wp:column -->
	</div>
	<!-- /wp:columns -->
	</div>
	<!-- /wp:group -->

	<!-- wp:group {"align":"full","style":{"spacing":{"margin":{"top":"0","bottom":"0"}}},"backgroundColor":"primary","textColor":"white","className":"py-5","layout":{"inherit":true,"type":"constrained"}} -->
	<div class="wp-block-group alignfull py-5 has-white-color has-primary-background-color has-text-color has-background" style="margin-top:0;margin-bottom:0">
	<!-- wp:columns {"style":{"spacing":{"blockGap":"2rem"}},"className":"flex-column flex-md-row"} -->
	<div class="wp-block-columns flex-column flex-md-row">
	<!-- wp:column {"className":""} -->
	<div class="wp-block-column">
	<!-- wp:heading {"level":3,"textColor":"white"} -->
	<h3 class="has-white-color has-text-color" id="super-efficient">Super Efficient</h3>
	<!-- /wp:heading -->
	<!-- wp:paragraph -->
	<p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat.</p>
	<!-- /wp:paragraph -->
	</div>
	<!-- /wp:column -->
	<!-- wp:column -->
	<div class="wp-block-column">
	<!-- wp:heading {"level":3,"textColor":"white"} -->
	<h3 class="has-color has-white-color has-text-color" id="deeply-commited">Deeply Committed</h3>
	<!-- /wp:heading -->
	<!-- wp:paragraph -->
	<p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat.</p>
	<!-- /wp:paragraph -->
	</div>
	<!-- /wp:column -->
	<!-- wp:column -->
	<div class="wp-block-column">
	<!-- wp:heading {"level":3,"textColor":"white"} -->
	<h3 class="has-color has-white-color has-text-color" id="highly-skilled">Highly Skilled</h3>
	<!-- /wp:heading -->
	<!-- wp:paragraph -->
	<p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat.</p>
	<!-- /wp:paragraph -->
	</div>
	<!-- /wp:column -->
	</div>
	<!-- /wp:columns -->
	</div>
	<!-- /wp:group -->',
];
