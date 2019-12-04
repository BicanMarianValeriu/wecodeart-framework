/**
 * WordPress dependencies.
 */
const { getColorClassName } = wp.blockEditor;
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
function applyExtraSettings(extraProps, blockType, attributes) {
    const { name: blockName } = blockType;
    
    if (blockName === 'core/media-text') {
        const { mediaWidth, backgroundColor, customBackgroundColor } = attributes;
        const backgroundClass = getColorClassName('background-color', backgroundColor);
        
        let styles = {
            backgroundColor: backgroundClass ? undefined : customBackgroundColor,
        };

        if (mediaWidth !== 50) {
            styles = {
                ...styles,
                [`--media-width`]: `${mediaWidth}%;`
            };
        }

        extraProps.style = styles;
    }

    return extraProps;
}

/**
 * Apply Filters
 */
function applyFilters() {
    addFilter('blocks.getSaveContent.extraProps', 'wecodeart/blocks/media-text/applyExtraSettings', applyExtraSettings);
}

applyFilters();
