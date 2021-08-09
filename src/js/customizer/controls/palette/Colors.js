import { rotateLeft, update } from '@wordpress/icons';
import AccordionControl from '../../common/Accordion';
import ColorControl from '../../common/Color';

const { debounce } = lodash;

const {
	element: { useState },
	components: { Button, ButtonGroup },
	i18n: { __ },
} = wp;

const Colors = ({ value, choices, setChoices, save, palette, paletteTheme, inputAttrs }) => {
	const { disableGlobal, readOnly } = inputAttrs;
	const activePalette = choices.filter(({ slug }) => slug === value).pop();
	const { colors } = activePalette;
	const [hasUpdates, setHasUpdates] = useState(false);

	const updatePalette = () => {
		let newColors = [];
		for (let i in palette) {
			let updated = palette[i];
			updated.color = colors[palette[i].slug];
			newColors[i] = updated;
		}

		const formData = new FormData();
		formData.append('action', 'wca_update_colors');
		formData.append('palette', value);
		formData.append('colors', JSON.stringify(newColors));

		return fetch(wp.ajax.settings.url, {
			method: 'POST',
			body: formData
		}).then(() => {
			save(value);
			setHasUpdates(false);
		}).catch((err) => console.log(JSON.stringify(err)));
	};

	const updateColor = (_slug, val) => {
		let index = choices.findIndex(({ slug }) => slug === value);
		choices[index].colors[_slug] = val;
		setChoices([...choices]);
		setHasUpdates(true);

		save(value);
	};

	const resetChanges = () => {
		const index = choices.findIndex(({ slug }) => slug === value);
		let _colors = [];
		for (let i in paletteTheme) _colors[paletteTheme[i].slug] = paletteTheme[i].color;
		choices[index].colors = _colors;
		setChoices([...choices]);
		setHasUpdates(true);

		save(value);
	};

	const hasDefaults = paletteTheme.filter(({ slug, color }) => color !== colors[slug]).length < 1;

	return (
		<AccordionControl label={__('Palette Colors', 'wecodeart')}>
			<div className="wecodeart-palette-colors">
				{palette.map(({ slug, name, color }) => {
					return (
						<ColorControl
							key={slug}
							label={name}
							selectedColor={colors[slug]}
							defaultValue={color}
							onChange={debounce((value) => updateColor(slug, value), 100)}
							palette={palette}
							disableGlobal={disableGlobal}
							readOnly={readOnly}
						/>
					);
				})}
				{!readOnly && (
					<>
						<hr />
						<ButtonGroup>
							<Button className="wecodeart-palette-colors__reset" onClick={updatePalette} disabled={!hasUpdates} icon={update}>
								{__('Update Palette', 'wecodeart')}
							</Button>
							<Button className="wecodeart-palette-colors__reset" onClick={resetChanges} disabled={hasDefaults} icon={rotateLeft}>
								{__('Theme Default', 'wecodeart')}
							</Button>
						</ButtonGroup>
					</>
				)}
			</div>
		</AccordionControl>
	);
};

export default Colors;