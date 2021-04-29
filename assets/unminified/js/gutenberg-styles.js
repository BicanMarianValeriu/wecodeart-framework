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
var _wp = wp,
    __ = _wp.i18n.__,
    _wp$element = _wp.element,
    useEffect = _wp$element.useEffect,
    useRef = _wp$element.useRef;

var CSSEditor = function CSSEditor(_ref) {
  var attributes = _ref.attributes,
      setAttributes = _ref.setAttributes,
      clientId = _ref.clientId;
  var customCSS = attributes.customCSS,
      className = attributes.className;
  var editorRef = useRef(null);
  var customCSSRef = useRef(null);
  var classArRef = useRef(null);
  useEffect(function () {
    setAttributes({
      className: getClassName(),
      hasCustomCSS: true
    });
  }, [attributes]);
  useEffect(function () {
    setAttributes({
      className: getClassName(),
      hasCustomCSS: true
    });

    if (customCSS) {
      var regex = new RegExp('.' + classArRef.current, 'g');
      var generatedCSS = customCSS.replace(regex, 'selector');
      customCSSRef.current = generatedCSS;
    } else {
      customCSSRef.current = 'selector {\n}\n';
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
    editorRef.current.on('change', function () {
      var regex = new RegExp('selector', 'g');
      var generatedCSS = editorRef.current.getValue().replace(regex, ".".concat(classArRef.current));
      customCSSRef.current = generatedCSS;

      if ('selector {\n}\n'.replace(/\s+/g, '') === customCSSRef.current.replace(/\s+/g, '')) {
        return setAttributes({
          customCSS: null
        });
      }

      setAttributes({
        customCSS: customCSSRef.current
      });
    });
  }, []);

  var getClassName = function getClassName() {
    var classes;
    var uniqueId = clientId.substr(0, 8);

    if (null !== customCSSRef.current && 'selector {\n}\n'.replace(/\s+/g, '') === customCSSRef.current.replace(/\s+/g, '')) {
      return className;
    }

    if (className) {
      classes = className;

      if (!classes.includes('css-')) {
        classes = classes.split(' ');
        classes.push("css-".concat(uniqueId));
        classes = classes.join(' ');
      }

      classArRef.current = classes.split(' ');
      classArRef.current = classArRef.current.find(function (i) {
        return i.includes('css-');
      });
    } else {
      classes = "css-".concat(uniqueId);
      classArRef.current = classes;
    }

    return classes;
  };

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    class: "wecodeart-advanced-css"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("hr", null), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h2", {
    class: "wecodeart-advanced-css__title"
  }, __('Add your custom CSS.', 'wecodeart')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "wecodeart-advanced-css__editor",
    id: "wecodeart-css-editor"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    class: "wecodeart-advanced-css__content"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null, __('Use', 'wecodeart'), " ", Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("code", null, "selector"), " ", __('to target block wrapper.', 'wecodeart')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null, __('If you generate a new one just replace old selector with "selector" keyword for a new one.', 'wecodeart')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null, __('Example:', 'wecodeart')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("pre", {
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
/* harmony import */ var _handler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./handler */ "./src/js/gutenberg/extensions/with-styles/handler.js");
/* harmony import */ var _injector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./injector */ "./src/js/gutenberg/extensions/with-styles/injector.js");
/* harmony import */ var _injector__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_injector__WEBPACK_IMPORTED_MODULE_3__);


/**
 * WordPress dependencies.
 */
var _lodash = lodash,
    assign = _lodash.assign;
var _wp = wp,
    addFilter = _wp.hooks.addFilter,
    hasBlockSupport = _wp.blocks.hasBlockSupport,
    createHigherOrderComponent = _wp.compose.createHigherOrderComponent,
    InspectorAdvancedControls = _wp.blockEditor.InspectorAdvancedControls;
var _wecodeartGutenberg = wecodeartGutenberg,
    restrictedBlocks = _wecodeartGutenberg.restrictedBlocks,
    _wecodeartGutenberg$r = _wecodeartGutenberg.removeStyles,
    removeStyles = _wecodeartGutenberg$r === void 0 ? [] : _wecodeartGutenberg$r;
