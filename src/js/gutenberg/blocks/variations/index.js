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
            layout: {
                type: 'flex',
                flexWrap: 'nowrap',
                orientation: 'marquee',
                justifyContent: 'center',
            }
        },
        innerBlocks: [
            [
                'core/group',
                {
                    lock: {
                        move: true,
                        remove: true
                    },
                    layout: {
                        type: 'flex',
                        flexWrap: 'nowrap',
                        orientation: 'horizontal',
                        justifyContent: 'center',
                    }
                },
            ],
        ],
        isDefault: false,
        scope: ['block', 'inserter', 'transform'],
        isActive: (blockAttributes, variationAttributes) => {
            return blockAttributes.layout?.orientation === variationAttributes.layout?.orientation;
        },
        icon: 'align-right',
    }
};

export { groupVariationMarquee };