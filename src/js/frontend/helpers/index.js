/**
 * --------------------------------------------------------------------------
 * WeCodeArt helpers/index.js
 *
 * @author 	Bican Marian Valeriu
 * @version 1.0.0
 * --------------------------------------------------------------------------
 */
/**
 * Shout-out Angus Croll (https://goo.gl/pxwQGp)
 *
 * @param 	{Object}
 */
const toType = object => {
    if (object === null || object === undefined) {
        return `${object}`;
    }

    return Object.prototype.toString.call(object).match(/\s([a-z]+)/i)[1].toLowerCase();
};

/**
 * camelCase
 *
 * @param 	{string} str String that isn't camel-case, e.g., CAMeL_CaSEiS-harD
 *
 * @return 	{string} String converted to camel-case, e.g., camelCaseIsHard
 */
const camelCase = (str) => {
    return str.replace(/[\W_]/g, '|').split('|').map((part, index) => {
        const isFirstPart = index === 0;
        const capitalizedPart = part.charAt(0).toUpperCase() + part.slice(1);

        return isFirstPart ? part.toLowerCase() : capitalizedPart;
    }).join('');
};

const noop = () => { };

// Exports
export { isElement, getElement, getParents, getTransitionDuration, findShadowRoot, reflow, hasScrollbar, isRTL } from './dom';
export { paramsCreate, paramsUpdate, parseData, validateConfig } from './params';
export { sanitizeHtml, DefaultAllowlist } from './sanitizer';
export { execute, executeAfterTransition } from './execute';
export { default as requireJs } from './requireJs';
export { camelCase, toType, noop };