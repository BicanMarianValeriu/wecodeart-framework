/**
 * WordPress dependencies
 */
const {
    i18n: {
        __,
    },
    components: {
        Button,
        Spinner,
    },
    element: {
        useState,
    }
} = wp;

import { getInstallerDir } from './../../functions';
import { AJAX_ACTIONS } from './../constants';

const Recommended = ({ installers, allPlugins, setAllPlugins, handleNotice, setHasChanges }) => {
    const hasRecommendedPlugins = installers.filter(({ recommended, ...rest }) => recommended && allPlugins.includes(getInstallerDir(rest)) === false);

    if (hasRecommendedPlugins.length === 0) {
        return null;
    }

    const [isLoading, setIsLoading] = useState(false);

    return (
        <div className="components-notice is-warning flex-column align-items-start m-0 mb-3">
            <p>{
                sprintf(
                    __('Your theme has recommended the following plugins: %s. Would you like to install them?', 'wecodeart'),
                    hasRecommendedPlugins.map(({ title }) => title).join(', ')
                )
            }</p>
            <p>
                <Button className="button d-flex gap-2" isPrimary icon={isLoading && <Spinner style={{ margin: 0 }} />} onClick={async () => {
                    setIsLoading(true);

                    const formData = new FormData();
                    formData.append('action', AJAX_ACTIONS.plugin);
                    formData.append('type', 'install');
                    formData.append('plugins', JSON.stringify(hasRecommendedPlugins.map(({ slug, source }) => ({ slug, source }))));

                    const r = await fetch(ajaxurl, {
                        method: 'POST',
                        body: formData
                    });

                    const { data: { message = '', success = [] } = {} } = await r.json();
                    if (success.length) {
                        setAllPlugins([...allPlugins, ...success.map(({ slug, source }) => getInstallerDir({ slug, source }))]);
                        setHasChanges(true);
                    }

                    handleNotice(message);
                    setIsLoading(false);
                }} {...{ disabled: isLoading }} >{isLoading ? __('Installing', 'wecodeart') : __('Install', 'wecodeart')}</Button>
            </p>
        </div>
    );
}

export default Recommended;