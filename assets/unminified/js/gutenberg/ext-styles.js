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
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);


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

const CSSEditor = _ref => {
  let {
    attributes,
    setAttributes
  } = _ref;
  const {
    customCSS,
    customStyle
  } = attributes;
  const editorRef = useRef(null);
  const customStyleRef = useRef(null);
  const defaultValue = 'selector {\n}\n';
  useEffect(() => {
    customStyleRef.current = defaultValue;

    if (customStyle || customCSS) {
      customStyleRef.current = customStyle || customCSS;
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
      customStyleRef.current = editorRef.current.getValue(); // Deprecate old attribute naming

      if (defaultValue.replace(/\s+/g, '') === customStyleRef.current.replace(/\s+/g, '')) {
        return setAttributes({
          customStyle: null,
          customCSS: null
        });
      }

      setAttributes({
        customStyle: customStyleRef.current,
        customCSS: null
      });
    });
  }, []);

  const DescriptionPopover = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisible = () => setIsVisible(state => !state);

    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Dashicon, {
      icon: "info-outline",
      style: {
        marginLeft: 'auto',
        cursor: 'pointer'
      },
      onClick: toggleVisible
    }), isVisible && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Popover, {
      placement: "top-end"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      style: {
        padding: '.5rem 1rem'
      }
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, sprintf(__('Use %s to target the block CSS class.', 'wecodeart'), '"selector"')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("pre", null, 'selector {\n    background: #000;\n}\n\nselector img {\n    border-radius: 100%;\n}'))));
  };

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "wecodeart-advanced-css"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("hr", null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    class: "wecodeart-advanced-css__title",
    style: {
      display: 'flex',
      fontSize: '11px',
      fontWeight: '500',
      textTransform: 'uppercase'
    }
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, __('Additional custom CSS', 'wecodeart')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(DescriptionPopover, null)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wecodeart-advanced-css__editor",
    id: "wecodeart-css-editor"
  })));
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
const {
  flattenDeep
} = lodash;

const addStyle = style => {
  let element = document.getElementById('wecodeart-blocks-dynamic-styles');

  if (null === element) {
    element = document.createElement('style');
    element.setAttribute('type', 'text/css');
    element.setAttribute('id', 'wecodeart-blocks-dynamic-styles');
    document.getElementsByTagName('head')[0].appendChild(element);
  }

  if (element.textContent === style) {
    return null;
  }

  return element.textContent = style;
};

const getCustomStyleFromBlocks = (blocks, reusableBlocks) => {
  if (!blocks) {
    return '';
  } // Return the children of the block. The result is an array deeply nested that match the structure of the block in the editor.


  const getChildrenFromBlock = block => {
    const childrends = [];

    if ('core/block' === block.name && null !== reusableBlocks) {
      const reBlocks = reusableBlocks.find(i => block.attributes.ref === i.id);

      if (reBlocks && reBlocks.content) {
        childrends.push(parse(reBlocks.content.raw || reBlocks.content).map(child => [child, getChildrenFromBlock(child)]));
      }

      ;
    }

    if (undefined !== block.innerBlocks && 0 < block.innerBlocks.length) {
      childrends.push(block.innerBlocks.map(child => [child, getChildrenFromBlock(child)]));
    }

    return childrends;
  }; // Get all the blocks and their children


  const allBlocks = blocks.map(block => [block, getChildrenFromBlock(block)]); // Transform the deply nested array in a simple one and then get the `customStyle` value where it is the case

  const extractCustomStyle = flattenDeep(allBlocks).map(block => {
    const {
      attributes: {
        customCSS = null,
        customStyle = customCSS
      } = {},
      clientId
    } = block;

    if (customStyle) {
      return customStyle.replace(new RegExp('selector', 'g'), `.wp-block[data-block="${clientId}"]`) + '\n';
    }

    return '';
  }); // Build the global style

  const style = extractCustomStyle.reduce((acc, localStyle) => acc + localStyle, ''); // For debugging
  // console.log( 'Get all the block', allBlocks );
  // console.log( 'Extract customStyle', extractCustomStyle );
  // console.log( 'Final Result\n', style );

  return style;
};

const subscribed = subscribe(() => {
  const {
    getBlocks
  } = select('core/block-editor') || select('core/editor');
  const blocks = getBlocks();
  const reusableBlocks = select('core').getEntityRecords('postType', 'wp_block');
  const blocksStyle = getCustomStyleFromBlocks(blocks, reusableBlocks);
  addStyle(blocksStyle);
});

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["element"];

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
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************************************************!*\
  !*** ./src/js/gutenberg/extensions/with-styles/index.js ***!
  \**********************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Editor */ "./src/js/gutenberg/extensions/with-styles/Editor.js");
/* harmony import */ var _injector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./injector */ "./src/js/gutenberg/extensions/with-styles/injector.js");
/* harmony import */ var _injector__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_injector__WEBPACK_IMPORTED_MODULE_2__);


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
  compose: {
    createHigherOrderComponent
  },
  blockEditor: {
    InspectorAdvancedControls
  }
} = wp;
const {
  restrictedBlocks
} = wecodeartGutenberg;
/**
 * Internal dependencies.
 */




const addAttributes = props => {
  const {
    name
  } = props;
  const isRestrictedBlock = restrictedBlocks.includes(name);

  if (!isRestrictedBlock) {
    props.attributes = assign(props.attributes, {
      customStyle: {
        type: 'string',
        default: null
      },
      // Deprecated
      customCSS: {
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
      name
    } = props;
    const isRestrictedBlock = restrictedBlocks.includes(name);

    if (!isRestrictedBlock) {
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(BlockEdit, props), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(InspectorAdvancedControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Editor__WEBPACK_IMPORTED_MODULE_1__["default"], props)));
    }

    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(BlockEdit, props);
  };
}, 'withInspectorControl');
/**
 * Apply Filters
 */

addFilter('blocks.registerBlockType', 'wecodeart/blocks/custom-css/addAttributes', addAttributes);
addFilter('editor.BlockEdit', 'wecodeart/editor/custom-css/withInspectorControl', withInspectorControl, 90);
})();

/******/ })()
;
//# sourceMappingURL=ext-styles.js.map