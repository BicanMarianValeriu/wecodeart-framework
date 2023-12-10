/**
 * WordPress dependencies
 */
const {
    i18n: {
        __,
        _x
    },
    components: {
        ToggleControl,
    },
    element: {
        useState,
    }
} = wp;

import { AJAX_ACTIONS } from './../constants';

const Activation = ({ type, pluginDir, allPlugins, activePlugins, setActivePlugins, setHasChanges, handleNotice, hasMetRequirements }) => {
    if (type !== 'plugin') {
        return null;
    }

    const [activeLoading, setActiveLoading] = useState(null);

    const handleActivation = async (value) => {
        setActiveLoading(true);

        const formData = new FormData();
        formData.append('action', AJAX_ACTIONS.plugin);
        formData.append('type', value ? 'activate' : 'deactivate');
        formData.append('plugins', JSON.stringify([{ slug: pluginDir }]));

        const r = await fetch(ajaxurl, {
            method: 'POST',
            body: formData
        });

        const { data: { message, success = [] } } = await r.json();

        if (success.length) {
            const newActive = value ? [...activePlugins, pluginDir] : activePlugins.filter(item => item !== pluginDir);
            setActivePlugins(newActive);
            setHasChanges(true);
        }

        handleNotice(message);
        setActiveLoading(false);
    }

    return (
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
    );
}

export default Activation;