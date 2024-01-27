/**
 * WordPress dependencies
 */
const {
    i18n: { __ },
    blocks: { registerBlockType, registerBlockVariation }
} = wp;

const groupMarquee = {
    block: 'core/group',
    attributes: {
        name: 'wecodeart/group/marquee',
        title: __('Group: Marquee', 'wecodeart'),
        description: __('Gather blocks in a sliding container.', 'wecodeart'),
        isActive: ['namespace'],
        attributes: {
            namespace: 'wecodeart/group/marquee',
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
        description: __('Display icons for sharing the current page on social media sites.', 'wecodeart'),
        attributes: {
            namespace: 'wecodeart/social-links/sharing',
            openInNewTab: true,
        },
        innerBlocks: [
            ['core/social-link', { service: 'facebook', 'url': '#' }],
            ['core/social-link', { service: 'twitter', 'url': '#' }],
        ],
        isDefault: false,
        scope: ['block', 'inserter', 'transform'],
    }
};

function registerWCAVariations() {
    [
        groupMarquee,
        socialSharing
    ].forEach(({ block, attributes }) => {
        registerBlockVariation(block, attributes);
    });
}

registerWCAVariations();