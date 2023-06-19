/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
  data: {
    useSelect,
    useDispatch
  },
  components: {
    SnackbarList
  }
} = wp;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {
  const notices = useSelect(select => select('core/notices').getNotices().filter(_ref => {
    let {
      type
    } = _ref;
    return type === 'snackbar';
  }), []);
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

/***/ "./src/js/admin/components/index.js":
/*!******************************************!*\
  !*** ./src/js/admin/components/index.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GettingStarted": () => (/* reexport safe */ _panels_gettingStarted__WEBPACK_IMPORTED_MODULE_3__["default"]),
/* harmony export */   "Licenses": () => (/* reexport safe */ _panels_licenses__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   "Notices": () => (/* reexport safe */ _common_notices__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   "SubPanel": () => (/* reexport safe */ _panels_panel__WEBPACK_IMPORTED_MODULE_2__["default"])
/* harmony export */ });
/* harmony import */ var _common_notices__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common/notices */ "./src/js/admin/components/common/notices.js");
/* harmony import */ var _panels_licenses__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./panels/licenses */ "./src/js/admin/components/panels/licenses.js");
/* harmony import */ var _panels_panel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./panels/panel */ "./src/js/admin/components/panels/panel.js");
/* harmony import */ var _panels_gettingStarted__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./panels/gettingStarted */ "./src/js/admin/components/panels/gettingStarted.js");





/***/ }),

/***/ "./src/js/admin/components/panels/gettingStarted.js":
/*!**********************************************************!*\
  !*** ./src/js/admin/components/panels/gettingStarted.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

const {
  i18n: {
    __
  },
  element: {
    useState,
    useEffect
  },
  data: {
    useSelect
  },
  components: {
    Spinner,
    Placeholder,
    Dashicon,
    Icon,
    Card,
    CardHeader,
    CardBody,
    Notice,
    Button,
    __experimentalHStack: HStack
  }
} = wp;
const {
  adminUrl,
  themeDirs
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
  const joinFBImage = `${themeDirs.uri}/assets/images/join-fb.svg`;
  const getInTouchImage = `${themeDirs.uri}/assets/images/connect.svg`;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "grid grid--layout"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "grid__main"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Card, {
    className: "my-3 shadow-none"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(CardBody, null, __('WeCodeArt Framework provides set of tools to extend the way you are building content on WordPress Gutenberg block editor. Designed and integrated to help users easily navigate; and control each block the way it should be.', 'wecodeart'))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "grid grid--cards"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Card, {
    className: "m-0 shadow-none"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(CardHeader, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", {
    className: "m-0"
  }, __('Need Support?', 'wecodeart'))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(CardBody, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, __('Whether you need assistance, wish to report a bug, or have a new feature request, please create a topic in the support forum on WordPress.org.', 'wecodeart')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Button, {
    href: "https://wordpress.org/support/theme/wecodeart/",
    isPrimary: true
  }, __('Support Forum', 'wecodeart')))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Card, {
    className: "m-0 shadow-none"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(CardHeader, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", {
    className: "m-0"
  }, __('Rate Us Five!', 'wecodeart'))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(CardBody, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, __('If you like this theme please give it a 5-star rating. This would boost my motivation and help other users make a comfortable decision while choosing us.', 'wecodeart')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Button, {
    href: "//wordpress.org/support/theme/wecodeart/reviews/?filter=5#new-post",
    isPrimary: true,
    target: "_blank"
  }, __('Ok, you deserve it', 'wecodeart')))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Card, {
    className: "m-0 shadow-none",
    style: {
      '--wca--card-image': `url(${joinFBImage})`,
      '--wca--card-bg': '#D5EAFF'
    }
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(CardHeader, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", {
    className: "m-0"
  }, __('Join Our Facebook Community', 'wecodeart'))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(CardBody, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, __('Do join WeCodeArt\'s official Facebook page to share your experience, thoughts, and ideas.', 'wecodeart')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Button, {
    href: "https://www.facebook.com/wecodeart/",
    isPrimary: true,
    target: "_blank"
  }, __('Join Now', 'wecodeart')))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Card, {
    className: "m-0 shadow-none",
    style: {
      '--wca--card-image': `url(${getInTouchImage})`,
      '--wca--card-bg': '#E7E6FE'
    }
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(CardHeader, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", {
    className: "m-0"
  }, __('Stay in Touch with Us', 'wecodeart'))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(CardBody, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, __('Stay in touch via our social media channels to receive the latest announcements and updates.', 'wecodeart')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(HStack, {
    className: "wp-block-social-links"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
    className: "wp-social-link wp-social-link-github wp-block-social-link my-0 me-2"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    rel: "noopener nofollow",
    target: "_blank",
    href: "https://wordpress.org/themes/wecodeart/"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Dashicon, {
    size: 20,
    icon: "wordpress"
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
    className: "wp-social-link wp-social-link-facebook wp-block-social-link my-0 me-2"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    rel: "noopener nofollow",
    target: "_blank",
    href: "https://www.facebook.com/wecodeart/"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Icon, {
    size: 20,
    icon: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      fill: "currentColor",
      viewBox: "0 0 16 16"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
      d: "M16 8.05A8.03 8.03 0 0 0 8 0C3.58 0 0 3.6 0 8.05A8.04 8.04 0 0 0 6.75 16v-5.62H4.72V8.05h2.03V6.27c0-2.01 1.2-3.13 3.02-3.13.88 0 1.8.16 1.8.16v1.98h-1.02c-.99 0-1.3.62-1.3 1.26v1.5h2.22l-.35 2.34H9.25V16A8.04 8.04 0 0 0 16 8.05z"
    }))
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
    className: "wp-social-link wp-social-link-github wp-block-social-link my-0 me-2"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    rel: "noopener nofollow",
    target: "_blank",
    href: "https://github.com/BicanMarianValeriu/wecodeart-framework/"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Icon, {
    size: 20,
    icon: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      fill: "currentColor",
      viewBox: "0 0 16 16"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
      d: "M8 0a8 8 0 0 0-2.53 15.59c.4.07.55-.17.55-.38l-.01-1.49c-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82a7.42 7.42 0 0 1 4 0c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48l-.01 2.2c0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8a8 8 0 0 0-8-8z"
    }))
  })))))))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "grid__side bg-white rounded-bottom"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Card, {
    className: "shadow-none"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(CardHeader, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", null, __('What`s next?', 'wecodeart')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "badge rounded-pill bg-dark"
  }, __('Developer news', 'wecodeart'))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(CardBody, null, isRequesting ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Placeholder, {
    className: 'my-4',
    icon: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Spinner, null),
    label: __('Loading', 'wecodeart'),
    instructions: __('Please wait, loading notifications...', 'wecodeart')
  }) : notes.map(_ref => {
    let {
      title,
      content,
      type = 'success'
    } = _ref;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Notice, {
      className: "mx-0 my-4 shadow-sm",
      type: type,
      isDismissible: false
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", null, title), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
      dangerouslySetInnerHTML: {
        __html: content
      }
    }));
  })))));
});

/***/ }),

