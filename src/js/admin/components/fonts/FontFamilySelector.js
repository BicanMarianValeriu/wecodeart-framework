import FontPreviewLink from './FontPreviewLink';
import VisibilitySensor from 'react-visibility-sensor';
import PropTypes from 'prop-types';

const {
    i18n: { __ },
    element: { useState },
    components: { Button, TextControl, Icon, Dropdown },
} = wp;

const FontFamilySelector = ({
    selected,
    onFontChoice,
    inheritDefault,
    systemOnly,
    fonts,
}) => {
    const [search, setSearch] = useState('');
    const [loadUntil, setLoadUntil] = useState(20);
    const [delay, setDelay] = useState(true);

    const getFonts = () => {
        const r = {};

        if (!search) {
            return fonts;
        }

        Object.keys(fonts).map((key) => r[key] = fonts[key].filter((v) => v.family.toLowerCase().includes(search.toLowerCase())));

        return r;
    };

    const getFontList = () => {
        const groups = getFonts();
        const options = [];

        if (!systemOnly) {
            options.push(
                <li key="default" className={'default-value ' + !selected ? 'selected' : ''}>
                    <FontPreviewLink
                        fontFace="default"
                        delayLoad={false}
                        onClick={() => {
                            onFontChoice('system', false);
                            setSearch('');
                        }}
                        label={inheritDefault ? __('Inherit', 'wecodeart') : __('Default', 'wecodeart')}
                    />
                </li>
            );
        }

        Object.keys(groups).map((key) => {
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
                                    onFontChoice(family, key);
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
                <div className="wecodeart-fonts">
                    <div className="wecodeart-fonts__search">
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
                                setSearch('');
                            }}
                        >
                            <Icon icon="no" />
                        </a>
                    </div>
                    <ul className="wecodeart-fonts__list">
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
        <div className="wca-customizer-control__header">
            <span className="customize-control-title">
                {__('Font Family', 'wecodeart')}
            </span>
            <Dropdown
                position="bottom center"
                onClose={() => setSearch('')}
                renderToggle={({ isOpen, onToggle }) => {
                    return (
                        <Button isSecondary onClick={onToggle} aria-expanded={isOpen} >
                            <span className="ff-name">
                                {selected || (inheritDefault ? __('Inherit', 'wecodeart') : __('Default', 'wecodeart'))}
                            </span>
                            <span className="ff-preview" style={{ fontFamily: selected || defaultFontface }}>Abc</span>
                        </Button>
                    );
                }}
                renderContent={() => (fonts ? getFontList() : __('Loading…', 'wecodeart'))}
            />
        </div>
    );
};

FontFamilySelector.propTypes = {
    inheritDefault: PropTypes.bool.isRequired,
    systemOnly: PropTypes.bool.isRequired,
    fonts: PropTypes.array.isRequired,
    onFontChoice: PropTypes.func.isRequired,
    selected: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
};

export default FontFamilySelector;
