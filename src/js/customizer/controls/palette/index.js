import Selector from './Selector';
import Colors from './Colors';
import Form from './Form';

const { useState } = wp.element;

const Component = ({ control }) => {
	const { label, default: defaultValues } = control.params;

	const [values, setValues] = useState({ ...control.setting.get() });

	const save = (nextValue) => {
		// State
		setValues(nextValue);

		// Customize
		if (nextValue.flag) {
			delete nextValue.flag;
		} else {
			nextValue.flag = true;
		}

		// Save
		control.setting.set(nextValue);
	};

	return (
		<>
			{label && <span className="customize-control-title">{label}</span>}
			<Selector values={values} save={save} />
			<Form values={values} save={save} disabled={Object.keys(values.palettes).length > 4} />
			<Colors values={values} save={save} defaults={defaultValues} />
		</>
	);
};

export default Component;
