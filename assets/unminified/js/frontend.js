/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/frontend/helpers/dom.js":
/*!****************************************!*\
  !*** ./src/js/frontend/helpers/dom.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   findShadowRoot: () => (/* binding */ findShadowRoot),
/* harmony export */   getElement: () => (/* binding */ getElement),
/* harmony export */   getNextActiveElement: () => (/* binding */ getNextActiveElement),
/* harmony export */   getParents: () => (/* binding */ getParents),
/* harmony export */   getTransitionDuration: () => (/* binding */ getTransitionDuration),
/* harmony export */   isDisabled: () => (/* binding */ isDisabled),
/* harmony export */   isElement: () => (/* binding */ isElement),
/* harmony export */   isRTL: () => (/* binding */ isRTL),
/* harmony export */   isVisible: () => (/* binding */ isVisible),
/* harmony export */   reflow: () => (/* binding */ reflow)
/* harmony export */ });
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
const getTransitionDuration = element => {
  if (!element) {
    return 0;
  }

  // Get transition-duration of the element
  let {
    transitionDuration,
    transitionDelay
  } = window.getComputedStyle(element);
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
const reflow = element => {
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


/***/ }),

/***/ "./src/js/frontend/helpers/execute.js":
/*!********************************************!*\
  !*** ./src/js/frontend/helpers/execute.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   execute: () => (/* binding */ execute),
/* harmony export */   executeAfterTransition: () => (/* binding */ executeAfterTransition)
/* harmony export */ });
/**
 * Execute Function
 *
 * @param 	{Function}
 * @param 	{Array}
 * @param 	{Function}
 */
const execute = (possibleCallback, args = [], defaultValue = possibleCallback) => {
  return typeof possibleCallback === 'function' ? possibleCallback(...args) : defaultValue;
};

/**
 * Execute Function after DOMElement transition
 *
 * @param 	{Function}
 * @param 	{DOMElement}
 * @param 	{Boolean}
 */
const executeAfterTransition = (callback, transitionElement, waitForTransition = true, durationPadding = 5) => {
  if (!waitForTransition) {
    execute(callback);
    return;
  }
  const emulatedDuration = wecodeart.fn.getTransitionDuration(transitionElement) + durationPadding;
  let called = false;
  const handler = ({
    target
  }) => {
    if (target !== transitionElement) {
      return;
    }
    called = true;
    transitionElement.removeEventListener('transitionend', handler);
    execute(callback);
  };
  transitionElement.addEventListener('transitionend', handler);
  setTimeout(() => {
    if (!called) {
      transitionElement.dispatchEvent(new Event('transitionend'));
    }
  }, emulatedDuration);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (execute);

/***/ }),

/***/ "./src/js/frontend/helpers/index.js":
/*!******************************************!*\
  !*** ./src/js/frontend/helpers/index.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DefaultAllowlist: () => (/* reexport safe */ _sanitizer__WEBPACK_IMPORTED_MODULE_2__.DefaultAllowlist),
/* harmony export */   camelCase: () => (/* binding */ camelCase),
/* harmony export */   enableDismissTrigger: () => (/* binding */ enableDismissTrigger),
/* harmony export */   execute: () => (/* reexport safe */ _execute__WEBPACK_IMPORTED_MODULE_3__.execute),
/* harmony export */   executeAfterTransition: () => (/* reexport safe */ _execute__WEBPACK_IMPORTED_MODULE_3__.executeAfterTransition),
/* harmony export */   findShadowRoot: () => (/* reexport safe */ _dom__WEBPACK_IMPORTED_MODULE_0__.findShadowRoot),
/* harmony export */   getElement: () => (/* reexport safe */ _dom__WEBPACK_IMPORTED_MODULE_0__.getElement),
/* harmony export */   getNextActiveElement: () => (/* reexport safe */ _dom__WEBPACK_IMPORTED_MODULE_0__.getNextActiveElement),
/* harmony export */   getParents: () => (/* reexport safe */ _dom__WEBPACK_IMPORTED_MODULE_0__.getParents),
/* harmony export */   getTransitionDuration: () => (/* reexport safe */ _dom__WEBPACK_IMPORTED_MODULE_0__.getTransitionDuration),
/* harmony export */   isDisabled: () => (/* reexport safe */ _dom__WEBPACK_IMPORTED_MODULE_0__.isDisabled),
/* harmony export */   isElement: () => (/* reexport safe */ _dom__WEBPACK_IMPORTED_MODULE_0__.isElement),
/* harmony export */   isRTL: () => (/* reexport safe */ _dom__WEBPACK_IMPORTED_MODULE_0__.isRTL),
/* harmony export */   isVisible: () => (/* reexport safe */ _dom__WEBPACK_IMPORTED_MODULE_0__.isVisible),
/* harmony export */   noop: () => (/* binding */ noop),
/* harmony export */   paramsCreate: () => (/* reexport safe */ _params__WEBPACK_IMPORTED_MODULE_1__.paramsCreate),
/* harmony export */   paramsUpdate: () => (/* reexport safe */ _params__WEBPACK_IMPORTED_MODULE_1__.paramsUpdate),
/* harmony export */   parseData: () => (/* reexport safe */ _params__WEBPACK_IMPORTED_MODULE_1__.parseData),
/* harmony export */   reflow: () => (/* reexport safe */ _dom__WEBPACK_IMPORTED_MODULE_0__.reflow),
/* harmony export */   requireJs: () => (/* reexport safe */ _requireJs__WEBPACK_IMPORTED_MODULE_4__["default"]),
/* harmony export */   sanitizeHtml: () => (/* reexport safe */ _sanitizer__WEBPACK_IMPORTED_MODULE_2__.sanitizeHtml),
/* harmony export */   toType: () => (/* binding */ toType),
/* harmony export */   validateConfig: () => (/* reexport safe */ _params__WEBPACK_IMPORTED_MODULE_1__.validateConfig)
/* harmony export */ });
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ "./src/js/frontend/helpers/dom.js");
/* harmony import */ var _params__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./params */ "./src/js/frontend/helpers/params.js");
/* harmony import */ var _sanitizer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sanitizer */ "./src/js/frontend/helpers/sanitizer.js");
/* harmony import */ var _execute__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./execute */ "./src/js/frontend/helpers/execute.js");
/* harmony import */ var _requireJs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./requireJs */ "./src/js/frontend/helpers/requireJs.js");
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
const camelCase = str => {
  return str.replace(/[\W_]/g, '|').split('|').map((part, index) => {
    const isFirstPart = index === 0;
    const capitalizedPart = part.charAt(0).toUpperCase() + part.slice(1);
    return isFirstPart ? part.toLowerCase() : capitalizedPart;
  }).join('');
};
const enableDismissTrigger = (component, method = 'hide') => {
  const {
    Events
  } = wecodeart;
  const clickEvent = `click.dismiss${component.EVENT_KEY}`;
  const name = component.NAME;
  Events.on(document, clickEvent, `[data-wp-close="${name}"]`, function (event) {
    if (['A', 'AREA'].includes(this.tagName)) {
      event.preventDefault();
    }
    if ((0,_dom__WEBPACK_IMPORTED_MODULE_0__.isDisabled)(this)) {
      return;
    }
    const target = this.closest(`.wp-${name}`) || this.closest(`.${name}`);
    const instance = component.getOrCreateInstance(target);

    // Method argument is left, for Alert and only, as it doesn't implement the 'hide' method
    instance[method]();
  });
};
const noop = () => {};

