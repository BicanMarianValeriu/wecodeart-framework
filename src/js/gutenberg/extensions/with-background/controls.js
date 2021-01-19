/**
 * WordPress dependencies
 */
const {
    i18n: { __ },
    element: { useState },
    blockEditor: { MediaUpload, MediaUploadCheck },
    components: { Toolbar, ToolbarButton, Popover, MenuItem, Icon, SVG, Path, G },
} = wp;

/**
 * Internal dependencies
 */
import { ALLOWED_BG_MEDIA_TYPES } from './index';

/**
 * BG Icon
 */
const ICON = (
    <SVG height="20" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg">
        <G fill="none" fillRule="evenodd" transform="translate(2.762573 1)">
            <Path d="m4.93810577 15.6496655-4.30419126-4.3041913c-.67516726-.6751672-.67516726-1.68791812 0-2.36308537l5.48573395-5.31694215 5.40133804 5.40133806c.6751673.67516725.6751673 1.68791816 0 2.36308536l-4.30419124 4.3041913c-.59077135.5907713-1.60352224.5907713-2.27868949-.0843959z" stroke="currentColor" strokeWidth="2" />
            <Path d="m15.4031982 15.3120819c0 .9283549-.7595631 1.6879181-1.6879181 1.6879181s-1.6879181-.7595632-1.6879181-1.6879181c0-.928355 1.6879181-3.3758363 1.6879181-3.3758363s1.6879181 2.4474813 1.6879181 3.3758363z" fill="currentColor" />
            <Path d="m.21193497 10c0 .4219795.16879181.8439591.42197954 1.1815427l4.30419126 4.3041913c.67516725.6751672 1.68791814.6751672 2.36308539 0l4.30419124-4.3041913c.2531877-.3375836.4219796-.7595632.4219796-1.1815427z" fill="currentColor" /><Path d="m3.16579172.71158994 6.66727666 6.66727665" stroke="currentColor" strokeWidth="2" />
        </G>
    </SVG>
);

/**
 * Background image block toolbar controls.
 *
 * @param   {Object} props The passed props.
 *
 * @return  {string} Component.
 */
const Controls = ({ attributes, setAttributes }) => {
    const { backgroundUrl } = attributes;
    const [popover, setPopover] = useState(false);

    return (
        <>
            <MediaUploadCheck>
                <Toolbar className={backgroundUrl ? 'components-dropdown-menu' : ''}>
                    {popover && (
                        <Popover
                            position="bottom center"
                            className="components-popover--wca">
                            <MediaUpload
                                onSelect={(media) => {
                                    setAttributes({ backgroundUrl: media.url, backgroundType: media.type });
                                    setPopover(!popover);
                                }}
                                allowedTypes={ALLOWED_BG_MEDIA_TYPES}
                                value={backgroundUrl}
                                render={({ open }) => (
                                    <MenuItem
                                        className="components-dropdown-menu__menu-item"
                                        icon={<Icon icon="edit" className="components-menu-items__item-icon" />}
                                        role="menuitem"
                                        onClick={open}>
                                        {__('Edit Background', 'wecodeart')}
                                    </MenuItem>
                                )}
                            />
                            <MenuItem
                                className="components-dropdown-menu__menu-item"
                                icon={<Icon icon="trash" className="components-menu-items__item-icon" />}
                                role="menuitem"
                                onClick={() => {
                                    setAttributes({
                                        backgroundUrl: '',
                                        backgroundOverlay: 0,
                                        backgroundRepeat: 'no-repeat',
                                        backgroundPosition: 'center center',
                                        backgroundSize: 'cover',
                                        focalPoint: undefined,
                                        hasParallax: false,
                                    });
                                    setPopover(false);
                                }} >
                                {__('Remove Background', 'wecodeart')}
                            </MenuItem>
                        </Popover>
                    )}
                    {backgroundUrl ?
                        <ToolbarButton
                            className="components-dropdown-menu__toggle"
                            icon={ICON}
                            aria-haspopup="true"
                            label={__('Edit background', 'wecodeart')}
                            tooltip={__('Edit background', 'wecodeart')}
                            onClick={() => setPopover(!popover)}
                        >
                            <span className="components-dropdown-menu__indicator" />
                        </ToolbarButton> :
                        <MediaUpload
                            onSelect={(media) => setAttributes({ backgroundUrl: media.url, backgroundType: media.type })}
                            allowedTypes={ALLOWED_BG_MEDIA_TYPES}
                            value={backgroundUrl}
                            render={({ open }) => (
                                <ToolbarButton
                                    className="components-toolbar__control"
                                    label={__('Add Background', 'wecodeart')}
                                    icon={ICON}
                                    onClick={open}
                                />
                            )}
                        />

                    }
                </Toolbar>
            </MediaUploadCheck>
        </>
    );
};

export default Controls;