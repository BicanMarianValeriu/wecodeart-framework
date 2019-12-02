/**
 * External Dependencies
 */
import classnames from 'classnames';

/**
 * WordPress Dependencies
 */
const { assign } = lodash;
const { __ } = wp.i18n;
const { withSelect } = wp.data;
const { Fragment } = wp.element;
const { InspectorControls, FontSizePicker, withFontSizes, withColors, PanelColorSettings } = wp.blockEditor;
const { PanelBody, withFallbackStyles } = wp.components;
const { addFilter } = wp.hooks;
const { compose, createHigherOrderComponent } = wp.compose;

/**
 * Internal Dependencies
 */
import applyStyle from './applyStyle';
import { blocksWithFontSize } from '../../attributes';

/**
 * Override the default block element to add Font Panels.
 *
 * @param  {Function} BlockListBlock Original component
 * @return {Function} Wrapped component
 */
const WithTextControls = compose([
	withSelect((select) => {
		return {
			propDemo: true
		};
	}),
	withColors({ textColor: 'color' }),
	withFontSizes('fontSize'),
	withFallbackStyles((node, ownProps) => {
		const { fontSize, customFontSize, textColor } = ownProps.attributes;
		const editableNode = node.querySelector('[contenteditable="true"]');
		const computedStyles = editableNode ? getComputedStyle(editableNode) : null;
		return {
			fallbackTextColor: textColor || !computedStyles ? undefined : computedStyles.color,
			fallbackFontSize: fontSize || customFontSize || !computedStyles ? undefined : parseInt(computedStyles.fontSize) || undefined,
		};
	}),
])((props) => {
	const {
		fallbackFontSize,
		fontSize,
		setFontSize,
		textColor,
		setTextColor,
	} = props;

	return (
		<InspectorControls>
			<PanelBody
				title={__('Text Settings', 'wecodeart')}
				initialOpen={false}
				className="wecodeart-panel"
			>
				<FontSizePicker
					fallbackFontSize={fallbackFontSize}
					value={fontSize.size}
					onChange={setFontSize}
				/>
			</PanelBody>
			<PanelColorSettings
				title={__('Color Settings', 'wecodeart')}
				initialOpen={false}
				colorSettings={[
					{
						value: textColor.color,
						onChange: setTextColor,
						label: __('Text Color', 'wecodeart'),
					},
				]}
			>
			</PanelColorSettings>
		</InspectorControls>
	);
});

/**
 * Override the default block element to add wrapper props.
 *
 * @param  {Function} BlockListBlock Original component
 * @return {Function} Wrapped component
 */
const enhance = compose(
	/**
	 * For blocks whose block type doesn't support `multiple`, provides the
	 * wrapped component with `originalBlockClientId` -- a reference to the
	 * first block of the same type in the content -- if and only if that
	 * "original" block is not the current one. Thus, an inexisting
	 * `originalBlockClientId` prop signals that the block is valid.
	 *
	 */
	withSelect((select) => {
		const { fontSizes, colors } = select('core/block-editor').getSettings();

		return {
			selected: select('core/block-editor').getSelectedBlock(),
			fontSizes,
			select,
			colors,
		};
	})
);

/**
 * Add custom WeCodeArt attributes to selected blocks
 *
 * @param {Function} BlockListBlock Original component.
 * @return {string} Wrapped component.
 */
const withTextSettings = createHigherOrderComponent((BlockListBlock) => {
	return enhance(({ select, ...props }) => {
		let wrapperProps = props.wrapperProps;
		let customData = {};
		const attributes = select('core/block-editor').getBlock(props.clientId).attributes;
		const blockName = select('core/block-editor').getBlockName(props.clientId);

		if (blocksWithFontSize.includes(blockName)) {
			const { customFontSize, fontSize } = attributes;

			if (customFontSize || fontSize) {
				customData = assign(customData, { 'data-custom-fontsize': 1 });
			}

			wrapperProps = {
				...wrapperProps,
				style: applyStyle(attributes, blockName, props),
				...customData,
			};
		}

		return <BlockListBlock {...props} wrapperProps={wrapperProps} />;
	});
}, 'withTextSettings');

/**
 * Add custom WeCodeArt attributes to selected blocks
 *
 * @param {Function} BlockEdit Original component.
 * @return {string} Wrapped component.
 */
const withBlockPanel = createHigherOrderComponent((BlockEdit) => {
	return enhance(({ ...props }) => {
		const { name, isSelected } = props;

		if (isSelected && blocksWithFontSize.includes(name)) {
			return (
				<Fragment>
					<BlockEdit {...props} />
					<WithTextControls {...props} />
				</Fragment>
			);
		}

		return <BlockEdit {...props} />;
	});
}, 'withBlockPanel');

/**
 * Override props assigned to save component to inject atttributes
 *
 * @param {Object} extraProps Additional props applied to save element.
 * @param {Object} blockType  Block type.
 * @param {Object} attributes Current block attributes.
 *
 * @return {Object} Filtered props applied to save element.
 */
function applyTextSettings(extraProps, blockType, attributes) {
	if (blocksWithFontSize.includes(blockType.name)) {
		if (typeof extraProps.style !== 'undefined') {
			extraProps.style = assign(extraProps.style, applyStyle(attributes, blockType.name));
		} else {
			extraProps.style = applyStyle(attributes, blockType.name);
		}

		const { customFontSize, fontSize, textColor } = attributes;

		if (fontSize) {
			extraProps.className = classnames(extraProps.className, 'has-' + fontSize + '-font-size');
		} else if (customFontSize) {
			extraProps.className = classnames(extraProps.className, 'has-custom-size');
		}

		if (textColor) {
			extraProps.className = classnames(extraProps.className, 'has-' + textColor + '-color');
		}
	}

	return extraProps;
}

function applyFilters() {
	addFilter('editor.BlockEdit', 'wecodeart/editor/with-text/withBlockPanel', withBlockPanel);
	addFilter('editor.BlockListBlock', 'wecodeart/editor/with-text/withTextSettings', withTextSettings);
	addFilter('blocks.getSaveContent.extraProps', 'wecodeart/blocks/with-text/applyTextSettings', applyTextSettings);
}

applyFilters();
