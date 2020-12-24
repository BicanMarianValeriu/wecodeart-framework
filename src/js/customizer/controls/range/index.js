import PropTypes from 'prop-types';

const {
	components: { RangeControl },
	element: { useState, useEffect },
} = wp;

const RangeComponent = ({ control }) => {
	useEffect(() => {
		document.addEventListener('wecodeart-changed-customizer-value', (e) => {
			if (!e.detail) return false;
			if (e.detail.id !== control.id) return false;
			updateValues(e.detail.value);
		});
	}, []);

	const { params } = control;
	const [value, setValue] = useState(control.setting.get());
	const defaults = { min: 0, max: 100, defaultVal: 15, step: 1 };

	const controlProps = { ...defaults, ...(params.inputAttrs || {}) };
	const { defaultVal, min, max, step } = controlProps;

	const updateValues = (newVal) => {
		setValue(newVal);
		control.setting.set(newVal);
	};

	return (
		<>
			{params?.label && (<span className="customize-control-title">{params.label}</span>)}
            {params?.description && (<span className="customize-control-description">{params.description}</span>)}
			<RangeControl
				className="wca-customizer-control wca-customizer-control--range"
				resetFallbackValue={defaultVal === 0 ? 0 : defaultVal || ''}
				value={parseInt(value) === 0 ? 0 : value || ''}
				min={min < 0 ? min : 0}
				max={max || 100}
				step={step || 1}
				allowReset
				onChange={updateValues}
			/>
		</>
	);
};

RangeComponent.propTypes = {
	control: PropTypes.object.isRequired,
};

export default RangeComponent;
