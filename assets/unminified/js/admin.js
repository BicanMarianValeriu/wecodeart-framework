/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/wecodeart/wp-content/themes/wecodeart/assets/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/admin/admin.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayLikeToArray.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

module.exports = _arrayLikeToArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithHoles.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js");

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return arrayLikeToArray(arr);
}

module.exports = _arrayWithoutHoles;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/asyncToGenerator.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

module.exports = _asyncToGenerator;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArray.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArray.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

module.exports = _iterableToArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

module.exports = _iterableToArrayLimit;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableRest.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableRest.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableRest;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableSpread.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableSpread;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/objectWithoutProperties.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var objectWithoutPropertiesLoose = __webpack_require__(/*! ./objectWithoutPropertiesLoose.js */ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js");

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = objectWithoutPropertiesLoose(source, excluded);
  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

module.exports = _objectWithoutProperties;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

module.exports = _objectWithoutPropertiesLoose;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/slicedToArray.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/slicedToArray.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(/*! ./arrayWithHoles.js */ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js");

var iterableToArrayLimit = __webpack_require__(/*! ./iterableToArrayLimit.js */ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js");

var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js");

var nonIterableRest = __webpack_require__(/*! ./nonIterableRest.js */ "./node_modules/@babel/runtime/helpers/nonIterableRest.js");

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/toConsumableArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toConsumableArray.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(/*! ./arrayWithoutHoles.js */ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js");

var iterableToArray = __webpack_require__(/*! ./iterableToArray.js */ "./node_modules/@babel/runtime/helpers/iterableToArray.js");

var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js");

var nonIterableSpread = __webpack_require__(/*! ./nonIterableSpread.js */ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js");

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}

module.exports = _unsupportedIterableToArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./src/js/admin/admin.js":
/*!*******************************!*\
  !*** ./src/js/admin/admin.js ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./settings */ "./src/js/admin/settings/index.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components */ "./src/js/admin/components/index.js");
/* harmony import */ var _scss_admin_admin_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../scss/admin/admin.scss */ "./src/scss/admin/admin.scss");
/* harmony import */ var _scss_admin_admin_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_scss_admin_admin_scss__WEBPACK_IMPORTED_MODULE_6__);





function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * WordPress dependencies
 */
var _wp = wp,
    __ = _wp.i18n.__,
    registerCoreBlocks = _wp.blockLibrary.registerCoreBlocks,
    applyFilters = _wp.hooks.applyFilters,
    _wp$data = _wp.data,
    useSelect = _wp$data.useSelect,
    useDispatch = _wp$data.useDispatch,
    dispatch = _wp$data.dispatch,
    _wp$element = _wp.element,
    useEffect = _wp$element.useEffect,
    useState = _wp$element.useState,
    render = _wp$element.render,
    _wp$components = _wp.components,
    TabPanel = _wp$components.TabPanel,
    Panel = _wp$components.Panel,
    PanelBody = _wp$components.PanelBody,
    PanelRow = _wp$components.PanelRow;
/* Settings */





var WeCodeArt = function WeCodeArt() {
  var _wecodeart = wecodeart,
      currentUser = _wecodeart.currentUser,
      version = _wecodeart.version,
      jsonSettings = _wecodeart.editorSettings;

  var _useDispatch = useDispatch('core/notices'),
      coreCreateNotice = _useDispatch.createNotice;

  var createNotice = function createNotice(type, desc, opts) {
    return coreCreateNotice(type, desc, _objectSpread({
      isDismissible: true,
      type: 'snackbar'
    }, opts));
  };

  var _useSelect = useSelect(function (select) {
    var _select = select('core'),
        getEntityRecord = _select.getEntityRecord;

    var _select2 = select('core/data'),
        isResolving = _select2.isResolving;

    var _dispatch = dispatch('core'),
        saveEntityRecord = _dispatch.saveEntityRecord;

    var isRequesting = isResolving('core', 'getEntityRecord', ['wecodeart', 'settings']);
    return {
      isRequesting: isRequesting,
      saveEntityRecord: saveEntityRecord,
      wecodeartSettings: getEntityRecord('wecodeart', 'settings'),
      editorSettings: select('core/editor').getEditorSettings()
    };
  }),
      editorSettings = _useSelect.editorSettings,
      wecodeartSettings = _useSelect.wecodeartSettings,
      saveEntityRecord = _useSelect.saveEntityRecord,
      isRequesting = _useSelect.isRequesting;

  var getSettings = editorSettings.wecodeart;

  if (typeof getSettings === 'undefined' && typeof jsonSettings !== 'undefined') {
    getSettings = JSON.parse(jsonSettings).settings;
  }

  var tabProps = {
    saveEntityRecord: saveEntityRecord,
    isRequesting: isRequesting,
    wecodeartSettings: wecodeartSettings,
    createNotice: createNotice
  };
  var tabs = [{
    name: 'wca-getting-started',
    title: __('Getting Started', 'wecodeart'),
    className: 'wca-getting-started',
    render: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(_components__WEBPACK_IMPORTED_MODULE_5__["GettingStarted"], null)
  }];
  var extensions = applyFilters('wecodeart.admin.extensions', []);

  if (extensions.length) {
    tabs = [].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(tabs), [{
      name: 'wca-extensions',
      title: __('Extensions', 'wecodeart'),
      className: 'wca-extensions',
      render: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(_components__WEBPACK_IMPORTED_MODULE_5__["Extensions"], _objectSpread(_objectSpread({}, tabProps), {}, {
        extensions: extensions
      }))
    }]);
  }

  tabs = [].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(tabs), [// {
  // 	name: 'wca-license',
  // 	title: __('License(s)', 'wecodeart'),
  // 	className: 'wca-license',
  // 	render: <License {...tabProps} />
  // },
  {
    name: 'wca-customcss',
    title: __('Custom CSS', 'wecodeart'),
    className: 'wca-customcss',
    render: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(_settings__WEBPACK_IMPORTED_MODULE_4__["CustomCSS"], tabProps)
  }]);

  var _useState = useState(''),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),
      initialTab = _useState2[0],
      setInitialTab = _useState2[1];

  useEffect(function () {
    var _document$location$ha = document.location.hash,
        hash = _document$location$ha === void 0 ? '' : _document$location$ha;
    setInitialTab(hash.replace('#', ''));
  }, [wecodeartSettings]);

  var MainPanel = function MainPanel() {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(Panel, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(PanelBody, {
      opened: true
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("div", {
      className: "components-panel__header"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("p", {
      className: "wecodeart-panel__header-hint"
    }, __('Appearance → WeCodeArt', 'wecodeart')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("h2", null, __('Getting Started with', 'wecodeart'), " ", Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("strong", null, "WeCodeArt Framework"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("code", null, version)), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("p", null, __("Congratulations ".concat(currentUser, "! You've just unlocked more Gutenberg block editor tools for easier editing and better workflow."), 'wecodeart'))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(PanelRow, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(TabPanel, {
      className: "wecodeart-tab-panel",
      activeClass: "active-tab",
      initialTabName: initialTab,
      onSelect: function onSelect(tab) {
        return document.location.hash = tab;
      },
      tabs: tabs
    }, function (_ref) {
      var render = _ref.render;
      return render;
    }))));
  };

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(MainPanel, null), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(_components__WEBPACK_IMPORTED_MODULE_5__["Notices"], null));
};

wp.domReady(function () {
  // Expose Settings
  dispatch('core').addEntities([{
    name: 'settings',
    // route name
    kind: 'core',
    // namespace
    baseURL: '/wp/v2/settings' // API path without /wp-json

  }, {
    name: 'settings',
    // route name
    kind: 'wecodeart',
    // namespace
    baseURL: '/wecodeart/v1/settings' // API path without /wp-json

  }]); // Register Core Blocks

  registerCoreBlocks(); // Render Admin

  render(Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(WeCodeArt, null), document.getElementById('wecodeart'));
});

/***/ }),

/***/ "./src/js/admin/components/extensions.js":
/*!***********************************************!*\
  !*** ./src/js/admin/components/extensions.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Extensions; });
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);



/**
 * WordPress dependencies
 */
var TabPanel = wp.components.TabPanel;
function Extensions(props) {
  var tabs = props.extensions,
      tabProps = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0___default()(props, ["extensions"]);

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(TabPanel, {
    className: "wecodeart-tab-panel wecodeart-tab-panel--vertical",
    activeClass: "active-tab",
    orientation: "vertical",
    tabs: tabs
  }, function (tab) {
    return tab.render && typeof tab.render === 'function' && tab.render(tabProps);
  });
}

/***/ }),

