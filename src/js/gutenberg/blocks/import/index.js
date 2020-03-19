/**
 * Internal dependencies
 */
import Edit from './components/edit';

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { createBlock } = wp.blocks;
const { SVG } = wp.components;

/**
 * Block constants
 */
const name = 'wca/import';

const settings = {
    title: __('Import', 'wecodeart'),
    icon: <SVG viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0V0z" /><path d="M9.17 6l2 2H20v10H4V6h5.17M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z" /></SVG>,
    description: __('Import blocks exported using WeCodeArt theme.', 'wecodeart'),
    keywords: [
        __('import', 'wecodeart'),
        __('download', 'wecodeart'),
        __('migrate', 'wecodeart'),
    ],
    attributes: {
        file: {
            type: 'object',
        },
    },
    supports: {
        align: true,
        alignWide: false,
        alignFull: false,
        customClassName: false,
        className: false,
        html: false,
    },
    transforms: {
        from: [
            {
                type: 'files',
                isMatch(files) {
                    return files[0].type === 'application/json';
                },
                // We define a lower priorty (higher number) than the default of 10. This
                // ensures that the Import block is only created as a fallback.
                priority: 14,
                transform: (files) => {
                    const blocks = [];

                    blocks.push(createBlock('wca/import', { file: files }));

                    return blocks;
                },
            },
        ],
    },
    edit: Edit,
    save() {
        return null;
    },
};

export default { name, settings };
