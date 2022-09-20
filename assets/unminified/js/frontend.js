/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/frontend/helpers/camelCase.js":
/*!**********************************************!*\
  !*** ./src/js/frontend/helpers/camelCase.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * camelCase
 * @param {string} str String that isn't camel-case, e.g., CAMeL_CaSEiS-harD
 * @return {string} String converted to camel-case, e.g., camelCaseIsHard
 */
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (str => `${str.charAt(0).toLowerCase()}${str.replace(/[\W_]/g, '|').split('|').map(part => `${part.charAt(0).toUpperCase()}${part.slice(1)}`).join('').slice(1)}`);

/***/ }),

/***/ "./src/js/frontend/helpers/createParams.js":
/*!*************************************************!*\
  !*** ./src/js/frontend/helpers/createParams.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Generate String Params
 * @param   object 
 * @return  {string}
 */
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(query) {
  let params = '';

  for (let key in query) {
    if (params !== '') params += '&';
    params += key + '=' + encodeURIComponent(query[key]);
  }

  return params;
}
;

/***/ }),

/***/ "./src/js/frontend/helpers/hasScrollbar.js":
/*!*************************************************!*\
  !*** ./src/js/frontend/helpers/hasScrollbar.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ hasScrollbar),
/* harmony export */   "handleBodyJSClass": () => (/* binding */ handleBodyJSClass),
/* harmony export */   "handleDocumentScrollbar": () => (/* binding */ handleDocumentScrollbar),
/* harmony export */   "handleDocumentScrolled": () => (/* binding */ handleDocumentScrolled)
/* harmony export */ });
function hasScrollbar(el) {
  // The Modern solution
  if (typeof window.innerWidth === 'number') return window.innerWidth > document.documentElement.clientWidth; // Elem for quirksmode

  const elem = el || document.documentElement || document.body; // Check overflow style property on body for fauxscrollbars

  let overflowStyle;
  if (typeof elem.currentStyle !== 'undefined') overflowStyle = elem.currentStyle.overflow;
  overflowStyle = overflowStyle || window.getComputedStyle(elem, '').overflow; // Also need to check the Y axis overflow

  let overflowYStyle;
  if (typeof elem.currentStyle !== 'undefined') overflowYStyle = elem.currentStyle.overflowY;
  overflowYStyle = overflowYStyle || window.getComputedStyle(elem, '').overflowY;
  const contentOverflows = elem.scrollHeight > elem.clientHeight;
  const overflowShown = /^(visible|auto)$/.test(overflowStyle) || /^(visible|auto)$/.test(overflowYStyle);
  const alwaysShowScroll = overflowStyle === 'scroll' || overflowYStyle === 'scroll';
  return contentOverflows && overflowShown || alwaysShowScroll;
}
;

const handleDocumentScrolled = () => {
  const html = document.documentElement;
  html.classList[window.scrollY > 1 ? 'add' : 'remove']('has-scrolled');
};

const handleDocumentScrollbar = () => {
  const html = document.documentElement;
  html.classList[hasScrollbar() ? 'add' : 'remove']('has-scrollbar');
};

const handleBodyJSClass = () => {
  const html = document.documentElement;
  html.classList.remove('no-js');
  html.classList.add('js');
};



/***/ }),

/***/ "./src/js/frontend/helpers/parseData.js":
/*!**********************************************!*\
  !*** ./src/js/frontend/helpers/parseData.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ parseData)
/* harmony export */ });
/**
 * Parse data attrs
 * @param   {object/string} opts
 * @return  {object/string}
 */
function parseData(opts) {
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
}
;

/***/ }),

