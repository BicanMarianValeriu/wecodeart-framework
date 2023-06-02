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
        Card,
        CardBody
    }
} = wp;

export const License = (props) => {
    const {
        isRequesting,
        createNotice,
        saveSettings,
        settings,
    } = props;

    if (isRequesting || !settings) {
        return (
            <Placeholder {...{
                style: { marginTop: 20 },
                icon: <Spinner />,
                label: __('Loading', 'wecodeart'),
                instructions: __('Please wait, loading settings...', 'wecodeart')
            }} />
        );
    }

    // Deprecated Filter
    let fields = applyFilters('wecodeart.admin.licensePanel.fields', [
        {
            id: 'theme_api_key',
            label: 'WeCodeArt Framework',
            externalUrl: '//www.wecodeart.com/product/wecodeart-framework/'
        }
    ], props);

    fields = applyFilters('wecodeart.admin.tabs.license.fields', fields, props);

    const [loading, setLoading] = useState(null);
    const extensionOpts = fields.map(a => a.id);
    const apiOptions = Object.fromEntries(Object.entries(settings).filter(([key]) => extensionOpts.includes(key)));

    const [formData, setFormData] = useState(apiOptions);
    const [hasChanges, setHasChanges] = useState(false);

    const handleNotice = () => {
        setLoading(false);
        setHasChanges(false);

        return createNotice('success', __('API Keys Saved.', 'wecodeart'));
    };

    const handleInputChange = ({ target }) => {
        const { id, value } = target;
        setFormData({ ...formData, [id]: value });
        setHasChanges(true);
    };

    // Deprecated Action
    doAction('wecodeart.admin.licensePanel', props);
    doAction('wecodeart.admin.tabs.license', props);

    return (
        <>
            <Card className="my-3 shadow-none">
                <CardBody>
                    <RawHTML>
                        {sprintf(
                            __('Enter your license keys here to receive updates. If your license keys are expired, please %1$srenew your licenses%2$s.', 'wecodeart'),
                            '<a href="https://www.wecodeart.com/" target="_blank">',
                            '</a>'
                        )}
                    </RawHTML>
                </CardBody>
            </Card>
            <div className="table-responsive">
                <table className="table table-bordered table-hover">
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
                                        <BaseControl {...{ id, key: id }}>
                                            <input
                                                id={id}
                                                type="text"
                                                value={formData[id]}
                                                placeholder={__('API Key', 'wecodeart')}
                                                disabled={settings[id] === 'FREEMIUM'}
                                                onChange={handleInputChange}
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
            </div>
            <Button
                className="button"
                isPrimary
                icon={loading && <Spinner />}
                onClick={() => {
                    setLoading(true);
                    saveSettings(formData, handleNotice);
                }}
                {...{ disabled: loading || !hasChanges }}
            >
                {loading ? '' : __('Save', 'wecodeart')}
            </Button>
        </>
    );
};

export default withFilters('wecodeart.admin.licensePanel')(License);
