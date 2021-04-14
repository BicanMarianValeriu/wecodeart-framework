import { plusCircleFilled } from '@wordpress/icons';

const { camelCase } = lodash;

const {
	components: { Button },
	element: { useState },
	i18n: { __ }
} = wp;

const PaletteForm = ({ values, save, disabled }) => {
	const { palettes } = values;
	const [isAdding, setIsAdding] = useState(false);
	const [newPaletteName, setNewPaletteName] = useState('');
	const [paletteFrom, setPaletteFrom] = useState('base');

	const toggleAdding = () => {
		setIsAdding(!isAdding);
		setNewPaletteName('');
	};

	const setBasePalette = (e) => {
		setPaletteFrom(e.target.value);
	};

	const paletteExists = () => Object.keys(palettes).filter((i) => camelCase(newPaletteName) === i).length > 0;

	const addNewPalette = (e) => {
		e.preventDefault();
		const nextValue = { ...values };
		const paletteSlug = camelCase(newPaletteName);
		nextValue.palettes[paletteSlug] = {
			name: newPaletteName,
			allowDeletion: true,
			colors: { ...nextValue.palettes[paletteFrom].colors },
		};
		nextValue.active = paletteSlug;
		save(nextValue);
		toggleAdding();
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
				{Object.keys(palettes).map((k, i) => (<option key={i} value={k}>{palettes[k].name}</option>))}
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