/**
 * This file adds some LIVE changes to WeCodeArt Framework Customizer
 * @author		Bican Marian Valeriu 
 * @author_url  https://www.wecodeart.com/about
 * @package 	WeCodeArt Framework
 * @since 		1.0
 * @version 	4.1.6
 */

 import './../../scss/customizer/customizer.scss';

(function (wp, $) {
	const api = wp.customize;

	api('blogname', value => value.bind(to => $('.site-title a').text(to)));

	api('blogdescription', value => value.bind(to => $('.site-description').text(to)));

	api('header-bar-container', function (value) {
		value.bind(function (to) {
			const el = $('#header-bar .container, #header-bar .container-fluid');
			if ('container-fluid' === to) el.addClass('container-fluid').removeClass('container');
			else el.addClass('container').removeClass('container-fluid');
		});
	});

	const contentContexts = ['blog'];
	contentContexts.forEach(context => {
		let apiOption = 'content-layout-container';
		if (context.length) apiOption = [apiOption, context].join('-');

		api(apiOption, function (value) {
			value.bind(function (to) {
				const el = $('.content .container, .content .container-fluid');
				if ('container-fluid' === to) el.addClass('container-fluid').removeClass('container');
				else el.addClass('container').removeClass('container-fluid');
			});
		});
	});

	api('footer-layout-container', function (value) {
		value.bind(function (to) {
			const el = $('.footer__widgets .container, .footer__widgets .container-fluid');
			if ('container-fluid' === to) el.addClass('container-fluid').removeClass('container');
			else el.addClass('container').removeClass('container-fluid');
		});
	});

	api('footer-copyright-text', value => value.bind(to => $('.attribution__copyright').text(to)));
})(wp, jQuery);
