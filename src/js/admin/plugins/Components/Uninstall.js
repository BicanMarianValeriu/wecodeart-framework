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

import { AJAX_ACTIONS } from './../constants';

const Uninstall = ({ type, slug, source, destination, allModules, setAllModules, setHasChanges, handleNotice }) => {
    if (type !== 'module' || !allModules.map(({ slug }) => slug).includes(slug)) {
        return null;
    }

    const [isLoading, setIsLoading] = useState(null);

    const handleUninstall = async () => {
        setIsLoading(true);

        const formData = new FormData();
        formData.append('action', AJAX_ACTIONS.module);
        formData.append('type', 'remove');
        formData.append('plugins', JSON.stringify([{ slug, source, destination }]));

        const r = await fetch(ajaxurl, {
            method: 'POST',
            body: formData
        });

        const { data: { message = '', success = [] } = {} } = await r.json();

        if (success.length) {
            const newModules = allModules.filter(({ slug: _slug }) => _slug !== slug);
            setAllModules(newModules);
            setHasChanges(true);
        }

        handleNotice(message);
        setIsLoading(false);
    }

    return (
        <Button
            className="button d-flex gap-2"
            isDestructive
            icon={isLoading && <Spinner style={{ margin: 0 }} />}
            onClick={handleUninstall}
        >
            <span>{isLoading ? __('Uninstalling', 'wecodeart') : __('Remove', 'wecodeart')}</span>
        </Button>
    );
}

export default Uninstall;