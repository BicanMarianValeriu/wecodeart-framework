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

const { pickBy } = lodash;

export const License = (props) => {
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

    const fields = applyFilters('wecodeart.admin.licensePanel.fields', [
        {
            id: 'theme_api_key',
            label: 'WeCodeArt Framework',
            externalUrl: '//www.wecodeart.com/product/wecodeart-framework/'
        }
    ], props);

    const [loading, setLoading] = useState(null);
    const extensionOpts = fields.map(a => a.id);
    const apiOptions = pickBy(wecodeartSettings, (v, k) => extensionOpts.includes(k));
    const [formData, setFormData] = useState(apiOptions);

    const handleNotice = () => {
        setLoading(false);
        return createNotice('success', __('API Keys Saved.', 'wecodeart'));
    };

    doAction('wecodeart.admin.licensePanel', props);

    return (
        <>
            <p>
                <RawHTML>
                    {sprintf(
                        __('Enter your license keys here to receive updates. If your license keys are expired, please %1$srenew your licenses%2$s.', 'wecodeart'),
                        '<a href="https://www.wecodeart.com/" target="_blank">',
                        '</a>'
                    )}
                </RawHTML>
            </p>
            <table className="wecodeart-table table table-bordered table-hover" style={{ width: '100%' }}>
                <thead>
                    <tr style={{ textAlign: 'left' }}>
                        <th>{__('Product', 'wecodeart')}</th>
                        <th>{__('License Key', 'wecodeart')}</th>
                        <th>{__('Actions', 'wecodeart')}</th>
                        <th>{__('Status', 'wecodeart')}</th>
                    </tr>
                </thead>
                <tbody>
                    {fields.map(({ id, label, externalUrl = '' }) => {
                        return (
                            <tr>
                                <td><strong>{label}</strong></td>
                                <td>
                                    <BaseControl className="wecodeart-button-field" {...{ id, key: id }}>
                                        <input
                                            id={id}
                                            type="text"
                                            value={formData[id]}
                                            placeholder={__('API Key', 'wecodeart')}
                                            disabled={wecodeartSettings[id] === 'EARLY_ACCESS'}
                                            onChange={({ target: { value } }) => setFormData({ ...formData, [id]: value })}
                                        />
                                    </BaseControl>
                                </td>
                                <td>
                                    <div className="wecodeart-button-group">
                                        {externalUrl !== '' &&
                                            <ExternalLink href={externalUrl} className="wecodeart-button-group__item">
                                                {__('Get API Key', 'wecodeart')}
                                            </ExternalLink>
                                        }
                                    </div>
                                </td>
                                <td style={{
                                    backgroundColor: '#d7ffd2'
                                }}>{sprintf(__('Days: %s', 'wecodeart'), __('Unlimited', 'wecodeart'))}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            <p>
                <Button
                    className="button"
                    isPrimary
                    isLarge
                    icon={loading && <Spinner />}
                    onClick={() => {
                        setLoading(true);
                        let value = {};
                        Object.keys(formData).map(k => value = { ...value, [k]: formData[k] === '' ? 'unset' : formData[k] });
                        saveEntityRecord('wecodeart', 'settings', value).then(handleNotice);
                    }}
                >
                    {loading ? '' : __('Save', 'wecodeart')}
                </Button>
            </p>
        </>
    );
};

export default withFilters('wecodeart.admin.licensePanel')(License);
