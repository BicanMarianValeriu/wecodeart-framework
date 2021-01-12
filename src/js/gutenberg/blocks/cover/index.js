/**
 * WordPress dependencies.
 */
const { addFilter } = wp.hooks;

/**
 * Override props assigned to save component to inject atttributes
 *
 * @param {Object} extraProps Additional props applied to save element.
 * @param {Object} blockType  Block type.
 * @param {Object} attributes Current block attributes.
 *
 * @return {Object} Filtered props applied to save element.
 */
function applyExtraSettings(extraProps, blockType) {
    const { name: blockName } = blockType;

    if (blockName === 'core/cover') {
        extraProps.style = {};
    }

    return extraProps;
}

/**
 * Apply Filters
 */
function applyFilters() {
    addFilter('blocks.getSaveContent.extraProps', 'wecodeart/blocks/cover/applyExtraSettings', applyExtraSettings);
}

applyFilters();
