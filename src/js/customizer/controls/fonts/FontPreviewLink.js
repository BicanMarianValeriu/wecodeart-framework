import PropTypes from 'prop-types';
import VisibilitySensor from 'react-visibility-sensor';
const { useState } = wp.element;

const FontPreviewLink = ({ fontFace, onClick, label, delayLoad }) => {
    const [rendered, setRendered] = useState(false);

    return (
        <a onClick={(e) => {
            e.stopPropagation();
            onClick();
        }} >
            <span className="wca-font-family">{label || fontFace}</span>
            <VisibilitySensor
                onChange={(isVisible) => {
                    if (isVisible) {
                        setRendered(true);
                    }
                }}
            >
                {rendered || delayLoad === false ?
                    (<span className="wca-font-preview" style={{ fontFamily: fontFace + ', sans-serif' }}>Abc</span>) :
                    (<span className="wca-font-preview ">...</span>)}
            </VisibilitySensor>
        </a>
    );
};

FontPreviewLink.propTypes = {
    fontFace: PropTypes.string.isRequired,
    delayLoad: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
    label: PropTypes.string,
};

export default FontPreviewLink;
