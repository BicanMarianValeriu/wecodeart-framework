import PropTypes from 'prop-types';
import ColorControl from './../../common/Color';

const {
    i18n: { __ },
    element: { useState }
} = wp;

const ColorComponent = ({ control }) => {
    const [value, setValue] = useState(control.setting.get());

    const { params: { label, description, default: defaultValue, inputAttrs: { alphaDisabled = false }, palette } } = control;

    const onChange = (newVal = '') => {
        setValue(newVal);
        control.setting.set(newVal);
    };

    return (
        <>
            {label && (<span className="customize-control-title">{label}</span>)}
            {description && (<span className="customize-control-description">{description}</span>)}
            <div className="wca-customizer-control wca-customizer-control--color">
                <ColorControl
                    label={__('Color', 'wecodeart')}
                    selectedColor={value}
                    defaultValue={defaultValue}
                    alphaDisabled={alphaDisabled}
                    onChange={onChange}
                    palette={palette}
                />
            </div>
        </>
    );
};

ColorComponent.propTypes = {
    control: PropTypes.object.isRequired,
};

export default ColorComponent;
