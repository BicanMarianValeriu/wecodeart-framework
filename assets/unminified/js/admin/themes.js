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
/* harmony export */   "getCookie": () => (/* binding */ getCookie),
/* harmony export */   "getInstallerDir": () => (/* binding */ getInstallerDir),
/* harmony export */   "getInstallerIcon": () => (/* binding */ getInstallerIcon),
/* harmony export */   "setCookie": () => (/* binding */ setCookie)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);


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
      icon = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 512 512"
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
        fill: "currentColor",
        d: "M256 6.3C114.6 6.3 0 120.9 0 262.3c0 113.1 73.3 209.1 175.1 242.9 12.8 2.4 17.5-5.6 17.5-12.3 0-6.1-.2-26.3-.4-47.6-71.2 15.4-86.2-30.2-86.2-30.2-11.7-29.6-28.4-37.4-28.4-37.4-23.3-15.9 1.7-15.6 1.7-15.6 25.7 1.8 39.3 26.4 39.3 26.4 22.8 39.1 59.9 27.8 74.5 21.2 2.3-16.5 8.9-27.8 16.2-34.2C152.5 369 92.7 347 92.7 248.9c0-28 10-50.8 26.3-68.7-2.6-6.5-11.4-32.5 2.5-67.8 0 0 21.5-6.9 70.4 26.2 20.4-5.7 42.3-8.5 64.1-8.6 21.8.1 43.7 2.9 64.1 8.6 48.8-33.2 70.4-26.2 70.4-26.2 14 35.3 5.2 61.3 2.6 67.8 16.4 17.9 26.3 40.7 26.3 68.7 0 98.4-59.9 120-116.9 126.4 9.2 7.9 17.4 23.5 17.4 47.4 0 34.2-.3 61.8-.3 70.3 0 6.8 4.7 14.8 17.6 12.3 101.5-34 174.8-129.9 174.8-243 0-141.3-114.6-256-256-256z"
      }));
      break;

    case 'wordpress':
      icon = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 69 69"
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("mask", {
        id: "wp-mask",
        width: "65.4",
        height: "64.46",
        x: "1.8",
        y: "2.27",
        maskUnits: "userSpaceOnUse"
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
        fill: "white",
        "fill-rule": "evenodd",
        d: "M1.8 2.27h65.4v64.46H1.8z"
      })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("circle", {
        cx: "34.5",
        cy: "34.5",
        r: "34.5",
        fill: "white"
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
        mask: "url(#wp-mask)"
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
        fill: "currentColor",
        "fill-rule": "evenodd",
        d: "M34.5 2.27A32.47 32.47 0 0 0 1.8 34.5a32.47 32.47 0 0 0 32.7 32.23A32.47 32.47 0 0 0 67.2 34.5 32.47 32.47 0 0 0 34.5 2.27m0 1.93a30.87 30.87 0 0 1 12 2.38 30.48 30.48 0 0 1 5.22 2.8 29.91 29.91 0 0 1 4.55 3.7 30 30 0 0 1 6.59 9.63A30 30 0 0 1 60 51.44a30.26 30.26 0 0 1-3.76 4.48 29.91 29.91 0 0 1-4.55 3.7 30.48 30.48 0 0 1-5.22 2.8 31.24 31.24 0 0 1-23.92 0 30.48 30.48 0 0 1-5.22-2.8 29.91 29.91 0 0 1-4.55-3.7 30 30 0 0 1-6.59-9.63A30 30 0 0 1 9 17.56a30.26 30.26 0 0 1 3.76-4.48 29.91 29.91 0 0 1 4.55-3.7 30.48 30.48 0 0 1 5.22-2.8 30.87 30.87 0 0 1 12-2.38"
      })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
        fill: "currentColor",
        "fill-rule": "evenodd",
        d: "M58.17 21.88a20 20 0 0 1 .18 2.77 25.22 25.22 0 0 1-2.07 9.64l-8.35 23.78A26.85 26.85 0 0 0 61.51 34.8a26.48 26.48 0 0 0-3.34-12.92zM34.68 37.15l-8.2 23.48a27.85 27.85 0 0 0 16.79-.43 3.39 3.39 0 0 1-.2-.38zm18-3.71A14.06 14.06 0 0 0 50.39 26c-1.39-2.21-2.69-4.08-2.69-6.3a4.69 4.69 0 0 1 4.59-4.78h.35A27.54 27.54 0 0 0 11.38 20h1.75c2.86 0 7.28-.34 7.28-.34a1.11 1.11 0 0 1 .18 2.22s-1.48.17-3.13.25l10 29.17 6-17.67-4.26-11.5c-1.47-.08-2.86-.25-2.86-.25a1.11 1.11 0 0 1 .17-2.22S31 20 33.63 20c2.86 0 7.29-.34 7.29-.34a1.11 1.11 0 0 1 .17 2.22s-1.48.17-3.13.25l9.88 28.95 2.81-8.81c1.26-3.84 2-6.57 2-8.87zM6.88 34.8A26.92 26.92 0 0 0 22.28 59l-13-35.19a26.42 26.42 0 0 0-2.37 11z"
      }));
      break;

    default:
      icon = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 175 174"
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
        fill: "currentColor",
        d: "M80 1.6C47.4 5.5 20.6 25.4 8.9 54.5 4 66.8 2.8 74.6 3.2 90c.4 12 .8 14.6 3.7 23 9.5 28 31.3 48.5 59.7 56.1 11.3 3.1 30.8 3.1 41.9.2 38.7-10.4 64.5-43.6 64.5-82.9 0-44.9-35.5-82.3-80.6-84.7-4.9-.3-10.5-.3-12.4-.1zM105 28c2.7 1.5 4 6 2.6 9.6-1.1 3-19.5 27.3-20.7 27.4-.4 0-3.4-2.2-6.7-4.8l-6.1-4.9 8.5-10.9C95.7 27.6 99.3 24.9 105 28zm-9.6 46.9c18.7 14.6 34.7 27.1 35.5 27.7 1.2 1 .9 1.8-2.4 5.8a45.4 45.4 0 0 1-34.7 17.1c-7.1.2-9.1.6-11.3 2.4-3.7 2.8-5.4 2.7-10.3-.9l-4.1-2.9-7.6 9.4c-6.7 8.4-7.9 9.5-10.7 9.5-3.8 0-7.8-3.4-7.8-6.6 0-1.3 3.2-6.3 7.4-11.8l7.5-9.5L53 112c-4.7-3.8-5.6-6-3.6-9.8 1.4-2.7 1.3-3.4-.4-8-4.2-11-3.5-22.2 2-33.9 3.6-7.8 7.8-13.5 9.4-12.6.6.4 16.4 12.6 35 27.2zm45.3-18.7c2.8 2.6 3 7.2.5 11-3.2 5.2-18.7 24.7-19.5 24.7-1.8.2-12.6-9.2-12-10.3 2.8-4.5 19.9-25.3 21.6-26.3 3.3-1.9 6.8-1.5 9.4.9z"
      }));
      break;
  }

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Icon, {
    className: "components-card__badge",
    icon: icon
  });
};