/***/ "./src/js/admin/components/panels/licenses.js":
/*!****************************************************!*\
  !*** ./src/js/admin/components/panels/licenses.js ***!
  \****************************************************/
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
    Placeholder,
    Card,
    CardBody
  }
} = wp;
const License = props => {
  const {
    isRequesting,
    createNotice,
    saveSettings,
    settings
  } = props;

  if (isRequesting || !settings) {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Placeholder, {
      style: {
        marginTop: 20
      },
      icon: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Spinner, null),
      label: __('Loading', 'wecodeart'),
      instructions: __('Please wait, loading settings...', 'wecodeart')
    });
  } // Deprecated Filter


  let fields = applyFilters('wecodeart.admin.licensePanel.fields', [{
    id: 'theme_api_key',
    label: 'WeCodeArt Framework',
    externalUrl: '//www.wecodeart.com/product/wecodeart-framework/'
  }], props);
  fields = applyFilters('wecodeart.admin.tabs.license.fields', fields, props);
  const [loading, setLoading] = useState(null);
  const extensionOpts = fields.map(a => a.id);
  const apiOptions = Object.fromEntries(Object.entries(settings).filter(_ref => {
    let [key] = _ref;
    return extensionOpts.includes(key);
  }));
  const [formData, setFormData] = useState(apiOptions);
  const [hasChanges, setHasChanges] = useState(false);

  const handleNotice = () => {
    setLoading(false);
    setHasChanges(false);
    return createNotice('success', __('API Keys Saved.', 'wecodeart'));
  };

  const handleInputChange = _ref2 => {
    let {
      target
    } = _ref2;
    const {
      id,
      value
    } = target;
    setFormData({ ...formData,
      [id]: value
    });
    setHasChanges(true);
  }; // Deprecated Action


  doAction('wecodeart.admin.licensePanel', props);
  doAction('wecodeart.admin.tabs.license', props);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Card, {
    className: "my-3 shadow-none"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(CardBody, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RawHTML, null, sprintf(__('Enter your license keys here to receive updates. If your license keys are expired, please %1$srenew your licenses%2$s.', 'wecodeart'), '<a href="https://www.wecodeart.com/" target="_blank">', '</a>')))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "table-responsive"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("table", {
    className: "table table-bordered table-hover"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("thead", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", {
    style: {
      textAlign: 'left'
    }
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", null, __('Product', 'wecodeart')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", null, __('License Key', 'wecodeart')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", null, __('Actions', 'wecodeart')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", null, __('Status', 'wecodeart')))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("tbody", null, fields.map(_ref3 => {
    let {
      id,
      label,
      externalUrl = ''
    } = _ref3;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("strong", null, label)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(BaseControl, {
      id,
      key: id
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
      id: id,
      type: "text",
      value: formData[id],
      placeholder: __('API Key', 'wecodeart'),
      disabled: settings[id] === 'FREEMIUM',
      onChange: handleInputChange
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
  })))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Button, {
    className: "button",
    isPrimary: true,
    icon: loading && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Spinner, null),
    onClick: () => {
      setLoading(true);
      saveSettings(formData, handleNotice);
    },
    disabled: loading || !hasChanges
  }, loading ? '' : __('Save', 'wecodeart')));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (withFilters('wecodeart.admin.licensePanel')(License));

