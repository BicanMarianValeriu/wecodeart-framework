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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/admin/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/extends.js":
/*!********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/extends.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _extends() {
  module.exports = _extends = Object.assign || function (target) {
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

  module.exports["default"] = module.exports, module.exports.__esModule = true;
  return _extends.apply(this, arguments);
}

module.exports = _extends;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./src/js/admin/components/common/notices.js":
/*!***************************************************!*\
  !*** ./src/js/admin/components/common/notices.js ***!
  \***************************************************/
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
  useSelect,
  useDispatch
} = wp.data;
const {
  SnackbarList
} = wp.components;
/* harmony default export */ __webpack_exports__["default"] = (() => {
  const notices = useSelect(select => select('core/notices').getNotices().filter(n => n.type === 'snackbar'), []);
  const {
    removeNotice
  } = useDispatch('core/notices');
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SnackbarList, {
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
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Extensions; });
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
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(TabPanel, {
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
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

const {
  i18n: {
    __,
    sprintf
  },
  element: {
    RawHTML,
    useEffect,
    useState
  }
} = wp;
const {
  adminUrl
} = wecodeart;
/* harmony default export */ __webpack_exports__["default"] = (() => {
  const notesUrl = 'https://raw.githubusercontent.com/BicanMarianValeriu/wecodeart-framework/master/notifications.json';
  const [notes, setNotes] = useState([]);
  useEffect(() => {
    (async () => {
      const data = await fetch(notesUrl).then(res => res.json());
      const {
        items
      } = data;
      setNotes(items);
    })();
  }, []);
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "d-flex flex-column flex-md-row flex-md-nowrap"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "col col-md-7"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null, __('WeCodeArt Framework provides set of tools to extend the way you are building content on WordPress Gutenberg block editor. Designed and integrated to help users easily navigate; and control each block the way it should be.', 'wecodeart')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "card-group mb-5"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "card"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "card-body"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h3", {
    className: "card-title"
  }, __('Customizer Options', 'wecodeart')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", {
    className: "card-text"
  }, "WeCodeArt Framework still uses WP Customizer API to manage logo, favicon, menus, set home or blog page. You can also add your own custom CSS."), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("a", {
    href: adminUrl + '/customize.php',
    class: "button button-primary is-primary"
  }, __('Legacy Options', 'wecodeart')))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "card"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "card-body"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h3", {
    className: "card-title"
  }, __('Rate Us Five!', 'wecodeart')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", {
    className: "card-text"
  }, "If you like this theme please give me a 5 star rating. This would boost my motivation and help other users make a comfortable decision while choosing the WeCodeArt Framework."), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("a", {
    href: "//wordpress.org/support/theme/wecodeart/reviews/?filter=5#new-post",
    class: "button button-primary is-primary",
    target: "_blank"
  }, __('Ok, you deserve it', 'wecodeart'))))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "alert alert-warning"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RawHTML, null, sprintf(__('If you have any questions or suggestion, let us know through our %1$sFacebook community %3$s. Also, %2$ssubscribe to our newsletter%3$s if you want to stay up to date with what`s new and upcoming features.', 'wecodeart'), '<a href="https://www.facebook.com/wecodeart" target="_blank">', '<a href="https://www.wecodeart.com/" target="_blank">', '</a>')))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "col col-md-4 offset-md-1"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h2", {
    className: "d-flex justify-content-between"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", null, __('What`s next?', 'wecodeart')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
    class: "badge rounded-pill bg-dark"
  }, __('Developer news', 'wecodeart'))), notes.map(({
    title,
    content,
    type = 'info'
  }) => {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: `alert alert-${type}`,
      role: "alert"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h3", null, title), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null, content));
  })));
});

/***/ }),

/***/ "./src/js/admin/components/index.js":
/*!******************************************!*\
  !*** ./src/js/admin/components/index.js ***!
  \******************************************/
/*! exports provided: Notices, Licenses, Extensions, GettingStarted */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _common_notices__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common/notices */ "./src/js/admin/components/common/notices.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Notices", function() { return _common_notices__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _licenses__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./licenses */ "./src/js/admin/components/licenses.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Licenses", function() { return _licenses__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _extensions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./extensions */ "./src/js/admin/components/extensions.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Extensions", function() { return _extensions__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _gettingStarted__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gettingStarted */ "./src/js/admin/components/gettingStarted.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GettingStarted", function() { return _gettingStarted__WEBPACK_IMPORTED_MODULE_3__["default"]; });






/***/ }),

/***/ "./src/js/admin/components/licenses.js":
/*!*********************************************!*\
  !*** ./src/js/admin/components/licenses.js ***!
  \*********************************************/
