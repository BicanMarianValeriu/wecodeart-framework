/**
 * WordPress dependencies.
 */
const { hasBlockSupport } = wp.blocks;
const { BlockControls, InspectorControls } = wp.blockEditor;
const { createHigherOrderComponent } = wp.compose;
const { Fragment } = wp.element;
const { addFilter } = wp.hooks;

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
	BackgroundControls,
	BackgroundPanel,
	// BackgroundDropZone,
	// BackgroundVideo,
} from '../../../controls/background';
import { restrictedBlocks } from '../../attributes';

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

		if (!restrictedBlocks.includes(blockName) && hasBlockSupport(blockName, 'withBackground') && isSelected) {
			const { attributes } = props;
			const { backgroundUrl } = attributes;
			return (
				<Fragment>
					<BlockEdit {...props} />
					<BlockControls>
						{BackgroundControls(props)}
					</BlockControls>
					<InspectorControls>
						{backgroundUrl && <BackgroundPanel {...props} />}
					</InspectorControls>
				</Fragment>
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

		if (!restrictedBlocks.includes(blockName) && hasBlockSupport(blockName, 'withBackground')) {
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
		extraProps.style = getBackgroundStyles(attributes);
	}

	return extraProps;
}

/**
 * Apply Filters
 */
function applyFilters() {
	addFilter('editor.BlockListBlock', 'wecodeart/editor/withBackgroundStyles', withBackgroundStyles);
	addFilter('editor.BlockEdit', 'wecodeart/editor/withBackgroundControls', withBackgroundControls);
	addFilter('blocks.getSaveContent.extraProps', 'wecodeart/blocks/withBackground/applyExtraSettings', applyExtraSettings);
}

applyFilters();
