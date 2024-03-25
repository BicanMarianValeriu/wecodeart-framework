/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/admin/functions.js":
/*!***********************************!*\
  !*** ./src/js/admin/functions.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getCookie: () => (/* binding */ getCookie),
/* harmony export */   getInstallerDir: () => (/* binding */ getInstallerDir),
/* harmony export */   getInstallerIcon: () => (/* binding */ getInstallerIcon),
/* harmony export */   setCookie: () => (/* binding */ setCookie)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/**
 * WordPress dependencies
 */
const {
  components: {
    Icon
  }
} = wp;
const getInstallerIcon = source => {
  let icon;
  switch (source) {
    case 'github':
      icon = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 512 512"
      }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
        fill: "currentColor",
        d: "M256 6.3C114.6 6.3 0 120.9 0 262.3c0 113.1 73.3 209.1 175.1 242.9 12.8 2.4 17.5-5.6 17.5-12.3 0-6.1-.2-26.3-.4-47.6-71.2 15.4-86.2-30.2-86.2-30.2-11.7-29.6-28.4-37.4-28.4-37.4-23.3-15.9 1.7-15.6 1.7-15.6 25.7 1.8 39.3 26.4 39.3 26.4 22.8 39.1 59.9 27.8 74.5 21.2 2.3-16.5 8.9-27.8 16.2-34.2C152.5 369 92.7 347 92.7 248.9c0-28 10-50.8 26.3-68.7-2.6-6.5-11.4-32.5 2.5-67.8 0 0 21.5-6.9 70.4 26.2 20.4-5.7 42.3-8.5 64.1-8.6 21.8.1 43.7 2.9 64.1 8.6 48.8-33.2 70.4-26.2 70.4-26.2 14 35.3 5.2 61.3 2.6 67.8 16.4 17.9 26.3 40.7 26.3 68.7 0 98.4-59.9 120-116.9 126.4 9.2 7.9 17.4 23.5 17.4 47.4 0 34.2-.3 61.8-.3 70.3 0 6.8 4.7 14.8 17.6 12.3 101.5-34 174.8-129.9 174.8-243 0-141.3-114.6-256-256-256z"
      }));
      break;
    case 'wordpress':
      icon = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 69 69"
      }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("mask", {
        id: "wp-mask",
        width: "65.4",
        height: "64.46",
        x: "1.8",
        y: "2.27",
        maskUnits: "userSpaceOnUse"
      }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
        fill: "white",
        "fill-rule": "evenodd",
        d: "M1.8 2.27h65.4v64.46H1.8z"
      })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("circle", {
        cx: "34.5",
        cy: "34.5",
        r: "34.5",
        fill: "white"
      }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
        mask: "url(#wp-mask)"
      }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
        fill: "currentColor",
        "fill-rule": "evenodd",
        d: "M34.5 2.27A32.47 32.47 0 0 0 1.8 34.5a32.47 32.47 0 0 0 32.7 32.23A32.47 32.47 0 0 0 67.2 34.5 32.47 32.47 0 0 0 34.5 2.27m0 1.93a30.87 30.87 0 0 1 12 2.38 30.48 30.48 0 0 1 5.22 2.8 29.91 29.91 0 0 1 4.55 3.7 30 30 0 0 1 6.59 9.63A30 30 0 0 1 60 51.44a30.26 30.26 0 0 1-3.76 4.48 29.91 29.91 0 0 1-4.55 3.7 30.48 30.48 0 0 1-5.22 2.8 31.24 31.24 0 0 1-23.92 0 30.48 30.48 0 0 1-5.22-2.8 29.91 29.91 0 0 1-4.55-3.7 30 30 0 0 1-6.59-9.63A30 30 0 0 1 9 17.56a30.26 30.26 0 0 1 3.76-4.48 29.91 29.91 0 0 1 4.55-3.7 30.48 30.48 0 0 1 5.22-2.8 30.87 30.87 0 0 1 12-2.38"
      })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
        fill: "currentColor",
        "fill-rule": "evenodd",
        d: "M58.17 21.88a20 20 0 0 1 .18 2.77 25.22 25.22 0 0 1-2.07 9.64l-8.35 23.78A26.85 26.85 0 0 0 61.51 34.8a26.48 26.48 0 0 0-3.34-12.92zM34.68 37.15l-8.2 23.48a27.85 27.85 0 0 0 16.79-.43 3.39 3.39 0 0 1-.2-.38zm18-3.71A14.06 14.06 0 0 0 50.39 26c-1.39-2.21-2.69-4.08-2.69-6.3a4.69 4.69 0 0 1 4.59-4.78h.35A27.54 27.54 0 0 0 11.38 20h1.75c2.86 0 7.28-.34 7.28-.34a1.11 1.11 0 0 1 .18 2.22s-1.48.17-3.13.25l10 29.17 6-17.67-4.26-11.5c-1.47-.08-2.86-.25-2.86-.25a1.11 1.11 0 0 1 .17-2.22S31 20 33.63 20c2.86 0 7.29-.34 7.29-.34a1.11 1.11 0 0 1 .17 2.22s-1.48.17-3.13.25l9.88 28.95 2.81-8.81c1.26-3.84 2-6.57 2-8.87zM6.88 34.8A26.92 26.92 0 0 0 22.28 59l-13-35.19a26.42 26.42 0 0 0-2.37 11z"
      }));
      break;
    default:
      icon = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 175 174"
      }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
        fill: "currentColor",
        d: "M80 1.6C47.4 5.5 20.6 25.4 8.9 54.5 4 66.8 2.8 74.6 3.2 90c.4 12 .8 14.6 3.7 23 9.5 28 31.3 48.5 59.7 56.1 11.3 3.1 30.8 3.1 41.9.2 38.7-10.4 64.5-43.6 64.5-82.9 0-44.9-35.5-82.3-80.6-84.7-4.9-.3-10.5-.3-12.4-.1zM105 28c2.7 1.5 4 6 2.6 9.6-1.1 3-19.5 27.3-20.7 27.4-.4 0-3.4-2.2-6.7-4.8l-6.1-4.9 8.5-10.9C95.7 27.6 99.3 24.9 105 28zm-9.6 46.9c18.7 14.6 34.7 27.1 35.5 27.7 1.2 1 .9 1.8-2.4 5.8a45.4 45.4 0 0 1-34.7 17.1c-7.1.2-9.1.6-11.3 2.4-3.7 2.8-5.4 2.7-10.3-.9l-4.1-2.9-7.6 9.4c-6.7 8.4-7.9 9.5-10.7 9.5-3.8 0-7.8-3.4-7.8-6.6 0-1.3 3.2-6.3 7.4-11.8l7.5-9.5L53 112c-4.7-3.8-5.6-6-3.6-9.8 1.4-2.7 1.3-3.4-.4-8-4.2-11-3.5-22.2 2-33.9 3.6-7.8 7.8-13.5 9.4-12.6.6.4 16.4 12.6 35 27.2zm45.3-18.7c2.8 2.6 3 7.2.5 11-3.2 5.2-18.7 24.7-19.5 24.7-1.8.2-12.6-9.2-12-10.3 2.8-4.5 19.9-25.3 21.6-26.3 3.3-1.9 6.8-1.5 9.4.9z"
      }));
      break;
  }
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Icon, {
    className: "components-card__badge",
    icon: icon
  });
};
const getInstallerDir = ({
  slug,
  source = 'wordpress',
  destination
}) => {
  let dir = slug;
  if (!slug) {
    return dir;
  }
  if (destination) {
    return destination;
  }
  switch (source) {
    case 'github':
      dir = slug.replace(/^.*\//, '');
      break;
    case 'custom':
      dir = slug.substring(slug.lastIndexOf('/') + 1, slug.lastIndexOf('.zip'));
      break;
    default:
      dir = slug.replace(/\/[^/]*$/, '');
      break;
  }
  return dir;
};

// Helper function to get the value of a cookie by name
function getCookie(name) {
  const cookies = document.cookie.split('; ');
  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].split('=');
    if (cookie[0] === name) {
      return decodeURIComponent(cookie[1]);
    }
  }
  return '';
}

