/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/admin/components/common/donate.js":
/*!**************************************************!*\
  !*** ./src/js/admin/components/common/donate.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);


const donate = () => {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "mb-3"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("form", {
    action: "https://www.paypal.com/donate",
    method: "post",
    target: "_blank"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "hidden",
    name: "hosted_button_id",
    value: "PV9A4JDX84Z3W"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "image",
    src: "https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif",
    border: "0",
    name: "submit",
    title: "Support the development of WeCodeArt Framework!",
    alt: "Donate with PayPal button"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: "https://www.paypal.com/en_US/i/scr/pixel.gif",
    width: "1",
    height: "1",
    alt: "",
    border: "0"
  })));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (donate);

/***/ }),

/***/ "./src/js/admin/components/common/notices.js":
/*!***************************************************!*\
  !*** ./src/js/admin/components/common/notices.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);


/**
 * WordPress dependencies
 */
const {
  useSelect,
  useDispatch
} = wp.data;
const {
  SnackbarList
} = wp.components;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {
  const notices = useSelect(select => select('core/notices').getNotices().filter(n => n.type === 'snackbar'), []);
  const {
    removeNotice
  } = useDispatch('core/notices');
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(SnackbarList, {
    className: "components-editor-notices__snackbar",
    notices: notices,
    onRemove: removeNotice
  });
});

/***/ }),

/***/ "./src/js/admin/components/extensions.js":
/*!***********************************************!*\
  !*** ./src/js/admin/components/extensions.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Extensions)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);


/**
 * WordPress dependencies
 */
const {
  TabPanel
} = wp.components;
function Extensions(props) {
  const {
    extensions: tabs,
    ...tabProps
  } = props;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(TabPanel, {
    className: "wecodeart-tab-panel wecodeart-tab-panel--vertical",
    activeClass: "active-tab",
    orientation: "vertical",
    tabs: tabs
  }, tab => tab.render && typeof tab.render === 'function' && tab.render(tabProps));
}

/***/ }),

/***/ "./src/js/admin/components/gettingStarted.js":
/*!***************************************************!*\
  !*** ./src/js/admin/components/gettingStarted.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

const {
  i18n: {
    __,
    sprintf
  },
  element: {
    RawHTML,
    useState,
    useEffect
  },
  data: {
    useSelect
  },
  components: {
    Spinner,
    Placeholder
  }
} = wp;
const {
  adminUrl
} = wecodeart;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {
  const {
    isRequesting,
    request
  } = useSelect(select => {
    const {
      getEntityRecord
    } = select('core');
    const {
      isResolving
    } = select('core/data');
    return {
      isRequesting: isResolving('core', 'getEntityRecord', ['wecodeart', 'notifications']),
      request: getEntityRecord('wecodeart', 'notifications')
    };
  });
  const [notes, setNotes] = useState([]);
  useEffect(() => {
    if (!isRequesting && request) {
      const {
        items = []
      } = request;
      setNotes(items);
    }
  }, [isRequesting]);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "d-flex flex-column flex-md-row flex-md-nowrap"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "col col-md-7"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, __('WeCodeArt Framework provides set of tools to extend the way you are building content on WordPress Gutenberg block editor. Designed and integrated to help users easily navigate; and control each block the way it should be.', 'wecodeart')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "card-group mb-5"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "card"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "card-body"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", {
    className: "card-title"
  }, __('Customizer Options', 'wecodeart')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "card-text"
  }, "Looking for WP Customizer API to manage logo, favicon, set home or blog page? You can also add your own custom CSS there."), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: adminUrl + '/customize.php',
    class: "button button-primary is-primary"
  }, __('Legacy Options', 'wecodeart')))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "card"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "card-body"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", {
    className: "card-title"
  }, __('Rate Us Five!', 'wecodeart')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "card-text"
  }, "If you like this theme please give me a 5-star rating. This would boost my motivation and help other users make a comfortable decision while choosing the WeCodeArt Framework."), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: "//wordpress.org/support/theme/wecodeart/reviews/?filter=5#new-post",
    class: "button button-primary is-primary",
    target: "_blank"
  }, __('Ok, you deserve it', 'wecodeart'))))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "alert alert-warning"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RawHTML, null, sprintf(__('If you have any questions or suggestion, let us know through our %1$sFacebook community %3$s. Also, %2$ssubscribe to our newsletter%3$s if you want to stay up to date with what`s new and upcoming features.', 'wecodeart'), '<a href="https://www.facebook.com/wecodeart" target="_blank">', '<a href="https://www.wecodeart.com/" target="_blank">', '</a>')))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "col col-md-4 offset-md-1"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", {
    className: "d-flex justify-content-between"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, __('What`s next?', 'wecodeart')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    class: "badge rounded-pill bg-dark"
  }, __('Developer news', 'wecodeart'))), isRequesting ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Placeholder, {
    icon: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Spinner, null),
    label: __('Loading', 'wecodeart'),
    instructions: __('Please wait, loading notifications...', 'wecodeart')
  }) : notes.map(_ref => {
    let {
      title,
      content,
      type = 'info'
    } = _ref;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: `alert alert-${type}`,
      role: "alert"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", null, title), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
      dangerouslySetInnerHTML: {
        __html: content
      }
    }));
  })));
});

/***/ }),

