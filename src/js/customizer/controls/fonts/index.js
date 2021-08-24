import PropTypes from 'prop-types';
import FontFamilySelector from './FontFamilySelector';
import FontWeightsSelector from './FontWeightsSelector';

const { useState } = wp.element;

const TypefaceComponent = ({ control }) => {
	const { setting, params: { label, description, fonts = [], inputAttrs = false } } = control;

	const [fontFamily, setFontFamily] = useState(setting.get()['font-family']);
	const [fontWeights, setFontWeights] = useState(setting.get()['font-weight']);
	const updateControl = (value) => setting.set({ ...setting.get(), ...value });

	const defaultParams = {
		inheritDefault: false,
		systemOnly: false,
		fonts,
	};

	const controlParams = inputAttrs ? {
		...defaultParams,
		...JSON.parse(inputAttrs),
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
			{label && (<span className="customize-control-title">{label}</span>)}
			{description && (<span className="customize-control-description">{description}</span>)}
			<div className="wca-customizer-control wca-customizer-control--typeface">
				<FontFamilySelector
					fonts={controlParams.fonts}
					selected={fontFamily}
					onFontChoice={onChoseFont}
					inheritDefault={controlParams.inheritDefault}
					systemOnly={controlParams.systemOnly}
				/>
				{fontFamily && (
					<FontWeightsSelector
						fonts={controlParams.fonts}
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