/***/ "./src/js/frontend/helpers/requireJs.js":
/*!**********************************************!*\
  !*** ./src/js/frontend/helpers/requireJs.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ require)
/* harmony export */ });
function require(bundles, bundleIds, callbackFn) {
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

/***/ "./src/js/frontend/helpers/updateParams.js":
/*!*************************************************!*\
  !*** ./src/js/frontend/helpers/updateParams.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Update String Params
 * @param  {object}
 * @return {string}
 */
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((uri, key, value) => {
  const re = new RegExp("([?&])" + key + "=.*?(&|$)", "i");
  const separator = uri.indexOf('?') !== -1 ? "&" : "?";

  if (uri.match(re)) {
    return uri.replace(re, '$1' + key + "=" + value + '$2');
  }

  return uri + separator + key + "=" + value;
});

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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((function (wecodeart) {
  class Component {
    /**
     * Generic constructor for all components
     * @constructor
     * @param {Element} el
     * @param {Object} options
     */
    constructor(classDef, el, options) {
      // Display error if el is valid HTML Element
      if (!(el instanceof Element)) {
        console.error(Error(el + ' is not an HTML Element'));
      } // If exists, destroy and reinitialize in child


      const ins = classDef.getInstance(el);

      if (!!ins) {
        ins.destroy();
      }

      this.el = el;
    }
    /**
     * Initializes components
     * @param {class} classDef
     * @param {Element | NodeList | jQuery} els
     * @param {Object} options
     */


    static init(classDef, els, options) {
      const {
        fn: {
          getOptions
        }
      } = wecodeart;
      let instances = null;

      if (els instanceof Element) {
        instances = new classDef(els, options);
      } else if (!!els && (els.jquery || els instanceof NodeList)) {
        let instancesArr = [];

        for (let i = 0; i < els.length; i++) {
          const mergedOptions = Object.assign({}, options, getOptions(els[i].dataset.options));
          instancesArr.push(new classDef(els[i], mergedOptions));
        }

        instances = instancesArr;
      }

      return instances;
    }

  }
  /**
   * @static
   * @memberof Component
   */


  wecodeart.Component = Component;
}).apply(undefined, [window.wecodeart]));

/***/ }),

/***/ "./src/js/frontend/plugins/wecodeart-JSManager.js":
/*!********************************************************!*\
  !*** ./src/js/frontend/plugins/wecodeart-JSManager.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _helpers_camelCase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/camelCase */ "./src/js/frontend/helpers/camelCase.js");
/* harmony import */ var _helpers_requireJs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/requireJs */ "./src/js/frontend/helpers/requireJs.js");


/**
 * Utility to trigger JS code based on clasname routing
 */

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((function (wecodeart) {
  class JSManager {
    /**
     * Generic constructor 
     * @constructor
     * @param {object} namespace 	| JS Object
     * @param {string} routes		| Key name containing routes 
     */
    constructor(namespace) {
      const {
        routes,
        lazyJs
      } = namespace;
      const {
        doAction,
        applyFilters
      } = wp.hooks;
      this.routes = routes;
      this.lazyJs = lazyJs;
      this.loaded = [];
      this.doAction = doAction;
      this.applyFilters = applyFilters;
      this.extendedR = Object.keys(routes).filter(k => {
        var _routes$k;

        return ((_routes$k = routes[k]) === null || _routes$k === void 0 ? void 0 : _routes$k.extends) && routes[k].extends instanceof Array;
      });
    }
    /**
     * Meant to be run on load
     * @info 	It handles all necessary JS init from routes
     */


    fireRoute(route, funcname, args) {
      let fire;
      funcname = funcname === undefined ? 'init' : funcname;
      fire = route !== '';
      fire = fire && this.routes[route];
      fire = fire && (typeof this.routes[route][funcname] === 'function' || typeof this.routes[route][funcname] === 'object');

      if (fire) {
        args = this.applyFilters('wecodeart.route', args, route, funcname);

        if (typeof this.routes[route][funcname] === 'object') {
          const {
            id: bundleIds = [],
            callback = () => {},
            condition = true
          } = this.routes[route][funcname];
          const condMeet = typeof condition === 'function' ? condition() !== false : condition;
          const missingBundles = [...bundleIds].filter(k => !Object.keys(this.lazyJs).includes(k));

          if (condMeet) {
            if (missingBundles.length) {
              const message = `WeCodeArt JSM - Route "${route}" is missing the lazy bundle(s): ${missingBundles.join(', ')}. Please add them before using.`;
              console.log(message);
              return;
            }

            (0,_helpers_requireJs__WEBPACK_IMPORTED_MODULE_1__["default"])(this.lazyJs, bundleIds, () => {
              callback(args);
              this.doAction('wecodeart.route', route, funcname, args);
              this.loaded.push(route);
            });
          }

          return;
        }

        this.routes[route][funcname](args);
        this.doAction('wecodeart.route', route, funcname, args);
        this.loaded.push(route);
        return;
      }
    }
    /**
     * Meant to be run on load
     * @info 	It handles all necessary JS init from routes
     */


    sequence(route) {
      if (this.loaded.includes(route)) return;
      this.fireRoute(route);
      this.fireRoute(route, 'complete');
      this.fireRoute(route, 'lazy');
    }
    /**
     * Meant to be run on load
     * @info 	It handles all necessary JS init from routes
     */


    loadEvents() {
      this.fireRoute('common');

      for (let cls of document.body.classList) {
        const route = (0,_helpers_camelCase__WEBPACK_IMPORTED_MODULE_0__["default"])(cls.toLowerCase().replace(/-/g, '_')); // Fire Manual Routes

        this.sequence(route); // Additional Extended Routes

        this.extendedR.filter(k => this.routes[k].extends.includes(cls) && this.sequence(k));
      }

      this.fireRoute('common', 'complete');
      this.fireRoute('common', 'lazy');
    }

  }
  /**
   * @static
   * @memberof JSManager
   */


  wecodeart.JSM = JSManager;
}).apply(undefined, [window.wecodeart]));

