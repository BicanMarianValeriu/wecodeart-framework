/**
 * WordPress dependencies.
 */
const {
	hooks: { addFilter },
	blocks: { hasBlockSupport },
	compose: { createHigherOrderComponent },
	blockEditor: { BlockControls, InspectorControls, __experimentalGetGradientClass }
} = wp;

const { restrictedBlocks = [] } = wecodeartInfo || {};

export const ALLOWED_BG_MEDIA_TYPES = ['image', 'video'];

/**
 * External Dependencies
 */
import classnames from 'classnames';

/**
 * Internal dependencies.
 */
import Controls from './controls';
import Inspector from './inspector';

/**
 * Helpers
 */
function overlayToClass(ratio) {
	return (ratio === 0 || ratio === 50) ? null : 'has-background-dim-' + (10 * Math.round(ratio / 10));
}

function getBackgroundClasses(attributes) {
	const {
		backgroundUrl = '',
		backgroundType = '',
		backgroundSize = '',
		backgroundRepeat = '',
		backgroundOverlay = 0,
		backgroundPosition = '',
		hasParallax = false,
		focalPoint = undefined,
		gradient = false,
		style: {
			color: {
				gradient: customGradient = false
			} = {}
		} = {}
	} = attributes;

	const showBG = backgroundUrl && backgroundType === 'image';
	const showOverlay = backgroundUrl && backgroundOverlay !== 0;
	const showParallax = showBG && hasParallax;
	const showOverlayRatio = showOverlay && backgroundOverlay !== 50;
	const showGradient = backgroundUrl && (gradient || customGradient);
	const showPosition = showParallax || showBG && (backgroundPosition && !focalPoint);

	const classes = {
		'has-background-dim': showOverlay,
		'has-background-gradient': showGradient,
		[overlayToClass(backgroundOverlay)]: showOverlayRatio,
		'has-parallax': showParallax,
		[`bg-${backgroundSize}`]: showBG && backgroundSize,
		[`bg-${backgroundRepeat}`]: showBG && backgroundRepeat,
		[`bg-${backgroundPosition.split(' ').join('-')}`]: showPosition
	};

	return classes;
}

/**
 * Filters registered block settings, extending attributes with anchor using ID of the first node.
 *
 * @param 	{Object} settings Original block settings.
 *
 * @return 	{Object} Filtered block settings.
 */
function addAttributes(settings) {
	const { name: blockName } = settings;
	// Only if not restricted and we have withBackground support
	if (restrictedBlocks.includes(blockName) || !hasBlockSupport(settings, 'withBackground')) return settings;

	settings.attributes = Object.assign(settings.attributes, {
		backgroundType: {
			type: 'string',
		},
		backgroundUrl: {
			type: 'string',
		},
		backgroundPosition: {
			type: 'string',
			default: 'center center',
		},
		backgroundRepeat: {
			type: 'string',
			default: 'no-repeat',
		},
		backgroundSize: {
			type: 'string',
			default: 'cover',
		},
		backgroundOverlay: {
			type: 'number',
			default: 0,
		},
		hasParallax: {
			type: 'boolean',
			default: false,
		},
		focalPoint: {
			type: 'object',
		},
	});

	return settings;
}

/**
 * BG Controls
 *
 * @param 	{Function} 	BlockEdit Original component.
 *
 * @return 	{string} 	Wrapped component.
 */
const withBackgroundControls = createHigherOrderComponent((BlockEdit) => {
	return (props) => {
		const {
			name: blockName,
			isSelected,
		} = props;

		if (isSelected && hasBlockSupport(blockName, 'withBackground')) {
			const { attributes } = props;
			const { backgroundUrl } = attributes;
			return (
				<>
					<BlockEdit {...props} />
					<BlockControls>
						<Controls {...props} />
					</BlockControls>
					{backgroundUrl && <InspectorControls>
						<Inspector {...props} />
					</InspectorControls>}
				</>
			);
		}

		return <BlockEdit {...props} />;
	};
}, 'withBackgroundControls');


