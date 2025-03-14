/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/gutenberg/plugins/code-editor/controls.js":
/*!**********************************************************!*\
  !*** ./src/js/gutenberg/plugins/code-editor/controls.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * WordPress dependencies
 */
const {
  compose: {
    compose
  },
  data: {
    useSelect,
    dispatch
  },
  blocks: {
    parse
  },
  element: {
    useState,
    useEffect
  },
  components: {
    withSpokenMessages
  }
} = wp;
const CodeEditor = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const {
    editorMode
  } = useSelect(select => {
    return {
      editorMode: select('core/edit-post').getEditorMode()
    };
  });
  useEffect(() => {
    if (isLoaded || editorMode !== 'text') {
      return;
    }
    const textEditor = document.querySelector('.editor-post-text-editor,.edit-site-code-editor-text-area');
    if (textEditor) {
      const editorSettings = wp.codeEditor.defaultSettings ? _.clone(wp.codeEditor.defaultSettings) : {};
      document.body.classList.add('theme-wecodeart--codemirror-loaded');
      editorSettings.codemirror = _.extend({}, editorSettings.codemirror, {
        mode: 'text/html',
        lineNumbers: true,
        lineWrapping: true,
        indentUnit: 2,
        tabSize: 2,
        height: 'auto',
        scrollbarStyle: 'null'
      });
      const {
        codemirror
      } = wp.codeEditor.initialize(textEditor, editorSettings);

      // const { display: { viewTo }, getTextArea } = codemirror;
      // const { value } = getTextArea();
      // editor.autoFormatRange({ line: 0, ch: 0 }, { line: viewTo, ch: value.length });

      codemirror.on('change', ({
        getTextArea
      }) => {
        const {
          value
        } = getTextArea();
        textEditor.innerHTML = value;
        dispatch('core/editor').editPost({
          content: value
        });
      });
      codemirror.on('blur', ({
        getTextArea
      }) => {
        const {
          value
        } = getTextArea();
        dispatch('core/editor').resetEditorBlocks(parse(value));
      });
      setIsLoaded(true);
    }
    return () => {
      setIsLoaded(false);
    };
  }, [editorMode]);
  return;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (compose(withSpokenMessages)(CodeEditor));

/***/ }),

/***/ "./src/js/gutenberg/plugins/code-editor/index.js":
/*!*******************************************************!*\
  !*** ./src/js/gutenberg/plugins/code-editor/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _controls__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./controls */ "./src/js/gutenberg/plugins/code-editor/controls.js");
/**
 * Internal dependencies
 */

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'wca-code-editor',
  render: _controls__WEBPACK_IMPORTED_MODULE_0__["default"]
});

/***/ }),

/***/ "./src/js/gutenberg/plugins/index.js":
/*!*******************************************!*\
  !*** ./src/js/gutenberg/plugins/index.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _code_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./code-editor */ "./src/js/gutenberg/plugins/code-editor/index.js");
/**
 * Internal dependencies
 */

const {
  registerPlugin
} = wp.plugins;
function registerWCAPlugins() {
  [_code_editor__WEBPACK_IMPORTED_MODULE_0__["default"]].forEach(block => {
    if (!block) {
      return;
    }
    const {
      name,
      render
    } = block;
    registerPlugin(name, {
      icon: false,
      render
    });
  });
}
wp.domReady(registerWCAPlugins);

/***/ }),

/***/ "./src/scss/gutenberg/index.scss":
/*!***************************************!*\
  !*** ./src/scss/gutenberg/index.scss ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
/*!***********************************!*\
  !*** ./src/js/gutenberg/index.js ***!
  \***********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_gutenberg_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../scss/gutenberg/index.scss */ "./src/scss/gutenberg/index.scss");
/* harmony import */ var _plugins__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./plugins */ "./src/js/gutenberg/plugins/index.js");
// SCSS


// Plugins

})();

/******/ })()
;
//# sourceMappingURL=editor.js.map