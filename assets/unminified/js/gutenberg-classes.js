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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/gutenberg/extensions/with-classes/gutenberg-classes.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/gutenberg/extensions/with-classes/gutenberg-classes.js":
/*!***********************************************************************!*\
  !*** ./src/js/gutenberg/extensions/with-classes/gutenberg-classes.js ***!
  \***********************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);


/**
 * External dependencies
 */
var _lodash = lodash,
    split = _lodash.split,
    replace = _lodash.replace,
    get = _lodash.get,
    join = _lodash.join;
/**
 * WordPress Dependencies
 */

var _wp = wp,
    __ = _wp.i18n.__,
    _wp$hooks = _wp.hooks,
    addFilter = _wp$hooks.addFilter,
    removeFilter = _wp$hooks.removeFilter,
    hasBlockSupport = _wp.blocks.hasBlockSupport,
    _wp$compose = _wp.compose,
    compose = _wp$compose.compose,
    createHigherOrderComponent = _wp$compose.createHigherOrderComponent,
    withState = _wp$compose.withState,
    _wp$data = _wp.data,
    withSelect = _wp$data.withSelect,
    select = _wp$data.select,
    InspectorAdvancedControls = _wp.blockEditor.InspectorAdvancedControls,
    FormTokenField = _wp.components.FormTokenField;
/**
 * Enhance Block
 */

var enhance = compose(withState({
  customClassNames: []
}), withSelect(function (select, block) {
  var selectedBlock = select('core/block-editor').getSelectedBlock();
  var getClasses = get(selectedBlock, 'attributes.className');

  if (getClasses) {
    getClasses = replace(getClasses, ',', ' ');
  }

  if (selectedBlock && getClasses && join(block.customClassNames, ' ') !== getClasses) {
    if (block.clientId === selectedBlock.clientId) {
      block.setState({
        customClassNames: split(getClasses, ' ')
      });
    }
  } // Defaults for FSE


  var _select$getEditorSett = select('core/editor').getEditorSettings(),
      _select$getEditorSett2 = _select$getEditorSett.wecodeart;

  _select$getEditorSett2 = _select$getEditorSett2 === void 0 ? {} : _select$getEditorSett2;
  var _select$getEditorSett3 = _select$getEditorSett2.customClasses,
      customClasses = _select$getEditorSett3 === void 0 ? [] : _select$getEditorSett3;
  return {
    suggestions: customClasses
  };
}));
/**
 * Override the default edit UI to include a new block inspector control for
 * assigning the custom class name, if block supports custom class name.
 *
 * @param {Function} BlockEdit Original component.
 *
 * @return {string} Wrapped component.
 */

var withInspectorControl = createHigherOrderComponent(function (BlockEdit) {
  return enhance(function (props) {
    var name = props.name,
        customClassNames = props.customClassNames,
        suggestions = props.suggestions,
        isSelected = props.isSelected,
        setAttributes = props.setAttributes,
        setState = props.setState;
    var hasClassName = hasBlockSupport(name, 'className', true);

    if (hasClassName && isSelected) {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(BlockEdit, props), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InspectorAdvancedControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(FormTokenField, {
        label: __('Additional CSS Class(es)', 'wecodeart'),
        value: customClassNames,
        suggestions: suggestions,
        maxSuggestions: 20,
        onChange: function onChange(val) {
          setAttributes({
            className: val !== '' ? join(val, ' ') : undefined
          });
          setState({
            customClassNames: val !== '' ? val : undefined
          });
        }
      })));
    }

    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(BlockEdit, props);
  });
}, 'withInspectorControl');
/**
 * Apply Filters
 */

function applyFilters() {
  removeFilter('editor.BlockEdit', 'core/editor/custom-class-name/with-inspector-control');
  addFilter('editor.BlockEdit', 'wecodeart/editor/custom-classes/withInspectorControl', withInspectorControl);
}

applyFilters();

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
//# sourceMappingURL=gutenberg-classes.js.map