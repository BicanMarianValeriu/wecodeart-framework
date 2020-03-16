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
            name: 'vertical',
            label: __('Vertical', 'wecodeart'),
        },
        {
            name: 'group',
            label: __('Group', 'wecodeart'),
        },
        {
            name: 'group-vertical',
            label: __('Group Vertical', 'wecodeart'),
        }
    ]
};

export default buttons;