// Exports







/***/ }),

/***/ "./src/js/frontend/helpers/params.js":
/*!*******************************************!*\
  !*** ./src/js/frontend/helpers/params.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   paramsCreate: () => (/* binding */ paramsCreate),
/* harmony export */   paramsUpdate: () => (/* binding */ paramsUpdate),
/* harmony export */   parseData: () => (/* binding */ parseData),
/* harmony export */   validateConfig: () => (/* binding */ validateConfig)
/* harmony export */ });
/**
 * Generate String Params
 *
 * @param   {Object}
 *
 * @return  {string}
 */
const paramsCreate = query => {
  return Object.entries(query).map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`).join('&');
};

/**
 * Update String Params
 *
 * @param  {String} uri The URI to update
 * @param  {String} key The parameter key to update
 * @param  {String} value The new value for the parameter
 *
 * @return {String} The updated URI
 */
const paramsUpdate = (uri, key, value) => {
  const re = new RegExp(`([?&])${key}=.*?(&|$)`, "i");
  const separator = uri.includes('?') ? "&" : "?";
  if (uri.match(re)) {
    return uri.replace(re, `$1${key}=${value}$2`);
  }
  return uri + separator + `${key}=${value}`;
};

/**
 * Parse data attrs
 *
 * @param   {object/string} opts
 *
 * @return  {object/string}
 */
const parseData = opts => {
  if (typeof opts == 'object') {
    return opts;
  } else if (typeof opts == 'string') {
    try {
      return JSON.parse(opts.replace(/'/g, '"').replace(';', ''));
    } catch (e) {
      return {};
    }
  } else {
    return {};
  }
};

/**
 * Validate config
 *
 * @param   {string} NAME
 * @param   {object} Config
 * @param   {object} Types
 *
 * @return  {void}
 */
const validateConfig = (NAME, config, DefaultType) => {
  const {
    fn: {
      isElement,
      toType
    }
  } = wecodeart;
  for (const [property, expectedTypes] of Object.entries(DefaultType)) {
    const value = config[property];
    const valueType = isElement(value) ? 'element' : toType(value);
    if (!new RegExp(expectedTypes).test(valueType)) {
      throw new TypeError(`${NAME.toUpperCase()}: Option "${property}" provided type "${valueType}" but expected type "${expectedTypes}".`);
    }
  }
};

// Exports


/***/ }),

/***/ "./src/js/frontend/helpers/requireJs.js":
/*!**********************************************!*\
  !*** ./src/js/frontend/helpers/requireJs.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Require JS
 *
 * @param 	{String}
 * @param 	{Array}
 * @param 	{Function}
 */
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(bundles, bundleIds, callbackFn) {
  const {
    fn: {
      loadJs
    }
  } = wecodeart;
  bundleIds.forEach(bundleId => !loadJs.isDefined(bundleId) && loadJs(bundles[bundleId], bundleId, {
    async: false
  }));
  loadJs.ready(bundleIds, callbackFn);
}
;

/***/ }),

/***/ "./src/js/frontend/helpers/sanitizer.js":
/*!**********************************************!*\
  !*** ./src/js/frontend/helpers/sanitizer.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DefaultAllowlist: () => (/* binding */ DefaultAllowlist),
/* harmony export */   "default": () => (/* binding */ sanitizeHtml),
/* harmony export */   sanitizeHtml: () => (/* binding */ sanitizeHtml)
/* harmony export */ });
/**
 * A pattern that recognizes Aria attributes.
 */
const PATTERN_ARIA_ATTRIBUTE = /^aria-[\w-]*$/i;

/**
 * A pattern that recognizes URLs that are safe wrt. XSS in URL navigation contexts.
 *
 * Shout-out to Angular https://github.com/angular/angular/blob/15.2.8/packages/core/src/sanitization/url_sanitizer.ts#L38
 */
const PATTERN_SAFE_URL = /^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i;
const DefaultAllowlist = {
  // Global attributes allowed on any supplied element below.
  '*': ['class', 'dir', 'id', 'lang', 'role', PATTERN_ARIA_ATTRIBUTE],
  a: ['target', 'href', 'title', 'rel'],
  button: ['type', 'data-wp-close'],
  area: [],
  b: [],
  br: [],
  col: [],
  code: [],
  dd: [],
  div: [],
  dl: [],
  dt: [],
  em: [],
  hr: [],
  h1: [],
  h2: [],
  h3: [],
  h4: [],
  h5: [],
  h6: [],
  i: [],
  img: ['src', 'srcset', 'alt', 'title', 'width', 'height'],
  li: [],
  ol: [],
  p: [],
  pre: [],
  s: [],
  small: [],
  span: [],
  sub: [],
  sup: [],
  strong: [],
  u: [],
  ul: []
};
const uriAttributes = new Set(['background', 'cite', 'href', 'itemtype', 'longdesc', 'poster', 'src', 'xlink:href']);
const allowedAttribute = (attribute, allowedAttributeList) => {
  const attributeName = attribute.nodeName.toLowerCase();
  if (allowedAttributeList.includes(attributeName)) {
    if (uriAttributes.has(attributeName)) {
      return Boolean(PATTERN_SAFE_URL.test(attribute.nodeValue));
    }
    return true;
  }

  // Check if a regular expression validates the attribute.
  return allowedAttributeList.filter(attributeRegex => attributeRegex instanceof RegExp).some(regex => regex.test(attributeName));
};

// Exports

function sanitizeHtml(unsafeHtml, allowList, sanitizeFunction) {
  if (!unsafeHtml.length) {
    return unsafeHtml;
  }
  if (sanitizeFunction && typeof sanitizeFunction === 'function') {
    return sanitizeFunction(unsafeHtml);
  }
  const domParser = new window.DOMParser();
  const createdDocument = domParser.parseFromString(unsafeHtml, 'text/html');
  const elements = [].concat(...createdDocument.body.querySelectorAll('*'));
  for (const element of elements) {
    const elementName = element.nodeName.toLowerCase();
    if (!Object.keys(allowList).includes(elementName)) {
      element.remove();
      continue;
    }
    const attributeList = [].concat(...element.attributes);
    const allowedAttributes = [].concat(allowList['*'] || [], allowList[elementName] || []);
    for (const attribute of attributeList) {
      if (!allowedAttribute(attribute, allowedAttributes)) {
        element.removeAttribute(attribute.nodeName);
      }
    }
  }
  return createdDocument.body.innerHTML;
}

/***/ }),

/***/ "./src/js/frontend/plugins/wecodeart-Component.js":
/*!********************************************************!*\
  !*** ./src/js/frontend/plugins/wecodeart-Component.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../helpers */ "./src/js/frontend/helpers/index.js");
/**
 * --------------------------------------------------------------------------
 * Plugin Component
 *
 * @author 	Bican Marian Valeriu
 * @version 1.0.0
 * --------------------------------------------------------------------------
 */

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((function (wecodeart) {
  const {
    Config,
    Data,
    Events,
    version
  } = wecodeart;
  class Component extends Config {
    constructor(element, config) {
      super();
      if (!element) {
        return;
      }
      this._element = element;
      this._config = this._getConfig(config);
      Data.set(this._element, this.constructor.DATA_KEY, this);
    }

    // Public
    dispose() {
      Data.remove(this._element, this.constructor.DATA_KEY);
      Events.off(this._element, this.constructor.EVENT_KEY);
      for (const propertyName of Object.getOwnPropertyNames(this)) {
        this[propertyName] = null;
      }
    }
    _queueCallback(callback, element, isAnimated = true) {
      (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.executeAfterTransition)(callback, element, isAnimated);
    }
    _getConfig(config) {
      config = this._mergeConfigObj(config, this._element);
      config = this._configAfterMerge(config);
      this._typeCheckConfig(config);
      return config;
    }

    // Static
    static getInstance(element) {
      return Data.get(element, this.DATA_KEY);
    }
    static getOrCreateInstance(element, config = {}) {
      return this.getInstance(element) || new this(element, typeof config === 'object' ? config : null);
    }
    static get VERSION() {
      return version;
    }
    static get DATA_KEY() {
      return `wp.${this.NAME}`;
    }
    static get EVENT_KEY() {
      return `.${this.DATA_KEY}`;
    }
    static eventName(name) {
      return `${name}${this.EVENT_KEY}`;
    }

    /**
     * Initializes components
     *
     * @param	{class}	classDef
     * @param	{Element | NodeList | jQuery} els
     * @param	{Object} options
     */
    static init(classDef, els, options) {
      let instances = [];
      if (els instanceof Element) {
        const instance = classDef.getOrCreateInstance(els, options);
        instances.push(instance);
      } else if (!!els && (els.jquery || els instanceof NodeList)) {
        for (let i = 0; i < els.length; i++) {
          instances.push(classDef.getOrCreateInstance(els[i], options));
        }
      }
      return instances;
    }
  }

  /**
   * @static
   * @memberof Component
   */
  wecodeart.Component = Component;
  wecodeart.plugins.Component = Component;
}).apply(undefined, [window.wecodeart]));

/***/ }),

/***/ "./src/js/frontend/plugins/wecodeart-Config.js":
/*!*****************************************************!*\
  !*** ./src/js/frontend/plugins/wecodeart-Config.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers */ "./src/js/frontend/helpers/index.js");
/**
 * --------------------------------------------------------------------------
 * Base Config
 *
 * @author 	Bican Marian Valeriu
 * @version 1.0.0
 * --------------------------------------------------------------------------
 */

const {
  applyFilters
} = wp.hooks;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((function (wecodeart) {
  class Config {
    // Getters
    static get Default() {
      return {};
    }
    static get DefaultType() {
      return {};
    }
    static get NAME() {
      throw new Error('You have to implement the static method "NAME", for each component!');
    }
    _getConfig(config) {
      config = this._mergeConfigObj(config);
      config = this._configAfterMerge(config);
      this._typeCheckConfig(config);
      return config;
    }
    _configAfterMerge(config) {
      return applyFilters('wecodeart.config', config, this.NAME);
    }
    _mergeConfigObj(config, element) {
      const dataConfig = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.isElement)(element) ? (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.parseData)(element.dataset.options) : {}; // try to parse

      const mergedConfig = {
        ...this.constructor.Default,
        // Defaults
        ...(typeof config === 'object' ? config : {}),
        // Init Config
        ...(typeof dataConfig === 'object' ? dataConfig : {}) // DOMElement Config
      };
      return mergedConfig;
    }
    _typeCheckConfig(config, configTypes = this.constructor.DefaultType) {
      return (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.validateConfig)(this.constructor.NAME, config, configTypes);
    }
  }
  wecodeart.Config = Config;
}).apply(undefined, [window.wecodeart]));

/***/ }),

/***/ "./src/js/frontend/plugins/wecodeart-Data.js":
/*!***************************************************!*\
  !*** ./src/js/frontend/plugins/wecodeart-Data.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * --------------------------------------------------------------------------
 * Data Handler
 *
 * @author 	Bican Marian Valeriu
 * @version 1.0.0
 * --------------------------------------------------------------------------
 */
const elementMap = new Map();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((function (wecodeart) {
  const Data = {
    set(element, key, instance) {
      if (!elementMap.has(element)) {
        elementMap.set(element, new Map());
      }
      const instanceMap = elementMap.get(element);

      // make it clear we only want one instance per element
      // can be removed later when multiple key/instances are fine to be used
      if (!instanceMap.has(key) && instanceMap.size !== 0) {
        // eslint-disable-next-line no-console
        console.error(`WeCodeArt doesn't allow more than one instance per element. Bound instance: ${Array.from(instanceMap.keys())[0]}.`);
        return;
      }
      instanceMap.set(key, instance);
    },
    get(element, key) {
      if (elementMap.has(element)) {
        return elementMap.get(element).get(key) || null;
      }
      return null;
    },
    remove(element, key) {
      if (!elementMap.has(element)) {
        return;
      }
      const instanceMap = elementMap.get(element);
      instanceMap.delete(key);

      // free up element references if there are no instances left for an element
      if (instanceMap.size === 0) {
        elementMap.delete(element);
      }
    }
  };
  wecodeart.Data = Data;
}).apply(undefined, [window.wecodeart]));

