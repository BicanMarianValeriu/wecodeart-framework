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
                            <h3 className="m-0">{__('Customizer Options', 'wecodeart')}</h3>
                        </CardHeader>
                        <CardBody>
                            <p>{
                                __('Looking to manage your logo, favicon, set the home or blog page using WP Customizer? You can also add your own custom CSS or explore other plugin settings.', 'wecodeart')
                            }</p>
                            <Button href={adminUrl + '/customize.php'} isPrimary>{
                                __('Legacy Options', 'wecodeart')
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
                            <h3 className="m-0">{__('Join Our Facebook Community!', 'wecodeart')}</h3>
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
                                        <Dashicon size={20} icon="wordpress" />
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