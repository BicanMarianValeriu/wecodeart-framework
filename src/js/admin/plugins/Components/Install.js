/**
 * WordPress dependencies
 */
const {
    i18n: {
        __,
        _x,
    },
    components: {
        Button,
        Spinner,
        Tooltip
    },
    element: {
        useState,
    }
} = wp;

import { AJAX_ACTIONS } from './../constants';

const Install = ({
    type = '',
    slug = '',
    source = '',
    destination = '',
    pluginDir = '',
    allPlugins = [],
    setAllPlugins,
    allModules = [],
    setAllModules,
    setHasChanges,
    handleNotice,
    hasMetRequirements = true
}) => {
    const [isLoading, setIsLoading] = useState(null);

    const { hasUpdate = false } = allModules.filter(({ slug: _slug }) => _slug === slug).pop() || {};

    const handleInstall = async () => {
        setIsLoading(true);

        const formData = new FormData();
        formData.append('action', AJAX_ACTIONS[type]);
        formData.append('type', 'install');
        formData.append('plugins', JSON.stringify([{ slug, source, destination }]));

        const r = await fetch(ajaxurl, {
            method: 'POST',
            body: formData
        });

        const { data: { message = '', success = [] } = {} } = await r.json();

        if (success.length) {
            if (type === 'plugin') {
                setAllPlugins([...allPlugins, pluginDir]);
            }
            if (type === 'module') {
                setAllModules([...allModules, { slug, source, destination, version: hasUpdate }]);
            }

            setHasChanges(true);
        }

        handleNotice(message);
        setIsLoading(false);
    }

    const getInstallStatus = () => {
        let status = false;

        // If has update, enable button.
        if (hasUpdate) {
            return status;
        }

        // If loading or is module, disable button.
        if (isLoading || !pluginDir) {
            return !status;
        }

        // If requirements not met, disable button.
        if (!hasMetRequirements) {
            return !status;
        }

        // If already installed, disable button.
        switch (type) {
            case 'plugin':
                status = allPlugins.includes(pluginDir);
                break;
            case 'module':
                status = allModules.map(({ slug }) => slug).includes(slug);
                break;
        }

        return status;
    }

    const getInstallLabel = () => {
        let label = '';

        // If no directory, then already installed.
        if (!pluginDir) {
            return _x('Installed', 'plugin', 'wecodeart');
        }

        if (hasUpdate) {
            return __('Update', 'wecodeart');
        }

        switch (type) {
            case 'plugin':
                label = allPlugins.includes(pluginDir) ? _x('Installed', 'plugin', 'wecodeart') : __('Install', 'wecodeart');
                break;
            case 'module':
                label = allModules.map(({ slug }) => slug).includes(slug) ? _x('Installed', 'plugin', 'wecodeart') : __('Install', 'wecodeart');
                break;
        }

        return label;
    }

    const InstallButton = (
        <Button
            className="button d-flex gap-2"
            variant={hasUpdate ? 'tertiary' : 'primary'}
            icon={isLoading && <Spinner style={{ margin: 0 }} />}
            onClick={handleInstall}
            {...{ disabled: getInstallStatus() }}
        >
            {getInstallLabel()}
        </Button>
    );

    return (hasUpdate ? (
        <Tooltip
            text={sprintf(__('New version available: %s', 'wecodeart'), hasUpdate)}
            placement="top"
            position="middle"
        >{InstallButton}</Tooltip>
    ) : InstallButton);
}

export default Install;