/***/ }),

/***/ "./src/js/frontend/plugins/wecodeart-Events.js":
/*!*****************************************************!*\
  !*** ./src/js/frontend/plugins/wecodeart-Events.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * --------------------------------------------------------------------------
 * Events Handler
 *
 * @author 	Bican Marian Valeriu
 * @version 1.0.0
 * --------------------------------------------------------------------------
 */
const namespaceRegex = /[^.]*(?=\..*)\.|.*/;
const stripNameRegex = /\..*/;
const stripUidRegex = /::\d+$/;
const eventRegistry = {}; // Events storage
let uidEvent = 1;
const customEvents = {
  mouseenter: 'mouseover',
  mouseleave: 'mouseout'
};
const nativeEvents = new Set(['click', 'dblclick', 'mouseup', 'mousedown', 'contextmenu', 'mousewheel', 'DOMMouseScroll', 'mouseover', 'mouseout', 'mousemove', 'selectstart', 'selectend', 'keydown', 'keypress', 'keyup', 'orientationchange', 'touchstart', 'touchmove', 'touchend', 'touchcancel', 'pointerdown', 'pointermove', 'pointerup', 'pointerleave', 'pointercancel', 'gesturestart', 'gesturechange', 'gestureend', 'focus', 'blur', 'change', 'reset', 'select', 'submit', 'focusin', 'focusout', 'load', 'unload', 'beforeunload', 'resize', 'move', 'DOMContentLoaded', 'readystatechange', 'error', 'abort', 'scroll']);

