/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!****************************************************!*\
  !*** ./src/js/frontend/plugins/Plugin-Template.js ***!
  \****************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _helpers_sanitizer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../helpers/sanitizer */ "./src/js/frontend/helpers/sanitizer.js");
/**
 * --------------------------------------------------------------------------
 * Template Factory
 *
 * @author 	Bican Marian Valeriu
 * @version 1.0.0
 * --------------------------------------------------------------------------
 */


const NAME = 'TemplateFactory';
const Default = {
  allowList: _helpers_sanitizer__WEBPACK_IMPORTED_MODULE_0__.DefaultAllowlist,
  content: {},
  // { selector : text ,  selector2 : text2 , }
  extraClass: '',
  html: false,
  sanitize: true,
  sanitizeFn: null,
  template: '<div></div>'
};
const DefaultType = {
  allowList: 'object',
  content: 'object',
  extraClass: '(string|function)',
  html: 'boolean',
  sanitize: 'boolean',
  sanitizeFn: '(null|function)',
  template: 'string'
};
const DefaultContentType = {
  entry: '(string|element|function|null)',
  selector: '(string|element)'
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((function (wecodeart) {
  const {
    Config,
    fn: {
      sanitizeHtml,
      execute,
      isElement
    }
  } = wecodeart;
  class Template extends Config {
    constructor(config) {
      super();
      this._config = this._getConfig(config);
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
     * Render variables to string
     *
     * @param 	{string} string 	HTML String
     * @param 	{object} variables	Data to be rendered into the string
     *
     * @return 	{string}
     */
    static renderToString(s = '', v = {}) {
      return s.replace(/{{([^}]+)}}/g, (_, k) => {
        var _ref;
        let [path, fallback] = k.trim().split(/\s*\|\s*/); // Split on "|"
        let value = path.split('.').reduce((a, b) => a?.[b], v);
        return (_ref = value !== null && value !== void 0 ? value : fallback) !== null && _ref !== void 0 ? _ref : `{{${k}}}`; // Use fallback or keep original placeholder
      });
    }

    /**
     * Render variables to HTML Object
     *
     * @param 	{string} string 	HTML String
     * @param 	{object} variables	Data to be rendered into the string
     *
     * @return 	{HTMLElement}
     */
    static renderToHTML(string = '', variables = {}, sanitize = true, allowList = _helpers_sanitizer__WEBPACK_IMPORTED_MODULE_0__.DefaultAllowlist) {
      const wrapper = document.createElement('div');
      wrapper.innerHTML = Template.renderToString(string, variables);
      let template = wrapper.firstChild;
      if (sanitize) {
        template = sanitizeHtml(template, allowList);
      }
      return template;
    }

    // Public
    getContent() {
      return Object.values(this._config.content).map(cfg => this._resolvePossibleFunction(cfg)).filter(Boolean);
    }
    hasContent() {
      return this.getContent().length > 0;
    }
    changeContent(content) {
      this._checkContent(content);
      this._config.content = {
        ...this._config.content,
        ...content
      };
      return this;
    }
    toHtml() {
      const templateWrapper = document.createElement('div');
      templateWrapper.innerHTML = this._maybeSanitize(this._config.template);
      for (const [selector, text] of Object.entries(this._config.content)) {
        this._setContent(templateWrapper, text, selector);
      }
      const template = templateWrapper.children[0];
      const extraClass = this._resolvePossibleFunction(this._config.extraClass);
      if (extraClass) {
        template.classList.add(...extraClass.split(' '));
      }
      return template;
    }

    // Private
    _typeCheckConfig(config) {
      super._typeCheckConfig(config);
      this._checkContent(config.content);
    }
    _checkContent(arg) {
      for (const [selector, content] of Object.entries(arg)) {
        super._typeCheckConfig({
          selector,
          entry: content
        }, DefaultContentType);
      }
    }
    _setContent(template, content, selector) {
      const templateElement = Element.prototype.querySelector.call(template, selector);
      if (!templateElement) {
        return;
      }
      content = this._resolvePossibleFunction(content);
      if (!content) {
        templateElement.remove();
        return;
      }
      if (isElement(content)) {
        this._putElementInTemplate(content, templateElement);
        return;
      }
      if (this._config.html) {
        templateElement.innerHTML = this._maybeSanitize(content);
        return;
      }
      templateElement.textContent = content;
    }
    _maybeSanitize(arg) {
      return this._config.sanitize ? sanitizeHtml(arg, this._config.allowList, this._config.sanitizeFn) : arg;
    }
    _resolvePossibleFunction(arg) {
      return execute(arg, [this]);
    }
    _putElementInTemplate(element, templateElement) {
      if (this._config.html) {
        templateElement.innerHTML = '';
        templateElement.append(element);
        return;
      }
      templateElement.textContent = element.textContent;
    }
  }

  /**
   * @static
   * @memberof Template
   */
  wecodeart.Template = Template;

  // const markup = new Template({
  // 	content: {
  // 		'.tooltip-inner': 'My tooltip'
  // 	},
  // 	template: '<div class="tooltip" role="tooltip">' +
  // 		'<div class="tooltip-arrow"></div>' +
  // 		'<div class="tooltip-inner"></div>' +
  // 		'</div>',
  // });

  // const templateString = `<div class="tooltip" role="tooltip">
  // 	<div class="tooltip-header">{{ header }}</div>
  // 	<div class="tooltip-inner">
  // 		<h3>{{ content.name }}</h3>
  // 		<p>{{ content.profesion }}</p>
  // 	</div>
  // </div>`;

  // Template.renderToHTML(templateString, {
  // 	header: 'Header',
  // 	content: {
  // 		name: 'Bican',
  // 		profesion: 'WordPress Developer'
  // 	}
  // });
}).apply(undefined, [window.wecodeart]));
})();

/******/ })()
;
//# sourceMappingURL=template.js.map