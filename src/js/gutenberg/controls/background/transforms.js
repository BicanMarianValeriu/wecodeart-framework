/**
 * Set the attributes for the Background transformations.
 *
 * @param {Object} props The passed props.
 * @returns {Object} The background transforms.
 */
function BackgroundTransforms(props) {
	const transforms = {
		backgroundUrl: props.backgroundUrl,
		backgroundOverlay: props.backgroundOverlay,
		backgroundPosition: props.backgroundPosition,
		backgroundRepeat: props.backgroundRepeat,
		backgroundSize: props.backgroundSize,
		hasParallax: props.hasParallax,
	};

	return transforms;
}

export default BackgroundTransforms;