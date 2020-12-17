/**
 * Internal dependencies
 */
import * as ratio from './../../helpers';

/**
 * Background Classes.
 *
 * @param {Object} attributes The attributes.
 * @returns {Array} The background classes.
 */
export function getBackgroundClasses(attributes) {
    const {
        hasParallax,
        backgroundType,
        backgroundUrl,
        backgroundSize,
        backgroundPosition,
        backgroundRepeat,
        backgroundOverlay
    } = attributes;

    const classes = [
        { [`has-background-${backgroundType}`]: backgroundUrl && backgroundType },
        { 'has-background-overlay': backgroundUrl && backgroundOverlay !== 0 },
        { 'has-parallax': backgroundUrl && backgroundType === 'image' && hasParallax },
        { 'is-transient': backgroundUrl && 0 === backgroundUrl.indexOf('blob:') },
    ];

    if (backgroundOverlay) {
        classes.push(
            { [ratio.overlayToClass(backgroundOverlay)]: backgroundUrl && backgroundOverlay !== 0 && backgroundOverlay !== 50 }
        );
    }

    if (backgroundSize) {
        classes.push(
            { [`bg-${backgroundSize}`]: backgroundUrl && backgroundType === 'image' }
        );
    }

    if (backgroundRepeat) {
        classes.push(
            { [`bg-${backgroundRepeat}`]: backgroundUrl && backgroundType === 'image' }
        );
    }

    if (backgroundPosition) {
        classes.push(
            { [`bg-${backgroundPosition.split(' ').join('-')}`]: backgroundUrl && backgroundType === 'image' }
        );
    }

    return classes;
};

/**
 * Background Styles
 *
 * @param {Object} attributes      The attributes. 
 * @returns {Object} styles.
 */
export function getBackgroundStyles(attributes) {

    const { backgroundUrl, backgroundType, focalPoint, hasParallax } = attributes;

    const showBGPosition = attributes && backgroundUrl && backgroundType === 'image';

    let styles = {
        backgroundImage: backgroundUrl && backgroundType === 'image' ? `url(${backgroundUrl})` : undefined,
        backgroundPosition: showBGPosition && focalPoint && !hasParallax ? `${focalPoint.x * 100}% ${focalPoint.y * 100}%` : undefined,
    };

    return styles;
}; 