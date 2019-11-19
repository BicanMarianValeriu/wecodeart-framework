const { registerBlockType } = wp.blocks;

// Attributes
import './extensions/attributes';

// Block Panels
import './extensions/block-panel';
import './extensions/advanced';

// Plugins
import './extensions/plugins';

// Formats
import './extensions/formats/';

export default function registerWCABlocks() {
    [].forEach((block) => {
        if (!block) return;
        const { name, settings } = block;
        registerBlockType(name, settings);
    });
}

registerWCABlocks();