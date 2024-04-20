// Load JS
import loadJs from 'loadjs';

// Utils
import {
	noop,
	toType,
	isRTL,
	isElement,
	getElement,
	getParents,
	getTransitionDuration,
	sanitizeHtml,
	findShadowRoot,
	hasScrollbar,
	reflow,
	paramsCreate,
	paramsUpdate,
	parseData as getOptions,
	validateConfig,
	execute,
	executeAfterTransition,
	camelCase,
	requireJs,
	enableDismissTrigger
} from './helpers';

// WeCodeArt
import './plugins/wecodeart-Scripts';
import './plugins/wecodeart-Events';
import './plugins/wecodeart-Data';
import './plugins/wecodeart-Config';
import './plugins/wecodeart-Component';
import './plugins/wecodeart-Backdrop';
import './plugins/wecodeart-Template';

// Styles
import './../../scss/frontend/frontend.scss';

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
	wecodeart.fn = {
		noop,
		toType,
		isRTL,
		isElement,
		getElement,
		getParents,
		sanitizeHtml,
		findShadowRoot,
		hasScrollbar,
		reflow,
		camelCase,
		paramsCreate,
		paramsUpdate,
		getOptions,
		validateConfig,
		execute,
		executeAfterTransition,
		getTransitionDuration,
		loadJs,
		requireJs,
		enableDismissTrigger
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
			'//unpkg.com/sweetalert2@11/dist/sweetalert2.min.css',
			'//unpkg.com/sweetalert2@11/dist/sweetalert2.min.js',
		],
		// Use for lighbox galleries
		'photoswipe': [
			'//unpkg.com/photoswipe@5/dist/photoswipe-lightbox.esm.min.js',
			'//unpkg.com/photoswipe@5/dist/photoswipe.esm.min.js',
			'//unpkg.com/photoswipe@5/dist/photoswipe.css',
		]
	};
	wecodeart.routes = {
		common: {
			init: () => {
				const html = document.documentElement;

				const handleDocumentScrolled = () => {
					html.classList[window.scrollY > 1 ? 'add' : 'remove']('has-scrolled');
				};

				const handleDocumentScrollbar = () => {
					html.classList[hasScrollbar() ? 'add' : 'remove']('has-scrollbar');
				};

				const bodyJSClass = () => {
					html.classList.remove('no-js');
					html.classList.add('js');
				};

				const skipLink = () => {
					// Handle Skip Links
					let skipLinkTarget = document.querySelector('main'), sibling, skipLinkTargetID, skipLink;

					// Early exit if a skip-link target can't be located.
					if (!skipLinkTarget) {
						return;
					}

					// Get the site wrapper.
					// The skip-link will be injected in the beginning of it.
					sibling = document.querySelector('.wp-site-blocks');

					// Early exit if the root element was not found.
					if (!sibling) {
						return;
					}

					// Get the skip-link target's ID, and generate one if it doesn't exist.
					skipLinkTargetID = skipLinkTarget.id;
					if (!skipLinkTargetID) {
						skipLinkTargetID = 'wp--skip-link--target';
						skipLinkTarget.id = skipLinkTargetID;
					}

					// Create the skip link.
					skipLink = document.createElement('a');
					skipLink.classList.add('skip-link', 'screen-reader-text');
					skipLink.href = '#' + skipLinkTargetID;
					skipLink.innerHTML = wecodeart?.locale?.skipLink;

					// Inject the skip link.
					sibling.parentElement.insertBefore(skipLink, sibling);
				}

				bodyJSClass();
				handleDocumentScrollbar();
				skipLink();
				window.onresize = handleDocumentScrollbar;
				window.onscroll = handleDocumentScrolled;
			},
		},
	};
}).apply(this, [window.wecodeart]);