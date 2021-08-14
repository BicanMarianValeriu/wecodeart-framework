import Selector from './Selector';
import Colors from './Colors';
import Form from './Form';

const { useState } = wp.element;

const Component = ({ control: { setting, params } }) => {
	const { label, palette, choices: values, inputAttrs = {} } = params;
	const { allowAdd } = inputAttrs;

	const [value, setValue] = useState(setting.get());
	const [choices, setChoices] = useState(values);

	const save = (nextValue) => {
		// State
		setValue(nextValue);
		// Value
		setting.set(nextValue);
	};

	const objectProps = { value, choices, setChoices, save, palette, inputAttrs };

	return (
		<>
			{label && <span className="customize-control-title">{label}</span>}
			<Selector {...objectProps} />
			{allowAdd && <Form {...objectProps} disabled={choices.length > 4} />}
			<Colors {...objectProps} />
		</>
	);
};

export default Component;
