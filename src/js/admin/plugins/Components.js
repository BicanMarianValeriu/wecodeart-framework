/**
 * WordPress dependencies
 */
const {
    i18n: {
        __,
        _x,
    },
    components: {
        Card,
        CardHeader,
        CardBody,
        CardFooter,
        ExternalLink,
        ToggleControl,
        __experimentalHStack: HStack,
        Spinner,
        Button,
    },
    element: {
        useState,
    }
} = wp;

const { active: _activePlugins = [], all: _allPlugins = [], installers = [] } = wecodeartPlugins || {};

import { getInstallerIcon, getInstallerDir } from './../functions';

const AJAX_ACTION = 'wca_manage_plugins';

const Plugin = ({
    title = '',
    slug = '',
    description = '',
    more = '',
    source = 'wordpress',
    required = true,
    activePlugins,
    setActivePlugins,
    allPlugins,
    setAllPlugins,
    handleNotice
}) => {
    const [activeLoading, setActiveLoading] = useState(null);
    const [installLoading, setInstallLoading] = useState(null);

    const pluginDir = getInstallerDir({ slug, source });

    const handleActivation = async (value) => {
        setActiveLoading(true);

        const formData = new FormData();
        formData.append('action', AJAX_ACTION);
        formData.append('type', value ? 'activate' : 'deactivate');
        formData.append('plugins', JSON.stringify([{ slug: pluginDir }]));

        const r = await fetch(ajaxurl, {
            method: 'POST',
            body: formData
        });

        const { data: { message, success = [] } } = await r.json();

        if (value && success.length) {
            setActivePlugins([...activePlugins, pluginDir]);
        } else if (success.length) {
            setActivePlugins(activePlugins.filter(item => item !== pluginDir));
        }

        handleNotice(message);
        setActiveLoading(false);
    }

    const handleInstall = async ({ slug, source }) => {
        setInstallLoading(true);

        const formData = new FormData();
        formData.append('action', AJAX_ACTION);
        formData.append('type', 'install');
        formData.append('plugins', JSON.stringify([{ slug, source }]));

        const r = await fetch(ajaxurl, {
            method: 'POST',
            body: formData
        });

        const { data: { message = '', success = [] } = {} } = await r.json();

        if (success.length) {
            setAllPlugins([...allPlugins, pluginDir]);
        }

        handleNotice(message);
        setInstallLoading(false);
    }

    const hasMetRequirements = required instanceof Array ? required.map(i => activePlugins.includes(i)).every(i => i === true) : required;
    const shouldAllowInstall = allPlugins.includes(pluginDir) || !pluginDir || !hasMetRequirements || installLoading;

    return (
        <Card className="border shadow-none">
            <CardHeader>
                {title && <h3 className="m-0">{title}</h3>}
                {getInstallerIcon(source)}
            </CardHeader>
            {(description || more) && (<CardBody>
                {description && <p>{description}</p>}
                {more && <p>
                    <ExternalLink className="fw-bold text-decoration-none" href={more}>
                        <span className="me-1">{__('Learn more', 'wecodeart')}</span>
                    </ExternalLink>
                </p>}
            </CardBody>)}
            <CardFooter>
                <HStack>
                    <div className="align-self-end">
                        {hasMetRequirements ?
                            <ToggleControl
                                className="m-0"
                                label={activePlugins.includes(pluginDir) || !pluginDir ? _x('Active', 'plugin', 'wecodeart') : __('Activate', 'wecodeart')}
                                checked={activePlugins.includes(pluginDir) || !pluginDir}
                                onChange={handleActivation}
                                {...{ disabled: !allPlugins.includes(pluginDir) || activeLoading }}
                            /> :
                            __('Plugin not detected.', 'wecodeart')}
                    </div>
                    <Button
                        className="button"
                        isPrimary
                        icon={installLoading && <Spinner />}
                        onClick={() => handleInstall({ slug, source })}
                        {...{ disabled: shouldAllowInstall }}
                    >
                        {installLoading ? '' : allPlugins.includes(pluginDir) || !pluginDir ? _x('Installed', 'plugin', 'wecodeart') : __('Install', 'wecodeart')}
                    </Button>
                </HStack>
            </CardFooter>
        </Card>
    )
};

const Manager = ({ createNotice }) => {
    const [activePlugins, setActivePlugins] = useState(_activePlugins);
    const [allPlugins, setAllPlugins] = useState(_allPlugins);
    const [hasChanges, setHasChanges] = useState(false);
    const [reloading, setReloading] = useState(false);

    const handleNotice = (message) => {
        setReloading(false);
        setHasChanges(true);

        return createNotice('success', message);
    };

    const hasRecommendedPlugins = installers.filter(({ recommended, ...rest }) => recommended && allPlugins.includes(getInstallerDir(rest)) === false);

    const extraPluginProps = { activePlugins, setActivePlugins, allPlugins, setAllPlugins, handleNotice };

    return (
        <>
            {hasRecommendedPlugins.length ? <div className="components-notice is-warning flex-column align-items-start m-0 mb-3">
                <p>{
                    sprintf(
                        __('Your theme has recommended the following plugins: %s. Would you like to install them?', 'wecodeart'),
                        hasRecommendedPlugins.map(({ title }) => title).join(', ')
                    )
                }</p>
                <p>
                    <Button className="button" isPrimary onClick={async () => {
                        setReloading(true);

                        const formData = new FormData();
                        formData.append('action', AJAX_ACTION);
                        formData.append('type', 'install');
                        formData.append('plugins', JSON.stringify(hasRecommendedPlugins.map(({ slug, source }) => ({ slug, source }))));

                        const r = await fetch(ajaxurl, {
                            method: 'POST',
                            body: formData
                        });

                        const { data: { message = '', success = [] } = {} } = await r.json();
                        if (success.length) {
                            setAllPlugins([...allPlugins, ...success.map(({ slug, source }) => getInstallerDir({ slug, source }))]);
                        }

                        handleNotice(message);
                    }} {...{ disabled: reloading }} >{__('Install', 'wecodeart')}</Button>
                </p>
            </div> : null}
            <div className="grid grid--installables mb-3">
                {installers.map((props) => <Plugin {...{ ...props, ...extraPluginProps }} />)}
            </div>
            <Button className="button" isPrimary icon={reloading && <Spinner />} onClick={() => {
                setReloading(true);
                window.location.reload();
            }} {...{ disabled: !hasChanges }} >
                {reloading ? '' : __('Reload', 'wecodeart')}
            </Button>
        </>
    );
};

export { Manager, Plugin };