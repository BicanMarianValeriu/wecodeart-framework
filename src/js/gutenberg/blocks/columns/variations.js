/**
 * WordPress dependencies
 */
const { Path, SVG } = wp.components;
const { __ } = wp.i18n;

/**
 * Template option choices for predefined columns layouts.
 *
 * @type {WPBlockVariation[]}
 */
const variations = [
    {
        name: 'one-column',
        title: __('100'),
        description: __('One Column', 'wecodeart'),
        icon: <SVG className="dashicon" height="26" viewBox="0 0 50 26" width="50" xmlns="http://www.w3.org/2000/svg"><Path d="m48.0833333 0h-46.16666663c-1.05416667 0-1.91666667.9-1.91666667 2v22c0 1.1.8625 2 1.91666667 2h46.16666663c1.0541667 0 1.9166667-.9 1.9166667-2v-22c0-1.1-.8625-2-1.9166667-2zm0 24h-46.16666663v-22h46.16666663z" /></SVG>,
        isDefault: true,
        innerBlocks: [
            ['core/column', {
                width: 100,
                bootstrapColumns: {
                    global: 'col-12',
                    md: 'col-md',
                }
            }],
        ],
        scope: ['block'],
    },
    {
        name: 'two-columns-equal',
        title: __('50 / 50'),
        description: __('Two columns; equal split', 'wecodeart'),
        icon: <SVG width="48" height="48" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><Path fillRule="evenodd" clipRule="evenodd" d="M39 12C40.1046 12 41 12.8954 41 14V34C41 35.1046 40.1046 36 39 36H9C7.89543 36 7 35.1046 7 34V14C7 12.8954 7.89543 12 9 12H39ZM39 34V14H25V34H39ZM23 34H9V14H23V34Z" /></SVG>,
        innerBlocks: [
            ['core/column', {
                width: 50,
                bootstrapColumns: {
                    global: 'col-12',
                    md: 'col-md',
                }
            }],
            ['core/column', {
                width: 50,
                bootstrapColumns: {
                    global: 'col-12',
                    md: 'col-md',
                }
            }],
        ],
        scope: ['block'],
    },
    {
        name: 'two-columns-one-third-two-thirds',
        title: __('33 / 66'),
        description: __('Two columns; one-third, two-thirds split'),
        icon: <SVG width="48" height="48" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><Path fillRule="evenodd" clipRule="evenodd" d="M39 12C40.1046 12 41 12.8954 41 14V34C41 35.1046 40.1046 36 39 36H9C7.89543 36 7 35.1046 7 34V14C7 12.8954 7.89543 12 9 12H39ZM39 34V14H20V34H39ZM18 34H9V14H18V34Z" /></SVG>,
        innerBlocks: [
            ['core/column', {
                width: 33.33,
                bootstrapColumns: {
                    global: 'col-12',
                    md: 'col-md-4',
                }
            }],
            ['core/column', {
                width: 66.66,
                bootstrapColumns: {
                    global: 'col-12',
                    md: 'col-md-8',
                }
            }],
        ],
        scope: ['block'],
    },
    {
        name: 'two-columns-two-thirds-one-third',
        title: __('66 / 33'),
        description: __('Two columns; two-thirds, one-third split', 'wecodeart'),
        icon: <SVG width="48" height="48" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><Path fillRule="evenodd" clipRule="evenodd" d="M39 12C40.1046 12 41 12.8954 41 14V34C41 35.1046 40.1046 36 39 36H9C7.89543 36 7 35.1046 7 34V14C7 12.8954 7.89543 12 9 12H39ZM39 34V14H30V34H39ZM28 34H9V14H28V34Z" /></SVG>,
        innerBlocks: [
            ['core/column', {
                width: 66.66,
                bootstrapColumns: {
                    global: 'col-12',
                    md: 'col-md-8',
                }
            }],
            ['core/column', {
                width: 33.33,
                bootstrapColumns: {
                    global: 'col-12',
                    md: 'col-md-4',
                }
            }],
        ],
        scope: ['block'],
    },
    {
        name: 'three-columns-equal',
        title: __('33 / 33 / 33'),
        description: __('Three columns; equal split', 'wecodeart'),
        icon: <SVG width="48" height="48" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><Path fillRule="evenodd" d="M41 14a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h30a2 2 0 0 0 2-2V14zM28.5 34h-9V14h9v20zm2 0V14H39v20h-8.5zm-13 0H9V14h8.5v20z" /></SVG>,
        innerBlocks: [
            ['core/column', {
                bootstrapColumns: {
                    global: 'col-12',
                    md: 'col-md',
                }
            }],
            ['core/column', {
                bootstrapColumns: {
                    global: 'col-12',
                    md: 'col-md',
                }
            }],
            ['core/column', {
                bootstrapColumns: {
                    global: 'col-12',
                    md: 'col-md',
                }
            }],
        ],
        scope: ['block'],
    },
    {
        name: 'three-columns-wider-center',
        title: __('25 / 50 / 25'),
        description: __('Three columns; wide center column', 'wecodeart'),
        icon: <SVG width="48" height="48" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><Path fillRule="evenodd" d="M41 14a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h30a2 2 0 0 0 2-2V14zM31 34H17V14h14v20zm2 0V14h6v20h-6zm-18 0H9V14h6v20z" /></SVG>,
        innerBlocks: [
            ['core/column', {
                width: 25,
                bootstrapColumns: {
                    global: 'col-12',
                    md: 'col-md-3',
                }
            }],
            ['core/column', {
                width: 50,
                bootstrapColumns: {
                    global: 'col-12',
                    md: 'col-md-6',
                }
            }],
            ['core/column', {
                width: 25,
                bootstrapColumns: {
                    global: 'col-12',
                    md: 'col-md-3',
                }
            }],
        ],
        scope: ['block'],
    },
];

export default variations;