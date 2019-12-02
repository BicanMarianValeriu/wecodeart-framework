/**
 * Internal dependencies
 */
import * as ratio from './../../helpers';

/**
 * WordPress dependencies
 */
const { getColorClassName } = wp.blockEditor;

/**
 * Background Classes.
 *
 * @param {Object} attributes The attributes.
 * @returns {Array} The background classes.
 */
function BackgroundClasses(attributes) {
	const backgroundClass = getColorClassName('background-color', attributes.backgroundColor);
	const backgroundSize = attributes.backgroundSize ? attributes.backgroundSize : 'cover';

	const classes = [
		{ 'has-background': attributes.backgroundColor || attributes.customBackgroundColor || attributes.backgroundImg },
		{ [backgroundClass]: backgroundClass },
		{ [`has-background-${attributes.backgroundType}`]: attributes.backgroundImg && attributes.backgroundType },
		{ 'has-background-overlay': attributes.backgroundImg && attributes.backgroundOverlay !== 0 },
		{ 'has-parallax': attributes.backgroundImg && attributes.backgroundType === 'image' && attributes.hasParallax },
		{ 'is-transient': attributes.backgroundImg && 0 === attributes.backgroundImg.indexOf('blob:') },
	];

	if (attributes.backgroundOverlay) {
		classes.push(
			{ [ratio.overlayToClass(attributes.backgroundOverlay)]: attributes.backgroundImg && attributes.backgroundOverlay !== 0 && attributes.backgroundOverlay !== 50 }
		);
	}

	if (backgroundSize) {
		classes.push(
			{ [`bg-${backgroundSize}`]: attributes.backgroundImg && attributes.backgroundType === 'image' }
		);
	}

	if (attributes.backgroundRepeat) {
		classes.push(
			{ [`bg-${attributes.backgroundRepeat}`]: attributes.backgroundImg && attributes.backgroundType === 'image' }
		);
	}

	if (attributes.backgroundPosition) {
		classes.push(
			{ [`bg-${attributes.backgroundPosition.split(' ').join('-')}`]: attributes.backgroundImg && attributes.backgroundType === 'image' }
		);
	}

	return classes;
}

export default BackgroundClasses;