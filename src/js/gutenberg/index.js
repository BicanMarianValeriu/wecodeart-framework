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

// Plugins
import './extensions/plugins';

// Formats
import './extensions/formats';

// Styles
import './extensions/styles';

// Custom Blocks
import lorem from './blocks/lorem';
import importer from './blocks/import';

export default function registerWCABlocks() {
    [
        lorem,
        importer
    ].forEach((block) => {
        if (!block) return;
        const { name, settings, category = 'wca' } = block;
        console.log( name );
        registerBlockType(name, { ...settings, category });
    });
}

registerWCABlocks();