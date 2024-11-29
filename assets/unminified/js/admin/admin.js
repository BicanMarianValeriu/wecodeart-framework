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
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

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
  const notices = useSelect(select => select('core/notices').getNotices().filter(({
    type
  }) => type === 'snackbar'), []);
  const {
    removeNotice
  } = useDispatch('core/notices');
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(SnackbarList, {
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
/* harmony export */   GettingStarted: () => (/* reexport safe */ _panels_gettingStarted__WEBPACK_IMPORTED_MODULE_3__["default"]),
/* harmony export */   Licenses: () => (/* reexport safe */ _panels_licenses__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   Notices: () => (/* reexport safe */ _common_notices__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   SubPanel: () => (/* reexport safe */ _panels_panel__WEBPACK_IMPORTED_MODULE_2__["default"])
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
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

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
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
    className: "grid grid--layout",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
      className: "grid__main",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Card, {
        className: "my-3 shadow-none",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(CardBody, {
          children: __('WeCodeArt Framework provides set of tools to extend the way you are building content on WordPress Gutenberg block editor. Designed and integrated to help users easily navigate; and control each block the way it should be.', 'wecodeart')
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "grid grid--cards",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Card, {
          className: "m-0 shadow-none",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(CardHeader, {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h3", {
              className: "m-0",
              children: __('Need Support?', 'wecodeart')
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(CardBody, {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
              children: __('Whether you need assistance, wish to report a bug, or have a new feature request, please create a topic in the support forum on WordPress.org.', 'wecodeart')
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Button, {
              href: "https://wordpress.org/support/theme/wecodeart/",
              isPrimary: true,
              target: "_blank",
              children: __('Support Forum', 'wecodeart')
            })]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Card, {
          className: "m-0 shadow-none",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(CardHeader, {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h3", {
              className: "m-0",
              children: __('Rate Us Five!', 'wecodeart')
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(CardBody, {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
              children: __('If you like this theme please give it a 5-star rating. This would boost my motivation and help other users make a comfortable decision while choosing us.', 'wecodeart')
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Button, {
              href: "//wordpress.org/support/theme/wecodeart/reviews/?filter=5#new-post",
              isPrimary: true,
              target: "_blank",
              children: __('Ok, you deserve it', 'wecodeart')
            })]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Card, {
          className: "m-0 shadow-none",
          style: {
            '--wca--card-image': `url(${joinFBImage})`,
            '--wca--card-bg': '#D5EAFF'
          },
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(CardHeader, {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h3", {
              className: "m-0",
              children: __('Join Our Facebook Community', 'wecodeart')
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(CardBody, {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
              children: __('Do join WeCodeArt\'s official Facebook page to share your experience, thoughts, and ideas.', 'wecodeart')
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Button, {
              href: "https://www.facebook.com/wecodeart/",
              isPrimary: true,
              target: "_blank",
              children: __('Join Now', 'wecodeart')
            })]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Card, {
          className: "m-0 shadow-none",
          style: {
            '--wca--card-image': `url(${getInTouchImage})`,
            '--wca--card-bg': '#E7E6FE'
          },
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(CardHeader, {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h3", {
              className: "m-0",
              children: __('Stay in Touch with Us', 'wecodeart')
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(CardBody, {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
              children: __('Stay in touch via our social media channels to receive the latest announcements and updates.', 'wecodeart')
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(HStack, {
              className: "wp-block-social-links",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li", {
                className: "wp-social-link wp-social-link-github wp-block-social-link my-0 me-2",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a", {
                  rel: "noopener nofollow",
                  target: "_blank",
                  href: "https://wordpress.org/themes/wecodeart/",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Dashicon, {
                    size: 20,
                    icon: "wordpress"
                  })
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li", {
                className: "wp-social-link wp-social-link-facebook wp-block-social-link my-0 me-2",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a", {
                  rel: "noopener nofollow",
                  target: "_blank",
                  href: "https://www.facebook.com/wecodeart/",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Icon, {
                    size: 20,
                    icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      fill: "currentColor",
                      viewBox: "0 0 16 16",
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
                        d: "M16 8.05A8.03 8.03 0 0 0 8 0C3.58 0 0 3.6 0 8.05A8.04 8.04 0 0 0 6.75 16v-5.62H4.72V8.05h2.03V6.27c0-2.01 1.2-3.13 3.02-3.13.88 0 1.8.16 1.8.16v1.98h-1.02c-.99 0-1.3.62-1.3 1.26v1.5h2.22l-.35 2.34H9.25V16A8.04 8.04 0 0 0 16 8.05z"
                      })
                    })
                  })
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li", {
                className: "wp-social-link wp-social-link-github wp-block-social-link my-0 me-2",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a", {
                  rel: "noopener nofollow",
                  target: "_blank",
                  href: "https://github.com/BicanMarianValeriu/wecodeart-framework/",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Icon, {
                    size: 20,
                    icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      fill: "currentColor",
                      viewBox: "0 0 16 16",
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
                        d: "M8 0a8 8 0 0 0-2.53 15.59c.4.07.55-.17.55-.38l-.01-1.49c-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82a7.42 7.42 0 0 1 4 0c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48l-.01 2.2c0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8a8 8 0 0 0-8-8z"
                      })
                    })
                  })
                })
              })]
            })]
          })]
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
      className: "grid__side bg-white rounded-bottom",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Card, {
        className: "shadow-none",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(CardHeader, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h2", {
            children: __('What`s next?', 'wecodeart')
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
            className: "badge rounded-pill bg-dark",
            children: __('Developer news', 'wecodeart')
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(CardBody, {
          children: isRequesting ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Placeholder, {
            className: 'my-4',
            icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Spinner, {}),
            label: __('Loading', 'wecodeart'),
            instructions: __('Please wait, loading notifications...', 'wecodeart')
          }) : notes.map(({
            title,
            content,
            type = 'success'
          }) => {
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Notice, {
              className: "mx-0 my-4 shadow-sm",
              type: type,
              isDismissible: false,
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h3", {
                children: title
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
                dangerouslySetInnerHTML: {
                  __html: content
                }
              })]
            });
          })
        })]
      })
    })]
  });
});