/**
 * Private methods
 */
function makeEventUid(element, uid) {
  return uid && `${uid}::${uidEvent++}` || element.uidEvent || uidEvent++;
}
function getElementEvents(element) {
  const uid = makeEventUid(element);
  element.uidEvent = uid;
  eventRegistry[uid] = eventRegistry[uid] || {};
  return eventRegistry[uid];
}
function evHandler(element, fn) {
  return function handler(event) {
    hydrateObj(event, {
      delegateTarget: element
    });
    if (handler.oneOff) {
      wecodeart.Events.off(element, event.type, fn);
    }
    return fn.apply(element, [event]);
  };
}
function delegationHandler(element, selector, fn) {
  return function handler(event) {
    const domElements = element.querySelectorAll(selector);
    for (let {
      target
    } = event; target && target !== this; target = target.parentNode) {
      for (const domElement of domElements) {
        if (domElement !== target) {
          continue;
        }
        hydrateObj(event, {
          delegateTarget: target
        });
        if (handler.oneOff) {
          wecodeart.Events.off(element, event.type, selector, fn);
        }
        return fn.apply(target, [event]);
      }
    }
  };
}
function normalizeParameters(originalTypeEvent, handler, delegationFunction) {
  const isDelegated = typeof handler === 'string';
  // TODO: tooltip passes `false` instead of selector, so we need to check
  const callable = isDelegated ? delegationFunction : handler || delegationFunction;
  let typeEvent = getTypeEvent(originalTypeEvent);
  if (!nativeEvents.has(typeEvent)) {
    typeEvent = originalTypeEvent;
  }
  return [isDelegated, callable, typeEvent];
}
function findHandler(events, callable, delegationSelector = null) {
  return Object.values(events).find(event => event.callable === callable && event.delegationSelector === delegationSelector);
}
function addHandler(element, originalTypeEvent, handler, delegationFunction, oneOff) {
  if (typeof originalTypeEvent !== 'string' || !element) {
    return;
  }
  let [isDelegated, callable, typeEvent] = normalizeParameters(originalTypeEvent, handler, delegationFunction);

  // in case of mouseenter or mouseleave wrap the handler within a function that checks for its DOM position
  // this prevents the handler from being dispatched the same way as mouseover or mouseout does
  if (originalTypeEvent in customEvents) {
    const wrapFunction = fn => {
      return function (event) {
        if (!event.relatedTarget || event.relatedTarget !== event.delegateTarget && !event.delegateTarget.contains(event.relatedTarget)) {
          return fn.call(this, event);
        }
      };
    };
    callable = wrapFunction(callable);
  }
  const events = getElementEvents(element);
  const handlers = events[typeEvent] || (events[typeEvent] = {});
  const previousFunction = findHandler(handlers, callable, isDelegated ? handler : null);
  if (previousFunction) {
    previousFunction.oneOff = previousFunction.oneOff && oneOff;
    return;
  }
  const uid = makeEventUid(callable, originalTypeEvent.replace(namespaceRegex, ''));
  const fn = isDelegated ? delegationHandler(element, handler, callable) : evHandler(element, callable);
  fn.delegationSelector = isDelegated ? handler : null;
  fn.callable = callable;
  fn.oneOff = oneOff;
  fn.uidEvent = uid;
  handlers[uid] = fn;
  element.addEventListener(typeEvent, fn, isDelegated);
}
function removeHandler(element, events, typeEvent, handler, delegationSelector) {
  const fn = findHandler(events[typeEvent], handler, delegationSelector);
  if (!fn) {
    return;
  }
  element.removeEventListener(typeEvent, fn, Boolean(delegationSelector));
  delete events[typeEvent][fn.uidEvent];
}
function removeNamespacedHandlers(element, events, typeEvent, namespace) {
  const storeElementEvent = events[typeEvent] || {};
  for (const [handlerKey, event] of Object.entries(storeElementEvent)) {
    if (handlerKey.includes(namespace)) {
      removeHandler(element, events, typeEvent, event.callable, event.delegationSelector);
    }
  }
}
function getTypeEvent(event) {
  // allow to get the native events from namespaced events ('click.bs.button' --> 'click')
  event = event.replace(stripNameRegex, '');
  return customEvents[event] || event;
}
function hydrateObj(obj, meta = {}) {
  for (const [key, value] of Object.entries(meta)) {
    try {
      obj[key] = value;
    } catch {
      Object.defineProperty(obj, key, {
        configurable: true,
        get() {
          return value;
        }
      });
    }
  }
  return obj;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((function (wecodeart) {
  const EventHandler = {
    on(element, event, handler, delegationFunction) {
      addHandler(element, event, handler, delegationFunction, false);
    },
    one(element, event, handler, delegationFunction) {
      addHandler(element, event, handler, delegationFunction, true);
    },
    off(element, originalTypeEvent, handler, delegationFunction) {
      if (typeof originalTypeEvent !== 'string' || !element) {
        return;
      }
      const [isDelegated, callable, typeEvent] = normalizeParameters(originalTypeEvent, handler, delegationFunction);
      const inNamespace = typeEvent !== originalTypeEvent;
      const events = getElementEvents(element);
      const storeElementEvent = events[typeEvent] || {};
      const isNamespace = originalTypeEvent.startsWith('.');
      if (typeof callable !== 'undefined') {
        // Simplest case: handler is passed, remove that listener ONLY.
        if (!Object.keys(storeElementEvent).length) {
          return;
        }
        removeHandler(element, events, typeEvent, callable, isDelegated ? handler : null);
        return;
      }
      if (isNamespace) {
        for (const elementEvent of Object.keys(events)) {
          removeNamespacedHandlers(element, events, elementEvent, originalTypeEvent.slice(1));
        }
      }
      for (const [keyHandlers, event] of Object.entries(storeElementEvent)) {
        const handlerKey = keyHandlers.replace(stripUidRegex, '');
        if (!inNamespace || originalTypeEvent.includes(handlerKey)) {
          removeHandler(element, events, typeEvent, event.callable, event.delegationSelector);
        }
      }
    },
    trigger(element, event, args) {
      if (typeof event !== 'string' || !element) {
        return null;
      }
      const evt = hydrateObj(new Event(event, {
        bubbles: true,
        cancelable: true
      }), args);
      element.dispatchEvent(evt);
      return evt;
    }
  };
  wecodeart.Events = EventHandler;
}).apply(undefined, [window.wecodeart]));

/***/ }),

