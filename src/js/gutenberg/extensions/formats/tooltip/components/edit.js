/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { Component, Fragment } = wp.element;
const { compose, ifCondition } = wp.compose;
const { withSelect } = wp.data;
const { RichTextToolbarButton } = wp.blockEditor;
const { applyFormat, removeFormat, getActiveFormat } = wp.richText;
const { Modal, Button, TabPanel, ToggleControl, TextareaControl } = wp.components;

const name = 'wca/tooltip';

class Edit extends Component {
    constructor() {
        super(...arguments);

        this.toggle = this.toggle.bind(this);
        this.toggleEditor = this.toggleEditor.bind(this);
        this.editor;

        this.state = {
            title: '',
            isOpen: false,
            isPopover: false,
            isEditor: false,
            isHtml: true,
            options: {}
        };
    }

    componentDidMount() {
        this.addCodeMirror();
    }

    componentDidUpdate() {
        this.addCodeMirror();
    }

    toggle() {
        this.setState((state) => ({
            isOpen: !state.isOpen,
        }));

        if (this.state.isEditor) {
            this.setState({ isEditor: false });
        }
    }

    toggleEditor() {
        this.setState((state) => ({
            isHtml: !state.isHtml,
        }));

        if (this.state.isEditor && this.setState.isHtml !== true) {
            this.setState({ isEditor: false });
        }
    }

    addCodeMirror() {
        const { title: value, isEditor } = this.state;

        if (isEditor === false) {
            const editorSettings = {
                value,
                mode: 'text/html',
                lint: true,
                tabSize: 1,
                indentUnit: 1,
                height: 'auto',
                lineNumbers: true,
                lineWrapping: true,
                matchBrackets: true,
                autoCloseBrackets: true,
                styleActiveLine: true,
                styleActiveSelected: true,
                scrollbarStyle: 'null',
                gutters: ['CodeMirror-lint-markers'],
                extraKeys: {
                    'Ctrl-Space': 'autocomplete',
                    'Alt-F': 'findPersistent',
                    'Cmd-F': 'findPersistent'
                },
            };

            const EditorContainer = document.getElementById('wecodeart-tooltip-editor');
            if (EditorContainer) {
                this.editor = wp.CodeMirror(EditorContainer, editorSettings);
                this.editor.on('change', () => this.setState({ title: this.editor.getValue() }));
                if (EditorContainer.children.length) {
                    this.setState({ isEditor: true });
                } else {
                    this.setState({ isEditor: false });
                }
            }
        }
    }

    render() {
        const { title, isPopover, isHtml, isEditor } = this.state;
        const { isActive, value, onChange } = this.props;

        const activeFormat = getActiveFormat(value, name);

        let tabs = {};
        tabs.content = () => {
            return (
                <Fragment>
                    <ToggleControl
                        label={__('Use HTML Content ?', 'wecodeart')}
                        help={__('Select to enable HTML content!', 'wecodeart')}
                        checked={isHtml}
                        onChange={this.toggleEditor}
                    />
                    {!isHtml && <TextareaControl
                        label={__('Tooltip', 'wecodeart')}
                        value={activeFormat && !title ? activeFormat.attributes.title : title}
                        onChange={(_title) => this.setState({ title: _title })}
                    />}
                    {isHtml && <div className="wecodeart-tooltip__editor" id="wecodeart-tooltip-editor" />}
                </Fragment>
            );
        };

        tabs.options = () => {
            return (
                <Fragment>
                    <ToggleControl
                        label={__('Popover ?', 'wecodeart')}
                        checked={isPopover}
                        onChange={(option) => this.setState({ isPopover: option })}
                    />
                </Fragment>
            );
        };

        const onSelect = (tab) => {
            if (tab === 'options' && isHtml && isEditor) {
                this.setState({ isEditor: false });
            }

            if (tab === 'content' && isHtml) {
                this.toggleEditor();
            }
        };

        return (
            <Fragment>
                <RichTextToolbarButton
                    icon="testimonial"
                    title={__('Tooltip', 'wecodeart')}
                    onClick={this.toggle}
                    isActive={isActive}
                />
                {this.state.isOpen && (
                    <Modal
                        title={__('Insert Tooltip', 'wecodeart')}
                        className="wecodeart-tooltips-modal"
                        onRequestClose={this.toggle}>
                        <TabPanel
                            className="wecodeart-horizontal-tabs wecodeart-horizontal-tabs--tooltips"
                            activeClass="is-active"
                            onSelect={onSelect}
                            tabs={[
                                {
                                    name: 'content',
                                    title: __('Content', 'wecodeart'),
                                    className: 'tab-one',
                                },
                                {
                                    name: 'options',
                                    title: __('Options', 'wecodeart'),
                                    className: 'tab-two',
                                },
                            ]}>
                            {
                                (tab) => tabs[tab.name]()
                            }
                        </TabPanel>
                        <Button isPrimary isLarge onClick={() => {
                            if (title) {
                                const attributes = { title };

                                let options = {
                                    type: 'tooltip',
                                };

                                if (isPopover) {
                                    options = { ...options, type: 'popover' };
                                }

                                if (isHtml) {
                                    options = { ...options, html: true };
                                }

                                attributes.options = JSON.stringify(options);

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
    withSelect(function (select) {
        return {
            selectedBlock: select('core/block-editor').getSelectedBlock()
        };
    }),
    ifCondition(function (props) {
        return (
            props.selectedBlock &&
            (
                props.selectedBlock.name === 'core/paragraph' ||
                props.selectedBlock.name === 'core/heading'
            )
        );
    })
)(Edit);