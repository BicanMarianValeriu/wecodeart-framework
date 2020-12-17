/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { useCallback, useMemo, useState } = wp.element;
const { RichTextToolbarButton, __experimentalUseEditorFeature: useEditorFeature } = wp.blockEditor;
const { removeFormat } = wp.richText;
const { Icon } = wp.components;

/**
 * External dependencies
 */
const { isEmpty } = lodash;

/**
 * Internal dependencies
 */
import { default as InlineColorUI, getActiveColor } from './inline';
import { Format as SVGIcon } from './icons';

const name = 'wca/background';
const title = __('Highlight Color', 'wecodeart');
const EMPTY_ARRAY = [];

export default function Edit({ value, onChange, isActive, activeAttributes, contentRef }) {
	const allowCustomControl = useEditorFeature('color.custom');
	const colors = useEditorFeature('color.palette') || EMPTY_ARRAY;
	const [isAddingColor, setIsAddingColor] = useState(false);

	const enableIsAddingColor = useCallback(() => setIsAddingColor(true), [setIsAddingColor]);

	const disableIsAddingColor = useCallback(() => setIsAddingColor(false), [setIsAddingColor]);

	const colorIndicatorStyle = useMemo(() => {
		const activeColor = getActiveColor(name, value, colors);
		if (!activeColor) {
			return undefined;
		}
		return {
			backgroundColor: activeColor,
		};
	}, [value, colors]);

	const hasColorsToChoose = !isEmpty(colors) || !allowCustomControl;

	if (!hasColorsToChoose && !isActive) {
		return null;
	}

	return (
		<>
			<RichTextToolbarButton
				key={isActive ? 'text-color' : 'text-color-not-active'}
				className="format-library-text-color-button"
				name={isActive ? 'text-color' : undefined}
				icon={
					<>
						<Icon icon={SVGIcon} />
						{isActive && <span className="format-library-text-color-button__indicator" style={colorIndicatorStyle} />}
					</>
				}
				title={title}
				// If has no colors to choose but a color is active remove the color onClick
				onClick={hasColorsToChoose ? enableIsAddingColor : () => onChange(removeFormat(value, name))}
			/>
			{isAddingColor && (
				<InlineColorUI
					name={name}
					onClose={disableIsAddingColor}
					activeAttributes={activeAttributes}
					value={value}
					onChange={onChange}
					contentRef={contentRef}
				/>
			)}
		</>
	);
}; 