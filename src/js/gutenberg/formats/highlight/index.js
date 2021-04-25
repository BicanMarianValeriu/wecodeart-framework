/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;

/**
 * Internal dependencies
 */
import edit from './components/edit';

/**
 * Block constants
 */
const name = 'wca/background';

export const highlight = {
	name,
	title: __('Background Color', 'wecodeart'),
	tagName: 'span',
	className: 'has-inline-background',
	attributes: {
		style: 'style',
		class: 'class',
	},
	edit
};
