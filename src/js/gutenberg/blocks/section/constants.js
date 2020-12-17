import { mobile, tablet, desktop } from '@wordpress/icons';
/**
 * WordPress dependencies
 */
const {
    i18n: { __ }
} = wp;

export const DEVICE_MOBILE = 'Mobile';
export const DEVICE_TABLET = 'Tablet';
export const DEVICE_DESKTOP = 'Desktop';

export const getLayouts = () => ([
    { value: DEVICE_MOBILE, label: __('Mobile', 'wecodeart'), icon: mobile },
    { value: DEVICE_TABLET, label: __('Tablet', 'wecodeart'), icon: tablet },
    { value: DEVICE_DESKTOP, label: __('Desktop', 'wecodeart'), icon: desktop },
]);

export const DEVICE_BREAKPOINTS = [
    DEVICE_MOBILE,
    DEVICE_TABLET,
    DEVICE_DESKTOP,
];

export const getGridWidth = device => {
    if (device === DEVICE_TABLET) {
        return 8;
    } else if (device === DEVICE_MOBILE) {
        return 4;
    }

    return 12;
};