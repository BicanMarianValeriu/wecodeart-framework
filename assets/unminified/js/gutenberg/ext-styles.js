/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/gutenberg/extensions/with-styles/Editor.js":
/*!***********************************************************!*\
  !*** ./src/js/gutenberg/extensions/with-styles/Editor.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

/**
 * WordPress dependencies.
 */
const {
  i18n: {
    __,
    sprintf
  },
  element: {
    useEffect,
    useState,
    useRef
  },
  components: {
    Popover,
    Dashicon
  }
} = wp;
const CSSEditor = ({
  attributes,
  setAttributes
}) => {
  const {
    customStyle
  } = attributes;
  const editorRef = useRef(null);
  const customStyleRef = useRef(null);
  const defaultValue = 'selector {\n}\n';
  useEffect(() => {
    customStyleRef.current = defaultValue;
    if (customStyle) {
      customStyleRef.current = customStyle;
    }
    editorRef.current = wp.CodeMirror(document.getElementById('wecodeart-css-editor'), {
      value: customStyleRef.current,
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
    });
    editorRef.current.on('change', () => {
      customStyleRef.current = editorRef.current.getValue();

      // Deprecate old attribute naming
      if (defaultValue.replace(/\s+/g, '') === customStyleRef.current.replace(/\s+/g, '')) {
        return setAttributes({
          customStyle: null
        });
      }
      setAttributes({
        customStyle: customStyleRef.current
      });
    });
  }, []);
  const DescriptionPopover = () => {
    const [isVisible, setIsVisible] = useState(false);
    const toggleVisible = () => setIsVisible(state => !state);
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Dashicon, {
        icon: "info-outline",
        style: {
          marginLeft: 'auto',
          cursor: 'pointer'
        },
        onClick: toggleVisible
      }), isVisible && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Popover, {
        placement: "top-end",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
          style: {
            padding: '.5rem 1rem'
          },
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
            children: sprintf(__('Use %s to target the block CSS class.', 'wecodeart'), '"selector"')
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("pre", {
            children: 'selector {\n    background: #000;\n}\n\nselector img {\n    border-radius: 100%;\n}'
          })]
        })
      })]
    });
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
      class: "wecodeart-advanced-css",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("hr", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
        class: "wecodeart-advanced-css__title",
        style: {
          display: 'flex',
          fontSize: '11px',
          fontWeight: '500',
          textTransform: 'uppercase'
        },
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
          children: __('Additional custom CSS', 'wecodeart')
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(DescriptionPopover, {})]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        className: "wecodeart-advanced-css__editor",
        id: "wecodeart-css-editor"
      })]
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CSSEditor);

/***/ }),

/***/ "./src/js/gutenberg/extensions/with-styles/injector.js":
/*!*************************************************************!*\
  !*** ./src/js/gutenberg/extensions/with-styles/injector.js ***!
  \*************************************************************/
