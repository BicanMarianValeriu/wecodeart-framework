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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/gutenberg/extensions/with-patterns/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/gutenberg/extensions/with-patterns/components/control.js":
/*!*************************************************************************!*\
  !*** ./src/js/gutenberg/extensions/with-patterns/components/control.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal */ "./src/js/gutenberg/extensions/with-patterns/components/modal.js");


/**
 * WordPress dependencies
 */
const {
  i18n: {
    __
  },
  components: {
    Icon
  },
  element: {
    useState
  },
  editPost: {
    PluginBlockSettingsMenuItem
  }
} = wp;
/**
 * Internal dependencies
 */



const Render = () => {
  const [isOpen, setOpen] = useState(false);

  const openModal = () => setOpen(true);

  const closeModal = () => setOpen(false);

  const props = {
    isOpen,
    openModal,
    closeModal
  };
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PluginBlockSettingsMenuItem, {
    icon: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Icon, {
      icon: "welcome-view-site",
      className: "components-menu-items__item-icon"
    }),
    label: __('Add to Design patterns', 'wecodeart'),
    onClick: openModal
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_modal__WEBPACK_IMPORTED_MODULE_1__["default"], props));
};

/* harmony default export */ __webpack_exports__["default"] = (Render);

/***/ }),

/***/ "./src/js/gutenberg/extensions/with-patterns/components/modal.js":
/*!***********************************************************************!*\
  !*** ./src/js/gutenberg/extensions/with-patterns/components/modal.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);


/**
 * WordPress dependencies
 */
const {
  apiFetch,
  i18n: {
    __,
    sprintf
  },
  compose: {
    compose
  },
  element: {
    useState
  },
  blocks: {
    serialize
  },
  blockEditor: {
    BlockPreview
  },
  data: {
    withSelect,
    withDispatch
  },
  components: {
    Button,
    Modal,
    TextControl,
    TextareaControl,
    SelectControl
  }
} = wp;

const PatternsModal = ({
  blockPatternCategories,
  closeModal,
  isOpen,
  selectedBlocks,
  createErrorNotice,
  createSuccessNotice,
  setIsInserterOpened,
  getSettings,
  updateSettings
}) => {
  const [data, setData] = useState({
    name: '',
    description: '',
    category: ''
  });

  const savePattern = e => {
    e.preventDefault();
    const {
      name,
      category,
      description
    } = data;
    apiFetch({
      path: '/wp/v2/wca_pattern',
      method: 'POST',
      data: {
        title: name,
        slug: name,
        content: serialize(selectedBlocks),
        excerpt: description,
        status: 'publish',
        terms: {
          wca_pattern_type: ['pattern'],
          wca_pattern_category: [category]
        }
      }
    }).then(() => {
      closeModal(); // Inject block pattern into the inserter.

      updateSettings({ ...getSettings(),
        __experimentalBlockPatterns: [...getSettings().__experimentalBlockPatterns, {
          title: name,
          name: `wca_pattern/${name}`,
          content: serialize(selectedBlocks),
          description,
          categories: [category]
        }]
      });
      createSuccessNotice(sprintf(__('"%s" pattern has been saved.', 'wecodeart'), name), {
        type: 'snackbar',
        actions: [{
          label: __('View Patterns', 'wecodeart'),
          onClick: () => setIsInserterOpened(true)
        }]
      });
    }).catch(() => createErrorNotice(__('Failed to save new pattern.', 'wecodeart')));
  };

  return isOpen && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Modal, {
    title: __('Save Design Pattern', 'wecodeart'),
    onRequestClose: closeModal,
    className: "wecodeart-patterns-modal"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "wecodeart-patterns-modal__preview"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(BlockPreview, {
    autoHeight: true,
    blocks: selectedBlocks
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("form", {
    onSubmit: savePattern
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(TextControl, {
    label: __('Name', 'wecodeart') + '*',
    onChange: name => setData({ ...data,
      name
    }),
    required: true
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(TextareaControl, {
    label: __('Description', 'wecodeart'),
    onChange: description => setData({ ...data,
      description
    })
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SelectControl, {
    label: __('Category', 'wecodeart'),
    options: [{
      label: __('Select a pattern category', 'wecodeart'),
      value: ''
    }, ...blockPatternCategories.map(category => ({ ...category,
      value: category.name
    }))],
    onChange: category => setData({ ...data,
      category
    })
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Button, {
    isPrimary: true,
    type: "submit"
  }, __('Save Pattern', 'wecodeart'))));
};

/* harmony default export */ __webpack_exports__["default"] = (compose([withSelect(select => {
  const {
    getMultiSelectedBlocks,
    getSelectedBlock,
    getSelectedBlockCount,
    getSettings
  } = select('core/block-editor');
  return {
    getSettings,
    selectedBlocks: getSelectedBlockCount() === 1 ? getSelectedBlock() : getMultiSelectedBlocks(),
    blockPatternCategories: getSettings().__experimentalBlockPatternCategories
  };
}), withDispatch(dispatch => {
  const {
    updateSettings
  } = dispatch('core/block-editor');
  const {
    setIsInserterOpened
  } = dispatch('core/edit-post');
  const {
    createErrorNotice,
    createSuccessNotice
  } = dispatch('core/notices');
  return {
    createErrorNotice,
    createSuccessNotice,
    setIsInserterOpened,
    updateSettings
  };
})])(PatternsModal));

/***/ }),

/***/ "./src/js/gutenberg/extensions/with-patterns/index.js":
/*!************************************************************!*\
  !*** ./src/js/gutenberg/extensions/with-patterns/index.js ***!
  \************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_control__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/control */ "./src/js/gutenberg/extensions/with-patterns/components/control.js");
/**
 * Internal dependencies
 */

const {
  registerPlugin
} = wp.plugins;
registerPlugin('wca-patterns', {
  icon: false,
  render: _components_control__WEBPACK_IMPORTED_MODULE_0__["default"]
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
//# sourceMappingURL=ext-patterns.js.map