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
const name = 'wca/tooltip';

export const tooltip = {
	name,
	title: __( 'Tooltip', 'wecodeart' ),
	tagName: 'abbr',
	className: 'has-tooltip',
	attributes: {
		'title': '',
		'data-toggle': '',
        'data-options': ''
	},
	edit,
};