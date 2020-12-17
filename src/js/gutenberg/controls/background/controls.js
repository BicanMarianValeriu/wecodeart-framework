/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { MediaUpload, MediaUploadCheck } = wp.blockEditor;
const { Toolbar, Button, Popover, MenuItem, Icon } = wp.components;
const { useState } = wp.element;

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
function Controls(props) {
    const {
        attributes,
        setAttributes,
    } = props;

    const { backgroundUrl } = attributes;
    const [popover, setPopover] = useState(false);

    return (
        <MediaUploadCheck>
            <Toolbar className={backgroundUrl ? 'components-dropdown-menu' : ''}>
                {popover && (
                    <Popover position="bottom center" className="components-popover--wca">
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
                                    onClick={() => {
                                        open();
                                        setPopover(false);
                                    }}>
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
                                    backgroundPosition: '',
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
                    <Button
                        className="components-dropdown-menu__toggle"
                        icon={icons.background}
                        aria-haspopup="true"
                        label={__('Background', 'wecodeart')}
                        tooltip={__('Background', 'wecodeart')}
                        onClick={() => setPopover(!popover)}
                    >
                        <span className="components-dropdown-menu__indicator" />
                    </Button> :
                    <MediaUpload
                        onSelect={(media) => {
                            setAttributes({ backgroundUrl: media.url, backgroundType: media.type });
                        }}
                        allowedTypes={ALLOWED_BG_MEDIA_TYPES}
                        value={backgroundUrl}
                        render={({ open }) => (
                            <Button
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

export default Controls;