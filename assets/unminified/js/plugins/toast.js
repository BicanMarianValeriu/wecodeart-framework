/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/frontend/helpers/dom.js":
/*!****************************************!*\
  !*** ./src/js/frontend/helpers/dom.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   findShadowRoot: () => (/* binding */ findShadowRoot),
/* harmony export */   getElement: () => (/* binding */ getElement),
/* harmony export */   getParents: () => (/* binding */ getParents),
/* harmony export */   getTransitionDuration: () => (/* binding */ getTransitionDuration),
/* harmony export */   hasScrollbar: () => (/* binding */ hasScrollbar),
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
 * Has Scrollbar
 *
 * @param 	{DOMElement} element
 */
const hasScrollbar = el => {
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
  return contentOverflows && overflowShown || alwaysShowScroll;
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

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DefaultAllowlist: () => (/* reexport safe */ _sanitizer__WEBPACK_IMPORTED_MODULE_2__.DefaultAllowlist),
/* harmony export */   camelCase: () => (/* binding */ camelCase),
/* harmony export */   enableDismissTrigger: () => (/* binding */ enableDismissTrigger),
/* harmony export */   execute: () => (/* reexport safe */ _execute__WEBPACK_IMPORTED_MODULE_3__.execute),
/* harmony export */   executeAfterTransition: () => (/* reexport safe */ _execute__WEBPACK_IMPORTED_MODULE_3__.executeAfterTransition),
/* harmony export */   findShadowRoot: () => (/* reexport safe */ _dom__WEBPACK_IMPORTED_MODULE_0__.findShadowRoot),
/* harmony export */   getElement: () => (/* reexport safe */ _dom__WEBPACK_IMPORTED_MODULE_0__.getElement),
/* harmony export */   getParents: () => (/* reexport safe */ _dom__WEBPACK_IMPORTED_MODULE_0__.getParents),
/* harmony export */   getTransitionDuration: () => (/* reexport safe */ _dom__WEBPACK_IMPORTED_MODULE_0__.getTransitionDuration),
/* harmony export */   hasScrollbar: () => (/* reexport safe */ _dom__WEBPACK_IMPORTED_MODULE_0__.hasScrollbar),
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
  Events.on(document, clickEvent, `[data-bs-dismiss="${name}"]`, function (event) {
    if (['A', 'AREA'].includes(this.tagName)) {
      event.preventDefault();
    }
    if ((0,_dom__WEBPACK_IMPORTED_MODULE_0__.isDisabled)(this)) {
      return;
    }
    const target = this.closest(`.${name}`);
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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
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
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!******************************************!*\
  !*** ./src/js/frontend/modules/toast.js ***!
  \******************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../helpers */ "./src/js/frontend/helpers/index.js");
/**
 * --------------------------------------------------------------------------
 * Toast Component
 *
 * @author 	Bican Marian Valeriu
 * @version 1.0.0
 * --------------------------------------------------------------------------
 */
const NAME = 'toast';
const DATA_KEY = 'wp.toast';
const EVENT_KEY = `.${DATA_KEY}`;
const EVENT_MOUSEOVER = `mouseover${EVENT_KEY}`;
const EVENT_MOUSEOUT = `mouseout${EVENT_KEY}`;
const EVENT_FOCUSIN = `focusin${EVENT_KEY}`;
const EVENT_FOCUSOUT = `focusout${EVENT_KEY}`;
const EVENT_HIDE = `hide${EVENT_KEY}`;
const EVENT_HIDDEN = `hidden${EVENT_KEY}`;
const EVENT_SHOW = `show${EVENT_KEY}`;
const EVENT_SHOWN = `shown${EVENT_KEY}`;
const CLASS_NAME_FADE = 'fade';
const CLASS_NAME_HIDE = 'hide'; // @deprecated - kept here only for backwards compatibility
const CLASS_NAME_SHOW = 'show';
const CLASS_NAME_SHOWING = 'showing';
const DefaultType = {
  animation: 'boolean',
  autohide: 'boolean',
  delay: 'number'
};
const Default = {
  animation: true,
  autohide: true,
  delay: 5000
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((function (wecodeart) {
  const {
    Component,
    Events
  } = wecodeart;

  /**
   * Class definition
   */
  class Toast extends Component {
    constructor(element, config) {
      super(element, config);
      this._timeout = null;
      this._hasMouseInteraction = false;
      this._hasKeyboardInteraction = false;
      this._setListeners();
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

    // Public
    show() {
      const showEvent = Events.trigger(this._element, EVENT_SHOW);
      if (showEvent.defaultPrevented) {
        return;
      }
      this._clearTimeout();
      if (this._config.animation) {
        this._element.classList.add(CLASS_NAME_FADE);
      }
      const complete = () => {
        this._element.classList.remove(CLASS_NAME_SHOWING);
        Events.trigger(this._element, EVENT_SHOWN);
        this._maybeScheduleHide();
      };
      this._element.classList.remove(CLASS_NAME_HIDE); // @deprecated

      (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.reflow)(this._element);
      this._element.classList.add(CLASS_NAME_SHOW, CLASS_NAME_SHOWING);
      this._queueCallback(complete, this._element, this._config.animation);
    }
    hide() {
      if (!this.isShown()) {
        return;
      }
      const hideEvent = Events.trigger(this._element, EVENT_HIDE);
      if (hideEvent.defaultPrevented) {
        return;
      }
      const complete = () => {
        this._element.classList.add(CLASS_NAME_HIDE); // @deprecated
        this._element.classList.remove(CLASS_NAME_SHOWING, CLASS_NAME_SHOW);
        Events.trigger(this._element, EVENT_HIDDEN);
      };
      this._element.classList.add(CLASS_NAME_SHOWING);
      this._queueCallback(complete, this._element, this._config.animation);
    }
    dispose() {
      this._clearTimeout();
      if (this.isShown()) {
        this._element.classList.remove(CLASS_NAME_SHOW);
      }
      super.dispose();
    }
    isShown() {
      return this._element.classList.contains(CLASS_NAME_SHOW);
    }

    // Private
    _maybeScheduleHide() {
      if (!this._config.autohide) {
        return;
      }
      if (this._hasMouseInteraction || this._hasKeyboardInteraction) {
        return;
      }
      this._timeout = setTimeout(() => {
        this.hide();
      }, this._config.delay);
    }
    _onInteraction(event, isInteracting) {
      switch (event.type) {
        case 'mouseover':
        case 'mouseout':
          {
            this._hasMouseInteraction = isInteracting;
            break;
          }
        case 'focusin':
        case 'focusout':
          {
            this._hasKeyboardInteraction = isInteracting;
            break;
          }
        default:
          {
            break;
          }
      }
      if (isInteracting) {
        this._clearTimeout();
        return;
      }
      const nextElement = event.relatedTarget;
      if (this._element === nextElement || this._element.contains(nextElement)) {
        return;
      }
      this._maybeScheduleHide();
    }
    _setListeners() {
      Events.on(this._element, EVENT_MOUSEOVER, event => this._onInteraction(event, true));
      Events.on(this._element, EVENT_MOUSEOUT, event => this._onInteraction(event, false));
      Events.on(this._element, EVENT_FOCUSIN, event => this._onInteraction(event, true));
      Events.on(this._element, EVENT_FOCUSOUT, event => this._onInteraction(event, false));
    }
    _clearTimeout() {
      clearTimeout(this._timeout);
      this._timeout = null;
    }
  }

  /**
   * @static
   * @memberof Component
   */
  wecodeart.plugins.Toast = Toast;
  (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.enableDismissTrigger)(Toast);
}).apply(undefined, [window.wecodeart]));
})();

/******/ })()
;
//# sourceMappingURL=toast.js.map