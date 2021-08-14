import { update } from '@wordpress/icons';
import AccordionControl from '../../common/Accordion';
import ColorControl from '../../common/Color';

const { debounce, capitalize } = lodash;

const {
	element: { useState },
	components: { Button },
	i18n: { __ },
} = wp;

const Colors = ({ value, choices, setChoices, palette, inputAttrs }) => {
	const { allowGlobal = false, readOnly } = inputAttrs;
	const { colors = {} } = choices.find(({ slug }) => slug === value);
	const [hasUpdates, setHasUpdates] = useState(false);

	const updatePalette = () => {
		const formData = new FormData();
		formData.append('action', 'wca_update_palette');
		formData.append('type', 'update');
		formData.append('value', value);
		formData.append('palette', JSON.stringify(choices));

		return fetch(wp.ajax.settings.url, {
			method: 'POST',
			body: formData
		}).then(() => {
			setHasUpdates(false);
		}).catch((err) => console.log(JSON.stringify(err)));
	};

	const updateColor = (slug, val) => {
		const index = [...choices].findIndex(({ slug }) => slug === value);
		choices[index].colors[slug] = val;
		setChoices([...choices]);
		setHasUpdates(true);
	};

	return (
		<AccordionControl label={__('Palette Colors', 'wecodeart')}>
			<div className="wecodeart-palette-colors">
				{Object.keys(colors).map(key => {
					return (
						<ColorControl
							key={key}
							label={capitalize(key)}
							selectedColor={colors[key]}
							defaultValue={'#ffffff'}
							onChange={debounce((value) => updateColor(key, value), 100)}
							palette={palette}
							allowGlobal={allowGlobal}
							readOnly={readOnly}
						/>
					);
				})}
				{!readOnly && (
					<>
						<hr />
						<Button className="wecodeart-palette-colors__reset" onClick={updatePalette} disabled={!hasUpdates} icon={update}>
							{__('Update palette and save', 'wecodeart')}
						</Button>
					</>
				)}
			</div>
		</AccordionControl>
	);
};

export default Colors;