/**
 * WordPress dependencies
 */
const { find } = lodash;

/**
 * Background Classes
 *
 * @param {Object} attributes      The attributes.
 * @param {Object} backgroundColor The selected background color.
 * @returns {Object} styles.
 */
const BackgroundStyles = (attributes, colors = {}) => {
    const { backgroundColor, customBackgroundColor } = attributes;
    
    const showBGPosition = attributes && attributes.backgroundImg && attributes.backgroundType === 'image';

    let styles = {};

    if (typeof backgroundColor !== 'undefined') {
        if (typeof colors !== 'undefined') {
            const backgroundColorValue = find(colors, { slug: backgroundColor });
            if (typeof backgroundColorValue !== 'undefined' && typeof backgroundColorValue.color !== 'undefined') {
                styles = {
                    ...styles,
                    backgroundColor: backgroundColorValue.color,
                };
            }
        }
    } else if (typeof customBackgroundColor !== 'undefined') {
        styles = {
            ...styles,
            backgroundColor: customBackgroundColor,
        };
    }

    styles = {
        ...styles,
        backgroundImage: attributes.backgroundImg && attributes.backgroundType === 'image' ? `url(${attributes.backgroundImg})` : undefined,
        backgroundPosition: showBGPosition && attributes.focalPoint && !attributes.hasParallax ? `${attributes.focalPoint.x * 100}% ${attributes.focalPoint.y * 100}%` : undefined,
    };

    return styles;
};

export default BackgroundStyles;