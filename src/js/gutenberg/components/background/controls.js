/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { MediaUpload, MediaUploadCheck } = wp.blockEditor;
const { Toolbar, IconButton, Popover, MenuItem } = wp.components;

/**
 * Internal dependencies
 */
import icons from './icons';
import { ALLOWED_BG_MEDIA_TYPES } from './';

/**
 * Background image block toolbar controls.
 *
 * @param {Object} props The passed props.
 * @return {string} Component.
 */
function BackgroundControls(props) {
    const {
        attributes,
        setAttributes,
    } = props;

    const {
        backgroundImg,
        openPopover,
    } = attributes;

    return (
        <MediaUploadCheck>
            <Toolbar className={backgroundImg ? 'components-dropdown-menu' : ''}>
                {openPopover && (
                    <Popover
                        position="bottom center"
                        className="components-popover--wca"
                    >
                        <MediaUpload
                            onSelect={(media) => {
                                setAttributes({ backgroundImg: media.url, backgroundType: media.type, openPopover: !openPopover });
                            }}
                            allowedTypes={ALLOWED_BG_MEDIA_TYPES}
                            value={backgroundImg}
                            render={({ open }) => (
                                <MenuItem
                                    className="components-dropdown-menu__menu-item"
                                    icon="edit"
                                    role="menuitem"
                                    onClick={open} >
                                    {__('Edit Background', 'wecodeart')}
                                </MenuItem>
                            )}
                        />
                        <MenuItem
                            className="components-dropdown-menu__menu-item"
                            icon="trash"
                            role="menuitem"
                            onClick={() => {
                                setAttributes({
                                    backgroundImg: '',
                                    backgroundOverlay: 0,
                                    backgroundRepeat: 'no-repeat',
                                    backgroundPosition: '',
                                    backgroundSize: 'cover',
                                    hasParallax: false,
                                    openPopover: !openPopover,
                                });
                            }} >
                            {__('Remove Background', 'wecodeart')}
                        </MenuItem>
                    </Popover>
                )}
                {backgroundImg ?
                    <IconButton
                        className="components-dropdown-menu__toggle"
                        icon={icons.background}
                        aria-haspopup="true"
                        label={__('Background', 'wecodeart')}
                        tooltip={__('Background', 'wecodeart')}
                        onClick={() => setAttributes({ openPopover: !openPopover })}
                    >
                        <span className="components-dropdown-menu__indicator" />
                    </IconButton> :
                    <MediaUpload
                        onSelect={(media) => {
                            setAttributes({ backgroundImg: media.url, backgroundType: media.type });
                        }}
                        allowedTypes={ALLOWED_BG_MEDIA_TYPES}
                        value={backgroundImg}
                        render={({ open }) => (
                            <IconButton
                                className="components-toolbar__control"
                                label={__('Background', 'wecodeart')}
                                icon={icons.background}
                                onClick={open}
                            />
                        )}
                    />

                }
            </Toolbar>
        </MediaUploadCheck>
    );
}

export default BackgroundControls;