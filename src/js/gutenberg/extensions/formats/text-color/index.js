/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;

/**
 * Internal dependencies
 */
import Edit from './components/edit';

/**
 * Block constants
 */
const name = 'wca/color';

export const textColor = {
	name,
	title: __( 'Text Color', 'wecodeart' ),
	tagName: 'span',
	className: 'has-inline-color',
	attributes: {
		style: 'style',
		class: 'class',
	},
	edit: Edit,
};