/**
 * Internal dependencies.
 */





var addAttributes = function addAttributes(props) {
  var name = props.name;
  var isRestrictedBlock = restrictedBlocks.includes(name);
  var hasClassName = hasBlockSupport(name, 'className', true);

  if (!isRestrictedBlock && hasClassName) {
    props.attributes = assign(props.attributes, {
      hasCustomCSS: {
        type: 'boolean',
        default: false
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
 * Override props assigned to save component to inject atttributes
 *
 * @param   {Object}    extraProps Additional props applied to save element.
 * @param   {Object}    blockType  Block type.
 * @param   {Object}    attributes Current block attributes.
 *
 * @return  {Object}    Filtered props applied to save element.
 */


function applyExtraSettings(extraProps, blockType) {
  var blockName = blockType.name;

  if (removeStyles.includes(blockName)) {
    extraProps.style = {};
  }

  return extraProps;
}
/**
 * Override the default edit UI to include a new block inspector control for
 * assigning the custom class name, if block supports custom class name.
 *
 * @param 	{Function} 	BlockEdit Original component.
 *
 * @return 	{string} 	Wrapped component.
 */


var withInspectorControl = createHigherOrderComponent(function (BlockEdit) {
  return function (props) {
    var name = props.name,
        isSelected = props.isSelected;
    var isRestrictedBlock = restrictedBlocks.includes(name);
    var hasClassName = hasBlockSupport(name, 'className', true);

    if (!isRestrictedBlock && hasClassName && isSelected) {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(BlockEdit, props), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InspectorAdvancedControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_Editor__WEBPACK_IMPORTED_MODULE_1__["default"], props)));
    }

    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(BlockEdit, props);
  };
}, 'withInspectorControl');
/**
 * Apply Filters
 */

function applyFilters() {
  addFilter('blocks.registerBlockType', 'wecodeart/blocks/custom-css/addAttributes', addAttributes);
  addFilter('blocks.getSaveContent.extraProps', 'wecodeart/blocks/custom-css/applyExtraSettings', applyExtraSettings);
  addFilter('editor.BlockEdit', 'wecodeart/editor/custom-css/withInspectorControl', withInspectorControl);
}

applyFilters();

/***/ }),

/***/ "./src/js/gutenberg/extensions/with-styles/handler.js":
/*!************************************************************!*\
  !*** ./src/js/gutenberg/extensions/with-styles/handler.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * WordPress dependencies
 */
var _wp = wp,
    apiFetch = _wp.apiFetch,
    _wp$data = _wp.data,
    select = _wp$data.select,
    subscribe = _wp$data.subscribe,
    dispatch = _wp$data.dispatch;

var handleNotice = function handleNotice(_ref) {
  var message = _ref.message;

  var _dispatch = dispatch('core/notices'),
      createNotice = _dispatch.createNotice;

  return createNotice('success', message, {
    isDismissible: true,
    type: 'snackbar'
  });
};

