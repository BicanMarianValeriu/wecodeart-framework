import lorem from './lorem';

/**
 * WP dependencies
 */
const { registerBlockType } = wp.blocks;

function registerWCABlocks() {
    [
        lorem,
    ].forEach((block) => {
        if (!block) return;
        const { name, settings, category = 'wca' } = block;
        registerBlockType(name, { ...settings, category });
    });
}

registerWCABlocks();