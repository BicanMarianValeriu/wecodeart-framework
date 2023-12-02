import lorem from './lorem';
import { groupMarquee, groupMarqueeV2, socialSharing } from './variations';

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
        groupMarqueeV2,
        socialSharing
    ].forEach(({ block, attributes }) => {
        registerBlockVariation(block, attributes);
    });
}

registerWCAVariations();