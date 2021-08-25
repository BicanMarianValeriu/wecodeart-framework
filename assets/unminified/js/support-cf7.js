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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/plugins/cf7/support-cf7.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/plugins/cf7/support-cf7.js":
/*!*******************************************!*\
  !*** ./src/js/plugins/cf7/support-cf7.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ((function (wecodeart) {
  wecodeart.routes = { ...wecodeart.routes,
    themeWecodeart: {
      complete: () => {
        const forms = document.querySelectorAll('form.wpcf7-form');

        const clearResponse = form => {
          const response = form.querySelector('.wpcf7-response-output');
          response.innerHTML = '';
          let classes = response.className.split(' ').filter(v => v.lastIndexOf('alert', 0) !== 0);
          classes = classes.filter(item => item !== 'my-3');
          response.className = classes.join(' ').trim();
        };

        [...forms].map(form => {
          // Clear Errors
          form.addEventListener('submit', e => {
            form.classList.remove('was-validated');
            clearResponse(form);
            const invalids = form.querySelectorAll('.is-invalid');
            [...invalids].map(i => i.classList.remove('is-invalid'));
          }); // Show Validation

          form.addEventListener('wpcf7invalid', ({
            detail
          }) => {
            const {
              apiResponse: {
                invalid_fields
              }
            } = detail;
            form.classList.add('was-validated');
            invalid_fields.map(({
              into,
              error_id
            }) => {
              // Add invalid fields class
              const fields = form.querySelectorAll(`${into} .form-control, ${into} fieldset`);
              [...fields].map(field => field.classList.add('is-invalid')); // Create an observer instance for each invalid field

              const observer = new MutationObserver(() => {
                const tip = form.querySelector(`${into} span.wpcf7-not-valid-tip`);
                tip.setAttribute('id', error_id);
                tip.classList.add('invalid-feedback');
                observer.disconnect();
              });
              observer.observe(form.querySelector(into), {
                childList: true
              });
            }); // Observe response output

            const observer = new MutationObserver(e => {
              const {
                target
              } = e[0];
              target.className = `${target.className} alert alert-warning my-3`;
              observer.disconnect();
            });
            observer.observe(form.querySelector('.wpcf7-response-output'), {
              childList: true
            });
          }); // On sent ok

          form.addEventListener('wpcf7mailsent', () => {
            const response = form.querySelector('.wpcf7-response-output');
            response.className = `${response.className} alert alert-success my-3`;
            let timeout = setTimeout(() => {
              clearResponse(form);
              clearTimeout(timeout);
            }, 5000);
          });
        });
      }
    }
  };
}).apply(undefined, [window.wecodeart]));

/***/ })

/******/ });
//# sourceMappingURL=support-cf7.js.map