const {
    __,
    sprintf
} = wp.i18n;

const {
    RawHTML,
} = wp.element;

export default () =>
    <>
        <div className="wecodeart-started-items-wrapper">
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
    </>;