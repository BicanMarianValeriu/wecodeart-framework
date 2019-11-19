/**
 * WordPress Dependencies
 */
const { __ } = wp.i18n;
const { compose } = wp.compose;
const { withSelect } = wp.data;
const { Fragment } = wp.element;
const { InspectorControls, FontSizePicker, withFontSizes, withColors, PanelColorSettings } = wp.blockEditor || wp.editor;
const { PanelBody, withFallbackStyles } = wp.components;

const applyFallbackStyles = withFallbackStyles((node, ownProps) => {
	const { fontSize, customFontSize, textColor } = ownProps.attributes;
	const editableNode = node.querySelector('[contenteditable="true"]');
	const computedStyles = editableNode ? getComputedStyle(editableNode) : null;
	return {
		fallbackTextColor: textColor || !computedStyles ? undefined : computedStyles.color,
		fallbackFontSize: fontSize || customFontSize || !computedStyles ? undefined : parseInt(computedStyles.fontSize) || undefined,
	};
});

const WithTextControls = (props) => {
	const {
		fallbackFontSize,
		fontSize,
		setFontSize,
		textColor,
		setTextColor,
	} = props;

	return (
		<Fragment>
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
		</Fragment>
	);
};

export default compose([
	withSelect((select) => {
		return {
			propDemo: true
		};
	}),
	withColors({ textColor: 'color' }),
	withFontSizes('fontSize'),
	applyFallbackStyles,
])(WithTextControls);
