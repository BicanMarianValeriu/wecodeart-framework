/**
 * File slider.js
 * Handles Slider control
 *
 * @package WeCodeArt Framework
 * @since 	v3.3
 * @version v4.1.6
 */

 import './../../scss/customizer/controls/slider.scss';

(function (wp, $) {
	const api = wp.customize;

	api.controlConstructor['wecodeart-slider'] = api.Control.extend({

		ready: function () {

			'use strict';

			const control = this;

			// Update the text value.
			$('input[type=range]').on('input change', function () {
				const value = $(this).attr('value'),
					inputNumber = $(this).closest('.wecodeart-slider__wrapper').find('.wecodeart-slider__number-input');

				inputNumber.val(value);
				inputNumber.change();
			});

			// Handle the reset button.
			$('.wecodeart-slider__reset').click(function () {
				const wrapper = $(this).closest('.wecodeart-slider__wrapper'),
					inputRange = wrapper.find('input[type=range]'),
					inputNumber = wrapper.find('.wecodeart-slider__number-input'),
					defaultValue = inputRange.data('reset_value');

				inputRange.val(defaultValue);
				inputNumber.val(defaultValue);
				inputNumber.change();
			});

			// Save changes.
			control.container.on('input change', 'input[type=number]', function () {
				const value = $(this).val();
				$(this).closest('.wecodeart-slider__wrapper').find('input[type=range]').val(value);
				control.setting.set(value);
			});
		}
	});

})(wp, jQuery);
