/**
 * WordPress dependencies.
 */
const { addFilter } = wp.hooks;
const { hasBlockSupport } = wp.blocks;
const { BlockControls, InspectorControls } = wp.blockEditor;
const { createHigherOrderComponent } = wp.compose;
const { restrictedBlocks } = wecodeartInfo;

/**
 * External Dependencies
 */
import classnames from 'classnames';

/**
 * Internal dependencies.
 */
import {
	getBackgroundStyles,
	getBackgroundClasses,
	attributes as BackgroundAttributes,
	Controls,
	Inspector,
} from './../../controls/background';

/**
 * Filters registered block settings, extending attributes with anchor using ID
 * of the first node.
 *
 * @param 	{Object} settings Original block settings.
 *
 * @return 	{Object} Filtered block settings.
 */
function addAttributes(settings) {
	const { name: blockName } = settings;
	if (restrictedBlocks.includes(blockName)) return settings;

	if (hasBlockSupport(settings, 'withBackground')) {
		settings.attributes = Object.assign(settings.attributes, BackgroundAttributes);
	}

	return settings;
}

/**
 * BG Controls
 *
 * @param {Function} BlockEdit Original component.
 * @return {string} Wrapped component.
 */
const withBackgroundControls = createHigherOrderComponent((BlockEdit) => {
	return (props) => {
		const {
			name: blockName,
			isSelected,
		} = props;

		if (hasBlockSupport(blockName, 'withBackground') && isSelected) {
			const { attributes } = props;
			const { backgroundUrl } = attributes;
			return (
				<>
					<BlockEdit {...props} />
					<BlockControls>
						{Controls(props)}
					</BlockControls>
					<InspectorControls>
						{backgroundUrl && <Inspector {...props} />}
					</InspectorControls>
				</>
			);
		}

		return <BlockEdit {...props} />;
	};
}, 'withBackgroundControls');


/**
 * Background Styles
 *
 * @param {Function} BlockEdit Original component.
 * @return {string} Wrapped component.
 */
const withBackgroundStyles = createHigherOrderComponent((BlockListBlock) => {
	return (props) => {
		const {
			name: blockName,
			className,
		} = props;

		if (hasBlockSupport(blockName, 'withBackground')) {
			const { attributes } = props;
			return <BlockListBlock {...{
				...props,
				className: classnames(className, getBackgroundClasses(attributes)),
				style: getBackgroundStyles(attributes)
			}} />;
		}

		return <BlockListBlock {...props} />;
	};
}, 'withBackgroundStyles');

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

	if (!restrictedBlocks.includes(blockName) && hasBlockSupport(blockName, 'withBackground')) {
		extraProps.className = classnames(extraProps.className, getBackgroundClasses(attributes));
		extraProps.style = {};
	}

	return extraProps;
}

/**
 * Apply Filters
 */
function applyFilters() {
	addFilter('blocks.registerBlockType', 'wecodeart/blocks/custom/attributes', addAttributes);
	addFilter('editor.BlockListBlock', 'wecodeart/editor/withBackgroundStyles', withBackgroundStyles);
	addFilter('editor.BlockEdit', 'wecodeart/editor/withBackgroundControls', withBackgroundControls);
	addFilter('blocks.getSaveContent.extraProps', 'wecodeart/blocks/withBackground/applyExtraSettings', applyExtraSettings);
}

applyFilters();