/***/ (() => {

/**
 * WordPress dependencies.
 */
const {
  i18n: {
    __
  },
  blocks: {
    parse
  },
  data: {
    select,
    subscribe
  }
} = wp;

/**
 * Updates the style element in the editor iframe with the dynamic styles of the page.
 * When updating the styles, it tries to use CSSOM to efficiently update the styles.
 * If CSSOM is not supported, it falls back to setting the inner text of the style element.
 * @param {HTMLHeadElement} iframeHead The head of the iframe in which to update the style element.
 * @param {string} finalStyle The final dynamic styles to be inserted into the style element.
 */
const updateStyleElement = (iframeHead, finalStyle) => {
  let styleElement = iframeHead.querySelector('#wecodeart-blocks-dynamic-styles');

  // If style element does not exist, create it
  if (!styleElement) {
    styleElement = document.createElement('style');
    styleElement.setAttribute('id', 'wecodeart-blocks-dynamic-styles');
    iframeHead.appendChild(styleElement);
  }
  if (styleElement.textContent !== finalStyle) {
    styleElement.textContent = finalStyle;
  }
};

/**
 * Recursively gets all child blocks from a given block.
 *
 * @param {Object} block - The block object.
 * @return {Array} An array of the block and its children.
 */
const getChildrenFromBlock = block => {
  return block.innerBlocks?.flatMap(child => [child, ...getChildrenFromBlock(child)]) || [];
};

/**
 * Recursively matches parsed reusable blocks and inner blocks to actual DOM elements using index.
 *
 * @param {HTMLElement} reusableElement - The parent reusable block element.
 * @param {Array} parsedBlocks - The parsed inner blocks from reusable block content.
 * @return {Array} Blocks with correct clientIds assigned.
 */
const matchBlocksByIndex = (reusableElement, parsedBlocks) => {
  if (!reusableElement || !parsedBlocks.length) {
    return parsedBlocks;
  }
  const childElements = reusableElement.querySelectorAll('.wp-block[data-block]');
  return parsedBlocks.map((block, index) => {
    const childElement = childElements[index];
    if (childElement) {
      block.clientId = childElement.getAttribute('data-block');

      // Recursively match inner blocks
      if (block.innerBlocks?.length > 0) {
        block.innerBlocks = matchBlocksByIndex(childElement, block.innerBlocks);
      }
    }
    return block;
  });
};

/**
 * Extracts and generates CSS styles from blocks, replacing `selector` with `data-block` attributes.
 *
 * @param {Array} blocks - The array of block objects.
 * @return {string} The generated global style string.
 */
const getCustomStyleFromBlocks = blocks => {
  const allBlocks = blocks.flatMap(block => [block, ...getChildrenFromBlock(block)]);
  const extractCustomStyle = allBlocks.map(({
    attributes: {
      customStyle
    } = {},
    clientId
  }) => {
    if (customStyle && clientId) {
      return customStyle.replace(/selector/g, `.wp-block[data-block="${clientId}"]`) + '\n';
    }
    return '';
  });
  return extractCustomStyle.filter(Boolean).join('');
};

/**
 * Handles dynamic style updates.
 */
const subscribed = subscribe(() => {
  let reusableStyle = '';
  const blocks = select('core/block-editor').getBlocks();
  const reusableBlocks = select('core').getEntityRecords('postType', 'wp_block', {
    context: 'view'
  }) || [];
  const reusableBlocksInPage = blocks.filter(({
    name
  }) => name === 'core/block');
  const iframe = document.querySelector('iframe[name="editor-canvas"]');
  reusableBlocksInPage.forEach(({
    attributes,
    clientId
  }) => {
    const reusableBlock = reusableBlocks.find(({
      id
    }) => id === attributes.ref);
    if (!reusableBlock) {
      return;
    }
    const domSelector = `.wp-block[data-block="${clientId}"]`;
    const parsedBlocks = parse(reusableBlock.content.raw);
    const reusableElement = iframe?.contentDocument.querySelector(domSelector) || document.querySelector(domSelector);
    if (reusableElement) {
      const matchedBlocks = matchBlocksByIndex(reusableElement, parsedBlocks);
      reusableStyle += getCustomStyleFromBlocks(matchedBlocks);
    }
  });
  const domHead = iframe?.contentDocument.head || document.head;
  if (!domHead) {
    return;
  }
  let styleElement = domHead.querySelector('#wecodeart-blocks-dynamic-styles');
  if (!styleElement) {
    styleElement = document.createElement('style');
    styleElement.id = 'wecodeart-blocks-dynamic-styles';
    domHead.appendChild(styleElement);
  }
  const blocksStyle = getCustomStyleFromBlocks(blocks);
  const finalStyle = blocksStyle + reusableStyle;
  updateStyleElement(domHead, finalStyle);
});

/***/ }),

/***/ "react/jsx-runtime":
/*!**********************************!*\
  !*** external "ReactJSXRuntime" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = window["ReactJSXRuntime"];

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
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";
/*!**********************************************************!*\
  !*** ./src/js/gutenberg/extensions/with-styles/index.js ***!
  \**********************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Editor */ "./src/js/gutenberg/extensions/with-styles/Editor.js");
/* harmony import */ var _injector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./injector */ "./src/js/gutenberg/extensions/with-styles/injector.js");
/* harmony import */ var _injector__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_injector__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);
/**
 * WordPress dependencies.
 */
const {
  assign
} = lodash;
const {
  hooks: {
    addFilter
  },
  blocks: {
    hasBlockSupport
  },
  compose: {
    createHigherOrderComponent
  },
  blockEditor: {
    InspectorAdvancedControls
  }
} = wp;

/**
 * Internal dependencies.
 */



const addAttributes = props => {
  if (hasBlockSupport(props, '__experimentalStyles')) {
    props.attributes = assign(props.attributes, {
      customStyle: {
        type: 'string',
        default: null
      }
    });
  }
  return props;
};

/**
 * Override the default edit UI to include a new block inspector control for
 * assigning the custom class name, if block supports custom class name.
 *
 * @param 	{Function} 	BlockEdit Original component.
 *
 * @return 	{string} 	Wrapped component.
 */
const withInspectorControl = createHigherOrderComponent(BlockEdit => {
  return props => {
    const {
      name,
      isSelected
    } = props;
    if (isSelected && hasBlockSupport(name, '__experimentalStyles')) {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(BlockEdit, {
          ...props
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(InspectorAdvancedControls, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Editor__WEBPACK_IMPORTED_MODULE_0__["default"], {
            ...props
          })
        })]
      });
    }
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(BlockEdit, {
      ...props
    });
  };
}, 'withInspectorControl');

/**
 * Apply Filters
 */
function applyFilters() {
  addFilter('blocks.registerBlockType', 'wecodeart/blocks/custom-css/addAttributes', addAttributes);
  addFilter('editor.BlockEdit', 'wecodeart/editor/custom-css/withInspectorControl', withInspectorControl, 90);
}
wp.domReady(applyFilters);
})();

/******/ })()
;
//# sourceMappingURL=ext-styles.js.map