/***/ }),

/***/ "./src/js/admin/components/panels/licenses.js":
/*!****************************************************!*\
  !*** ./src/js/admin/components/panels/licenses.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   License: () => (/* binding */ License),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

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
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Placeholder, {
      style: {
        marginTop: 20
      },
      icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Spinner, {}),
      label: __('Loading', 'wecodeart'),
      instructions: __('Please wait, loading settings...', 'wecodeart')
    });
  }

  // Deprecated Filter
  let fields = applyFilters('wecodeart.admin.licensePanel.fields', [{
    id: 'theme_api_key',
    label: 'WeCodeArt Framework',
    externalUrl: '//www.wecodeart.com/product/wecodeart-framework/'
  }], props);
  fields = applyFilters('wecodeart.admin.tabs.license.fields', fields, props);
  const [loading, setLoading] = useState(null);
  const extensionOpts = fields.map(a => a.id);
  const apiOptions = Object.fromEntries(Object.entries(settings).filter(([key]) => extensionOpts.includes(key)));
  const [formData, setFormData] = useState(apiOptions);
  const [hasChanges, setHasChanges] = useState(false);
  const handleNotice = () => {
    setLoading(false);
    setHasChanges(false);
    return createNotice('success', __('API Keys Saved.', 'wecodeart'));
  };
  const handleInputChange = ({
    target
  }) => {
    const {
      id,
      value
    } = target;
    setFormData({
      ...formData,
      [id]: value
    });
    setHasChanges(true);
  };

  // Deprecated Action
  doAction('wecodeart.admin.licensePanel', props);
  doAction('wecodeart.admin.tabs.license', props);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Card, {
      className: "my-3 shadow-none",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(CardBody, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(RawHTML, {
          children: sprintf(__('Enter your license keys here to receive updates. If your license keys are expired, please %1$srenew your licenses%2$s.', 'wecodeart'), '<a href="https://www.wecodeart.com/" target="_blank">', '</a>')
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
      className: "table-responsive",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("table", {
        className: "table table-bordered table-hover",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("thead", {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
            style: {
              textAlign: 'left'
            },
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("th", {
              children: __('Product', 'wecodeart')
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("th", {
              children: __('License Key', 'wecodeart')
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("th", {
              children: __('Actions', 'wecodeart')
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("th", {
              children: __('Status', 'wecodeart')
            })]
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("tbody", {
          children: fields.map(({
            id,
            label,
            externalUrl = ''
          }) => {
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("strong", {
                  children: label
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(BaseControl, {
                  id,
                  key: id,
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", {
                    id: id,
                    type: "text",
                    value: formData[id],
                    placeholder: __('API Key', 'wecodeart'),
                    disabled: settings[id] === 'FREEMIUM',
                    onChange: handleInputChange
                  })
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                  className: "wecodeart-button-group",
                  children: externalUrl !== '' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ExternalLink, {
                    href: externalUrl,
                    className: "wecodeart-button-group__item",
                    children: __('Get API Key', 'wecodeart')
                  })
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", {
                style: {
                  backgroundColor: '#d7ffd2'
                },
                children: sprintf(__('Days: %s', 'wecodeart'), __('Unlimited', 'wecodeart'))
              })]
            });
          })
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Button, {
      className: "button",
      isPrimary: true,
      icon: loading && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Spinner, {}),
      onClick: () => {
        setLoading(true);
        saveSettings(formData, handleNotice);
      },
      disabled: loading || !hasChanges,
      children: loading ? '' : __('Save', 'wecodeart')
    })]
  });
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
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

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
  const {
    tabs,
    ...tabProps
  } = props;
  const hash = window.location.hash.substr(1);
  const initialTab = hash ? tabs.find(({
    name
  }) => name === hash)?.name : tabs[0]?.name;
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
      const matchingTab = tabs.find(({
        name
      }) => name === newHash);
      if (matchingTab) {
        updateUrl(matchingTab.name);
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, [tabs]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(TabPanel, {
    className: "wecodeart-tab-panel wecodeart-tab-panel--vertical",
    activeClass: "active-tab",
    orientation: "vertical",
    initialTabName: initialTab,
    onSelect: updateUrl,
    tabs: tabs,
    children: tab => tab.render && typeof tab.render === 'function' && tab.render(tabProps)
  });
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

/***/ "react/jsx-runtime":
/*!**********************************!*\
  !*** external "ReactJSXRuntime" ***!
  \**********************************/
/***/ ((module) => {

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
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!*******************************!*\
  !*** ./src/js/admin/index.js ***!
  \*******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components */ "./src/js/admin/components/index.js");
/* harmony import */ var _scss_admin_index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../scss/admin/index.scss */ "./src/scss/admin/index.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);
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
  const saveSettings = (formData, callback = () => {}) => {
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
    render: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components__WEBPACK_IMPORTED_MODULE_0__.GettingStarted, {})
  }, ...(applyFilters('wecodeart.admin.tabs.plugins', []).length ? [{
    name: 'plugins',
    title: __('Plugins', 'wecodeart'),
    className: 'wecodeart-plugins',
    render: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components__WEBPACK_IMPORTED_MODULE_0__.SubPanel, {
      ...tabProps,
      tabs: applyFilters('wecodeart.admin.tabs.plugins', [])
    })
  }] : []), ...(applyFilters('wecodeart.admin.tabs.themes', []).length ? [{
    name: 'themes',
    title: __('Themes', 'wecodeart'),
    className: 'wecodeart-themes',
    render: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components__WEBPACK_IMPORTED_MODULE_0__.SubPanel, {
      ...tabProps,
      tabs: applyFilters('wecodeart.admin.tabs.themes', [])
    })
  }] : []), {
    name: 'license',
    title: __('License(s)', 'wecodeart'),
    className: 'wecodeart-license',
    render: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components__WEBPACK_IMPORTED_MODULE_0__.Licenses, {
      ...tabProps
    })
  }]);
  const urlParams = new URLSearchParams(window.location.search);
  const requestedTab = urlParams.get('tab');
  const initialTab = requestedTab ? tabs.find(({
    name
  }) => name === requestedTab)?.name : tabs[0]?.name;
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
  const MainPanel = () => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Panel, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(PanelBody, {
      opened: true,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        className: "components-panel__header",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          className: "grid",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
            className: "g-col-12 g-col-md-8 g-col-lg-10",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("p", {
              className: "wecodeart-panel__header-hint",
              children: [__('Appearance', 'wecodeart'), " \u2192 WeCodeArt"]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("h2", {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("strong", {
                children: "WeCodeArt Framework"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("code", {
                children: themeVersion
              })]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
            className: "g-col-12 g-col-md-4 g-col-lg-2 align-self-end",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
              id: "donate-button-container",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
                id: "donate-button"
              })
            })
          })]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(PanelRow, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(TabPanel, {
          className: "wecodeart-tab-panel",
          activeClass: "active-tab",
          initialTabName: initialTab,
          onSelect: updateUrl,
          tabs: tabs,
          children: ({
            render
          }) => render
        })
      })]
    })
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(MainPanel, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components__WEBPACK_IMPORTED_MODULE_0__.Notices, {})]
  });
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
  }]);
  // Render Admin
  render(/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(WeCodeArt, {}), document.getElementById('wecodeart'));
});
})();

/******/ })()
;
//# sourceMappingURL=admin.js.map