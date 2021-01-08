/**
 * WordPress dependencies
 */
const {
    i18n: {
        __,
        sprintf
    },
    hooks: {
        doAction,
        applyFilters,
    },
    element: {
        RawHTML,
        useState,
        Fragment,
    },
    components: {
        withFilters,
        BaseControl,
        ExternalLink,
        Button,
        Spinner,
        Placeholder,
    }
} = wp;

export const License = (props) => {
    const {
        isRequesting,
        createNotice,
        saveEntityRecord,
        wecodeartSettings,
    } = props;

    if (isRequesting) {
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

    const LicenseFields = applyFilters('wecodeart.admin.licensePanel.fields', [
        {
            id: 'theme_api_key',
            label: __('WeCodeArt Framework', 'wecodeart'),
            externalUrl: 'https://www.wecodeart.com/product/wecodeart-framework/'
        }
    ], props);

    const handleNotice = (r, id, val) => {
        setLoading(false);
        const hasSaved = r && r[id] === val;
        const type = hasSaved ? 'success' : 'error';
        const desc = hasSaved ? __('API Key Saved.', 'wecodeart') : __('Something went wrong...', 'wecodeart');

        return createNotice(type, desc);
    };

    doAction('wecodeart.admin.licensePanel', props);

    return (
        <Fragment>
            <p>
                <RawHTML>
                    {sprintf(
                        __('Enter your license keys here to receive updates. If your license keys has expired, please %1$srenew your licenses%2$s.', 'wecodeart'),
                        '<a href="https://www.wecodeart.com/" target="_blank">',
                        '</a>'
                    )}
                </RawHTML>
            </p>
            <table className="wecodeart-license-manager table" style={{ width: '100%' }}>
                <tr style={{ textAlign: 'left' }}>
                    <th>{__('Product', 'wecodeart')}</th>
                    <th>{__('License Key', 'wecodeart')}</th>
                    <th>{__('Actions', 'wecodeart')}</th>
                    <th>{__('Status', 'wecodeart')}</th>
                </tr>
                {LicenseFields.map(({ id, label, externalUrl }) => {
                    const [value, onChange] = useState(wecodeartSettings[id]);

                    return (
                        <tr>
                            <td><strong>{label}</strong></td>
                            <td>
                                <BaseControl className="wecodeart-button-field" {...{ id, key: id }}>
                                    <input
                                        id={id}
                                        type="text"
                                        value={value}
                                        disabled={value === 'sFREEMIUM'}
                                        placeholder={__('API Key', 'wecodeart')}
                                        onChange={(e) => onChange(e.target.value)}
                                    />
                                </BaseControl>
                            </td>
                            <td>
                                <div className="wecodeart-button-group">
                                    <Button
                                        className="wecodeart-button-group__item"
                                        isPrimary
                                        isLarge
                                        icon={loading && <Spinner />}
                                        disabled={value === wecodeartSettings[id]}
                                        onClick={() => {
                                            setLoading(true);
                                            saveEntityRecord('wecodeart', 'settings', {
                                                [id]: value
                                            }).then((res) => handleNotice(res, id, value));
                                        }}
                                    >
                                        {loading ? __('Saving...', 'wecodeart') : __('Save', 'wecodeart')}
                                    </Button>
                                    {externalUrl !== '' &&
                                        <ExternalLink href={externalUrl} className="wecodeart-button-group__item">
                                            {__('Get API Key', 'wecodeart')}
                                        </ExternalLink>
                                    }
                                </div>
                            </td>
                            <td style={{
                                backgroundColor: 'rgb(137 255 128)'
                            }}>{sprintf(__('Days: %s', 'wecodeart'), __('Unlimited', 'wecodeart'))}</td>
                        </tr>
                    );
                })}
            </table>
        </Fragment>
    );
};

export default withFilters('wecodeart.admin.licensePanel')(License);