/***/ }),

/***/ "./src/js/frontend/plugins/wecodeart-Template.js":
/*!*******************************************************!*\
  !*** ./src/js/frontend/plugins/wecodeart-Template.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Template Submit
 * @author 	Bican Marian Valeriu
 * @version 1.0.0
 */
const destruct = function (obj) {
  for (var _len = arguments.length, keys = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    keys[_key - 1] = arguments[_key];
  }

  return keys.reduce((a, c) => ({ ...a,
    [c]: obj[c]
  }), {});
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((function (wecodeart) {
  const {
    Component
  } = wecodeart;
  const pluginDefaults = {};

  class Template extends Component {
    /**
     * Construct Animate instance
     * @constructor
     * @param {Element} el
     * @param {Object} options
     */
    constructor(el, options) {
      super(Template, null, options);
      /**
       * Options for the animation
       * @member YTIframe#options
       */

      this.options = Object.assign({}, Template.defaults, {}, options);
    }

    static get defaults() {
      return pluginDefaults;
    }

    static get registered() {
      return Template._templates;
    }
    /**
     * Add a template
     *
     * @param {string} name Give the template a name
     * @param {function} render Render Function for the template
     */


    static addTemplate(name, render) {
      if (typeof render !== 'function') {
        return console.warn(`Templates: ${name} - The 'render' argument must be a function.`);
      }

      Template._templates.push({
        name,
        render
      });
    }
    /**
     * Render a template
     *
     * @param 	{string} 	name	Template Name
     * @param 	{object} 	data	Data to be rendered into the template
     *
     * @return 	DOM Element
     */


    static render() {
      let name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'sample';
      let data = arguments.length > 1 ? arguments[1] : undefined;

      const child = Template._templates.filter(item => item.name === name).shift();

      if (child) {
        return child.render(data);
      }

      return console.warn(`Template:: There is no registered template with the name of "${name}".`);
    }

    /**
     * Render variables to string
     *
     * @param 	{string} string 	HTML String
     * @param 	{object} variables	Data to be rendered into the string
     *
     * @return 	{string}
     */
    static renderToString() {
      let string = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      let variables = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      let rxp = /{{([^}]+)}}/g,
          curMatch;

      while (curMatch = rxp.exec(string)) {
        const trimd = curMatch[1].trim();
        const found = destruct(variables, trimd);
        if (found[trimd] === undefined) continue;
        string = string.replace(new RegExp(`{{${curMatch[1]}}}`, 'g'), found[trimd]);
      }

      return string;
    }

  }
  /**
   * @static
   * @memberof Template
   */


  Template._templates = [];
  wecodeart.Template = Template;
  /**
   * Add A Basic Sample Template
   */

  Template.addTemplate('sample', data => {
    const postHTML = document.createElement('div');
    const {
      title
    } = data;
    postHTML.classList.add('demo');
    postHTML.innerHTML = title;
    return postHTML;
  });
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
      pathStripped = path.replace(/^(css|img)!/, ''),
      isLegacyIECss,
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
    e.src = path;
    e.async = async === undefined ? true : async;
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
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************************!*\
  !*** ./src/js/frontend/index.js ***!
  \**********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _plugins_wecodeart_Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./plugins/wecodeart-Component */ "./src/js/frontend/plugins/wecodeart-Component.js");
/* harmony import */ var _plugins_wecodeart_JSManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./plugins/wecodeart-JSManager */ "./src/js/frontend/plugins/wecodeart-JSManager.js");
/* harmony import */ var _plugins_wecodeart_Template__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./plugins/wecodeart-Template */ "./src/js/frontend/plugins/wecodeart-Template.js");
/* harmony import */ var loadjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! loadjs */ "./node_modules/loadjs/dist/loadjs.umd.js");
/* harmony import */ var loadjs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(loadjs__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _helpers_requireJs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./helpers/requireJs */ "./src/js/frontend/helpers/requireJs.js");
/* harmony import */ var _helpers_parseData__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./helpers/parseData */ "./src/js/frontend/helpers/parseData.js");
/* harmony import */ var _helpers_createParams__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./helpers/createParams */ "./src/js/frontend/helpers/createParams.js");
/* harmony import */ var _helpers_updateParams__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./helpers/updateParams */ "./src/js/frontend/helpers/updateParams.js");
/* harmony import */ var _helpers_hasScrollbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./helpers/hasScrollbar */ "./src/js/frontend/helpers/hasScrollbar.js");
/* harmony import */ var _scss_frontend_frontend_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../../scss/frontend/frontend.scss */ "./src/scss/frontend/frontend.scss");
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
  wecodeart.plugins = {};
  wecodeart.fn = {
    hasScrollbar: _helpers_hasScrollbar__WEBPACK_IMPORTED_MODULE_8__["default"],
    createParams: _helpers_createParams__WEBPACK_IMPORTED_MODULE_6__["default"],
    updateParams: _helpers_updateParams__WEBPACK_IMPORTED_MODULE_7__["default"],
    getOptions: _helpers_parseData__WEBPACK_IMPORTED_MODULE_5__["default"],
    requireJs: _helpers_requireJs__WEBPACK_IMPORTED_MODULE_4__["default"],
    loadJs: (loadjs__WEBPACK_IMPORTED_MODULE_3___default())
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
    'sweetalert': ['//unpkg.com/sweetalert2@11.4.18/dist/sweetalert2.min.css', '//unpkg.com/sweetalert2@11.4.18/dist/sweetalert2.min.js'],
    // Use for lighbox galleries
    'photoswipe': ['//unpkg.com/photoswipe@5.2.4/dist/photoswipe-lightbox.esm.min.js', '//unpkg.com/photoswipe@5.2.4/dist/photoswipe.esm.min.js', '//unpkg.com/photoswipe@5.2.4/dist/photoswipe.css']
  };
  wecodeart.routes = {
    common: {
      init: () => {
        var _wecodeart$locale;

        (0,_helpers_hasScrollbar__WEBPACK_IMPORTED_MODULE_8__.handleBodyJSClass)();
        (0,_helpers_hasScrollbar__WEBPACK_IMPORTED_MODULE_8__.handleDocumentScrolled)();
        (0,_helpers_hasScrollbar__WEBPACK_IMPORTED_MODULE_8__.handleDocumentScrollbar)();
        window.onresize = _helpers_hasScrollbar__WEBPACK_IMPORTED_MODULE_8__.handleDocumentScrollbar;
        window.onscroll = _helpers_hasScrollbar__WEBPACK_IMPORTED_MODULE_8__.handleDocumentScrolled; // Handle Skip Links

        let skipLinkTarget = document.querySelector('main'),
            sibling,
            skipLinkTargetID,
            skipLink; // Early exit if a skip-link target can't be located.

        if (!skipLinkTarget) {
          return;
        } // Get the site wrapper.
        // The skip-link will be injected in the beginning of it.


        sibling = document.querySelector('.wp-site-blocks'); // Early exit if the root element was not found.

        if (!sibling) {
          return;
        } // Get the skip-link target's ID, and generate one if it doesn't exist.


        skipLinkTargetID = skipLinkTarget.id;

        if (!skipLinkTargetID) {
          skipLinkTargetID = 'wp--skip-link--target';
          skipLinkTarget.id = skipLinkTargetID;
        } // Create the skip link.


        skipLink = document.createElement('a');
        skipLink.classList.add('skip-link', 'screen-reader-text');
        skipLink.href = '#' + skipLinkTargetID;
        skipLink.innerHTML = wecodeart === null || wecodeart === void 0 ? void 0 : (_wecodeart$locale = wecodeart.locale) === null || _wecodeart$locale === void 0 ? void 0 : _wecodeart$locale.skipLink; // Inject the skip link.

        sibling.parentElement.insertBefore(skipLink, sibling);
      }
    }
  };
}).apply(undefined, [window.wecodeart]);
})();

/******/ })()
;
//# sourceMappingURL=frontend.js.map