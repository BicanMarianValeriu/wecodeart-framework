import { plusCircleFilled } from '@wordpress/icons';

const { camelCase } = lodash;

const {
	components: { Button },
	element: { useState },
	i18n: { __ }
} = wp;

const PaletteForm = ({ value, choices, setChoices, save, disabled }) => {
	const [isAdding, setIsAdding] = useState(false);
	const [newPaletteName, setNewPaletteName] = useState('');
	const [paletteFrom, setPaletteFrom] = useState('base');

	const toggleAdding = () => {
		setIsAdding(!isAdding);
		setNewPaletteName('');
	};

	const setBasePalette = ({ target: { value } }) => setPaletteFrom(value);

	const paletteExists = () => choices.filter(({ slug }) => camelCase(newPaletteName) === slug).length > 0;

	const addNewPalette = (e) => {
		e.preventDefault();
		const nextValue = value;
		const palette = {
			label: newPaletteName,
			slug: camelCase(newPaletteName),
			allowDeletion: true,
			colors: choices.filter(({ slug }) => slug === paletteFrom).pop().colors,
		};

		setChoices([...choices, palette]);
		save(nextValue);
		toggleAdding();

		const formData = new FormData();
		formData.append('action', 'wca_update_choices');
		formData.append('type', 'add');
		formData.append('palette', JSON.stringify(palette));

		return fetch(wp.ajax.settings.url, {
			method: 'POST',
			body: formData
		}).then((d) => console.log(d)).catch((err) => console.log(JSON.stringify(err)));
	};

	if (!isAdding) {
		return (
			<div className="wecodeart-palette-add">
				<Button
					disabled={disabled}
					style={{ alignSelf: 'flex-start' }}
					isSmall
					isSecondary
					icon={plusCircleFilled}
					iconSize={16}
					onClick={toggleAdding}
				>
					{__('Add Custom Palette')}
				</Button>
			</div>
		);
	}

	return (
		<div className="wecodeart-palette-add">
			<input
				type="text"
				placeholder={__('Palette Title', 'wecodeart')}
				onChange={(e) => setNewPaletteName(e.target.value)}
			/>
			<span className="customize-control-title">
				{__('Extend from:', 'wecodeart')}
			</span>
			<select value={paletteFrom} onChange={setBasePalette} onBlur={setBasePalette}>
				{choices.map(({ slug, label }) => (<option key={slug} value={slug}>{label}</option>))}
			</select>
			<div className="actions">
				<Button
					isSmall
					isSecondary
					isDestructive
					onClick={toggleAdding}
				>
					{__('Cancel', 'wecodeart')}
				</Button>
				<Button
					isSmall
					icon={plusCircleFilled}
					iconSize={16}
					isPrimary
					onClick={addNewPalette}
					disabled={paletteExists() || newPaletteName.length < 1}
				>
					{__('Add', 'wecodeart')}
				</Button>
			</div>
		</div>
	);
};

export default PaletteForm;