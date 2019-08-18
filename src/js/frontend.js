import 'bootstrap/js/dist/util';
import 'bootstrap/js/dist/collapse';
import 'bootstrap/js/dist/dropdown';

import wcaHasScrollbar, { handleDocumentScrollbar } from './helpers/HasScrollbar';

(function (wecodeart) {
	/**
	 * Base WCA Functions
	 * @since 3.6
	 */
	wecodeart.plugins = {};
	wecodeart.fn = {
		hasScrollbar: wcaHasScrollbar
	};

	/**
	 * Init
	 */
	document.addEventListener('DOMContentLoaded', () => {
		const html = document.documentElement;
		html.classList.remove('no-js');
		html.classList.add('js');
		handleDocumentScrollbar();
		window.onresize = handleDocumentScrollbar;
	});

}).apply(this, [window.wecodeart]);