const {
    i18n: { __, sprintf },
    element: { RawHTML }
} = wp;

export default () => {
    const fetchNotes = async () => {
        const url1 = '//raw.githubusercontent.com/BicanMarianValeriu/wecodeart-framework/master/package.json';
        const response = await fetch(url1);
        const data = await response.json();
        console.log(data);
    };

    fetchNotes();

    return (
        <>
            <div className="row flex-nowrap">
                <div className="col col-md-8">
                    <div className="wecodeart-started-item">
                        <p>{__('WeCodeArt Framework provides set of tools to extend the way you are building content on WordPress Gutenberg block editor. Designed and integrated to help users easily navigate; and control each block the way it should be.', 'wecodeart')}</p>
                    </div>
                    <div className="wecodeart-started-item">
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
                <div className="col col-md-4">
                    <div className="alert alert-warning" role="alert">
                        <p><strong>Holy guacamole!</strong> You should check in on some of those fields below.</p>
                    </div>
                </div>
            </div>
        </>
    );
};