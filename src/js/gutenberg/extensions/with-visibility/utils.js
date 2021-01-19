const { pick } = lodash;

const omit = (arr, keys) => arr.filter(key => !keys.includes(key));

const getVisibilityClasses = (attributes) => {
    const { wecodeart = {} } = attributes;

    const devices = pick(wecodeart, ['mobile', 'tablet', 'desktop']);
    const allHidden = Object.keys(devices).every((k) => !devices[k]);
    
    let classNames = [
        { [wecodeart.id]: wecodeart?.id },
    ];

    if (allHidden) {
        classNames = [...classNames, 'd-none'];
        return classNames;
    }

    if (!wecodeart?.mobile) {
        classNames = [...classNames, ...['d-none', 'd-md-block']];
    }

    if (!wecodeart?.tablet) {
        classNames = [...omit(classNames, ['d-md-block']), ...['d-md-none', 'd-lg-block']];
        if (classNames.includes('d-none')) {
            classNames = [...omit(classNames, ['d-md-none'])];
        }
    }

    if (!wecodeart?.desktop) {
        classNames = [...omit(classNames, ['d-lg-block']), 'd-lg-none'];
        if (classNames.includes('d-md-none')) {
            classNames = [...omit(classNames, ['d-lg-none'])];
        }
    }

    return classNames;
};

export { getVisibilityClasses };