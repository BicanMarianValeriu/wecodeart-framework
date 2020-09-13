/**
 * File sortable.js
 *
 * Handles sortable list
 *
 * @package WeCodeArt
 * @since 	v3.3
 * @version v4.1.6
 * 
 */

import './../../scss/customizer/controls/sortable.scss';

(function (wp, $) {
	const api = wp.customize;
	
	api.controlConstructor['wecodeart-sortable'] = api.Control.extend({
		ready: function () {
			'use strict';

			const control = this;

			// Set the sortable container.
			control.sortableContainer = control.container.find('ul.wecodeart-sortable__list').first();

			// Init sortable.
			control.sortableContainer.sortable({
				// Update value when we stop sorting.
				stop: () => control.updateValue()
			}).disableSelection().find('li').each(function () {
				$(this).find('i.visibility').click(function () {
					$(this).toggleClass('dashicons-visibility-faint').parents('li:eq(0)').toggleClass('invisible');
				});
			}).click(() => control.updateValue());
		},

		/**
		 * Updates the sorting list
		 */
		updateValue: function () {
			'use strict';

			const control = this, newValue = [];

			this.sortableContainer.find('li').each(function () {
				if (!$(this).is('.invisible')) newValue.push($(this).data('value'));
			});

			control.setting.set(newValue);
		}
	});
})(wp, jQuery);