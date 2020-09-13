/**
 * WordPress dependencies.
 */
const { __ } = wp.i18n;

/**
 * Internal dependencies
 */
import metadata from './block.json';
import Edit from './components/edit';
import Save from './components/save';
import variations from './variations';

/**
 * Block constants
 */
const { name, ...blockArgs } = metadata;

const settings = {
    ...blockArgs,
    title: __('WCA: Section', 'wecodeart'),
    description: __('Custom section.', 'wecodeart'),
    keywords: [
        __('section', 'wecodeart'),
        __('columns', 'wecodeart'),
    ],
    variations,
    edit: Edit,
    save: Save,
};

export default { name, metadata, settings };