/***/ "./src/js/frontend/plugins/wecodeart-Scripts.js":
/*!******************************************************!*\
  !*** ./src/js/frontend/plugins/wecodeart-Scripts.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers */ "./src/js/frontend/helpers/index.js");
/**
 * --------------------------------------------------------------------------
 * Javascript Manager
 *
 * @author 	Bican Marian Valeriu
 * @version 1.0.0
 * --------------------------------------------------------------------------
 */

const NAME = 'scripts';
const Default = {
  element: document.body // The element
};
const DefaultType = {
  element: '(element|null)'
};
const {
  doAction,
  applyFilters
} = wp.hooks;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((function (wecodeart) {
  const {
    Config
  } = wecodeart;
  class Scripts extends Config {
    constructor(config) {
      super();
      const {
        routes,
        lazyJs
      } = wecodeart;
      this._config = this._getConfig(config);
      this._routes = routes;
      this._lazyJs = lazyJs;
      this.loaded = [];
      this.doAction = doAction;
      this.applyFilters = applyFilters;
      this.extendedRoutes = Object.keys(routes).filter(k => routes[k]?.extends instanceof Array);
      this.loadEvents();
    }

    // Getters
    static get Default() {
      return Default;
    }
    static get DefaultType() {
      return DefaultType;
    }
    static get NAME() {
      return NAME;
    }

    /**
     * Executes the specified function on a given route
     * @param {string} route - Route name
     * @param {string} [funcName='init'] - Function name to execute
     * @param {Array} args - Arguments to pass to the function
     */
    executeRouteFunction(route, funcName = 'init', args) {
      const routeExists = this._routes[route];
      const funcExists = routeExists && (typeof routeExists[funcName] === 'function' || typeof routeExists[funcName] === 'object');
      if (funcExists) {
        args = this.applyFilters('wecodeart.route', args, route, funcName);
        if (typeof routeExists[funcName] === 'object') {
          const {
            id: bundleIds = [],
            callback = () => {},
            condition = true
          } = routeExists[funcName];
          const conditionMet = typeof condition === 'function' ? condition() !== false : condition;
          const missingBundles = bundleIds.filter(bundle => !Object.keys(this._lazyJs).includes(bundle));
          if (conditionMet) {
            if (missingBundles.length) {
              console.warn(`WeCodeArt JSM - Route "${route}" is missing the lazy bundle(s): ${missingBundles.join(', ')}. Please add them before using.`);
              return;
            }
            (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.requireJs)(this._lazyJs, bundleIds, () => {
              callback(args);
              this.doAction('wecodeart.route', route, funcName, args);
              this.loaded.push(route);
            });
          }
          return;
        }
        routeExists[funcName](args);
        this.doAction('wecodeart.route', route, funcName, args);
        this.loaded.push(route);
      }
    }

    /**
     * Executes all necessary functions for a given route
     * @param {string} route - Route name
     */
    processRoute(route) {
      if (this.loaded.includes(route)) {
        return;
      }
      this.executeRouteFunction(route);
      this.executeRouteFunction(route, 'complete');
      this.executeRouteFunction(route, 'lazy');
    }

    /**
     * Loads and initializes the appropriate routes based on body classes and predefined routes
     */
    loadEvents() {
      this.executeRouteFunction('common');
      const {
        element
      } = this._config;
      element.classList.forEach(cls => {
        const route = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.camelCase)(cls.toLowerCase().replace(/-/g, '_'));
        this.processRoute(route);
        this.extendedRoutes.forEach(extRoute => {
          if (this._routes[extRoute].extends.includes(cls)) {
            this.processRoute(extRoute);
          }
        });
      });
      this.executeRouteFunction('common', 'complete');
      this.executeRouteFunction('common', 'lazy');
    }
  }

  /**
   * @static
   * @memberof JSManager
   */
  wecodeart.Scripts = Scripts;
}).apply(undefined, [window.wecodeart]));

/***/ }),

/***/ "./src/js/frontend/plugins/wecodeart-Scrollbar.js":
/*!********************************************************!*\
  !*** ./src/js/frontend/plugins/wecodeart-Scrollbar.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../helpers */ "./src/js/frontend/helpers/index.js");
/**
 * --------------------------------------------------------------------------
 * Scrollbar Helper
 *
 * @author 	Bican Marian Valeriu
 * @version 1.0.0
 * --------------------------------------------------------------------------
 */


/**
 * Constants
 */
const SELECTOR_FIXED_CONTENT = '.fixed-top, .fixed-bottom, .is-fixed, .sticky-top';
const SELECTOR_STICKY_CONTENT = '.sticky-top';
const PROPERTY_PADDING = 'padding-right';
const PROPERTY_CUSTOM = '--wp--scrollbar-width';
const PROPERTY_MARGIN = 'margin-right';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((function (wecodeart) {
  const {
    Selector
  } = wecodeart;
  class ScrollBar {
    constructor() {
      this._element = document.body;
    }

    // Public
    getWidth() {
      // https://developer.mozilla.org/en-US/docs/Web/API/Window/innerWidth#usage_notes
      const documentWidth = document.documentElement.clientWidth;
      return Math.abs(window.innerWidth - documentWidth);
    }
    hide() {
      const width = this.getWidth();
      this._disableOverFlow();
      // give padding to element to balance the hidden scrollbar width
      this._setElementAttributes(this._element, PROPERTY_PADDING, calculatedValue => calculatedValue + width);
      // trick: We adjust positive paddingRight and negative marginRight to sticky-top elements to keep showing fullwidth
      this._setElementAttributes(SELECTOR_FIXED_CONTENT, PROPERTY_PADDING, calculatedValue => calculatedValue + width);
      this._setElementAttributes(SELECTOR_STICKY_CONTENT, PROPERTY_MARGIN, calculatedValue => calculatedValue - width);
    }
    reset() {
      this._resetElementAttributes(this._element, 'overflow');
      this._resetElementAttributes(this._element, PROPERTY_PADDING);
      this._resetElementAttributes(this._element, PROPERTY_CUSTOM);
      this._resetElementAttributes(SELECTOR_FIXED_CONTENT, PROPERTY_PADDING);
      this._resetElementAttributes(SELECTOR_STICKY_CONTENT, PROPERTY_MARGIN);
    }
    isOverflowing() {
      return this.getWidth() > 0;
    }

    // Private
    _disableOverFlow() {
      this._saveInitialAttribute(this._element, 'overflow');
      this._element.style.overflow = 'hidden';
    }
    _setElementAttributes(selector, styleProperty, callback) {
      const scrollbarWidth = this.getWidth();
      const manipulationCallBack = element => {
        if (element !== this._element && window.innerWidth > element.clientWidth + scrollbarWidth) {
          return;
        }
        this._saveInitialAttribute(element, styleProperty);
        const calculatedValue = window.getComputedStyle(element).getPropertyValue(styleProperty);
        element.style.setProperty(styleProperty, `${callback(Number.parseFloat(calculatedValue))}px`);
        element.style.setProperty(PROPERTY_CUSTOM, `${callback(Number.parseFloat(calculatedValue))}px`);
      };
      this._applyManipulationCallback(selector, manipulationCallBack);
    }
    _saveInitialAttribute(element, styleProperty) {
      const actualValue = element.style.getPropertyValue(styleProperty);
      if (actualValue) {
        element.setAttribute(`data-wp-${this._normalizeDataKey(styleProperty)}`, actualValue);
      }
    }
    _resetElementAttributes(selector, styleProperty) {
      const manipulationCallBack = element => {
        const value = element.getAttribute(`data-wp-${this._normalizeDataKey(styleProperty)}`);
        // We only want to remove the property if the value is `null`; the value can also be zero
        if (value === null) {
          element.style.removeProperty(styleProperty);
          return;
        }
        element.removeAttribute(`data-wp-${this._normalizeDataKey(styleProperty)}`);
        element.style.setProperty(styleProperty, value);
        element.style.setProperty(PROPERTY_CUSTOM, value);
      };
      this._applyManipulationCallback(selector, manipulationCallBack);
    }
    _applyManipulationCallback(selector, callBack) {
      if ((0,_helpers__WEBPACK_IMPORTED_MODULE_0__.isElement)(selector)) {
        callBack(selector);
        return;
      }
      for (const sel of Selector.find(selector, this._element)) {
        callBack(sel);
      }
    }
    _normalizeDataKey(key) {
      return key.replace(/[A-Z]/g, chr => `-${chr.toLowerCase()}`);
    }
  }
  wecodeart.ScrollBar = ScrollBar;
}).apply(undefined, [window.wecodeart]));

