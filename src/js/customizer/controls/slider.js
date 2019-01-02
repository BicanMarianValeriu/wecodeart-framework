/**
 * File slider.js
 * Handles Slider control
 * @package WeCodeArt Framework
 */

wp.customize.controlConstructor['wecodeart-slider'] = wp.customize.Control.extend({

	ready: function () {

		'use strict';

		var control = this;

		// Update the text value.
		jQuery('input[type=range]').on('input change', function () {
			var value = jQuery(this).attr('value'),
				input_number = jQuery(this).closest('.wecodeart-slider__wrapper')
					.find('.wecodeart-slider__number-input');

			input_number.val(value);
			input_number.change();
		});

		// Handle the reset button.
		jQuery('.wecodeart-slider__reset').click(function () {
			var wrapper = jQuery(this).closest('.wecodeart-slider__wrapper'),
				input_range = wrapper.find('input[type=range]'),
				input_number = wrapper.find('.wecodeart-slider__number-input'),
				default_value = input_range.data('reset_value');

			input_range.val(default_value);
			input_number.val(default_value);
			input_number.change();
		});

		// Save changes.
		this.container.on('input change', 'input[type=number]', function () {
			var value = jQuery(this).val();
			jQuery(this).closest('.wecodeart-slider__wrapper').find('input[type=range]').val(value);
			control.setting.set(value);
		});
	}
});
