import PropTypes from 'prop-types';
import ColorControl from './ColorControl';

const { useState, useEffect } = wp.element;

const ColorComponent = ({ control }) => {
    const [value, setValue] = useState(control.setting.get());

    const { params } = control;

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
            {params?.label && (<span className="customize-control-title">{params.label}</span>)}
            {params?.description && (<span className="customize-control-description">{params.description}</span>)}
            <div className="wca-customizer-control wca-customizer-control--color">
                <ColorControl
                    label={false}
                    selectedColor={value}
                    defaultValue={params.default}
                    alphaDisabled={params.disableAlpha}
                    onChange={onChange}
                />
            </div>
        </>
    );
};

ColorComponent.propTypes = {
    control: PropTypes.object.isRequired,
};

export default ColorComponent;