/***/ }),

/***/ "./src/js/admin/components/panels/panel.js":
/*!*************************************************!*\
  !*** ./src/js/admin/components/panels/panel.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Panel)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);


/**
 * WordPress dependencies
 */
const {
  element: {
    useEffect
  },
  components: {
    TabPanel
  }
} = wp;
function Panel(props) {
  var _tabs$find, _tabs$;

  const {
    tabs,
    ...tabProps
  } = props;
  const hash = window.location.hash.substr(1);
  const initialTab = hash ? (_tabs$find = tabs.find(_ref => {
    let {
      name
    } = _ref;
    return name === hash;
  })) === null || _tabs$find === void 0 ? void 0 : _tabs$find.name : (_tabs$ = tabs[0]) === null || _tabs$ === void 0 ? void 0 : _tabs$.name;

  const updateUrl = tabName => {
    if (history.pushState) {
      history.pushState(null, null, '#' + tabName);
    } else {
      window.location.hash = '#' + tabName;
    }
  };

  useEffect(() => {
    const handleHashChange = () => {
      const newHash = window.location.hash.substr(1);
      const matchingTab = tabs.find(_ref2 => {
        let {
          name
        } = _ref2;
        return name === newHash;
      });

      if (matchingTab) {
        updateUrl(matchingTab.name);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, [tabs]);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(TabPanel, {
    className: "wecodeart-tab-panel wecodeart-tab-panel--vertical",
    activeClass: "active-tab",
    orientation: "vertical",
    initialTabName: initialTab,
    onSelect: updateUrl,
    tabs: tabs
  }, tab => tab.render && typeof tab.render === 'function' && tab.render(tabProps));
}

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
    __
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
    useRef,
    useEffect,
    render
  },
  components: {
    TabPanel,
    Panel,
    PanelBody,
    PanelRow
  }
} = wp;
/**
 * Localization
 */

const {
  theme: {
    version: themeVersion
  }
} = wecodeart;
/**
 * Components
 */


/**
 * Styles
 */

 // Core

const WeCodeArt = () => {
  var _tabs$find, _tabs$;

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
    settings,
    saveEntityRecord,
    editEntityRecord,
    deleteEntityRecord,
    isRequesting
  } = useSelect(select => {
    const {
      isResolving
    } = select('core/data');
    const {
      getEntityRecord
    } = select('core');
    const {
      saveEntityRecord,
      editEntityRecord,
      deleteEntityRecord
    } = dispatch('core');
    return {
      saveEntityRecord,
      editEntityRecord,
      deleteEntityRecord,
      isRequesting: isResolving('core', 'getEntityRecord', ['wecodeart', 'settings']),
      settings: getEntityRecord('wecodeart', 'settings')
    };
  });

  const saveSettings = function (formData) {
    let callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : () => {};
    const value = Object.keys(formData).reduce((result, key) => {
      result[key] = formData[key] === '' ? 'unset' : formData[key];
      return result;
    }, {});
    saveEntityRecord('wecodeart', 'settings', value).then(callback);
  };

  const tabProps = {
    settings,
    wecodeartSettings: settings,
    saveSettings,
    isRequesting,
    createNotice,
    saveEntityRecord,
    editEntityRecord,
    deleteEntityRecord
  };
  const tabs = applyFilters('wecodeart.admin.tabs', [{
    name: 'intro',
    title: __('Getting Started', 'wecodeart'),
    className: 'wecodeart-intro',
    render: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_components__WEBPACK_IMPORTED_MODULE_2__.GettingStarted, null)
  }, // Deprecated filter: wecodeart.admin.extensions
  ...(applyFilters('wecodeart.admin.extensions', applyFilters('wecodeart.admin.tabs.plugins', [])).length ? [{
    name: 'plugins',
    title: __('Plugins', 'wecodeart'),
    className: 'wecodeart-plugins',
    render: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_components__WEBPACK_IMPORTED_MODULE_2__.SubPanel, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, tabProps, {
      tabs: applyFilters('wecodeart.admin.extensions', applyFilters('wecodeart.admin.tabs.plugins', []))
    }))
  }] : []), ...(applyFilters('wecodeart.admin.tabs.themes', []).length ? [{
    name: 'themes',
    title: __('Themes', 'wecodeart'),
    className: 'wecodeart-themes',
    render: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_components__WEBPACK_IMPORTED_MODULE_2__.SubPanel, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, tabProps, {
      tabs: applyFilters('wecodeart.admin.tabs.themes', [])
    }))
  }] : []), {
    name: 'license',
    title: __('License(s)', 'wecodeart'),
    className: 'wecodeart-license',
    render: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_components__WEBPACK_IMPORTED_MODULE_2__.Licenses, tabProps)
  }]);
  const urlParams = new URLSearchParams(window.location.search);
  const requestedTab = urlParams.get('tab');
  const initialTab = requestedTab ? (_tabs$find = tabs.find(_ref => {
    let {
      name
    } = _ref;
    return name === requestedTab;
  })) === null || _tabs$find === void 0 ? void 0 : _tabs$find.name : (_tabs$ = tabs[0]) === null || _tabs$ === void 0 ? void 0 : _tabs$.name;

  const updateUrl = tabName => {
    urlParams.set('tab', tabName);
    const {
      location: {
        protocol,
        host,
        pathname,
        hash
      }
    } = window;

    if (history.pushState) {
      const newUrl = `${protocol}//${host}${pathname}?${urlParams.toString()}${hash}`;
      return window.history.replaceState({
        path: newUrl
      }, '', newUrl);
    }

    return window.location.search = urlParams.toString();
  };

  const scriptRef = useRef(null);
  useEffect(() => {
    if (!settings) return;
    scriptRef.current = document.createElement('script');
    scriptRef.current.src = 'https://www.paypalobjects.com/donate/sdk/donate-sdk.js';

    scriptRef.current.onload = () => {
      PayPal.Donation.Button({
        env: 'production',
        hosted_button_id: 'PV9A4JDX84Z3W',
        image: {
          src: 'https://pics.paypal.com/00/s/MzMzMTdhOWItZmYxZS00MjcwLWIyNmItNDRiYzhhNGZhOWI0/file.PNG',
          alt: __('Donate with PayPal button', 'wecodeart'),
          title: __('Support the development of WeCodeArt Framework!', 'wecodeart')
        }
      }).render('#donate-button');
    };

    document.head.appendChild(scriptRef.current);
    return () => {
      document.head.removeChild(scriptRef.current);
    };
  }, [settings]);

  const MainPanel = () => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(Panel, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(PanelBody, {
    opened: true
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "components-panel__header"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "grid"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "g-col-12 g-col-md-8 g-col-lg-10"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("p", {
    className: "wecodeart-panel__header-hint"
  }, __('Appearance', 'wecodeart'), " \u2192 WeCodeArt"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("h2", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("strong", null, "WeCodeArt Framework"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("code", null, themeVersion))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "g-col-12 g-col-md-4 g-col-lg-2 align-self-end"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    id: "donate-button-container"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    id: "donate-button"
  }))))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(TabPanel, {
    className: "wecodeart-tab-panel",
    activeClass: "active-tab",
    initialTabName: initialTab,
    onSelect: updateUrl,
    tabs: tabs
  }, _ref2 => {
    let {
      render
    } = _ref2;
    return render;
  }))));

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(MainPanel, null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_components__WEBPACK_IMPORTED_MODULE_2__.Notices, null));
};

wp.domReady(() => {
  // Expose Settings
  dispatch('core').addEntities([{
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