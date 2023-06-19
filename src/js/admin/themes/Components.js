/**
 * WordPress dependencies
 */
const {
    i18n: {
        __,
        sprintf
    },
    components: {
        Card,
        CardHeader,
        CardBody,
        CardFooter,
        ExternalLink,
        ToggleControl,
        __experimentalHStack: HStack,
        TextControl,
        TextareaControl,
        Modal,
        Spinner,
        Button,
    },
    element: {
        useState,
        useEffect
    }
} = wp;

const { currentUser, adminEmail, themeDirs } = wecodeart;
const { installed = [], installers = [], child = false } = wecodeartThemes || {};

import { getInstallerIcon, getInstallerDir } from './../functions';

const AJAX_ACTION = 'wca_manage_themes';

const Theme = ({
    title = '',
    slug = '',
    description = '',
    more = '',
    source = 'wordpress',
    allThemes,
    setAllThemes,
    activeTheme,
    setActiveTheme,
    handleNotice
}) => {
    const [activeLoading, setActiveLoading] = useState(null);
    const [installLoading, setInstallLoading] = useState(null);

    const themeDir = getInstallerDir({ slug, source });

    const handleActivation = async (value) => {
        setActiveLoading(true);

        const formData = new FormData();
        formData.append('action', AJAX_ACTION);
        formData.append('type', value ? 'activate' : 'deactivate');
        formData.append('data', JSON.stringify({ slug: themeDir }));

        const r = await fetch(ajaxurl, {
            method: 'POST',
            body: formData
        });

        const { data: { message, success = false } } = await r.json();

        if (value && success) {
            setActiveTheme(themeDir);
        } else if (success) {
            setActiveTheme('wecodeart');
        }

        handleNotice(message);
        setActiveLoading(false);
    }

    const handleInstall = async ({ slug, source }) => {
        setInstallLoading(true);

        const formData = new FormData();
        formData.append('action', AJAX_ACTION);
        formData.append('type', 'install');
        formData.append('data', JSON.stringify({ slug, source }));

        const r = await fetch(ajaxurl, {
            method: 'POST',
            body: formData
        });

        const { data: { message = '', success = false } = {} } = await r.json();

        if (success) {
            setAllThemes([...allThemes, themeDir]);
        }

        handleNotice(message);
        setInstallLoading(false);
    }

    const shouldAllowInstall = allThemes.includes(themeDir) || installLoading;

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
                        {allThemes.includes(themeDir) ?
                            <ToggleControl
                                className="m-0"
                                label={activeTheme !== themeDir ? __('Active', 'wecodeart') : __('Activate', 'wecodeart')}
                                checked={activeTheme === themeDir}
                                onChange={handleActivation}
                                {...{ disabled: !allThemes.includes(themeDir) || activeLoading }}
                            /> : __('Not installed.', 'wecodeart')}
                    </div>
                    <Button
                        className="button"
                        isPrimary
                        icon={installLoading && <Spinner />}
                        onClick={() => handleInstall({ slug, source })}
                        {...{ disabled: shouldAllowInstall }}
                    >
                        {installLoading ? '' : allThemes.includes(themeDir) ? __('Installed', 'wecodeart') : __('Install', 'wecodeart')}
                    </Button>
                </HStack>
            </CardFooter>
        </Card>
    )
};

