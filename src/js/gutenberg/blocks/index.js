/**
 * WP dependencies
 */
const { registerBlockType } = wp.blocks;

import './cover';
import './group';
import './media-text';
import lorem from './lorem';
import section from './section';
import content from './content';
import column from './section/column';

function registerWCABlocks() {
    [
        lorem,
        section,
        content,
        column
    ].forEach((block) => {
        if (!block) return;
        const { name, settings, category = 'wca' } = block;
        registerBlockType(name, { ...settings, category });
    });
}

registerWCABlocks();