/*! exports provided: License, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "License", function() { return License; });
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
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Placeholder, {
      style: {
        marginTop: 20
      },
      icon: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Spinner, null),
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
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RawHTML, null, sprintf(__('Enter your license keys here to receive updates. If your license keys are expired, please %1$srenew your licenses%2$s.', 'wecodeart'), '<a href="https://www.wecodeart.com/" target="_blank">', '</a>'))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("table", {
    className: "wecodeart-table table table-bordered table-hover",
    style: {
      width: '100%'
    }
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("thead", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("tr", {
    style: {
      textAlign: 'left'
    }
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("th", null, __('Product', 'wecodeart')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("th", null, __('License Key', 'wecodeart')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("th", null, __('Actions', 'wecodeart')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("th", null, __('Status', 'wecodeart')))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("tbody", null, fields.map(({
    id,
    label,
    externalUrl = ''
  }) => {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("tr", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("td", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("strong", null, label)), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("td", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(BaseControl, {
      className: "wecodeart-button-field",
      id,
      key: id
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("input", {
      id: id,
      type: "text",
      value: formData[id],
      placeholder: __('API Key', 'wecodeart'),
      disabled: wecodeartSettings[id] === 'FREEMIUM',
      onChange: ({
        target: {
          value
        }
      }) => setFormData({ ...formData,
        [id]: value
      })
    }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("td", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "wecodeart-button-group"
    }, externalUrl !== '' && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ExternalLink, {
      href: externalUrl,
      className: "wecodeart-button-group__item"
    }, __('Get API Key', 'wecodeart')))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("td", {
      style: {
        backgroundColor: '#d7ffd2'
      }
    }, sprintf(__('Days: %s', 'wecodeart'), __('Unlimited', 'wecodeart'))));
  }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Button, {
    className: "button",
    isPrimary: true,
    isLarge: true,
    icon: loading && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Spinner, null),
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
/* harmony default export */ __webpack_exports__["default"] = (withFilters('wecodeart.admin.licensePanel')(License));

/***/ }),

/***/ "./src/js/admin/index.js":
/*!*******************************!*\
  !*** ./src/js/admin/index.js ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
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
      wecodeartSettings: getEntityRecord('wecodeart', 'settings')
    };
  });
  const tabProps = {
    saveEntityRecord,
    isRequesting,
    wecodeartSettings,
    createNotice
  };
  let tabs = [{
    name: 'wca-getting-started',
    title: __('Getting Started', 'wecodeart'),
    className: 'wca-getting-started',
    render: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_components__WEBPACK_IMPORTED_MODULE_2__["GettingStarted"], null)
  }];
  const extensions = applyFilters('wecodeart.admin.extensions', []);

  if (extensions.length) {
    tabs = [...tabs, {
      name: 'wca-extensions',
      title: __('Extensions', 'wecodeart'),
      className: 'wca-extensions',
      render: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_components__WEBPACK_IMPORTED_MODULE_2__["Extensions"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, tabProps, {
        extensions
      }))
    }];
  }

  tabs = [...tabs, {
    name: 'wca-license',
    title: __('License(s)', 'wecodeart'),
    className: 'wca-license',
    render: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_components__WEBPACK_IMPORTED_MODULE_2__["Licenses"], tabProps)
  }];
  const [initialTab, setInitialTab] = useState('');
  useEffect(() => {
    const {
      hash = ''
    } = document.location;
    setInitialTab(hash.replace('#', ''));
  }, [wecodeartSettings]);

  const MainPanel = () => Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Panel, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(PanelBody, {
    opened: true
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: "components-panel__header"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("p", {
    className: "wecodeart-panel__header-hint"
  }, __('Appearance', 'wecodeart'), " \u2192 WeCodeArt"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("h2", null, __('Getting Started with', 'wecodeart'), " ", Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("strong", null, "WeCodeArt Framework"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("code", null, themeVersion)), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("p", null, sprintf(__('Congratulations %s! You`ve just unlocked more Gutenberg block editor tools for easier editing and better workflow.', 'wecodeart'), currentUser))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(PanelRow, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(TabPanel, {
    className: "wecodeart-tab-panel",
    activeClass: "active-tab",
    initialTabName: initialTab,
    onSelect: tab => document.location.hash = tab,
    tabs: tabs
  }, ({
    render
  }) => render))));

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(MainPanel, null), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_components__WEBPACK_IMPORTED_MODULE_2__["Notices"], null));
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

  }]); // Render Admin

  render(Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(WeCodeArt, null), document.getElementById('wecodeart'));
});

/***/ }),

/***/ "./src/scss/admin/index.scss":
/*!***********************************!*\
  !*** ./src/scss/admin/index.scss ***!
  \***********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
//# sourceMappingURL=admin.js.map