/**
 * WordPress dependencies
 */
const {
    i18n: { __ },
} = wp;

const groupVariationMarquee = {
    block: 'core/group',
    attributes: {
        name: 'group-marquee',
        title: __('Group: Marquee'),
        description: __('Gather blocks in a sliding container.'),
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

export { groupVariationMarquee };