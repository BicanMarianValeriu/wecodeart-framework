/**
 * Internal dependencies
 */
import Edit from './components/edit';

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;

/**
 * Block constants
 */
const name = 'wca/background';

export const backgroundColor = {
	name,
	title: __( 'Background Color', 'wecodeart' ),
	tagName: 'span',
	className: 'has-inline-background',
	attributes: {
		style: 'style',
		class: 'class',
	},
	edit: Edit,
};
