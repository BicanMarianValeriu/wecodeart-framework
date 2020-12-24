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

/***/ "./src/js/customizer/customizer.js":
/*!*****************************************!*\
  !*** ./src/js/customizer/customizer.js ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_customizer_customizer_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../scss/customizer/customizer.scss */ "./src/scss/customizer/customizer.scss");
/* harmony import */ var _scss_customizer_customizer_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scss_customizer_customizer_scss__WEBPACK_IMPORTED_MODULE_0__);
/**
 * This file adds some LIVE changes to WeCodeArt Framework Customizer
 * @author		Bican Marian Valeriu 
 * @author_url  https://www.wecodeart.com/about
 * @package 	WeCodeArt Framework
 * @since 		1.0
 * @version 	4.2.0
 */


function addCss(id) {
  var content = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var style = document.querySelector('#' + id + '-css');

  if (!style) {
    style = document.createElement('style');
    style.setAttribute('id', id + '-css');
    style.setAttribute('type', 'text/css');
    document.querySelector('head').appendChild(style);
  }

  style.innerHTML = content;
}

(function (wp, $) {
  var api = wp.customize; // Google Fonts Preview

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
        addCss(controlId, "".concat(selector, " {font-family:").concat(defaultFontface, ";}"));
      } else {
        addCss(controlId, ":root {--bs-font-sans-serif:".concat(family, ";} ").concat(selector, " {font-family:").concat(family, ";}"));
      }

      if (source.toLowerCase() === 'google') {
        var linkNode = document.querySelector('#' + controlId),
            fontValue = family.replace(' ', '+');
        var url = "//fonts.googleapis.com/css?family=".concat(fontValue, "%3A100%2C200%2C300%2C400%2C500%2C600%2C700%2C800&display=swap\"");

        if (linkNode !== null) {
          linkNode.setAttribute('href', url);
          return false;
        }

        var newNode = document.createElement('link');
        newNode.setAttribute('rel', 'stylesheet');
        newNode.setAttribute('id', controlId);
        newNode.setAttribute('href', url);
        newNode.setAttribute('type', 'text/css');
        newNode.setAttribute('media', 'all');
        document.querySelector('head').appendChild(newNode);
      }
    });
  });
  api('blogname', function (value) {
    return value.bind(function (to) {
      return $('.site-title a').text(to);
    });
  });
  api('blogdescription', function (value) {
    return value.bind(function (to) {
      return $('.site-description').text(to);
    });
  });
  api('header-bar-container', function (value) {
    value.bind(function (to) {
      var el = $('#header-bar .container, #header-bar .container-fluid');
      if ('container-fluid' === to) el.addClass('container-fluid').removeClass('container');else el.addClass('container').removeClass('container-fluid');
    });
  });
  var contentContexts = ['blog'];
  contentContexts.forEach(function (context) {
    var apiOption = 'content-layout-container';
    apiOption = [apiOption, context].join('-');
    api(apiOption, function (value) {
      value.bind(function (to) {
        var el = $('.content .container, .content .container-fluid');
        if ('container-fluid' === to) el.addClass('container-fluid').removeClass('container');else el.addClass('container').removeClass('container-fluid');
      });
    });
  });
  api('footer-layout-container', function (value) {
    value.bind(function (to) {
      var el = $('.footer__widgets .container, .footer__widgets .container-fluid');
      if ('container-fluid' === to) el.addClass('container-fluid').removeClass('container');else el.addClass('container').removeClass('container-fluid');
    });
  });
  api('footer-copyright-text', function (value) {
    return value.bind(function (to) {
      return $('.attribution__copyright').text(to);
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