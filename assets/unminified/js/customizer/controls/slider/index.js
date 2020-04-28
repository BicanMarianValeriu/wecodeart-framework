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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/customizer/controls/slider/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/customizer/controls/slider/index.js":
/*!****************************************************!*\
  !*** ./src/js/customizer/controls/slider/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * File slider.js
 * Handles Slider control
 *
 * @package WeCodeArt Framework
 * @since 	v3.3
 * @version v4.1.6
 */
(function (wp, $) {
  var api = wp.customize;
  api.controlConstructor['wecodeart-slider'] = api.Control.extend({
    ready: function ready() {
      'use strict';

      var control = this; // Update the text value.

      $('input[type=range]').on('input change', function () {
        var value = $(this).attr('value'),
            inputNumber = $(this).closest('.wecodeart-slider__wrapper').find('.wecodeart-slider__number-input');
        inputNumber.val(value);
        inputNumber.change();
      }); // Handle the reset button.

      $('.wecodeart-slider__reset').click(function () {
        var wrapper = $(this).closest('.wecodeart-slider__wrapper'),
            inputRange = wrapper.find('input[type=range]'),
            inputNumber = wrapper.find('.wecodeart-slider__number-input'),
            defaultValue = inputRange.data('reset_value');
        inputRange.val(defaultValue);
        inputNumber.val(defaultValue);
        inputNumber.change();
      }); // Save changes.

      control.container.on('input change', 'input[type=number]', function () {
        var value = $(this).val();
        $(this).closest('.wecodeart-slider__wrapper').find('input[type=range]').val(value);
        control.setting.set(value);
      });
    }
  });
})(wp, jQuery);

/***/ })

/******/ });
//# sourceMappingURL=index.js.map