/***/ "./src/js/admin/components/index.js":
/*!******************************************!*\
  !*** ./src/js/admin/components/index.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Donate": () => (/* reexport safe */ _common_donate__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   "Extensions": () => (/* reexport safe */ _extensions__WEBPACK_IMPORTED_MODULE_3__["default"]),
/* harmony export */   "GettingStarted": () => (/* reexport safe */ _gettingStarted__WEBPACK_IMPORTED_MODULE_4__["default"]),
/* harmony export */   "Licenses": () => (/* reexport safe */ _licenses__WEBPACK_IMPORTED_MODULE_2__["default"]),
/* harmony export */   "Notices": () => (/* reexport safe */ _common_notices__WEBPACK_IMPORTED_MODULE_1__["default"])
/* harmony export */ });
/* harmony import */ var _common_donate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common/donate */ "./src/js/admin/components/common/donate.js");
/* harmony import */ var _common_notices__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common/notices */ "./src/js/admin/components/common/notices.js");
/* harmony import */ var _licenses__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./licenses */ "./src/js/admin/components/licenses.js");
/* harmony import */ var _extensions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./extensions */ "./src/js/admin/components/extensions.js");
/* harmony import */ var _gettingStarted__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./gettingStarted */ "./src/js/admin/components/gettingStarted.js");






/***/ }),

/***/ "./src/js/admin/components/licenses.js":
/*!*********************************************!*\
  !*** ./src/js/admin/components/licenses.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "License": () => (/* binding */ License),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);


/**
 * WordPress dependencies
 */
