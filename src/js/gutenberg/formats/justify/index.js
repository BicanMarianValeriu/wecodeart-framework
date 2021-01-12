/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;

/**
 * Internal dependencies
 */
import JustifyControl from './controls';

/**
 * Block constants
 */
const name = 'wca/justify';

export const justify = {
	name,
	title: __('Align text justify', 'wecodeart'),
	tagName: 'p',
	className: null,
	attributes: {
		style: 'style',
	},
	edit({ isActive, value, onChange, activeAttributes }) {
		return (
			<JustifyControl
				name={name}
				isActive={isActive}
				value={value}
				onChange={onChange}
				activeAttributes={activeAttributes}
			/>
		);
	},
};
