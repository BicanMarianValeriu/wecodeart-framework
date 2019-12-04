/**
 * WordPress dependencies.
 */
const { hasBlockSupport } = wp.blocks;
const { BlockControls, InspectorControls, withColors } = wp.blockEditor;
const { createHigherOrderComponent } = wp.compose;
const { compose } = wp.compose;
const { select, withSelect } = wp.data;
const { Fragment } = wp.element;
const { withFallbackStyles } = wp.components;
const { addFilter } = wp.hooks;

/**
 * External Dependencies
 */
import classnames from 'classnames';

/**
 * Internal dependencies.
 */
import {
	BackgroundControls,
	BackgroundClasses,
	BackgroundStyles,
	//BackgroundDropZone,
	//BackgroundVideo,
	BackgroundPanel,
} from '../../../controls/background';
import { restrictedBlocks } from '../../attributes';

/**
 * Override the default block element to add Font Panels.
 *
 * @param  {Function} BlockListBlock Original component
 * @return {Function} Wrapped component
 */
const enhance = compose([
	withSelect((select) => {
		return {
			selected: select('core/block-editor').getSelectedBlock(),
			select,
		};
	}),
	withColors('backgroundColor'),
	withFallbackStyles((node, ownProps) => {
		const { backgroundColor, customBackgroundColor } = ownProps.attributes;

		const editableNode = node.querySelector('[contenteditable="true"]');
		const computedStyles = editableNode ? getComputedStyle(editableNode) : null;

		return {
			fallbackBackgroundColor: backgroundColor || customBackgroundColor || !computedStyles ? undefined : computedStyles.backgroundColor,
		};
	})
]);

/**
 * BG Controls
 *
 * @param {Function} BlockEdit Original component.
 * @return {string} Wrapped component.
 */
const withBackgroundControls = createHigherOrderComponent((BlockEdit) => {
	return enhance((props) => {
		const {
			name: blockName,
			isSelected,
		} = props;

		if (!restrictedBlocks.includes(blockName) && hasBlockSupport(blockName, 'hasBackground') && isSelected) {
			return (
				<Fragment>
					<BlockEdit {...props} />
					<BlockControls>
						{BackgroundControls(props)}
					</BlockControls>
					<InspectorControls>
						<BackgroundPanel {...props} hasOverlay={true} />
					</InspectorControls>
				</Fragment>
			);
		}

		return <BlockEdit {...props} />;
	});
}, 'withBackgroundControls');

/**
 * Add custom WeCodeArt attributes to selected blocks
 *
 * @param {Function} BlockListBlock Original component.
 * @return {string} Wrapped component.
 */
const withBackgroundSettings = createHigherOrderComponent((BlockListBlock) => {
	return (props) => {
		let { name: blockName, wrapperProps } = props;
		let customData = {};

		if (!restrictedBlocks.includes(blockName) && hasBlockSupport(blockName, 'hasBackground')) {

			const { attributes } = props;
			const { colors } = select('core/block-editor').getSettings();

			const { backgroundImg } = attributes;
			if (backgroundImg !== '') {
				customData = { ...customData, ...{ 'data-wca-background': 1 } };
			}

			wrapperProps = {
				...wrapperProps,
				style: BackgroundStyles(attributes, colors),
				...customData,
			};
		}

		return <BlockListBlock {...props} wrapperProps={wrapperProps} />;
	};
}, 'withBackgroundSettings');

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

	if (!restrictedBlocks.includes(blockName) && hasBlockSupport(blockName, 'hasBackground')) {
		extraProps.style = BackgroundStyles(attributes, {});
		extraProps.className = classnames(extraProps.className, BackgroundClasses(attributes));
	}

	return extraProps;
}

/**
 * Apply Filters
 */
function applyFilters() {
	addFilter('editor.BlockEdit', 'wecodeart/editor/with-background/withBackgroundControls', withBackgroundControls);
	addFilter('editor.BlockListBlock', 'wecodeart/editor/with-background/withBackgroundSettings', withBackgroundSettings);
	addFilter('blocks.getSaveContent.extraProps', 'wecodeart/blocks/with-background/applyExtraSettings', applyExtraSettings);
}

applyFilters();
