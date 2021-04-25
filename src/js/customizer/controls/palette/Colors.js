import { rotateLeft } from '@wordpress/icons';
import AccordionControl from '../../common/Accordion';
import ColorControl from '../../common/Color';

const { debounce } = lodash;
const { colors: globalPaletteColors } = wecodeartPaletteControl;

const {
	components: { Button },
	element: { Fragment },
	i18n: { __ }
} = wp;

const PaletteColors = ({ values, defaults, save }) => {
	const { palettes, active = 'base' } = values;
	const palette = palettes[active];
	const { colors, allowDeletion } = palette;

	const defaultColors = defaults.palettes[active] ? { ...defaults.palettes[active].colors, } : {};

	const updateColorInPalette = (colorSlug, val) => {
		const nextValues = { ...values };
		nextValues.palettes[active].colors[colorSlug] = val;
		save(nextValues);
	};

	const resetPalette = () => {
		const nextValues = { ...values };
		nextValues.palettes[active].colors = defaultColors;
		save(nextValues);
	};

	const paletteHasDefaults = Object.keys(defaultColors).filter((k) => defaultColors[k] !== colors[k]).length < 1;

	return (
		<AccordionControl label={__('Palette Colors', 'wecodeart')}>
			<div className="wecodeart-palette-colors">
				{globalPaletteColors.map((group, index) => {
					return (
						<Fragment key={index}>
							{index > 0 && <hr />}
							{Object.keys(group).map((slug) => {
								return (
									<ColorControl
										key={slug}
										label={group[slug]}
										selectedColor={colors[slug]}
										defaultValue={defaults.palettes[active] ? defaults.palettes[active].colors[slug] : '#FFFFFF'}
										onChange={debounce((value) => updateColorInPalette(slug, value), 100)}
									/>
								);
							})}
						</Fragment>
					);
				})}
				{!allowDeletion && (
					<>
						<hr />
						<Button isLink className="wecodeart-palette-colors__reset" onClick={resetPalette} disabled={paletteHasDefaults} icon={rotateLeft}>
							{__('Reset all to default', 'wecodeart')}
						</Button>
					</>
				)}
			</div>
		</AccordionControl>
	);
};

export default PaletteColors;