var checked = true;
var reusableBlocks = {};
/* harmony default export */ __webpack_exports__["default"] = (subscribe(function () {
  var _select$getSettings = select('core/block-editor').getSettings(),
      __experimentalReusableBlocks = _select$getSettings.__experimentalReusableBlocks;

  var _select = select('core/editor'),
      getCurrentPostId = _select.getCurrentPostId,
      isSavingPost = _select.isSavingPost,
      isPublishingPost = _select.isPublishingPost,
      isAutosavingPost = _select.isAutosavingPost,
      isCurrentPostPublished = _select.isCurrentPostPublished,
      __experimentalIsSavingReusableBlock = _select.__experimentalIsSavingReusableBlock;

  var _select2 = select('core'),
      isSavingEntityRecord = _select2.isSavingEntityRecord;

  var isSavingReusableBlock;

  if (__experimentalIsSavingReusableBlock) {
    isSavingReusableBlock = function isSavingReusableBlock(id) {
      return __experimentalIsSavingReusableBlock(id);
    };
  } else {
    isSavingReusableBlock = function isSavingReusableBlock(id) {
      return isSavingEntityRecord('postType', 'wp_block', id);
    };
  }

  var isAutoSaving = isAutosavingPost();
  var isPublishing = isPublishingPost();
  var isSaving = isSavingPost();
  var getReusableBlocks = __experimentalReusableBlocks || [];
  var postPublished = isCurrentPostPublished();
  /**
   * Handle Reusable Blocks
   */

  getReusableBlocks.map(function (_ref2) {
    var id = _ref2.id,
        isTemporary = _ref2.isTemporary;

    if (id) {
      var isBlockSaving = isSavingReusableBlock(id);

      if (isBlockSaving && !isTemporary) {
        reusableBlocks[id] = {
          id: id,
          isSaving: true
        };
      }

      if (!isBlockSaving && !isTemporary && !!reusableBlocks[id]) {
        if (id === reusableBlocks[id].id && !isBlockSaving && reusableBlocks[id].isSaving) {
          reusableBlocks[id].isSaving = false;
          apiFetch({
            path: "wecodeart/v1/save_block_meta/".concat(id),
            method: 'POST'
          }).then(handleNotice);
        }
      }
    }
  });
  /**
   * Handle Normal Blocks
   */

  if ((isPublishing || postPublished && isSaving) && !isAutoSaving) {
    checked = false;
  } else {
    if (!checked) {
      apiFetch({
        path: "wecodeart/v1/save_post_meta/".concat(getCurrentPostId()),
        method: 'POST'
      }).then(handleNotice);
      checked = true;
    }
  }
}));

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
var _wp = wp,
    __ = _wp.i18n.__,
    parse = _wp.blocks.parse,
    _wp$data = _wp.data,
    select = _wp$data.select,
    subscribe = _wp$data.subscribe;
var _lodash = lodash,
    flattenDeep = _lodash.flattenDeep;

var addStyle = function addStyle(style) {
  var element = document.getElementById('wecodeart-blocks-dynamic-styles');

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

var getCustomCssFromBlocks = function getCustomCssFromBlocks(blocks, reusableBlocks) {
  if (!blocks) {
    return '';
  } // Return the children of the block. The result is an array deeply nested that match the structure of the block in the editor.


  var getChildrenFromBlock = function getChildrenFromBlock(block) {
    var childrends = [];

    if ('core/block' === block.name && null !== reusableBlocks) {
      var reBlocks = reusableBlocks.find(function (i) {
        return block.attributes.ref === i.id;
      });

      if (reBlocks && reBlocks.content) {
        childrends.push(parse(reBlocks.content.raw || reBlocks.content).map(function (child) {
          return [child, getChildrenFromBlock(child)];
        }));
      }

      ;
    }

    if (undefined !== block.innerBlocks && 0 < block.innerBlocks.length) {
      childrends.push(block.innerBlocks.map(function (child) {
        return [child, getChildrenFromBlock(child)];
      }));
    }

    return childrends;
  }; // Get all the blocks and their children


  var allBlocks = blocks.map(function (block) {
    return [block, getChildrenFromBlock(block)];
  }); // Transform the deply nested array in a simple one and then get the `customCss` value where it is the case

  var extractCustomCss = flattenDeep(allBlocks).map(function (block) {
    if (block.attributes && block.attributes.hasCustomCSS) {
      if (block.attributes.customCSS && null !== block.attributes.customCSS) {
        return block.attributes.customCSS + '\n';
      }
    }

    return '';
  }); // Build the global style

  var style = extractCustomCss.reduce(function (acc, localStyle) {
    return acc + localStyle;
  }, ''); // For debugging
  // console.log( 'Get all the block', allBlocks );
  // console.log( 'Extract customCss', extractCustomCss );
  // console.log( 'Final Result\n', style );

  return style;
};

var subscribed = subscribe(function () {
  var _ref = select('core/block-editor') || select('core/editor'),
      getBlocks = _ref.getBlocks;

  var blocks = getBlocks();
  var reusableBlocks = select('core').getEntityRecords('postType', 'wp_block');
  var blocksStyle = getCustomCssFromBlocks(blocks, reusableBlocks);
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