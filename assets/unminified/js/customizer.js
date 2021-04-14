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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/customizer/customizer.js");
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

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };

    module.exports["default"] = module.exports, module.exports.__esModule = true;
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };

    module.exports["default"] = module.exports, module.exports.__esModule = true;
  }

  return _typeof(obj);
}

module.exports = _typeof;
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

/***/ "./src/js/customizer/customizer.js":
/*!*****************************************!*\
  !*** ./src/js/customizer/customizer.js ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _scss_customizer_customizer_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../scss/customizer/customizer.scss */ "./src/scss/customizer/customizer.scss");
/* harmony import */ var _scss_customizer_customizer_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_scss_customizer_customizer_scss__WEBPACK_IMPORTED_MODULE_3__);




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * This file adds some LIVE changes to WeCodeArt Framework Customizer
 * @author		Bican Marian Valeriu 
 * @author_url  https://www.wecodeart.com/about
 * @package 	WeCodeArt Framework
 * @since 		1.0
 * @version 	4.2.0
 */

var _wecodeartCustomizePr = wecodeartCustomizePreview,
    fields = _wecodeartCustomizePr.fields,
    googleFonts = _wecodeartCustomizePr.googleFonts;
var wecodeartPostMessage = {
  /**
   * The fields.
   *
   * @since 4.2.0
   */
  fields: fields,

  /**
   * Common utilities.
   *
   * @since 4.2.0
   */
  util: {
    isGoogleFont: function isGoogleFont(family) {
      return googleFonts.filter(function (v) {
        return v.toLowerCase().includes(family.toLowerCase());
      }).length;
    },

    /**
     * A collection of methods for the <link> tags.
     *
     * @since 4.2.0
     */
    linkTag: {
      /**
       * Add a <link> tag in <head> if it doesn't already exist.
       *
       * @since 	4.2.0
       * @param 	{string} id - The field-ID.
       * @returns {void}
       */
      add: function add(id, href) {
        var newNode = document.createElement('link');
        newNode.setAttribute('rel', 'stylesheet');
        newNode.setAttribute('id', id);
        newNode.setAttribute('href', href);
        newNode.setAttribute('type', 'text/css');
        newNode.setAttribute('media', 'all');
        document.querySelector('head').appendChild(newNode);
      },

      /**
       * Add a <link> tag in <head> if it doesn't already exist,
       * by calling the this.add method, and then set url to it.
       *
       * @since 	4.2.0
       * @param 	{string} id - The field-ID.
       * @param 	{string} href - The url to set.
       * @returns {void}
       */
      setLink: function setLink(id, href) {
        var linkNode = document.getElementById(id);

        if (linkNode) {
          linkNode.setAttribute('href', href);
          return;
        }

        wecodeartPostMessage.util.linkTag.add(id, href);
      }
    },

    /**
     * A collection of methods for the <style> tags.
     *
     * @since 4.2.0
     */
    styleTag: {
      /**
       * Add a <style> tag in <head> if it doesn't already exist.
       *
       * @since 	4.2.0
       * @param 	{string} id - The field-ID.
       * @returns {void}
       */
      add: function add(id) {
        if (null === document.getElementById('wca-postmessage-' + id) || 'undefined' === typeof document.getElementById('wca-postmessage-' + id)) {
          jQuery('head').append('<style id="wca-postmessage-' + id + '"></style>');
        }
      },

      /**
       * Add a <style> tag in <head> if it doesn't already exist,
       * by calling the this.add method, and then add styles inside it.
       *
       * @since 	4.2.0
       * @param 	{string} id - The field-ID.
       * @param 	{string} styles - The styles to add.
       * @returns {void}
       */
      addData: function addData(id, styles) {
        wecodeartPostMessage.util.styleTag.add(id);
        jQuery('#wca-postmessage-' + id).text(styles);
      }
    },

    /**
     * Processes the value and applies any replacements and/or additions.
     *
     * @since 	4.2.0
     * @param 	{Object} output - The control.
     * @param 	{mixed}  value 	- The new value.
     *
     * @returns {string|false} 	- Returns false if value is excluded, otherwise a string.
     */
    processValue: function processValue(output, value) {
      var processValue = wecodeartPostMessage.util.processValue;
      var settings = window.parent.wp.customize.get(),
          excluded = false;

      if ('object' === _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_2___default()(value)) {
        _.each(value, function (subValue, key) {
          return value[key] = processValue(output, subValue);
        });

        return value;
      }

      output = _objectSpread({
        prefix: '',
        units: '',
        suffix: '',
        pattern: '$',
        pattern_replace: {},
        exclude: []
      }, output);

      if (1 <= output.exclude.length) {
        _.each(output.exclude, function (exclusion) {
          if (value == exclusion) {
            excluded = true;
          }
        });
      }

      if (excluded) {
        return false;
      } // Apply Pattern


      if (typeof output.pattern === 'string') {
        value = output.pattern.replace(new RegExp('\\$', 'g'), value);
      } // Apply Pattern replace


      if (output.pattern_replace.length) {
        _.each(output.pattern_replace, function (id, placeholder) {
          if (!_.isUndefined(settings[id])) {
            value = value.replace(placeholder, settings[id]);
          }
        });
      }

      return output.prefix + value + output.units + output.suffix;
    },

    /**
     * Make sure urls are properly formatted for background-image properties.
     *
     * @since 	4.2.0
     * @param 	{string} url - The URL.
     *
     * @returns {string}
     */
    backgroundImageValue: function backgroundImageValue(url) {
      return -1 === url.indexOf('url(') ? 'url(' + url + ')' : url;
    }
  },

  /**
   * A collection of utilities for CSS generation.
   *
   * @since 4.2.0
   */
  css: {
    /**
     * Generates the CSS from the output (js_vars) parameter.
     *
     * @since 	4.2.0
     * @param 	{object} field - The control.
     * @param 	{mixed}  value - The new value.
     *
     * @returns {string}
     */
    fromOutput: function fromOutput(output, value, _ref) {
      var control = _ref.control,
          name = _ref.name;
      var _wecodeartPostMessage = wecodeartPostMessage.util,
          processValue = _wecodeartPostMessage.processValue,
          backgroundImageValue = _wecodeartPostMessage.backgroundImageValue,
          linkTag = _wecodeartPostMessage.linkTag,
          isGoogleFont = _wecodeartPostMessage.isGoogleFont;
      var styles = '',
          mediaQuery = false,
          processedValue;

      if (output.js_callback && 'function' === typeof window[output.js_callback]) {
        value = window[output.js_callback[0]](value, output.js_callback[1]);
      }

      switch (control) {
        case 'wecodeart-fonts':
          styles += output.element + '{';

          _.each(value, function (val, key) {
            if (key === 'font-weight') return;

            if (output.choice && key !== output.choice) {
              return;
            }

            processedValue = processValue(output, val);

            if (false !== processedValue) {
              styles += output.property + ':' + processedValue + ';';
            }
          });

          styles += '}';

          if (isGoogleFont(value['font-family'])) {
            var fontUrl = '//fonts.googleapis.com/css?family=';
            var variants = [];
            var family = value['font-family'].replace(' ', '+').replace(/\"/g, '&quot;');

            if (value['font-weight'].length) {
              _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(value['font-weight']).map(function (v) {
                if ('regular' === v) v = '400';
                if ('italic' === v) v = '400i';
                variants = [].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(variants), [v.substring(0, 4)]);
              });

              family += ":".concat(variants.join(':'));
            }

            fontUrl += family + '&display=swap';
            linkTag.setLink(name, fontUrl);
          }

          break;

        case 'wecodeart-palette':
          var _value = value,
              _value$active = _value.active,
              active = _value$active === void 0 ? 'base' : _value$active,
              palettes = _value.palettes;
          var colors = palettes[active].colors;
          processedValue = processValue(output, colors[output.key]);

          if (false !== processedValue) {
            styles += output.element + '{' + output.property + ':' + processedValue + ';}';
          }

          break;

        case 'wecodeart-background':
        case 'wecodeart-dimensions':
        case 'wecodeart-sortable':
          styles += output.element + '{';

          _.each(value, function (val, key) {
            if (output.choice && key !== output.choice) {
              return;
            }

            if ('background-image' === key) {
              val = backgroundImageValue(val);
            }

            processedValue = processValue(output, val);

            if (false !== processedValue) {
              // Mostly used for padding, margin & position properties.
              if (output.property) {
                styles += output.property;

                if ('' !== output.property && ('top' === key || 'bottom' === key || 'left' === key || 'right' === key)) {
                  styles += '-' + key;
                }

                styles += ':' + processedValue + ';';
              } else {
                styles += key + ':' + processedValue + ';';
              }
            }
          });

          styles += '}';
          break;

        default:
          if ('wecodeart-image' === control) {
            value = !_.isUndefined(value.url) ? backgroundImageValue(value.url) : backgroundImageValue(value);
          }

          if (_.isObject(value)) {
            styles += output.element + '{';

            _.each(value, function (val, key) {
              if (output.choice && key !== output.choice) {
                return;
              }

              processedValue = processValue(output, val);

              if (!output.property) {
                output.property = key;
              }

              if (false !== processedValue) {
                styles += output.property + ':' + processedValue + ';';
              }
            });

            styles += '}';
          } else {
            processedValue = processValue(output, value);

            if (false !== processedValue) {
              styles += output.element + '{' + output.property + ':' + processedValue + ';}';
            }
          }

          break;
      } // Get the media-query.


      if (output.media_query && 'string' === typeof output.media_query && !_.isEmpty(output.media_query)) {
        mediaQuery = output.media_query;

        if (-1 === mediaQuery.indexOf('@media')) {
          mediaQuery = '@media ' + mediaQuery;
        }
      } // If we have a media-query, add it and return.


      if (mediaQuery) {
        return mediaQuery + '{' + styles + '}';
      } // Return the styles.


      return styles;
    }
  },

  /**
   * A collection of utilities to change the HTML in the document.
   *
   * @since 4.2.0
   */
  html: {
    /**
     * Modifies the HTML from the output (js_vars) parameter.
     *
     * @since 	4.2.0
     * @param 	{Object} field 	- The control.
     * @param 	{mixed}  value 	- The new value.
     *
     * @returns {string}
     */
    fromOutput: function fromOutput(output, value) {
      var processValue = wecodeartPostMessage.util.processValue;
      var $element = jQuery(output.element);

      if (output.js_callback && 'function' === typeof window[output.js_callback]) {
        value = window[output.js_callback[0]](value, output.js_callback[1]);
      }

      if (_.isObject(value) || _.isArray(value)) {
        if (!output.choice) return;

        _.each(value, function (val, key) {
          if (output.choice && key !== output.choice) return;
          value = val;
        });
      }

      value = processValue(output, value);

      if (output.attr) {
        if (output.attr === 'class') {
          if ('undefined' !== typeof output.value) {
            // If is multiple then we switch the class
            if (_.isArray(output.value)) {
              $element.removeClass(output.value.join(' ')).addClass(value);
            } else {
              // Else we toggle
              $element.toggleClass(output.value);
            }
          }
        } else {
          $element.attr(output.attr, value);
        }
      } else if (output.text) {
        $element.text(value);
      } else {
        $element.html(value);
      }
    }
  }
};

