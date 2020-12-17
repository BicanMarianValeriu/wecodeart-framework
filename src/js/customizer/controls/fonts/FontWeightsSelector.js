import PropTypes from 'prop-types';

const {
    i18n: { __ },
    components: { SelectControl }
} = wp;

const FontWeightsSelector = ({
    font,
    selected,
    onWeightChoice,
}) => {
    const { fonts: { Google } } = wecodeartFontsControl;

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
        <div className="wecodeart-typeface-control__font-weights">
            <hr />
            <SelectControl
                multiple={true}
                label={__('Select Font Weights:')}
                value={selected && selected.length ? selected : ['regular']}
                onChange={(values) => onWeightChoice(values)}
                options={getWeightsList().map(i => {
                    let value = i === 'regular' ? '400' : i;
                    value = i === 'italic' ? '400italic' : value;

                    let label = i === 'regular' ? '400' : i;
                    label = i === 'italic' ? '400italic' : label;

                    return ({ value, label });
                })}
            />
        </div>
    );
};

FontWeightsSelector.propTypes = {
    onWeightChoice: PropTypes.func.isRequired,
    font: PropTypes.string.isRequired,
    selected: PropTypes.array.isRequired,
};

export default FontWeightsSelector;
