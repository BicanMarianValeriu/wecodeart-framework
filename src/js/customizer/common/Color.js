import PropTypes from 'prop-types';
import classnames from 'classnames';
import GlobalColorsPicker from './GlobalColors';

const {
	i18n: { __ },
	components: { ColorPicker, Button, Dropdown },
} = wp;

const ColorControl = ({
	label,
	selectedColor,
	onChange,
	defaultValue,
	disableGlobal,
}) => {
	let toggle = null;

	const handleChange = (value) => {
		const { r, g, b, a } = value.rgb;
		if (a < 1) {
			onChange(`rgba(${r}, ${g}, ${b}, ${a})`);
			return false;
		}
		onChange(value.hex);
	};

	const handleClear = () => {
		onChange(defaultValue || '');
		toggle();
	};

	return (
		<div className={classnames([
			'wca-color-component',
			{ 'wca-color-component--allows-global': !disableGlobal },
		])}>
			{label && (<span className="wca-color-component__label"><strong>{label}:</strong></span>)}
			{!disableGlobal && (<GlobalColorsPicker activeColor={selectedColor} onChange={onChange} />)}
			<Dropdown
				position="left"
				renderToggle={({ isOpen, onToggle }) => {
					toggle = onToggle;
					return (
						<Button isSecondary onClick={onToggle} aria-expanded={isOpen}>
							<span className="color" style={{ backgroundColor: selectedColor }} />
							<span className="gradient" />
						</Button>
					);
				}}
				renderContent={() => (
					<>
						<ColorPicker color={selectedColor} onChangeComplete={handleChange} />
						{selectedColor && (
							<Button isPrimary className="clear" onClick={handleClear}>{__('Clear', 'wecodeart')}</Button>
						)}
					</>
				)}
			/>
		</div>
	);
};

ColorControl.defaultProps = {
	disableGlobal: false,
};

ColorControl.propTypes = {
	label: PropTypes.string,
	onChange: PropTypes.func.isRequired,
	selectedColor: PropTypes.string,
	defaultValue: PropTypes.string,
	disableGlobal: PropTypes.bool,
};

export default ColorControl;