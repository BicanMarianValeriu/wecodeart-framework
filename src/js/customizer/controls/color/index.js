import PropTypes from 'prop-types';
import ColorControl from './../../common/Color';

const { useState, useEffect } = wp.element;
const { __ } = wp.i18n;

const ColorComponent = ({ control }) => {
    const [value, setValue] = useState(control.setting.get());

    const { params: { label, description, default: defaultValue, inputAttrs: { alphaDisabled }, palette } } = control;

    const onChange = (newVal = '') => {
        setValue(newVal);
        control.setting.set(newVal);
    };

    useEffect(() => {
        document.addEventListener('wecodeart-changed-customizer-value', (e) => {
            if (!e.detail) return false;
            if (e.detail.id !== control.id) return false;
            onChange(e.detail.value);
        });
    }, []);

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
