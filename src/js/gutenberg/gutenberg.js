const { registerBlockType } = wp.blocks;

// Attributes
import './extensions/attributes';

// Core Blocks
import './blocks/columns';
import './blocks/column';
import './blocks/media-text';

// Block Panels
import './extensions/modules';
import './extensions/advanced';

// // Plugins
import './extensions/plugins';

// Formats
import './extensions/formats';

// Styles
import './extensions/styles';

// Custom Blocks
import lorem from './blocks/lorem';
import importer from './blocks/import';
import section from './blocks/section';
import column from './blocks/section/column';

// SCSS
import './../../scss/gutenberg/gutenberg.scss';

export default function registerWCABlocks() {
    [
        lorem,
        importer,
        section,
        column
    ].forEach((block) => {
        if (!block) return;
        const { name, settings, category = 'wca' } = block;
        registerBlockType(name, { ...settings, category });
    });
}

registerWCABlocks();