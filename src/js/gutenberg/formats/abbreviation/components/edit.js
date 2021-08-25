/**
 * WordPress dependencies
 */
import { code } from '@wordpress/icons';

const {
    i18n: { __ },
    element: { useState, useEffect },
    components: { Modal, Button, TextControl, Icon },
    richText: { applyFormat, removeFormat, getActiveFormat },
    blockEditor: { RichTextToolbarButton }
} = wp;

const name = 'wca/abbreviation';

const Edit = ({ isActive, value, onChange }) => {
    const activeFormat = getActiveFormat(value, name);
    const { attributes = {} } = activeFormat || {};

    const [isOpen, setIsOpen] = useState(false);
    const [state, setState] = useState({ ...attributes });

    useEffect(() => setState({ ...attributes }), [activeFormat]);

    const toggle = () => setIsOpen(!isOpen);

    const { title, lang } = state;

    const onClick = () => {
        if (title) {
            onChange(applyFormat(value, { type: name, attributes: state }));
        } else {
            onChange(removeFormat(value, name));
        }

        toggle();
    };

    return (
        <>
            <RichTextToolbarButton
                icon={<Icon icon={code} />}
                title={__('Abbreviation', 'wecodeart')}
                onClick={toggle}
                isActive={isActive}
            />
            {isOpen && (
                <Modal title={__('Insert Abbreviation', 'wecodeart')} onRequestClose={toggle}>
                    <TextControl
                        label={__('Title', 'wecodeart')}
                        value={title}
                        onChange={(title) => setState({ ...state, title })}
                    />
                    <TextControl
                        label={__('Language (optional)', 'wecodeart')}
                        value={lang}
                        help={__('Example: fr, en, de, etc. Use it only if the abbreviation’s language is different from page main language.', 'wecodeart')}
                        onChange={(lang) => setState({ ...state, lang })}
                    />
                    <Button isPrimary isLarge onClick={onClick}>
                        {title ? __('Apply', 'wecodeart') : __('Remove', 'wecodeart')}
                    </Button>
                </Modal>
            )}
        </>
    );
};

export default Edit;