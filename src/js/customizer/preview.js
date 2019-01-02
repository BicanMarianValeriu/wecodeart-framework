/**
 * This file adds some LIVE changes to WeCodeArt Framework Customizer
 * @author		Bican Marian Valeriu <http://www.wecodeart.com/>
 * @package 	WeCodeArt Framework
 * @since 		v1.0
 * @version 	v3.5
 */
(function ($) {
	var api = wp.customize; // Shorthand version of wp.customize
	/**
	 * These functions handle live preview for the Website Header Area
	 */
	// 1.Site Title
	api('blogname', function (value) {
		value.bind(function (to) {
			$('.site-title a').text(to);
		});
	});

	// 2.Site Description
	api('blogdescription', function (value) {
		value.bind(function (to) {
			$('.site-description').text(to);
		});
	});

	// 3.Header Bar Layout: Row or Expanded
	api('header-bar-container', function (value) {
		value.bind(function (to) {
			$('#header-bar .grid-container').toggleClass('fluid', 'grid-container fluid' == to);
		});
	});

	/**
	 * These functions handle live preview for the Website Inner Area
	 */ 
	api('content-layout-container', function (value) {
		value.bind(function (to) {
			$('.content .grid-container').toggleClass('fluid', 'grid-container fluid' == to);
		});
	});

	/**
	 * These functions handle live preview for the Website Footer Area
	 */
	api('footer-layout-container', function (value) {
		value.bind(function (to) {
			$('.footer__widgets .grid-container').toggleClass('fluid', 'grid-container fluid' == to);
		});
	});

	api('footer-copyright-text', function (value) {
		value.bind(function (to) {
			$('.copyright').text(to);
		});
	});
})(jQuery);