/***/ }),

/***/ "./src/js/frontend/plugins/wecodeart-Selector.js":
/*!*******************************************************!*\
  !*** ./src/js/frontend/plugins/wecodeart-Selector.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../helpers */ "./src/js/frontend/helpers/index.js");
/**
 * --------------------------------------------------------------------------
 * Selector Engine
 *
 * @author 	Bican Marian Valeriu
 * @version 1.0.0
 * --------------------------------------------------------------------------
 */

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((function (wecodeart) {
  const Selector = {
    find(selector, element = document.documentElement) {
      return [].concat(...Element.prototype.querySelectorAll.call(element, selector));
    },
    findOne(selector, element = document.documentElement) {
      return Element.prototype.querySelector.call(element, selector);
    },
    children(element, selector) {
      return [].concat(...element.children).filter(child => child.matches(selector));
    },
    parents(element, selector) {
      const parents = [];
      let ancestor = element.parentNode.closest(selector);
      while (ancestor) {
        parents.push(ancestor);
        ancestor = ancestor.parentNode.closest(selector);
      }
      return parents;
    },
    prev(element, selector) {
      let previous = element.previousElementSibling;
      while (previous) {
        if (previous.matches(selector)) {
          return [previous];
        }
        previous = previous.previousElementSibling;
      }
      return [];
    },
    next(element, selector) {
      let next = element.nextElementSibling;
      while (next) {
        if (next.matches(selector)) {
          return [next];
        }
        next = next.nextElementSibling;
      }
      return [];
    },
    focusableChildren(element) {
      const focusables = ['a', 'button', 'input', 'textarea', 'select', 'details', '[tabindex]', '[contenteditable="true"]'].map(selector => `${selector}:not([tabindex^="-"])`).join(',');
      return this.find(focusables, element).filter(el => !(0,_helpers__WEBPACK_IMPORTED_MODULE_0__.isDisabled)(el) && (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.isVisible)(el));
    }
  };
  wecodeart.Selector = Selector;
}).apply(undefined, [window.wecodeart]));

/***/ }),

/***/ "./node_modules/loadjs/dist/loadjs.umd.js":
/*!************************************************!*\
  !*** ./node_modules/loadjs/dist/loadjs.umd.js ***!
  \************************************************/
