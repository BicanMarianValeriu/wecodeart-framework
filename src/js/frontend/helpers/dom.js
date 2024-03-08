/**
 * Properly escape IDs selectors to handle weird IDs
 *
 * @param   {String}    selector
 *
 * @returns {String}
 */
const parseSelector = selector => {
    if (selector && window.CSS && window.CSS.escape) {
        // document.querySelector needs escaping to handle IDs (html5+) containing for instance /
        selector = selector.replace(/#([^\s"#']+)/g, (match, id) => `#${CSS.escape(id)}`);
    }

    return selector;
};

/**
 * Is Element
 *
 * @param 	{Object}    object
 */
const isElement = object => {
    if (!object || typeof object !== 'object') {
        return false;
    }

    if (typeof object.jquery !== 'undefined') {
        object = object[0];
    }

    return typeof object.nodeType !== 'undefined';
};

/**
 * Get Element
 *
 * @param 	{Object}    object
 */
const getElement = object => {
    // it's a jQuery object or a node element
    if (isElement(object)) {
        return object.jquery ? object[0] : object;
    }

    if (typeof object === 'string' && object.length > 0) {
        return document.querySelector(parseSelector(object));
    }

    return null;
};

/**
 * Get DOMElement parents
 *
 * @param   {DOMElement}
 * @param   {string} 		
 */
const getParents = (elem, selector) => {
    const parents = [];

    while (elem && elem !== document) {
        if (selector && elem.matches(selector)) {
            parents.push(elem);
        } else if (!selector) {
            parents.push(elem);
        }
        elem = elem.parentNode;
    }

    return parents;
};

/**
 * Get Transition from DOMElement
 *
 * @param 	{DOMElement}    element
 */
const getTransitionDuration = (element) => {
    if (!element) {
        return 0;
    }

    // Get transition-duration of the element
    let { transitionDuration, transitionDelay } = window.getComputedStyle(element);

    const floatTransitionDuration = Number.parseFloat(transitionDuration);
    const floatTransitionDelay = Number.parseFloat(transitionDelay);

    // Return 0 if element or transition duration is not found
    if (!floatTransitionDuration && !floatTransitionDelay) {
        return 0;
    }

    // If multiple durations are defined, take the first
    transitionDuration = transitionDuration.split(',')[0];
    transitionDelay = transitionDelay.split(',')[0];

    return (Number.parseFloat(transitionDuration) + Number.parseFloat(transitionDelay)) * 1000;
};

/**
 * Reflow DOM Element
 *
 * @param 	{DOMElement} element
 */
const reflow = (element) => {
    element.offsetHeight;
};

/**
 * Find DOM Element shadowRoot
 *
 * @param 	{DOMElement} element
 */
const findShadowRoot = element => {
    if (!document.documentElement.attachShadow) {
        return null;
    }

    // Can find the shadow root otherwise it'll return the document
    if (typeof element.getRootNode === 'function') {
        const root = element.getRootNode();
        return root instanceof ShadowRoot ? root : null;
    }

    if (element instanceof ShadowRoot) {
        return element;
    }

    // when we don't find a shadow root
    if (!element.parentNode) {
        return null;
    }

    return findShadowRoot(element.parentNode);
};

/**
 * Has Scrollbar
 *
 * @param 	{DOMElement} element
 */
const hasScrollbar = (el) => {
    // The Modern solution
    if (typeof window.innerWidth === 'number') return window.innerWidth > document.documentElement.clientWidth;

    // Elem for quirksmode
    const elem = el || document.documentElement || document.body;

    // Check overflow style property on body for fauxscrollbars
    let overflowStyle;

    if (typeof elem.currentStyle !== 'undefined') overflowStyle = elem.currentStyle.overflow;

    overflowStyle = overflowStyle || window.getComputedStyle(elem, '').overflow;

    // Also need to check the Y axis overflow
    let overflowYStyle;

    if (typeof elem.currentStyle !== 'undefined') overflowYStyle = elem.currentStyle.overflowY;

    overflowYStyle = overflowYStyle || window.getComputedStyle(elem, '').overflowY;

    const contentOverflows = elem.scrollHeight > elem.clientHeight;
    const overflowShown = /^(visible|auto)$/.test(overflowStyle) || /^(visible|auto)$/.test(overflowYStyle);
    const alwaysShowScroll = overflowStyle === 'scroll' || overflowYStyle === 'scroll';

    return (contentOverflows && overflowShown) || (alwaysShowScroll);
};

/**
 * Is RTL
 */
const isRTL = () => document.documentElement.dir === 'rtl';

// Exports
export { isElement, getElement, getParents, getTransitionDuration, findShadowRoot, reflow, hasScrollbar, isRTL };