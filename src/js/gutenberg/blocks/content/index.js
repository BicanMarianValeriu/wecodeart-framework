/**
 * WordPress dependencies.
 */
const { __ } = wp.i18n;

/**
 * Internal dependencies
 */
import metadata from './block.json';
import edit from './Edit';

/**
 * Block constants
 */
const { name, ...blockArgs } = metadata;

const settings = {
    ...blockArgs,
    title: __('WCA: Content', 'wecodeart'),
    description: __('Content Loop.', 'wecodeart'),
    keywords: [
        __('loop', 'wecodeart'),
        __('content loop', 'wecodeart'),
    ],
    edit,
};

export default { name, metadata, settings };