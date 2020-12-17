import PropTypes from 'prop-types';
import FontFamilySelector from './FontFamilySelector';
import FontWeightsSelector from './FontWeightsSelector';

const { useState } = wp.element;

const TypefaceComponent = ({ control }) => {
	const { setting, params } = control;

	const [fontFamily, setFontFamily] = useState(setting.get().fontFamily);
	const [fontWeights, setFontWeights] = useState(setting.get().fontWeights);
	const updateControl = (value) => setting.set({ ...setting.get(), ...value });
	
	const defaultParams = {
		default_is_inherit: false,
	};

	const controlParams = params.input_attrs ? {
		...defaultParams,
		...JSON.parse(params.input_attrs),
	} : defaultParams;

	const onChoseFont = (fontSource, font) => {
		setFontFamily(font);
		setFontWeights([400]);
		updateControl({ fontFamily: font, fontWeights: [] });
		// Update Live Preview
		wp.customize.previewer.send('font-selection', {
			controlId: control.id,
			value: setting.get(),
			source: fontSource,
			type: '\\WeCodeArt\\Customizer\\Controls\\Fonts',
			inherit: controlParams.default_is_inherit,
		});
	};

	const onChoseWeights = (weights) => {
		setFontWeights(weights);
		updateControl({ fontWeights: weights });
	};

	return (
		<>
			{params?.label && (<span className="customize-control-title">{params.label}</span>)}
			{params?.description && (<span className="customize-control-description">{params.description}</span>)}
			<div className="wecodeart-typeface-control">
				<FontFamilySelector
					selected={fontFamily}
					onFontChoice={onChoseFont}
					inheritDefault={controlParams.default_is_inherit}
					systemFonts={controlParams.system}
				/>
				{fontFamily && (
					<FontWeightsSelector
						font={fontFamily}
						selected={fontWeights}
						onWeightChoice={onChoseWeights}
					/>
				)}
			</div>
		</>
	);
};

TypefaceComponent.propTypes = {
	control: PropTypes.object.isRequired,
};

export default TypefaceComponent;
