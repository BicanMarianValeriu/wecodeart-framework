/**
 * WordPress dependencies
 */
import { code } from '@wordpress/icons';

const { __ } = wp.i18n;
const { Component, Fragment } = wp.element;
const { compose, ifCondition } = wp.compose;
const { withSelect } = wp.data;
const { RichTextToolbarButton } = wp.blockEditor;
const { applyFormat, removeFormat, getActiveFormat } = wp.richText;
const { Modal, Button, TextControl, Icon } = wp.components;

const name = 'wca/abbreviation';

class Edit extends Component {
    constructor() {
        super(...arguments);

        this.toggle = this.toggle.bind(this);

        this.state = {
            isOpen: false,
            title: '',
            lang: '',
        };
    }

    toggle() {
        this.setState((state) => ({ isOpen: !state.isOpen }));
    }

    render() {
        const { title, lang } = this.state;
        const {
            isActive,
            value,
            onChange,
        } = this.props;

        const activeColorFormat = getActiveFormat(value, name);

        return (
            <Fragment>
                <RichTextToolbarButton
                    icon={<Icon icon={code} />}
                    title={__('Abbreviation', 'wecodeart')}
                    onClick={this.toggle}
                    isActive={isActive}
                />
                {this.state.isOpen && (
                    <Modal
                        title={__('Insert Abbreviation', 'wecodeart')}
                        onRequestClose={this.toggle}>
                        <TextControl
                            label={__('Title', 'wecodeart')}
                            value={activeColorFormat && !title ? activeColorFormat.attributes.title : title}
                            onChange={(newTitle) => this.setState({ title: newTitle })}
                        />
                        <TextControl
                            label={__('Language (optional)', 'wecodeart')}
                            value={activeColorFormat && !lang ? activeColorFormat.attributes.lang : lang}
                            help={__('Example: fr, en, de, etc. Use it only if the abbreviation’s language is different from page main language.', 'wecodeart')}
                            onChange={(newLang) => this.setState({ lang: newLang })}
                        />

                        <Button isPrimary isLarge onClick={() => {
                            if (title) {
                                const attributes = { title };

                                if (lang) {
                                    attributes.lang = lang;
                                }

                                onChange(applyFormat(value, { type: name, attributes }));
                            } else {
                                onChange(removeFormat(value, name));
                            }

                            this.toggle();
                        }}>
                            {__('Apply', 'wecodeart')}
                        </Button>
                    </Modal>

                )}
            </Fragment>
        );
    }
}

export default compose(
    withSelect((select) => {
        return {
            isDisabled: false,
        };
    }),
    ifCondition((props) => !props.isDisabled),
)(Edit);