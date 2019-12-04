"use strict";

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

/******/
(function (modules) {
  // webpackBootstrap

  /******/
  // The module cache

  /******/
  var installedModules = {};
  /******/

  /******/
  // The require function

  /******/

  function __webpack_require__(moduleId) {
    /******/

    /******/
    // Check if module is in cache

    /******/
    if (installedModules[moduleId]) {
      /******/
      return installedModules[moduleId].exports;
      /******/
    }
    /******/
    // Create a new module (and put it into the cache)

    /******/


    var module = installedModules[moduleId] = {
      /******/
      i: moduleId,

      /******/
      l: false,

      /******/
      exports: {}
      /******/

    };
    /******/

    /******/
    // Execute the module function

    /******/

    modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
    /******/

    /******/
    // Flag the module as loaded

    /******/

    module.l = true;
    /******/

    /******/
    // Return the exports of the module

    /******/

    return module.exports;
    /******/
  }
  /******/

  /******/

  /******/
  // expose the modules object (__webpack_modules__)

  /******/


  __webpack_require__.m = modules;
  /******/

  /******/
  // expose the module cache

  /******/

  __webpack_require__.c = installedModules;
  /******/

  /******/
  // define getter function for harmony exports

  /******/

  __webpack_require__.d = function (exports, name, getter) {
    /******/
    if (!__webpack_require__.o(exports, name)) {
      /******/
      Object.defineProperty(exports, name, {
        enumerable: true,
        get: getter
      });
      /******/
    }
    /******/

  };
  /******/

  /******/
  // define __esModule on exports

  /******/


  __webpack_require__.r = function (exports) {
    /******/
    if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
      /******/
      Object.defineProperty(exports, Symbol.toStringTag, {
        value: 'Module'
      });
      /******/
    }
    /******/


    Object.defineProperty(exports, '__esModule', {
      value: true
    });
    /******/
  };
  /******/

  /******/
  // create a fake namespace object

  /******/
  // mode & 1: value is a module id, require it

  /******/
  // mode & 2: merge all properties of value into the ns

  /******/
  // mode & 4: return value when already ns object

  /******/
  // mode & 8|1: behave like require

  /******/


  __webpack_require__.t = function (value, mode) {
    /******/
    if (mode & 1) value = __webpack_require__(value);
    /******/

    if (mode & 8) return value;
    /******/

    if (mode & 4 && _typeof2(value) === 'object' && value && value.__esModule) return value;
    /******/

    var ns = Object.create(null);
    /******/

    __webpack_require__.r(ns);
    /******/


    Object.defineProperty(ns, 'default', {
      enumerable: true,
      value: value
    });
    /******/

    if (mode & 2 && typeof value != 'string') for (var key in value) {
      __webpack_require__.d(ns, key, function (key) {
        return value[key];
      }.bind(null, key));
    }
    /******/

    return ns;
    /******/
  };
  /******/

  /******/
  // getDefaultExport function for compatibility with non-harmony modules

  /******/


  __webpack_require__.n = function (module) {
    /******/
    var getter = module && module.__esModule ?
    /******/
    function getDefault() {
      return module['default'];
    } :
    /******/
    function getModuleExports() {
      return module;
    };
    /******/

    __webpack_require__.d(getter, 'a', getter);
    /******/


    return getter;
    /******/
  };
  /******/

  /******/
  // Object.prototype.hasOwnProperty.call

  /******/


  __webpack_require__.o = function (object, property) {
    return Object.prototype.hasOwnProperty.call(object, property);
  };
  /******/

  /******/
  // __webpack_public_path__

  /******/


  __webpack_require__.p = "";
  /******/

  /******/

  /******/
  // Load entry module and return exports

  /******/

  return __webpack_require__(__webpack_require__.s = "./src/js/gutenberg/editor.js");
  /******/
})(
/************************************************************************/

/******/
{
  /***/
  "./node_modules/classnames/index.js":
  /*!******************************************!*\
    !*** ./node_modules/classnames/index.js ***!
    \******************************************/

  /*! no static exports found */

  /***/
  function node_modulesClassnamesIndexJs(module, exports, __webpack_require__) {
    var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
    /*!
    Copyright (c) 2017 Jed Watson.
    Licensed under the MIT License (MIT), see
    http://jedwatson.github.io/classnames
    */

    /* global define */


    (function () {
      'use strict';

      var hasOwn = {}.hasOwnProperty;

      function classNames() {
        var classes = [];

        for (var i = 0; i < arguments.length; i++) {
          var arg = arguments[i];
          if (!arg) continue;

          var argType = _typeof2(arg);

          if (argType === 'string' || argType === 'number') {
            classes.push(arg);
          } else if (Array.isArray(arg) && arg.length) {
            var inner = classNames.apply(null, arg);

            if (inner) {
              classes.push(inner);
            }
          } else if (argType === 'object') {
            for (var key in arg) {
              if (hasOwn.call(arg, key) && arg[key]) {
                classes.push(key);
              }
            }
          }
        }

        return classes.join(' ');
      }

      if (true && module.exports) {
        classNames.default = classNames;
        module.exports = classNames;
      } else if (true) {
        // register as 'classnames', consistent with npm package name
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
          return classNames;
        }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
      } else {}
    })();
    /***/

  },

  /***/
  "./src/js/gutenberg/blocks/column/index.js":
  /*!*************************************************!*\
    !*** ./src/js/gutenberg/blocks/column/index.js ***!
    \*************************************************/

  /*! no exports provided */

  /***/
  function srcJsGutenbergBlocksColumnIndexJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! classnames */
    "./node_modules/classnames/index.js");
    /* harmony import */


    var classnames__WEBPACK_IMPORTED_MODULE_0___default =
    /*#__PURE__*/
    __webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
    /* harmony import */


    var _extensions_attributes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../extensions/attributes */
    "./src/js/gutenberg/extensions/attributes/index.js");
    /* harmony import */


    var _controls_bootstrap_columns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../controls/bootstrap-columns */
    "./src/js/gutenberg/controls/bootstrap-columns/index.js");

    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, {
          value: value,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        obj[key] = value;
      }

      return obj;
    }

    function _toConsumableArray(arr) {
      return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
    }

    function _nonIterableSpread() {
      throw new TypeError("Invalid attempt to spread non-iterable instance");
    }

    function _iterableToArray(iter) {
      if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
    }

    function _arrayWithoutHoles(arr) {
      if (Array.isArray(arr)) {
        for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
          arr2[i] = arr[i];
        }

        return arr2;
      }
    }
    /**
     * WordPress dependencies.
     */


    var __ = wp.i18n.__;
    var InspectorControls = wp.blockEditor.InspectorControls;
    var createHigherOrderComponent = wp.compose.createHigherOrderComponent;
    var PanelBody = wp.components.PanelBody;
    var Fragment = wp.element.Fragment;
    var addFilter = wp.hooks.addFilter;
    /**
     * External Dependencies
     */

    /**
     * Internal dependencies.
     */

    /**
     * Column Controls
     *
     * @param {Function} BlockEdit Original component.
     * @return {string} Wrapped component.
     */

    var withColumnControls = createHigherOrderComponent(function (BlockEdit) {
      return function (props) {
        var blockName = props.name,
            isSelected = props.isSelected;

        if (!_extensions_attributes__WEBPACK_IMPORTED_MODULE_1__["restrictedBlocks"].includes(blockName) && blockName === 'core/column' && isSelected) {
          return wp.element.createElement(Fragment, null, wp.element.createElement(BlockEdit, props), wp.element.createElement(InspectorControls, null, wp.element.createElement(PanelBody, {
            title: __('Bootstrap Settings', 'wecodeart'),
            initialOpen: false,
            className: "components-panel__body--wecodeart-column-panel"
          }, wp.element.createElement("p", {
            className: "components-base-control__label"
          }, __('Bootstrap columns uses mobile-first approach. This option has no visual preview but it will affect the live page.', 'wecodeart')), wp.element.createElement(_controls_bootstrap_columns__WEBPACK_IMPORTED_MODULE_2__["default"], props))));
        }

        return wp.element.createElement(BlockEdit, props);
      };
    }, 'withColumnControls');
    /**
     * Override props assigned to save component to inject atttributes
     *
     * @param {Object} extraProps Additional props applied to save element.
     * @param {Object} blockType  Block type.
     * @param {Object} attributes Current block attributes.
     *
     * @return {Object} Filtered props applied to save element.
     */

    function applyExtraSettings(extraProps, blockType, attributes) {
      var blockName = blockType.name;

      if (blockName === 'core/column') {
        var _attributes$bootstrap = attributes.bootstrapColumns,
            global = _attributes$bootstrap.global,
            xs = _attributes$bootstrap.xs,
            sm = _attributes$bootstrap.sm,
            md = _attributes$bootstrap.md,
            lg = _attributes$bootstrap.lg,
            xl = _attributes$bootstrap.xl;
        var columnClasses = ['col'];

        if (global || xs || sm || md || lg || xl) {
          columnClasses = [].concat(_toConsumableArray(columnClasses), [_defineProperty({}, global, global !== 'col'), _defineProperty({}, sm, sm !== 'col-sm-12' && global === 'col-12'), _defineProperty({}, md, md), _defineProperty({}, lg, lg), _defineProperty({}, xl, xl)]);
        }

        extraProps.className = classnames__WEBPACK_IMPORTED_MODULE_0___default()(extraProps.className, columnClasses);
      }

      return extraProps;
    }
    /**
     * Apply Filters
     */


    function applyFilters() {
      addFilter('editor.BlockEdit', 'wecodeart/editor/columns/withColumnControls', withColumnControls);
      addFilter('blocks.getSaveContent.extraProps', 'wecodeart/blocks/columns/applyExtraSettings', applyExtraSettings);
    }

    applyFilters();
    /***/
  },

  /***/
  "./src/js/gutenberg/blocks/columns/index.js":
  /*!**************************************************!*\
    !*** ./src/js/gutenberg/blocks/columns/index.js ***!
    \**************************************************/

  /*! no exports provided */

  /***/
  function srcJsGutenbergBlocksColumnsIndexJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! classnames */
    "./node_modules/classnames/index.js");
    /* harmony import */


    var classnames__WEBPACK_IMPORTED_MODULE_0___default =
    /*#__PURE__*/
    __webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
    /* harmony import */


    var _controls_background__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../controls/background */
    "./src/js/gutenberg/controls/background/index.js");
    /* harmony import */


    var _extensions_advanced_visibility_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../extensions/advanced/visibility/utils */
    "./src/js/gutenberg/extensions/advanced/visibility/utils.js");
    /* harmony import */


    var _extensions_attributes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../extensions/attributes */
    "./src/js/gutenberg/extensions/attributes/index.js");

    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, {
          value: value,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        obj[key] = value;
      }

      return obj;
    }
    /**
     * External Dependencies
     */

    /**
     * WordPress dependencies.
     */


    var __ = wp.i18n.__;
    var addFilter = wp.hooks.addFilter;
    var Fragment = wp.element.Fragment;
    var _wp$components = wp.components,
        ToggleControl = _wp$components.ToggleControl,
        PanelBody = _wp$components.PanelBody;
    var _wp$blockEditor = wp.blockEditor,
        InspectorControls = _wp$blockEditor.InspectorControls,
        InnerBlocks = _wp$blockEditor.InnerBlocks;
    var createHigherOrderComponent = wp.compose.createHigherOrderComponent;
    /**
     * Internal dependencies.
     */

    /**
     * Columns Controls
     *
     * @param {Function} BlockEdit Original component.
     * @return {string} Wrapped component.
     */

    var withColumnsControls = createHigherOrderComponent(function (BlockEdit) {
      return function (props) {
        var blockName = props.name,
            isSelected = props.isSelected;

        if (!_extensions_attributes__WEBPACK_IMPORTED_MODULE_3__["restrictedBlocks"].includes(blockName) && blockName === 'core/columns' && isSelected) {
          var attributes = props.attributes,
              setAttributes = props.setAttributes;
          var container = attributes.container,
              gutters = attributes.gutters;

          var getStateText = function getStateText(boolean) {
            return boolean ? __('enabled', 'wecodeart') : __('disabled', 'wecodeart');
          };

          var wraperText = sprintf(__('Container wrapper is now %s!', 'wecodeart'), getStateText(container));
          var gutterText = sprintf(__('Gutters are now %s!', 'wecodeart'), getStateText(!gutters));
          return wp.element.createElement(Fragment, null, wp.element.createElement(BlockEdit, props), wp.element.createElement(InspectorControls, null, wp.element.createElement(PanelBody, {
            title: __('Section Settings', 'wecodeart'),
            initialOpen: false,
            className: "components-panel__body--wecodeart-panel"
          }, wp.element.createElement("br", null), wp.element.createElement(ToggleControl, {
            label: __('Enable Container Wrapper?', 'wecodeart'),
            help: wraperText,
            checked: !!container,
            onChange: function onChange() {
              return setAttributes({
                container: !container
              });
            }
          }), !!container && wp.element.createElement(ToggleControl, {
            label: __('Disable Gutters?', 'wecodeart'),
            help: gutterText,
            checked: !!gutters,
            onChange: function onChange() {
              return setAttributes({
                gutters: !gutters
              });
            }
          }))));
        }

        return wp.element.createElement(BlockEdit, props);
      };
    }, 'withColumnsControls');
    /**
     * Override props assigned to save component to inject atttributes
     *
     * @param {Object} props Additional props applied to save element.
     * @param {Object} blockType  Block type.
     * @param {Object} attributes Current block attributes.
     *
     * @return {Object} Filtered props applied to save element.
     */

    function getSaveElement(element, blockType, attributes) {
      var blockName = blockType.name;

      if (blockName === 'core/columns') {
        var _classnames;

        var container = attributes.container,
            className = attributes.className,
            align = attributes.align,
            verticalAlignment = attributes.verticalAlignment,
            gutters = attributes.gutters;
        var sectionClassName = classnames__WEBPACK_IMPORTED_MODULE_0___default()('wca-section', className, Object(_controls_background__WEBPACK_IMPORTED_MODULE_1__["BackgroundClasses"])(attributes), Object(_extensions_advanced_visibility_utils__WEBPACK_IMPORTED_MODULE_2__["getVisibilityClasses"])(attributes));
        var innerClassName = classnames__WEBPACK_IMPORTED_MODULE_0___default()('wca-section__inner', {
          'container': container && ['full', 'wide'].includes(align) === false,
          'container-fluid': container && ['full', 'wide'].includes(align) === true
        });
        var rowClassName = classnames__WEBPACK_IMPORTED_MODULE_0___default()('row', (_classnames = {}, _defineProperty(_classnames, "align-items-".concat(verticalAlignment), verticalAlignment), _defineProperty(_classnames, 'no-gutters', container && gutters), _classnames));
        return wp.element.createElement("section", {
          className: sectionClassName,
          style: Object(_controls_background__WEBPACK_IMPORTED_MODULE_1__["BackgroundStyles"])(attributes, {})
        }, Object(_controls_background__WEBPACK_IMPORTED_MODULE_1__["BackgroundVideo"])(attributes), wp.element.createElement("div", {
          className: innerClassName
        }, wp.element.createElement("div", {
          className: rowClassName
        }, wp.element.createElement(InnerBlocks.Content, null))));
      }

      return element;
    }
    /**
     * Apply Filters
     */


    function applyFilters() {
      addFilter('blocks.getSaveElement', 'wecodeart/blocks/columns/getSaveElement', getSaveElement);
      addFilter('editor.BlockEdit', 'wecodeart/editor/columns/withColumnsControls', withColumnsControls);
    }

    applyFilters();
    /***/
  },

  /***/
  "./src/js/gutenberg/blocks/media-text/index.js":
  /*!*****************************************************!*\
    !*** ./src/js/gutenberg/blocks/media-text/index.js ***!
    \*****************************************************/

  /*! no static exports found */

  /***/
  function srcJsGutenbergBlocksMediaTextIndexJs(module, exports) {
    function ownKeys(object, enumerableOnly) {
      var keys = Object.keys(object);

      if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) symbols = symbols.filter(function (sym) {
          return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
        keys.push.apply(keys, symbols);
      }

      return keys;
    }

    function _objectSpread(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i] != null ? arguments[i] : {};

        if (i % 2) {
          ownKeys(Object(source), true).forEach(function (key) {
            _defineProperty(target, key, source[key]);
          });
        } else if (Object.getOwnPropertyDescriptors) {
          Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        } else {
          ownKeys(Object(source)).forEach(function (key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
          });
        }
      }

      return target;
    }

    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, {
          value: value,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        obj[key] = value;
      }

      return obj;
    }
    /**
     * WordPress dependencies.
     */


    var getColorClassName = wp.blockEditor.getColorClassName;
    var addFilter = wp.hooks.addFilter;
    /**
     * Override props assigned to save component to inject atttributes
     *
     * @param {Object} extraProps Additional props applied to save element.
     * @param {Object} blockType  Block type.
     * @param {Object} attributes Current block attributes.
     *
     * @return {Object} Filtered props applied to save element.
     */

    function applyExtraSettings(extraProps, blockType, attributes) {
      var blockName = blockType.name;

      if (blockName === 'core/media-text') {
        var mediaWidth = attributes.mediaWidth,
            backgroundColor = attributes.backgroundColor,
            customBackgroundColor = attributes.customBackgroundColor;
        var backgroundClass = getColorClassName('background-color', backgroundColor);
        var styles = {
          backgroundColor: backgroundClass ? undefined : customBackgroundColor
        };

        if (mediaWidth !== 50) {
          styles = _objectSpread({}, styles, _defineProperty({}, "--media-width", "".concat(mediaWidth, "%;")));
        }

        extraProps.style = styles;
      }

      return extraProps;
    }
    /**
     * Apply Filters
     */


    function applyFilters() {
      addFilter('blocks.getSaveContent.extraProps', 'wecodeart/blocks/media-text/applyExtraSettings', applyExtraSettings);
    }

    applyFilters();
    /***/
  },

  /***/
  "./src/js/gutenberg/controls/background/attributes.js":
  /*!************************************************************!*\
    !*** ./src/js/gutenberg/controls/background/attributes.js ***!
    \************************************************************/

  /*! exports provided: default */

  /***/
  function srcJsGutenbergControlsBackgroundAttributesJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /**
     * Set the attributes for the Background Panel
     * @type {Object}
     */


    var BackgroundAttributes = {
      backgroundType: {
        type: 'string',
        default: 'image'
      },
      backgroundImg: {
        type: 'string'
      },
      backgroundPosition: {
        type: 'string',
        default: 'center center'
      },
      backgroundRepeat: {
        type: 'string',
        default: 'no-repeat'
      },
      backgroundSize: {
        type: 'string'
      },
      backgroundOverlay: {
        type: 'number',
        default: 0
      },
      backgroundColor: {
        type: 'string'
      },
      customBackgroundColor: {
        type: 'string'
      },
      hasParallax: {
        type: 'boolean',
        default: false
      },
      focalPoint: {
        type: 'object'
      },
      videoMuted: {
        type: 'boolean',
        default: true
      },
      videoLoop: {
        type: 'boolean',
        default: true
      },
      openPopover: {
        type: 'boolean',
        default: false
      }
    };
    /* harmony default export */

    __webpack_exports__["default"] = BackgroundAttributes;
    /***/
  },

  /***/
  "./src/js/gutenberg/controls/background/classes.js":
  /*!*********************************************************!*\
    !*** ./src/js/gutenberg/controls/background/classes.js ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcJsGutenbergControlsBackgroundClassesJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./../../helpers */
    "./src/js/gutenberg/helpers/index.js");

    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, {
          value: value,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        obj[key] = value;
      }

      return obj;
    }
    /**
     * Internal dependencies
     */

    /**
     * WordPress dependencies
     */


    var getColorClassName = wp.blockEditor.getColorClassName;
    /**
     * Background Classes.
     *
     * @param {Object} attributes The attributes.
     * @returns {Array} The background classes.
     */

    function BackgroundClasses(attributes) {
      var backgroundClass = getColorClassName('background-color', attributes.backgroundColor);
      var backgroundSize = attributes.backgroundSize ? attributes.backgroundSize : 'cover';
      var classes = [{
        'has-background': attributes.backgroundColor || attributes.customBackgroundColor || attributes.backgroundImg
      }, _defineProperty({}, backgroundClass, backgroundClass), _defineProperty({}, "has-background-".concat(attributes.backgroundType), attributes.backgroundImg && attributes.backgroundType), {
        'has-background-overlay': attributes.backgroundImg && attributes.backgroundOverlay !== 0
      }, {
        'has-parallax': attributes.backgroundImg && attributes.backgroundType === 'image' && attributes.hasParallax
      }, {
        'is-transient': attributes.backgroundImg && 0 === attributes.backgroundImg.indexOf('blob:')
      }];

      if (attributes.backgroundOverlay) {
        classes.push(_defineProperty({}, _helpers__WEBPACK_IMPORTED_MODULE_0__["overlayToClass"](attributes.backgroundOverlay), attributes.backgroundImg && attributes.backgroundOverlay !== 0 && attributes.backgroundOverlay !== 50));
      }

      if (backgroundSize) {
        classes.push(_defineProperty({}, "bg-".concat(backgroundSize), attributes.backgroundImg && attributes.backgroundType === 'image'));
      }

      if (attributes.backgroundRepeat) {
        classes.push(_defineProperty({}, "bg-".concat(attributes.backgroundRepeat), attributes.backgroundImg && attributes.backgroundType === 'image'));
      }

      if (attributes.backgroundPosition) {
        classes.push(_defineProperty({}, "bg-".concat(attributes.backgroundPosition.split(' ').join('-')), attributes.backgroundImg && attributes.backgroundType === 'image'));
      }

      return classes;
    }
    /* harmony default export */


    __webpack_exports__["default"] = BackgroundClasses;
    /***/
  },

  /***/
  "./src/js/gutenberg/controls/background/controls.js":
  /*!**********************************************************!*\
    !*** ./src/js/gutenberg/controls/background/controls.js ***!
    \**********************************************************/

  /*! exports provided: default */

  /***/
  function srcJsGutenbergControlsBackgroundControlsJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./icons */
    "./src/js/gutenberg/controls/background/icons.js");
    /* harmony import */


    var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./ */
    "./src/js/gutenberg/controls/background/index.js");
    /**
     * WordPress dependencies
     */


    var __ = wp.i18n.__;
    var _wp$blockEditor = wp.blockEditor,
        MediaUpload = _wp$blockEditor.MediaUpload,
        MediaUploadCheck = _wp$blockEditor.MediaUploadCheck;
    var _wp$components = wp.components,
        Toolbar = _wp$components.Toolbar,
        IconButton = _wp$components.IconButton,
        Popover = _wp$components.Popover,
        MenuItem = _wp$components.MenuItem;
    /**
     * Internal dependencies
     */

    /**
     * Background image block toolbar controls.
     *
     * @param {Object} props The passed props.
     * @return {string} Component.
     */

    function BackgroundControls(props) {
      var attributes = props.attributes,
          setAttributes = props.setAttributes;
      var backgroundImg = attributes.backgroundImg,
          openPopover = attributes.openPopover;
      return wp.element.createElement(MediaUploadCheck, null, wp.element.createElement(Toolbar, {
        className: backgroundImg ? 'components-dropdown-menu' : ''
      }, openPopover && wp.element.createElement(Popover, {
        position: "bottom center",
        className: "components-popover--wca"
      }, wp.element.createElement(MediaUpload, {
        onSelect: function onSelect(media) {
          setAttributes({
            backgroundImg: media.url,
            backgroundType: media.type,
            openPopover: !openPopover
          });
        },
        allowedTypes: ___WEBPACK_IMPORTED_MODULE_1__["ALLOWED_BG_MEDIA_TYPES"],
        value: backgroundImg,
        render: function render(_ref) {
          var open = _ref.open;
          return wp.element.createElement(MenuItem, {
            className: "components-dropdown-menu__menu-item",
            icon: "edit",
            role: "menuitem",
            onClick: open
          }, __('Edit Background', 'wecodeart'));
        }
      }), wp.element.createElement(MenuItem, {
        className: "components-dropdown-menu__menu-item",
        icon: "trash",
        role: "menuitem",
        onClick: function onClick() {
          setAttributes({
            backgroundImg: '',
            backgroundOverlay: 0,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: '',
            backgroundSize: 'cover',
            hasParallax: false,
            openPopover: !openPopover
          });
        }
      }, __('Remove Background', 'wecodeart'))), backgroundImg ? wp.element.createElement(IconButton, {
        className: "components-dropdown-menu__toggle",
        icon: _icons__WEBPACK_IMPORTED_MODULE_0__["default"].background,
        "aria-haspopup": "true",
        label: __('Background', 'wecodeart'),
        tooltip: __('Background', 'wecodeart'),
        onClick: function onClick() {
          return setAttributes({
            openPopover: !openPopover
          });
        }
      }, wp.element.createElement("span", {
        className: "components-dropdown-menu__indicator"
      })) : wp.element.createElement(MediaUpload, {
        onSelect: function onSelect(media) {
          setAttributes({
            backgroundImg: media.url,
            backgroundType: media.type
          });
        },
        allowedTypes: ___WEBPACK_IMPORTED_MODULE_1__["ALLOWED_BG_MEDIA_TYPES"],
        value: backgroundImg,
        render: function render(_ref2) {
          var open = _ref2.open;
          return wp.element.createElement(IconButton, {
            className: "components-toolbar__control",
            label: __('Background', 'wecodeart'),
            icon: _icons__WEBPACK_IMPORTED_MODULE_0__["default"].background,
            onClick: open
          });
        }
      })));
    }
    /* harmony default export */


    __webpack_exports__["default"] = BackgroundControls;
    /***/
  },

  /***/
  "./src/js/gutenberg/controls/background/dropzone.js":
  /*!**********************************************************!*\
    !*** ./src/js/gutenberg/controls/background/dropzone.js ***!
    \**********************************************************/

  /*! exports provided: default */

  /***/
  function srcJsGutenbergControlsBackgroundDropzoneJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./ */
    "./src/js/gutenberg/controls/background/index.js");

    function _typeof(obj) {
      if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
        _typeof = function _typeof(obj) {
          return _typeof2(obj);
        };
      } else {
        _typeof = function _typeof(obj) {
          return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
        };
      }

      return _typeof(obj);
    }

    function _slicedToArray(arr, i) {
      return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
    }

    function _nonIterableRest() {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }

    function _iterableToArrayLimit(arr, i) {
      if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) {
        return;
      }

      var _arr = [];
      var _n = true;
      var _d = false;
      var _e = undefined;

      try {
        for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
          _arr.push(_s.value);

          if (i && _arr.length === i) break;
        }
      } catch (err) {
        _d = true;
        _e = err;
      } finally {
        try {
          if (!_n && _i["return"] != null) _i["return"]();
        } finally {
          if (_d) throw _e;
        }
      }

      return _arr;
    }

    function _arrayWithHoles(arr) {
      if (Array.isArray(arr)) return arr;
    }

    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }

    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps) _defineProperties(Constructor.prototype, protoProps);
      if (staticProps) _defineProperties(Constructor, staticProps);
      return Constructor;
    }

    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }

      return _assertThisInitialized(self);
    }

    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
      };
      return _getPrototypeOf(o);
    }

    function _assertThisInitialized(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }

      return self;
    }

    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
      }

      subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
          value: subClass,
          writable: true,
          configurable: true
        }
      });
      if (superClass) _setPrototypeOf(subClass, superClass);
    }

    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
      };

      return _setPrototypeOf(o, p);
    }
    /**
     * Internal dependencies
     */

    /**
     * WordPress dependencies
     */


    var _wp$element = wp.element,
        Component = _wp$element.Component,
        Fragment = _wp$element.Fragment;
    var mediaUpload = wp.blockEditor.mediaUpload;
    var DropZone = wp.components.DropZone;

    var BackgroundDropZone =
    /*#__PURE__*/
    function (_Component) {
      _inherits(BackgroundDropZone, _Component);

      function BackgroundDropZone() {
        var _this;

        _classCallCheck(this, BackgroundDropZone);

        _this = _possibleConstructorReturn(this, _getPrototypeOf(BackgroundDropZone).apply(this, arguments));
        _this.addFile = _this.addFile.bind(_assertThisInitialized(_this));
        _this.onSelectFile = _this.onSelectFile.bind(_assertThisInitialized(_this));
        return _this;
      }

      _createClass(BackgroundDropZone, [{
        key: "addFile",
        value: function addFile(files) {
          var _this2 = this;

          mediaUpload({
            allowedTypes: ___WEBPACK_IMPORTED_MODULE_0__["ALLOWED_BG_MEDIA_TYPES"],
            filesList: files,
            onFileChange: function onFileChange(_ref) {
              var _ref2 = _slicedToArray(_ref, 1),
                  media = _ref2[0];

              return _this2.onSelectFile(media);
            }
          });
        }
      }, {
        key: "onSelectFile",
        value: function onSelectFile(media) {
          if (media && media.url) {
            var mediaType = 'image';

            if (media.mime_type && media.mime_type.includes('video')) {
              mediaType = 'video';
            }

            this.props.setAttributes({
              backgroundImg: media.url,
              backgroundType: mediaType
            });
          }
        }
      }, {
        key: "render",
        value: function render() {
          return wp.element.createElement(Fragment, null, wp.element.createElement(DropZone, {
            onFilesDrop: this.addFile,
            label: this.props.label
          }));
        }
      }]);

      return BackgroundDropZone;
    }(Component);
    /* harmony default export */


    __webpack_exports__["default"] = BackgroundDropZone;
    /***/
  },

  /***/
  "./src/js/gutenberg/controls/background/icons.js":
  /*!*******************************************************!*\
    !*** ./src/js/gutenberg/controls/background/icons.js ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcJsGutenbergControlsBackgroundIconsJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /**
     * WordPress dependencies
     */


    var _wp$components = wp.components,
        SVG = _wp$components.SVG,
        Path = _wp$components.Path,
        G = _wp$components.G;
    /**
     * Custom icons
     */

    var icons = {};
    icons.background = wp.element.createElement(SVG, {
      height: "20",
      viewBox: "0 0 20 20",
      width: "20",
      xmlns: "http://www.w3.org/2000/svg"
    }, wp.element.createElement(G, {
      fill: "none",
      fillRule: "evenodd",
      transform: "translate(2.762573 1)"
    }, wp.element.createElement(Path, {
      d: "m4.93810577 15.6496655-4.30419126-4.3041913c-.67516726-.6751672-.67516726-1.68791812 0-2.36308537l5.48573395-5.31694215 5.40133804 5.40133806c.6751673.67516725.6751673 1.68791816 0 2.36308536l-4.30419124 4.3041913c-.59077135.5907713-1.60352224.5907713-2.27868949-.0843959z",
      stroke: "currentColor",
      strokeWidth: "2"
    }), wp.element.createElement(Path, {
      d: "m15.4031982 15.3120819c0 .9283549-.7595631 1.6879181-1.6879181 1.6879181s-1.6879181-.7595632-1.6879181-1.6879181c0-.928355 1.6879181-3.3758363 1.6879181-3.3758363s1.6879181 2.4474813 1.6879181 3.3758363z",
      fill: "currentColor"
    }), wp.element.createElement(Path, {
      d: "m.21193497 10c0 .4219795.16879181.8439591.42197954 1.1815427l4.30419126 4.3041913c.67516725.6751672 1.68791814.6751672 2.36308539 0l4.30419124-4.3041913c.2531877-.3375836.4219796-.7595632.4219796-1.1815427z",
      fill: "currentColor"
    }), wp.element.createElement(Path, {
      d: "m3.16579172.71158994 6.66727666 6.66727665",
      stroke: "currentColor",
      strokeWidth: "2"
    })));
    icons.edit = wp.element.createElement(SVG, {
      className: "dashicon",
      "aria-hidden": true,
      role: "img",
      focusable: "false",
      height: "20",
      viewBox: "0 0 20 20",
      width: "20",
      xmlns: "http://www.w3.org/2000/svg"
    }, wp.element.createElement(Path, {
      d: "m10.330727 5.86705523.8149993.81499936-8.02597188 8.02597191h-.81499935v-.8149994zm3.1891279-5.33293055c.2303259 0 .4517931.07972819.6289669.25690197l2.0729331 2.07293314c.3454889.34548885.3454889.90358624 0 1.24907509l-1.62114 1.62114002-3.3220083-3.32200823 1.6211401-1.62114002c.1683151-.16831509.398641-.25690197.6201082-.25690197zm-3.1891279 2.82592167 3.3220082 3.32200824-9.79770962 9.79770961h-3.32200824v-3.3220082z",
      transform: "translate(1.5 1.5)"
    }));
    icons.trash = wp.element.createElement(SVG, {
      className: "dashicon",
      "aria-hidden": true,
      role: "img",
      focusable: "false",
      height: "20",
      viewBox: "0 0 20 20",
      width: "20",
      xmlns: "http://www.w3.org/2000/svg"
    }, wp.element.createElement(Path, {
      d: "m9 6.00065104v7.99934896h-6v-7.99934896zm-.85714286-6.00065104.85714286 1.00907841h3v2.01815683h-12v-2.01815683h3l.85714286-1.00907841zm-7.12701513 4.01388889h9.99696179v10.27380951c0 .9417659-.6413752 1.7123016-1.58423237 1.7123016h-6.85714286c-.94285714 0-1.55558656-.7705357-1.55558656-1.7123016z",
      transform: "translate(4 2)"
    }));
    /* harmony default export */

    __webpack_exports__["default"] = icons;
    /***/
  },

  /***/
  "./src/js/gutenberg/controls/background/index.js":
  /*!*******************************************************!*\
    !*** ./src/js/gutenberg/controls/background/index.js ***!
    \*******************************************************/

  /*! exports provided: BackgroundAttributes, BackgroundClasses, BackgroundControls, BackgroundDropZone, BackgroundStyles, BackgroundTransforms, BackgroundVideo, BackgroundPanel, ALLOWED_BG_MEDIA_TYPES */

  /***/
  function srcJsGutenbergControlsBackgroundIndexJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ALLOWED_BG_MEDIA_TYPES", function () {
      return ALLOWED_BG_MEDIA_TYPES;
    });
    /* harmony import */


    var _attributes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./attributes */
    "./src/js/gutenberg/controls/background/attributes.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "BackgroundAttributes", function () {
      return _attributes__WEBPACK_IMPORTED_MODULE_0__["default"];
    });
    /* harmony import */


    var _classes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./classes */
    "./src/js/gutenberg/controls/background/classes.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "BackgroundClasses", function () {
      return _classes__WEBPACK_IMPORTED_MODULE_1__["default"];
    });
    /* harmony import */


    var _controls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./controls */
    "./src/js/gutenberg/controls/background/controls.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "BackgroundControls", function () {
      return _controls__WEBPACK_IMPORTED_MODULE_2__["default"];
    });
    /* harmony import */


    var _dropzone__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./dropzone */
    "./src/js/gutenberg/controls/background/dropzone.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "BackgroundDropZone", function () {
      return _dropzone__WEBPACK_IMPORTED_MODULE_3__["default"];
    });
    /* harmony import */


    var _styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./styles */
    "./src/js/gutenberg/controls/background/styles.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "BackgroundStyles", function () {
      return _styles__WEBPACK_IMPORTED_MODULE_4__["default"];
    });
    /* harmony import */


    var _panel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./panel */
    "./src/js/gutenberg/controls/background/panel.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "BackgroundPanel", function () {
      return _panel__WEBPACK_IMPORTED_MODULE_5__["default"];
    });
    /* harmony import */


    var _transforms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./transforms */
    "./src/js/gutenberg/controls/background/transforms.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "BackgroundTransforms", function () {
      return _transforms__WEBPACK_IMPORTED_MODULE_6__["default"];
    });
    /* harmony import */


    var _video__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./video */
    "./src/js/gutenberg/controls/background/video.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "BackgroundVideo", function () {
      return _video__WEBPACK_IMPORTED_MODULE_7__["default"];
    });
    /**
     * Internal dependencies
     */


    var ALLOWED_BG_MEDIA_TYPES = ['image', 'video'];
    /***/
  },

  /***/
  "./src/js/gutenberg/controls/background/panel.js":
  /*!*******************************************************!*\
    !*** ./src/js/gutenberg/controls/background/panel.js ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcJsGutenbergControlsBackgroundPanelJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _responsive_tabs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ../responsive-tabs */
    "./src/js/gutenberg/controls/responsive-tabs/index.js");

    function _typeof(obj) {
      if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
        _typeof = function _typeof(obj) {
          return _typeof2(obj);
        };
      } else {
        _typeof = function _typeof(obj) {
          return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
        };
      }

      return _typeof(obj);
    }

    function _extends() {
      _extends = Object.assign || function (target) {
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

    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }

    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps) _defineProperties(Constructor.prototype, protoProps);
      if (staticProps) _defineProperties(Constructor, staticProps);
      return Constructor;
    }

    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }

      return _assertThisInitialized(self);
    }

    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
      };
      return _getPrototypeOf(o);
    }

    function _assertThisInitialized(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }

      return self;
    }

    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
      }

      subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
          value: subClass,
          writable: true,
          configurable: true
        }
      });
      if (superClass) _setPrototypeOf(subClass, superClass);
    }

    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
      };

      return _setPrototypeOf(o, p);
    }
    /**
     * External dependencies
     */


    var _lodash = lodash,
        isEmpty = _lodash.isEmpty;
    /**
     * Internal dependencies
     */

    /**
     * WordPress dependencies
     */

    var _wp$i18n = wp.i18n,
        __ = _wp$i18n.__,
        sprintf = _wp$i18n.sprintf;
    var _wp$element = wp.element,
        Component = _wp$element.Component,
        Fragment = _wp$element.Fragment;
    var _wp$components = wp.components,
        SelectControl = _wp$components.SelectControl,
        RangeControl = _wp$components.RangeControl,
        ToggleControl = _wp$components.ToggleControl,
        PanelBody = _wp$components.PanelBody,
        Button = _wp$components.Button,
        FocalPointPicker = _wp$components.FocalPointPicker,
        ColorPalette = _wp$components.ColorPalette,
        ColorIndicator = _wp$components.ColorIndicator;

    var BackgroundPanel =
    /*#__PURE__*/
    function (_Component) {
      _inherits(BackgroundPanel, _Component);

      function BackgroundPanel() {
        var _this;

        _classCallCheck(this, BackgroundPanel);

        _this = _possibleConstructorReturn(this, _getPrototypeOf(BackgroundPanel).apply(this, arguments));
        _this.setBackgroundPaddingTo = _this.setBackgroundPaddingTo.bind(_assertThisInitialized(_this));
        _this.setBackgroundPaddingMobileTo = _this.setBackgroundPaddingMobileTo.bind(_assertThisInitialized(_this));
        _this.onSelectRepeat = _this.onSelectRepeat.bind(_assertThisInitialized(_this));
        return _this;
      }

      _createClass(BackgroundPanel, [{
        key: "setBackgroundPaddingTo",
        value: function setBackgroundPaddingTo(value) {
          this.props.setAttributes({
            backgroundPadding: value
          });

          if (this.props.attributes.backgroundPadding <= 0) {
            this.props.setAttributes({
              backgroundRadius: 0
            });
          }
        }
      }, {
        key: "setBackgroundPaddingMobileTo",
        value: function setBackgroundPaddingMobileTo(value) {
          this.props.setAttributes({
            backgroundPaddingMobile: value
          });
        }
      }, {
        key: "onSelectRepeat",
        value: function onSelectRepeat(value) {
          if (value === 'no-repeat') {
            this.props.setAttributes({
              backgroundRepeat: value,
              backgroundSize: 'cover'
            });
          } else {
            this.props.setAttributes({
              backgroundRepeat: value,
              backgroundSize: 'contain',
              focalPoint: undefined
            });
          }
        }
      }, {
        key: "render",
        value: function render() {
          var _this2 = this;

          var _this$props = this.props,
              select = _this$props.select,
              attributes = _this$props.attributes,
              backgroundColor = _this$props.backgroundColor,
              setBackgroundColor = _this$props.setBackgroundColor,
              hasGalleryControls = _this$props.hasGalleryControls,
              hasOverlay = _this$props.hasOverlay,
              setAttributes = _this$props.setAttributes;
          var align = attributes.align,
              backgroundImg = attributes.backgroundImg,
              backgroundOverlay = attributes.backgroundOverlay,
              backgroundPadding = attributes.backgroundPadding,
              backgroundPaddingMobile = attributes.backgroundPaddingMobile,
              backgroundPosition = attributes.backgroundPosition,
              backgroundRadius = attributes.backgroundRadius,
              backgroundRepeat = attributes.backgroundRepeat,
              backgroundSize = attributes.backgroundSize,
              _attributes$backgroun = attributes.backgroundType,
              backgroundType = _attributes$backgroun === void 0 ? 'image' : _attributes$backgroun,
              focalPoint = attributes.focalPoint,
              hasParallax = attributes.hasParallax,
              videoLoop = attributes.videoLoop,
              videoMuted = attributes.videoMuted;
          var backgroundPositionOptions = [{
            value: 'top left',

            /* translators: block layout */
            label: __('Top Left', 'wecodeart')
          }, {
            value: 'top center',

            /* translators: block layout */
            label: __('Top Center', 'wecodeart')
          }, {
            value: 'top right',

            /* translators: block layout */
            label: __('Top Right', 'wecodeart')
          }, {
            value: 'center left',

            /* translators: block layout */
            label: __('Center Left', 'wecodeart')
          }, {
            value: 'center center',

            /* translators: block layout */
            label: __('Center Center', 'wecodeart')
          }, {
            value: 'center right',

            /* translators: block layout */
            label: __('Center Right', 'wecodeart')
          }, {
            value: 'bottom left',

            /* translators: block layout */
            label: __('Bottom Left', 'wecodeart')
          }, {
            value: 'bottom center',

            /* translators: block layout */
            label: __('Bottom Center', 'wecodeart')
          }, {
            value: 'bottom right',

            /* translators: block layout */
            label: __('Bottom Right', 'wecodeart')
          }];
          var backgroundRepeatOptions = [{
            value: 'no-repeat',

            /* translators: block layout */
            label: __('No Repeat', 'wecodeart')
          }, {
            value: 'repeat',

            /* translators: block layout */
            label: __('Repeat', 'wecodeart')
          }, {
            value: 'repeat-x',

            /* translators: block layout */
            label: __('Repeat Horizontally', 'wecodeart')
          }, {
            value: 'repeat-y',

            /* translators: block layout */
            label: __('Repeat Vertically', 'wecodeart')
          }];
          var backgroundSizeOptions = [{
            value: 'auto',

            /* translators: block layout */
            label: __('Auto', 'wecodeart')
          }, {
            value: 'cover',

            /* translators: block layout */
            label: __('Cover', 'wecodeart')
          }, {
            value: 'contain',

            /* translators: block layout */
            label: __('Contain', 'wecodeart')
          }];
          var backgroundSizeDefault = 'cover';

          var _select$getSettings = select('core/block-editor').getSettings(),
              colors = _select$getSettings.colors;

          return wp.element.createElement(PanelBody, {
            title: __('Background Settings', 'wecodeart'),
            icon: wp.element.createElement(ColorIndicator, {
              colorValue: backgroundColor.color
            }),
            initialOpen: false,
            className: "components-panel__body--wecodeart-background-panel wecodeart-background-panel"
          }, wp.element.createElement("br", null), wp.element.createElement(ColorPalette, {
            colors: colors,
            value: backgroundColor.color,
            title: __('Background Color', 'wecodeart'),
            onChange: setBackgroundColor
          }), backgroundImg && wp.element.createElement(Fragment, null, wp.element.createElement("hr", null), backgroundType === 'image' && wp.element.createElement(ToggleControl, {
            label: __('Fixed Background', 'wecodeart'),
            checked: !!hasParallax,
            onChange: function onChange() {
              return setAttributes({
                hasParallax: !hasParallax
              });
            }
          }), !hasParallax && FocalPointPicker && backgroundType === 'image' && backgroundRepeat !== 'repeat' && wp.element.createElement(FocalPointPicker, {
            label: __('Focal Point', 'wecodeart'),
            url: backgroundImg,
            value: focalPoint,
            onChange: function onChange(value) {
              return setAttributes({
                focalPoint: value
              });
            },
            className: "components-focal-point-picker--wecodeart"
          }), hasOverlay && wp.element.createElement(RangeControl, {
            label: __('Background Opacity', 'wecodeart'),
            value: backgroundOverlay,
            onChange: function onChange(nextBackgroundOverlay) {
              return setAttributes({
                backgroundOverlay: nextBackgroundOverlay
              });
            },
            min: 0,
            max: 100,
            step: 10
          }), hasGalleryControls && wp.element.createElement(Fragment, null, wp.element.createElement(_responsive_tabs__WEBPACK_IMPORTED_MODULE_0__["default"], _extends({}, this.props, {
            label: __('Padding', 'wecodeart'),
            value: backgroundPadding,
            valueMobile: backgroundPaddingMobile,
            onChange: this.setBackgroundPaddingTo,
            onChangeMobile: this.setBackgroundPaddingMobileTo,
            min: 5,
            max: 100
          })), (!isEmpty(backgroundImg) || !isEmpty(backgroundColor.color)) && backgroundPadding > 0 && align !== 'full' && wp.element.createElement(RangeControl, {
            label: __('Rounded Corners', 'wecodeart'),
            value: backgroundRadius,
            onChange: function onChange(nextBackgroundRadius) {
              return setAttributes({
                backgroundRadius: nextBackgroundRadius
              });
            },
            min: 0,
            max: 20,
            step: 1
          })), backgroundType === 'image' && wp.element.createElement(SelectControl, {
            label: __('Repeat', 'wecodeart'),
            className: "components-background-display-select--wecodeart",
            value: backgroundRepeat ? backgroundRepeat : 'no-repeat',
            options: backgroundRepeatOptions,
            onChange: function onChange(nextbackgroundRepeat) {
              return _this2.onSelectRepeat(nextbackgroundRepeat);
            }
          }), !FocalPointPicker && backgroundType === 'image' && wp.element.createElement(SelectControl, {
            label: __('Position', 'wecodeart'),
            value: backgroundPosition ? backgroundPosition : 'center center',
            options: backgroundPositionOptions,
            onChange: function onChange(nextbackgroundPosition) {
              return setAttributes({
                backgroundPosition: nextbackgroundPosition
              });
            }
          }), backgroundRepeat === 'no-repeat' && backgroundType === 'image' && wp.element.createElement(SelectControl, {
            label: __('Display', 'wecodeart'),
            value: backgroundSize ? backgroundSize : backgroundSizeDefault,
            options: backgroundSizeOptions,
            onChange: function onChange(nextbackgroundSize) {
              return setAttributes({
                backgroundSize: nextbackgroundSize
              });
            }
          }), backgroundType === 'video' && wp.element.createElement(ToggleControl, {
            label: __('Mute Video', 'wecodeart'),
            help: videoMuted ? __('Muting the background video.', 'wecodeart') : __('Toggle to mute the video.', 'wecodeart'),
            checked: !!videoMuted,
            onChange: function onChange() {
              return setAttributes({
                videoMuted: !videoMuted
              });
            }
          }), backgroundType === 'video' && wp.element.createElement(ToggleControl, {
            label: __('Loop Video', 'wecodeart'),
            help: videoLoop ? __('Looping the background video.', 'wecodeart') : __('Toggle to loop the video.', 'wecodeart'),
            checked: !!videoLoop,
            onChange: function onChange() {
              return setAttributes({
                videoLoop: !videoLoop
              });
            }
          }), wp.element.createElement(Button, {
            className: "components-button--wecodeart-remove-background-image",
            type: "button",
            isDefault: true,
            label: __('Remove background', 'wecodeart'),
            onClick: function onClick() {
              setAttributes({
                backgroundImg: '',
                backgroundOverlay: 0,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: '',
                backgroundSize: 'cover',
                hasParallax: false,
                backgroundPadding: 0,
                backgroundPaddingMobile: 0
              });
            }
          }, sprintf(__('Remove %s', 'wecodeart'), backgroundType))));
        }
      }]);

      return BackgroundPanel;
    }(Component);
    /* harmony default export */


    __webpack_exports__["default"] = BackgroundPanel;
    /***/
  },

  /***/
  "./src/js/gutenberg/controls/background/styles.js":
  /*!********************************************************!*\
    !*** ./src/js/gutenberg/controls/background/styles.js ***!
    \********************************************************/

  /*! exports provided: default */

  /***/
  function srcJsGutenbergControlsBackgroundStylesJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);

    function ownKeys(object, enumerableOnly) {
      var keys = Object.keys(object);

      if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) symbols = symbols.filter(function (sym) {
          return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
        keys.push.apply(keys, symbols);
      }

      return keys;
    }

    function _objectSpread(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i] != null ? arguments[i] : {};

        if (i % 2) {
          ownKeys(Object(source), true).forEach(function (key) {
            _defineProperty(target, key, source[key]);
          });
        } else if (Object.getOwnPropertyDescriptors) {
          Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        } else {
          ownKeys(Object(source)).forEach(function (key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
          });
        }
      }

      return target;
    }

    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, {
          value: value,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        obj[key] = value;
      }

      return obj;
    }
    /**
     * WordPress dependencies
     */


    var _lodash = lodash,
        find = _lodash.find;
    /**
     * Background Classes
     *
     * @param {Object} attributes      The attributes.
     * @param {Object} backgroundColor The selected background color.
     * @returns {Object} styles.
     */

    var BackgroundStyles = function BackgroundStyles(attributes) {
      var colors = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var backgroundColor = attributes.backgroundColor,
          customBackgroundColor = attributes.customBackgroundColor;
      var showBGPosition = attributes && attributes.backgroundImg && attributes.backgroundType === 'image';
      var styles = {};

      if (typeof backgroundColor !== 'undefined') {
        if (typeof colors !== 'undefined') {
          var backgroundColorValue = find(colors, {
            slug: backgroundColor
          });

          if (typeof backgroundColorValue !== 'undefined' && typeof backgroundColorValue.color !== 'undefined') {
            styles = _objectSpread({}, styles, {
              backgroundColor: backgroundColorValue.color
            });
          }
        }
      } else if (typeof customBackgroundColor !== 'undefined') {
        styles = _objectSpread({}, styles, {
          backgroundColor: customBackgroundColor
        });
      }

      styles = _objectSpread({}, styles, {
        backgroundImage: attributes.backgroundImg && attributes.backgroundType === 'image' ? "url(".concat(attributes.backgroundImg, ")") : undefined,
        backgroundPosition: showBGPosition && attributes.focalPoint && !attributes.hasParallax ? "".concat(attributes.focalPoint.x * 100, "% ").concat(attributes.focalPoint.y * 100, "%") : undefined
      });
      return styles;
    };
    /* harmony default export */


    __webpack_exports__["default"] = BackgroundStyles;
    /***/
  },

  /***/
  "./src/js/gutenberg/controls/background/transforms.js":
  /*!************************************************************!*\
    !*** ./src/js/gutenberg/controls/background/transforms.js ***!
    \************************************************************/

  /*! exports provided: default */

  /***/
  function srcJsGutenbergControlsBackgroundTransformsJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /**
     * Set the attributes for the Background transformations.
     *
     * @param {Object} props The passed props.
     * @returns {Object} The background transforms.
     */


    function BackgroundTransforms(props) {
      var transforms = {
        backgroundColor: props.backgroundColor,
        customBackgroundColor: props.customBackgroundColor,
        backgroundImg: props.backgroundImg,
        backgroundOverlay: props.backgroundOverlay,
        backgroundPosition: props.backgroundPosition,
        backgroundRepeat: props.backgroundRepeat,
        backgroundSize: props.backgroundSize,
        hasParallax: props.hasParallax,
        backgroundPadding: props.backgroundPadding,
        backgroundPaddingMobile: props.backgroundPaddingMobile,
        backgroundRadius: props.backgroundRadius,
        captionStyle: props.captionStyle
      };
      return transforms;
    }
    /* harmony default export */


    __webpack_exports__["default"] = BackgroundTransforms;
    /***/
  },

  /***/
  "./src/js/gutenberg/controls/background/video.js":
  /*!*******************************************************!*\
    !*** ./src/js/gutenberg/controls/background/video.js ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcJsGutenbergControlsBackgroundVideoJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /**
     * Background Video.
     *
     * @param {Object} attributes The attributes.
     * @returns {string} html content.
     */


    function BackgroundVideo(attributes) {
      var backgroundImg = attributes.backgroundImg,
          backgroundType = attributes.backgroundType,
          videoMuted = attributes.videoMuted,
          videoLoop = attributes.videoLoop;
      return [backgroundType === 'video' && backgroundImg ? wp.element.createElement("div", {
        className: "wecodeart-video-bg position-absolute overflow-hidden w-100 h-100 pin-t pin-r pin-b pin-l"
      }, wp.element.createElement("video", {
        className: "w-100 h-100 bg-center-center object-cover object-position",
        playsinline: "",
        autoPlay: "",
        muted: videoMuted,
        loop: videoLoop,
        src: backgroundImg
      })) : null];
    }
    /* harmony default export */


    __webpack_exports__["default"] = BackgroundVideo;
    /***/
  },

  /***/
  "./src/js/gutenberg/controls/bootstrap-columns/icons.js":
  /*!**************************************************************!*\
    !*** ./src/js/gutenberg/controls/bootstrap-columns/icons.js ***!
    \**************************************************************/

  /*! exports provided: default */

  /***/
  function srcJsGutenbergControlsBootstrapColumnsIconsJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /**
     * WordPress dependencies
     */


    var _wp$components = wp.components,
        SVG = _wp$components.SVG,
        Path = _wp$components.Path;
    /**
     * Custom icons
     */

    var icons = {};
    icons.global = wp.element.createElement(SVG, {
      viewBox: "0 0 496 512",
      xmlns: "http://www.w3.org/2000/svg"
    }, wp.element.createElement(Path, {
      d: "M336.5 160C322 70.7 287.8 8 248 8s-74 62.7-88.5 152h177zM152 256c0 22.2 1.2 43.5 3.3 64h185.3c2.1-20.5 3.3-41.8 3.3-64s-1.2-43.5-3.3-64H155.3c-2.1 20.5-3.3 41.8-3.3 64zm324.7-96c-28.6-67.9-86.5-120.4-158-141.6 24.4 33.8 41.2 84.7 50 141.6h108zM177.2 18.4C105.8 39.6 47.8 92.1 19.3 160h108c8.7-56.9 25.5-107.8 49.9-141.6zM487.4 192H372.7c2.1 21 3.3 42.5 3.3 64s-1.2 43-3.3 64h114.6c5.5-20.5 8.6-41.8 8.6-64s-3.1-43.5-8.5-64zM120 256c0-21.5 1.2-43 3.3-64H8.6C3.2 212.5 0 233.8 0 256s3.2 43.5 8.6 64h114.6c-2-21-3.2-42.5-3.2-64zm39.5 96c14.5 89.3 48.7 152 88.5 152s74-62.7 88.5-152h-177zm159.3 141.6c71.4-21.2 129.4-73.7 158-141.6h-108c-8.8 56.9-25.6 107.8-50 141.6zM19.3 352c28.6 67.9 86.5 120.4 158 141.6-24.4-33.8-41.2-84.7-50-141.6h-108z"
    }));
    icons.xs = wp.element.createElement(SVG, {
      viewBox: "0 0 333.197 333.197",
      xmlns: "http://www.w3.org/2000/svg"
    }, wp.element.createElement(Path, {
      d: "M317.239,82.529l-66.571-66.571c-21.279-21.277-55.898-21.277-77.178,0L15.958,173.49   c-21.277,21.278-21.277,55.899,0,77.178l66.571,66.571c10.64,10.639,24.614,15.958,38.589,15.958s27.949-5.319,38.589-15.958   L275.79,201.156c2.929-2.93,2.929-7.678,0-10.607c-2.93-2.928-7.678-2.928-10.607,0l-96.948,96.948L60.467,179.73   c-2.93-2.928-7.678-2.928-10.607,0c-2.929,2.93-2.929,7.678,0,10.607l107.768,107.767l-8.527,8.527   c-7.474,7.475-17.411,11.591-27.981,11.591s-20.508-4.116-27.981-11.591l-66.571-66.571c-7.475-7.474-11.591-17.411-11.591-27.981   s4.116-20.508,11.591-27.981L169.463,41.2l127.838,127.838c0.183,0.183,0.374,0.354,0.57,0.515   c1.375,1.121,3.055,1.682,4.734,1.682s3.359-0.561,4.734-1.682c0.196-0.16,0.387-0.332,0.57-0.515l9.331-9.331   C338.517,138.429,338.517,103.808,317.239,82.529z M306.632,149.1l-4.027,4.027L180.07,30.593l4.027-4.027   c7.474-7.475,17.411-11.591,27.981-11.591s20.508,4.116,27.981,11.591l66.571,66.571c7.475,7.474,11.591,17.411,11.591,27.981   S314.106,141.626,306.632,149.1z"
    }));
    icons.sm = wp.element.createElement(SVG, {
      viewBox: "0 0 320 512",
      xmlns: "http://www.w3.org/2000/svg"
    }, wp.element.createElement(Path, {
      d: "M196 448h-72c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h72c6.6 0 12 5.4 12 12v8c0 6.6-5.4 12-12 12zM320 48v416c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V48C0 21.5 21.5 0 48 0h224c26.5 0 48 21.5 48 48zm-32 0c0-8.8-7.2-16-16-16H48c-8.8 0-16 7.2-16 16v416c0 8.8 7.2 16 16 16h224c8.8 0 16-7.2 16-16V48z"
    }));
    icons.md = wp.element.createElement(SVG, {
      viewBox: "0 0 448 512",
      xmlns: "http://www.w3.org/2000/svg"
    }, wp.element.createElement(Path, {
      d: "M256 416c0 17.7-14.3 32-32 32s-32-14.3-32-32c0-21.3 14.3-32 32-32s32 14.3 32 32zM448 48v416c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V48C0 21.5 21.5 0 48 0h352c26.5 0 48 21.5 48 48zm-32 0c0-8.8-7.2-16-16-16H48c-8.8 0-16 7.2-16 16v416c0 8.8 7.2 16 16 16h352c8.8 0 16-7.2 16-16V48z"
    }));
    icons.lg = wp.element.createElement(SVG, {
      viewBox: "0 0 640 512",
      xmlns: "http://www.w3.org/2000/svg"
    }, wp.element.createElement(Path, {
      d: "M624 352h-48V64c0-35.2-28.8-64-64-64H128C92.8 0 64 28.8 64 64v288H16c-8.8 0-16 7.2-16 16v48c0 52.8 43.2 96 96 96h448c52.8 0 96-43.2 96-96v-48c0-8.8-7.2-16-16-16zM112 64c0-8.67 7.33-16 16-16h384c8.67 0 16 7.33 16 16v288H112V64zm480 352c0 26.47-21.53 48-48 48H96c-26.47 0-48-21.53-48-48v-16h180.9c5.57 9.39 15.38 16 27.1 16h128c11.72 0 21.52-6.61 27.1-16H592v16z"
    }));
    icons.xl = wp.element.createElement(SVG, {
      viewBox: "0 0 640 512",
      xmlns: "http://www.w3.org/2000/svg"
    }, wp.element.createElement(Path, {
      d: "M528 464H112a16 16 0 0 0-16 16v16a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16v-16a16 16 0 0 0-16-16zM592 0H48A48 48 0 0 0 0 48v320a48 48 0 0 0 48 48h544a48 48 0 0 0 48-48V48a48 48 0 0 0-48-48zm0 368H48V48h544z"
    }));
    /* harmony default export */

    __webpack_exports__["default"] = icons;
    /***/
  },

  /***/
  "./src/js/gutenberg/controls/bootstrap-columns/index.js":
  /*!**************************************************************!*\
    !*** ./src/js/gutenberg/controls/bootstrap-columns/index.js ***!
    \**************************************************************/

  /*! exports provided: default */

  /***/
  function srcJsGutenbergControlsBootstrapColumnsIndexJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./icons */
    "./src/js/gutenberg/controls/bootstrap-columns/icons.js");

    function _typeof(obj) {
      if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
        _typeof = function _typeof(obj) {
          return _typeof2(obj);
        };
      } else {
        _typeof = function _typeof(obj) {
          return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
        };
      }

      return _typeof(obj);
    }

    function _toConsumableArray(arr) {
      return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
    }

    function _nonIterableSpread() {
      throw new TypeError("Invalid attempt to spread non-iterable instance");
    }

    function _iterableToArray(iter) {
      if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
    }

    function _arrayWithoutHoles(arr) {
      if (Array.isArray(arr)) {
        for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
          arr2[i] = arr[i];
        }

        return arr2;
      }
    }

    function ownKeys(object, enumerableOnly) {
      var keys = Object.keys(object);

      if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) symbols = symbols.filter(function (sym) {
          return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
        keys.push.apply(keys, symbols);
      }

      return keys;
    }

    function _objectSpread(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i] != null ? arguments[i] : {};

        if (i % 2) {
          ownKeys(Object(source), true).forEach(function (key) {
            _defineProperty(target, key, source[key]);
          });
        } else if (Object.getOwnPropertyDescriptors) {
          Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        } else {
          ownKeys(Object(source)).forEach(function (key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
          });
        }
      }

      return target;
    }

    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, {
          value: value,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        obj[key] = value;
      }

      return obj;
    }

    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }

    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps) _defineProperties(Constructor.prototype, protoProps);
      if (staticProps) _defineProperties(Constructor, staticProps);
      return Constructor;
    }

    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }

      return _assertThisInitialized(self);
    }

    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
      };
      return _getPrototypeOf(o);
    }

    function _assertThisInitialized(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }

      return self;
    }

    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
      }

      subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
          value: subClass,
          writable: true,
          configurable: true
        }
      });
      if (superClass) _setPrototypeOf(subClass, superClass);
    }

    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
      };

      return _setPrototypeOf(o, p);
    }
    /**
     * WordPress dependencies
     */


    var _wp$i18n = wp.i18n,
        __ = _wp$i18n.__,
        sprintf = _wp$i18n.sprintf;
    var Fragment = wp.element.Fragment;
    var Component = wp.element.Component;
    var _wp$components = wp.components,
        SelectControl = _wp$components.SelectControl,
        TabPanel = _wp$components.TabPanel;
    var compose = wp.compose.compose;
    var withSelect = wp.data.withSelect;
    /**
     * Internal dependencies
     */

    /**
     * BootstrapColumns
     */

    var ResponsiveColumns =
    /*#__PURE__*/
    function (_Component) {
      _inherits(ResponsiveColumns, _Component);

      function ResponsiveColumns() {
        var _this;

        _classCallCheck(this, ResponsiveColumns);

        _this = _possibleConstructorReturn(this, _getPrototypeOf(ResponsiveColumns).apply(this, arguments));
        _this.setColumn = _this.setColumn.bind(_assertThisInitialized(_this));
        return _this;
      }

      _createClass(ResponsiveColumns, [{
        key: "setColumn",
        value: function setColumn(value) {
          var breakpoint = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'global';
          var _this$props = this.props,
              bootstrapColumns = _this$props.attributes.bootstrapColumns,
              setAttributes = _this$props.setAttributes;
          setAttributes({
            bootstrapColumns: _objectSpread({}, bootstrapColumns, _defineProperty({}, breakpoint, value))
          });
        }
      }, {
        key: "getSelectOptions",
        value: function getSelectOptions() {
          var prefix = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'global';
          var select = this.props.select;

          var _select$getEditorSett = select('core/editor').getEditorSettings(),
              columnsClasses = _select$getEditorSett.wecodeart.columnsClasses;

          var makeLabel = function makeLabel(option) {
            var label = option;

            var isNumber = function isNumber(string) {
              var match = string.match(/\d+$/);

              if (match) {
                return parseInt(match[0]);
              }

              return false;
            };

            var isFull = function isFull(string) {
              return string.endsWith('-12');
            };

            var isAuto = function isAuto(string) {
              return string.endsWith('-auto');
            };

            if (isFull(option)) {
              label = __('Full Width', 'wecodeart');
            } else if (isNumber(option)) {
              var number = isNumber(option);
              label = sprintf(__('%s/12', 'wecodeart'), number);
            } else if (isAuto(option)) {
              label = __('Auto - Shrink', 'wecodeart');
            } else {
              label = __('Auto - Expand', 'wecodeart');
            }

            return label;
          };

          var breakpointOpts = _toConsumableArray(columnsClasses[prefix].map(function (option) {
            return {
              value: option,
              label: makeLabel(option)
            };
          }));

          if (prefix !== 'global') {
            breakpointOpts.unshift({
              value: '',
              label: __('None', 'wecodeart')
            });
          }

          return breakpointOpts;
        }
      }, {
        key: "render",
        value: function render() {
          var _this2 = this;

          var _this$props2 = this.props,
              _this$props2$label = _this$props2.label,
              label = _this$props2$label === void 0 ? __('Column Width - %s', 'wecodeart') : _this$props2$label,
              _this$props2$onChange = _this$props2.onChange,
              _onChange = _this$props2$onChange === void 0 ? this.setColumn : _this$props2$onChange,
              bootstrapColumns = _this$props2.attributes.bootstrapColumns;

          return wp.element.createElement(TabPanel, {
            className: "components-base-control wecodeart-horizontal-tabs",
            activeClass: "is-active",
            initialTabName: "global",
            tabs: [{
              name: 'global',
              title: _icons__WEBPACK_IMPORTED_MODULE_0__["default"].global,
              className: 'wecodeart-horizontal-tabs__item wecodeart-horizontal-tabs__item--global'
            }, {
              name: 'sm',
              title: _icons__WEBPACK_IMPORTED_MODULE_0__["default"].sm,
              className: 'wecodeart-horizontal-tabs__item wecodeart-horizontal-tabs__item--sm'
            }, {
              name: 'md',
              title: _icons__WEBPACK_IMPORTED_MODULE_0__["default"].md,
              className: 'wecodeart-horizontal-tabs__item wecodeart-horizontal-tabs__item--md'
            }, {
              name: 'lg',
              title: _icons__WEBPACK_IMPORTED_MODULE_0__["default"].lg,
              className: 'wecodeart-horizontal-tabs__item wecodeart-horizontal-tabs__item--lg'
            }, {
              name: 'xl',
              title: _icons__WEBPACK_IMPORTED_MODULE_0__["default"].xl,
              className: 'wecodeart-horizontal-tabs__item wecodeart-horizontal-tabs__item--xl'
            }]
          }, function (tab) {
            var tabName = tab.name;
            var isNone = bootstrapColumns[tabName] === '';
            return wp.element.createElement(Fragment, null, wp.element.createElement(SelectControl, {
              className: 'components-font-size-picker__select',
              label: sprintf(label, tabName.toUpperCase()),
              value: bootstrapColumns[tabName],
              onChange: function onChange(value) {
                return _onChange(value, tabName);
              },
              options: _this2.getSelectOptions(tabName)
            }), isNone && wp.element.createElement("span", {
              class: "wecodeart-horizontal-tabs__item-help"
            }, wp.element.createElement("small", null, __('Previous breakpoint column size is used.', 'wecodeart'))));
          });
        }
      }]);

      return ResponsiveColumns;
    }(Component);
    /* harmony default export */


    __webpack_exports__["default"] = compose(withSelect(function (select) {
      return {
        select: select
      };
    }))(ResponsiveColumns);
    /***/
  },

  /***/
  "./src/js/gutenberg/controls/responsive-tabs/icons.js":
  /*!************************************************************!*\
    !*** ./src/js/gutenberg/controls/responsive-tabs/icons.js ***!
    \************************************************************/

  /*! exports provided: default */

  /***/
  function srcJsGutenbergControlsResponsiveTabsIconsJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /**
     * WordPress dependencies
     */


    var _wp$components = wp.components,
        SVG = _wp$components.SVG,
        Path = _wp$components.Path;
    /**
     * Custom icons
     */

    var icons = {};
    icons.mobile = wp.element.createElement(SVG, {
      "aria-hidden": true,
      className: "dashicon",
      role: "img",
      focusable: "false",
      height: "15",
      viewBox: "0 0 15 15",
      width: "15",
      xmlns: "http://www.w3.org/2000/svg"
    }, wp.element.createElement(Path, {
      d: "m8.25 0h-6c-.825 0-1.5.61363636-1.5 1.36363636v10.27272724c0 .75.675 1.3636364 1.5 1.3636364h6c.825 0 1.5-.6136364 1.5-1.3636364v-10.27272724c0-.75-.675-1.36363636-1.5-1.36363636zm-.5 11h-5v-9h5z",
      transform: "translate(2.25 1)"
    }));
    icons.desktopChrome = wp.element.createElement(SVG, {
      "aria-hidden": true,
      className: "dashicon dashicon--desktop-chrome",
      role: "img",
      focusable: "false",
      height: "15",
      viewBox: "0 0 15 15",
      width: "15",
      xmlns: "http://www.w3.org/2000/svg"
    }, wp.element.createElement(Path, {
      d: "m13.5 0h-12c-.8325 0-1.5.61363636-1.5 1.36363636v12.27272724c0 .75.6675 1.3636364 1.5 1.3636364h12l-.5-2h-11v-10h11v10l.5 2c.825 0 1.5-.6136364 1.5-1.3636364v-12.27272724c0-.75-.6675-1.36363636-1.5-1.36363636z"
    }));
    /* harmony default export */

    __webpack_exports__["default"] = icons;
    /***/
  },

  /***/
  "./src/js/gutenberg/controls/responsive-tabs/index.js":
  /*!************************************************************!*\
    !*** ./src/js/gutenberg/controls/responsive-tabs/index.js ***!
    \************************************************************/

  /*! exports provided: default */

  /***/
  function srcJsGutenbergControlsResponsiveTabsIndexJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./icons */
    "./src/js/gutenberg/controls/responsive-tabs/icons.js");

    function _typeof(obj) {
      if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
        _typeof = function _typeof(obj) {
          return _typeof2(obj);
        };
      } else {
        _typeof = function _typeof(obj) {
          return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
        };
      }

      return _typeof(obj);
    }

    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }

    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps) _defineProperties(Constructor.prototype, protoProps);
      if (staticProps) _defineProperties(Constructor, staticProps);
      return Constructor;
    }

    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }

      return _assertThisInitialized(self);
    }

    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
      };
      return _getPrototypeOf(o);
    }

    function _assertThisInitialized(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }

      return self;
    }

    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
      }

      subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
          value: subClass,
          writable: true,
          configurable: true
        }
      });
      if (superClass) _setPrototypeOf(subClass, superClass);
    }

    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
      };

      return _setPrototypeOf(o, p);
    }
    /**
     * Internal dependencies
     */

    /**
     * WordPress dependencies
     */


    var _wp$i18n = wp.i18n,
        __ = _wp$i18n.__,
        sprintf = _wp$i18n.sprintf;
    var Component = wp.element.Component;
    var _wp$components = wp.components,
        RangeControl = _wp$components.RangeControl,
        TabPanel = _wp$components.TabPanel;

    var ResponsiveTabsControl =
    /*#__PURE__*/
    function (_Component) {
      _inherits(ResponsiveTabsControl, _Component);

      function ResponsiveTabsControl() {
        var _this;

        _classCallCheck(this, ResponsiveTabsControl);

        _this = _possibleConstructorReturn(this, _getPrototypeOf(ResponsiveTabsControl).apply(this, arguments));
        _this.setGutterTo = _this.setGutterTo.bind(_assertThisInitialized(_this));
        _this.setGutterMobileTo = _this.setGutterMobileTo.bind(_assertThisInitialized(_this));
        return _this;
      }

      _createClass(ResponsiveTabsControl, [{
        key: "setGutterTo",
        value: function setGutterTo(value) {
          this.props.setAttributes({
            gutter: value
          });
        }
      }, {
        key: "setGutterMobileTo",
        value: function setGutterMobileTo(value) {
          this.props.setAttributes({
            gutterMobile: value
          });
        }
      }, {
        key: "render",
        value: function render() {
          var _this$props = this.props,
              _this$props$label = _this$props.label,
              label = _this$props$label === void 0 ? __('Gutter', 'wecodeart') : _this$props$label,
              _this$props$max = _this$props.max,
              max = _this$props$max === void 0 ? 50 : _this$props$max,
              _this$props$min = _this$props.min,
              min = _this$props$min === void 0 ? 0 : _this$props$min,
              _this$props$onChange = _this$props.onChange,
              _onChange = _this$props$onChange === void 0 ? this.setGutterTo : _this$props$onChange,
              _this$props$onChangeM = _this$props.onChangeMobile,
              onChangeMobile = _this$props$onChangeM === void 0 ? this.setGutterMobileTo : _this$props$onChangeM,
              _this$props$step = _this$props.step,
              step = _this$props$step === void 0 ? 5 : _this$props$step,
              _this$props$value = _this$props.value,
              value = _this$props$value === void 0 ? this.props.attributes.gutter : _this$props$value,
              _this$props$valueMobi = _this$props.valueMobile,
              valueMobile = _this$props$valueMobi === void 0 ? this.props.attributes.gutterMobile : _this$props$valueMobi;

          return wp.element.createElement(TabPanel, {
            className: "components-base-control wecodeart-responsive-tabs",
            activeClass: "is-active",
            initialTabName: "desk",
            tabs: [{
              name: 'desk',
              title: _icons__WEBPACK_IMPORTED_MODULE_0__["default"].desktopChrome,
              className: 'wecodeart-responsive-tabs__item wecodeart-responsive-tabs__item--desktop'
            }, {
              name: 'mobile',
              title: _icons__WEBPACK_IMPORTED_MODULE_0__["default"].mobile,
              className: 'wecodeart-responsive-tabs__item wecodeart-responsive-tabs__item--mobile'
            }]
          }, function (tab) {
            if ('mobile' === tab.name) {
              return wp.element.createElement(RangeControl, {
                label: sprintf(
                /* translators: %s: values associated with CSS syntax, 'Width', 'Gutter', 'Height in pixels', 'Width' */
                __('Mobile %s', 'wecodeart'), label),
                value: valueMobile,
                onChange: function onChange(valueMobile) {
                  return onChangeMobile(valueMobile);
                },
                min: min,
                max: max,
                step: step
              });
            }

            return wp.element.createElement(RangeControl, {
              label: label,
              value: value,
              onChange: function onChange(value) {
                return _onChange(value);
              },
              min: min,
              max: max,
              step: step
            });
          });
        }
      }]);

      return ResponsiveTabsControl;
    }(Component);
    /* harmony default export */


    __webpack_exports__["default"] = ResponsiveTabsControl;
    /***/
  },

  /***/
  "./src/js/gutenberg/editor.js":
  /*!************************************!*\
    !*** ./src/js/gutenberg/editor.js ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcJsGutenbergEditorJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "default", function () {
      return registerWCABlocks;
    });
    /* harmony import */


    var _extensions_attributes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./extensions/attributes */
    "./src/js/gutenberg/extensions/attributes/index.js");
    /* harmony import */


    var _blocks_columns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./blocks/columns */
    "./src/js/gutenberg/blocks/columns/index.js");
    /* harmony import */


    var _blocks_column__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./blocks/column */
    "./src/js/gutenberg/blocks/column/index.js");
    /* harmony import */


    var _blocks_media_text__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./blocks/media-text */
    "./src/js/gutenberg/blocks/media-text/index.js");
    /* harmony import */


    var _blocks_media_text__WEBPACK_IMPORTED_MODULE_3___default =
    /*#__PURE__*/
    __webpack_require__.n(_blocks_media_text__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */


    var _extensions_modules__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./extensions/modules */
    "./src/js/gutenberg/extensions/modules/index.js");
    /* harmony import */


    var _extensions_advanced__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./extensions/advanced */
    "./src/js/gutenberg/extensions/advanced/index.js");
    /* harmony import */


    var _extensions_plugins__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./extensions/plugins */
    "./src/js/gutenberg/extensions/plugins/index.js");
    /* harmony import */


    var _extensions_formats__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./extensions/formats */
    "./src/js/gutenberg/extensions/formats/index.js");

    function ownKeys(object, enumerableOnly) {
      var keys = Object.keys(object);

      if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) symbols = symbols.filter(function (sym) {
          return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
        keys.push.apply(keys, symbols);
      }

      return keys;
    }

    function _objectSpread(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i] != null ? arguments[i] : {};

        if (i % 2) {
          ownKeys(Object(source), true).forEach(function (key) {
            _defineProperty(target, key, source[key]);
          });
        } else if (Object.getOwnPropertyDescriptors) {
          Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        } else {
          ownKeys(Object(source)).forEach(function (key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
          });
        }
      }

      return target;
    }

    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, {
          value: value,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        obj[key] = value;
      }

      return obj;
    }

    var registerBlockType = wp.blocks.registerBlockType; // Attributes
    // Core Blocks
    // Block Panels
    // Plugins
    // Formats

    function registerWCABlocks() {
      [
        /* import */
      ].forEach(function (block) {
        if (!block) return;
        var name = block.name,
            settings = block.settings;
        registerBlockType(name, _objectSpread({}, settings, {
          category: 'wca'
        }));
      });
    }

    registerWCABlocks();
    /***/
  },

  /***/
  "./src/js/gutenberg/extensions/advanced/custom-classes/index.js":
  /*!**********************************************************************!*\
    !*** ./src/js/gutenberg/extensions/advanced/custom-classes/index.js ***!
    \**********************************************************************/

  /*! no static exports found */

  /***/
  function srcJsGutenbergExtensionsAdvancedCustomClassesIndexJs(module, exports) {
    function _extends() {
      _extends = Object.assign || function (target) {
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
    /**
     * External dependencies
     */


    var _lodash = lodash,
        split = _lodash.split,
        replace = _lodash.replace,
        get = _lodash.get,
        join = _lodash.join;
    /**
     * WordPress Dependencies
     */

    var __ = wp.i18n.__;
    var _wp$hooks = wp.hooks,
        addFilter = _wp$hooks.addFilter,
        removeFilter = _wp$hooks.removeFilter;
    var Fragment = wp.element.Fragment;
    var _wp$data = wp.data,
        withSelect = _wp$data.withSelect,
        select = _wp$data.select;
    var _wp$compose = wp.compose,
        compose = _wp$compose.compose,
        createHigherOrderComponent = _wp$compose.createHigherOrderComponent,
        withState = _wp$compose.withState;
    var hasBlockSupport = wp.blocks.hasBlockSupport;
    var InspectorAdvancedControls = wp.blockEditor.InspectorAdvancedControls;
    var FormTokenField = wp.components.FormTokenField;
    /**
     * Enhance Block
     */

    var enhance = compose(withState({
      customClassNames: []
    }), withSelect(function (select, block) {
      var selectedBlock = select('core/block-editor').getSelectedBlock();
      var getClasses = get(selectedBlock, 'attributes.className');

      if (getClasses) {
        getClasses = replace(getClasses, ',', ' ');
      }

      if (selectedBlock && getClasses && join(block.customClassNames, ' ') !== getClasses) {
        if (block.clientId === selectedBlock.clientId) {
          block.setState({
            customClassNames: split(getClasses, ' ')
          });
        }
      }

      var _select$getEditorSett = select('core/editor').getEditorSettings(),
          customClasses = _select$getEditorSett.wecodeart.customClasses;

      return {
        suggestions: customClasses
      };
    }));
    /**
     * Override the default edit UI to include a new block inspector control for
     * assigning the custom class name, if block supports custom class name.
     *
     * @param {Function} BlockEdit Original component.
     *
     * @return {string} Wrapped component.
     */

    var withInspectorControl = createHigherOrderComponent(function (BlockEdit) {
      return enhance(function (_ref) {
        var props = _extends({}, _ref);

        var hasCustomClassName = hasBlockSupport(props.name, 'customClassName', true);
        var customClassNames = props.customClassNames,
            suggestions = props.suggestions,
            isSelected = props.isSelected,
            setState = props.setState;

        if (hasCustomClassName && isSelected) {
          return wp.element.createElement(Fragment, null, wp.element.createElement(BlockEdit, props), wp.element.createElement(InspectorAdvancedControls, null, wp.element.createElement(FormTokenField, {
            label: __('Additional CSS Class(es)', 'wecodeart'),
            value: customClassNames,
            suggestions: suggestions,
            maxSuggestions: 20,
            onChange: function onChange(nextValue) {
              props.setAttributes({
                className: nextValue !== '' ? join(nextValue, ' ') : undefined
              });
              setState({
                customClassNames: nextValue !== '' ? nextValue : undefined
              });
            }
          })));
        }

        return wp.element.createElement(BlockEdit, props);
      });
    }, 'withInspectorControl');
    /**
     * Apply Filters
     */

    function applyFilters() {
      removeFilter('editor.BlockEdit', 'core/editor/custom-class-name/with-inspector-control');
      addFilter('editor.BlockEdit', 'wecodeart/editor/custom-classes/withInspectorControl', withInspectorControl);
    }

    applyFilters();
    /***/
  },

  /***/
  "./src/js/gutenberg/extensions/advanced/custom-css/components/editor.js":
  /*!******************************************************************************!*\
    !*** ./src/js/gutenberg/extensions/advanced/custom-css/components/editor.js ***!
    \******************************************************************************/

  /*! exports provided: default */

  /***/
  function srcJsGutenbergExtensionsAdvancedCustomCssComponentsEditorJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);

    function _typeof(obj) {
      if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
        _typeof = function _typeof(obj) {
          return _typeof2(obj);
        };
      } else {
        _typeof = function _typeof(obj) {
          return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
        };
      }

      return _typeof(obj);
    }

    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }

    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps) _defineProperties(Constructor.prototype, protoProps);
      if (staticProps) _defineProperties(Constructor, staticProps);
      return Constructor;
    }

    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }

      return _assertThisInitialized(self);
    }

    function _assertThisInitialized(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }

      return self;
    }

    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
      };
      return _getPrototypeOf(o);
    }

    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
      }

      subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
          value: subClass,
          writable: true,
          configurable: true
        }
      });
      if (superClass) _setPrototypeOf(subClass, superClass);
    }

    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
      };

      return _setPrototypeOf(o, p);
    }
    /**
     * WordPress dependencies.
     */


    var __ = wp.i18n.__;
    var _wp$element = wp.element,
        Component = _wp$element.Component,
        Fragment = _wp$element.Fragment;

    var CSSEditor =
    /*#__PURE__*/
    function (_Component) {
      _inherits(CSSEditor, _Component);

      function CSSEditor() {
        var _this;

        _classCallCheck(this, CSSEditor);

        _this = _possibleConstructorReturn(this, _getPrototypeOf(CSSEditor).apply(this, arguments));
        _this.editor;
        _this.customCSS = '';
        return _this;
      }

      _createClass(CSSEditor, [{
        key: "componentDidMount",
        value: function componentDidMount() {
          var _this2 = this;

          var classes, classAr;
          var uniqueId = this.props.clientId.substr(0, 8);

          if (this.props.attributes.className) {
            classes = this.props.attributes.className;

            if (!classes.includes('wcacss-')) {
              classes = classes.split(' ');
              classes.push("wcacss-".concat(uniqueId));
              classes = classes.join(' ');
            }

            classAr = classes.split(' ');
            classAr = classAr.find(function (i) {
              return i.includes('wcacss');
            });
          } else {
            classes = "wcacss-".concat(uniqueId);
            classAr = classes;
          }

          this.props.setAttributes({
            hasCustomCSS: true,
            className: classes
          });

          if (this.props.attributes.customCSS) {
            var generatedCSS = this.props.attributes.customCSS.replace(/.wcacss-[^#\s]*/g, 'selector');
            this.customCSS = generatedCSS;
          } else {
            this.customCSS = 'selector {\n}\n';
          }

          this.editor = wp.CodeMirror(document.getElementById('wecodeart-css-editor'), {
            value: this.customCSS,
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
          this.editor.on('change', function () {
            var regex = new RegExp('selector', 'g');

            var generatedCSS = _this2.editor.getValue().replace(regex, ".".concat(classAr));

            _this2.customCSS = generatedCSS;

            if ('selector {\n}\n'.replace(/\s+/g, '') === _this2.customCSS.replace(/\s+/g, '')) {
              return _this2.props.setAttributes({
                customCSS: null
              });
            }

            _this2.props.setAttributes({
              customCSS: _this2.customCSS
            });
          });
        }
      }, {
        key: "render",
        value: function render() {
          return wp.element.createElement(Fragment, null, wp.element.createElement("div", {
            class: "wecodeart-advanced-css"
          }, wp.element.createElement("hr", null), wp.element.createElement("h2", {
            class: "wecodeart-advanced-css__title"
          }, __('Add your custom CSS.', 'wecodeart')), wp.element.createElement("div", {
            className: "wecodeart-advanced-css__editor",
            id: "wecodeart-css-editor"
          }), wp.element.createElement("div", {
            class: "wecodeart-advanced-css__content"
          }, wp.element.createElement("p", null, __('Use', 'wecodeart'), " ", wp.element.createElement("code", null, "selector"), " ", __('to target block wrapper.', 'wecodeart')), wp.element.createElement("p", null, __('Example:', 'wecodeart')), wp.element.createElement("pre", {
            className: "wecodeart-advanced-css__help"
          }, 'selector {\n    background: #000;\n}\n\nselector img {\n    border-radius: 100%;\n}'), wp.element.createElement("p", null, __('You can also use other CSS syntax here, such as media queries.', 'wecodeart')))));
        }
      }]);

      return CSSEditor;
    }(Component);
    /* harmony default export */


    __webpack_exports__["default"] = CSSEditor;
    /***/
  },

  /***/
  "./src/js/gutenberg/extensions/advanced/custom-css/index.js":
  /*!******************************************************************!*\
    !*** ./src/js/gutenberg/extensions/advanced/custom-css/index.js ***!
    \******************************************************************/

  /*! no exports provided */

  /***/
  function srcJsGutenbergExtensionsAdvancedCustomCssIndexJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _attributes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ../../attributes */
    "./src/js/gutenberg/extensions/attributes/index.js");
    /* harmony import */


    var _components_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./components/editor */
    "./src/js/gutenberg/extensions/advanced/custom-css/components/editor.js");
    /* harmony import */


    var _inject_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./inject-css */
    "./src/js/gutenberg/extensions/advanced/custom-css/inject-css.js");
    /* harmony import */


    var _inject_css__WEBPACK_IMPORTED_MODULE_2___default =
    /*#__PURE__*/
    __webpack_require__.n(_inject_css__WEBPACK_IMPORTED_MODULE_2__);
    /**
     * WordPress dependencies.
     */


    var _lodash = lodash,
        assign = _lodash.assign;
    var hasBlockSupport = wp.blocks.hasBlockSupport;
    var createHigherOrderComponent = wp.compose.createHigherOrderComponent;
    var InspectorAdvancedControls = wp.blockEditor.InspectorAdvancedControls;
    var Fragment = wp.element.Fragment;
    var addFilter = wp.hooks.addFilter;
    /**
     * Internal dependencies.
     */

    var addAttributes = function addAttributes(settings) {
      if (!_attributes__WEBPACK_IMPORTED_MODULE_0__["restrictedBlocks"].includes(settings.name) && hasBlockSupport(settings, 'customClassName', true)) {
        settings.attributes = assign(settings.attributes, {
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

      return settings;
    };
    /**
     * Override the default edit UI to include a new block inspector control for
     * assigning the custom class name, if block supports custom class name.
     *
     * @param {Function} BlockEdit Original component.
     *
     * @return {string} Wrapped component.
     */


    var withInspectorControl = createHigherOrderComponent(function (BlockEdit) {
      return function (props) {
        var isRestrictedBlock = !_attributes__WEBPACK_IMPORTED_MODULE_0__["restrictedBlocks"].includes(props.name);
        var hasCustomClassName = hasBlockSupport(props.name, 'customClassName', true);

        if (isRestrictedBlock && hasCustomClassName && props.isSelected) {
          return wp.element.createElement(Fragment, null, wp.element.createElement(BlockEdit, props), wp.element.createElement(InspectorAdvancedControls, null, wp.element.createElement(_components_editor__WEBPACK_IMPORTED_MODULE_1__["default"], {
            clientId: props.clientId,
            setAttributes: props.setAttributes,
            attributes: props.attributes
          })));
        }

        return wp.element.createElement(BlockEdit, props);
      };
    }, 'withInspectorControl');
    /**
     * Apply Filters
     */

    function applyFilters() {
      addFilter('blocks.registerBlockType', 'wecodeart/blocks/custom-css/addAttributes', addAttributes);
      addFilter('editor.BlockEdit', 'wecodeart/editor/custom-css/withInspectorControl', withInspectorControl);
    }

    applyFilters();
    /***/
  },

  /***/
  "./src/js/gutenberg/extensions/advanced/custom-css/inject-css.js":
  /*!***********************************************************************!*\
    !*** ./src/js/gutenberg/extensions/advanced/custom-css/inject-css.js ***!
    \***********************************************************************/

  /*! no static exports found */

  /***/
  function srcJsGutenbergExtensionsAdvancedCustomCssInjectCssJs(module, exports) {
    /**
     * WordPress dependencies.
     */
    var __ = wp.i18n.__;
    var parse = wp.blocks.parse;
    var _wp$data = wp.data,
        select = _wp$data.select,
        subscribe = _wp$data.subscribe;

    var addStyle = function addStyle(style) {
      var element = document.getElementById('wca-css-editor-styles');

      if (null === element) {
        element = document.createElement('style');
        element.setAttribute('type', 'text/css');
        element.setAttribute('id', 'wca-css-editor-styles');
        document.getElementsByTagName('head')[0].appendChild(element);
      }

      if (element.textContent === style) {
        return null;
      }

      return element.textContent = style;
    };

    var style = '';

    var cycleBlocks = function cycleBlocks(blocks, reusableBlocks) {
      blocks.forEach(function (block) {
        if (block.attributes.hasCustomCSS) {
          if (block.attributes.customCSS && null !== block.attributes.customCSS) {
            style += block.attributes.customCSS + '\n';
          }
        }

        if ('core/block' === block.name && null !== reusableBlocks) {
          var reBlocks = reusableBlocks.find(function (i) {
            return block.attributes.ref === i.id;
          });

          if (reBlocks) {
            reBlocks = parse(reBlocks.content.raw);
            cycleBlocks(reBlocks, reusableBlocks);
          }

          ;
        }

        if (undefined !== block.innerBlocks && 0 < block.innerBlocks.length) {
          cycleBlocks(block.innerBlocks, reusableBlocks);
        }
      });
    };

    var subscribed = subscribe(function () {
      style = '';

      var _ref = select('core/block-editor') || select('core/editor'),
          getBlocks = _ref.getBlocks;

      var blocks = getBlocks();
      var reusableBlocks = select('core').getEntityRecords('postType', 'wp_block');
      cycleBlocks(blocks, reusableBlocks);
      addStyle(style);
    });
    /***/
  },

  /***/
  "./src/js/gutenberg/extensions/advanced/index.js":
  /*!*******************************************************!*\
    !*** ./src/js/gutenberg/extensions/advanced/index.js ***!
    \*******************************************************/

  /*! no exports provided */

  /***/
  function srcJsGutenbergExtensionsAdvancedIndexJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _custom_classes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./custom-classes */
    "./src/js/gutenberg/extensions/advanced/custom-classes/index.js");
    /* harmony import */


    var _custom_classes__WEBPACK_IMPORTED_MODULE_0___default =
    /*#__PURE__*/
    __webpack_require__.n(_custom_classes__WEBPACK_IMPORTED_MODULE_0__);
    /* harmony import */


    var _custom_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./custom-css */
    "./src/js/gutenberg/extensions/advanced/custom-css/index.js");
    /* harmony import */


    var _visibility__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./visibility */
    "./src/js/gutenberg/extensions/advanced/visibility/index.js");
    /**
     * Internal dependencies
     */

    /***/

  },

  /***/
  "./src/js/gutenberg/extensions/advanced/visibility/components/index.js":
  /*!*****************************************************************************!*\
    !*** ./src/js/gutenberg/extensions/advanced/visibility/components/index.js ***!
    \*****************************************************************************/

  /*! exports provided: default */

  /***/
  function srcJsGutenbergExtensionsAdvancedVisibilityComponentsIndexJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);

    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, {
          value: value,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        obj[key] = value;
      }

      return obj;
    }
    /**
     * WordPress Dependencies
     */


    var __ = wp.i18n.__;
    var dispatch = wp.data.dispatch;
    var Fragment = wp.element.Fragment;
    var ToggleControl = wp.components.ToggleControl;

    var DevicesOptions = function DevicesOptions(props) {
      var clientId = props.clientId,
          attributes = props.attributes,
          reloadModal = props.reloadModal;
      var wecodeart = attributes.wecodeart;

      var onSelectDevice = function onSelectDevice(device) {
        var newValue = !wecodeart[device];
        delete wecodeart[device];
        var blockOptions = Object.assign(_defineProperty({}, device, newValue), wecodeart);
        dispatch('core/block-editor').updateBlockAttributes(clientId, {
          wecodeart: blockOptions
        });

        if (reloadModal) {
          reloadModal();
        }
      };

      if (typeof wecodeart === 'undefined') {
        return;
      }

      return wp.element.createElement(Fragment, null, wp.element.createElement(ToggleControl, {
        label: __('Hide on Mobile', 'wecodeart'),
        checked: typeof wecodeart.mobile !== 'undefined' && !wecodeart.mobile,
        onChange: function onChange() {
          return onSelectDevice('mobile');
        }
      }), wp.element.createElement(ToggleControl, {
        label: __('Hide on Tablet', 'wecodeart'),
        checked: typeof wecodeart.tablet !== 'undefined' && !wecodeart.tablet,
        onChange: function onChange() {
          return onSelectDevice('tablet');
        }
      }), wp.element.createElement(ToggleControl, {
        label: __('Hide on Desktop', 'wecodeart'),
        checked: typeof wecodeart.desktop !== 'undefined' && !wecodeart.desktop,
        onChange: function onChange() {
          return onSelectDevice('desktop');
        }
      }));
    };
    /* harmony default export */


    __webpack_exports__["default"] = DevicesOptions;
    /***/
  },

  /***/
  "./src/js/gutenberg/extensions/advanced/visibility/index.js":
  /*!******************************************************************!*\
    !*** ./src/js/gutenberg/extensions/advanced/visibility/index.js ***!
    \******************************************************************/

  /*! no exports provided */

  /***/
  function srcJsGutenbergExtensionsAdvancedVisibilityIndexJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! classnames */
    "./node_modules/classnames/index.js");
    /* harmony import */


    var classnames__WEBPACK_IMPORTED_MODULE_0___default =
    /*#__PURE__*/
    __webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
    /* harmony import */


    var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./components */
    "./src/js/gutenberg/extensions/advanced/visibility/components/index.js");
    /* harmony import */


    var _attributes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../attributes */
    "./src/js/gutenberg/extensions/attributes/index.js");
    /* harmony import */


    var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./utils */
    "./src/js/gutenberg/extensions/advanced/visibility/utils.js");
    /**
     * WordPress Dependencies
     */


    var __ = wp.i18n.__;
    var addFilter = wp.hooks.addFilter;
    var Fragment = wp.element.Fragment;
    var InspectorControls = wp.blockEditor.InspectorControls;
    var createHigherOrderComponent = wp.compose.createHigherOrderComponent;
    var PanelBody = wp.components.PanelBody;
    /**
     * External Dependencies
     */

    /**
     * Internal Dependencies
     */

    /**
     * Add custom Controls to selected blocks
     *
     * @param {Function} BlockEdit Original component.
     * @return {string} Wrapped component.
     */

    var withVisibilityControls = createHigherOrderComponent(function (BlockEdit) {
      return function (props) {
        var name = props.name,
            isSelected = props.isSelected,
            isDisabledDevices = props.isDisabledDevices;
        return wp.element.createElement(Fragment, null, wp.element.createElement(BlockEdit, props), isSelected && !isDisabledDevices && !_attributes__WEBPACK_IMPORTED_MODULE_2__["restrictedBlocks"].includes(name) && wp.element.createElement(InspectorControls, null, wp.element.createElement(PanelBody, {
          title: __('Visibility', 'wecodeart'),
          initialOpen: false,
          className: "wecodeart-panel"
        }, wp.element.createElement("p", null, wp.element.createElement("small", null, __('Attention: The display settings will only take effect once you are on the live page, and not while you\'re editing in Gutenberg.', 'wecodeart'))), Object(_components__WEBPACK_IMPORTED_MODULE_1__["default"])(props))));
      };
    }, 'withAdvancedControls');
    /**
     * Override props assigned to save component to inject atttributes
     *
     * @param {Object} extraProps Additional props applied to save element.
     * @param {Object} blockType  Block type.
     * @param {Object} attributes Current block attributes.
     *
     * @return {Object} Filtered props applied to save element.
     */

    function applyExtraClasses(extraProps, blockType, attributes) {
      var wecodeart = attributes.wecodeart;
      var blockName = blockType.name;

      if (!_attributes__WEBPACK_IMPORTED_MODULE_2__["restrictedBlocks"].includes(blockName) && typeof wecodeart !== 'undefined') {
        if (typeof wecodeart.mobile !== 'undefined' && !wecodeart.mobile || typeof wecodeart.tablet !== 'undefined' && !wecodeart.tablet || typeof wecodeart.desktop !== 'undefined' && !wecodeart.desktop) {
          extraProps.className = classnames__WEBPACK_IMPORTED_MODULE_0___default()(extraProps.className, Object(_utils__WEBPACK_IMPORTED_MODULE_3__["getVisibilityClasses"])(attributes));
        }
      }

      return extraProps;
    }
    /**
     * Apply Filters
     */


    function applyFilters() {
      addFilter('editor.BlockEdit', 'wecodeart/editor/visibility/withVisibilityControls', withVisibilityControls);
      addFilter('blocks.getSaveContent.extraProps', 'wecodeart/blocks/visibility/applyExtraClass', applyExtraClasses);
    }

    applyFilters();
    /***/
  },

  /***/
  "./src/js/gutenberg/extensions/advanced/visibility/utils.js":
  /*!******************************************************************!*\
    !*** ./src/js/gutenberg/extensions/advanced/visibility/utils.js ***!
    \******************************************************************/

  /*! exports provided: getVisibilityClasses */

  /***/
  function srcJsGutenbergExtensionsAdvancedVisibilityUtilsJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getVisibilityClasses", function () {
      return getVisibilityClasses;
    });

    function _toConsumableArray(arr) {
      return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
    }

    function _nonIterableSpread() {
      throw new TypeError("Invalid attempt to spread non-iterable instance");
    }

    function _iterableToArray(iter) {
      if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
    }

    function _arrayWithoutHoles(arr) {
      if (Array.isArray(arr)) {
        for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
          arr2[i] = arr[i];
        }

        return arr2;
      }
    }

    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, {
          value: value,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        obj[key] = value;
      }

      return obj;
    }

    var _lodash = lodash,
        findIndex = _lodash.findIndex;

    var getVisibilityClasses = function getVisibilityClasses(attributes) {
      var wecodeart = attributes.wecodeart;
      var classNames = [_defineProperty({}, wecodeart.id, typeof wecodeart.id !== 'undefined')];

      if (typeof wecodeart.mobile !== 'undefined' && !wecodeart.mobile) {
        classNames = [].concat(_toConsumableArray(classNames), ['d-none', 'd-md-block']);
      }

      if (typeof wecodeart.tablet !== 'undefined' && !wecodeart.tablet) {
        var index = findIndex(classNames, 'd-md-block');
        classNames.splice(index, 1);
        classNames = [].concat(_toConsumableArray(classNames), ['d-md-none', 'd-lg-block']);
      }

      if (typeof wecodeart.desktop !== 'undefined' && !wecodeart.desktop) {
        var _index = findIndex(classNames, 'd-lg-block');

        classNames.splice(_index, 1);
        classNames = [].concat(_toConsumableArray(classNames), ['d-lg-none']);
      }

      return classNames;
    };
    /***/

  },

  /***/
  "./src/js/gutenberg/extensions/attributes/index.js":
  /*!*********************************************************!*\
    !*** ./src/js/gutenberg/extensions/attributes/index.js ***!
    \*********************************************************/

  /*! exports provided: restrictedBlocks, blocksWithAnchor, blocksWithFontSize, blocksWithFullScreen, blocksWithBackgrounds */

  /***/
  function srcJsGutenbergExtensionsAttributesIndexJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "restrictedBlocks", function () {
      return restrictedBlocks;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "blocksWithAnchor", function () {
      return blocksWithAnchor;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "blocksWithFontSize", function () {
      return blocksWithFontSize;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "blocksWithFullScreen", function () {
      return blocksWithFullScreen;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "blocksWithBackgrounds", function () {
      return blocksWithBackgrounds;
    });
    /* harmony import */


    var _controls_background__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./../../controls/background */
    "./src/js/gutenberg/controls/background/index.js");
    /**
     * WordPress Dependencies
     */


    var addFilter = wp.hooks.addFilter;
    var createHigherOrderComponent = wp.compose.createHigherOrderComponent;
    /**
     * Internal dependencies
     */

    var restrictedBlocks = ['core/freeform', 'core/shortcode', 'core/nextpage', 'woocommerce/handpicked-products', 'woocommerce/products-by-attribute', 'woocommerce/products-by-tag', 'woocommerce/product-best-sellers', 'woocommerce/product-top-rated', 'woocommerce/product-on-sale', 'woocommerce/product-new'];
    var blocksWithFullScreen = ['core/image', 'core/cover', 'core/group', 'core/columns', 'core/media-text'];
    var blocksWithAnchor = ['core/spacer', 'core/separator'];
    var blocksWithFontSize = ['core/list'];
    var blocksWithBackgrounds = ['core/columns', 'core/column'];
    var blocksWithContainer = ['core/columns'];
    var blocksWithColumns = ['core/column'];
    /**
     * Filters registered block settings, extending attributes with anchor using ID
     * of the first node.
     *
     * @param 	{Object} settings Original block settings.
     *
     * @return 	{Object} Filtered block settings.
     */

    function addAttributes(settings) {
      var blockName = settings.name;

      if (typeof settings.attributes !== 'undefined' && !restrictedBlocks.includes(blockName)) {
        settings.attributes = Object.assign(settings.attributes, {
          wecodeart: {
            type: 'object',
            default: {
              devices: false,
              desktop: true,
              tablet: true,
              mobile: true,
              loggedin: true,
              loggedout: true
            }
          }
        }); // Add custom font size picker on selected blocks.

        if (blocksWithFontSize.includes(blockName)) {
          if (!settings.attributes) {
            settings.attributes = {};
          }

          settings.attributes = Object.assign(settings.attributes, {
            textColor: {
              type: 'string'
            },
            customTextColor: {
              type: 'string'
            },
            fontSize: {
              type: 'string'
            },
            customFontSize: {
              type: 'number'
            }
          });
        } // Enable anchor to selected blocks


        if (blocksWithAnchor.includes(blockName)) {
          if (!settings.supports) {
            settings.supports = {};
          }

          settings.supports = Object.assign(settings.supports, {
            anchor: true
          });
        } // Backgrounds


        if (blocksWithBackgrounds.includes(blockName)) {
          if (!settings.supports) {
            settings.supports = {};
          }

          settings.supports = Object.assign(settings.supports, {
            hasBackground: true
          });
          settings.attributes = Object.assign(settings.attributes, _controls_background__WEBPACK_IMPORTED_MODULE_0__["BackgroundAttributes"]);
        } // Columns Container


        if (blocksWithContainer.includes(blockName)) {
          settings.attributes = Object.assign(settings.attributes, {
            container: {
              type: 'boolean',
              default: true
            },
            gutters: {
              type: 'boolean',
              default: false
            }
          });
        } // Column Classes


        if (blocksWithColumns.includes(blockName)) {
          settings.attributes = Object.assign(settings.attributes, {
            bootstrapColumns: {
              type: 'object',
              default: {
                global: 'col-12',
                sm: 'col-sm',
                md: '',
                lg: '',
                xl: ''
              }
            }
          });
        }
      }

      return settings;
    }
    /**
     * Add custom WeCodeArt attributes to selected blocks
     *
     * @param {Function} BlockEdit Original component.
     * @return {string} Wrapped component.
     */


    var withAttributes = createHigherOrderComponent(function (BlockEdit) {
      return function (props) {
        var blockName = props.name;

        if (!restrictedBlocks.includes(blockName)) {
          props.attributes.wecodeart = props.attributes.wecodeart || {};

          if (typeof props.attributes.wecodeart === 'undefined') {
            props.attributes.wecodeart = Object.assign({}, props.attributes.wecodeart);
          }
        }

        return wp.element.createElement(BlockEdit, props);
      };
    }, 'withAttributes');
    /**
     * Run our filters
     */

    function applyFilters() {
      addFilter('editor.BlockEdit', 'wecodeart/editor/attributes', withAttributes);
      addFilter('blocks.registerBlockType', 'wecodeart/blocks/custom/attributes', addAttributes);
    }

    applyFilters();
    /**
     * Exports
     */

    /***/
  },

  /***/
  "./src/js/gutenberg/extensions/formats/abbreviation/components/edit.js":
  /*!*****************************************************************************!*\
    !*** ./src/js/gutenberg/extensions/formats/abbreviation/components/edit.js ***!
    \*****************************************************************************/

  /*! exports provided: default */

  /***/
  function srcJsGutenbergExtensionsFormatsAbbreviationComponentsEditJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);

    function _typeof(obj) {
      if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
        _typeof = function _typeof(obj) {
          return _typeof2(obj);
        };
      } else {
        _typeof = function _typeof(obj) {
          return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
        };
      }

      return _typeof(obj);
    }

    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }

    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps) _defineProperties(Constructor.prototype, protoProps);
      if (staticProps) _defineProperties(Constructor, staticProps);
      return Constructor;
    }

    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }

      return _assertThisInitialized(self);
    }

    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
      };
      return _getPrototypeOf(o);
    }

    function _assertThisInitialized(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }

      return self;
    }

    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
      }

      subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
          value: subClass,
          writable: true,
          configurable: true
        }
      });
      if (superClass) _setPrototypeOf(subClass, superClass);
    }

    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
      };

      return _setPrototypeOf(o, p);
    }
    /**
     * WordPress dependencies
     */


    var __ = wp.i18n.__;
    var _wp$element = wp.element,
        Component = _wp$element.Component,
        Fragment = _wp$element.Fragment;
    var _wp$compose = wp.compose,
        compose = _wp$compose.compose,
        ifCondition = _wp$compose.ifCondition;
    var withSelect = wp.data.withSelect;
    var RichTextToolbarButton = wp.blockEditor.RichTextToolbarButton;
    var _wp$richText = wp.richText,
        applyFormat = _wp$richText.applyFormat,
        removeFormat = _wp$richText.removeFormat,
        getActiveFormat = _wp$richText.getActiveFormat;
    var _wp$components = wp.components,
        Modal = _wp$components.Modal,
        Button = _wp$components.Button,
        TextControl = _wp$components.TextControl;
    var name = 'wca/abbreviation';

    var Edit =
    /*#__PURE__*/
    function (_Component) {
      _inherits(Edit, _Component);

      function Edit() {
        var _this;

        _classCallCheck(this, Edit);

        _this = _possibleConstructorReturn(this, _getPrototypeOf(Edit).apply(this, arguments));
        _this.toggle = _this.toggle.bind(_assertThisInitialized(_this));
        _this.state = {
          isOpen: false,
          title: '',
          lang: ''
        };
        return _this;
      }

      _createClass(Edit, [{
        key: "toggle",
        value: function toggle() {
          this.setState(function (state) {
            return {
              isOpen: !state.isOpen
            };
          });
        }
      }, {
        key: "render",
        value: function render() {
          var _this2 = this;

          var _this$state = this.state,
              title = _this$state.title,
              lang = _this$state.lang;
          var _this$props = this.props,
              isActive = _this$props.isActive,
              value = _this$props.value,
              onChange = _this$props.onChange;
          var activeColorFormat = getActiveFormat(value, name);
          return wp.element.createElement(Fragment, null, wp.element.createElement(RichTextToolbarButton, {
            icon: "editor-code",
            title: __('Abbreviation', 'wecodeart'),
            onClick: this.toggle,
            isActive: isActive
          }), this.state.isOpen && wp.element.createElement(Modal, {
            title: __('Insert Abbreviation', 'wecodeart'),
            onRequestClose: this.toggle
          }, wp.element.createElement(TextControl, {
            label: __('Title', 'wecodeart'),
            value: activeColorFormat && !title ? activeColorFormat.attributes.title : title,
            onChange: function onChange(newTitle) {
              return _this2.setState({
                title: newTitle
              });
            }
          }), wp.element.createElement(TextControl, {
            label: __('Language (optional)', 'wecodeart'),
            value: activeColorFormat && !lang ? activeColorFormat.attributes.lang : lang,
            help: __('Example: fr, en, de, etc. Use it only if the abbreviation’s language is different from page main language.', 'wecodeart'),
            onChange: function onChange(newLang) {
              return _this2.setState({
                lang: newLang
              });
            }
          }), wp.element.createElement(Button, {
            isPrimary: true,
            isLarge: true,
            onClick: function onClick() {
              if (title) {
                var attributes = {
                  title: title
                };

                if (lang) {
                  attributes.lang = lang;
                }

                onChange(applyFormat(value, {
                  type: name,
                  attributes: attributes
                }));
              } else {
                onChange(removeFormat(value, name));
              }

              _this2.toggle();
            }
          }, __('Apply', 'wecodeart'))));
        }
      }]);

      return Edit;
    }(Component);
    /* harmony default export */


    __webpack_exports__["default"] = compose(withSelect(function (select) {
      return {
        isDisabled: false
      };
    }), ifCondition(function (props) {
      return !props.isDisabled;
    }))(Edit);
    /***/
  },

  /***/
  "./src/js/gutenberg/extensions/formats/abbreviation/index.js":
  /*!*******************************************************************!*\
    !*** ./src/js/gutenberg/extensions/formats/abbreviation/index.js ***!
    \*******************************************************************/

  /*! exports provided: abbreviation */

  /***/
  function srcJsGutenbergExtensionsFormatsAbbreviationIndexJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "abbreviation", function () {
      return abbreviation;
    });
    /* harmony import */


    var _components_edit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./components/edit */
    "./src/js/gutenberg/extensions/formats/abbreviation/components/edit.js");
    /**
     * WordPress dependencies
     */


    var __ = wp.i18n.__;
    /**
     * Internal dependencies
     */

    /**
     * Block constants
     */

    var name = 'wca/abbreviation';
    var abbreviation = {
      name: name,
      title: __('Abbreviation', 'wecodeart'),
      tagName: 'abbr',
      className: null,
      attributes: {
        title: 'title',
        lang: 'lang'
      },
      edit: _components_edit__WEBPACK_IMPORTED_MODULE_0__["default"]
    };
    /***/
  },

  /***/
  "./src/js/gutenberg/extensions/formats/background-color/components/edit.js":
  /*!*********************************************************************************!*\
    !*** ./src/js/gutenberg/extensions/formats/background-color/components/edit.js ***!
    \*********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcJsGutenbergExtensionsFormatsBackgroundColorComponentsEditJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! classnames */
    "./node_modules/classnames/index.js");
    /* harmony import */


    var classnames__WEBPACK_IMPORTED_MODULE_0___default =
    /*#__PURE__*/
    __webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
    /* harmony import */


    var _icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../icon */
    "./src/js/gutenberg/extensions/formats/background-color/icon.js");

    function _typeof(obj) {
      if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
        _typeof = function _typeof(obj) {
          return _typeof2(obj);
        };
      } else {
        _typeof = function _typeof(obj) {
          return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
        };
      }

      return _typeof(obj);
    }

    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }

    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps) _defineProperties(Constructor.prototype, protoProps);
      if (staticProps) _defineProperties(Constructor, staticProps);
      return Constructor;
    }

    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }

      return _assertThisInitialized(self);
    }

    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
      };
      return _getPrototypeOf(o);
    }

    function _assertThisInitialized(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }

      return self;
    }

    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
      }

      subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
          value: subClass,
          writable: true,
          configurable: true
        }
      });
      if (superClass) _setPrototypeOf(subClass, superClass);
    }

    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
      };

      return _setPrototypeOf(o, p);
    }
    /**
     * WordPress dependencies
     */


    var __ = wp.i18n.__;
    var _wp$element = wp.element,
        Component = _wp$element.Component,
        Fragment = _wp$element.Fragment;
    var _wp$data = wp.data,
        select = _wp$data.select,
        withSelect = _wp$data.withSelect;
    var _wp$blockEditor = wp.blockEditor,
        BlockControls = _wp$blockEditor.BlockControls,
        getColorClassName = _wp$blockEditor.getColorClassName,
        getColorObjectByColorValue = _wp$blockEditor.getColorObjectByColorValue,
        getColorObjectByAttributeValues = _wp$blockEditor.getColorObjectByAttributeValues;
    var _wp$richText = wp.richText,
        applyFormat = _wp$richText.applyFormat,
        removeFormat = _wp$richText.removeFormat,
        getActiveFormat = _wp$richText.getActiveFormat;
    var _wp$components = wp.components,
        Toolbar = _wp$components.Toolbar,
        IconButton = _wp$components.IconButton,
        Popover = _wp$components.Popover,
        ColorPalette = _wp$components.ColorPalette;
    var _wp$compose = wp.compose,
        compose = _wp$compose.compose,
        ifCondition = _wp$compose.ifCondition;
    /**
     * External dependencies
     */

    /**
     * Internal dependencies
     */

    var name = 'wca/background';

    var title = __('Highlight Color', 'wecodeart');

    var Edit =
    /*#__PURE__*/
    function (_Component) {
      _inherits(Edit, _Component);

      function Edit() {
        var _this;

        _classCallCheck(this, Edit);

        _this = _possibleConstructorReturn(this, _getPrototypeOf(Edit).apply(this, arguments));
        _this.toggle = _this.toggle.bind(_assertThisInitialized(_this));
        _this.state = {
          isOpen: false
        };
        return _this;
      }

      _createClass(Edit, [{
        key: "toggle",
        value: function toggle() {
          this.setState(function (state) {
            return {
              isOpen: !state.isOpen
            };
          });
        }
      }, {
        key: "render",
        value: function render() {
          var _this2 = this;

          var isOpen = this.state.isOpen;
          var _this$props = this.props,
              value = _this$props.value,
              _onChange = _this$props.onChange,
              isActive = _this$props.isActive,
              colors = _this$props.colors;
          var activeColor;
          var activeColorFormat = getActiveFormat(value, name);

          if (activeColorFormat) {
            var styleColor = activeColorFormat.attributes.style;

            if (styleColor) {
              activeColor = styleColor.replace(new RegExp("^background-color:\\s*"), '');
            }

            var currentClass = activeColorFormat.attributes.class;

            if (currentClass) {
              var colorSlug = currentClass.replace(/.*has-(.*?)-background-color.*/, '$1');
              activeColor = getColorObjectByAttributeValues(colors, colorSlug).color;
            }
          }

          return wp.element.createElement(Fragment, null, wp.element.createElement(BlockControls, null, wp.element.createElement(Toolbar, {
            className: "components-toolbar--wca"
          }, wp.element.createElement(IconButton, {
            className: classnames__WEBPACK_IMPORTED_MODULE_0___default()('components-button components-icon-button components-toolbar__control components-wca-background-format', {
              'is-active': isActive
            }),
            icon: _icon__WEBPACK_IMPORTED_MODULE_1__["default"].highlighter,
            "aria-haspopup": "true",
            tooltip: title,
            onClick: this.toggle
          }), isOpen && wp.element.createElement(Popover, {
            position: "bottom center",
            className: "components-popover--wca",
            focusOnMount: "container",
            onClickOutside: function onClickOutside(_onClickOutside) {
              if (!_onClickOutside.target.classList.contains('components-wca-background-format') && !document.querySelector('.components-wca-background-format').contains(_onClickOutside.target) && (!document.querySelector('.components-color-palette__picker') || document.querySelector('.components-color-palette__picker') && !document.querySelector('.components-color-palette__picker').contains(_onClickOutside.target))) {
                _this2.setState({
                  isOpen: !isOpen
                });
              }
            }
          }, wp.element.createElement(ColorPalette, {
            colors: colors,
            value: activeColor,
            onChange: function onChange(color) {
              if (color) {
                var colorObject = null;

                if (typeof window.wecodeartInfo !== 'undefined' && window.wecodeartInfo.supports.colorPalette) {
                  colorObject = getColorObjectByColorValue(colors, color);
                }

                _onChange(applyFormat(value, {
                  type: name,
                  attributes: colorObject ? {
                    class: getColorClassName('background-color', colorObject.slug)
                  } : {
                    style: "background-color:".concat(color)
                  }
                }));
              } else {
                _onChange(removeFormat(value, name));
              }
            }
          })))));
        }
      }]);

      return Edit;
    }(Component);
    /* harmony default export */


    __webpack_exports__["default"] = compose(withSelect(function () {
      var _select$getSettings = select('core/block-editor').getSettings(),
          colors = _select$getSettings.colors;

      return {
        colors: colors ? colors : [],
        isDisabled: false
      };
    }), ifCondition(function (props) {
      return !props.isDisabled;
    }))(Edit);
    /***/
  },

  /***/
  "./src/js/gutenberg/extensions/formats/background-color/icon.js":
  /*!**********************************************************************!*\
    !*** ./src/js/gutenberg/extensions/formats/background-color/icon.js ***!
    \**********************************************************************/

  /*! exports provided: default */

  /***/
  function srcJsGutenbergExtensionsFormatsBackgroundColorIconJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /**
     * Custom icon
     */


    var icon = {};
    icon.highlighter = wp.element.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      height: "300",
      width: "300",
      viewBox: "0 0 512 512"
    }, " ", wp.element.createElement("path", {
      d: "M240.2,369.1 C244.39999999999998,373.3 251.2,373 255.10000000000002,368.6 L465.7,125.4 C474.5,115.3 474,100.2 464.5,90.7 L426.3,52.5 C416.8,43 401.7,42.5 391.6,51.3 L148.4,262 C143.9,265.9 143.7,272.7 147.9,276.9 L240.2,369.1 z",
      id: "svg_2"
    }), " ", wp.element.createElement("path", {
      d: "M48.2,449.7 L86.5,462.5 L104.5,444.5 L172.1,444.5 C174.8,444.5 177.4,443.4 179.3,441.5 L205.1,415.7 C209.1,411.7 209.1,405.3 205.1,401.3 L111.6,308 C107.6,304 101.19999999999999,304 97.19999999999999,308 L71.4,333.8 C69.5,335.7 68.4,338.3 68.4,341 L68.4,404.4 C68.4,407.1 67.3,409.7 65.4,411.6 L44.099999999999994,432.9 C38.900000000000006,438.2 41.099999999999994,447.3 48.2,449.7 z",
      id: "svg_3"
    }), " ");
    /* harmony default export */

    __webpack_exports__["default"] = icon;
    /***/
  },

  /***/
  "./src/js/gutenberg/extensions/formats/background-color/index.js":
  /*!***********************************************************************!*\
    !*** ./src/js/gutenberg/extensions/formats/background-color/index.js ***!
    \***********************************************************************/

  /*! exports provided: backgroundColor */

  /***/
  function srcJsGutenbergExtensionsFormatsBackgroundColorIndexJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "backgroundColor", function () {
      return backgroundColor;
    });
    /* harmony import */


    var _components_edit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./components/edit */
    "./src/js/gutenberg/extensions/formats/background-color/components/edit.js");
    /**
     * WordPress dependencies
     */


    var __ = wp.i18n.__;
    /**
     * Internal dependencies
     */

    /**
     * Block constants
     */

    var name = 'wca/background';
    var backgroundColor = {
      name: name,
      title: __('Background Color', 'wecodeart'),
      tagName: 'span',
      className: 'has-inline-background',
      attributes: {
        style: 'style',
        class: 'class'
      },
      edit: _components_edit__WEBPACK_IMPORTED_MODULE_0__["default"]
    };
    /***/
  },

  /***/
  "./src/js/gutenberg/extensions/formats/clear/controls.js":
  /*!***************************************************************!*\
    !*** ./src/js/gutenberg/extensions/formats/clear/controls.js ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function srcJsGutenbergExtensionsFormatsClearControlsJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);

    function _typeof(obj) {
      if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
        _typeof = function _typeof(obj) {
          return _typeof2(obj);
        };
      } else {
        _typeof = function _typeof(obj) {
          return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
        };
      }

      return _typeof(obj);
    }

    function ownKeys(object, enumerableOnly) {
      var keys = Object.keys(object);

      if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) symbols = symbols.filter(function (sym) {
          return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
        keys.push.apply(keys, symbols);
      }

      return keys;
    }

    function _objectSpread(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i] != null ? arguments[i] : {};

        if (i % 2) {
          ownKeys(Object(source), true).forEach(function (key) {
            _defineProperty(target, key, source[key]);
          });
        } else if (Object.getOwnPropertyDescriptors) {
          Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        } else {
          ownKeys(Object(source)).forEach(function (key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
          });
        }
      }

      return target;
    }

    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, {
          value: value,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        obj[key] = value;
      }

      return obj;
    }

    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }

    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps) _defineProperties(Constructor.prototype, protoProps);
      if (staticProps) _defineProperties(Constructor, staticProps);
      return Constructor;
    }

    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }

      return _assertThisInitialized(self);
    }

    function _assertThisInitialized(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }

      return self;
    }

    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
      };
      return _getPrototypeOf(o);
    }

    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
      }

      subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
          value: subClass,
          writable: true,
          configurable: true
        }
      });
      if (superClass) _setPrototypeOf(subClass, superClass);
    }

    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
      };

      return _setPrototypeOf(o, p);
    }
    /**
     * External dependencies
     */


    var _lodash = lodash,
        map = _lodash.map;
    /**
     * WordPress dependencies
     */

    var __ = wp.i18n.__;
    var Component = wp.element.Component;
    var _wp$compose = wp.compose,
        compose = _wp$compose.compose,
        ifCondition = _wp$compose.ifCondition;
    var _wp$data = wp.data,
        select = _wp$data.select,
        withSelect = _wp$data.withSelect;
    var RichTextToolbarButton = wp.blockEditor.RichTextToolbarButton;
    var removeFormat = wp.richText.removeFormat;

    var ClearFormatting =
    /*#__PURE__*/
    function (_Component) {
      _inherits(ClearFormatting, _Component);

      function ClearFormatting() {
        _classCallCheck(this, ClearFormatting);

        return _possibleConstructorReturn(this, _getPrototypeOf(ClearFormatting).apply(this, arguments));
      }

      _createClass(ClearFormatting, [{
        key: "render",
        value: function render() {
          var _this$props = this.props,
              value = _this$props.value,
              isActive = _this$props.isActive,
              onChange = _this$props.onChange;

          var onToggle = function onToggle() {
            var formatTypes = select('core/rich-text').getFormatTypes();

            if (formatTypes.length > 0) {
              var newValue = value;
              map(formatTypes, function (activeFormat) {
                newValue = removeFormat(newValue, activeFormat.name);
              });
              onChange(_objectSpread({}, newValue));
            }
          };

          return wp.element.createElement(RichTextToolbarButton, {
            icon: "editor-removeformatting",
            title: __('Clear Formatting', 'wecodeart'),
            onClick: onToggle,
            isActive: isActive
          });
        }
      }]);

      return ClearFormatting;
    }(Component);
    /* harmony default export */


    __webpack_exports__["default"] = compose(withSelect(function () {
      return {
        isDisabled: false
      };
    }), ifCondition(function (props) {
      return !props.isDisabled;
    }))(ClearFormatting);
    /***/
  },

  /***/
  "./src/js/gutenberg/extensions/formats/clear/index.js":
  /*!************************************************************!*\
    !*** ./src/js/gutenberg/extensions/formats/clear/index.js ***!
    \************************************************************/

  /*! exports provided: clear */

  /***/
  function srcJsGutenbergExtensionsFormatsClearIndexJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "clear", function () {
      return clear;
    });
    /* harmony import */


    var _controls__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./controls */
    "./src/js/gutenberg/extensions/formats/clear/controls.js");
    /**
     * WordPress dependencies
     */


    var __ = wp.i18n.__;
    /**
     * Internal dependencies
     */

    /**
     * Block constants
     */

    var name = 'wca/clear-formatting';
    var clear = {
      name: name,
      title: __('Clear Formatting', 'wecodeart'),
      tagName: 'span',
      className: 'wca-clear-formatting',
      edit: function edit(_ref) {
        var isActive = _ref.isActive,
            value = _ref.value,
            onChange = _ref.onChange,
            activeAttributes = _ref.activeAttributes;
        return wp.element.createElement(_controls__WEBPACK_IMPORTED_MODULE_0__["default"], {
          name: name,
          isActive: isActive,
          value: value,
          onChange: onChange,
          activeAttributes: activeAttributes
        });
      }
    };
    /***/
  },

  /***/
  "./src/js/gutenberg/extensions/formats/index.js":
  /*!******************************************************!*\
    !*** ./src/js/gutenberg/extensions/formats/index.js ***!
    \******************************************************/

  /*! no exports provided */

  /***/
  function srcJsGutenbergExtensionsFormatsIndexJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _abbreviation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./abbreviation */
    "./src/js/gutenberg/extensions/formats/abbreviation/index.js");
    /* harmony import */


    var _underline__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./underline */
    "./src/js/gutenberg/extensions/formats/underline/index.js");
    /* harmony import */


    var _justify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./justify */
    "./src/js/gutenberg/extensions/formats/justify/index.js");
    /* harmony import */


    var _text_color__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./text-color */
    "./src/js/gutenberg/extensions/formats/text-color/index.js");
    /* harmony import */


    var _background_color__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./background-color */
    "./src/js/gutenberg/extensions/formats/background-color/index.js");
    /* harmony import */


    var _markdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./markdown */
    "./src/js/gutenberg/extensions/formats/markdown/index.js");
    /* harmony import */


    var _clear__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./clear */
    "./src/js/gutenberg/extensions/formats/clear/index.js");

    function _objectWithoutProperties(source, excluded) {
      if (source == null) return {};

      var target = _objectWithoutPropertiesLoose(source, excluded);

      var key, i;

      if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

        for (i = 0; i < sourceSymbolKeys.length; i++) {
          key = sourceSymbolKeys[i];
          if (excluded.indexOf(key) >= 0) continue;
          if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
          target[key] = source[key];
        }
      }

      return target;
    }

    function _objectWithoutPropertiesLoose(source, excluded) {
      if (source == null) return {};
      var target = {};
      var sourceKeys = Object.keys(source);
      var key, i;

      for (i = 0; i < sourceKeys.length; i++) {
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
      }

      return target;
    }
    /**
     * Internal dependencies
     */

    /**
     * WordPress dependencies
     */


    var registerFormatType = wp.richText.registerFormatType;

    function registerWeCodeArtFormats() {
      [_abbreviation__WEBPACK_IMPORTED_MODULE_0__["abbreviation"], _background_color__WEBPACK_IMPORTED_MODULE_4__["backgroundColor"], _clear__WEBPACK_IMPORTED_MODULE_6__["clear"], _justify__WEBPACK_IMPORTED_MODULE_2__["justify"], _markdown__WEBPACK_IMPORTED_MODULE_5__["markdown"], _text_color__WEBPACK_IMPORTED_MODULE_3__["textColor"], _underline__WEBPACK_IMPORTED_MODULE_1__["underline"]].forEach(function (_ref) {
        var name = _ref.name,
            settings = _objectWithoutProperties(_ref, ["name"]);

        if (name) {
          registerFormatType(name, settings);
        }
      });
    }

    wp.domReady(registerWeCodeArtFormats);
    /***/
  },

  /***/
  "./src/js/gutenberg/extensions/formats/justify/controls.js":
  /*!*****************************************************************!*\
    !*** ./src/js/gutenberg/extensions/formats/justify/controls.js ***!
    \*****************************************************************/

  /*! exports provided: default */

  /***/
  function srcJsGutenbergExtensionsFormatsJustifyControlsJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);

    function _typeof(obj) {
      if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
        _typeof = function _typeof(obj) {
          return _typeof2(obj);
        };
      } else {
        _typeof = function _typeof(obj) {
          return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
        };
      }

      return _typeof(obj);
    }

    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }

    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps) _defineProperties(Constructor.prototype, protoProps);
      if (staticProps) _defineProperties(Constructor, staticProps);
      return Constructor;
    }

    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }

      return _assertThisInitialized(self);
    }

    function _assertThisInitialized(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }

      return self;
    }

    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
      };
      return _getPrototypeOf(o);
    }

    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
      }

      subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
          value: subClass,
          writable: true,
          configurable: true
        }
      });
      if (superClass) _setPrototypeOf(subClass, superClass);
    }

    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
      };

      return _setPrototypeOf(o, p);
    }
    /**
     * External dependencies
     */


    var _lodash = lodash,
        get = _lodash.get;
    /**
     * WordPress dependencies
     */

    var __ = wp.i18n.__;
    var Component = wp.element.Component;
    var _wp$compose = wp.compose,
        compose = _wp$compose.compose,
        ifCondition = _wp$compose.ifCondition;
    var _wp$data = wp.data,
        select = _wp$data.select,
        withSelect = _wp$data.withSelect,
        withDispatch = _wp$data.withDispatch;
    var RichTextToolbarButton = wp.blockEditor.RichTextToolbarButton;

    var JustifyControl =
    /*#__PURE__*/
    function (_Component) {
      _inherits(JustifyControl, _Component);

      function JustifyControl() {
        _classCallCheck(this, JustifyControl);

        return _possibleConstructorReturn(this, _getPrototypeOf(JustifyControl).apply(this, arguments));
      }

      _createClass(JustifyControl, [{
        key: "render",
        value: function render() {
          var _this$props = this.props,
              blockId = _this$props.blockId,
              isBlockJustified = _this$props.isBlockJustified,
              updateBlockAttributes = _this$props.updateBlockAttributes;

          var onToggle = function onToggle() {
            updateBlockAttributes(blockId, {
              align: isBlockJustified ? null : 'justify'
            });
          };

          return wp.element.createElement(RichTextToolbarButton, {
            icon: "editor-justify",
            title: __('Justify', 'wecodeart'),
            onClick: onToggle,
            isActive: isBlockJustified
          });
        }
      }]);

      return JustifyControl;
    }(Component);
    /* harmony default export */


    __webpack_exports__["default"] = compose(withSelect(function () {
      var selectedBlock = select('core/block-editor').getSelectedBlock();

      if (!selectedBlock) {
        return {};
      }

      return {
        blockId: selectedBlock.clientId,
        blockName: selectedBlock.name,
        isBlockJustified: 'justify' === get(selectedBlock, 'attributes.align'),
        formatTypes: select('core/rich-text').getFormatTypes()
      };
    }), withDispatch(function (dispatch) {
      return {
        updateBlockAttributes: dispatch('core/block-editor').updateBlockAttributes
      };
    }), ifCondition(function (props) {
      var checkFormats = props.formatTypes.filter(function (formats) {
        return formats.name === 'wpcom/justify';
      });
      return 'core/paragraph' === props.blockName && checkFormats.length === 0;
    }))(JustifyControl);
    /***/
  },

  /***/
  "./src/js/gutenberg/extensions/formats/justify/index.js":
  /*!**************************************************************!*\
    !*** ./src/js/gutenberg/extensions/formats/justify/index.js ***!
    \**************************************************************/

  /*! exports provided: justify */

  /***/
  function srcJsGutenbergExtensionsFormatsJustifyIndexJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "justify", function () {
      return justify;
    });
    /* harmony import */


    var _controls__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./controls */
    "./src/js/gutenberg/extensions/formats/justify/controls.js");
    /**
     * WordPress dependencies
     */


    var __ = wp.i18n.__;
    /**
     * Internal dependencies
     */

    /**
     * Block constants
     */

    var name = 'wca/justify';
    var justify = {
      name: name,
      title: __('Align text justify', 'wecodeart'),
      tagName: 'p',
      className: null,
      attributes: {
        style: 'style'
      },
      edit: function edit(_ref) {
        var isActive = _ref.isActive,
            value = _ref.value,
            onChange = _ref.onChange,
            activeAttributes = _ref.activeAttributes;
        return wp.element.createElement(_controls__WEBPACK_IMPORTED_MODULE_0__["default"], {
          name: name,
          isActive: isActive,
          value: value,
          onChange: onChange,
          activeAttributes: activeAttributes
        });
      }
    };
    /***/
  },

  /***/
  "./src/js/gutenberg/extensions/formats/markdown/controls.js":
  /*!******************************************************************!*\
    !*** ./src/js/gutenberg/extensions/formats/markdown/controls.js ***!
    \******************************************************************/

  /*! exports provided: default */

  /***/
  function srcJsGutenbergExtensionsFormatsMarkdownControlsJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _get_active_formats__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./get-active-formats */
    "./src/js/gutenberg/extensions/formats/markdown/get-active-formats.js");

    function _typeof(obj) {
      if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
        _typeof = function _typeof(obj) {
          return _typeof2(obj);
        };
      } else {
        _typeof = function _typeof(obj) {
          return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
        };
      }

      return _typeof(obj);
    }

    function ownKeys(object, enumerableOnly) {
      var keys = Object.keys(object);

      if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) symbols = symbols.filter(function (sym) {
          return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
        keys.push.apply(keys, symbols);
      }

      return keys;
    }

    function _objectSpread(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i] != null ? arguments[i] : {};

        if (i % 2) {
          ownKeys(Object(source), true).forEach(function (key) {
            _defineProperty(target, key, source[key]);
          });
        } else if (Object.getOwnPropertyDescriptors) {
          Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        } else {
          ownKeys(Object(source)).forEach(function (key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
          });
        }
      }

      return target;
    }

    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, {
          value: value,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        obj[key] = value;
      }

      return obj;
    }

    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }

    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps) _defineProperties(Constructor.prototype, protoProps);
      if (staticProps) _defineProperties(Constructor, staticProps);
      return Constructor;
    }

    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }

      return _assertThisInitialized(self);
    }

    function _assertThisInitialized(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }

      return self;
    }

    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
      };
      return _getPrototypeOf(o);
    }

    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
      }

      subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
          value: subClass,
          writable: true,
          configurable: true
        }
      });
      if (superClass) _setPrototypeOf(subClass, superClass);
    }

    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
      };

      return _setPrototypeOf(o, p);
    }
    /**
     * WordPress dependencies
     */


    var Component = wp.element.Component;
    var _wp$compose = wp.compose,
        compose = _wp$compose.compose,
        ifCondition = _wp$compose.ifCondition;
    var _wp$data = wp.data,
        withSelect = _wp$data.withSelect,
        withDispatch = _wp$data.withDispatch;
    var _wp$richText = wp.richText,
        applyFormat = _wp$richText.applyFormat,
        getTextContent = _wp$richText.getTextContent,
        remove = _wp$richText.remove;
    var withSpokenMessages = wp.components.withSpokenMessages;
    /**
     * External dependencies
     */

    var _lodash = lodash,
        map = _lodash.map;
    /**
     * Internal dependencies
     */

    var MarkdownControl =
    /*#__PURE__*/
    function (_Component) {
      _inherits(MarkdownControl, _Component);

      function MarkdownControl() {
        var _this;

        _classCallCheck(this, MarkdownControl);

        _this = _possibleConstructorReturn(this, _getPrototypeOf(MarkdownControl).apply(this, arguments));
        _this.state = {
          start: null,
          end: null
        };
        return _this;
      }

      _createClass(MarkdownControl, [{
        key: "_experimentalMarkdown",
        value: function _experimentalMarkdown(record, onChange, markdown, format) {
          var _record = record,
              start = _record.start;
          var text = getTextContent(record);
          var checkMarkdown = text.slice(start - 1, start); // Quick check the text for the necessary character.

          if (checkMarkdown !== markdown) {
            return record;
          }

          var textBefore = text.slice(0, start - 1);
          var indexBefore = textBefore.lastIndexOf(markdown);

          if (indexBefore === -1) {
            return record;
          }

          var startIndex = indexBefore;
          var endIndex = start - 2;

          if (startIndex === endIndex) {
            return record;
          }

          var characterInside = text.slice(startIndex, endIndex + 1);
          var splitNewlines = characterInside.split('\n');

          if (splitNewlines.length > 1) {
            return record;
          }

          var activeFormats = Object(_get_active_formats__WEBPACK_IMPORTED_MODULE_0__["getActiveFormats"])(record);

          if (activeFormats.length > 0) {
            if (activeFormats.filter(function (formatActive) {
              return formatActive.type === 'core/code';
            })) {
              return record;
            }
          }

          var characterBefore = text.slice(startIndex - 1, startIndex);

          if (characterBefore.length === 1 && characterBefore.match(/[A-Z|a-z]/i)) {
            return record;
          }

          var characterAfter = text.slice(startIndex + 1, startIndex + 2);

          if (characterAfter === ' ') {
            return record;
          }

          record = remove(record, startIndex, startIndex + 1);
          record = remove(record, endIndex, endIndex + 1);
          record = applyFormat(record, {
            type: format
          }, startIndex, endIndex);
          wp.data.dispatch('core/block-editor').stopTyping();
          this.setState({
            start: startIndex,
            end: endIndex
          });
          record.activeFormats = [];
          onChange(_objectSpread({}, record, {
            needsSelectionUpdate: true
          }));
          return record;
        }
      }, {
        key: "render",
        value: function render() {
          var _this2 = this;

          var _this$props = this.props,
              value = _this$props.value,
              onChange = _this$props.onChange;
          var markdowns = {
            bold: {
              markdown: '*',
              format: 'core/bold'
            },
            italic: {
              markdown: '_',
              format: 'core/italic'
            },
            strikethrough: {
              markdown: '~',
              format: 'core/strikethrough'
            }
          };
          map(markdowns, function (markdown) {
            _this2._experimentalMarkdown(value, onChange, markdown.markdown, markdown.format);
          });
          return null;
        }
      }]);

      return MarkdownControl;
    }(Component);
    /* harmony default export */


    __webpack_exports__["default"] = compose(withSelect(function () {
      return {
        isDisabled: false
      };
    }), withDispatch(function (dispatch, _ref) {
      var clientId = _ref.clientId,
          instanceId = _ref.instanceId,
          _ref$identifier = _ref.identifier,
          identifier = _ref$identifier === void 0 ? instanceId : _ref$identifier;

      var _dispatch = dispatch('core/block-editor'),
          selectionChange = _dispatch.selectionChange;

      return {
        onSelectionChange: function onSelectionChange(start, end) {
          selectionChange(clientId, identifier, start, end);
        }
      };
    }), ifCondition(function (props) {
      return !props.isDisabled;
    }), withSpokenMessages)(MarkdownControl);
    /***/
  },

  /***/
  "./src/js/gutenberg/extensions/formats/markdown/get-active-formats.js":
  /*!****************************************************************************!*\
    !*** ./src/js/gutenberg/extensions/formats/markdown/get-active-formats.js ***!
    \****************************************************************************/

  /*! exports provided: getActiveFormats */

  /***/
  function srcJsGutenbergExtensionsFormatsMarkdownGetActiveFormatsJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getActiveFormats", function () {
      return getActiveFormats;
    });
    /**
     * Gets the all format objects at the start of the selection.
     *
     * @param {Object} value Value to inspect.
     *
     * @return {?Object} Active format objects.
     */


    function getActiveFormats(_ref) {
      var formats = _ref.formats,
          start = _ref.start,
          end = _ref.end,
          activeFormats = _ref.activeFormats;

      if (start === undefined) {
        return [];
      }

      if (start === end) {
        // For a collapsed caret, it is possible to override the active formats.
        if (activeFormats) {
          return activeFormats;
        }

        var formatsBefore = formats[start - 1] || [];
        var formatsAfter = formats[start] || []; // By default, select the lowest amount of formats possible (which means
        // the caret is positioned outside the format boundary). The user can
        // then use arrow keys to define `activeFormats`.

        if (formatsBefore.length < formatsAfter.length) {
          return formatsBefore;
        }

        return formatsAfter;
      }

      return formats[start] || [];
    }
    /***/

  },

  /***/
  "./src/js/gutenberg/extensions/formats/markdown/index.js":
  /*!***************************************************************!*\
    !*** ./src/js/gutenberg/extensions/formats/markdown/index.js ***!
    \***************************************************************/

  /*! exports provided: markdown */

  /***/
  function srcJsGutenbergExtensionsFormatsMarkdownIndexJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "markdown", function () {
      return markdown;
    });
    /* harmony import */


    var _controls__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./controls */
    "./src/js/gutenberg/extensions/formats/markdown/controls.js");
    /**
     * WordPress dependencies
     */


    var __ = wp.i18n.__;
    /**
     * Internal dependencies
     */

    /**
     * Block constants
     */

    var name = 'wca/markdown';
    var markdown = {
      name: name,
      title: __('Underline', 'wecodeart'),
      tagName: 'p',
      className: 'wca-markdown',
      attributes: {
        style: 'style'
      },
      edit: function edit(_ref) {
        var isActive = _ref.isActive,
            value = _ref.value,
            onChange = _ref.onChange,
            activeAttributes = _ref.activeAttributes;
        return wp.element.createElement(_controls__WEBPACK_IMPORTED_MODULE_0__["default"], {
          name: name,
          isActive: isActive,
          value: value,
          onChange: onChange,
          activeAttributes: activeAttributes
        });
      }
    };
    /***/
  },

  /***/
  "./src/js/gutenberg/extensions/formats/text-color/components/edit.js":
  /*!***************************************************************************!*\
    !*** ./src/js/gutenberg/extensions/formats/text-color/components/edit.js ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function srcJsGutenbergExtensionsFormatsTextColorComponentsEditJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);

    function _typeof(obj) {
      if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
        _typeof = function _typeof(obj) {
          return _typeof2(obj);
        };
      } else {
        _typeof = function _typeof(obj) {
          return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
        };
      }

      return _typeof(obj);
    }

    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }

    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps) _defineProperties(Constructor.prototype, protoProps);
      if (staticProps) _defineProperties(Constructor, staticProps);
      return Constructor;
    }

    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }

      return _assertThisInitialized(self);
    }

    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
      };
      return _getPrototypeOf(o);
    }

    function _assertThisInitialized(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }

      return self;
    }

    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
      }

      subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
          value: subClass,
          writable: true,
          configurable: true
        }
      });
      if (superClass) _setPrototypeOf(subClass, superClass);
    }

    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
      };

      return _setPrototypeOf(o, p);
    }
    /**
     * WordPress dependencies
     */


    var __ = wp.i18n.__;
    var Component = wp.element.Component;
    var _wp$data = wp.data,
        select = _wp$data.select,
        withSelect = _wp$data.withSelect;
    var _wp$blockEditor = wp.blockEditor,
        BlockControls = _wp$blockEditor.BlockControls,
        getColorClassName = _wp$blockEditor.getColorClassName,
        getColorObjectByColorValue = _wp$blockEditor.getColorObjectByColorValue,
        getColorObjectByAttributeValues = _wp$blockEditor.getColorObjectByAttributeValues;
    var _wp$richText = wp.richText,
        applyFormat = _wp$richText.applyFormat,
        removeFormat = _wp$richText.removeFormat,
        getActiveFormat = _wp$richText.getActiveFormat;
    var _wp$components = wp.components,
        Toolbar = _wp$components.Toolbar,
        IconButton = _wp$components.IconButton,
        Popover = _wp$components.Popover,
        ColorPalette = _wp$components.ColorPalette;
    var _wp$compose = wp.compose,
        compose = _wp$compose.compose,
        ifCondition = _wp$compose.ifCondition;
    var name = 'wca/color';

    var title = __('Text Color', 'wecodeart');

    var Edit =
    /*#__PURE__*/
    function (_Component) {
      _inherits(Edit, _Component);

      function Edit() {
        var _this;

        _classCallCheck(this, Edit);

        _this = _possibleConstructorReturn(this, _getPrototypeOf(Edit).apply(this, arguments));
        _this.toggle = _this.toggle.bind(_assertThisInitialized(_this));
        _this.state = {
          isOpen: false
        };
        return _this;
      }

      _createClass(Edit, [{
        key: "toggle",
        value: function toggle() {
          this.setState(function (state) {
            return {
              isOpen: !state.isOpen
            };
          });
        }
      }, {
        key: "render",
        value: function render() {
          var _this2 = this;

          var isOpen = this.state.isOpen;
          var _this$props = this.props,
              value = _this$props.value,
              _onChange = _this$props.onChange,
              colors = _this$props.colors;
          var activeColor;
          var activeColorFormat = getActiveFormat(value, name);

          if (activeColorFormat) {
            var styleColor = activeColorFormat.attributes.style;

            if (styleColor) {
              activeColor = styleColor.replace(new RegExp("^color:\\s*"), '');
            }

            var currentClass = activeColorFormat.attributes.class;

            if (currentClass) {
              var colorSlug = currentClass.replace(/.*has-(.*?)-color.*/, '$1');
              activeColor = getColorObjectByAttributeValues(colors, colorSlug).color;
            }
          }

          return wp.element.createElement(BlockControls, null, wp.element.createElement(Toolbar, {
            className: "components-toolbar--wca"
          }, wp.element.createElement(IconButton, {
            className: "components-button components-icon-button components-toolbar__control components-wca-color-format",
            icon: "editor-textcolor",
            "aria-haspopup": "true",
            tooltip: title,
            onClick: this.toggle
          }, wp.element.createElement("span", {
            className: "components-toolbar__indicator",
            style: {
              backgroundColor: activeColor
            }
          })), isOpen && wp.element.createElement(Popover, {
            position: "bottom center",
            className: "components-popover--wca",
            focusOnMount: "container",
            onClickOutside: function onClickOutside(_onClickOutside) {
              if (!_onClickOutside.target.classList.contains('components-wca-color-format') && !document.querySelector('.components-wca-color-format').contains(_onClickOutside.target) && (!document.querySelector('.components-color-palette__picker') || document.querySelector('.components-color-palette__picker') && !document.querySelector('.components-color-palette__picker').contains(_onClickOutside.target))) {
                _this2.setState({
                  isOpen: !isOpen
                });
              }
            }
          }, wp.element.createElement(ColorPalette, {
            colors: colors,
            value: activeColor,
            onChange: function onChange(color) {
              if (color) {
                var colorObject = null;

                if (typeof window.wecodeartInfo !== 'undefined' && window.wecodeartInfo.supports.colorPalette) {
                  colorObject = getColorObjectByColorValue(colors, color);
                }

                _onChange(applyFormat(value, {
                  type: name,
                  attributes: colorObject ? {
                    class: getColorClassName('color', colorObject.slug)
                  } : {
                    style: "color:".concat(color)
                  }
                }));
              } else {
                _onChange(removeFormat(value, name));
              }
            }
          }))));
        }
      }]);

      return Edit;
    }(Component);
    /* harmony default export */


    __webpack_exports__["default"] = compose(withSelect(function () {
      var _select$getSettings = select('core/block-editor').getSettings(),
          colors = _select$getSettings.colors;

      return {
        colors: colors ? colors : [],
        isDisabled: false
      };
    }), ifCondition(function (props) {
      return !props.isDisabled;
    }))(Edit);
    /***/
  },

  /***/
  "./src/js/gutenberg/extensions/formats/text-color/index.js":
  /*!*****************************************************************!*\
    !*** ./src/js/gutenberg/extensions/formats/text-color/index.js ***!
    \*****************************************************************/

  /*! exports provided: textColor */

  /***/
  function srcJsGutenbergExtensionsFormatsTextColorIndexJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "textColor", function () {
      return textColor;
    });
    /* harmony import */


    var _components_edit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./components/edit */
    "./src/js/gutenberg/extensions/formats/text-color/components/edit.js");
    /**
     * WordPress dependencies
     */


    var __ = wp.i18n.__;
    /**
     * Internal dependencies
     */

    /**
     * Block constants
     */

    var name = 'wca/color';
    var textColor = {
      name: name,
      title: __('Text Color', 'wecodeart'),
      tagName: 'span',
      className: 'has-inline-color',
      attributes: {
        style: 'style',
        class: 'class'
      },
      edit: _components_edit__WEBPACK_IMPORTED_MODULE_0__["default"]
    };
    /***/
  },

  /***/
  "./src/js/gutenberg/extensions/formats/underline/index.js":
  /*!****************************************************************!*\
    !*** ./src/js/gutenberg/extensions/formats/underline/index.js ***!
    \****************************************************************/

  /*! exports provided: underline */

  /***/
  function srcJsGutenbergExtensionsFormatsUnderlineIndexJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "underline", function () {
      return underline;
    });
    /**
     * WordPress dependencies
     */


    var __ = wp.i18n.__;
    var Fragment = wp.element.Fragment;
    var toggleFormat = wp.richText.toggleFormat;
    var _wp$blockEditor = wp.blockEditor,
        RichTextToolbarButton = _wp$blockEditor.RichTextToolbarButton,
        RichTextShortcut = _wp$blockEditor.RichTextShortcut;
    var select = wp.data.select;
    /**
     * Block constants
     */

    var name = 'wca/underline';
    var underline = {
      name: name,
      title: __('Underline', 'wecodeart'),
      tagName: 'span',
      className: 'has-underline',
      attributes: {
        class: 'class'
      },
      edit: function edit(_ref) {
        var isActive = _ref.isActive,
            value = _ref.value,
            onChange = _ref.onChange;
        var formatTypes = select('core/rich-text').getFormatTypes();
        var checkFormats = formatTypes.filter(function (formats) {
          return formats.name === 'wpcom/underline';
        });

        var onToggle = function onToggle() {
          onChange(toggleFormat(value, {
            type: name
          }));
        };

        return wp.element.createElement(Fragment, null, wp.element.createElement(RichTextShortcut, {
          type: "primary",
          character: "u",
          onUse: onToggle
        }), checkFormats.length === 0 && wp.element.createElement(RichTextToolbarButton, {
          icon: "editor-underline",
          title: __('Underline', 'wecodeart'),
          onClick: onToggle,
          isActive: isActive,
          shortcutType: "primary",
          shortcutCharacter: "u"
        }));
      }
    };
    /***/
  },

  /***/
  "./src/js/gutenberg/extensions/modules/index.js":
  /*!******************************************************!*\
    !*** ./src/js/gutenberg/extensions/modules/index.js ***!
    \******************************************************/

  /*! no exports provided */

  /***/
  function srcJsGutenbergExtensionsModulesIndexJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _with_text__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./with-text */
    "./src/js/gutenberg/extensions/modules/with-text/index.js");
    /* harmony import */


    var _with_background__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./with-background */
    "./src/js/gutenberg/extensions/modules/with-background/index.js");
    /**
     * Internal dependencies
     */

    /***/

  },

  /***/
  "./src/js/gutenberg/extensions/modules/with-background/index.js":
  /*!**********************************************************************!*\
    !*** ./src/js/gutenberg/extensions/modules/with-background/index.js ***!
    \**********************************************************************/

  /*! no exports provided */

  /***/
  function srcJsGutenbergExtensionsModulesWithBackgroundIndexJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! classnames */
    "./node_modules/classnames/index.js");
    /* harmony import */


    var classnames__WEBPACK_IMPORTED_MODULE_0___default =
    /*#__PURE__*/
    __webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
    /* harmony import */


    var _controls_background__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../controls/background */
    "./src/js/gutenberg/controls/background/index.js");
    /* harmony import */


    var _attributes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../attributes */
    "./src/js/gutenberg/extensions/attributes/index.js");

    function ownKeys(object, enumerableOnly) {
      var keys = Object.keys(object);

      if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) symbols = symbols.filter(function (sym) {
          return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
        keys.push.apply(keys, symbols);
      }

      return keys;
    }

    function _objectSpread(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i] != null ? arguments[i] : {};

        if (i % 2) {
          ownKeys(Object(source), true).forEach(function (key) {
            _defineProperty(target, key, source[key]);
          });
        } else if (Object.getOwnPropertyDescriptors) {
          Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        } else {
          ownKeys(Object(source)).forEach(function (key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
          });
        }
      }

      return target;
    }

    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, {
          value: value,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        obj[key] = value;
      }

      return obj;
    }

    function _extends() {
      _extends = Object.assign || function (target) {
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
    /**
     * WordPress dependencies.
     */


    var hasBlockSupport = wp.blocks.hasBlockSupport;
    var _wp$blockEditor = wp.blockEditor,
        BlockControls = _wp$blockEditor.BlockControls,
        InspectorControls = _wp$blockEditor.InspectorControls,
        withColors = _wp$blockEditor.withColors;
    var createHigherOrderComponent = wp.compose.createHigherOrderComponent;
    var compose = wp.compose.compose;
    var _wp$data = wp.data,
        select = _wp$data.select,
        withSelect = _wp$data.withSelect;
    var Fragment = wp.element.Fragment;
    var withFallbackStyles = wp.components.withFallbackStyles;
    var addFilter = wp.hooks.addFilter;
    /**
     * External Dependencies
     */

    /**
     * Internal dependencies.
     */

    /**
     * Override the default block element to add Font Panels.
     *
     * @param  {Function} BlockListBlock Original component
     * @return {Function} Wrapped component
     */

    var enhance = compose([withSelect(function (select) {
      return {
        selected: select('core/block-editor').getSelectedBlock(),
        select: select
      };
    }), withColors('backgroundColor'), withFallbackStyles(function (node, ownProps) {
      var _ownProps$attributes = ownProps.attributes,
          backgroundColor = _ownProps$attributes.backgroundColor,
          customBackgroundColor = _ownProps$attributes.customBackgroundColor;
      var editableNode = node.querySelector('[contenteditable="true"]');
      var computedStyles = editableNode ? getComputedStyle(editableNode) : null;
      return {
        fallbackBackgroundColor: backgroundColor || customBackgroundColor || !computedStyles ? undefined : computedStyles.backgroundColor
      };
    })]);
    /**
     * BG Controls
     *
     * @param {Function} BlockEdit Original component.
     * @return {string} Wrapped component.
     */

    var withBackgroundControls = createHigherOrderComponent(function (BlockEdit) {
      return enhance(function (props) {
        var blockName = props.name,
            isSelected = props.isSelected;

        if (!_attributes__WEBPACK_IMPORTED_MODULE_2__["restrictedBlocks"].includes(blockName) && hasBlockSupport(blockName, 'hasBackground') && isSelected) {
          return wp.element.createElement(Fragment, null, wp.element.createElement(BlockEdit, props), wp.element.createElement(BlockControls, null, Object(_controls_background__WEBPACK_IMPORTED_MODULE_1__["BackgroundControls"])(props)), wp.element.createElement(InspectorControls, null, wp.element.createElement(_controls_background__WEBPACK_IMPORTED_MODULE_1__["BackgroundPanel"], _extends({}, props, {
            hasOverlay: true
          }))));
        }

        return wp.element.createElement(BlockEdit, props);
      });
    }, 'withBackgroundControls');
    /**
     * Add custom WeCodeArt attributes to selected blocks
     *
     * @param {Function} BlockListBlock Original component.
     * @return {string} Wrapped component.
     */

    var withBackgroundSettings = createHigherOrderComponent(function (BlockListBlock) {
      return function (props) {
        var blockName = props.name,
            wrapperProps = props.wrapperProps;
        var customData = {};

        if (!_attributes__WEBPACK_IMPORTED_MODULE_2__["restrictedBlocks"].includes(blockName) && hasBlockSupport(blockName, 'hasBackground')) {
          var attributes = props.attributes;

          var _select$getSettings = select('core/block-editor').getSettings(),
              colors = _select$getSettings.colors;

          var backgroundImg = attributes.backgroundImg;

          if (backgroundImg !== '') {
            customData = _objectSpread({}, customData, {}, {
              'data-wca-background': 1
            });
          }

          wrapperProps = _objectSpread({}, wrapperProps, {
            style: Object(_controls_background__WEBPACK_IMPORTED_MODULE_1__["BackgroundStyles"])(attributes, colors)
          }, customData);
        }

        return wp.element.createElement(BlockListBlock, _extends({}, props, {
          wrapperProps: wrapperProps
        }));
      };
    }, 'withBackgroundSettings');
    /**
     * Override props assigned to save component to inject atttributes
     *
     * @param {Object} extraProps Additional props applied to save element.
     * @param {Object} blockType  Block type.
     * @param {Object} attributes Current block attributes.
     *
     * @return {Object} Filtered props applied to save element.
     */

    function applyExtraSettings(extraProps, blockType, attributes) {
      var blockName = blockType.name;

      if (!_attributes__WEBPACK_IMPORTED_MODULE_2__["restrictedBlocks"].includes(blockName) && hasBlockSupport(blockName, 'hasBackground')) {
        extraProps.style = Object(_controls_background__WEBPACK_IMPORTED_MODULE_1__["BackgroundStyles"])(attributes, {});
        extraProps.className = classnames__WEBPACK_IMPORTED_MODULE_0___default()(extraProps.className, Object(_controls_background__WEBPACK_IMPORTED_MODULE_1__["BackgroundClasses"])(attributes));
      }

      return extraProps;
    }
    /**
     * Apply Filters
     */


    function applyFilters() {
      addFilter('editor.BlockEdit', 'wecodeart/editor/with-background/withBackgroundControls', withBackgroundControls);
      addFilter('editor.BlockListBlock', 'wecodeart/editor/with-background/withBackgroundSettings', withBackgroundSettings);
      addFilter('blocks.getSaveContent.extraProps', 'wecodeart/blocks/with-background/applyExtraSettings', applyExtraSettings);
    }

    applyFilters();
    /***/
  },

  /***/
  "./src/js/gutenberg/extensions/modules/with-text/applyStyle.js":
  /*!*********************************************************************!*\
    !*** ./src/js/gutenberg/extensions/modules/with-text/applyStyle.js ***!
    \*********************************************************************/

  /*! exports provided: default */

  /***/
  function srcJsGutenbergExtensionsModulesWithTextApplyStyleJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "default", function () {
      return applyStyle;
    });
    /**
     * WordPress Dependencies
     */


    var _lodash = lodash,
        find = _lodash.find;
    /**
     * Apply Fonts CSS styles
     */

    function applyStyle(attributes, blockName) {
      var props = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var fontSizes = props.fontSizes,
          colors = props.colors;
      var textColor = attributes.textColor,
          customTextColor = attributes.customTextColor,
          fontSize = attributes.fontSize,
          customFontSize = attributes.customFontSize;
      var style = {};

      if (typeof fontSize !== 'undefined') {
        var fontSizeObject = find(fontSizes, {
          slug: fontSize
        });

        if (typeof fontSizeObject !== 'undefined' && typeof fontSizeObject.size !== 'undefined') {
          style.fontSize = fontSizeObject.size + 'px';
        }
      } else if (typeof customFontSize !== 'undefined') {
        style.fontSize = customFontSize + 'px';
      }

      if (typeof textColor !== 'undefined') {
        if (typeof colors !== 'undefined') {
          var textColorValue = find(colors, {
            slug: textColor
          });

          if (typeof textColorValue !== 'undefined' && typeof textColorValue.color !== 'undefined') {
            style.color = textColorValue.color;
          }
        }
      } else if (typeof customTextColor !== 'undefined') {
        style.color = customTextColor;
      }

      return style;
    }
    /***/

  },

  /***/
  "./src/js/gutenberg/extensions/modules/with-text/index.js":
  /*!****************************************************************!*\
    !*** ./src/js/gutenberg/extensions/modules/with-text/index.js ***!
    \****************************************************************/

  /*! no exports provided */

  /***/
  function srcJsGutenbergExtensionsModulesWithTextIndexJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! classnames */
    "./node_modules/classnames/index.js");
    /* harmony import */


    var classnames__WEBPACK_IMPORTED_MODULE_0___default =
    /*#__PURE__*/
    __webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
    /* harmony import */


    var _applyStyle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./applyStyle */
    "./src/js/gutenberg/extensions/modules/with-text/applyStyle.js");
    /* harmony import */


    var _attributes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../attributes */
    "./src/js/gutenberg/extensions/attributes/index.js");

    function _extends() {
      _extends = Object.assign || function (target) {
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

    function ownKeys(object, enumerableOnly) {
      var keys = Object.keys(object);

      if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) symbols = symbols.filter(function (sym) {
          return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
        keys.push.apply(keys, symbols);
      }

      return keys;
    }

    function _objectSpread(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i] != null ? arguments[i] : {};

        if (i % 2) {
          ownKeys(Object(source), true).forEach(function (key) {
            _defineProperty(target, key, source[key]);
          });
        } else if (Object.getOwnPropertyDescriptors) {
          Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        } else {
          ownKeys(Object(source)).forEach(function (key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
          });
        }
      }

      return target;
    }

    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, {
          value: value,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        obj[key] = value;
      }

      return obj;
    }

    function _objectWithoutProperties(source, excluded) {
      if (source == null) return {};

      var target = _objectWithoutPropertiesLoose(source, excluded);

      var key, i;

      if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

        for (i = 0; i < sourceSymbolKeys.length; i++) {
          key = sourceSymbolKeys[i];
          if (excluded.indexOf(key) >= 0) continue;
          if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
          target[key] = source[key];
        }
      }

      return target;
    }

    function _objectWithoutPropertiesLoose(source, excluded) {
      if (source == null) return {};
      var target = {};
      var sourceKeys = Object.keys(source);
      var key, i;

      for (i = 0; i < sourceKeys.length; i++) {
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
      }

      return target;
    }
    /**
     * External Dependencies
     */

    /**
     * WordPress Dependencies
     */


    var _lodash = lodash,
        assign = _lodash.assign;
    var __ = wp.i18n.__;
    var withSelect = wp.data.withSelect;
    var Fragment = wp.element.Fragment;
    var _wp$blockEditor = wp.blockEditor,
        InspectorControls = _wp$blockEditor.InspectorControls,
        FontSizePicker = _wp$blockEditor.FontSizePicker,
        withFontSizes = _wp$blockEditor.withFontSizes,
        withColors = _wp$blockEditor.withColors,
        PanelColorSettings = _wp$blockEditor.PanelColorSettings;
    var _wp$components = wp.components,
        PanelBody = _wp$components.PanelBody,
        withFallbackStyles = _wp$components.withFallbackStyles;
    var addFilter = wp.hooks.addFilter;
    var _wp$compose = wp.compose,
        compose = _wp$compose.compose,
        createHigherOrderComponent = _wp$compose.createHigherOrderComponent;
    /**
     * Internal Dependencies
     */

    /**
     * Override the default block element to add Font Panels.
     *
     * @param  {Function} BlockListBlock Original component
     * @return {Function} Wrapped component
     */

    var WithTextControls = compose([withColors({
      textColor: 'color'
    }), withFontSizes('fontSize'), withFallbackStyles(function (node, ownProps) {
      var _ownProps$attributes = ownProps.attributes,
          fontSize = _ownProps$attributes.fontSize,
          customFontSize = _ownProps$attributes.customFontSize,
          textColor = _ownProps$attributes.textColor;
      var editableNode = node.querySelector('[contenteditable="true"]');
      var computedStyles = editableNode ? getComputedStyle(editableNode) : null;
      return {
        fallbackTextColor: textColor || !computedStyles ? undefined : computedStyles.color,
        fallbackFontSize: fontSize || customFontSize || !computedStyles ? undefined : parseInt(computedStyles.fontSize) || undefined
      };
    })])(function (props) {
      var fallbackFontSize = props.fallbackFontSize,
          fontSize = props.fontSize,
          setFontSize = props.setFontSize,
          textColor = props.textColor,
          setTextColor = props.setTextColor;
      return wp.element.createElement(InspectorControls, null, wp.element.createElement(PanelBody, {
        title: __('Text Settings', 'wecodeart'),
        initialOpen: false,
        className: "wecodeart-panel"
      }, wp.element.createElement(FontSizePicker, {
        fallbackFontSize: fallbackFontSize,
        value: fontSize.size,
        onChange: setFontSize
      })), wp.element.createElement(PanelColorSettings, {
        title: __('Color Settings', 'wecodeart'),
        initialOpen: false,
        colorSettings: [{
          value: textColor.color,
          onChange: setTextColor,
          label: __('Text Color', 'wecodeart')
        }]
      }));
    });
    /**
     * Override the default block element to add wrapper props.
     *
     * @param  {Function} BlockListBlock Original component
     * @return {Function} Wrapped component
     */

    var enhance = compose(
    /**
     * For blocks whose block type doesn't support `multiple`, provides the
     * wrapped component with `originalBlockClientId` -- a reference to the
     * first block of the same type in the content -- if and only if that
     * "original" block is not the current one. Thus, an inexisting
     * `originalBlockClientId` prop signals that the block is valid.
     *
     */
    withSelect(function (select) {
      var _select$getSettings = select('core/block-editor').getSettings(),
          fontSizes = _select$getSettings.fontSizes,
          colors = _select$getSettings.colors;

      return {
        selected: select('core/block-editor').getSelectedBlock(),
        fontSizes: fontSizes,
        select: select,
        colors: colors
      };
    }));
    /**
     * Add custom WeCodeArt attributes to selected blocks
     *
     * @param {Function} BlockListBlock Original component.
     * @return {string} Wrapped component.
     */

    var withTextSettings = createHigherOrderComponent(function (BlockListBlock) {
      return enhance(function (_ref) {
        var select = _ref.select,
            props = _objectWithoutProperties(_ref, ["select"]);

        var wrapperProps = props.wrapperProps;
        var customData = {};

        var _select$getBlock = select('core/block-editor').getBlock(props.clientId),
            attributes = _select$getBlock.attributes;

        var blockName = select('core/block-editor').getBlockName(props.clientId);

        if (_attributes__WEBPACK_IMPORTED_MODULE_2__["blocksWithFontSize"].includes(blockName)) {
          var customFontSize = attributes.customFontSize,
              fontSize = attributes.fontSize;

          if (customFontSize || fontSize) {
            customData = assign(customData, {
              'data-custom-fontsize': 1
            });
          }

          wrapperProps = _objectSpread({}, wrapperProps, {
            style: Object(_applyStyle__WEBPACK_IMPORTED_MODULE_1__["default"])(attributes, blockName, props)
          }, customData);
        }

        return wp.element.createElement(BlockListBlock, _extends({}, props, {
          wrapperProps: wrapperProps
        }));
      });
    }, 'withTextSettings');
    /**
     * Add custom WeCodeArt attributes to selected blocks
     *
     * @param {Function} BlockEdit Original component.
     * @return {string} Wrapped component.
     */

    var withBlockPanel = createHigherOrderComponent(function (BlockEdit) {
      return enhance(function (_ref2) {
        var props = _extends({}, _ref2);

        var name = props.name,
            isSelected = props.isSelected;

        if (isSelected && _attributes__WEBPACK_IMPORTED_MODULE_2__["blocksWithFontSize"].includes(name)) {
          return wp.element.createElement(Fragment, null, wp.element.createElement(BlockEdit, props), wp.element.createElement(WithTextControls, props));
        }

        return wp.element.createElement(BlockEdit, props);
      });
    }, 'withBlockPanel');
    /**
     * Override props assigned to save component to inject atttributes
     *
     * @param {Object} extraProps Additional props applied to save element.
     * @param {Object} blockType  Block type.
     * @param {Object} attributes Current block attributes.
     *
     * @return {Object} Filtered props applied to save element.
     */

    function applyTextSettings(extraProps, blockType, attributes) {
      if (_attributes__WEBPACK_IMPORTED_MODULE_2__["blocksWithFontSize"].includes(blockType.name)) {
        if (typeof extraProps.style !== 'undefined') {
          extraProps.style = assign(extraProps.style, Object(_applyStyle__WEBPACK_IMPORTED_MODULE_1__["default"])(attributes, blockType.name));
        } else {
          extraProps.style = Object(_applyStyle__WEBPACK_IMPORTED_MODULE_1__["default"])(attributes, blockType.name);
        }

        var customFontSize = attributes.customFontSize,
            fontSize = attributes.fontSize,
            textColor = attributes.textColor;

        if (fontSize) {
          extraProps.className = classnames__WEBPACK_IMPORTED_MODULE_0___default()(extraProps.className, 'has-' + fontSize + '-font-size');
        } else if (customFontSize) {
          extraProps.className = classnames__WEBPACK_IMPORTED_MODULE_0___default()(extraProps.className, 'has-custom-size');
        }

        if (textColor) {
          extraProps.className = classnames__WEBPACK_IMPORTED_MODULE_0___default()(extraProps.className, 'has-' + textColor + '-color');
        }
      }

      return extraProps;
    }
    /**
     * Apply Filters
     */


    function applyFilters() {
      addFilter('editor.BlockEdit', 'wecodeart/editor/with-text/withBlockPanel', withBlockPanel);
      addFilter('editor.BlockListBlock', 'wecodeart/editor/with-text/withTextSettings', withTextSettings);
      addFilter('blocks.getSaveContent.extraProps', 'wecodeart/blocks/with-text/applyTextSettings', applyTextSettings);
    }

    applyFilters();
    /***/
  },

  /***/
  "./src/js/gutenberg/extensions/plugins/builder-template/components/controls.js":
  /*!*************************************************************************************!*\
    !*** ./src/js/gutenberg/extensions/plugins/builder-template/components/controls.js ***!
    \*************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcJsGutenbergExtensionsPluginsBuilderTemplateComponentsControlsJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);

    function _typeof(obj) {
      if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
        _typeof = function _typeof(obj) {
          return _typeof2(obj);
        };
      } else {
        _typeof = function _typeof(obj) {
          return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
        };
      }

      return _typeof(obj);
    }

    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }

    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps) _defineProperties(Constructor.prototype, protoProps);
      if (staticProps) _defineProperties(Constructor, staticProps);
      return Constructor;
    }

    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }

      return _assertThisInitialized(self);
    }

    function _assertThisInitialized(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }

      return self;
    }

    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
      };
      return _getPrototypeOf(o);
    }

    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
      }

      subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
          value: subClass,
          writable: true,
          configurable: true
        }
      });
      if (superClass) _setPrototypeOf(subClass, superClass);
    }

    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
      };

      return _setPrototypeOf(o, p);
    }
    /**
     * WordPress dependencies
     */


    var __ = wp.i18n.__;
    var Component = wp.element.Component;
    var _wp$compose = wp.compose,
        compose = _wp$compose.compose,
        ifCondition = _wp$compose.ifCondition;
    var PluginPostStatusInfo = wp.editPost.PluginPostStatusInfo;
    var _wp$data = wp.data,
        withSelect = _wp$data.withSelect,
        withDispatch = _wp$data.withDispatch;
    var _wp$components = wp.components,
        withSpokenMessages = _wp$components.withSpokenMessages,
        CheckboxControl = _wp$components.CheckboxControl;

    var BuilderTemplate =
    /*#__PURE__*/
    function (_Component) {
      _inherits(BuilderTemplate, _Component);

      function BuilderTemplate() {
        _classCallCheck(this, BuilderTemplate);

        return _possibleConstructorReturn(this, _getPrototypeOf(BuilderTemplate).apply(this, arguments));
      }

      _createClass(BuilderTemplate, [{
        key: "render",
        value: function render() {
          var _this$props = this.props,
              onToggle = _this$props.onToggle,
              postMeta = _this$props.postMeta,
              postType = _this$props.postType;

          if (['wp_block'].includes(postType) || !['page'].includes(postType)) {
            return false;
          }

          var value = postMeta._wca_builder_template;
          var enabled = typeof postMeta !== 'undefined' && typeof value !== 'undefined' ? value : false;
          var help = enabled ? __('Enabled', 'wecodeart') : __('Disabled', 'wecodeart');
          help = sprintf(__('Page builder template is %s.', 'wecodeart'), help);
          return wp.element.createElement(PluginPostStatusInfo, null, wp.element.createElement(CheckboxControl, {
            className: "wca-post-status-label",
            label: __('Enable Page Builder Template?', 'wecodeart'),
            checked: enabled,
            onChange: onToggle,
            help: help
          }));
        }
      }]);

      return BuilderTemplate;
    }(Component);
    /* harmony default export */


    __webpack_exports__["default"] = compose(withSelect(function (select) {
      return {
        postType: select('core/editor').getEditedPostAttribute('type'),
        postMeta: select('core/editor').getEditedPostAttribute('meta')
      };
    }), withDispatch(function (dispatch, ownProps) {
      var metavalue;

      if (typeof ownProps.postMeta !== 'undefined' && typeof ownProps.postMeta._wca_builder_template !== 'undefined') {
        metavalue = ownProps.postMeta._wca_builder_template;
      }

      return {
        onToggle: function onToggle() {
          dispatch('core/editor').editPost({
            meta: {
              _wca_builder_template: !metavalue
            }
          });
        }
      };
    }), ifCondition(function (props) {
      return props.postType === 'page';
    }), withSpokenMessages)(BuilderTemplate);
    /***/
  },

  /***/
  "./src/js/gutenberg/extensions/plugins/builder-template/index.js":
  /*!***********************************************************************!*\
    !*** ./src/js/gutenberg/extensions/plugins/builder-template/index.js ***!
    \***********************************************************************/

  /*! exports provided: default */

  /***/
  function srcJsGutenbergExtensionsPluginsBuilderTemplateIndexJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _components_controls__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./components/controls */
    "./src/js/gutenberg/extensions/plugins/builder-template/components/controls.js");
    /**
     * Internal dependencies
     */

    /* harmony default export */


    __webpack_exports__["default"] = {
      name: 'wca-builder-template',
      render: _components_controls__WEBPACK_IMPORTED_MODULE_0__["default"]
    };
    /***/
  },

  /***/
  "./src/js/gutenberg/extensions/plugins/clear-formatting/components/controls.js":
  /*!*************************************************************************************!*\
    !*** ./src/js/gutenberg/extensions/plugins/clear-formatting/components/controls.js ***!
    \*************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcJsGutenbergExtensionsPluginsClearFormattingComponentsControlsJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);

    function _typeof(obj) {
      if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
        _typeof = function _typeof(obj) {
          return _typeof2(obj);
        };
      } else {
        _typeof = function _typeof(obj) {
          return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
        };
      }

      return _typeof(obj);
    }

    function ownKeys(object, enumerableOnly) {
      var keys = Object.keys(object);

      if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) symbols = symbols.filter(function (sym) {
          return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
        keys.push.apply(keys, symbols);
      }

      return keys;
    }

    function _objectSpread(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i] != null ? arguments[i] : {};

        if (i % 2) {
          ownKeys(Object(source), true).forEach(function (key) {
            _defineProperty(target, key, source[key]);
          });
        } else if (Object.getOwnPropertyDescriptors) {
          Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        } else {
          ownKeys(Object(source)).forEach(function (key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
          });
        }
      }

      return target;
    }

    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, {
          value: value,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        obj[key] = value;
      }

      return obj;
    }

    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }

    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps) _defineProperties(Constructor.prototype, protoProps);
      if (staticProps) _defineProperties(Constructor, staticProps);
      return Constructor;
    }

    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }

      return _assertThisInitialized(self);
    }

    function _assertThisInitialized(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }

      return self;
    }

    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
      };
      return _getPrototypeOf(o);
    }

    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
      }

      subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
          value: subClass,
          writable: true,
          configurable: true
        }
      });
      if (superClass) _setPrototypeOf(subClass, superClass);
    }

    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
      };

      return _setPrototypeOf(o, p);
    }
    /**
     * External dependencies
     */


    var _lodash = lodash,
        get = _lodash.get;
    /**
     * WordPress dependencies
     */

    var __ = wp.i18n.__;
    var _wp$data = wp.data,
        select = _wp$data.select,
        withSelect = _wp$data.withSelect,
        withDispatch = _wp$data.withDispatch;
    var Component = wp.element.Component;
    var withSpokenMessages = wp.components.withSpokenMessages;
    var PluginBlockSettingsMenuItem = wp.editPost.PluginBlockSettingsMenuItem;
    var _wp$compose = wp.compose,
        compose = _wp$compose.compose,
        ifCondition = _wp$compose.ifCondition;
    var _wp$richText = wp.richText,
        create = _wp$richText.create,
        toHTMLString = _wp$richText.toHTMLString;
    var allowedBlocks = ['core/paragraph', 'core/heading'];
    /**
     * Render plugin
     */

    var ClearBlockFormatting =
    /*#__PURE__*/
    function (_Component) {
      _inherits(ClearBlockFormatting, _Component);

      function ClearBlockFormatting() {
        _classCallCheck(this, ClearBlockFormatting);

        return _possibleConstructorReturn(this, _getPrototypeOf(ClearBlockFormatting).apply(this, arguments));
      }

      _createClass(ClearBlockFormatting, [{
        key: "render",
        value: function render() {
          var _this$props = this.props,
              blockId = _this$props.blockId,
              blockName = _this$props.blockName,
              blockContent = _this$props.blockContent,
              clearBlockFormatting = _this$props.clearBlockFormatting;
          var record = create({
            html: blockContent
          });
          return wp.element.createElement(PluginBlockSettingsMenuItem, {
            icon: "editor-removeformatting",
            label: __('Clear Block Formatting', 'wecodeart'),
            onClick: function onClick() {
              clearBlockFormatting(blockId, blockName, toHTMLString({
                value: _objectSpread({}, record, {
                  formats: Array(record.formats.length)
                })
              }));
            }
          });
        }
      }]);

      return ClearBlockFormatting;
    }(Component);
    /* harmony default export */


    __webpack_exports__["default"] = compose(withSelect(function () {
      var selectedBlock = select('core/block-editor').getSelectedBlock();

      if (!selectedBlock) {
        return {};
      }

      return {
        blockId: selectedBlock.clientId,
        blockName: selectedBlock.name,
        blockContent: get(selectedBlock, 'attributes.content'),
        isDisabled: false
      };
    }), withDispatch(function (dispatch) {
      var _dispatch = dispatch('core/block-editor'),
          updateBlockAttributes = _dispatch.updateBlockAttributes;

      return {
        clearBlockFormatting: function clearBlockFormatting(blockId, blockName, blockContent) {
          updateBlockAttributes(blockId, {
            content: blockContent
          });
        }
      };
    }), ifCondition(function (props) {
      return !props.isDisabled && allowedBlocks.includes(props.blockName);
    }), withSpokenMessages)(ClearBlockFormatting);
    /***/
  },

  /***/
  "./src/js/gutenberg/extensions/plugins/clear-formatting/index.js":
  /*!***********************************************************************!*\
    !*** ./src/js/gutenberg/extensions/plugins/clear-formatting/index.js ***!
    \***********************************************************************/

  /*! exports provided: default */

  /***/
  function srcJsGutenbergExtensionsPluginsClearFormattingIndexJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _components_controls__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./components/controls */
    "./src/js/gutenberg/extensions/plugins/clear-formatting/components/controls.js");
    /**
     * Internal dependencies
     */

    /* harmony default export */


    __webpack_exports__["default"] = {
      name: 'wca-clear-formatting',
      render: _components_controls__WEBPACK_IMPORTED_MODULE_0__["default"]
    };
    /***/
  },

  /***/
  "./src/js/gutenberg/extensions/plugins/code-editor/components/code-editor.js":
  /*!***********************************************************************************!*\
    !*** ./src/js/gutenberg/extensions/plugins/code-editor/components/code-editor.js ***!
    \***********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcJsGutenbergExtensionsPluginsCodeEditorComponentsCodeEditorJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);

    function _typeof(obj) {
      if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
        _typeof = function _typeof(obj) {
          return _typeof2(obj);
        };
      } else {
        _typeof = function _typeof(obj) {
          return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
        };
      }

      return _typeof(obj);
    }

    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }

    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps) _defineProperties(Constructor.prototype, protoProps);
      if (staticProps) _defineProperties(Constructor, staticProps);
      return Constructor;
    }

    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }

      return _assertThisInitialized(self);
    }

    function _assertThisInitialized(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }

      return self;
    }

    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
      };
      return _getPrototypeOf(o);
    }

    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
      }

      subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
          value: subClass,
          writable: true,
          configurable: true
        }
      });
      if (superClass) _setPrototypeOf(subClass, superClass);
    }

    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
      };

      return _setPrototypeOf(o, p);
    }
    /**
     * WordPress dependencies
     */


    var _wp$data = wp.data,
        withSelect = _wp$data.withSelect,
        dispatch = _wp$data.dispatch;
    var compose = wp.compose.compose;
    var parse = wp.blocks.parse;
    var Component = wp.element.Component;
    var withSpokenMessages = wp.components.withSpokenMessages;
    /**
     * Render plugin
     */

    var CodeEditor =
    /*#__PURE__*/
    function (_Component) {
      _inherits(CodeEditor, _Component);

      function CodeEditor() {
        var _this;

        _classCallCheck(this, CodeEditor);

        _this = _possibleConstructorReturn(this, _getPrototypeOf(CodeEditor).apply(this, arguments)); // this.addCodeMirror = this.addCodeMirror.bind( this );

        _this.state = {
          isLoaded: false
        };
        return _this;
      }

      _createClass(CodeEditor, [{
        key: "componentDidMount",
        value: function componentDidMount() {
          this.addCodeMirror();
        }
      }, {
        key: "componentDidUpdate",
        value: function componentDidUpdate() {
          this.addCodeMirror();
        }
      }, {
        key: "addCodeMirror",
        value: function addCodeMirror() {
          var _this$props = this.props,
              isDisabled = _this$props.isDisabled,
              editorMode = _this$props.editorMode;

          if (isDisabled) {
            return null;
          }

          if (editorMode === 'text' && !this.state.isLoaded) {
            var editorSettings = wp.codeEditor.defaultSettings ? _.clone(wp.codeEditor.defaultSettings) : {};
            document.body.classList.add('wca-editor-loaded');
            editorSettings.codemirror = _.extend({}, editorSettings.codemirror, {
              mode: 'text/html',
              lineNumbers: true,
              indentUnit: 2,
              tabSize: 2,
              height: 'auto',
              lineWrapping: true,
              scrollbarStyle: 'null'
            });
            var textEditor = document.querySelector('.editor-post-text-editor');
            var checkChanges = wp.codeEditor.initialize(textEditor, editorSettings);
            checkChanges.codemirror.on('change', function (params) {
              var content = params.getValue();
              textEditor.innerHTML = content;
              dispatch('core/editor').editPost({
                content: content
              });
            });
            checkChanges.codemirror.on('blur', function (params) {
              var content = params.getValue();
              var blocks = parse(content);
              dispatch('core/editor').resetEditorBlocks(blocks);
            });
            this.setState({
              isLoaded: true
            });
          } else if (editorMode === 'visual' && this.state.isLoaded) {
            this.setState({
              isLoaded: false
            });
          }
        }
      }, {
        key: "render",
        value: function render() {
          return null;
        }
      }]);

      return CodeEditor;
    }(Component);
    /* harmony default export */


    __webpack_exports__["default"] = compose([withSelect(function (select) {
      return {
        readyState: document.readyState,
        isDisabled: false,
        editorMode: select('core/edit-post').getEditorMode()
      };
    }), withSpokenMessages])(CodeEditor);
    /***/
  },

  /***/
  "./src/js/gutenberg/extensions/plugins/code-editor/index.js":
  /*!******************************************************************!*\
    !*** ./src/js/gutenberg/extensions/plugins/code-editor/index.js ***!
    \******************************************************************/

  /*! exports provided: default */

  /***/
  function srcJsGutenbergExtensionsPluginsCodeEditorIndexJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _components_code_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./components/code-editor */
    "./src/js/gutenberg/extensions/plugins/code-editor/components/code-editor.js");
    /**
     * Internal dependencies
     */

    /* harmony default export */


    __webpack_exports__["default"] = {
      name: 'wca-code-editor',
      render: _components_code_editor__WEBPACK_IMPORTED_MODULE_0__["default"]
    };
    /***/
  },

  /***/
  "./src/js/gutenberg/extensions/plugins/disable-title/components/controls.js":
  /*!**********************************************************************************!*\
    !*** ./src/js/gutenberg/extensions/plugins/disable-title/components/controls.js ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcJsGutenbergExtensionsPluginsDisableTitleComponentsControlsJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);

    function _typeof(obj) {
      if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
        _typeof = function _typeof(obj) {
          return _typeof2(obj);
        };
      } else {
        _typeof = function _typeof(obj) {
          return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
        };
      }

      return _typeof(obj);
    }

    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }

    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps) _defineProperties(Constructor.prototype, protoProps);
      if (staticProps) _defineProperties(Constructor, staticProps);
      return Constructor;
    }

    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }

      return _assertThisInitialized(self);
    }

    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
      };
      return _getPrototypeOf(o);
    }

    function _assertThisInitialized(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }

      return self;
    }

    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
      }

      subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
          value: subClass,
          writable: true,
          configurable: true
        }
      });
      if (superClass) _setPrototypeOf(subClass, superClass);
    }

    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
      };

      return _setPrototypeOf(o, p);
    }
    /**
     * WordPress dependencies
     */


    var _wp$i18n = wp.i18n,
        __ = _wp$i18n.__,
        sprintf = _wp$i18n.sprintf;
    var Component = wp.element.Component;
    var compose = wp.compose.compose;
    var PluginPostStatusInfo = wp.editPost.PluginPostStatusInfo;
    var _wp$data = wp.data,
        select = _wp$data.select,
        withSelect = _wp$data.withSelect,
        withDispatch = _wp$data.withDispatch;
    var _wp$components = wp.components,
        withSpokenMessages = _wp$components.withSpokenMessages,
        CheckboxControl = _wp$components.CheckboxControl;

    var DisableTitle =
    /*#__PURE__*/
    function (_Component) {
      _inherits(DisableTitle, _Component);

      function DisableTitle() {
        var _this;

        _classCallCheck(this, DisableTitle);

        _this = _possibleConstructorReturn(this, _getPrototypeOf(DisableTitle).apply(this, arguments));
        _this.initialize = _this.initialize.bind(_assertThisInitialized(_this));
        return _this;
      }

      _createClass(DisableTitle, [{
        key: "componentDidMount",
        value: function componentDidMount() {
          this.initialize();
        }
      }, {
        key: "componentDidUpdate",
        value: function componentDidUpdate() {
          this.initialize();
        }
      }, {
        key: "initialize",
        value: function initialize() {
          var _this$props$postMeta = this.props.postMeta,
              postMeta = _this$props$postMeta === void 0 ? {} : _this$props$postMeta;
          var titleBlock = document.querySelector('.editor-post-title__block');

          if (titleBlock) {
            var value = postMeta._wca_title_hidden;
            var isHidden = typeof postMeta !== 'undefined' && typeof value !== 'undefined' ? value : false;
            var bodyClass = isHidden ? 'wca-title-hidden' : 'wca-title-visible';

            if (isHidden) {
              document.body.classList.remove('wca-title-visible');
            } else {
              document.body.classList.remove('wca-title-hidden');
            }

            document.body.classList.add(bodyClass);
          }
        }
      }, {
        key: "render",
        value: function render() {
          var _this$props = this.props,
              onToggle = _this$props.onToggle,
              _this$props$postMeta2 = _this$props.postMeta,
              postMeta = _this$props$postMeta2 === void 0 ? {} : _this$props$postMeta2,
              postType = _this$props.postType;

          if (['wp_block'].includes(postType)) {
            return false;
          }

          var value = postMeta._wca_title_hidden;
          var isHidden = typeof postMeta !== 'undefined' && typeof value !== 'undefined' ? value : false;
          var help = isHidden ? __('hidden', 'wecodeart') : __('shown', 'wecodeart');
          help = sprintf(__('Title is %s.', 'wecodeart'), help);
          return wp.element.createElement(PluginPostStatusInfo, null, wp.element.createElement(CheckboxControl, {
            className: "wca-post-status-label",
            label: sprintf(__('Hide %s title on single template?', 'wecodeart'), postType),
            checked: isHidden,
            onChange: onToggle,
            help: help
          }));
        }
      }]);

      return DisableTitle;
    }(Component);
    /* harmony default export */


    __webpack_exports__["default"] = compose(withSelect(function () {
      return {
        postType: select('core/editor').getEditedPostAttribute('type'),
        postMeta: select('core/editor').getEditedPostAttribute('meta')
      };
    }), withDispatch(function (dispatch, ownProps) {
      var metaValue;

      if (typeof ownProps.postMeta !== 'undefined' && typeof ownProps.postMeta._wca_title_hidden !== 'undefined') {
        metaValue = ownProps.postMeta._wca_title_hidden;
      }

      return {
        onToggle: function onToggle() {
          dispatch('core/editor').editPost({
            meta: {
              _wca_title_hidden: !metaValue
            }
          });
        }
      };
    }), withSpokenMessages)(DisableTitle);
    /***/
  },

  /***/
  "./src/js/gutenberg/extensions/plugins/disable-title/index.js":
  /*!********************************************************************!*\
    !*** ./src/js/gutenberg/extensions/plugins/disable-title/index.js ***!
    \********************************************************************/

  /*! exports provided: default */

  /***/
  function srcJsGutenbergExtensionsPluginsDisableTitleIndexJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _components_controls__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./components/controls */
    "./src/js/gutenberg/extensions/plugins/disable-title/components/controls.js");
    /**
     * Internal dependencies
     */

    /* harmony default export */


    __webpack_exports__["default"] = {
      name: 'wca-disable-title',
      render: _components_controls__WEBPACK_IMPORTED_MODULE_0__["default"]
    };
    /***/
  },

  /***/
  "./src/js/gutenberg/extensions/plugins/heading-label/components/controls.js":
  /*!**********************************************************************************!*\
    !*** ./src/js/gutenberg/extensions/plugins/heading-label/components/controls.js ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcJsGutenbergExtensionsPluginsHeadingLabelComponentsControlsJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);

    function _typeof(obj) {
      if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
        _typeof = function _typeof(obj) {
          return _typeof2(obj);
        };
      } else {
        _typeof = function _typeof(obj) {
          return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
        };
      }

      return _typeof(obj);
    }

    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }

    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps) _defineProperties(Constructor.prototype, protoProps);
      if (staticProps) _defineProperties(Constructor, staticProps);
      return Constructor;
    }

    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }

      return _assertThisInitialized(self);
    }

    function _assertThisInitialized(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }

      return self;
    }

    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
      };
      return _getPrototypeOf(o);
    }

    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
      }

      subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
          value: subClass,
          writable: true,
          configurable: true
        }
      });
      if (superClass) _setPrototypeOf(subClass, superClass);
    }

    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
      };

      return _setPrototypeOf(o, p);
    }
    /**
     * WordPress dependencies
     */


    var withSelect = wp.data.withSelect;
    var compose = wp.compose.compose;
    var Component = wp.element.Component;
    var withSpokenMessages = wp.components.withSpokenMessages;
    /**
     * Render plugin
     */

    var HeadingLabel =
    /*#__PURE__*/
    function (_Component) {
      _inherits(HeadingLabel, _Component);

      function HeadingLabel() {
        _classCallCheck(this, HeadingLabel);

        return _possibleConstructorReturn(this, _getPrototypeOf(HeadingLabel).apply(this, arguments));
      }

      _createClass(HeadingLabel, [{
        key: "componentDidMount",
        value: function componentDidMount() {
          this.sync();
        }
      }, {
        key: "componentDidUpdate",
        value: function componentDidUpdate() {
          this.sync();
        }
      }, {
        key: "sync",
        value: function sync() {
          var isDisabled = this.props.isDisabled;

          if (!isDisabled) {
            document.body.classList.add('is-wca-heading-label-on');
          } else {
            document.body.classList.remove('is-wca-heading-label-on');
          }
        }
      }, {
        key: "render",
        value: function render() {
          return null;
        }
      }]);

      return HeadingLabel;
    }(Component);
    /* harmony default export */


    __webpack_exports__["default"] = compose([withSelect(function (select) {
      return {
        isDisabled: false
      };
    }), withSpokenMessages])(HeadingLabel);
    /***/
  },

  /***/
  "./src/js/gutenberg/extensions/plugins/heading-label/index.js":
  /*!********************************************************************!*\
    !*** ./src/js/gutenberg/extensions/plugins/heading-label/index.js ***!
    \********************************************************************/

  /*! exports provided: default */

  /***/
  function srcJsGutenbergExtensionsPluginsHeadingLabelIndexJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _components_controls__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./components/controls */
    "./src/js/gutenberg/extensions/plugins/heading-label/components/controls.js");
    /**
     * Internal dependencies
     */

    /* harmony default export */


    __webpack_exports__["default"] = {
      name: 'wca-heading-label',
      render: _components_controls__WEBPACK_IMPORTED_MODULE_0__["default"]
    };
    /***/
  },

  /***/
  "./src/js/gutenberg/extensions/plugins/index.js":
  /*!******************************************************!*\
    !*** ./src/js/gutenberg/extensions/plugins/index.js ***!
    \******************************************************/

  /*! exports provided: default */

  /***/
  function srcJsGutenbergExtensionsPluginsIndexJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "default", function () {
      return registerWCAPlugins;
    });
    /* harmony import */


    var _markdown__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./markdown */
    "./src/js/gutenberg/extensions/plugins/markdown/index.js");
    /* harmony import */


    var _code_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./code-editor */
    "./src/js/gutenberg/extensions/plugins/code-editor/index.js");
    /* harmony import */


    var _disable_title__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./disable-title */
    "./src/js/gutenberg/extensions/plugins/disable-title/index.js");
    /* harmony import */


    var _heading_label__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./heading-label */
    "./src/js/gutenberg/extensions/plugins/heading-label/index.js");
    /* harmony import */


    var _clear_formatting__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./clear-formatting */
    "./src/js/gutenberg/extensions/plugins/clear-formatting/index.js");
    /* harmony import */


    var _builder_template__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./builder-template */
    "./src/js/gutenberg/extensions/plugins/builder-template/index.js");
    /**
     * Internal dependencies
     */


    var registerPlugin = wp.plugins.registerPlugin;

    function registerWCAPlugins() {
      [_markdown__WEBPACK_IMPORTED_MODULE_0__["default"], _code_editor__WEBPACK_IMPORTED_MODULE_1__["default"], _disable_title__WEBPACK_IMPORTED_MODULE_2__["default"], _heading_label__WEBPACK_IMPORTED_MODULE_3__["default"], _clear_formatting__WEBPACK_IMPORTED_MODULE_4__["default"], _builder_template__WEBPACK_IMPORTED_MODULE_5__["default"]].forEach(function (block) {
        if (!block) return;
        var name = block.name,
            render = block.render;
        registerPlugin(name, {
          icon: false,
          render: render
        });
      });
    }

    registerWCAPlugins();
    /***/
  },

  /***/
  "./src/js/gutenberg/extensions/plugins/markdown/components/config.js":
  /*!***************************************************************************!*\
    !*** ./src/js/gutenberg/extensions/plugins/markdown/components/config.js ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function srcJsGutenbergExtensionsPluginsMarkdownComponentsConfigJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /**
     * WordPress dependencies
     */


    var __ = wp.i18n.__;
    var markdownShortcuts = {
      title: __('Markdown Formatting', 'wecodeart'),
      shortcuts: [{
        keyCombination: ['##', 'SPACE'],
        description: __('Large header (h2)', 'wecodeart')
      }, {
        keyCombination: ['###', 'SPACE'],
        description: __('Medium header (h3)', 'wecodeart')
      }, {
        keyCombination: ['####', 'SPACE'],
        description: __('Small header (h4)', 'wecodeart')
      }, {
        keyCombination: ['1.', 'SPACE'],
        description: __('Numbered list', 'wecodeart')
      }, {
        keyCombination: ['*', 'SPACE'],
        description: __('Bulleted list', 'wecodeart')
      }, {
        keyCombination: ['>', 'SPACE'],
        description: __('Blockquote', 'wecodeart')
      }, {
        keyCombination: ['_italic_'],
        description: __('Italic', 'wecodeart')
      }, {
        keyCombination: ['*bold*'],
        description: __('Bold', 'wecodeart')
      }, {
        keyCombination: ['~Strikethrough~'],
        description: __('Strikethrough', 'wecodeart')
      }, {
        keyCombination: ['`code`'],
        description: __('Code', 'wecodeart')
      }]
    };
    /* harmony default export */

    __webpack_exports__["default"] = [markdownShortcuts];
    /***/
  },

  /***/
  "./src/js/gutenberg/extensions/plugins/markdown/components/menu.js":
  /*!*************************************************************************!*\
    !*** ./src/js/gutenberg/extensions/plugins/markdown/components/menu.js ***!
    \*************************************************************************/

  /*! exports provided: default */

  /***/
  function srcJsGutenbergExtensionsPluginsMarkdownComponentsMenuJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./config */
    "./src/js/gutenberg/extensions/plugins/markdown/components/config.js");

    function _typeof(obj) {
      if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
        _typeof = function _typeof(obj) {
          return _typeof2(obj);
        };
      } else {
        _typeof = function _typeof(obj) {
          return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
        };
      }

      return _typeof(obj);
    }

    function _extends() {
      _extends = Object.assign || function (target) {
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

    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }

    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps) _defineProperties(Constructor.prototype, protoProps);
      if (staticProps) _defineProperties(Constructor, staticProps);
      return Constructor;
    }

    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }

      return _assertThisInitialized(self);
    }

    function _assertThisInitialized(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }

      return self;
    }

    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
      };
      return _getPrototypeOf(o);
    }

    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
      }

      subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
          value: subClass,
          writable: true,
          configurable: true
        }
      });
      if (superClass) _setPrototypeOf(subClass, superClass);
    }

    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
      };

      return _setPrototypeOf(o, p);
    }
    /**
     * External dependencies
     */
    //import { castArray } from 'lodash';


    var _lodash = lodash,
        castArray = _lodash.castArray;
    /**
     * Internal dependencies
     */

    /**
     * WordPress dependencies
     */

    var __ = wp.i18n.__;
    var _wp$element = wp.element,
        Fragment = _wp$element.Fragment,
        Component = _wp$element.Component;
    var PluginMoreMenuItem = wp.editPost.PluginMoreMenuItem;
    var _wp$compose = wp.compose,
        compose = _wp$compose.compose,
        ifCondition = _wp$compose.ifCondition;
    var _wp$data = wp.data,
        select = _wp$data.select,
        withSelect = _wp$data.withSelect;
    var _wp$components = wp.components,
        withSpokenMessages = _wp$components.withSpokenMessages,
        Modal = _wp$components.Modal;
    /**
     * Render plugin
     */

    var MarkdownFormatting =
    /*#__PURE__*/
    function (_Component) {
      _inherits(MarkdownFormatting, _Component);

      function MarkdownFormatting() {
        var _this;

        _classCallCheck(this, MarkdownFormatting);

        _this = _possibleConstructorReturn(this, _getPrototypeOf(MarkdownFormatting).apply(this, arguments));
        _this.state = {
          isOpen: false
        };
        return _this;
      }

      _createClass(MarkdownFormatting, [{
        key: "render",
        value: function render() {
          var _this2 = this;

          var closeModal = function closeModal() {
            return _this2.setState({
              isOpen: false
            });
          };

          var mapKeyCombination = function mapKeyCombination(keyCombination) {
            return keyCombination.map(function (character, index) {
              if (character === '+') {
                return wp.element.createElement(Fragment, {
                  key: index
                }, character);
              }

              return wp.element.createElement("kbd", {
                key: index,
                className: "edit-post-keyboard-shortcut-help__shortcut-key"
              }, character);
            });
          };

          var ShortcutList = function ShortcutList(_ref) {
            var shortcuts = _ref.shortcuts;
            return wp.element.createElement("dl", {
              className: "edit-post-keyboard-shortcut-help__shortcut-list"
            }, shortcuts.map(function (_ref2, index) {
              var keyCombination = _ref2.keyCombination,
                  description = _ref2.description,
                  ariaLabel = _ref2.ariaLabel;
              return wp.element.createElement("div", {
                className: "edit-post-keyboard-shortcut-help__shortcut",
                key: index
              }, wp.element.createElement("div", {
                className: "edit-post-keyboard-shortcut-help__shortcut-description"
              }, description), wp.element.createElement("div", {
                className: "edit-post-keyboard-shortcut-help__shortcut-term"
              }, wp.element.createElement("kbd", {
                className: "edit-post-keyboard-shortcut-help__shortcut-key-combination",
                "aria-label": ariaLabel
              }, mapKeyCombination(castArray(keyCombination)))));
            }));
          };

          var ShortcutSection = function ShortcutSection(_ref3) {
            var title = _ref3.title,
                shortcuts = _ref3.shortcuts;
            return wp.element.createElement("section", {
              className: "edit-post-keyboard-shortcut-help__section"
            }, wp.element.createElement("h2", {
              className: "edit-post-keyboard-shortcut-help__section-title"
            }, title), wp.element.createElement(ShortcutList, {
              shortcuts: shortcuts
            }));
          };

          return wp.element.createElement(Fragment, null, wp.element.createElement(PluginMoreMenuItem, {
            icon: null,
            role: "menuitemcheckbox",
            onClick: function onClick() {
              _this2.setState({
                isOpen: true
              });
            }
          }, __('Markdown Formatting', 'wecodeart')), this.state.isOpen ? wp.element.createElement(Modal, {
            title: __('Keyboard Shortcuts', 'wecodeart'),
            onRequestClose: function onRequestClose() {
              return closeModal();
            },
            closeLabel: __('Close', 'wecodeart'),
            icon: null,
            className: "wca-modal-component components-modal--wca-markdown"
          }, _config__WEBPACK_IMPORTED_MODULE_0__["default"].map(function (config, index) {
            return wp.element.createElement(ShortcutSection, _extends({
              key: index
            }, config));
          })) : null);
        }
      }]);

      return MarkdownFormatting;
    }(Component);
    /* harmony default export */


    __webpack_exports__["default"] = compose(withSelect(function () {
      return {
        isDisabled: false
      };
    }), ifCondition(function (props) {
      return !props.isDisabled;
    }), withSpokenMessages)(MarkdownFormatting);
    /***/
  },

  /***/
  "./src/js/gutenberg/extensions/plugins/markdown/index.js":
  /*!***************************************************************!*\
    !*** ./src/js/gutenberg/extensions/plugins/markdown/index.js ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function srcJsGutenbergExtensionsPluginsMarkdownIndexJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _components_menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./components/menu */
    "./src/js/gutenberg/extensions/plugins/markdown/components/menu.js");
    /**
     * Internal dependencies
     */

    /* harmony default export */


    __webpack_exports__["default"] = {
      name: 'wca-markdown-formatting',
      render: _components_menu__WEBPACK_IMPORTED_MODULE_0__["default"]
    };
    /***/
  },

  /***/
  "./src/js/gutenberg/helpers/index.js":
  /*!*******************************************!*\
    !*** ./src/js/gutenberg/helpers/index.js ***!
    \*******************************************/

  /*! exports provided: overlayToClass, pickRelevantMediaFiles, ALLOWED_GALLERY_MEDIA_TYPES */

  /***/
  function srcJsGutenbergHelpersIndexJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "overlayToClass", function () {
      return overlayToClass;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "pickRelevantMediaFiles", function () {
      return pickRelevantMediaFiles;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ALLOWED_GALLERY_MEDIA_TYPES", function () {
      return ALLOWED_GALLERY_MEDIA_TYPES;
    });
    /**
     * External dependencies
     */


    var _lodash = lodash,
        pick = _lodash.pick,
        get = _lodash.get,
        findIndex = _lodash.findIndex; // Set dim ratio.

    function overlayToClass(ratio) {
      return ratio === 0 || ratio === 50 ? null : 'has-background-overlay-' + 10 * Math.round(ratio / 10);
    } // Pick image media attributes.


    var pickRelevantMediaFiles = function pickRelevantMediaFiles(image, images) {
      var imageProps = pick(image, ['alt', 'id', 'link', 'caption', 'imgLink']);
      imageProps.url = get(image, ['sizes', 'large', 'url']) || get(image, ['media_details', 'sizes', 'large', 'source_url']) || image.url;
      var imgKey = findIndex(images, function (img) {
        return img.url === imageProps.url;
      });
      imageProps.imgLink = imgKey >= 0 ? images[imgKey].imgLink : '';
      return imageProps;
    }; // Define accepted media for gallery blocks.


    var ALLOWED_GALLERY_MEDIA_TYPES = ['image'];
    /***/
  }
  /******/

});
//# sourceMappingURL=editor.js.map
