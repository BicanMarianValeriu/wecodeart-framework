// WeCodeArt
import './plugins/wecodeart-Component';
import './plugins/wecodeart-JSManager';
import './plugins/wecodeart-Template';
import loadJs from 'loadjs';
import requireJs from './helpers/requireJs';
import createParams from './helpers/createParams';
import getOptions from './helpers/parseData';
import hasScrollbar, { handleBodyJSClass, handleDocumentScrollbar, handleDocumentScrolled } from './helpers/HasScrollbar';

// Styles
import './../scss/frontend/frontend.scss';

const { addAction } = wp.hooks;

addAction('wecodeart.route', 'wecodeart/developer/log', filterLog, 10);
function filterLog(route, func, args) {
	const { isDevMode = false } = wecodeart;
	if (isDevMode) {
		console.log('Loaded: ', route, '::', func);
		if (args) console.log(args);
	}
}

(function (wecodeart) {
	/**
	 * Base WCA Functions
	 * @since 3.6
	 */
	wecodeart.plugins = {};
	wecodeart.fn = {
		hasScrollbar,
		createParams,
		getOptions,
		requireJs,
		loadJs
	};
	/**
	 * @description
	 * Setup JS URLs that are lazy loaded from CDN/Theme with IDs to easly load them later
	 * without using multiple sources and/or npm packages
	 * This helps us to avoid updating multiple files and/or use multiple sources of the same script
	 * @see example under common key and below
	 */
	wecodeart.lazyJs = {
		// Use for popups
		'sweetalert': [
			'//unpkg.com/sweetalert2@11.0.19/dist/sweetalert2.min.css',
			'//unpkg.com/sweetalert2@11.0.19/dist/sweetalert2.min.js',
		],
		// Use for tooltips
		'tooltips': [
			'//unpkg.com/@popperjs/core@2',
			'//unpkg.com/tippy.js@6',
		],
		// Use for lighbox galleries
		'photoswipe': [
			'//unpkg.com/photoswipe@4.1.3/dist/default-skin/default-skin.css',
			'//unpkg.com/photoswipe@4.1.3/dist/photoswipe.css',
			'//unpkg.com/photoswipe@4.1.3/dist/photoswipe-ui-default.min.js',
			'//unpkg.com/photoswipe@4.1.3/dist/photoswipe.min.js',
		]
	};
	wecodeart.routes = {
		common: {
			init: () => {
				handleBodyJSClass();
				handleDocumentScrollbar();
				window.onresize = handleDocumentScrollbar;
				window.onscroll = handleDocumentScrolled;
			},
			complete: () => {
				// Fetch all the forms we want to apply custom Bootstrap validation styles to
				const forms = document.querySelectorAll('.needs-validation');
				Array.prototype.slice.call(forms).forEach((form) => {
					form.addEventListener('submit', (e) => {
						if (!form.checkValidity()) {
							e.preventDefault();
							e.stopPropagation();
						}
						form.classList.add('was-validated');
						const timeout = setTimeout(() => {
							form.classList.remove('was-validated');
							clearTimeout(timeout);
						}, 5000);
					}, false);
				});

				// LiveReload
				const { isDevMode, fn: { loadJs } } = wecodeart;
				if (isDevMode) {
					const checkFor = '//localhost:35729/livereload.js';
					loadJs(checkFor, {
						success: () => console.log('DEV Server: Livereload::running!'),
						error: () => console.log('DEV Server: Livereload::paused!'), 
					});
				}
			},
		},
	};
}).apply(this, [window.wecodeart]);