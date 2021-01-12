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
const name = 'wca/abbreviation';

export const abbreviation = {
	name,
	title: __( 'Abbreviation', 'wecodeart' ),
	tagName: 'abbr',
	className: null,
	attributes: {
		title: 'title',
		lang: 'lang',
	},
	edit,
};