const Submit = ({ handleNotice }) => {
    const cardDecoration = `${themeDirs.uri}/assets/images/appreciation.svg`;

    const [isOpen, setIsOpen] = useState(false);
    const [errors, setErrors] = useState({});
    const [sending, setSending] = useState(false);
    const [details, setDetails] = useState({
        name: currentUser,
        email: adminEmail,
        url: '',
        message: '',
    });

    useEffect(() => {
        validateForm();
        return () => null;
    }, [details]);

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    const isValidEmail = (email) => {
        // Use a regular expression or any other validation logic to check email validity
        // Return true if the email is valid, false otherwise
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    const isValidUrl = (url) => {
        // Use a regular expression or any other validation logic to check URL validity
        // Return true if the URL is valid, false otherwise
        return /^(ftp|http|https):\/\/[^ "]+$/.test(url);
    };

    const validateForm = () => {
        const errors = {};

        if (!details.name) {
            errors.name = __('Please enter your name.', 'wecodeart');
        }

        if (!details.email) {
            errors.email = __('Please enter your email.', 'wecodeart');
        } else if (!isValidEmail(details.email)) {
            errors.email = __('Please enter a valid email address.', 'wecodeart');
        }

        if (!details.url) {
            errors.url = __('Please enter the theme URL.', 'wecodeart');
        } else if (!isValidUrl(details.url)) {
            errors.url = __('Please enter a valid URL.', 'wecodeart');
        }

        setErrors(errors);

        return Object.keys(errors).length === 0;
    };

    const handleSubmit = async () => {
        if (!validateForm()) {
            return;
        }

        setSending(true);

        const formData = new FormData();
        formData.append('action', AJAX_ACTION);
        formData.append('type', 'submit');
        formData.append('data', JSON.stringify(details));

        const r = await fetch(ajaxurl, {
            method: 'POST',
            body: formData
        });

        const { data: { message } } = await r.json();

        handleNotice(message);
        setSending(false);
        setDetails({
            name: currentUser,
            email: adminEmail,
            url: '',
            message: '',
        });
        closeModal();
    }

    return (
        <>
            {isOpen && (
                <Modal title={__('Awesome, let\'s see it!', 'wecodeart')} onRequestClose={closeModal}>
                    <TextControl
                        label={__('Your name', 'wecodeart')}
                        value={details.name}
                        onChange={(name) => setDetails({ ...details, name })}
                        help={errors.name}
                    />
                    <TextControl
                        label={__('Your email', 'wecodeart')}
                        type="email"
                        value={details.email}
                        onChange={(email) => setDetails({ ...details, email })}
                        help={errors.email}
                    />
                    <TextControl
                        label={__('Theme URL', 'wecodeart')}
                        type="url"
                        value={details.url}
                        placeholder={__('Github repository or website demo', 'wecodeart')}
                        onChange={(url) => setDetails({ ...details, url })}
                        help={errors.url}
                    />
                    <TextareaControl
                        label={__('Your message', 'wecodeart')}
                        value={details.message}
                        placeholder={__('Additional info', 'wecodeart')}
                        onChange={(message) => setDetails({ ...details, message })}
                        help={errors.message}
                    />
                    <Button
                        className="button"
                        isPrimary
                        icon={sending && <Spinner />}
                        onClick={handleSubmit}
                        disabled={Object.keys(errors).length}
                        style={{ marginTop: '1rem' }}
                    >
                        {sending ? '' : __('Send', 'wecodeart')}
                    </Button>
                </Modal>
            )}
            <Card className="shadow-none" style={{
                '--wca--card-image': `url(${cardDecoration})`,
                '--wca--card-bg': '#E7E6FE',
                backgroundPosition: 'bottom 55px right 0',
                backgroundSize: 150,
            }}>
                <CardHeader>
                    <h3 className="m-0">{__('Your Theme Here', 'wecodeart')}</h3>
                </CardHeader>
                <CardBody>
                    <p>{__('Have you created an amazing child skin for our theme? We would love to feature it here!', 'wecodeart')}</p>
                </CardBody>
                <CardFooter>
                    <Button
                        variant="secondary"
                        isPrimary
                        onClick={openModal}
                        style={{ display: 'block', width: '100%' }}
                    >
                        {__('Contact us', 'wecodeart')}
                    </Button>
                </CardFooter>
            </Card>
        </>
    )
}

const Manager = ({ createNotice }) => {
    const [activeTheme, setActiveTheme] = useState(localStorage.getItem('activeTheme') || child);
    const [allThemes, setAllThemes] = useState(installed);
    const [hasChanges, setHasChanges] = useState(false);
    const [reloading, setReloading] = useState(false);

    useEffect(() => localStorage.setItem('activeTheme', activeTheme), [activeTheme]);

    const handleNotice = (message) => {
        setReloading(false);
        setHasChanges(true);

        return createNotice('success', message);
    };

    const extraThemeProps = { allThemes, setAllThemes, activeTheme, setActiveTheme, handleNotice };
    const isCoreFramework = !activeTheme || activeTheme && activeTheme === 'wecodeart';
    const hasDefaultTheme = allThemes.includes('wecodeart-developer');

    return (
        <>
            {isCoreFramework ? <div className="components-notice is-warning flex-column align-items-start m-0 mb-3">
                <p>
                    {sprintf(
                        __('It appears that you do not currently have a child theme %s.', 'wecodeart'),
                        hasDefaultTheme ? __('activated', 'wecodeart') : __('installed', 'wecodeart')
                    )}
                    &nbsp;
                    {__('We highly recommend using a child theme for making any modifications to your website.', 'wecodeart')}
                    <br />
                    {sprintf(
                        __('Would you like us to %s our starter theme for you?', 'wecodeart'),
                        hasDefaultTheme ? __('activate', 'wecodeart') : __('install', 'wecodeart')
                    )}
                </p>
                <Button className="button" isPrimary onClick={async () => {
                    setReloading(true);

                    const formData = new FormData();
                    formData.append('action', AJAX_ACTION);
                    formData.append('type', hasDefaultTheme ? 'activate' : 'install');
                    formData.append('data', JSON.stringify({ slug: 'wecodeart-developer', source: 'github' }));

                    const r = await fetch(ajaxurl, {
                        method: 'POST',
                        body: formData
                    });

                    const { data: { message = '', success } = {} } = await r.json();
                    if (success) {
                        setActiveTheme('wecodeart-developer');
                    }

                    handleNotice(message);
                }} {...{ disabled: reloading }} >{__('Yes, please do.', 'wecodeart')}</Button>
            </div> : null}
            <div className="grid grid--installables mb-3">
                {installers.map((props) => <Theme {...{ ...props, ...extraThemeProps }} />)}
                <Submit {...{ handleNotice }} />
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

export { Theme, Submit, Manager };