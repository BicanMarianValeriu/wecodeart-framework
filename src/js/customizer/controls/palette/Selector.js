import classnames from 'classnames';
import { trash } from '@wordpress/icons';

const {
    components: { Button, Modal },
    element: { useState },
    i18n: { __, sprintf }
} = wp;

const PaletteSelector = ({ value, save, choices, setChoices, inputAttrs }) => {
    const { allowAdd } = inputAttrs;
    const [isOpenModal, setIsOpenModal] = useState(false);
    const [willDelete, setWillDelete] = useState('');

    const deletePalette = () => {
        let newValue = value;
        if (newValue === willDelete) {
            newValue = 'base';
        }
        setChoices(choices.filter(({ slug }) => slug !== willDelete));
        setIsOpenModal(false);
        setWillDelete('');
        save(newValue);
        if (allowAdd) {
            const formData = new FormData();
            formData.append('action', 'wca_update_palette');
            formData.append('type', 'remove');
            formData.append('value', newValue);
            formData.append('palette', willDelete);

            return fetch(wp.ajax.settings.url, {
                method: 'POST',
                body: formData
            }).then((d) => console.log(d)).catch((err) => console.log(JSON.stringify(err)));
        }
    };

    // Reorder the palette keys so we always have first positions used by defaults.
    const orderedPalettes = choices.sort((a, b) => a.allowDeletion - b.allowDeletion);

    return (
        <div className="wecodeart-palette-options">
            {orderedPalettes.map(({ colors, allowDeletion = 0, label, slug }) => {
                return (
                    <div key={slug} className="wecodeart-palette-options__item">
                        {allowDeletion !== 0 && (
                            <>
                                <Button
                                    isLink
                                    icon={trash}
                                    iconSize={21}
                                    className="wecodeart-palette-options__item-delete"
                                    title={__('Remove Palette', 'wecodeart')}
                                    onClick={() => {
                                        setWillDelete(slug);
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
                                            choices.filter(({ slug }) => willDelete === slug).pop().label
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
                                active: value === slug,
                            }])}
                            onClick={(e) => {
                                e.preventDefault();
                                save(slug);
                            }}
                            key={slug}
                        >
                            {Object.keys(colors).slice(0, 4).map((key) => {
                                return (
                                    <div className="wecodeart-palette-options__button-color" key={key} style={{
                                        backgroundColor: colors[key],
                                    }} />
                                );
                            })}
                            <span className="wecodeart-palette-options__button-title">{label}</span>
                        </button>
                    </div>
                );
            })}
        </div>
    );
};

export default PaletteSelector;