/**
 * WP dependencies
 */
const { __ } = wp.i18n;

/**
 * Buttons
 */
const buttons = {
    block: 'core/buttons',
    styles: [
        {
            name: 'default',
            label: __('Default', 'wecodeart'),
            isDefault: true,
        },
        {
            name: 'group',
            label: __('Group', 'wecodeart'),
        },
    ]
};

export default buttons;