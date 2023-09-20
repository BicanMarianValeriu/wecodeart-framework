/**
 * WordPress dependencies
 */
const {
    i18n: { __ },
} = wp;

const groupMarquee = {
    block: 'core/group',
    attributes: {
        name: 'group-marquee',
        title: __('Group: Marquee', 'wecodeart'),
        description: __('Gather blocks in a sliding container.', 'wecodeart'),
        attributes: {
            className: 'is-style-marquee',
            layout: {
                type: 'flex',
                flexWrap: 'nowrap',
                justifyContent: 'center',
                alignItems: 'center'
            }
        },
        innerBlocks: [],
        isDefault: false,
        scope: ['block', 'inserter', 'transform'],
        icon: 'align-right',
    }
};

const socialSharing = {
    block: 'core/social-links',
    attributes: {
        name: 'wecodeart/social-links/sharing',
        title: __('Social Icons: Sharing', 'wecodeart'),
        isActive: ['namespace'],
        description: __('Display icons to share current page on social media sites.', 'wecodeart'),
        attributes: {
            namespace: 'wecodeart/social-links/sharing',
        },
        innerBlocks: [
            ['core/social-link', { service: 'facebook', 'url': '{{currentUrl}}' }],
            ['core/social-link', { service: 'twitter', 'url': '{{currentUrl}}' }],
        ],
        isDefault: false,
        scope: ['block', 'inserter', 'transform'],
    }
};

export { groupMarquee, socialSharing };