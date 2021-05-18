// Boostrap
import 'bootstrap/js/dist/collapse';
import 'bootstrap/js/dist/offcanvas';
import 'bootstrap/js/dist/dropdown';
import Tooltip from 'bootstrap/js/dist/tooltip';
import Popover from 'bootstrap/js/dist/popover';

// FAQ SVG
import { library, dom } from '@fortawesome/fontawesome-svg-core';

// WeCodeArt
import './plugins/wecodeart-Component';
import './plugins/wecodeart-JSManager';
import './plugins/wecodeart-Template';
import createParams from './helpers/createParams';
import parseJSONData from './helpers/parseData';
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
		hasScrollbar: hasScrollbar,
		createParams: createParams,
		getOptions: parseJSONData,
	};
	wecodeart.FA = library;
	wecodeart.routes = {
		common: {
			init: () => {
				handleBodyJSClass();
				handleDocumentScrollbar();
				window.onresize = handleDocumentScrollbar;
				window.onscroll = handleDocumentScrolled;
			},
			complete: () => {
				const { fn: { getOptions } } = wecodeart;
				// We use a slightly different/cleanner approach for tooltips/popovers
				// Tooltips
				const customTooltips = document.querySelectorAll('[data-toggle="tooltip"]');
				[...customTooltips].map((el) => new Tooltip(el, getOptions(el.dataset.options)));

				// PopOvers
				const customPopovers = document.querySelectorAll('[data-toggle="popover"]');
				[...customPopovers].map((el) => new Popover(el, getOptions(el.dataset.options)));

				// FA Watch
				dom.watch();

				// Fetch all the forms we want to apply custom Bootstrap validation styles to
				const forms = document.querySelectorAll('.needs-validation');
				Array.prototype.slice.call(forms).forEach((form) => {
					form.addEventListener('submit', (e) => {
						if (!form.checkValidity()) {
							e.preventDefault();
							e.stopPropagation();
						}
						form.classList.add('was-validated');
					}, false);
				});
			},
		}
	};
}).apply(this, [window.wecodeart]);