/***/ "./src/js/admin/components/gettingStarted.js":
/*!***************************************************!*\
  !*** ./src/js/admin/components/gettingStarted.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__);




var _wp = wp,
    _wp$i18n = _wp.i18n,
    __ = _wp$i18n.__,
    sprintf = _wp$i18n.sprintf,
    _wp$element = _wp.element,
    RawHTML = _wp$element.RawHTML,
    useEffect = _wp$element.useEffect,
    useState = _wp$element.useState;
var _wecodeart = wecodeart,
    adminUrl = _wecodeart.adminUrl;
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var notesUrl = '//raw.githubusercontent.com/BicanMarianValeriu/wecodeart-framework/master/notifications.json';

  var _useState = useState([]),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState, 2),
      notes = _useState2[0],
      setNotes = _useState2[1];

  useEffect(function () {
    _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee() {
      var data, items;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return fetch(notesUrl).then(function (res) {
                return res.json();
              });

            case 2:
              data = _context.sent;
              items = data.items;
              setNotes(items);

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  }, []);
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
    className: "d-flex flex-column flex-md-row flex-md-nowrap"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
    className: "col col-md-7"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("p", null, __('WeCodeArt Framework provides set of tools to extend the way you are building content on WordPress Gutenberg block editor. Designed and integrated to help users easily navigate; and control each block the way it should be.', 'wecodeart')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
    className: "card-group mb-5"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
    className: "card"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
    className: "card-body"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("h3", {
    className: "card-title"
  }, __('Customizer Options', 'wecodeart')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("p", {
    className: "card-text"
  }, "WeCodeArt Framework uses WP Customizer API to manage its options. Head over there to see the available customizations and setup starter content."), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("a", {
    href: adminUrl + '/customize.php',
    class: "button button-primary is-primary"
  }, __('View Options', 'wecodeart')))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
    className: "card"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
    className: "card-body"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("h3", {
    className: "card-title"
  }, __('Rate Us Five!', 'wecodeart')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("p", {
    className: "card-text"
  }, "If you like this theme please give me a 5 star rating. This would boost my motivation and help other users make a comfortable decision while choosing the WeCodeArt Framework."), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("a", {
    href: "//wordpress.org/support/theme/wecodeart/reviews/?filter=5#new-post",
    class: "button button-primary is-primary",
    target: "_blank"
  }, __('Ok, you deserve it', 'wecodeart'))))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
    className: "alert alert-warning"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(RawHTML, null, sprintf(__('If you have any questions or suggestion, let us know through our %1$sFacebook community %3$s. Also, %2$ssubscribe to our newsletter%3$s if you want to stay up to date with what\'s new and upcoming features.', 'wecodeart'), '<a href="https://www.facebook.com/wecodeart" target="_blank">', '<a href="https://www.wecodeart.com/" target="_blank">', '</a>')))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
    className: "col col-md-4 offset-md-1"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("h2", {
    className: "d-flex justify-content-between"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("span", null, __('What`s next?', 'wecodeart')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("span", {
    class: "badge rounded-pill bg-dark"
  }, __('Developer Diaries', 'wecodeart'))), notes.map(function (_ref2) {
    var title = _ref2.title,
        content = _ref2.content,
        _ref2$type = _ref2.type,
        type = _ref2$type === void 0 ? 'info' : _ref2$type;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
      className: "alert alert-".concat(type),
      role: "alert"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("h3", null, title), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("p", null, content));
  })));
});

/***/ }),