const {
  i18n: {
    __,
    sprintf
  },
  hooks: {
    doAction,
    applyFilters
  },
  element: {
    RawHTML,
    useState
  },
  components: {
    withFilters,
    BaseControl,
    ExternalLink,
    Button,
    Spinner,
    Placeholder
  }
} = wp;
const {
  pickBy
} = lodash;
const License = props => {
  const {
    isRequesting,
    createNotice,
    saveEntityRecord,
    wecodeartSettings
  } = props;

  if (isRequesting || !wecodeartSettings) {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Placeholder, {
      style: {
        marginTop: 20
      },
      icon: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Spinner, null),
      label: __('Loading', 'wecodeart'),
      instructions: __('Please wait, loading settings...', 'wecodeart')
    });
  }

  const fields = applyFilters('wecodeart.admin.licensePanel.fields', [{
    id: 'theme_api_key',
    label: 'WeCodeArt Framework',
    externalUrl: '//www.wecodeart.com/product/wecodeart-framework/'
  }], props);
  const [loading, setLoading] = useState(null);
  const extensionOpts = fields.map(a => a.id);
  const apiOptions = pickBy(wecodeartSettings, (v, k) => extensionOpts.includes(k));
  const [formData, setFormData] = useState(apiOptions);

  const handleNotice = () => {
    setLoading(false);
    return createNotice('success', __('API Keys Saved.', 'wecodeart'));
  };

  doAction('wecodeart.admin.licensePanel', props);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RawHTML, null, sprintf(__('Enter your license keys here to receive updates. If your license keys are expired, please %1$srenew your licenses%2$s.', 'wecodeart'), '<a href="https://www.wecodeart.com/" target="_blank">', '</a>'))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("table", {
    className: "wecodeart-table table table-bordered table-hover",
    style: {
      width: '100%'
    }
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("thead", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", {
    style: {
      textAlign: 'left'
    }
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", null, __('Product', 'wecodeart')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", null, __('License Key', 'wecodeart')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", null, __('Actions', 'wecodeart')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", null, __('Status', 'wecodeart')))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("tbody", null, fields.map(_ref => {
    let {
      id,
      label,
      externalUrl = ''
    } = _ref;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("strong", null, label)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(BaseControl, {
      className: "wecodeart-button-field",
      id,
      key: id
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
      id: id,
      type: "text",
      value: formData[id],
      placeholder: __('API Key', 'wecodeart'),
      disabled: wecodeartSettings[id] === 'FREEMIUM',
      onChange: _ref2 => {
        let {
          target: {
            value
          }
        } = _ref2;
        return setFormData({ ...formData,
          [id]: value
        });
      }
    }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "wecodeart-button-group"
    }, externalUrl !== '' && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ExternalLink, {
      href: externalUrl,
      className: "wecodeart-button-group__item"
    }, __('Get API Key', 'wecodeart')))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
      style: {
        backgroundColor: '#d7ffd2'
      }
    }, sprintf(__('Days: %s', 'wecodeart'), __('Unlimited', 'wecodeart'))));
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Button, {
    className: "button",
    isPrimary: true,
    isLarge: true,
    icon: loading && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Spinner, null),
    onClick: () => {
      setLoading(true);
      let value = {};
      Object.keys(formData).map(k => value = { ...value,
        [k]: formData[k] === '' ? 'unset' : formData[k]
      });
      saveEntityRecord('wecodeart', 'settings', value).then(handleNotice);
    }
  }, loading ? '' : __('Save', 'wecodeart'))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (withFilters('wecodeart.admin.licensePanel')(License));

/***/ }),

/***/ "./src/scss/admin/index.scss":
/*!***********************************!*\
  !*** ./src/scss/admin/index.scss ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["element"];

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _extends)
/* harmony export */ });
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };
  return _extends.apply(this, arguments);
}

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
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*******************************!*\
  !*** ./src/js/admin/index.js ***!
  \*******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components */ "./src/js/admin/components/index.js");
/* harmony import */ var _scss_admin_index_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../scss/admin/index.scss */ "./src/scss/admin/index.scss");



/**
 * WordPress dependencies
 */
const {
  i18n: {
    __,
    sprintf
  },
  hooks: {
    applyFilters
  },
  data: {
    useSelect,
    useDispatch,
    dispatch
  },
  element: {
    useEffect,
    useState,
    render
  },
  components: {
    TabPanel,
    Panel,
    PanelBody,
    PanelRow
  }
} = wp;
const {
  currentUser,
  theme: {
    version: themeVersion
  }
} = wecodeart;
/* Settings */




