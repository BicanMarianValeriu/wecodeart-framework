import classnames from 'classnames';
import { trash } from '@wordpress/icons';

const {
    components: { Button, Modal },
    element: { useState },
    i18n: { __, sprintf }
} = wp;

const PaletteSelector = ({ values, save }) => {
    const { palettes, active = 'base' } = values;

    const [isOpenModal, setIsOpenModal] = useState(false);
    const [willDelete, setWillDelete] = useState('');

    const PREVIEW_COLORS = [
        'primary',
        'secondary',
        'site',
        'text',
    ];

    const deletePalette = () => {
        const nextValues = { ...values };
        if (active === willDelete) {
            nextValues.active = 'base';
        }
        delete nextValues.palettes[willDelete];
        setIsOpenModal(false);
        setWillDelete('');
        save(nextValues);
    };

    const setActivePalette = (id) => {
        const nextValues = { ...values };
        nextValues.active = id;
        save(nextValues);
    };

    // Reorder the palette keys so we always have first positions used by defaults.
    const orderedPaletteKeys = [
        ...Object.keys(values.palettes).filter((paletteSlug) => !palettes[paletteSlug].allowDeletion),
        ...Object.keys(values.palettes).filter((paletteSlug) => palettes[paletteSlug].allowDeletion),
    ];

    return (
        <div className="wecodeart-palette-options">
            {orderedPaletteKeys.map((id) => {
                const { colors, allowDeletion, name } = palettes[id];
                return (
                    <div key={id} className="wecodeart-palette-options__item">
                        {allowDeletion && (
                            <>
                                <Button
                                    isLink
                                    icon={trash}
                                    iconSize={21}
                                    className="wecodeart-palette-options__item-delete"
                                    title={__('Remove Palette', 'wecodeart')}
                                    onClick={() => {
                                        setWillDelete(id);
                                        setIsOpenModal(true);
                                    }}
                                />
                                {isOpenModal && (
                                    <Modal
                                        isDismissible={false}
                                        className="wecodeart-palette-options__item-modal"
                                        title={sprintf(
                                            // translators: %s - name of palette that will be deleted.
                                            __('Are you sure you want to delete the %s palette?', 'wecodeart'),
                                            palettes[willDelete].name
                                        )}
                                    >
                                        <p>
                                            {__(
                                                'If this is the currently active palette, the current palette will be switched to the Base one.',
                                                'wecodeart'
                                            )}
                                        </p>
                                        <div className="actions">
                                            <Button
                                                isPrimary
                                                icon="trash"
                                                onClick={deletePalette}
                                            >
                                                {__('Delete', 'wecodeart')}
                                            </Button>
                                            <Button
                                                isSecondary
                                                onClick={() => {
                                                    setIsOpenModal(false);
                                                    setWillDelete('');
                                                }}
                                            >
                                                {__('Cancel', 'wecodeart')}
                                            </Button>
                                        </div>
                                    </Modal>
                                )}
                            </>
                        )}
                        <button
                            className={classnames(['wecodeart-palette-options__button', {
                                active: active === id,
                            }])}
                            onClick={(e) => {
                                e.preventDefault();
                                setActivePalette(id);
                            }}
                            key={name.toLowerCase()}
                        >
                            {PREVIEW_COLORS.map((color, index) => {
                                return (
                                    <div className="wecodeart-palette-options__button-color" key={index} style={{
                                        backgroundColor: colors[color],
                                    }} />
                                );
                            })}
                            <span className="wecodeart-palette-options__button-title">{name}</span>
                        </button>
                    </div>
                );
            })}
        </div>
    );
};

export default PaletteSelector;