/***/ "./src/js/admin/components/index.js":
/*!******************************************!*\
  !*** ./src/js/admin/components/index.js ***!
  \******************************************/
/*! exports provided: Notices, Extensions, GettingStarted */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _notices__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./notices */ "./src/js/admin/components/notices.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Notices", function() { return _notices__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _extensions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./extensions */ "./src/js/admin/components/extensions.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Extensions", function() { return _extensions__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _gettingStarted__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gettingStarted */ "./src/js/admin/components/gettingStarted.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GettingStarted", function() { return _gettingStarted__WEBPACK_IMPORTED_MODULE_2__["default"]; });





/***/ }),

/***/ "./src/js/admin/components/notices.js":
/*!********************************************!*\
  !*** ./src/js/admin/components/notices.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);


/**
 * WordPress dependencies
 */
var _wp$data = wp.data,
    useSelect = _wp$data.useSelect,
    useDispatch = _wp$data.useDispatch;
var SnackbarList = wp.components.SnackbarList;
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var notices = useSelect(function (select) {
    return select('core/notices').getNotices().filter(function (n) {
      return n.type === 'snackbar';
    });
  }, []);

  var _useDispatch = useDispatch('core/notices'),
      removeNotice = _useDispatch.removeNotice;

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SnackbarList, {
    className: "components-editor-notices__snackbar",
    notices: notices,
    onRemove: removeNotice
  });
});

/***/ }),

/***/ "./src/js/admin/settings/customCSS.js":
/*!********************************************!*\
  !*** ./src/js/admin/settings/customCSS.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);



/**
 * WordPress dependencies.
 */
