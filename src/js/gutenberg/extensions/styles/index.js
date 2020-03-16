/**
 * WP dependencies
 */
const { registerBlockStyle } = wp.blocks;

import buttons from './buttons';

function registerWCAStyles() {
    [
        buttons,
    ].forEach((item) => {
        if (!item) return;

        const { block, styles } = item;

        registerBlockStyle(block, styles);
    });
}

registerWCAStyles();