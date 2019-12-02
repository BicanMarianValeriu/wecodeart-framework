const { findIndex } = lodash;

const getVisibilityClasses = (attributes) => {
    const { wecodeart } = attributes;
    let classNames = [
        { [wecodeart.id]: typeof wecodeart.id !== 'undefined' },
    ];

    if (typeof wecodeart.mobile !== 'undefined' && !wecodeart.mobile) {
        classNames = [...classNames, ...['d-none', 'd-md-block']];
    }

    if (typeof wecodeart.tablet !== 'undefined' && !wecodeart.tablet) {
        let index = findIndex(classNames, 'd-md-block');
        classNames.splice(index, 1);
        classNames = [...classNames, ...['d-md-none', 'd-lg-block']];
    }

    if (typeof wecodeart.desktop !== 'undefined' && !wecodeart.desktop) {
        let index = findIndex(classNames, 'd-lg-block');
        classNames.splice(index, 1);
        classNames = [...classNames, 'd-lg-none'];
    }

    return classNames;
};

export { getVisibilityClasses };