var _wp = wp,
    __ = _wp.i18n.__,
    _wp$element = _wp.element,
    useEffect = _wp$element.useEffect,
    useState = _wp$element.useState,
    useRef = _wp$element.useRef,
    _wp$components = _wp.components,
    Button = _wp$components.Button,
    Spinner = _wp$components.Spinner,
    Placeholder = _wp$components.Placeholder;
/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  var saveEntityRecord = props.saveEntityRecord,
      createNotice = props.createNotice,
      _props$wecodeartSetti = props.wecodeartSettings,
      wecodeartSettings = _props$wecodeartSetti === void 0 ? {} : _props$wecodeartSetti,
      isRequesting = props.isRequesting;

  if (isRequesting) {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Placeholder, {
      style: {
        marginTop: 20
      },
      icon: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Spinner, null),
      label: __('Loading Custom CSS', 'wecodeart'),
      instructions: __('Please wait, loading settings...', 'wecodeart')
    });
  }

  var _wecodeartSettings$cu = wecodeartSettings.custom_css,
      custom_css = _wecodeartSettings$cu === void 0 ? '' : _wecodeartSettings$cu;
  var refContainer = useRef(null);

  var _useState = useState(custom_css),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),
      customCSS = _useState2[0],
      setCustomCSS = _useState2[1];

  var _useState3 = useState(null),
      _useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState3, 2),
      editor = _useState4[0],
      loadEditor = _useState4[1];

  var _useState5 = useState(false),
      _useState6 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState5, 2),
      loading = _useState6[0],
      setLoading = _useState6[1];

  useEffect(function () {
    loadEditor(wp.CodeMirror(refContainer.current, {
      value: customCSS,
      autoCloseBrackets: true,
      continueComments: true,
      lineNumbers: true,
      lineWrapping: true,
      matchBrackets: true,
      lint: true,
      gutters: ['CodeMirror-lint-markers'],
      styleActiveLine: true,
      styleActiveSelected: true,
      extraKeys: {
        'Ctrl-Space': 'autocomplete',
        'Alt-F': 'findPersistent',
        'Cmd-F': 'findPersistent'
      }
    }));
  }, []);
  useEffect(function () {
    if (editor === null) return;
    editor.on('change', function () {
      return setCustomCSS(editor.getValue());
    });
  }, [editor]);

  var handleNotice = function handleNotice(r, id, val) {
    setLoading(false);
    var hasSaved = r && r[id] === val;
    var type = hasSaved ? 'success' : 'error';
    var desc = hasSaved ? __('CSS Saved.', 'wecodeart') : __('Something went wrong...', 'wecodeart');
    return createNotice(type, desc);
  };

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    class: "wecodeart-custom-css"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("h2", {
    class: "wecodeart-custom-css__title"
  }, __('Add your custom CSS.', 'wecodeart')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    ref: refContainer,
    className: "wecodeart-custom-css__editor",
    id: "wecodeart-css-editor"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    class: "wecodeart-custom-css__content"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("p", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("small", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("em", null, __('This will also be updated in WP Customizer.', 'wecodeart'))))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Button, {
    isPrimary: true,
    isLarge: true,
    icon: loading && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Spinner, null),
    disabled: loading,
    onClick: function onClick() {
      setLoading(true);
      saveEntityRecord('wecodeart', 'settings', {
        custom_css: customCSS
      }).then(function (res) {
        return handleNotice(res, 'custom_css', customCSS);
      });
    }
  }, loading ? __('Saving...', 'wecodeart') : __('Save', 'wecodeart')));
});

/***/ }),

/***/ "./src/js/admin/settings/index.js":
/*!****************************************!*\
  !*** ./src/js/admin/settings/index.js ***!
  \****************************************/
/*! exports provided: License, CustomCSS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _license__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./license */ "./src/js/admin/settings/license.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "License", function() { return _license__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _customCSS__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./customCSS */ "./src/js/admin/settings/customCSS.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CustomCSS", function() { return _customCSS__WEBPACK_IMPORTED_MODULE_1__["default"]; });




/***/ }),

/***/ "./src/js/admin/settings/license.js":
/*!******************************************!*\
  !*** ./src/js/admin/settings/license.js ***!
  \******************************************/
/*! exports provided: License, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "License", function() { return License; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);




/**
 * WordPress dependencies
 */
