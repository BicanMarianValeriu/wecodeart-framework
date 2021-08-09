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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/gutenberg/extensions/with-styles/gutenberg-styles.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/gutenberg/extensions/with-styles/Editor.js":
/*!***********************************************************!*\
  !*** ./src/js/gutenberg/extensions/with-styles/Editor.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);


/**
 * WordPress dependencies.
 */
const {
  i18n: {
    __
  },
  element: {
    useEffect,
    useRef
  }
} = wp;

const CSSEditor = ({
  attributes,
  setAttributes
}) => {
  const {
    customCSS
  } = attributes;
  const editorRef = useRef(null);
  const customCSSRef = useRef(null);
  const defaultValue = 'selector {\n}\n';
  useEffect(() => {
    customCSSRef.current = defaultValue;

    if (customCSS) {
      customCSSRef.current = customCSS;
    }

    editorRef.current = wp.CodeMirror(document.getElementById('wecodeart-css-editor'), {
      value: customCSSRef.current,
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
      customCSSRef.current = editorRef.current.getValue();

      if (defaultValue.replace(/\s+/g, '') === customCSSRef.current.replace(/\s+/g, '')) {
        return setAttributes({
          customCSS: null
        });
      }

      setAttributes({
        customCSS: customCSSRef.current
      });
    });
  }, []);
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    class: "wecodeart-advanced-css"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("hr", null), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h2", {
    class: "wecodeart-advanced-css__title"
  }, __('Add your custom CSS.', 'wecodeart')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "wecodeart-advanced-css__editor",
    id: "wecodeart-css-editor"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    class: "wecodeart-advanced-css__content"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null, __('Use', 'wecodeart'), " ", Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("code", null, "selector"), " ", __('to target block wrapper.', 'wecodeart')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null, __('Example', 'wecodeart'), ":"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("pre", {
    className: "wecodeart-advanced-css__help"
  }, 'selector {\n    background: #000;\n}\n\nselector img {\n    border-radius: 100%;\n}'), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null, __('You can also use other CSS syntax here, such as media queries.', 'wecodeart')))));
};

/* harmony default export */ __webpack_exports__["default"] = (CSSEditor);

/***/ }),

/***/ "./src/js/gutenberg/extensions/with-styles/gutenberg-styles.js":
/*!*********************************************************************!*\
  !*** ./src/js/gutenberg/extensions/with-styles/gutenberg-styles.js ***!
  \*********************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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
  blocks: {
    hasBlockSupport
  },
  compose: {
    createHigherOrderComponent
  },
  blockEditor: {
    InspectorAdvancedControls
  },
  element: {
    useEffect
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
      customCSSId: {
        type: 'string',
        default: null
      },
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
      name,
      clientId,
      setAttributes
    } = props;
    const isRestrictedBlock = restrictedBlocks.includes(name);
    const hasClassName = hasBlockSupport(name, 'className', true);

    if (!isRestrictedBlock && hasClassName) {
      useEffect(() => setAttributes({
        customCSSId: clientId
      }), []);
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(BlockEdit, props), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InspectorAdvancedControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_Editor__WEBPACK_IMPORTED_MODULE_1__["default"], props)));
    }

    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(BlockEdit, props);
  };
}, 'withInspectorControl');
/**
 * Apply Filters
 */

addFilter('blocks.registerBlockType', 'wecodeart/blocks/custom-css/addAttributes', addAttributes);
addFilter('editor.BlockEdit', 'wecodeart/editor/custom-css/withInspectorControl', withInspectorControl, 90);

/***/ }),

/***/ "./src/js/gutenberg/extensions/with-styles/injector.js":
/*!*************************************************************!*\
  !*** ./src/js/gutenberg/extensions/with-styles/injector.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

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

const getCustomCSSFromBlocks = (blocks, reusableBlocks) => {
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


  const allBlocks = blocks.map(block => [block, getChildrenFromBlock(block)]); // Transform the deply nested array in a simple one and then get the `customCss` value where it is the case

  const extractCustomCss = flattenDeep(allBlocks).map(block => {
    const {
      attributes: {
        customCSS = null,
        customCSSId = null
      } = {}
    } = block;

    if (customCSSId && customCSS) {
      return customCSS.replace('selector', `[data-block="${customCSSId}"]`) + '\n';
    }

    return '';
  }); // Build the global style

  const style = extractCustomCss.reduce((acc, localStyle) => acc + localStyle, ''); // For debugging
  // console.log( 'Get all the block', allBlocks );
  // console.log( 'Extract customCss', extractCustomCss );
  // console.log( 'Final Result\n', style );

  return style;
};

const subscribed = subscribe(() => {
  const {
    getBlocks
  } = select('core/block-editor') || select('core/editor');
  const blocks = getBlocks();
  const reusableBlocks = select('core').getEntityRecords('postType', 'wp_block');
  const blocksStyle = getCustomCSSFromBlocks(blocks, reusableBlocks);
  addStyle(blocksStyle);
});

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
//# sourceMappingURL=gutenberg-styles.js.map