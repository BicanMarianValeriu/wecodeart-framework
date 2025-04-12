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
 * Return the previous/next element of a list.
 *
 * @param {array} list    The list of elements
 * @param activeElement   The active element
 * @param shouldGetNext   Choose to get next or previous element
 * @param isCycleAllowed
 * @return {Element|elem} The proper element
 */
const getNextActiveElement = (list, activeElement, shouldGetNext, isCycleAllowed) => {
    const listLength = list.length;
    let index = list.indexOf(activeElement);

    // if the element does not exist in the list return an element
    // depending on the direction and if cycle is allowed
    if (index === -1) {
        return !shouldGetNext && isCycleAllowed ? list[listLength - 1] : list[0];
    }

    index += shouldGetNext ? 1 : -1;

    if (isCycleAllowed) {
        index = (index + listLength) % listLength;
    }

    return list[Math.max(0, Math.min(index, listLength - 1))];
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
 * Is visible
 *
 * @param 	{DOMElement} element
 */
const isVisible = element => {
    if (!isElement(element) || element.getClientRects().length === 0) {
        return false;
    }

    const elementIsVisible = getComputedStyle(element).getPropertyValue('visibility') === 'visible';
    // Handle `details` element as its content may falsie appear visible when it is closed
    const closedDetails = element.closest('details:not([open])');

    if (!closedDetails) {
        return elementIsVisible;
    }

    if (closedDetails !== element) {
        const summary = element.closest('summary');
        if (summary && summary.parentNode !== closedDetails) {
            return false;
        }

        if (summary === null) {
            return false;
        }
    }

    return elementIsVisible;
};

/**
 * Is disabled
 *
 * @param 	{DOMElement} element
 */
const isDisabled = element => {
    if (!element || element.nodeType !== Node.ELEMENT_NODE) {
        return true;
    }

    if (element.classList.contains('disabled')) {
        return true;
    }

    if (typeof element.disabled !== 'undefined') {
        return element.disabled;
    }

    return element.hasAttribute('disabled') && element.getAttribute('disabled') !== 'false';
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
 * Is RTL
 */
const isRTL = () => document.documentElement.dir === 'rtl';

// Exports
export { isElement, getElement, getNextActiveElement, getParents, getTransitionDuration, isDisabled, isVisible, findShadowRoot, reflow, isRTL };