import PropTypes from 'prop-types';
import FontFamilySelector from './FontFamilySelector';
import FontWeightsSelector from './FontWeightsSelector';

const { useState } = wp.element;

const TypefaceComponent = ({ control }) => {
	const { setting, params } = control;

	const [fontFamily, setFontFamily] = useState(setting.get().family);
	const [fontWeights, setFontWeights] = useState(setting.get().variants);
	const updateControl = (value) => setting.set({ ...setting.get(), ...value });
	
	const defaultParams = {
		inheritDefault: false,
	};

	const controlParams = params.inputAttrs ? {
		...defaultParams,
		...JSON.parse(params.inputAttrs),
	} : defaultParams;

	const onChoseFont = (fontSource, family) => {
		setFontFamily(family);
		setFontWeights([400]);
		updateControl({ family, variants: [] });
		// Update Live Preview
		wp.customize.previewer.send('font-selection', {
			controlId: control.id,
			value: setting.get(),
			source: fontSource,
			type: '\\WeCodeArt\\Customizer\\Controls\\Fonts',
			inherit: controlParams.inheritDefault,
		});
	};

	const onChoseWeights = (variants) => {
		setFontWeights(variants);
		updateControl({ variants });
	};

	return (
		<>
			{params?.label && (<span className="customize-control-title">{params.label}</span>)}
			{params?.description && (<span className="customize-control-description">{params.description}</span>)}
			<div className="wca-customizer-control wca-customizer-control--typeface">
				<FontFamilySelector
					selected={fontFamily}
					onFontChoice={onChoseFont}
					inheritDefault={controlParams.inheritDefault}
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
