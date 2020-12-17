import FontPreviewLink from './FontPreviewLink';
import VisibilitySensor from 'react-visibility-sensor';
import PropTypes from 'prop-types';

const {
    i18n: { __ },
    element: { useState },
    components: { Popover, Button, TextControl, Icon },
} = wp;

const FontFamilySelector = ({
    selected,
    onFontChoice,
    inheritDefault,
    systemFonts,
}) => {
    const { fonts } = wecodeartFontsControl;
    const [visible, setVisible] = useState(false);
    const [search, setSearch] = useState('');
    const [loadUntil, setLoadUntil] = useState(20);
    const [delay, setDelay] = useState(true);

    const getFonts = () => {
        const result = {};

        if (!search) {
            return fonts;
        }

        Object.keys(fonts).map((key) => {
            result[key] = fonts[key].filter((v) => v.family.toLowerCase().includes(search.toLowerCase()));
        });

        return result;
    };

    const getFontList = () => {
        const groups = getFonts();
        const options = [];

        if (!systemFonts) {
            options.push(
                <li key="default" className={'default-value ' + !selected ? 'selected' : ''}>
                    <FontPreviewLink
                        fontFace="default"
                        delayLoad={false}
                        onClick={() => {
                            setVisible(false);
                            setSearch('');
                            onFontChoice('system', false);
                        }}
                        label={inheritDefault ? __('Inherit', 'wecodeart') : __('Default', 'wecodeart')}
                    />
                </li>
            );
        }

        Object.keys(groups).map((key) => {
            if (systemFonts && key !== 'System') {
                return null;
            }

            groups[key].length > 0 && options.push(<li className="font-group-header" key={key}>{key}</li>);

            groups[key].map((font, index) => {
                if (index < loadUntil) {
                    const { family } = font;
                    options.push(
                        <li key={family} className={family === selected ? 'selected' : ''}>
                            <FontPreviewLink
                                delayLoad={delay}
                                label={family}
                                fontFace={family}
                                onClick={() => {
                                    onFontChoice(key, family);
                                    setVisible(false);
                                    setSearch('');
                                }}
                            />
                        </li>
                    );
                }
            });
        });

        if (loadUntil < options.length) {
            options.push(
                <li className="load-more" key="load-more">
                    <VisibilitySensor
                        onChange={(isVisible) => {
                            if (isVisible) {
                                setLoadUntil(loadUntil + 20);
                                setDelay(false);
                            }
                        }}
                    >
                        <Icon icon="image-filter" />
                    </VisibilitySensor>
                </li>
            );
        }

        return (
            <>
                <div className="popover-content">
                    <div className="popover-header">
                        <div className="search">
                            <TextControl
                                placeholder={__('Search', 'wecodeart') + '...'}
                                value={search}
                                onChange={(e) => {
                                    setSearch(e);
                                    setLoadUntil(20);
                                }}
                            />
                            <a
                                className="close-font-selector"
                                onClick={(e) => {
                                    e.preventDefault();
                                    e.stopPropagation();
                                    setVisible(false);
                                    setSearch('');
                                }}
                            >
                                <Icon icon="no" />
                            </a>
                        </div>
                    </div>
                    <ul className="wecodeart-fonts-list">
                        {options.length ? (options) : (
                            <li className="no-result" key="no-results">{__('No results.', 'wecodeart')}</li>
                        )}
                    </ul>
                </div>
            </>
        );
    };

    // eslint-disable-next-line max-len
    const defaultFontface = 'system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"';

    return (
        <div className="wecodeart-typeface-control__font-family">
            <span className="customize-control-title">
                {__('Font Family', 'wecodeart')}
            </span>
            <Button isSecondary onClick={() => setVisible(true)} >
                <span className="ff-name">
                    {selected || (inheritDefault ? __('Inherit', 'wecodeart') : __('Default', 'wecodeart'))}
                </span>
                <span className="ff-preview" style={{ fontFamily: selected || defaultFontface }}>Abc</span>
                {visible && (
                    <Popover position="bottom left" onFocusOutside={() => {
                        setVisible(false);
                        setSearch('');
                    }}>
                        {fonts ? getFontList() : __('Loading…', 'wecodeart')}
                    </Popover>
                )}
            </Button>
        </div>
    );
};

FontFamilySelector.propTypes = {
    onFontChoice: PropTypes.func.isRequired,
    inheritDefault: PropTypes.bool.isRequired,
    selected: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
};

export default FontFamilySelector;
