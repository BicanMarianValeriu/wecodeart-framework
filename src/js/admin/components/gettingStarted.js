const {
    i18n: { __, sprintf },
    element: { RawHTML, useEffect, useState }
} = wp;

const { adminUrl } = wecodeart;

export default () => {
    const notesUrl = 'https://raw.githubusercontent.com/BicanMarianValeriu/wecodeart-framework/master/notifications.json';
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        (async () => {
            const data = await fetch(notesUrl).then(res => res.json());
            const { items } = data;
            setNotes(items);
        })();
    }, []);

    return (
        <div className="d-flex flex-column flex-md-row flex-md-nowrap">
            <div className="col col-md-7">
                <p>{__('WeCodeArt Framework provides set of tools to extend the way you are building content on WordPress Gutenberg block editor. Designed and integrated to help users easily navigate; and control each block the way it should be.', 'wecodeart')}</p>
                <div className="card-group mb-5">
                    <div className="card">
                        <div className="card-body">
                            <h3 className="card-title">{__('Customizer Options', 'wecodeart')}</h3>
                            <p className="card-text">
                                WeCodeArt Framework uses WP Customizer API to manage its front-end options.
                                Head over there to see the available customizations.
                            </p>
                            <a href={adminUrl + '/customize.php'} class="button button-primary is-primary">{
                                __('View Options', 'wecodeart')
                            }</a>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <h3 className="card-title">{__('Rate Us Five!', 'wecodeart')}</h3>
                            <p className="card-text">
                                If you like this theme please give me a 5 star rating.
                                This would boost my motivation and help other users make a comfortable decision while choosing the WeCodeArt Framework.
                            </p>
                            <a href="//wordpress.org/support/theme/wecodeart/reviews/?filter=5#new-post" class="button button-primary is-primary" target="_blank">{
                                __('Ok, you deserve it', 'wecodeart')
                            }</a>
                        </div>
                    </div>
                </div>
                <div className="alert alert-warning">
                    <RawHTML>
                        {sprintf(
                            __('If you have any questions or suggestion, let us know through our %1$sFacebook community %3$s. Also, %2$ssubscribe to our newsletter%3$s if you want to stay up to date with what\'s new and upcoming features.', 'wecodeart'),
                            '<a href="https://www.facebook.com/wecodeart" target="_blank">',
                            '<a href="https://www.wecodeart.com/" target="_blank">',
                            '</a>'
                        )}
                    </RawHTML>
                </div>
            </div>
            <div className="col col-md-4 offset-md-1">
                <h2 className="d-flex justify-content-between">
                    <span>{__('What`s next?', 'wecodeart')}</span>
                    <span class="badge rounded-pill bg-dark">{__('Developer Diaries', 'wecodeart')}</span>
                </h2>
                {notes.map(({ title, content, type = 'info' }) => {
                    return (
                        <div className={`alert alert-${type}`} role="alert">
                            <h3>{title}</h3>
                            <p>{content}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};