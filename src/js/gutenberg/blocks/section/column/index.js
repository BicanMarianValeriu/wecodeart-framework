/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
import { column as icon } from '@wordpress/icons';

/**
 * Internal dependencies
 */
import metadata from './block.json';
import edit from './edit';
import save from './save';

const { name, ...blockArgs } = metadata;

const settings = {
    ...blockArgs,
    title: __('Column', 'wecodeart'),
    description: __('A single column within a columns block.', 'wecodeart'),
    icon,
    edit,
    save,
};

export default { name, metadata, settings };