/**
 * Background Styles
 *
 * @param 	{Function} 	BlockEdit Original component.
 *
 * @return 	{string} 	Wrapped component.
 */
const withBackgroundStyles = createHigherOrderComponent((BlockListBlock) => {
	return (props) => {
		const {
			name: blockName,
			className,
		} = props;

		if (hasBlockSupport(blockName, 'withBackground')) {
			const { attributes } = props;
			const {
				backgroundType,
				backgroundUrl,
				focalPoint,
				hasParallax,
			} = attributes;

			const showBG = backgroundUrl && backgroundType === 'image';

			return (
				<BlockListBlock {...props} className={classnames(className, {
					...getBackgroundClasses(attributes),
					'is-transient': backgroundUrl && 0 === backgroundUrl.indexOf('blob:')
				})} wrapperProps={{
					style: {
						backgroundImage: showBG ? `url(${backgroundUrl})` : undefined,
						backgroundPosition: showBG && focalPoint && !hasParallax ? `${focalPoint.x * 100}% ${focalPoint.y * 100}%` : undefined,
					},
				}} />
			);
		}

		return <BlockListBlock {...props} />;
	};
}, 'withBackgroundStyles');

/**
 * Override props assigned to save component to inject atttributes
 *
 * @param 	{Object} 	extraProps Additional props applied to save element.
 * @param 	{Object} 	blockType  Block type.
 * @param 	{Object} 	attributes Current block attributes.
 *
 * @return 	{Object} 	Filtered props applied to save element.
 */
function applyExtraSettings(extraProps, blockType, attributes) {
	const { name: blockName } = blockType;

	if (hasBlockSupport(blockName, 'withBackground')) {
		const { gradient, backgroundUrl, backgroundType } = attributes;
		let { className } = extraProps;

		const showBG = backgroundUrl && backgroundType === 'image';
		if (showBG) {
			// Clear gradient class from main component, we apply later on inner div in save filter
			const gradientClass = __experimentalGetGradientClass(gradient);
			className = className.split(' ').filter((i) => i !== gradientClass);
		}

		// Custom Background Styles/Properties are generated into CSS files
		extraProps.className = classnames(className, getBackgroundClasses(attributes));
		extraProps.style = {};
	}

	return extraProps;
}

/**
 * Override props assigned to save component to inject atttributes
 *
 * @param 	{Object} 	element      The save element.
 * @param 	{Object} 	blockType    Block type.
 * @param 	{Object} 	attributes   Current block attributes.
 *
 * @return 	{Object} 	Filtered props applied to save element.
 */
function getSaveElement(element, blockType, attributes) {
	const { name: blockName } = blockType;

	if (hasBlockSupport(blockName, 'withBackground')) {
		const { backgroundType, backgroundUrl, backgroundOverlay, gradient, style: {
			color: {
				gradient: customGradient = false
			} = {}
		} = {} } = attributes;

		const gradientClass = __experimentalGetGradientClass(gradient);

		// Custom Background Styles/Properties are generated into CSS files
		const children = (
			<>
				{backgroundUrl && (gradient || customGradient) && backgroundOverlay !== 0 && (
					<span {...{
						className: classnames('wp-block__gradient-background', gradientClass),
						'aria-hidden': 'true',
					}} />
				)}
				{element.props.children}
			</>
		);

		element.props = { ...element.props, children };
	}

	return element;
}

/**
 * Apply Filters
 */
function applyFilters() {
	addFilter('blocks.registerBlockType', 'wecodeart/blocks/withBackground/attributes', addAttributes);
	addFilter('editor.BlockListBlock', 'wecodeart/editor/withBackground/editor', withBackgroundStyles);
	addFilter('editor.BlockEdit', 'wecodeart/editor/withBackground/controls', withBackgroundControls);
	addFilter('blocks.getSaveElement', 'wecodeart/blocks/withBackground/save', getSaveElement);
	addFilter('blocks.getSaveContent.extraProps', 'wecodeart/blocks/withBackground/extra', applyExtraSettings);
}

applyFilters();
