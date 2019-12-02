/**
 * External Dependencies
 */
import classnames from 'classnames';

/**
 * WordPress dependencies.
 */
const { find } = lodash;
const { __ } = wp.i18n;
const { hasBlockSupport } = wp.blocks;
const { BlockControls, InspectorControls, withColors } = wp.blockEditor;
const { createHigherOrderComponent } = wp.compose;
const { compose } = wp.compose;
const { withSelect } = wp.data;
const { Fragment } = wp.element;
const { withFallbackStyles } = wp.components;
const { addFilter } = wp.hooks;

/**
 * Internal dependencies.
 */
import {
	BackgroundControls,
	BackgroundClasses,
	BackgroundStyles,
	BackgroundDropZone,
	BackgroundVideo,
	BackgroundPanel,
} from '../../../components/background';
import { restrictedBlocks } from '../../attributes';

/**
 * Override the default block element to add Font Panels.
 *
 * @param  {Function} BlockListBlock Original component
 * @return {Function} Wrapped component
 */
const enhance = compose(
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
);

/**
 * Add custom WeCodeArt attributes to selected blocks
 *
 * @param {Function} BlockListBlock Original component.
 * @return {string} Wrapped component.
 */
const withBackgroundSettings = createHigherOrderComponent((BlockListBlock) => {
	return enhance(({ select, ...props }) => {
		let customData = {};
		let wrapperProps = props.wrapperProps;

		const blockName = select('core/block-editor').getBlockName(props.clientId);

		if (!restrictedBlocks.includes(blockName) && hasBlockSupport(blockName, 'hasBackground')) {

			let { attributes } = select('core/block-editor').getBlock(props.clientId);

			const { colors } = select('core/block-editor').getSettings();
			props.colors = colors;

			const { backgroundImg } = attributes;
			if (backgroundImg !== '') {
				customData = { ...customData, ...{ 'data-wca-background': 1 } };
			}

			wrapperProps = {
				...wrapperProps,
				style: BackgroundStyles(attributes, props),
				...customData,
			};
		}

		return <BlockListBlock {...props} wrapperProps={wrapperProps} />;
	});
}, 'withBackgroundSettings');

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
 * Override props assigned to save component to inject atttributes
 *
 * @param {Object} extraProps Additional props applied to save element.
 * @param {Object} blockType  Block type.
 * @param {Object} attributes Current block attributes.
 *
 * @return {Object} Filtered props applied to save element.
 */
function applyExtraSettings(extraProps, blockType, attributes) {
	if (!restrictedBlocks.includes(blockType.name) && hasBlockSupport(blockType.name, 'hasBackground')) {
		extraProps.style = BackgroundStyles(attributes, {});
		extraProps.className = classnames(extraProps.className, BackgroundClasses(attributes));
	}

	return extraProps;
}

function applyFilters() {
	addFilter('editor.BlockEdit', 'wecodeart/editor/with-background/withBackgroundControls', withBackgroundControls);
	addFilter('editor.BlockListBlock', 'wecodeart/editor/with-background/withBackgroundSettings', withBackgroundSettings);
	addFilter('blocks.getSaveContent.extraProps', 'wecodeart/blocks/with-background/applyExtraSettings', applyExtraSettings);
}

applyFilters();