const getInstallerDir = _ref => {
  let {
    slug,
    source = 'wordpress'
  } = _ref;
  let dir = slug;

  if (!slug) {
    return dir;
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
}; // Helper function to get the value of a cookie by name


function getCookie(name) {
  const cookies = document.cookie.split('; ');

  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].split('=');

    if (cookie[0] === name) {
      return decodeURIComponent(cookie[1]);
    }
  }

  return '';
} // Helper function to set a cookie with a given name, value, and expiration time


function setCookie(name, value) {
  let days = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 365;
  let path = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : window.location.pathname;
  const date = new Date();
  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
  const expires = date.toUTCString();
  document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires}; path=${path}`;
}



/***/ }),

/***/ "./src/js/admin/themes/Components.js":
/*!*******************************************!*\
  !*** ./src/js/admin/themes/Components.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Manager": () => (/* binding */ Manager),
/* harmony export */   "Submit": () => (/* binding */ Submit),
/* harmony export */   "Theme": () => (/* binding */ Theme)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../functions */ "./src/js/admin/functions.js");



/**
 * WordPress dependencies
 */
const {
  i18n: {
    __,
    _x,
    sprintf
  },
  components: {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    ExternalLink,
    ToggleControl,
    __experimentalHStack: HStack,
    TextControl,
    TextareaControl,
    Modal,
    Spinner,
    Button
  },
  element: {
    useState,
    useEffect
  }
} = wp;
const {
  currentUser,
  adminEmail,
  themeDirs
} = wecodeart;
const {
  installed = [],
  installers = [],
  child = false
} = wecodeartThemes || {};

const AJAX_ACTION = 'wca_manage_themes';

const Theme = _ref => {
  let {
    title = '',
    slug = '',
    description = '',
    more = '',
    source = 'wordpress',
    allThemes,
    setAllThemes,
    activeTheme,
    setActiveTheme,
    handleNotice
  } = _ref;
  const [activeLoading, setActiveLoading] = useState(null);
  const [installLoading, setInstallLoading] = useState(null);
  const themeDir = (0,_functions__WEBPACK_IMPORTED_MODULE_2__.getInstallerDir)({
    slug,
    source
  });

  const handleActivation = async value => {
    setActiveLoading(true);
    const formData = new FormData();
    formData.append('action', AJAX_ACTION);
    formData.append('type', value ? 'activate' : 'deactivate');
    formData.append('data', JSON.stringify({
      slug: themeDir
    }));
    const r = await fetch(ajaxurl, {
      method: 'POST',
      body: formData
    });
    const {
      data: {
        message,
        success = false
      }
    } = await r.json();

    if (value && success) {
      setActiveTheme(themeDir);
    } else if (success) {
      setActiveTheme('wecodeart');
    }

    handleNotice(message);
    setActiveLoading(false);
  };

  const handleInstall = async _ref2 => {
    let {
      slug,
      source
    } = _ref2;
    setInstallLoading(true);
    const formData = new FormData();
    formData.append('action', AJAX_ACTION);
    formData.append('type', 'install');
    formData.append('data', JSON.stringify({
      slug,
      source
    }));
    const r = await fetch(ajaxurl, {
      method: 'POST',
      body: formData
    });
    const {
      data: {
        message = '',
        success = false
      } = {}
    } = await r.json();

    if (success) {
      setAllThemes([...allThemes, themeDir]);
    }

    handleNotice(message);
    setInstallLoading(false);
  };

  const shouldAllowInstall = allThemes.includes(themeDir) || installLoading;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(Card, {
    className: "border shadow-none"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(CardHeader, null, title && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("h3", {
    className: "m-0"
  }, title), (0,_functions__WEBPACK_IMPORTED_MODULE_2__.getInstallerIcon)(source)), (description || more) && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(CardBody, null, description && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("p", null, description), more && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("p", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(ExternalLink, {
    className: "fw-bold text-decoration-none",
    href: more
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("span", {
    className: "me-1"
  }, __('Learn more', 'wecodeart'))))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(CardFooter, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(HStack, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "align-self-end"
  }, allThemes.includes(themeDir) ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(ToggleControl, {
    className: "m-0",
    label: activeTheme !== themeDir ? _x('Activate', 'theme', 'wecodeart') : __('Active', 'wecodeart'),
    checked: activeTheme === themeDir,
    onChange: handleActivation,
    disabled: !allThemes.includes(themeDir) || activeLoading
  }) : _x('Not installed.', 'theme', 'wecodeart')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(Button, {
    className: "button",
    isPrimary: true,
    icon: installLoading && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(Spinner, null),
    onClick: () => handleInstall({
      slug,
      source
    }),
    disabled: shouldAllowInstall
  }, installLoading ? '' : allThemes.includes(themeDir) ? _x('Installed', 'theme', 'wecodeart') : __('Install', 'wecodeart')))));
};

const Submit = _ref3 => {
  let {
    handleNotice
  } = _ref3;
  const cardDecoration = `${themeDirs.uri}/assets/images/appreciation.svg`;
  const [isOpen, setIsOpen] = useState(false);
  const [errors, setErrors] = useState({});
  const [sending, setSending] = useState(false);
  const [details, setDetails] = useState({
    name: currentUser,
    email: adminEmail,
    url: '',
    message: ''
  });
  useEffect(() => {
    validateForm();
    return () => null;
  }, [details]);

  const openModal = () => setIsOpen(true);

  const closeModal = () => setIsOpen(false);

  const isValidEmail = email => {
    // Use a regular expression or any other validation logic to check email validity
    // Return true if the email is valid, false otherwise
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const isValidUrl = url => {
    // Use a regular expression or any other validation logic to check URL validity
    // Return true if the URL is valid, false otherwise
    return /^(ftp|http|https):\/\/[^ "]+$/.test(url);
  };

  const validateForm = () => {
    const errors = {};

    if (!details.name) {
      errors.name = __('Please enter your name.', 'wecodeart');
    }

    if (!details.email) {
      errors.email = __('Please enter your email.', 'wecodeart');
    } else if (!isValidEmail(details.email)) {
      errors.email = __('Please enter a valid email address.', 'wecodeart');
    }

    if (!details.url) {
      errors.url = __('Please enter the theme URL.', 'wecodeart');
    } else if (!isValidUrl(details.url)) {
      errors.url = __('Please enter a valid URL.', 'wecodeart');
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async () => {
    if (!validateForm()) {
      return;
    }

    setSending(true);
    const formData = new FormData();
    formData.append('action', AJAX_ACTION);
    formData.append('type', 'submit');
    formData.append('data', JSON.stringify(details));
    const r = await fetch(ajaxurl, {
      method: 'POST',
      body: formData
    });
    const {
      data: {
        message
      }
    } = await r.json();
    handleNotice(message);
    setSending(false);
    setDetails({
      name: currentUser,
      email: adminEmail,
      url: '',
      message: ''
    });
    closeModal();
  };

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, isOpen && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(Modal, {
    title: __('Awesome, let\'s see it!', 'wecodeart'),
    onRequestClose: closeModal
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(TextControl, {
    label: __('Your name', 'wecodeart'),
    value: details.name,
    onChange: name => setDetails({ ...details,
      name
    }),
    help: errors.name
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(TextControl, {
    label: __('Your email', 'wecodeart'),
    type: "email",
    value: details.email,
    onChange: email => setDetails({ ...details,
      email
    }),
    help: errors.email
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(TextControl, {
    label: __('Theme URL', 'wecodeart'),
    type: "url",
    value: details.url,
    placeholder: __('Github repository or website demo', 'wecodeart'),
    onChange: url => setDetails({ ...details,
      url
    }),
    help: errors.url
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(TextareaControl, {
    label: __('Your message', 'wecodeart'),
    value: details.message,
    placeholder: __('Additional info', 'wecodeart'),
    onChange: message => setDetails({ ...details,
      message
    }),
    help: errors.message
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(Button, {
    className: "button",
    isPrimary: true,
    icon: sending && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(Spinner, null),
    onClick: handleSubmit,
    disabled: Object.keys(errors).length,
    style: {
      marginTop: '1rem'
    }
  }, sending ? '' : __('Send', 'wecodeart'))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(Card, {
    className: "shadow-none",
    style: {
      '--wca--card-image': `url(${cardDecoration})`,
      '--wca--card-bg': '#E7E6FE',
      backgroundPosition: 'bottom 55px right 0',
      backgroundSize: 150
    }
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(CardHeader, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("h3", {
    className: "m-0"
  }, __('Your Theme Here', 'wecodeart'))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(CardBody, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("p", null, __('Have you created an amazing child skin for our theme? We would love to feature it here!', 'wecodeart'))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(CardFooter, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(Button, {
    variant: "secondary",
    isPrimary: true,
    onClick: openModal,
    style: {
      display: 'block',
      width: '100%'
    }
  }, __('Contact us', 'wecodeart')))));
};

const Manager = _ref4 => {
  let {
    createNotice
  } = _ref4;
  const [activeTheme, setActiveTheme] = useState((0,_functions__WEBPACK_IMPORTED_MODULE_2__.getCookie)('activeTheme') || child || 'wecodeart');
  const [allThemes, setAllThemes] = useState(installed);
  const [hasChanges, setHasChanges] = useState(false);
  const [reloading, setReloading] = useState(false);
  useEffect(() => (0,_functions__WEBPACK_IMPORTED_MODULE_2__.setCookie)('activeTheme', activeTheme), [activeTheme]);

  const handleNotice = message => {
    setReloading(false);
    setHasChanges(true);
    return createNotice('success', message);
  };

  const extraThemeProps = {
    allThemes,
    setAllThemes,
    activeTheme,
    setActiveTheme,
    handleNotice
  };
  const isCoreFramework = !activeTheme || activeTheme === 'wecodeart';
  const hasDefaultTheme = allThemes.includes('wecodeart-developer');
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, isCoreFramework ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "components-notice is-warning flex-column align-items-start m-0 mb-3"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("p", null, sprintf(__('It appears that you do not currently have a child theme %s.', 'wecodeart'), hasDefaultTheme ? __('activated', 'wecodeart') : __('installed', 'wecodeart')), "\xA0", __('We highly recommend using a child theme for making any modifications to your website.', 'wecodeart'), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("br", null), sprintf(__('Would you like us to %s our child theme for you?', 'wecodeart'), hasDefaultTheme ? __('activate', 'wecodeart') : __('install', 'wecodeart'))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(Button, {
    className: "button",
    isPrimary: true,
    onClick: async () => {
      setReloading(true);
      const formData = new FormData();
      formData.append('action', AJAX_ACTION);
      formData.append('type', hasDefaultTheme ? 'activate' : 'install');
      formData.append('data', JSON.stringify({
        slug: 'wecodeart-developer',
        source: 'github'
      }));
      const r = await fetch(ajaxurl, {
        method: 'POST',
        body: formData
      });
      const {
        data: {
          message = '',
          success
        } = {}
      } = await r.json();

      if (success) {
        setActiveTheme('wecodeart-developer');
      }

      handleNotice(message);
    },
    disabled: reloading
  }, __('Yes, please do.', 'wecodeart'))) : null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "grid grid--installables mb-3"
  }, installers.map(props => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(Theme, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, extraThemeProps))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(Submit, {
    handleNotice
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(Button, {
    className: "button",
    isPrimary: true,
    icon: reloading && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(Spinner, null),
    onClick: () => {
      setReloading(true);
      window.location.reload();
    },
    disabled: !hasChanges
  }, reloading ? '' : __('Reload', 'wecodeart')));
};



/***/ }),

/***/ "./src/scss/admin/themes/index.scss":
/*!******************************************!*\
  !*** ./src/scss/admin/themes/index.scss ***!
  \******************************************/
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
/*!**************************************!*\
  !*** ./src/js/admin/themes/index.js ***!
  \**************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Components */ "./src/js/admin/themes/Components.js");
/* harmony import */ var _scss_admin_themes_index_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../scss/admin/themes/index.scss */ "./src/scss/admin/themes/index.scss");


/**
 * WordPress dependencies
 */
const {
  i18n: {
    __
  },
  hooks: {
    addFilter
  }
} = wp;


addFilter('wecodeart.admin.tabs.themes', 'wecodeart/themes/admin/panel', optionsPanel);

function optionsPanel(panels) {
  return [{
    name: 'manager',
    title: __('Themes Manager', 'wecodeart'),
    render: props => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Components__WEBPACK_IMPORTED_MODULE_1__.Manager, props)
  }, ...panels];
}
})();

/******/ })()
;
//# sourceMappingURL=themes.js.map