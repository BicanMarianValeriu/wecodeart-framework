/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { Fragment, useCallback, useMemo, useState } = wp.element;
const { useSelect } = wp.data;
const { RichTextToolbarButton } = wp.blockEditor;
const { removeFormat } = wp.richText;
const { Icon } = wp.components;

/**
 * External dependencies
 */
const { get, isEmpty } = lodash;

/**
 * Internal dependencies
 */
import { default as InlineColorUI, getActiveColor } from './inline';
import icons from './icons';

const name = 'wca/background';
const title = __('Highlight Color', 'wecodeart');
const EMPTY_ARRAY = [];

function TextBGColorEdit({ value, onChange, isActive, activeAttributes }) {
	const { colors, disableCustomColors } = useSelect((select) => {
		const blockEditorSelect = select('core/block-editor');
		let settings;
		if (blockEditorSelect && blockEditorSelect.getSettings) {
			settings = blockEditorSelect.getSettings();
		} else {
			settings = {};
		}
		return {
			colors: get(settings, ['colors'], EMPTY_ARRAY),
			disableCustomColors: settings.disableCustomColors,
		};
	});

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

	const hasColorsToChoose = !isEmpty(colors) || disableCustomColors !== true;

	if (!hasColorsToChoose && !isActive) {
		return null;
	}

	return (
		<Fragment>
			<RichTextToolbarButton
				key={isActive ? 'color' : 'color-not-active'}
				className="format-library-color-button"
				name={isActive ? 'color' : undefined}
				isActive={isActive}
				icon={
					<Fragment>
						<Icon icon={() => icons.highlighter} />
						{isActive && <span className="format-library-color-button__indicator" style={colorIndicatorStyle} />}
					</Fragment>
				}
				title={title}
				// If has no colors to choose but a color is active remove the color onClick
				onClick={hasColorsToChoose ? enableIsAddingColor : () => onChange(removeFormat(value, name))}
			/>
			{isAddingColor && (
				<InlineColorUI
					name={name}
					addingColor={isAddingColor}
					onClose={disableIsAddingColor}
					isActive={isActive}
					activeAttributes={activeAttributes}
					value={value}
					onChange={onChange}
				/>
			)}
		</Fragment>
	);
};

export default TextBGColorEdit;