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


    var _extensions_block_panel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./extensions/block-panel */
    "./src/js/gutenberg/extensions/block-panel/index.js");
    /* harmony import */


    var _extensions_advanced__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./extensions/advanced */
    "./src/js/gutenberg/extensions/advanced/index.js");
    /* harmony import */


    var _extensions_plugins__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./extensions/plugins */
    "./src/js/gutenberg/extensions/plugins/index.js");
    /* harmony import */


    var _extensions_formats___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./extensions/formats/ */
    "./src/js/gutenberg/extensions/formats/index.js");

    var registerBlockType = wp.blocks.registerBlockType; // Attributes
    // Block Panels
    // Plugins
    // Formats

    function registerWCABlocks() {
      [].forEach(function (block) {
        if (!block) return;
        var name = block.name,
            settings = block.settings;
        registerBlockType(name, settings);
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
    var enhance = compose(withState({
      customClassNames: []
    }), withSelect(function (selectFn, block) {
      var selectedBlock = selectFn('core/block-editor').getSelectedBlock();
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

      return {
        suggestions: selectFn('core/editor').getEditorSettings().wecodeart.customClasses
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
            setState = props.setState;

        if (hasCustomClassName && props.isSelected) {
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

    function applyFilters() {
      removeFilter('editor.BlockEdit', 'core/editor/custom-class-name/with-inspector-control');
      addFilter('editor.BlockEdit', 'wecodeart/editor/custom-class-name/with-inspector-control', withInspectorControl);
    }

    applyFilters();
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


    var _visibility__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./visibility */
    "./src/js/gutenberg/extensions/advanced/visibility/index.js");
    /* harmony import */


    var _with_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./with-css */
    "./src/js/gutenberg/extensions/advanced/with-css/index.js");
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


    var _components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./components */
    "./src/js/gutenberg/extensions/advanced/visibility/components/index.js");

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
     * WordPress Dependencies
     */


    var __ = wp.i18n.__;
    var addFilter = wp.hooks.addFilter;
    var Fragment = wp.element.Fragment;
    var _wp$data = wp.data,
        withSelect = _wp$data.withSelect,
        select = _wp$data.select;
    var InspectorControls = wp.blockEditor.InspectorControls;
    var _wp$compose = wp.compose,
        compose = _wp$compose.compose,
        createHigherOrderComponent = _wp$compose.createHigherOrderComponent;
    var PanelBody = wp.components.PanelBody;
    var restrictedBlocks = ['core/block', 'core/freeform', 'core/shortcode', 'core/template', 'core/nextpage'];
    var enhance = compose(withSelect(function () {
      return {};
    }));
    /**
     * Add custom CoBlocks attributes to selected blocks
     *
     * @param {Function} BlockEdit Original component.
     * @return {string} Wrapped component.
     */

    var withAdvancedControls = createHigherOrderComponent(function (BlockEdit) {
      return enhance(function (_ref) {
        var props = _extends({}, _ref);

        var name = props.name,
            isSelected = props.isSelected,
            isDisabledDevices = props.isDisabledDevices;
        return wp.element.createElement(Fragment, null, wp.element.createElement(BlockEdit, props), isSelected && !isDisabledDevices && !restrictedBlocks.includes(name) && wp.element.createElement(InspectorControls, null, wp.element.createElement(PanelBody, {
          title: __('Visibility', 'wecodeart'),
          initialOpen: false,
          className: "wecodeart-panel"
        }, wp.element.createElement("p", null, wp.element.createElement("small", null, __('Attention: The display settings will only take effect once you are on the live page, and not while you\'re editing in Gutenberg.', 'wecodeart'))), Object(_components__WEBPACK_IMPORTED_MODULE_0__["default"])(props))));
      });
    }, 'withAdvancedControls');
    addFilter('editor.BlockEdit', 'wecodeart/editor/visibility/with-advanced-controls', withAdvancedControls);
    /***/
  },

  /***/
  "./src/js/gutenberg/extensions/advanced/with-css/components/editor.js":
  /*!****************************************************************************!*\
    !*** ./src/js/gutenberg/extensions/advanced/with-css/components/editor.js ***!
    \****************************************************************************/

  /*! exports provided: default */

  /***/
  function srcJsGutenbergExtensionsAdvancedWithCssComponentsEditorJs(module, __webpack_exports__, __webpack_require__) {
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
  "./src/js/gutenberg/extensions/advanced/with-css/index.js":
  /*!****************************************************************!*\
    !*** ./src/js/gutenberg/extensions/advanced/with-css/index.js ***!
    \****************************************************************/

  /*! no exports provided */

  /***/
  function srcJsGutenbergExtensionsAdvancedWithCssIndexJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _components_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./components/editor */
    "./src/js/gutenberg/extensions/advanced/with-css/components/editor.js");
    /* harmony import */


    var _inject_css_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./inject-css.js */
    "./src/js/gutenberg/extensions/advanced/with-css/inject-css.js");
    /* harmony import */


    var _inject_css_js__WEBPACK_IMPORTED_MODULE_1___default =
    /*#__PURE__*/
    __webpack_require__.n(_inject_css_js__WEBPACK_IMPORTED_MODULE_1__);
    /**
     * WordPress dependencies.
     */


    var _lodash = lodash,
        assign = _lodash.assign;
    var __ = wp.i18n.__;
    var hasBlockSupport = wp.blocks.hasBlockSupport;
    var createHigherOrderComponent = wp.compose.createHigherOrderComponent;

    var _ref = wp.blockEditor || wp.editor,
        InspectorAdvancedControls = _ref.InspectorAdvancedControls;

    var Fragment = wp.element.Fragment;
    var addFilter = wp.hooks.addFilter;
    /**
     * Internal dependencies.
     */

    var addAttribute = function addAttribute(settings) {
      if (hasBlockSupport(settings, 'customClassName', true)) {
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

    var withInspectorControl = createHigherOrderComponent(function (BlockEdit) {
      return function (props) {
        var hasCustomClassName = hasBlockSupport(props.name, 'customClassName', true);

        if (hasCustomClassName && props.isSelected) {
          return wp.element.createElement(Fragment, null, wp.element.createElement(BlockEdit, props), wp.element.createElement(InspectorAdvancedControls, null, wp.element.createElement(_components_editor__WEBPACK_IMPORTED_MODULE_0__["default"], {
            clientId: props.clientId,
            setAttributes: props.setAttributes,
            attributes: props.attributes
          })));
        }

        return wp.element.createElement(BlockEdit, props);
      };
    }, 'withInspectorControl');
    addFilter('blocks.registerBlockType', 'wecodeart/editor/advanced/custom-css/add-attribute', addAttribute);
    addFilter('editor.BlockEdit', 'wecodeart/editor/advanced/custom-css/with-inspector-control', withInspectorControl);
    /***/
  },

  /***/
  "./src/js/gutenberg/extensions/advanced/with-css/inject-css.js":
  /*!*********************************************************************!*\
    !*** ./src/js/gutenberg/extensions/advanced/with-css/inject-css.js ***!
    \*********************************************************************/

  /*! no static exports found */

  /***/
  function srcJsGutenbergExtensionsAdvancedWithCssInjectCssJs(module, exports) {
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
  "./src/js/gutenberg/extensions/attributes/index.js":
  /*!*********************************************************!*\
    !*** ./src/js/gutenberg/extensions/attributes/index.js ***!
    \*********************************************************/

  /*! no exports provided */

  /***/
  function srcJsGutenbergExtensionsAttributesIndexJs(module, __webpack_exports__, __webpack_require__) {
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
          ownKeys(source, true).forEach(function (key) {
            _defineProperty(target, key, source[key]);
          });
        } else if (Object.getOwnPropertyDescriptors) {
          Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        } else {
          ownKeys(source).forEach(function (key) {
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
     * External dependencies
     */

    /**
     * WordPress Dependencies
     */


    var addFilter = wp.hooks.addFilter;
    var Fragment = wp.element.Fragment;
    var createHigherOrderComponent = wp.compose.createHigherOrderComponent;
    var hasBlockSupport = wp.blocks.hasBlockSupport;
    var restrictedBlocks = ['core/freeform', 'core/shortcode', 'core/nextpage'];
    var blocksWithFullScreen = ['core/image', 'core/cover', 'core/group', 'core/columns', 'core/media-text'];
    var blocksWithFontSize = ['core/list'];
    var blocksWithAnchor = ['core/spacer', 'core/separator'];
    /**
     * Filters registered block settings, extending attributes with anchor using ID
     * of the first node.
     *
     * @param 	{Object} settings Original block settings.
     *
     * @return 	{Object} Filtered block settings.
     */

    function addAttributes(settings) {
      if (typeof settings.attributes !== 'undefined' && !restrictedBlocks.includes(settings.name)) {
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
        }); // Add vertical full screen support.

        if (blocksWithFullScreen.includes(settings.name)) {
          if (!settings.supports) {
            settings.supports = {};
          }

          settings.supports = Object.assign(settings.supports, {
            hasHeightFullScreen: true
          });
        }

        if (hasBlockSupport(settings, 'hasHeightFullScreen')) {
          if (typeof settings.attributes !== 'undefined') {
            if (!settings.attributes.isHeightFullScreen) {
              settings.attributes = Object.assign(settings.attributes, {
                isHeightFullScreen: {
                  type: 'boolean',
                  default: false
                }
              });
            }
          }
        } // Add custom font size picker on selected blocks.


        if (blocksWithFontSize.includes(settings.name)) {
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


        if (blocksWithAnchor.includes(settings.name)) {
          if (!settings.supports) {
            settings.supports = {};
          }

          settings.supports = Object.assign(settings.supports, {
            anchor: true
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
        var attributes = props.attributes;

        if (typeof attributes.wecodeart === 'undefined') {
          attributes.wecodeart = [];
        }

        return wp.element.createElement(Fragment, null, wp.element.createElement(BlockEdit, props));
      };
    }, 'withAttributes');
    /**
     * Override props assigned to save component to inject atttributes
     *
     * @param {Object} extraProps Additional props applied to save element.
     * @param {Object} blockType  Block type.
     * @param {Object} attributes Current block attributes.
     *
     * @return {Object} Filtered props applied to save element.
     */

    function applyExtraClass(extraProps, blockType, attributes) {
      var wecodeart = attributes.wecodeart,
          isHeightFullScreen = attributes.isHeightFullScreen;

      if (typeof wecodeart !== 'undefined' && !restrictedBlocks.includes(blockType.name)) {
        var classNames;

        if (typeof wecodeart.id !== 'undefined') {
          extraProps.className = classnames__WEBPACK_IMPORTED_MODULE_0___default()(extraProps.className, wecodeart.id);
        }

        if (typeof wecodeart.mobile !== 'undefined' && !wecodeart.mobile) {
          extraProps.className = classnames__WEBPACK_IMPORTED_MODULE_0___default()(extraProps.className, 'd-none d-md-block');
        }

        if (typeof wecodeart.tablet !== 'undefined' && !wecodeart.tablet) {
          classNames = extraProps.className.replace(' d-md-block', '');
          extraProps.className = classnames__WEBPACK_IMPORTED_MODULE_0___default()(classNames, 'd-md-none d-lg-block');
        }

        if (typeof wecodeart.desktop !== 'undefined' && !wecodeart.desktop) {
          classNames = extraProps.className.replace(' d-lg-block', '');
          extraProps.className = classnames__WEBPACK_IMPORTED_MODULE_0___default()(classNames, 'd-lg-none');
        }
      }

      if (hasBlockSupport(blockType.name, 'hasHeightFullScreen') && isHeightFullScreen) {
        extraProps.className = classnames__WEBPACK_IMPORTED_MODULE_0___default()(extraProps.className, 'h-screen');
      }

      return extraProps;
    }

    var addEditorBlockAttributes = createHigherOrderComponent(function (BlockListBlock) {
      return function (props) {
        var name = props.name,
            attributes = props.attributes;
        var isHeightFullScreen = attributes.isHeightFullScreen;
        var wrapperProps = props.wrapperProps;
        var customData = {};

        if (hasBlockSupport(name, 'hasHeightFullScreen') && isHeightFullScreen) {
          customData = Object.assign(customData, {
            'data-wecodeart-h-screen': 1
          });
        }

        wrapperProps = _objectSpread({}, wrapperProps, {}, customData);
        return wp.element.createElement(BlockListBlock, _extends({}, props, {
          wrapperProps: wrapperProps
        }));
      };
    }, 'addEditorBlockAttributes');
    addFilter('blocks.registerBlockType', 'wecodeart/custom/attributes', addAttributes);
    addFilter('editor.BlockEdit', 'wecodeart/attributes', withAttributes);
    addFilter('blocks.getSaveContent.extraProps', 'wecodeart/applyExtraClass', applyExtraClass);
    addFilter('editor.BlockListBlock', 'wecodeart/addEditorBlockAttributes', addEditorBlockAttributes);
    /***/
  },

  /***/
  "./src/js/gutenberg/extensions/block-panel/apply-style.js":
  /*!****************************************************************!*\
    !*** ./src/js/gutenberg/extensions/block-panel/apply-style.js ***!
    \****************************************************************/

  /*! exports provided: default */

  /***/
  function srcJsGutenbergExtensionsBlockPanelApplyStyleJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /**
     * External dependencies
     */


    var _lodash = lodash,
        find = _lodash.find;

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
    /* harmony default export */


    __webpack_exports__["default"] = applyStyle;
    /***/
  },

  /***/
  "./src/js/gutenberg/extensions/block-panel/index.js":
  /*!**********************************************************!*\
    !*** ./src/js/gutenberg/extensions/block-panel/index.js ***!
    \**********************************************************/

  /*! no exports provided */

  /***/
  function srcJsGutenbergExtensionsBlockPanelIndexJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _list_settings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./list-settings */
    "./src/js/gutenberg/extensions/block-panel/list-settings/index.js");
    /* harmony import */


    var _apply_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./apply-style */
    "./src/js/gutenberg/extensions/block-panel/apply-style.js");
    /* harmony import */


    var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! classnames */
    "./node_modules/classnames/index.js");
    /* harmony import */


    var classnames__WEBPACK_IMPORTED_MODULE_2___default =
    /*#__PURE__*/
    __webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);

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
          ownKeys(source, true).forEach(function (key) {
            _defineProperty(target, key, source[key]);
          });
        } else if (Object.getOwnPropertyDescriptors) {
          Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        } else {
          ownKeys(source).forEach(function (key) {
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
     * Internal dependencies
     */

    /**
     * External dependencies
     */

    /**
     * WordPress Dependencies
     */


    var addFilter = wp.hooks.addFilter;
    var Fragment = wp.element.Fragment;
    var withSelect = wp.data.withSelect;
    var _wp$compose = wp.compose,
        compose = _wp$compose.compose,
        createHigherOrderComponent = _wp$compose.createHigherOrderComponent;
    var blocksWithFontSize = ['core/list'];
    /**
     * Override the default block element to add	wrapper props.
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
        fontSizes: fontSizes,
        colors: colors,
        selected: select('core/block-editor').getSelectedBlock(),
        select: select
      };
    }));
    var withTextSettings = createHigherOrderComponent(function (BlockListBlock) {
      return enhance(function (_ref) {
        var select = _ref.select,
            props = _objectWithoutProperties(_ref, ["select"]);

        var wrapperProps = props.wrapperProps;
        var customData = {};
        var attributes = select('core/block-editor').getBlock(props.clientId).attributes;
        var blockName = select('core/block-editor').getBlockName(props.clientId);

        if (blocksWithFontSize.includes(blockName)) {
          var customFontSize = attributes.customFontSize,
              fontSize = attributes.fontSize;

          if (customFontSize || fontSize) {
            customData = Object.assign(customData, {
              'data-custom-fontsize': 1
            });
          }

          wrapperProps = _objectSpread({}, wrapperProps, {
            style: Object(_apply_style__WEBPACK_IMPORTED_MODULE_1__["default"])(attributes, blockName, props)
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
        return wp.element.createElement(Fragment, null, wp.element.createElement(BlockEdit, props), isSelected && blocksWithFontSize.includes(name) && wp.element.createElement(_list_settings__WEBPACK_IMPORTED_MODULE_0__["default"], props));
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
      if (blocksWithFontSize.includes(blockType.name)) {
        if (typeof extraProps.style !== 'undefined') {
          extraProps.style = Object.assign(extraProps.style, Object(_apply_style__WEBPACK_IMPORTED_MODULE_1__["default"])(attributes, blockType.name));
        } else {
          extraProps.style = Object(_apply_style__WEBPACK_IMPORTED_MODULE_1__["default"])(attributes, blockType.name);
        }

        var customFontSize = attributes.customFontSize,
            fontSize = attributes.fontSize,
            textColor = attributes.textColor;

        if (fontSize) {
          extraProps.className = classnames__WEBPACK_IMPORTED_MODULE_2___default()(extraProps.className, 'has-' + fontSize + '-font-size');
        } else if (customFontSize) {
          extraProps.className = classnames__WEBPACK_IMPORTED_MODULE_2___default()(extraProps.className, 'has-custom-size');
        }

        if (textColor) {
          extraProps.className = classnames__WEBPACK_IMPORTED_MODULE_2___default()(extraProps.className, 'has-' + textColor + '-color');
        }
      }

      return extraProps;
    }

    addFilter('editor.BlockEdit', 'wecodeart/block-panel', withBlockPanel);
    addFilter('editor.BlockListBlock', 'wecodeart/withTextSettings', withTextSettings);
    addFilter('blocks.getSaveContent.extraProps', 'wecodeart/applyTextSettings', applyTextSettings);
    /***/
  },

  /***/
  "./src/js/gutenberg/extensions/block-panel/list-settings/index.js":
  /*!************************************************************************!*\
    !*** ./src/js/gutenberg/extensions/block-panel/list-settings/index.js ***!
    \************************************************************************/

  /*! exports provided: default */

  /***/
  function srcJsGutenbergExtensionsBlockPanelListSettingsIndexJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /**
     * WordPress Dependencies
     */


    var __ = wp.i18n.__;
    var compose = wp.compose.compose;
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
    var applyFallbackStyles = withFallbackStyles(function (node, ownProps) {
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
    });

    var WithTextControls = function WithTextControls(props) {
      var fallbackFontSize = props.fallbackFontSize,
          fontSize = props.fontSize,
          setFontSize = props.setFontSize,
          textColor = props.textColor,
          setTextColor = props.setTextColor;
      return wp.element.createElement(Fragment, null, wp.element.createElement(InspectorControls, null, wp.element.createElement(PanelBody, {
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
      })));
    };
    /* harmony default export */


    __webpack_exports__["default"] = compose([withSelect(function (select) {
      return {
        propDemo: true
      };
    }), withColors({
      textColor: 'color'
    }), withFontSizes('fontSize'), applyFallbackStyles])(WithTextControls);
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
     * External dependencies
     */

    /**
     * Internal dependencies
     */

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
            className: "wca-components-toolbar"
          }, wp.element.createElement(IconButton, {
            className: classnames__WEBPACK_IMPORTED_MODULE_0___default()('components-button components-icon-button components-wca-toolbar__control components-toolbar__control components-wca-background-format', {
              'is-active': isActive
            }),
            icon: _icon__WEBPACK_IMPORTED_MODULE_1__["default"].highlighter,
            "aria-haspopup": "true",
            tooltip: title,
            onClick: this.toggle
          }), isOpen && wp.element.createElement(Popover, {
            position: "bottom center",
            className: "components-wca__inline-color-popover",
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
     * Internal dependencies
     */

    /**
     * WordPress dependencies
     */


    var __ = wp.i18n.__;
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
          ownKeys(source, true).forEach(function (key) {
            _defineProperty(target, key, source[key]);
          });
        } else if (Object.getOwnPropertyDescriptors) {
          Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        } else {
          ownKeys(source).forEach(function (key) {
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
     * Internal dependencies
     */

    /**
     * WordPress dependencies
     */


    var __ = wp.i18n.__;
    var Fragment = wp.element.Fragment;
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
        return wp.element.createElement(Fragment, null, wp.element.createElement(_controls__WEBPACK_IMPORTED_MODULE_0__["default"], {
          name: name,
          isActive: isActive,
          value: value,
          onChange: onChange,
          activeAttributes: activeAttributes
        }));
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


    var _underline__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./underline */
    "./src/js/gutenberg/extensions/formats/underline/index.js");
    /* harmony import */


    var _justify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./justify */
    "./src/js/gutenberg/extensions/formats/justify/index.js");
    /* harmony import */


    var _text_color__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./text-color */
    "./src/js/gutenberg/extensions/formats/text-color/index.js");
    /* harmony import */


    var _background_color__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./background-color */
    "./src/js/gutenberg/extensions/formats/background-color/index.js");
    /* harmony import */


    var _markdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./markdown */
    "./src/js/gutenberg/extensions/formats/markdown/index.js");
    /* harmony import */


    var _clear__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
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
      [_underline__WEBPACK_IMPORTED_MODULE_0__["underline"], _justify__WEBPACK_IMPORTED_MODULE_1__["justify"], _text_color__WEBPACK_IMPORTED_MODULE_2__["textColor"], _background_color__WEBPACK_IMPORTED_MODULE_3__["backgroundColor"], _markdown__WEBPACK_IMPORTED_MODULE_4__["markdown"], _clear__WEBPACK_IMPORTED_MODULE_5__["clear"]].forEach(function (_ref) {
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
    //import { get } from 'lodash';


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
     * Internal dependencies
     */

    /**
     * WordPress dependencies
     */


    var __ = wp.i18n.__;
    var Fragment = wp.element.Fragment;
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
        return wp.element.createElement(Fragment, null, wp.element.createElement(_controls__WEBPACK_IMPORTED_MODULE_0__["default"], {
          name: name,
          isActive: isActive,
          value: value,
          onChange: onChange,
          activeAttributes: activeAttributes
        }));
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
          ownKeys(source, true).forEach(function (key) {
            _defineProperty(target, key, source[key]);
          });
        } else if (Object.getOwnPropertyDescriptors) {
          Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        } else {
          ownKeys(source).forEach(function (key) {
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
    //import map from 'lodash/map';


    var _lodash = lodash,
        map = _lodash.map;
    /**
     * Internal dependencies
     */

    /**
     * WordPress dependencies
     */

    var Component = wp.element.Component;
    var _wp$compose = wp.compose,
        compose = _wp$compose.compose,
        ifCondition = _wp$compose.ifCondition;
    var _wp$data = wp.data,
        select = _wp$data.select,
        withSelect = _wp$data.withSelect,
        withDispatch = _wp$data.withDispatch;
    var _wp$richText = wp.richText,
        applyFormat = _wp$richText.applyFormat,
        getTextContent = _wp$richText.getTextContent,
        remove = _wp$richText.remove;
    var withSpokenMessages = wp.components.withSpokenMessages;

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
     * Internal dependencies
     */

    /**
     * WordPress dependencies
     */


    var __ = wp.i18n.__;
    var Fragment = wp.element.Fragment;
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
        return wp.element.createElement(Fragment, null, wp.element.createElement(_controls__WEBPACK_IMPORTED_MODULE_0__["default"], {
          name: name,
          isActive: isActive,
          value: value,
          onChange: onChange,
          activeAttributes: activeAttributes
        }));
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

          return wp.element.createElement(Fragment, null, wp.element.createElement(BlockControls, null, wp.element.createElement(Toolbar, {
            className: "wca-components-toolbar"
          }, wp.element.createElement(IconButton, {
            className: "components-button components-icon-button components-wca-toolbar__control components-toolbar__control components-wca-color-format",
            icon: "editor-textcolor",
            "aria-haspopup": "true",
            tooltip: title,
            onClick: this.toggle
          }, wp.element.createElement("span", {
            className: "components-wca-inline-color__indicator",
            style: {
              backgroundColor: activeColor
            }
          })), isOpen && wp.element.createElement(Popover, {
            position: "bottom center",
            className: "components-wca__inline-color-popover",
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
     * Internal dependencies
     */

    /**
     * WordPress dependencies
     */


    var __ = wp.i18n.__;
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
        style: 'style'
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
            type: name,
            attributes: {
              style: 'text-decoration: underline;'
            }
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
          ownKeys(source, true).forEach(function (key) {
            _defineProperty(target, key, source[key]);
          });
        } else if (Object.getOwnPropertyDescriptors) {
          Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        } else {
          ownKeys(source).forEach(function (key) {
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
    //import get from 'lodash/get';


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
    var _wp$element = wp.element,
        Fragment = _wp$element.Fragment,
        Component = _wp$element.Component;
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
          return wp.element.createElement(Fragment, null, wp.element.createElement(PluginBlockSettingsMenuItem, {
            icon: "editor-removeformatting",
            label: __('Clear Block Formatting', 'wecodeart'),
            onClick: function onClick() {
              clearBlockFormatting(blockId, blockName, toHTMLString({
                value: _objectSpread({}, record, {
                  formats: Array(record.formats.length)
                })
              }));
            }
          }));
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


    var __ = wp.i18n.__;
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
          var postMeta = this.props.postMeta;
          var titleBlock = document.querySelector('.editor-post-title__block');

          if (titleBlock) {
            var isHidden = typeof postMeta !== 'undefined' && typeof postMeta._wca_title_hidden !== 'undefined' ? postMeta._wca_title_hidden : false;
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
              postMeta = _this$props.postMeta,
              postType = _this$props.postType;

          if (['wp_block'].includes(postType)) {
            return false;
          }

          var isHidden = typeof postMeta !== 'undefined' && typeof postMeta._wca_title_hidden !== 'undefined' ? postMeta._wca_title_hidden : false;
          return wp.element.createElement(PluginPostStatusInfo, null, wp.element.createElement(CheckboxControl, {
            className: "wca-hide-title-label",
            label: __('Hide ' + postType + ' title on single template?', 'wecodeart'),
            checked: isHidden,
            onChange: onToggle,
            help: isHidden ? __('Title is now hidden.', 'wecodeart') : null
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
      var metavalue;

      if (typeof ownProps.postMeta !== 'undefined' && typeof ownProps.postMeta._wca_title_hidden !== 'undefined') {
        metavalue = ownProps.postMeta._wca_title_hidden;
      }

      return {
        onToggle: function onToggle() {
          dispatch('core/editor').editPost({
            meta: {
              _wca_title_hidden: !metavalue
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
     * Internal dependencies
     */

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
    /**
     * Internal dependencies
     */


    var registerPlugin = wp.plugins.registerPlugin;

    function registerWCAPlugins() {
      [_markdown__WEBPACK_IMPORTED_MODULE_0__["default"], _code_editor__WEBPACK_IMPORTED_MODULE_1__["default"], _disable_title__WEBPACK_IMPORTED_MODULE_2__["default"], _heading_label__WEBPACK_IMPORTED_MODULE_3__["default"], _clear_formatting__WEBPACK_IMPORTED_MODULE_4__["default"]].forEach(function (block) {
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
  }
  /******/

});
//# sourceMappingURL=editor.js.map
