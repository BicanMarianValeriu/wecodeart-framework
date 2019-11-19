/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * WordPress Dependencies
 */
const { addFilter } = wp.hooks;
const { Fragment } = wp.element;
const { createHigherOrderComponent } = wp.compose;
const { hasBlockSupport } = wp.blocks;

const restrictedBlocks = ['core/freeform', 'core/shortcode', 'core/nextpage'];
const blocksWithFullScreen = ['core/image', 'core/cover', 'core/group', 'core/columns', 'core/media-text'];
const blocksWithFontSize = ['core/list'];
const blocksWithAnchor = ['core/spacer', 'core/separator'];

/**
 * Filters registered block settings, extending attributes with anchor using ID
 * of the first node.
 *
 * @param 	{Object} settings Original block settings.
 *
 * @return 	{Object} Filtered block settings.
 */
function addAttributes(settings) {
	if (typeof settings.attributes !== 'undefined' && !restrictedBlocks.includes(settings.name)) {
		settings.attributes = Object.assign(settings.attributes, {
			wecodeart: {
				type: 'object',
				default: {
					devices: false,
					desktop: true,
					tablet: true,
					mobile: true,
					loggedin: true,
					loggedout: true,
				},
			},
		});

		// Add vertical full screen support.
		if (blocksWithFullScreen.includes(settings.name)) {
			if (!settings.supports) {
				settings.supports = {};
			}
			settings.supports = Object.assign(settings.supports, {
				hasHeightFullScreen: true,
			});
		}

		if (hasBlockSupport(settings, 'hasHeightFullScreen')) {
			if (typeof settings.attributes !== 'undefined') {
				if (!settings.attributes.isHeightFullScreen) {
					settings.attributes = Object.assign(settings.attributes, {
						isHeightFullScreen: {
							type: 'boolean',
							default: false,
						},
					});
				}
			}
		}

		// Add custom font size picker on selected blocks.
		if (blocksWithFontSize.includes(settings.name)) {
			if (!settings.attributes) {
				settings.attributes = {};
			}
			settings.attributes = Object.assign(settings.attributes, {
				textColor: {
					type: 'string',
				},
				customTextColor: {
					type: 'string',
				},
				fontSize: {
					type: 'string',
				},
				customFontSize: {
					type: 'number',
				},
			});
		}

		// Enable anchor to selected blocks
		if (blocksWithAnchor.includes(settings.name)) {
			if (!settings.supports) {
				settings.supports = {};
			}
			settings.supports = Object.assign(settings.supports, {
				anchor: true,
			});
		}
	}

	return settings;
}

/**
 * Add custom WeCodeArt attributes to selected blocks
 *
 * @param {Function} BlockEdit Original component.
 * @return {string} Wrapped component.
 */
const withAttributes = createHigherOrderComponent((BlockEdit) => {
	return (props) => {
		const {
			attributes,
		} = props;

		if (typeof attributes.wecodeart === 'undefined') {
			attributes.wecodeart = [];
		}

		return (
			<Fragment>
				<BlockEdit {...props} />
			</Fragment>
		);
	};
}, 'withAttributes');

/**
 * Override props assigned to save component to inject atttributes
 *
 * @param {Object} extraProps Additional props applied to save element.
 * @param {Object} blockType  Block type.
 * @param {Object} attributes Current block attributes.
 *
 * @return {Object} Filtered props applied to save element.
 */
function applyExtraClass(extraProps, blockType, attributes) {
	const { wecodeart, isHeightFullScreen } = attributes;

	if (typeof wecodeart !== 'undefined' && !restrictedBlocks.includes(blockType.name)) {
		let classNames;
		if (typeof wecodeart.id !== 'undefined') {
			extraProps.className = classnames(extraProps.className, wecodeart.id);
		}

		if (typeof wecodeart.mobile !== 'undefined' && !wecodeart.mobile) {
			extraProps.className = classnames(extraProps.className, 'd-none d-md-block');
		}

		if (typeof wecodeart.tablet !== 'undefined' && !wecodeart.tablet) {
			classNames = extraProps.className.replace(' d-md-block', '');
			extraProps.className = classnames(classNames, 'd-md-none d-lg-block');
		}

		if (typeof wecodeart.desktop !== 'undefined' && !wecodeart.desktop) {
			classNames = extraProps.className.replace(' d-lg-block', '');
			extraProps.className = classnames(classNames, 'd-lg-none');
		}
	}

	if (hasBlockSupport(blockType.name, 'hasHeightFullScreen') && isHeightFullScreen) {
		extraProps.className = classnames(extraProps.className, 'h-screen');
	}

	return extraProps;
}

const addEditorBlockAttributes = createHigherOrderComponent((BlockListBlock) => {
	return (props) => {
		const { name, attributes } = props;
		const { isHeightFullScreen } = attributes;

		let wrapperProps = props.wrapperProps;
		let customData = {};

		if (hasBlockSupport(name, 'hasHeightFullScreen') && isHeightFullScreen) {
			customData = Object.assign(customData, { 'data-wecodeart-h-screen': 1 });
		}

		wrapperProps = {
			...wrapperProps,
			...customData,
		};

		return <BlockListBlock {...props} wrapperProps={wrapperProps} />;
	};
}, 'addEditorBlockAttributes');

addFilter(
	'blocks.registerBlockType',
	'wecodeart/custom/attributes',
	addAttributes
);

addFilter(
	'editor.BlockEdit',
	'wecodeart/attributes',
	withAttributes
);

addFilter(
	'blocks.getSaveContent.extraProps',
	'wecodeart/applyExtraClass',
	applyExtraClass
);

addFilter(
	'editor.BlockListBlock',
	'wecodeart/addEditorBlockAttributes',
	addEditorBlockAttributes
);
