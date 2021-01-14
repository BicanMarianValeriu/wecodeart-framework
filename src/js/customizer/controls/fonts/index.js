import PropTypes from 'prop-types';
import FontFamilySelector from './FontFamilySelector';
import FontWeightsSelector from './FontWeightsSelector';

const { useState } = wp.element;

const TypefaceComponent = ({ control }) => {
	const { setting, params } = control;

	const [fontFamily, setFontFamily] = useState(setting.get()['font-family']);
	const [fontWeights, setFontWeights] = useState(setting.get()['font-weight']);
	const updateControl = (value) => setting.set({ ...setting.get(), ...value });

	const defaultParams = {
		inheritDefault: false,
	};

	const controlParams = params.inputAttrs ? {
		...defaultParams,
		...JSON.parse(params.inputAttrs),
	} : defaultParams;

	const onChoseFont = (fontFamily) => {
		setFontFamily(fontFamily);
		setFontWeights([400]);
		updateControl({ 'font-family': fontFamily, 'font-weight': [] });
	};

	const onChoseWeights = (fontWeights) => {
		setFontWeights(fontWeights);
		updateControl({ 'font-weight': fontWeights });
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
