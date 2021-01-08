const { registerBlockType } = wp.blocks;

// Attributes
import './extensions/attributes';

// Core Blocks
import './blocks/media-text';

// Block Panels
import './extensions/modules';
import './extensions/advanced';

// Plugins
import './extensions/plugins';

// Formats
import './extensions/formats';

// Styles
import './extensions/styles';

// Custom Blocks
import lorem from './blocks/lorem';
import section from './blocks/section';
import content from './blocks/content';
import column from './blocks/section/column';

// SCSS
import './../../scss/gutenberg/gutenberg.scss';

export default function registerWCABlocks() {
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