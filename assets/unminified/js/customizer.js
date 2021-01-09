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
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./src/js/customizer/customizer.js":
/*!*****************************************!*\
  !*** ./src/js/customizer/customizer.js ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _scss_customizer_customizer_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../scss/customizer/customizer.scss */ "./src/scss/customizer/customizer.scss");
/* harmony import */ var _scss_customizer_customizer_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_scss_customizer_customizer_scss__WEBPACK_IMPORTED_MODULE_1__);


/**
 * This file adds some LIVE changes to WeCodeArt Framework Customizer
 * @author		Bican Marian Valeriu 
 * @author_url  https://www.wecodeart.com/about
 * @package 	WeCodeArt Framework
 * @since 		1.0
 * @version 	4.2.0
 */

var wecodeartPostMessage = {
  /**
   * The fields.
   *
   * @since 4.2.0
   */
  fields: {},

  /**
   * Common utilities.
   *
   * @since 4.2.0
   */
  util: {
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
     * @param 	{Object} output - The output (js_vars) argument.
     * @param 	{mixed}  value - The value.
     * @param 	{string} controlType - The control-type.
     * @returns {string|false} - Returns false if value is excluded, otherwise a string.
     */
    processValue: function processValue(output, value) {
      var self = this,
          settings = window.parent.wp.customize.get(),
          excluded = false;

      if ('object' === _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(value)) {
        _.each(value, function (subValue, key) {
          return value[key] = self.processValue(output, subValue);
        });

        return value;
      }

      output = _.defaults(output, {
        prefix: '',
        units: '',
        suffix: '',
        value_pattern: '$',
        pattern_replace: {},
        exclude: []
      });

      if (1 <= output.exclude.length) {
        _.each(output.exclude, function (exclusion) {
          if (value == exclusion) {
            excluded = true;
          }
        });
      }

      if (excluded) {
        return false;
      }

      value = output.value_pattern.replace(new RegExp('\\$', 'g'), value);

      _.each(output.pattern_replace, function (id, placeholder) {
        if (!_.isUndefined(settings[id])) value = value.replace(placeholder, settings[id]);
      });

      return output.prefix + value + output.units + output.suffix;
    },

    /**
     * Make sure urls are properly formatted for background-image properties.
     *
     * @since 	4.2.0
     * @param 	{string} url - The URL.
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
     * @param 	{Object} output - The output (js_vars) argument.
     * @param 	{mixed}  value - The value.
     * @param 	{string} controlType - The control-type.
     * @returns {string}
     */
    fromOutput: function fromOutput(output, value, controlType) {
      var _wecodeartPostMessage = wecodeartPostMessage.util,
          processValue = _wecodeartPostMessage.processValue,
          backgroundImageValue = _wecodeartPostMessage.backgroundImageValue;
      var styles = '',
          mediaQuery = false,
          processedValue;

      if (output.js_callback && 'function' === typeof window[output.js_callback]) {
        value = window[output.js_callback[0]](value, output.js_callback[1]);
      }

      switch (controlType) {
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
          if ('wecodeart-image' === controlType) {
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
     * @param 	{Object} output - The output (js_vars) argument.
     * @param 	{mixed}  value - The value.
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
            // If is multiplce then we switch the class
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
  var _wecodeartPostMessage2 = wecodeartPostMessage.util,
      styleTag = _wecodeartPostMessage2.styleTag,
      linkTag = _wecodeartPostMessage2.linkTag; // Blog Branding

  api('blogname', function (value) {
    return value.bind(function (to) {
      return $('.site-title a').text(to);
    });
  });
  api('blogdescription', function (value) {
    return value.bind(function (to) {
      return $('.site-description').text(to);
    });
  }); // Google Fonts Preview

  api.bind('preview-ready', function () {
    api.preview.bind('font-selection', function (_ref) {
      var controlId = _ref.controlId,
          source = _ref.source,
          value = _ref.value,
          inherit = _ref.inherit;
      var defaultFontface = inherit ? 'inherit' : 'system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"';
      var selector = 'body';
      selector = selector.split(',');
      selector = selector.map(function (sel) {
        return 'html ' + sel;
      }).join(',');
      var family = value.family;

      if (family === false) {
        styleTag.addData(controlId, "".concat(selector, " {font-family:").concat(defaultFontface, ";}"));
      } else {
        styleTag.addData(controlId, ":root {--wca-font-sans-serif:".concat(family, ";} ").concat(selector, " {font-family:").concat(family, ";}"));
      }

      if (source.toLowerCase() === 'google') {
        var fontValue = family.replace(' ', '+');
        var url = "//fonts.googleapis.com/css?family=".concat(fontValue, "%3A100%2C200%2C300%2C400%2C500%2C600%2C700%2C800&display=swap\"");
        linkTag.setLink(controlId, url);
      }
    });
  }); // Others field types

  _.each(wecodeartPostMessageFields, function (field) {
    api(field.name, function (value) {
      value.bind(function (newVal) {
        var styles = '';

        _.each(field.output, function (output) {
          if (!output.function || 'undefined' === typeof wecodeartPostMessage[output.function]) {
            output.function = 'css';
          }

          if ('css' === output.function) {
            styles += wecodeartPostMessage.css.fromOutput(output, newVal, field.type);
          } else {
            wecodeartPostMessage[output.function].fromOutput(output, newVal, field.type);
          }
        });

        styleTag.addData(field.name, styles);
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