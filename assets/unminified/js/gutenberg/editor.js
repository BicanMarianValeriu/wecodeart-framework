/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/gutenberg/plugins/code-editor/components/controls.js":
/*!*********************************************************************!*\
  !*** ./src/js/gutenberg/plugins/code-editor/components/controls.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
    if (editorMode === 'text' && isLoaded === false) {
      const editorSettings = wp.codeEditor.defaultSettings ? _.clone(wp.codeEditor.defaultSettings) : {};
      document.body.classList.add('theme-wecodeart--codemirror-loaded');
      editorSettings.codemirror = _.extend({}, editorSettings.codemirror, {
        mode: 'text/html',
        lineNumbers: true,
        indentUnit: 2,
        tabSize: 2,
        height: 'auto',
        lineWrapping: true,
        scrollbarStyle: 'null'
      });
      const textEditor = document.querySelector('.editor-post-text-editor');
      const checkChanges = wp.codeEditor.initialize(textEditor, editorSettings);
      checkChanges.codemirror.on('change', _ref => {
        let {
          getValue
        } = _ref;
        const content = getValue();
        textEditor.innerHTML = content;
        dispatch('core/editor').editPost({
          content
        });
      });
      checkChanges.codemirror.on('blur', _ref2 => {
        let {
          getValue
        } = _ref2;
        const blocks = parse(getValue());
        dispatch('core/editor').resetEditorBlocks(blocks);
      });
      setIsLoaded(true);
    }
    return () => {
      setIsLoaded(false);
    };
  }, [editorMode]);
  return null;
};
/* harmony default export */ __webpack_exports__["default"] = (compose(withSpokenMessages)(CodeEditor));

/***/ }),

/***/ "./src/js/gutenberg/plugins/code-editor/index.js":
/*!*******************************************************!*\
  !*** ./src/js/gutenberg/plugins/code-editor/index.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_controls__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/controls */ "./src/js/gutenberg/plugins/code-editor/components/controls.js");
/**
 * Internal dependencies
 */

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'wca-code-editor',
  render: _components_controls__WEBPACK_IMPORTED_MODULE_0__["default"]
});

/***/ }),

/***/ "./src/js/gutenberg/plugins/index.js":
/*!*******************************************!*\
  !*** ./src/js/gutenberg/plugins/index.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ registerWCAPlugins; }
/* harmony export */ });
/* harmony import */ var _code_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./code-editor */ "./src/js/gutenberg/plugins/code-editor/index.js");
/**
 * Internal dependencies
 */

const {
  registerPlugin
} = wp.plugins;
function registerWCAPlugins() {
  [_code_editor__WEBPACK_IMPORTED_MODULE_0__["default"]].forEach(block => {
    if (!block) return;
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
registerWCAPlugins();

/***/ }),

/***/ "./src/js/gutenberg/variations/index.js":
/*!**********************************************!*\
  !*** ./src/js/gutenberg/variations/index.js ***!
  \**********************************************/
/***/ (function() {

/**
 * WordPress dependencies
 */
const {
  i18n: {
    __
  },
  blocks: {
    registerBlockType,
    registerBlockVariation
  }
} = wp;
const groupMarquee = {
  block: 'core/group',
  attributes: {
    name: 'wecodeart/group/marquee',
    title: __('Group: Marquee', 'wecodeart'),
    description: __('Gather blocks in a sliding container.', 'wecodeart'),
    isActive: ['namespace'],
    attributes: {
      namespace: 'wecodeart/group/marquee',
      layout: {
        type: 'flex',
        flexWrap: 'nowrap',
        justifyContent: 'center',
        alignItems: 'center'
      }
    },
    innerBlocks: [],
    isDefault: false,
    scope: ['block', 'inserter', 'transform'],
    icon: 'align-right'
  }
};
const socialSharing = {
  block: 'core/social-links',
  attributes: {
    name: 'wecodeart/social-links/sharing',
    title: __('Social Icons: Sharing', 'wecodeart'),
    isActive: ['namespace'],
    description: __('Display icons for sharing the current page on social media sites.', 'wecodeart'),
    attributes: {
      namespace: 'wecodeart/social-links/sharing',
      openInNewTab: true
    },
    innerBlocks: [['core/social-link', {
      service: 'facebook',
      'url': '#'
    }], ['core/social-link', {
      service: 'twitter',
      'url': '#'
    }]],
    isDefault: false,
    scope: ['block', 'inserter', 'transform']
  }
};
function registerWCAVariations() {
  [groupMarquee, socialSharing].forEach(_ref => {
    let {
      block,
      attributes
    } = _ref;
    registerBlockVariation(block, attributes);
  });
}
registerWCAVariations();

/***/ }),

/***/ "./src/scss/gutenberg/index.scss":
/*!***************************************!*\
  !*** ./src/scss/gutenberg/index.scss ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";
/*!***********************************!*\
  !*** ./src/js/gutenberg/index.js ***!
  \***********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_gutenberg_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../scss/gutenberg/index.scss */ "./src/scss/gutenberg/index.scss");
/* harmony import */ var _variations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./variations */ "./src/js/gutenberg/variations/index.js");
/* harmony import */ var _variations__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_variations__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _plugins__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./plugins */ "./src/js/gutenberg/plugins/index.js");
// SCSS


// Variations


// Plugins

}();
/******/ })()
;
//# sourceMappingURL=editor.js.map