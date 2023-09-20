import lorem from './lorem';
import { groupMarquee, socialSharing } from './variations';

/**
 * WP dependencies
 */
const { registerBlockType, registerBlockVariation } = wp.blocks;

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

function registerWCAVariations() {
    [
        groupMarquee,
        // socialSharing
    ].forEach(({ block, attributes }) => {
        registerBlockVariation(block, attributes);
    });
}

registerWCAVariations();