/**
 * Other Deps
 */
const { get } = lodash;

/**
 * WordPress dependencies
 */
const {
	data: { useSelect },
	element: { useCallback, useMemo },
	components: { withSpokenMessages },
	richText: {
		applyFormat,
		removeFormat,
		getActiveFormat,
		useAnchorRef,
	},
	blockEditor: {
		ColorPalette,
		URLPopover,
		getColorClassName,
		getColorObjectByColorValue,
		getColorObjectByAttributeValues,
		store: blockEditorStore,
	},
} = wp;

/**
 * Internal Deps
 */
import { highlight as settings } from './../index';

export function getActiveColor(formatName, formatValue, colors) {
	const activeColorFormat = getActiveFormat(formatValue, formatName);
	if (!activeColorFormat) {
		return;
	}
	const styleColor = activeColorFormat.attributes.style;
	if (styleColor) {
		return styleColor.replace(new RegExp(`^background-color:\\s*`), '');
	}
	const currentClass = activeColorFormat.attributes.class;
	if (currentClass) {
		const colorSlug = currentClass.replace(/.*has-(.*?)-background-color.*/, '$1');
		return getColorObjectByAttributeValues(colors, colorSlug).color;
	}
}

const ColorPicker = ({ name, value, onChange }) => {
	const colors = useSelect((select) => {
		const { getSettings } = select(blockEditorStore);
		return get(getSettings(), ['colors'], []);
	});

	const onColorChange = useCallback((color) => {
		if (color) {
			const colorObject = getColorObjectByColorValue(colors, color);
			onChange(
				applyFormat(value, {
					type: name, attributes: colorObject
						? { class: getColorClassName('background-color', colorObject.slug) }
						: { style: `background-color:${color}` },
				})
			);
		} else {
			onChange(removeFormat(value, name));
		}
	}, [colors, onChange]);

	const activeColor = useMemo(() => getActiveColor(name, value, colors), [name, value, colors]);

	return <ColorPalette value={activeColor} onChange={onColorChange} />;
};

const InlineColorUI = ({
	name,
	value,
	onChange,
	onClose,
	contentRef,
}) => {
	const anchorRef = useAnchorRef({ ref: contentRef, value, settings });

	return (
		<URLPopover
			value={value}
			onClose={onClose}
			className="components-inline-color-popover"
			anchorRef={anchorRef}
		>
			<ColorPicker name={name} value={value} onChange={onChange} />
		</URLPopover>
	);
};

export default withSpokenMessages(InlineColorUI);