// Helper function to set a cookie with a given name, value, and expiration time
function setCookie(name, value, days = 365, path = window.location.pathname) {
  const date = new Date();
  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
  const expires = date.toUTCString();
  document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires}; path=${path}`;
}


/***/ }),

/***/ "./src/js/admin/plugins/Components/Install.js":
/*!****************************************************!*\
  !*** ./src/js/admin/plugins/Components/Install.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../constants */ "./src/js/admin/plugins/constants.js");

/**
 * WordPress dependencies
 */
const {
  i18n: {
    __,
    _x
  },
  components: {
    Button,
    Spinner,
    Tooltip
  },
  element: {
    useState
  }
} = wp;

const Install = ({
  type = '',
  slug = '',
  source = '',
  version = '',
  destination = '',
  pluginDir = '',
  allPlugins = [],
  setAllPlugins,
  allModules = [],
  setAllModules,
  setHasChanges,
  handleNotice,
  hasMetRequirements = true
}) => {
  const [isLoading, setIsLoading] = useState(null);
  const {
    version: installedVersion,
    update = false
  } = allModules.filter(({
    slug: _slug
  }) => _slug === slug).pop() || {};
  const hasUpdate = update && installedVersion !== update ? update : false;
  const canUpdate = version === update;
  const handleInstall = async () => {
    setIsLoading(true);
    const formData = new FormData();
    formData.append('action', _constants__WEBPACK_IMPORTED_MODULE_1__.AJAX_ACTIONS[type]);
    formData.append('type', 'install');
    formData.append('plugins', JSON.stringify([{
      slug,
      source,
      destination,
      version
    }]));
    const r = await fetch(ajaxurl, {
      method: 'POST',
      body: formData
    });
    const {
      data: {
        message = '',
        success = []
      } = {}
    } = await r.json();
    if (success.length) {
      if (type === 'plugin') {
        setAllPlugins([...allPlugins, pluginDir]);
      }
      if (type === 'module') {
        setAllModules([...allModules, {
          slug,
          source,
          destination,
          version
        }]);
      }
      setHasChanges(true);
    }
    handleNotice(message);
    setIsLoading(false);
  };
  const getButtonStatus = () => {
    let status = false;

    // If has update, enable button.
    if (hasUpdate && canUpdate) {
      return status;
    }

    // If loading or is module, disable button.
    if (isLoading || !pluginDir) {
      return !status;
    }

    // If requirements not met, disable button.
    if (!hasMetRequirements) {
      return !status;
    }

    // If already installed, disable button.
    switch (type) {
      case 'plugin':
        status = allPlugins.includes(pluginDir);
        break;
      case 'module':
        status = allModules.map(({
          slug
        }) => slug).includes(slug);
        break;
    }
    return status;
  };
  const getInstallLabel = () => {
    let label = '';

    // If no directory, then already installed.
    if (!pluginDir) {
      return _x('Installed', 'plugin', 'wecodeart');
    }
    if (hasUpdate) {
      return __('Update', 'wecodeart');
    }
    switch (type) {
      case 'plugin':
        label = allPlugins.includes(pluginDir) ? _x('Installed', 'plugin', 'wecodeart') : __('Install', 'wecodeart');
        break;
      case 'module':
        label = allModules.map(({
          slug
        }) => slug).includes(slug) ? _x('Installed', 'plugin', 'wecodeart') : __('Install', 'wecodeart');
        break;
    }
    return label;
  };
  const InstallButton = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Button, {
    className: "button d-flex gap-2",
    variant: canUpdate ? 'tertiary' : 'primary',
    icon: isLoading && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Spinner, {
      style: {
        margin: 0
      }
    }),
    onClick: handleInstall,
    disabled: getButtonStatus()
  }, getInstallLabel());
  return canUpdate ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Tooltip, {
    text: sprintf(__('New version available: %s', 'wecodeart'), hasUpdate),
    placement: "top",
    position: "middle"
  }, InstallButton) : InstallButton;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Install);

/***/ }),

/***/ "./src/js/admin/plugins/Components/Manager.js":
/*!****************************************************!*\
  !*** ./src/js/admin/plugins/Components/Manager.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ */ "./src/js/admin/plugins/Components/index.js");

/**
 * WordPress dependencies
 */
const {
  i18n: {
    __
  },
  components: {
    Spinner,
    Button
  },
  element: {
    useState
  }
} = wp;

const Manager = ({
  createNotice,
  installers,
  activePlugins,
  setActivePlugins,
  allPlugins,
  setAllPlugins,
  allModules,
  setAllModules,
  hasChanges,
  setHasChanges
}) => {
  const [reloading, setReloading] = useState(false);
  const handleNotice = message => {
    setReloading(false);
    return createNotice('success', message);
  };
  const extraPluginProps = {
    activePlugins,
    setActivePlugins,
    allPlugins,
    setAllPlugins,
    allModules,
    setAllModules,
    handleNotice,
    setHasChanges
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(___WEBPACK_IMPORTED_MODULE_1__.Recommended, {
    installers,
    allPlugins,
    setAllPlugins,
    handleNotice,
    setHasChanges
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "grid grid--installables mb-3"
  }, installers.map(props => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(___WEBPACK_IMPORTED_MODULE_1__.Plugin, {
    ...props,
    ...extraPluginProps
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Button, {
    className: "button",
    isPrimary: true,
    icon: reloading && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Spinner, null),
    onClick: () => {
      setReloading(true);
      window.location.reload();
    },
    disabled: !hasChanges
  }, reloading ? '' : __('Reload', 'wecodeart')));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Manager);

/***/ }),

/***/ "./src/js/admin/plugins/Components/Plugin.js":
/*!***************************************************!*\
  !*** ./src/js/admin/plugins/Components/Plugin.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../functions */ "./src/js/admin/functions.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ */ "./src/js/admin/plugins/Components/index.js");

/**
 * WordPress dependencies
 */
const {
  i18n: {
    __
  },
  components: {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    ExternalLink,
    __experimentalHStack: HStack
  }
} = wp;


const Plugin = ({
  title = '',
  slug = '',
  version = '',
  description = '',
  destination = '',
  more = '',
  source = 'wordpress',
  type = 'plugin',
  required = true,
  activePlugins,
  setActivePlugins,
  setHasChanges,
  allPlugins,
  setAllPlugins,
  allModules,
  setAllModules,
  handleNotice
}) => {
  const pluginDir = (0,_functions__WEBPACK_IMPORTED_MODULE_1__.getInstallerDir)({
    slug,
    source,
    destination
  });
  const hasMetRequirements = required instanceof Array ? required.map(i => activePlugins.includes(i)).every(i => i === true) : required;
  const sharedProps = {
    type,
    slug,
    version,
    source,
    destination,
    pluginDir,
    handleNotice,
    setHasChanges
  };
  const {
    version: installedVersion = version
  } = allModules.filter(({
    slug: _slug
  }) => _slug === slug).pop() || {};
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Card, {
    className: "border shadow-none"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(CardHeader, null, title && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", {
    className: "m-0"
  }, title), (0,_functions__WEBPACK_IMPORTED_MODULE_1__.getInstallerIcon)(source)), (description || more) && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(CardBody, {
    style: {
      display: 'flex',
      flexDirection: 'column',
      height: '100%'
    }
  }, description && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, description), (installedVersion || more) && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(HStack, {
    style: {
      marginTop: 'auto'
    }
  }, installedVersion && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, sprintf(__('Version: %s', 'am2'), installedVersion)), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(ExternalLink, {
    className: "fw-bold text-decoration-none",
    href: more
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "me-1"
  }, __('Learn more', 'wecodeart'))))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(CardFooter, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(HStack, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(___WEBPACK_IMPORTED_MODULE_2__.Activation, {
    type,
    pluginDir,
    allPlugins,
    activePlugins,
    setActivePlugins,
    setHasChanges,
    handleNotice,
    hasMetRequirements
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(___WEBPACK_IMPORTED_MODULE_2__.Install, {
    ...sharedProps,
    allModules,
    setAllModules,
    allPlugins,
    setAllPlugins,
    activePlugins,
    setActivePlugins,
    hasMetRequirements
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(___WEBPACK_IMPORTED_MODULE_2__.Uninstall, {
    ...sharedProps,
    allModules,
    setAllModules
  }))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Plugin);

/***/ }),

/***/ "./src/js/admin/plugins/Components/PluginActivation.js":
/*!*************************************************************!*\
  !*** ./src/js/admin/plugins/Components/PluginActivation.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../constants */ "./src/js/admin/plugins/constants.js");

/**
 * WordPress dependencies
 */
const {
  i18n: {
    __,
    _x
  },
  components: {
    ToggleControl
  },
  element: {
    useState
  }
} = wp;

const Activation = ({
  type,
  pluginDir,
  allPlugins,
  activePlugins,
  setActivePlugins,
  setHasChanges,
  handleNotice,
  hasMetRequirements
}) => {
  if (type !== 'plugin') {
    return null;
  }
  const [activeLoading, setActiveLoading] = useState(null);
  const handleActivation = async value => {
    setActiveLoading(true);
    const formData = new FormData();
    formData.append('action', _constants__WEBPACK_IMPORTED_MODULE_1__.AJAX_ACTIONS.plugin);
    formData.append('type', value ? 'activate' : 'deactivate');
    formData.append('plugins', JSON.stringify([{
      slug: pluginDir
    }]));
    const r = await fetch(ajaxurl, {
      method: 'POST',
      body: formData
    });
    const {
      data: {
        message,
        success = []
      }
    } = await r.json();
    if (success.length) {
      const newActive = value ? [...activePlugins, pluginDir] : activePlugins.filter(item => item !== pluginDir);
      setActivePlugins(newActive);
      setHasChanges(true);
    }
    handleNotice(message);
    setActiveLoading(false);
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "align-self-end"
  }, hasMetRequirements ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(ToggleControl, {
    className: "m-0",
    label: activePlugins.includes(pluginDir) || !pluginDir ? _x('Active', 'plugin', 'wecodeart') : __('Activate', 'wecodeart'),
    checked: activePlugins.includes(pluginDir) || !pluginDir,
    onChange: handleActivation,
    disabled: !allPlugins.includes(pluginDir) || activeLoading
  }) : __('Plugin not detected.', 'wecodeart'));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Activation);

/***/ }),

/***/ "./src/js/admin/plugins/Components/Recommended.js":
/*!********************************************************!*\
  !*** ./src/js/admin/plugins/Components/Recommended.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../functions */ "./src/js/admin/functions.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../constants */ "./src/js/admin/plugins/constants.js");

/**
 * WordPress dependencies
 */
const {
  i18n: {
    __
  },
  components: {
    Button,
    Spinner
  },
  element: {
    useState
  }
} = wp;


const Recommended = ({
  installers,
  allPlugins,
  setAllPlugins,
  handleNotice,
  setHasChanges
}) => {
  const hasRecommendedPlugins = installers.filter(({
    recommended,
    ...rest
  }) => recommended && allPlugins.includes((0,_functions__WEBPACK_IMPORTED_MODULE_1__.getInstallerDir)(rest)) === false);
  if (hasRecommendedPlugins.length === 0) {
    return null;
  }
  const [isLoading, setIsLoading] = useState(false);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "components-notice is-warning flex-column align-items-start m-0 mb-3"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, sprintf(__('Your theme has recommended the following plugins: %s. Would you like to install them?', 'wecodeart'), hasRecommendedPlugins.map(({
    title
  }) => title).join(', '))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Button, {
    className: "button d-flex gap-2",
    isPrimary: true,
    icon: isLoading && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Spinner, {
      style: {
        margin: 0
      }
    }),
    onClick: async () => {
      setIsLoading(true);
      const formData = new FormData();
      formData.append('action', _constants__WEBPACK_IMPORTED_MODULE_2__.AJAX_ACTIONS.plugin);
      formData.append('type', 'install');
      formData.append('plugins', JSON.stringify(hasRecommendedPlugins.map(({
        slug,
        source
      }) => ({
        slug,
        source
      }))));
      const r = await fetch(ajaxurl, {
        method: 'POST',
        body: formData
      });
      const {
        data: {
          message = '',
          success = []
        } = {}
      } = await r.json();
      if (success.length) {
        setAllPlugins([...allPlugins, ...success.map(({
          slug,
          source
        }) => (0,_functions__WEBPACK_IMPORTED_MODULE_1__.getInstallerDir)({
          slug,
          source
        }))]);
        setHasChanges(true);
      }
      handleNotice(message);
      setIsLoading(false);
    },
    disabled: isLoading
  }, isLoading ? __('Installing', 'wecodeart') : __('Install', 'wecodeart'))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Recommended);

/***/ }),

/***/ "./src/js/admin/plugins/Components/Uninstall.js":
/*!******************************************************!*\
  !*** ./src/js/admin/plugins/Components/Uninstall.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../constants */ "./src/js/admin/plugins/constants.js");

/**
 * WordPress dependencies
 */
const {
  i18n: {
    __
  },
  components: {
    Button,
    Spinner
  },
  element: {
    useState
  }
} = wp;

const Uninstall = ({
  type,
  slug,
  source,
  destination,
  allModules,
  setAllModules,
  setHasChanges,
  handleNotice
}) => {
  if (type !== 'module' || !allModules.map(({
    slug
  }) => slug).includes(slug)) {
    return null;
  }
  const [isLoading, setIsLoading] = useState(null);
  const handleUninstall = async () => {
    setIsLoading(true);
    const formData = new FormData();
    formData.append('action', _constants__WEBPACK_IMPORTED_MODULE_1__.AJAX_ACTIONS.module);
    formData.append('type', 'remove');
    formData.append('plugins', JSON.stringify([{
      slug,
      source,
      destination
    }]));
    const r = await fetch(ajaxurl, {
      method: 'POST',
      body: formData
    });
    const {
      data: {
        message = '',
        success = []
      } = {}
    } = await r.json();
    if (success.length) {
      const newModules = allModules.filter(({
        slug: _slug
      }) => _slug !== slug);
      setAllModules(newModules);
      setHasChanges(true);
    }
    handleNotice(message);
    setIsLoading(false);
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Button, {
    className: "button d-flex gap-2",
    isDestructive: true,
    icon: isLoading && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Spinner, {
      style: {
        margin: 0
      }
    }),
    onClick: handleUninstall
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, isLoading ? __('Uninstalling', 'wecodeart') : __('Remove', 'wecodeart')));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Uninstall);

/***/ }),

/***/ "./src/js/admin/plugins/Components/index.js":
/*!**************************************************!*\
  !*** ./src/js/admin/plugins/Components/index.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Activation: () => (/* reexport safe */ _PluginActivation__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   Install: () => (/* reexport safe */ _Install__WEBPACK_IMPORTED_MODULE_3__["default"]),
/* harmony export */   Manager: () => (/* reexport safe */ _Manager__WEBPACK_IMPORTED_MODULE_5__["default"]),
/* harmony export */   Plugin: () => (/* reexport safe */ _Plugin__WEBPACK_IMPORTED_MODULE_4__["default"]),
/* harmony export */   Recommended: () => (/* reexport safe */ _Recommended__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   Uninstall: () => (/* reexport safe */ _Uninstall__WEBPACK_IMPORTED_MODULE_2__["default"])
/* harmony export */ });
/* harmony import */ var _Recommended__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Recommended */ "./src/js/admin/plugins/Components/Recommended.js");
/* harmony import */ var _PluginActivation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PluginActivation */ "./src/js/admin/plugins/Components/PluginActivation.js");
/* harmony import */ var _Uninstall__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Uninstall */ "./src/js/admin/plugins/Components/Uninstall.js");
/* harmony import */ var _Install__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Install */ "./src/js/admin/plugins/Components/Install.js");
/* harmony import */ var _Plugin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Plugin */ "./src/js/admin/plugins/Components/Plugin.js");
/* harmony import */ var _Manager__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Manager */ "./src/js/admin/plugins/Components/Manager.js");







/***/ }),

/***/ "./src/js/admin/plugins/constants.js":
/*!*******************************************!*\
  !*** ./src/js/admin/plugins/constants.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AJAX_ACTIONS: () => (/* binding */ AJAX_ACTIONS)
/* harmony export */ });
const AJAX_ACTIONS = {
  plugin: 'wca_manage_plugins',
  module: 'wca_manage_theme_modules'
};

/***/ }),

/***/ "./src/scss/admin/plugins/index.scss":
/*!*******************************************!*\
  !*** ./src/scss/admin/plugins/index.scss ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

module.exports = window["React"];

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
/*!***************************************!*\
  !*** ./src/js/admin/plugins/index.js ***!
  \***************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Components */ "./src/js/admin/plugins/Components/index.js");
/* harmony import */ var _scss_admin_plugins_index_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../scss/admin/plugins/index.scss */ "./src/scss/admin/plugins/index.scss");

/**
 * WordPress dependencies
 */
const {
  i18n: {
    __
  },
  hooks: {
    addFilter
  },
  element: {
    useState
  }
} = wp;
const {
  installers = [],
  modules: _allModules = [],
  plugins: _allPlugins = [],
  plugins_active: _activePlugins = []
} = wecodeartPlugins || {};


addFilter('wecodeart.admin.tabs.plugins', 'wecodeart/plugins/admin/panel', optionsPanel);
function optionsPanel(panels) {
  const [activePlugins, setActivePlugins] = useState(_activePlugins);
  const [allPlugins, setAllPlugins] = useState(_allPlugins);
  const [allModules, setAllModules] = useState(_allModules);
  const [hasChanges, setHasChanges] = useState(false);
  const extraProps = {
    installers,
    activePlugins,
    setActivePlugins,
    allPlugins,
    setAllPlugins,
    allModules,
    setAllModules,
    hasChanges,
    setHasChanges
  };
  return [{
    name: 'manager',
    title: __('Plugins Manager', 'wecodeart'),
    render: props => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Components__WEBPACK_IMPORTED_MODULE_1__.Manager, {
      ...props,
      ...extraProps
    })
  }, ...panels];
}
})();

/******/ })()
;
//# sourceMappingURL=plugins.js.map