import PropTypes from 'prop-types';

const {
    i18n: { __ },
    components: { SelectControl }
} = wp;

const FontWeightsSelector = ({
    onWeightChoice,
    selected,
    fonts,
    font,
}) => {
    const { Google = [] } = fonts || [];

    const getWeightsList = () => {
        let fontWeigths = Google.filter(item => item.family.toLowerCase() === font.toLowerCase());
        if (fontWeigths.length) fontWeigths = fontWeigths.pop()?.variants;
        return fontWeigths;
    };

    if (
        getWeightsList().length === 0 ||
        getWeightsList().length === 1 && getWeightsList().pop() === 'regular'
    ) return null;

    return (
        <div className="wca-customizer-control__font-weights">
            <hr />
            <SelectControl
                multiple={true}
                label={__('Select Font Weights:')}
                value={selected && selected.length ? selected : ['regular']}
                onChange={(values) => onWeightChoice(values)}
                options={getWeightsList().map(value => {
                    let label = value === 'regular' ? '400' : value;
                    label = value === 'italic' ? '400italic' : label;

                    return ({ value, label });
                })}
            />
        </div>
    );
};

FontWeightsSelector.propTypes = {
    onWeightChoice: PropTypes.func.isRequired,
    selected: PropTypes.array.isRequired,
    fonts: PropTypes.array.isRequired,
    font: PropTypes.string.isRequired,
};

export default FontWeightsSelector;
