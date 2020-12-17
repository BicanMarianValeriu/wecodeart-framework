/**
 * This file adds some LIVE changes to WeCodeArt Framework Customizer
 * @author		Bican Marian Valeriu 
 * @author_url  https://www.wecodeart.com/about
 * @package 	WeCodeArt Framework
 * @since 		1.0
 * @version 	4.2.0
 */

import './../../scss/customizer/customizer.scss';

function addCss(id, content = '') {
	let style = document.querySelector('#' + id + '-css');
	if (!style) {
		style = document.createElement('style');
		style.setAttribute('id', id + '-css');
		style.setAttribute('type', 'text/css');
		document.querySelector('head').appendChild(style);
	}
	style.innerHTML = content;
}

(function (wp, $) {
	const api = wp.customize;

	// Google Fonts Preview
	api.bind('preview-ready', () => {
		api.preview.bind('font-selection', ({ controlId, source, value, inherit }) => {
			const defaultFontface = inherit ? 'inherit' : 'system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"';

			let selector = 'body';
			selector = selector.split(',');
			selector = selector.map((sel) => 'html ' + sel).join(',');

			const { fontFamily } = value;
			if (fontFamily === false) {
				addCss(controlId, `${selector} {font-family:${defaultFontface};}`);
			} else {
				addCss(controlId, `:root {--bs-font-sans-serif:${fontFamily};} ${selector} {font-family:${fontFamily};}`);
			}

			if (source.toLowerCase() === 'google') {
				const linkNode = document.querySelector('#' + controlId), fontValue = fontFamily.replace(' ', '+');
				const url = `//fonts.googleapis.com/css?family=${fontValue}%3A100%2C200%2C300%2C400%2C500%2C600%2C700%2C800&display=swap"`;

				if (linkNode !== null) {
					linkNode.setAttribute('href', url);
					return false;
				}

				const newNode = document.createElement('link');
				newNode.setAttribute('rel', 'stylesheet');
				newNode.setAttribute('id', controlId);
				newNode.setAttribute('href', url);
				newNode.setAttribute('type', 'text/css');
				newNode.setAttribute('media', 'all');
				document.querySelector('head').appendChild(newNode);
			}
		});
	});

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