const WeCodeArt = () => {
  const {
    createNotice: coreCreateNotice
  } = useDispatch('core/notices');

  const createNotice = (type, desc, opts) => {
    return coreCreateNotice(type, desc, {
      isDismissible: true,
      type: 'snackbar',
      ...opts
    });
  };

  const {
    wecodeartSettings,
    saveEntityRecord,
    editEntityRecord,
    deleteEntityRecord,
    isRequesting
  } = useSelect(select => {
    const {
      getEntityRecord
    } = select('core');
    const {
      isResolving
    } = select('core/data');
    const {
      saveEntityRecord,
      editEntityRecord,
      deleteEntityRecord
    } = dispatch('core');
    const isRequesting = isResolving('core', 'getEntityRecord', ['wecodeart', 'settings']);
    return {
      isRequesting,
      saveEntityRecord,
      editEntityRecord,
      deleteEntityRecord,
      wecodeartSettings: getEntityRecord('wecodeart', 'settings')
    };
  });
  const tabProps = {
    saveEntityRecord,
    editEntityRecord,
    deleteEntityRecord,
    isRequesting,
    wecodeartSettings,
    createNotice
  };
  let tabs = [{
    name: 'wca-getting-started',
    title: __('Getting Started', 'wecodeart'),
    className: 'wca-getting-started',
    render: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_components__WEBPACK_IMPORTED_MODULE_2__.GettingStarted, null)
  }];
  const extensions = applyFilters('wecodeart.admin.extensions', []);

  if (extensions.length) {
    tabs = [...tabs, {
      name: 'wca-extensions',
      title: __('Extensions', 'wecodeart'),
      className: 'wca-extensions',
      render: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_components__WEBPACK_IMPORTED_MODULE_2__.Extensions, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, tabProps, {
        extensions
      }))
    }];
  }

  tabs = [...tabs, {
    name: 'wca-license',
    title: __('License(s)', 'wecodeart'),
    className: 'wca-license',
    render: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_components__WEBPACK_IMPORTED_MODULE_2__.Licenses, tabProps)
  }];
  const [initialTab, setInitialTab] = useState('');
  useEffect(() => {
    const {
      hash = ''
    } = document.location;
    setInitialTab(hash.replace('#', ''));
  }, [wecodeartSettings]);

  const MainPanel = () => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(Panel, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(PanelBody, {
    opened: true
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "components-panel__header"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("p", {
    className: "wecodeart-panel__header-hint"
  }, __('Appearance', 'wecodeart'), " \u2192 WeCodeArt"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("h2", null, __('Getting Started with', 'wecodeart'), " ", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("strong", null, "WeCodeArt Framework"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("code", null, themeVersion)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("p", null, sprintf(__('Congratulations %s! You`ve just unlocked more Gutenberg block editor tools for easier editing and better workflow.', 'wecodeart'), currentUser)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_components__WEBPACK_IMPORTED_MODULE_2__.Donate, null)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(TabPanel, {
    className: "wecodeart-tab-panel",
    activeClass: "active-tab",
    initialTabName: initialTab,
    onSelect: tab => document.location.hash = tab,
    tabs: tabs
  }, _ref => {
    let {
      render
    } = _ref;
    return render;
  }))));

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(MainPanel, null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_components__WEBPACK_IMPORTED_MODULE_2__.Notices, null));
};

wp.domReady(() => {
  // Expose Settings
  dispatch('core').addEntities([{
    name: 'settings',
    // route name
    kind: 'core',
    // namespace
    baseURL: '/wp/v2/settings' // API path without /wp-json

  }, {
    name: 'settings',
    // route name
    kind: 'wecodeart',
    // namespace
    baseURL: '/wecodeart/v1/settings' // API path without /wp-json

  }, {
    name: 'notifications',
    // route name
    kind: 'wecodeart',
    // namespace
    baseURL: '/wecodeart/v1/notifications' // API path without /wp-json

  }]); // Render Admin

  render((0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(WeCodeArt, null), document.getElementById('wecodeart'));
});
})();

/******/ })()
;
//# sourceMappingURL=admin.js.map