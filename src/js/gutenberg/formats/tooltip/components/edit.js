/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { useEffect, useState, useRef } = wp.element;
const { compose, ifCondition } = wp.compose;
const { withSelect } = wp.data;
const { RichTextToolbarButton } = wp.blockEditor;
const { applyFormat, removeFormat, getActiveFormat } = wp.richText;

const {
    components: {
        Modal,
        Button,
        TabPanel,
        TextControl,
        ToggleControl,
        SelectControl,
        __experimentalNumberControl: NumberControl
    }
} = wp;

const name = 'wca/tooltip';

const Edit = (props) => {
    const { isActive, value, onChange } = props;
    const activeFormat = getActiveFormat(value, name);

    useEffect(() => {
        if (typeof activeFormat === 'undefined') return;

        const { type: formatName } = activeFormat;

        if (formatName !== name) return;

        const {
            unregisteredAttributes: {
                title = '',
                'data-toggle': dataToggle = '',
                'data-options': dataOptions = '{}'
            } = {}
        } = activeFormat;

        setAttributes({
            ...attributes, ...{
                'title': title,
                'data-toggle': dataToggle,
                'data-options': JSON.parse(dataOptions)
            }
        });
    }, [activeFormat]);

    const editorRef = useRef();
    const [editorOpts, setEditorOpts] = useState({
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
    });
    const [editor, loadEditor] = useState(null);
    const [reload, reloadEditor] = useState(true);
    const [modal, setModal] = useState(false);

    let [attributes, setAttributes] = useState({
        'title': '',
        'data-toggle': 'tooltip',
        'data-options': {}
    });

    const { title, 'data-toggle': type, 'data-options': options } = attributes;

    // On Tooltip Type Change
    useEffect(() => {
        console.log(type);
        if (type === 'tooltip') {
            setEditorOpts({ ...editorOpts, value: title });
        }
        if (type === 'popover') {
            setEditorOpts({ ...editorOpts, value: options?.content || '' });
        }
    }, [type]);

    // On Tab Change
    useEffect(() => {
        loadEditor(wp.CodeMirror(editorRef.current, editorOpts));
    }, [reload, editorOpts]);

    // On Editor Loaded
    useEffect(() => {
        if (editor === null) return;

        if (type === 'tooltip') {
            attributes = {
                ...attributes,
                'title': editor.getValue(),
                'data-toggle': 'tooltip'
            }
        }

        if (type === 'popover') {
            attributes = {
                ...attributes,
                'data-toggle': 'popover',
                'data-options': {
                    ...options,
                    content: editor.getValue()
                }
            }
        }

        editor.on('change', () => setAttributes(attributes));
    }, [editor, type, reload]);

    let tabs = {};
    tabs.content = () => {
        const shouldShowTitle = type === 'popover';
        return (
            <>
                {shouldShowTitle && <TextControl
                    label={__('Title', 'wecodeart')}
                    value={title}
                    onChange={(title) => setAttributes({ ...attributes, title })}
                />}
                <p>{__('Content', 'wecodeart')}</p>
                <div className="wecodeart-tooltip__editor" id="wecodeart-tooltip-editor" ref={editorRef} />
            </>
        );
    };

    tabs.options = () => {
        return (
            <>
                <p>
                    <SelectControl
                        label={__('Type', 'wecodeart')}
                        value={type || 'tooltip'}
                        options={[
                            { label: __('Tooltip', 'wecodeart'), value: 'tooltip' },
                            { label: __('Popover', 'wecodeart'), value: 'popover' },
                        ]}
                        onChange={(type) => setAttributes({
                            ...attributes, 'data-toggle': type
                        })}
                    />
                </p>
                <p>
                    <SelectControl
                        multiple
                        label={__('Trigger', 'wecodeart')}
                        value={options?.trigger && options.trigger.split(' ') || ['hover', 'focus']}
                        options={[
                            { label: __('Hover', 'wecodeart'), value: 'hover' },
                            { label: __('Focus', 'wecodeart'), value: 'focus' },
                            { label: __('Click', 'wecodeart'), value: 'click' },
                            { label: __('Manual', 'wecodeart'), value: 'manual' },
                        ]}
                        onChange={(triggers) => setAttributes({
                            ...attributes,
                            'data-options': {
                                ...options,
                                trigger: triggers.join(' ')
                            }
                        })}
                    />
                </p>
                <p>
                    <SelectControl
                        label={__('Placement', 'wecodeart')}
                        value={options?.placement || top}
                        options={[
                            { label: __('Top', 'wecodeart'), value: 'top' },
                            { label: __('Left', 'wecodeart'), value: 'left' },
                            { label: __('Right', 'wecodeart'), value: 'right' },
                            { label: __('Bottom', 'wecodeart'), value: 'bottom' },
                        ]}
                        onChange={(placement) => setAttributes({
                            ...attributes,
                            'data-options': {
                                ...options,
                                placement
                            }
                        })}
                    />
                </p>
                <p>
                    <NumberControl
                        label={__('Offset', 'wecodeart')}
                        value={options?.offset || 0}
                        min={0}
                        onChange={(offset) => {
                            setAttributes({
                                ...attributes,
                                'data-options': {
                                    ...options,
                                    offset: parseInt(offset),
                                }
                            });
                        }}
                    />
                </p>
                <p>
                    <NumberControl
                        label={__('Delay', 'wecodeart')}
                        value={options?.delay || 0}
                        min={0}
                        onChange={(delay) => {
                            setAttributes({
                                ...attributes,
                                'data-options': {
                                    ...options,
                                    delay: parseInt(delay),
                                }
                            });
                        }}
                    />
                </p>
                <p>
                    <ToggleControl
                        label={__('Allow HTML Content?', 'wecodeart')}
                        checked={options?.html || false}
                        onChange={(html) => {
                            setAttributes({
                                ...attributes,
                                'data-options': {
                                    ...options,
                                    html,
                                }
                            });
                        }}
                    />
                </p>
            </>
        );
    };

    return (
        <>
            <RichTextToolbarButton
                icon="testimonial"
                title={__('Tooltip', 'wecodeart')}
                onClick={() => setModal(true)}
                isActive={isActive}
            />
            {modal && (
                <Modal
                    title={__('Insert Tooltip', 'wecodeart')}
                    className="wecodeart-tooltips-modal"
                    onRequestClose={() => setModal(false)}>
                    <TabPanel
                        className="wecodeart-horizontal-tabs wecodeart-horizontal-tabs--tooltips"
                        activeClass="is-active"
                        onSelect={(tab) => {
                            if (tab === 'options') {
                                return reloadEditor(true);
                            }
                            return reloadEditor(false);
                        }}
                        initialTabName="options"
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
                            attributes = { ...attributes, ['data-options']: JSON.stringify(options) };
                            onChange(applyFormat(value, { type: name, attributes }));
                        } else {
                            onChange(removeFormat(value, name));
                        }

                        setModal(false);
                    }}>
                        {__('Apply', 'wecodeart')}
                    </Button>
                </Modal>
            )}
        </>
    );
};

export default compose(
    withSelect((select) => {
        return {
            selectedBlock: select('core/block-editor').getSelectedBlock()
        };
    }),
    ifCondition((props) => {
        const { selectedBlock } = props;
        const { name } = selectedBlock;
        const condition = selectedBlock && (name === 'core/paragraph' || name === 'core/heading');
        return condition;
    })
)(Edit);