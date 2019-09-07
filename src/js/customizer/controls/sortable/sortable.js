/**
 * File sortable.js
 *
 * Handles sortable list
 *
 * @package WeCodeArt
 * @since 	v3.3
 * @version v3.6
 * 
 */

wp.customize.controlConstructor['wecodeart-sortable'] = wp.customize.Control.extend({
	ready: function () {
		'use strict';

		var control = this;

		// Set the sortable container.
		control.sortableContainer = control.container.find('ul.wecodeart-sortable__list').first();

		// Init sortable.
		control.sortableContainer.sortable({ 
			// Update value when we stop sorting.
			stop: function () {
				control.updateValue();
			}
		}).disableSelection().find('li').each(function () {
			jQuery(this).find('i.visibility').click(function () {
				jQuery(this).toggleClass('dashicons-visibility-faint').parents('li:eq(0)').toggleClass('invisible');
			});
		}).click(function () { 
			// Update value on click.
			control.updateValue();
		});
	},

	/**
	 * Updates the sorting list
	 */
	updateValue: function () {
		'use strict';

		var control = this, newValue = [];

		this.sortableContainer.find('li').each(function () {
			if (!jQuery(this).is('.invisible')) newValue.push(jQuery(this).data('value'));
		});

		control.setting.set(newValue);
	}
});