/***/ (function(module, exports) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(root, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
}(this, function() {
/**
 * Global dependencies.
 * @global {Object} document - DOM
 */

var devnull = function() {},
    bundleIdCache = {},
    bundleResultCache = {},
    bundleCallbackQueue = {};


/**
 * Subscribe to bundle load event.
 * @param {string[]} bundleIds - Bundle ids
 * @param {Function} callbackFn - The callback function
 */
function subscribe(bundleIds, callbackFn) {
  // listify
  bundleIds = bundleIds.push ? bundleIds : [bundleIds];

  var depsNotFound = [],
      i = bundleIds.length,
      numWaiting = i,
      fn,
      bundleId,
      r,
      q;

  // define callback function
  fn = function (bundleId, pathsNotFound) {
    if (pathsNotFound.length) depsNotFound.push(bundleId);

    numWaiting--;
    if (!numWaiting) callbackFn(depsNotFound);
  };

  // register callback
  while (i--) {
    bundleId = bundleIds[i];

    // execute callback if in result cache
    r = bundleResultCache[bundleId];
    if (r) {
      fn(bundleId, r);
      continue;
    }

    // add to callback queue
    q = bundleCallbackQueue[bundleId] = bundleCallbackQueue[bundleId] || [];
    q.push(fn);
  }
}


/**
 * Publish bundle load event.
 * @param {string} bundleId - Bundle id
 * @param {string[]} pathsNotFound - List of files not found
 */
function publish(bundleId, pathsNotFound) {
  // exit if id isn't defined
  if (!bundleId) return;

  var q = bundleCallbackQueue[bundleId];

  // cache result
  bundleResultCache[bundleId] = pathsNotFound;

  // exit if queue is empty
  if (!q) return;

  // empty callback queue
  while (q.length) {
    q[0](bundleId, pathsNotFound);
    q.splice(0, 1);
  }
}


/**
 * Execute callbacks.
 * @param {Object or Function} args - The callback args
 * @param {string[]} depsNotFound - List of dependencies not found
 */
function executeCallbacks(args, depsNotFound) {
  // accept function as argument
  if (args.call) args = {success: args};

  // success and error callbacks
  if (depsNotFound.length) (args.error || devnull)(depsNotFound);
  else (args.success || devnull)(args);
}


/**
 * Load individual file.
 * @param {string} path - The file path
 * @param {Function} callbackFn - The callback function
 */
function loadFile(path, callbackFn, args, numTries) {
  var doc = document,
      async = args.async,
      maxTries = (args.numRetries || 0) + 1,
      beforeCallbackFn = args.before || devnull,
      pathname = path.replace(/[\?|#].*$/, ''),
      pathStripped = path.replace(/^(css|img|module|nomodule)!/, ''),
      isLegacyIECss,
      hasModuleSupport,
      e;

  numTries = numTries || 0;

  if (/(^css!|\.css$)/.test(pathname)) {
    // css
    e = doc.createElement('link');
    e.rel = 'stylesheet';
    e.href = pathStripped;

    // tag IE9+
    isLegacyIECss = 'hideFocus' in e;

    // use preload in IE Edge (to detect load errors)
    if (isLegacyIECss && e.relList) {
      isLegacyIECss = 0;
      e.rel = 'preload';
      e.as = 'style';
    }
  } else if (/(^img!|\.(png|gif|jpg|svg|webp)$)/.test(pathname)) {
    // image
    e = doc.createElement('img');
    e.src = pathStripped;    
  } else {
    // javascript
    e = doc.createElement('script');
    e.src = pathStripped;
    e.async = async === undefined ? true : async;

    // handle es modules
    // modern browsers:
    //   module: add to dom with type="module"
    //   nomodule: call success() callback without adding to dom
    // legacy browsers:
    //   module: call success() callback without adding to dom
    //   nomodule: add to dom with default type ("text/javascript")
    hasModuleSupport = 'noModule' in e;
    if (/^module!/.test(pathname)) {
      if (!hasModuleSupport) return callbackFn(path, 'l');
      e.type = "module";
    } else if (/^nomodule!/.test(pathname) && hasModuleSupport) return callbackFn(path, 'l');
  }

  e.onload = e.onerror = e.onbeforeload = function (ev) {
    var result = ev.type[0];

    // treat empty stylesheets as failures to get around lack of onerror
    // support in IE9-11
    if (isLegacyIECss) {
      try {
        if (!e.sheet.cssText.length) result = 'e';
      } catch (x) {
        // sheets objects created from load errors don't allow access to
        // `cssText` (unless error is Code:18 SecurityError)
        if (x.code != 18) result = 'e';
      }
    }

    // handle retries in case of load failure
    if (result == 'e') {
      // increment counter
      numTries += 1;

      // exit function and try again
      if (numTries < maxTries) {
        return loadFile(path, callbackFn, args, numTries);
      }
    } else if (e.rel == 'preload' && e.as == 'style') {
      // activate preloaded stylesheets
      return e.rel = 'stylesheet'; // jshint ignore:line
    }
    
    // execute callback
    callbackFn(path, result, ev.defaultPrevented);
  };

  // add to document (unless callback returns `false`)
  if (beforeCallbackFn(path, e) !== false) doc.head.appendChild(e);
}


/**
 * Load multiple files.
 * @param {string[]} paths - The file paths
 * @param {Function} callbackFn - The callback function
 */
function loadFiles(paths, callbackFn, args) {
  // listify paths
  paths = paths.push ? paths : [paths];

  var numWaiting = paths.length,
      x = numWaiting,
      pathsNotFound = [],
      fn,
      i;

  // define callback function
  fn = function(path, result, defaultPrevented) {
    // handle error
    if (result == 'e') pathsNotFound.push(path);

    // handle beforeload event. If defaultPrevented then that means the load
    // will be blocked (ex. Ghostery/ABP on Safari)
    if (result == 'b') {
      if (defaultPrevented) pathsNotFound.push(path);
      else return;
    }

    numWaiting--;
    if (!numWaiting) callbackFn(pathsNotFound);
  };

  // load scripts
  for (i=0; i < x; i++) loadFile(paths[i], fn, args);
}


/**
 * Initiate script load and register bundle.
 * @param {(string|string[])} paths - The file paths
 * @param {(string|Function|Object)} [arg1] - The (1) bundleId or (2) success
 *   callback or (3) object literal with success/error arguments, numRetries,
 *   etc.
 * @param {(Function|Object)} [arg2] - The (1) success callback or (2) object
 *   literal with success/error arguments, numRetries, etc.
 */
function loadjs(paths, arg1, arg2) {
  var bundleId,
      args;

  // bundleId (if string)
  if (arg1 && arg1.trim) bundleId = arg1;

  // args (default is {})
  args = (bundleId ? arg2 : arg1) || {};

  // throw error if bundle is already defined
  if (bundleId) {
    if (bundleId in bundleIdCache) {
      throw "LoadJS";
    } else {
      bundleIdCache[bundleId] = true;
    }
  }

  function loadFn(resolve, reject) {
    loadFiles(paths, function (pathsNotFound) {
      // execute callbacks
      executeCallbacks(args, pathsNotFound);
      
      // resolve Promise
      if (resolve) {
        executeCallbacks({success: resolve, error: reject}, pathsNotFound);
      }

      // publish bundle load event
      publish(bundleId, pathsNotFound);
    }, args);
  }
  
  if (args.returnPromise) return new Promise(loadFn);
  else loadFn();
}


/**
 * Execute callbacks when dependencies have been satisfied.
 * @param {(string|string[])} deps - List of bundle ids
 * @param {Object} args - success/error arguments
 */
loadjs.ready = function ready(deps, args) {
  // subscribe to bundle load event
  subscribe(deps, function (depsNotFound) {
    // execute callbacks
    executeCallbacks(args, depsNotFound);
  });

  return loadjs;
};


/**
 * Manually satisfy bundle dependencies.
 * @param {string} bundleId - The bundle id
 */
loadjs.done = function done(bundleId) {
  publish(bundleId, []);
};


/**
 * Reset loadjs dependencies statuses
 */
loadjs.reset = function reset() {
  bundleIdCache = {};
  bundleResultCache = {};
  bundleCallbackQueue = {};
};


/**
 * Determine if bundle has already been defined
 * @param String} bundleId - The bundle id
 */
loadjs.isDefined = function isDefined(bundleId) {
  return bundleId in bundleIdCache;
};


// export
return loadjs;

}));


/***/ }),

/***/ "./src/scss/frontend/frontend.scss":
/*!*****************************************!*\
  !*** ./src/scss/frontend/frontend.scss ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";
/*!**********************************!*\
  !*** ./src/js/frontend/index.js ***!
  \**********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var loadjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! loadjs */ "./node_modules/loadjs/dist/loadjs.umd.js");
