/**
 * WordPress dependencies.
 */
const {
    i18n: { __ },
    element: { useEffect, useState, useRef },
    components: { Button, Spinner, Placeholder }
} = wp;

export default (props) => {
    const { saveEntityRecord, createNotice, wecodeartSettings = {}, isRequesting } = props;

    if (isRequesting) {
        return (
            <Placeholder {...{
                style: { marginTop: 20 },
                icon: <Spinner />,
                label: __('Loading Custom CSS', 'wecodeart'),
                instructions: __('Please wait, loading settings...', 'wecodeart')
            }} />
        );
    }

    const { custom_css = '' } = wecodeartSettings;

    const refContainer = useRef(null);
    const [customCSS, setCustomCSS] = useState(custom_css);
    const [editor, loadEditor] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        loadEditor(wp.CodeMirror(refContainer.current, {
            value: customCSS,
            autoCloseBrackets: true,
            continueComments: true,
            lineNumbers: true,
            lineWrapping: true,
            matchBrackets: true,
            lint: true,
            gutters: ['CodeMirror-lint-markers'],
            styleActiveLine: true,
            styleActiveSelected: true,
            extraKeys: {
                'Ctrl-Space': 'autocomplete',
                'Alt-F': 'findPersistent',
                'Cmd-F': 'findPersistent'
            }
        }));
    }, []);

    useEffect(() => {
        if (editor === null) return;
        editor.on('change', () => setCustomCSS(editor.getValue()));
    }, [editor]);

    const handleNotice = (r, id, val) => {
        setLoading(false);
        const hasSaved = r && r[id] === val;
        const type = hasSaved ? 'success' : 'error';
        const desc = hasSaved ? __('CSS Saved.', 'wecodeart') : __('Something went wrong...', 'wecodeart');

        return createNotice(type, desc);
    };

    return (
        <div class="wecodeart-custom-css">
            <h2 class="wecodeart-custom-css__title">{__('Add your custom CSS.', 'wecodeart')}</h2>
            <div ref={refContainer} className="wecodeart-custom-css__editor" id="wecodeart-css-editor" />
            <div class="wecodeart-custom-css__content">
                <p><small><em>{__('This will also be updated in WP Customizer.', 'wecodeart')}</em></small></p>
            </div>
            <Button
                isPrimary
                isLarge
                icon={loading && <Spinner />}
                disabled={loading}
                onClick={() => {
                    setLoading(true);
                    saveEntityRecord('wecodeart', 'settings', {
                        custom_css: customCSS
                    }).then((res) => handleNotice(res, 'custom_css', customCSS));
                }}
            >
                {loading ? __('Saving...', 'wecodeart') : __('Save', 'wecodeart')}
            </Button>
        </div>
    );
};
