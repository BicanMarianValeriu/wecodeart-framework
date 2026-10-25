const {
    i18n: {
        __,
    },
    element: {
        useState,
        useEffect
    },
    data: {
        useSelect,
    },
    components: {
        Spinner,
        Placeholder,
        Dashicon,
        Icon,
        Card,
        CardHeader,
        CardBody,
        Notice,
        Button,
        __experimentalHStack: HStack,
    }
} = wp;

const { adminUrl, themeDirs } = wecodeart;

export default () => {
    const {
        isRequesting,
        request,
    } = useSelect(select => {
        const { getEntityRecord } = select('core');
        const { isResolving } = select('core/data');

        return {
            isRequesting: isResolving('core', 'getEntityRecord', ['wecodeart', 'notifications']),
            request: getEntityRecord('wecodeart', 'notifications'),
        };
    });

    const [notes, setNotes] = useState([]);

    useEffect(() => {
        if (!isRequesting && request) {
            const { items = [] } = request
            setNotes(items);
        }
    }, [isRequesting]);

    const joinFBImage = `${themeDirs.uri}/assets/images/join-fb.svg`;
    const getInTouchImage = `${themeDirs.uri}/assets/images/connect.svg`;

    return (
        <div className="grid grid--layout">
            <div className="grid__main">
                <Card className="my-3 shadow-none">
                    <CardBody>{
                        __('WeCodeArt Framework provides set of tools to extend the way you are building content on WordPress Gutenberg block editor. Designed and integrated to help users easily navigate; and control each block the way it should be.', 'wecodeart')
                    }</CardBody>
                </Card>
                <div className="grid grid--cards">
                    <Card className="m-0 shadow-none">
                        <CardHeader>
                            <h3 className="m-0">{__('Need Support?', 'wecodeart')}</h3>
                        </CardHeader>
                        <CardBody>
                            <p>{
                                __('Whether you need assistance, wish to report a bug, or have a new feature request, please create a topic in the support forum on WordPress.org.', 'wecodeart')
                            }</p>
                            <Button href="https://wordpress.org/support/theme/wecodeart/" isPrimary target="_blank">{
                                __('Support Forum', 'wecodeart')
                            }</Button>
                        </CardBody>
                    </Card>
                    <Card className="m-0 shadow-none">
                        <CardHeader>
                            <h3 className="m-0">{__('Rate Us Five!', 'wecodeart')}</h3>
                        </CardHeader>
                        <CardBody>
                            <p>{
                                __('If you like this theme please give it a 5-star rating. This would boost my motivation and help other users make a comfortable decision while choosing us.', 'wecodeart')
                            }</p>
                            <Button href="//wordpress.org/support/theme/wecodeart/reviews/?filter=5#new-post" isPrimary target="_blank">{
                                __('Ok, you deserve it', 'wecodeart')
                            }</Button>
                        </CardBody>
                    </Card>
                    <Card className="m-0 shadow-none" style={{
                        '--wca--card-image': `url(${joinFBImage})`,
                        '--wca--card-bg': '#D5EAFF',
                    }}>
                        <CardHeader>
                            <h3 className="m-0">{__('Join Our Facebook Community', 'wecodeart')}</h3>
                        </CardHeader>
                        <CardBody>
                            <p>{
                                __('Do join WeCodeArt\'s official Facebook page to share your experience, thoughts, and ideas.', 'wecodeart')
                            }</p>
                            <Button href="https://www.facebook.com/wecodeart/" isPrimary target="_blank">{
                                __('Join Now', 'wecodeart')
                            }</Button>
                        </CardBody>
                    </Card>
                    <Card className="m-0 shadow-none" style={{
                        '--wca--card-image': `url(${getInTouchImage})`,
                        '--wca--card-bg': '#E7E6FE',
                    }}>
                        <CardHeader>
                            <h3 className="m-0">{__('Stay in Touch with Us', 'wecodeart')}</h3>
                        </CardHeader>
                        <CardBody>
                            <p>{
                                __('Stay in touch via our social media channels to receive the latest announcements and updates.', 'wecodeart')
                            }</p>
                            <HStack className="wp-block-social-links">
                                <li className="wp-social-link wp-social-link-github wp-block-social-link my-0 me-2">
                                    <a rel="noopener nofollow" target="_blank" href="https://wordpress.org/themes/wecodeart/">
                                        <Icon size={20} icon={
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 97.75 97.75">
                                                <path d="M69.682 47.319c0-3.81-1.367-6.447-2.539-8.501-1.563-2.539-3.029-4.688-3.029-7.228 0-2.834 2.15-5.471 5.178-5.471.136 0 .268.017.398.024-5.483-5.023-12.789-8.091-20.812-8.091-10.769 0-20.241 5.524-25.753 13.893.723.021 1.405.037 1.984.037 3.224 0 8.214-.392 8.214-.392 1.661-.099 1.857 2.343.198 2.539 0 0-1.67.196-3.527.293l11.222 33.389 6.746-20.229-4.803-13.157c-1.659-.097-3.232-.293-3.232-.293-1.66-.098-1.466-2.637.195-2.539 0 0 5.09.391 8.117.391 3.224 0 8.216-.391 8.216-.391 1.663-.098 1.856 2.342.196 2.539 0 0-1.674.196-3.527.293l11.139 33.133 3.074-10.272c1.332-4.266 2.345-7.329 2.345-9.967m-51.628 1.555c0 12.2 7.091 22.743 17.372 27.739L20.722 36.331c-1.71 3.832-2.668 8.075-2.668 12.543" />
                                                <path d="m49.417 51.57-9.249 26.871c2.762.812 5.682 1.257 8.708 1.257 3.589 0 7.031-.621 10.235-1.748-.084-.132-.158-.271-.221-.425zM64.37 75.516c9.164-5.343 15.327-15.271 15.327-26.641.001-5.359-1.368-10.397-3.776-14.788.134.981.208 2.036.208 3.169 0 3.128-.583 6.644-2.344 11.04z" />
                                                <path d="M48.875 0C21.882 0 0 21.882 0 48.875S21.882 97.75 48.875 97.75 97.75 75.868 97.75 48.875 75.868 0 48.875 0m.001 83.156c-18.902 0-34.281-15.379-34.281-34.282 0-18.902 15.378-34.28 34.281-34.28 18.901 0 34.278 15.378 34.278 34.28 0 18.903-15.377 34.282-34.278 34.282" />
                                            </svg>
                                        } />
                                    </a>
                                </li>
                                <li className="wp-social-link wp-social-link-facebook wp-block-social-link my-0 me-2">
                                    <a rel="noopener nofollow" target="_blank" href="https://www.facebook.com/wecodeart/">
                                        <Icon size={20} icon={<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                                            <path d="M16 8.05A8.03 8.03 0 0 0 8 0C3.58 0 0 3.6 0 8.05A8.04 8.04 0 0 0 6.75 16v-5.62H4.72V8.05h2.03V6.27c0-2.01 1.2-3.13 3.02-3.13.88 0 1.8.16 1.8.16v1.98h-1.02c-.99 0-1.3.62-1.3 1.26v1.5h2.22l-.35 2.34H9.25V16A8.04 8.04 0 0 0 16 8.05z" />
                                        </svg>} />
                                    </a>
                                </li>
                                <li className="wp-social-link wp-social-link-github wp-block-social-link my-0 me-2">
                                    <a rel="noopener nofollow" target="_blank" href="https://github.com/BicanMarianValeriu/wecodeart-framework/">
                                        <Icon size={20} icon={<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                                            <path d="M8 0a8 8 0 0 0-2.53 15.59c.4.07.55-.17.55-.38l-.01-1.49c-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82a7.42 7.42 0 0 1 4 0c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48l-.01 2.2c0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8a8 8 0 0 0-8-8z" />
                                        </svg>} />
                                    </a>
                                </li>
                            </HStack>
                        </CardBody>
                    </Card>
                </div>
            </div>
            <div className="grid__side bg-white rounded-bottom">
                <Card className="shadow-none">
                    <CardHeader>
                        <h2>{__('What`s next?', 'wecodeart')}</h2>
                        <span className="badge rounded-pill bg-dark">{__('Developer news', 'wecodeart')}</span>
                    </CardHeader>
                    <CardBody>
                        {isRequesting ? (
                            <Placeholder {...{
                                className: 'my-4',
                                icon: <Spinner />,
                                label: __('Loading', 'wecodeart'),
                                instructions: __('Please wait, loading notifications...', 'wecodeart')
                            }} />
                        ) : notes.map(({ title, content, type = 'success' }) => {
                            return (
                                <Notice className="mx-0 my-4 shadow-sm" type={type} isDismissible={false}>
                                    <h3>{title}</h3>
                                    <p dangerouslySetInnerHTML={{ __html: content }} />
                                </Notice>
                            );
                        })}
                    </CardBody>
                </Card>
            </div>
        </div>
    );
};