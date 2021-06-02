import lorem from './lorem';
import section from './section';
import column from './section/column';

/**
 * WP dependencies
 */
const { registerBlockType } = wp.blocks;

function registerWCABlocks() {
    [
        lorem,
        section,
        column
    ].forEach((block) => {
        if (!block) return;
        const { name, settings, category = 'wca' } = block;
        registerBlockType(name, { ...settings, category });
    });
}

registerWCABlocks();