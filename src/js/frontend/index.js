// WeCodeArt
import './plugins/wecodeart-Component';
import './plugins/wecodeart-JSManager';
import './plugins/wecodeart-Template';
import loadJs from 'loadjs';
import requireJs from './helpers/requireJs';
import createParams from './helpers/createParams';
import getOptions from './helpers/parseData';
import hasScrollbar, { handleBodyJSClass, handleDocumentScrollbar, handleDocumentScrolled } from './helpers/hasScrollbar';

// Styles
import './../../scss/frontend/frontend.scss';

const { addAction } = wp.hooks;

addAction('wecodeart.route', 'wecodeart/developer/log', filterLog, 10);
let liveReloadLoad;
function filterLog(route, func, args) {
	const { isDevMode = false } = wecodeart;
	if (isDevMode) {
		if(!liveReloadLoad) {
			if (document.getElementById('wecodeart-support-assets-livereload-js')) {
				console.log('DEV Server: Livereload::running!');
			} else {
				console.log('DEV Server: Livereload::paused!');
			}
			liveReloadLoad = true;
		}

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
			'//unpkg.com/sweetalert2@11.3.4/dist/sweetalert2.min.css',
			'//unpkg.com/sweetalert2@11.3.4/dist/sweetalert2.min.js',
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
				handleDocumentScrolled();
				handleDocumentScrollbar();
				window.onresize = handleDocumentScrollbar;
				window.onscroll = handleDocumentScrolled;
			},
		},
	};
}).apply(this, [window.wecodeart]);