/* harmony import */ var loadjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(loadjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers */ "./src/js/frontend/helpers/index.js");
/* harmony import */ var _plugins_wecodeart_Data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./plugins/wecodeart-Data */ "./src/js/frontend/plugins/wecodeart-Data.js");
/* harmony import */ var _plugins_wecodeart_Events__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./plugins/wecodeart-Events */ "./src/js/frontend/plugins/wecodeart-Events.js");
/* harmony import */ var _plugins_wecodeart_Selector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./plugins/wecodeart-Selector */ "./src/js/frontend/plugins/wecodeart-Selector.js");
/* harmony import */ var _plugins_wecodeart_Config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./plugins/wecodeart-Config */ "./src/js/frontend/plugins/wecodeart-Config.js");
/* harmony import */ var _plugins_wecodeart_Component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./plugins/wecodeart-Component */ "./src/js/frontend/plugins/wecodeart-Component.js");
/* harmony import */ var _plugins_wecodeart_Scripts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./plugins/wecodeart-Scripts */ "./src/js/frontend/plugins/wecodeart-Scripts.js");
/* harmony import */ var _plugins_wecodeart_Scrollbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./plugins/wecodeart-Scrollbar */ "./src/js/frontend/plugins/wecodeart-Scrollbar.js");
/* harmony import */ var _scss_frontend_frontend_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../../scss/frontend/frontend.scss */ "./src/scss/frontend/frontend.scss");
// Load JS


// Utils


// WeCodeArt








// Styles

const {
  addAction
} = wp.hooks;
addAction('wecodeart.route', 'wecodeart/developer/log', filterLog, 10);
function filterLog(route, func, args) {
  const {
    isDevMode = false
  } = wecodeart;
  if (isDevMode) {
    console.log('Loaded: ', route, '::', func);
    if (args) console.log(args);
  }
}
(function (wecodeart) {
  /**
   * Base WCA Functions
   * @since 3.6
   */
  wecodeart.fn = {
    noop: _helpers__WEBPACK_IMPORTED_MODULE_1__.noop,
    toType: _helpers__WEBPACK_IMPORTED_MODULE_1__.toType,
    isRTL: _helpers__WEBPACK_IMPORTED_MODULE_1__.isRTL,
    isDisabled: _helpers__WEBPACK_IMPORTED_MODULE_1__.isDisabled,
    isVisible: _helpers__WEBPACK_IMPORTED_MODULE_1__.isVisible,
    isElement: _helpers__WEBPACK_IMPORTED_MODULE_1__.isElement,
    getElement: _helpers__WEBPACK_IMPORTED_MODULE_1__.getElement,
    getNextActiveElement: _helpers__WEBPACK_IMPORTED_MODULE_1__.getNextActiveElement,
    getParents: _helpers__WEBPACK_IMPORTED_MODULE_1__.getParents,
    sanitizeHtml: _helpers__WEBPACK_IMPORTED_MODULE_1__.sanitizeHtml,
    findShadowRoot: _helpers__WEBPACK_IMPORTED_MODULE_1__.findShadowRoot,
    reflow: _helpers__WEBPACK_IMPORTED_MODULE_1__.reflow,
    camelCase: _helpers__WEBPACK_IMPORTED_MODULE_1__.camelCase,
    paramsCreate: _helpers__WEBPACK_IMPORTED_MODULE_1__.paramsCreate,
    paramsUpdate: _helpers__WEBPACK_IMPORTED_MODULE_1__.paramsUpdate,
    getOptions: _helpers__WEBPACK_IMPORTED_MODULE_1__.parseData,
    validateConfig: _helpers__WEBPACK_IMPORTED_MODULE_1__.validateConfig,
    execute: _helpers__WEBPACK_IMPORTED_MODULE_1__.execute,
    executeAfterTransition: _helpers__WEBPACK_IMPORTED_MODULE_1__.executeAfterTransition,
    getTransitionDuration: _helpers__WEBPACK_IMPORTED_MODULE_1__.getTransitionDuration,
    loadJs: (loadjs__WEBPACK_IMPORTED_MODULE_0___default()),
    requireJs: _helpers__WEBPACK_IMPORTED_MODULE_1__.requireJs,
    enableDismissTrigger: _helpers__WEBPACK_IMPORTED_MODULE_1__.enableDismissTrigger
  };
  /**
   * @description
   * Setup JS URLs that are lazy loaded from CDN/Theme with IDs to easly load them later
   * without using multiple sources and/or npm packages
   * This helps us to avoid updating multiple files and/or use multiple sources of the same script
   * @see example under common key and below
   */
  wecodeart.lazyJs = {
    // Use for popups
    'sweetalert': ['//unpkg.com/sweetalert2@11/dist/sweetalert2.min.css', '//unpkg.com/sweetalert2@11/dist/sweetalert2.min.js'],
    // Use for lighbox galleries
    'photoswipe': ['//unpkg.com/photoswipe@5/dist/photoswipe-lightbox.esm.min.js', '//unpkg.com/photoswipe@5/dist/photoswipe.esm.min.js', '//unpkg.com/photoswipe@5/dist/photoswipe.css']
  };
  wecodeart.routes = {
    common: {
      init: () => {
        const html = document.documentElement;
        const {
          ScrollBar,
          Selector
        } = wecodeart;
        const handleDocumentScrolled = () => {
          html.classList[window.scrollY > 1 ? 'add' : 'remove']('has-scrolled');
        };
        const handleDocumentScrollbar = () => {
          const isOverflowing = new ScrollBar().isOverflowing();
          html.classList[isOverflowing ? 'add' : 'remove']('has-scrollbar');
        };
        const handleElementOnLoad = () => {
          Selector.find('*[onload]').forEach(el => {
            const onloadAttr = el.getAttribute('onload');
            if (onloadAttr) {
              var func = new Function(onloadAttr);
              func.call(el);
            }
          });
        };
        const bodyJSClass = () => {
          html.classList.remove('no-js');
          html.classList.add('js');
        };
        const skipLink = () => {
          // Handle Skip Links
          let skipLinkTarget = document.querySelector('main'),
            sibling,
            skipLinkTargetID,
            skipLink;

          // Early exit if a skip-link target can't be located.
          if (!skipLinkTarget) {
            return;
          }

          // Get the site wrapper.
          // The skip-link will be injected in the beginning of it.
          sibling = document.querySelector('.wp-site-blocks');

          // Early exit if the root element was not found.
          if (!sibling) {
            return;
          }

          // Get the skip-link target's ID, and generate one if it doesn't exist.
          skipLinkTargetID = skipLinkTarget.id;
          if (!skipLinkTargetID) {
            skipLinkTargetID = 'wp--skip-link--target';
            skipLinkTarget.id = skipLinkTargetID;
          }

          // Create the skip link.
          skipLink = document.createElement('a');
          skipLink.classList.add('skip-link', 'screen-reader-text');
          skipLink.href = '#' + skipLinkTargetID;
          skipLink.innerHTML = wecodeart?.locale?.skipLink;

          // Inject the skip link.
          sibling.parentElement.insertBefore(skipLink, sibling);
        };
        bodyJSClass();
        handleDocumentScrollbar();
        handleElementOnLoad();
        skipLink();
        window.onresize = handleDocumentScrollbar;
        window.onscroll = handleDocumentScrolled;
      }
    }
  };
}).apply(undefined, [window.wecodeart]);
})();

/******/ })()
;
//# sourceMappingURL=frontend.js.map