/**
 * WordPress dependencies
 */
const {
    i18n: {
        __,
        sprintf
    },
    element: {
        RawHTML,
        useState,
    },
    components: {
        BaseControl,
        ExternalLink,
        Button,
        Spinner,
        Placeholder,
    }
} = wp;

export default function General(props) {
    const {
        isRequesting,
        createNotice,
        saveEntityRecord,
        wecodeartSettings,
    } = props;

    if (isRequesting || !wecodeartSettings) {
        return (
            <Placeholder {...{
                style: { marginTop: 20 },
                icon: <Spinner />,
                label: __('Loading', 'wecodeart'),
                instructions: __('Please wait, loading settings...', 'wecodeart')
            }} />
        );
    }

    const [loading, setLoading] = useState(null);

    const handleNotice = (r, id, val) => {
        setLoading(false);
        const hasSaved = r && r[id] === val;
        const type = hasSaved ? 'success' : 'error';
        const desc = hasSaved ? __('Settings saved.', 'wecodeart') : __('Something went wrong...', 'wecodeart');

        return createNotice(type, desc);
    };

    return (
        <>
            <p><strong>{__('Body Font', 'wecodeart')}</strong></p>
        </>
    );
}