var _wp = wp,
    _wp$i18n = _wp.i18n,
    __ = _wp$i18n.__,
    sprintf = _wp$i18n.sprintf,
    _wp$hooks = _wp.hooks,
    doAction = _wp$hooks.doAction,
    applyFilters = _wp$hooks.applyFilters,
    _wp$element = _wp.element,
    RawHTML = _wp$element.RawHTML,
    useState = _wp$element.useState,
    Fragment = _wp$element.Fragment,
    _wp$components = _wp.components,
    withFilters = _wp$components.withFilters,
    BaseControl = _wp$components.BaseControl,
    ExternalLink = _wp$components.ExternalLink,
    Button = _wp$components.Button,
    Spinner = _wp$components.Spinner,
    Placeholder = _wp$components.Placeholder;
var License = function License(props) {
  var isRequesting = props.isRequesting,
      createNotice = props.createNotice,
      saveEntityRecord = props.saveEntityRecord,
      wecodeartSettings = props.wecodeartSettings;

  if (isRequesting) {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(Placeholder, {
      style: {
        marginTop: 20
      },
      icon: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(Spinner, null),
      label: __('Loading', 'wecodeart'),
      instructions: __('Please wait, loading settings...', 'wecodeart')
    });
  }

  var _useState = useState(null),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState, 2),
      loading = _useState2[0],
      setLoading = _useState2[1];

  var LicenseFields = applyFilters('wecodeart.admin.licensePanel.fields', [{
    id: 'theme_api_key',
    label: __('WeCodeArt Framework', 'wecodeart'),
    externalUrl: 'https://www.wecodeart.com/product/wecodeart-framework/'
  }], props);

  var handleNotice = function handleNotice(r, id, val) {
    setLoading(false);
    var hasSaved = r && r[id] === val;
    var type = hasSaved ? 'success' : 'error';
    var desc = hasSaved ? __('API Key Saved.', 'wecodeart') : __('Something went wrong...', 'wecodeart');
    return createNotice(type, desc);
  };

  doAction('wecodeart.admin.licensePanel', props);
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(Fragment, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("p", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(RawHTML, null, sprintf(__('Enter your license keys here to receive updates. If your license keys has expired, please %1$srenew your licenses%2$s.', 'wecodeart'), '<a href="https://www.wecodeart.com/" target="_blank">', '</a>'))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("table", {
    className: "wecodeart-license-manager table",
    style: {
      width: '100%'
    }
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("tr", {
    style: {
      textAlign: 'left'
    }
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("th", null, __('Product', 'wecodeart')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("th", null, __('License Key', 'wecodeart')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("th", null, __('Actions', 'wecodeart')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("th", null, __('Status', 'wecodeart'))), LicenseFields.map(function (_ref) {
    var id = _ref.id,
        label = _ref.label,
        externalUrl = _ref.externalUrl;

    var _useState3 = useState(wecodeartSettings[id]),
        _useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState3, 2),
        value = _useState4[0],
        _onChange = _useState4[1];

    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("tr", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("td", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("strong", null, label)), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("td", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(BaseControl, {
      className: "wecodeart-button-field",
      id: id,
      key: id
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("input", {
      id: id,
      type: "text",
      value: value,
      disabled: value === 'sFREEMIUM',
      placeholder: __('API Key', 'wecodeart'),
      onChange: function onChange(e) {
        return _onChange(e.target.value);
      }
    }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("td", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
      className: "wecodeart-button-group"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(Button, {
      className: "wecodeart-button-group__item",
      isPrimary: true,
      isLarge: true,
      icon: loading && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(Spinner, null),
      disabled: value === wecodeartSettings[id],
      onClick: function onClick() {
        setLoading(true);
        saveEntityRecord('wecodeart', 'settings', _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, id, value)).then(function (res) {
          return handleNotice(res, id, value);
        });
      }
    }, loading ? __('Saving...', 'wecodeart') : __('Save', 'wecodeart')), externalUrl !== '' && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(ExternalLink, {
      href: externalUrl,
      className: "wecodeart-button-group__item"
    }, __('Get API Key', 'wecodeart')))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("td", {
      style: {
        backgroundColor: 'rgb(137 255 128)'
      }
    }, sprintf(__('Days: %s', 'wecodeart'), __('Unlimited', 'wecodeart'))));
  })));
};
/* harmony default export */ __webpack_exports__["default"] = (withFilters('wecodeart.admin.licensePanel')(License));

/***/ }),

/***/ "./src/scss/admin/admin.scss":
/*!***********************************!*\
  !*** ./src/scss/admin/admin.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "@babel/runtime/regenerator":
/*!*************************************!*\
  !*** external "regeneratorRuntime" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["regeneratorRuntime"]; }());

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["element"]; }());

/***/ })

/******/ });
//# sourceMappingURL=admin.js.map