(function (wp, $) {
  var api = wp.customize;
  var styleTag = wecodeartPostMessage.util.styleTag,
      fields = wecodeartPostMessage.fields; // Blog Branding

  api('blogname', function (value) {
    return value.bind(function (to) {
      return $('.site-title a').text(to);
    });
  });
  api('blogdescription', function (value) {
    return value.bind(function (to) {
      return $('.site-description').text(to);
    });
  }); // Process Controls

  _.each(fields, function (_ref2) {
    var output = _ref2.output,
        name = _ref2.name,
        control = _ref2.control;
    var args = {
      name: name,
      control: control
    };
    api(name, function (value) {
      value.bind(function (newVal) {
        var styles = '';

        _.each(output, function (parse) {
          if (!parse.function || 'undefined' === typeof wecodeartPostMessage[parse.function]) {
            parse.function = 'css';
          }

          if ('css' === parse.function) {
            styles += wecodeartPostMessage.css.fromOutput(parse, newVal, args);
          } else {
            wecodeartPostMessage[parse.function].fromOutput(parse, newVal, args);
          }
        });

        styleTag.addData(name, styles);
      });
    });
  });
})(wp, jQuery);

/***/ }),

/***/ "./src/scss/customizer/customizer.scss":
/*!*********************************************!*\
  !*** ./src/scss/customizer/customizer.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });
//# sourceMappingURL=customizer.js.map