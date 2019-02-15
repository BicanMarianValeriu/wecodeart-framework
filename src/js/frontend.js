import wcaHasScrollbar, { handleDocumentScrollbar } from './plugins/HasScrollbar';

import 'bootstrap/js/dist/util';
import 'bootstrap/js/dist/collapse';
import 'bootstrap/js/dist/dropdown';

(function (wecodeart) {

	'use strict';

	/**
	 * Base WCA Functions
	 * @since 3.6
	 */
	wecodeart.fn = {
		hasScrollbar: wcaHasScrollbar 
	};

	/**
	 * Init
	 */
	document.addEventListener('DOMContentLoaded', () => {
		// HTML Classes
		let html = document.documentElement;
		html.classList.remove('no-js');
		html.classList.add('js');
		// Document Scrollbar
		handleDocumentScrollbar();
		jQuery(window).on('resize', handleDocumentScrollbar);
	});

}).apply(this, [window.wecodeart]);