import 'bootstrap/js/dist/util';
import 'bootstrap/js/dist/collapse';
import 'bootstrap/js/dist/dropdown';
import 'bootstrap/js/dist/tooltip';
import 'bootstrap/js/dist/popover';

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

		const { fn: { getOptions } } = wecodeart;
		
		const customTooltips = document.querySelectorAll('.has-tooltip');
		for (let item of customTooltips) {
			const $item = jQuery(item);
			const options = getOptions(item.getAttribute('options'));
			const { type } = options;
			delete options.type;
			if (type === 'popover') {
				$item.popover(options);
			}

			if (type === 'tooltip') {
				$item.tooltip(options);
			}
		}
	});

}).apply(this, [window.wecodeart]);