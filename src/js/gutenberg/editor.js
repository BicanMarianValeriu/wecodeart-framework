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

export default function registerWCABlocks() {
    [
        /* import */
    ].forEach((block) => {
        if (!block) return;
        const { name, settings } = block;
        registerBlockType(name, { ...settings, category: 'wca' });
    });
}

registerWCABlocks();