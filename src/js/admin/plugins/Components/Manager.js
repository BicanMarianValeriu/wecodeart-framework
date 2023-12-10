/**
 * WordPress dependencies
 */
const {
    i18n: {
        __,
    },
    components: {
        Spinner,
        Button,
    },
    element: {
        useState,
    }
} = wp;

import { Recommended, Plugin } from './';

const Manager = ({
    createNotice,
    installers,
    activePlugins,
    setActivePlugins,
    allPlugins,
    setAllPlugins,
    allModules,
    setAllModules,
    hasChanges,
    setHasChanges,
}) => {
    const [reloading, setReloading] = useState(false);

    const handleNotice = (message) => {
        setReloading(false);

        return createNotice('success', message);
    };

    const extraPluginProps = {
        activePlugins,
        setActivePlugins,
        allPlugins,
        setAllPlugins,
        allModules,
        setAllModules,
        handleNotice,
        setHasChanges
    };

    return (
        <>
            <Recommended {...{ installers, allPlugins, setAllPlugins, handleNotice, setHasChanges }} />
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

export default Manager;