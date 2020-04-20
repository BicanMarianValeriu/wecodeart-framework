"use strict";

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass2(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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

    if (mode & 4 && _typeof(value) === 'object' && value && value.__esModule) return value;
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

  return __webpack_require__(__webpack_require__.s = "./src/js/frontend.js");
  /******/
})(
/************************************************************************/

/******/
{
  /***/
  "./node_modules/bootstrap/js/dist/collapse.js":
  /*!****************************************************!*\
    !*** ./node_modules/bootstrap/js/dist/collapse.js ***!
    \****************************************************/

  /*! no static exports found */

  /***/
  function node_modulesBootstrapJsDistCollapseJs(module, exports, __webpack_require__) {
    /*!
      * Bootstrap collapse.js v4.4.1 (https://getbootstrap.com/)
      * Copyright 2011-2019 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
      * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
      */
    (function (global, factory) {
      true ? module.exports = factory(__webpack_require__(
      /*! jquery */
      "jquery"), __webpack_require__(
      /*! ./util.js */
      "./node_modules/bootstrap/js/dist/util.js")) : undefined;
    })(this, function ($, Util) {
      'use strict';

      $ = $ && $.hasOwnProperty('default') ? $['default'] : $;
      Util = Util && Util.hasOwnProperty('default') ? Util['default'] : Util;

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

      function _objectSpread2(target) {
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
      /**
       * ------------------------------------------------------------------------
       * Constants
       * ------------------------------------------------------------------------
       */


      var NAME = 'collapse';
      var VERSION = '4.4.1';
      var DATA_KEY = 'bs.collapse';
      var EVENT_KEY = "." + DATA_KEY;
      var DATA_API_KEY = '.data-api';
      var JQUERY_NO_CONFLICT = $.fn[NAME];
      var Default = {
        toggle: true,
        parent: ''
      };
      var DefaultType = {
        toggle: 'boolean',
        parent: '(string|element)'
      };
      var Event = {
        SHOW: "show" + EVENT_KEY,
        SHOWN: "shown" + EVENT_KEY,
        HIDE: "hide" + EVENT_KEY,
        HIDDEN: "hidden" + EVENT_KEY,
        CLICK_DATA_API: "click" + EVENT_KEY + DATA_API_KEY
      };
      var ClassName = {
        SHOW: 'show',
        COLLAPSE: 'collapse',
        COLLAPSING: 'collapsing',
        COLLAPSED: 'collapsed'
      };
      var Dimension = {
        WIDTH: 'width',
        HEIGHT: 'height'
      };
      var Selector = {
        ACTIVES: '.show, .collapsing',
        DATA_TOGGLE: '[data-toggle="collapse"]'
      };
      /**
       * ------------------------------------------------------------------------
       * Class Definition
       * ------------------------------------------------------------------------
       */

      var Collapse = /*#__PURE__*/function () {
        function Collapse(element, config) {
          this._isTransitioning = false;
          this._element = element;
          this._config = this._getConfig(config);
          this._triggerArray = [].slice.call(document.querySelectorAll("[data-toggle=\"collapse\"][href=\"#" + element.id + "\"]," + ("[data-toggle=\"collapse\"][data-target=\"#" + element.id + "\"]")));
          var toggleList = [].slice.call(document.querySelectorAll(Selector.DATA_TOGGLE));

          for (var i = 0, len = toggleList.length; i < len; i++) {
            var elem = toggleList[i];
            var selector = Util.getSelectorFromElement(elem);
            var filterElement = [].slice.call(document.querySelectorAll(selector)).filter(function (foundElem) {
              return foundElem === element;
            });

            if (selector !== null && filterElement.length > 0) {
              this._selector = selector;

              this._triggerArray.push(elem);
            }
          }

          this._parent = this._config.parent ? this._getParent() : null;

          if (!this._config.parent) {
            this._addAriaAndCollapsedClass(this._element, this._triggerArray);
          }

          if (this._config.toggle) {
            this.toggle();
          }
        } // Getters


        var _proto = Collapse.prototype; // Public

        _proto.toggle = function toggle() {
          if ($(this._element).hasClass(ClassName.SHOW)) {
            this.hide();
          } else {
            this.show();
          }
        };

        _proto.show = function show() {
          var _this = this;

          if (this._isTransitioning || $(this._element).hasClass(ClassName.SHOW)) {
            return;
          }

          var actives;
          var activesData;

          if (this._parent) {
            actives = [].slice.call(this._parent.querySelectorAll(Selector.ACTIVES)).filter(function (elem) {
              if (typeof _this._config.parent === 'string') {
                return elem.getAttribute('data-parent') === _this._config.parent;
              }

              return elem.classList.contains(ClassName.COLLAPSE);
            });

            if (actives.length === 0) {
              actives = null;
            }
          }

          if (actives) {
            activesData = $(actives).not(this._selector).data(DATA_KEY);

            if (activesData && activesData._isTransitioning) {
              return;
            }
          }

          var startEvent = $.Event(Event.SHOW);
          $(this._element).trigger(startEvent);

          if (startEvent.isDefaultPrevented()) {
            return;
          }

          if (actives) {
            Collapse._jQueryInterface.call($(actives).not(this._selector), 'hide');

            if (!activesData) {
              $(actives).data(DATA_KEY, null);
            }
          }

          var dimension = this._getDimension();

          $(this._element).removeClass(ClassName.COLLAPSE).addClass(ClassName.COLLAPSING);
          this._element.style[dimension] = 0;

          if (this._triggerArray.length) {
            $(this._triggerArray).removeClass(ClassName.COLLAPSED).attr('aria-expanded', true);
          }

          this.setTransitioning(true);

          var complete = function complete() {
            $(_this._element).removeClass(ClassName.COLLAPSING).addClass(ClassName.COLLAPSE).addClass(ClassName.SHOW);
            _this._element.style[dimension] = '';

            _this.setTransitioning(false);

            $(_this._element).trigger(Event.SHOWN);
          };

          var capitalizedDimension = dimension[0].toUpperCase() + dimension.slice(1);
          var scrollSize = "scroll" + capitalizedDimension;
          var transitionDuration = Util.getTransitionDurationFromElement(this._element);
          $(this._element).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
          this._element.style[dimension] = this._element[scrollSize] + "px";
        };

        _proto.hide = function hide() {
          var _this2 = this;

          if (this._isTransitioning || !$(this._element).hasClass(ClassName.SHOW)) {
            return;
          }

          var startEvent = $.Event(Event.HIDE);
          $(this._element).trigger(startEvent);

          if (startEvent.isDefaultPrevented()) {
            return;
          }

          var dimension = this._getDimension();

          this._element.style[dimension] = this._element.getBoundingClientRect()[dimension] + "px";
          Util.reflow(this._element);
          $(this._element).addClass(ClassName.COLLAPSING).removeClass(ClassName.COLLAPSE).removeClass(ClassName.SHOW);
          var triggerArrayLength = this._triggerArray.length;

          if (triggerArrayLength > 0) {
            for (var i = 0; i < triggerArrayLength; i++) {
              var trigger = this._triggerArray[i];
              var selector = Util.getSelectorFromElement(trigger);

              if (selector !== null) {
                var $elem = $([].slice.call(document.querySelectorAll(selector)));

                if (!$elem.hasClass(ClassName.SHOW)) {
                  $(trigger).addClass(ClassName.COLLAPSED).attr('aria-expanded', false);
                }
              }
            }
          }

          this.setTransitioning(true);

          var complete = function complete() {
            _this2.setTransitioning(false);

            $(_this2._element).removeClass(ClassName.COLLAPSING).addClass(ClassName.COLLAPSE).trigger(Event.HIDDEN);
          };

          this._element.style[dimension] = '';
          var transitionDuration = Util.getTransitionDurationFromElement(this._element);
          $(this._element).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
        };

        _proto.setTransitioning = function setTransitioning(isTransitioning) {
          this._isTransitioning = isTransitioning;
        };

        _proto.dispose = function dispose() {
          $.removeData(this._element, DATA_KEY);
          this._config = null;
          this._parent = null;
          this._element = null;
          this._triggerArray = null;
          this._isTransitioning = null;
        } // Private
        ;

        _proto._getConfig = function _getConfig(config) {
          config = _objectSpread2({}, Default, {}, config);
          config.toggle = Boolean(config.toggle); // Coerce string values

          Util.typeCheckConfig(NAME, config, DefaultType);
          return config;
        };

        _proto._getDimension = function _getDimension() {
          var hasWidth = $(this._element).hasClass(Dimension.WIDTH);
          return hasWidth ? Dimension.WIDTH : Dimension.HEIGHT;
        };

        _proto._getParent = function _getParent() {
          var _this3 = this;

          var parent;

          if (Util.isElement(this._config.parent)) {
            parent = this._config.parent; // It's a jQuery object

            if (typeof this._config.parent.jquery !== 'undefined') {
              parent = this._config.parent[0];
            }
          } else {
            parent = document.querySelector(this._config.parent);
          }

          var selector = "[data-toggle=\"collapse\"][data-parent=\"" + this._config.parent + "\"]";
          var children = [].slice.call(parent.querySelectorAll(selector));
          $(children).each(function (i, element) {
            _this3._addAriaAndCollapsedClass(Collapse._getTargetFromElement(element), [element]);
          });
          return parent;
        };

        _proto._addAriaAndCollapsedClass = function _addAriaAndCollapsedClass(element, triggerArray) {
          var isOpen = $(element).hasClass(ClassName.SHOW);

          if (triggerArray.length) {
            $(triggerArray).toggleClass(ClassName.COLLAPSED, !isOpen).attr('aria-expanded', isOpen);
          }
        } // Static
        ;

        Collapse._getTargetFromElement = function _getTargetFromElement(element) {
          var selector = Util.getSelectorFromElement(element);
          return selector ? document.querySelector(selector) : null;
        };

        Collapse._jQueryInterface = function _jQueryInterface(config) {
          return this.each(function () {
            var $this = $(this);
            var data = $this.data(DATA_KEY);

            var _config = _objectSpread2({}, Default, {}, $this.data(), {}, _typeof(config) === 'object' && config ? config : {});

            if (!data && _config.toggle && /show|hide/.test(config)) {
              _config.toggle = false;
            }

            if (!data) {
              data = new Collapse(this, _config);
              $this.data(DATA_KEY, data);
            }

            if (typeof config === 'string') {
              if (typeof data[config] === 'undefined') {
                throw new TypeError("No method named \"" + config + "\"");
              }

              data[config]();
            }
          });
        };

        _createClass(Collapse, null, [{
          key: "VERSION",
          get: function get() {
            return VERSION;
          }
        }, {
          key: "Default",
          get: function get() {
            return Default;
          }
        }]);

        return Collapse;
      }();
      /**
       * ------------------------------------------------------------------------
       * Data Api implementation
       * ------------------------------------------------------------------------
       */


      $(document).on(Event.CLICK_DATA_API, Selector.DATA_TOGGLE, function (event) {
        // preventDefault only for <a> elements (which change the URL) not inside the collapsible element
        if (event.currentTarget.tagName === 'A') {
          event.preventDefault();
        }

        var $trigger = $(this);
        var selector = Util.getSelectorFromElement(this);
        var selectors = [].slice.call(document.querySelectorAll(selector));
        $(selectors).each(function () {
          var $target = $(this);
          var data = $target.data(DATA_KEY);
          var config = data ? 'toggle' : $trigger.data();

          Collapse._jQueryInterface.call($target, config);
        });
      });
      /**
       * ------------------------------------------------------------------------
       * jQuery
       * ------------------------------------------------------------------------
       */

      $.fn[NAME] = Collapse._jQueryInterface;
      $.fn[NAME].Constructor = Collapse;

      $.fn[NAME].noConflict = function () {
        $.fn[NAME] = JQUERY_NO_CONFLICT;
        return Collapse._jQueryInterface;
      };

      return Collapse;
    });
    /***/

  },

  /***/
  "./node_modules/bootstrap/js/dist/dropdown.js":
  /*!****************************************************!*\
    !*** ./node_modules/bootstrap/js/dist/dropdown.js ***!
    \****************************************************/

  /*! no static exports found */

  /***/
  function node_modulesBootstrapJsDistDropdownJs(module, exports, __webpack_require__) {
    /*!
      * Bootstrap dropdown.js v4.4.1 (https://getbootstrap.com/)
      * Copyright 2011-2019 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
      * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
      */
    (function (global, factory) {
      true ? module.exports = factory(__webpack_require__(
      /*! jquery */
      "jquery"), __webpack_require__(
      /*! popper.js */
      "./node_modules/popper.js/dist/esm/popper.js"), __webpack_require__(
      /*! ./util.js */
      "./node_modules/bootstrap/js/dist/util.js")) : undefined;
    })(this, function ($, Popper, Util) {
      'use strict';

      $ = $ && $.hasOwnProperty('default') ? $['default'] : $;
      Popper = Popper && Popper.hasOwnProperty('default') ? Popper['default'] : Popper;
      Util = Util && Util.hasOwnProperty('default') ? Util['default'] : Util;

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

      function _objectSpread2(target) {
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
      /**
       * ------------------------------------------------------------------------
       * Constants
       * ------------------------------------------------------------------------
       */


      var NAME = 'dropdown';
      var VERSION = '4.4.1';
      var DATA_KEY = 'bs.dropdown';
      var EVENT_KEY = "." + DATA_KEY;
      var DATA_API_KEY = '.data-api';
      var JQUERY_NO_CONFLICT = $.fn[NAME];
      var ESCAPE_KEYCODE = 27; // KeyboardEvent.which value for Escape (Esc) key

      var SPACE_KEYCODE = 32; // KeyboardEvent.which value for space key

      var TAB_KEYCODE = 9; // KeyboardEvent.which value for tab key

      var ARROW_UP_KEYCODE = 38; // KeyboardEvent.which value for up arrow key

      var ARROW_DOWN_KEYCODE = 40; // KeyboardEvent.which value for down arrow key

      var RIGHT_MOUSE_BUTTON_WHICH = 3; // MouseEvent.which value for the right button (assuming a right-handed mouse)

      var REGEXP_KEYDOWN = new RegExp(ARROW_UP_KEYCODE + "|" + ARROW_DOWN_KEYCODE + "|" + ESCAPE_KEYCODE);
      var Event = {
        HIDE: "hide" + EVENT_KEY,
        HIDDEN: "hidden" + EVENT_KEY,
        SHOW: "show" + EVENT_KEY,
        SHOWN: "shown" + EVENT_KEY,
        CLICK: "click" + EVENT_KEY,
        CLICK_DATA_API: "click" + EVENT_KEY + DATA_API_KEY,
        KEYDOWN_DATA_API: "keydown" + EVENT_KEY + DATA_API_KEY,
        KEYUP_DATA_API: "keyup" + EVENT_KEY + DATA_API_KEY
      };
      var ClassName = {
        DISABLED: 'disabled',
        SHOW: 'show',
        DROPUP: 'dropup',
        DROPRIGHT: 'dropright',
        DROPLEFT: 'dropleft',
        MENURIGHT: 'dropdown-menu-right',
        MENULEFT: 'dropdown-menu-left',
        POSITION_STATIC: 'position-static'
      };
      var Selector = {
        DATA_TOGGLE: '[data-toggle="dropdown"]',
        FORM_CHILD: '.dropdown form',
        MENU: '.dropdown-menu',
        NAVBAR_NAV: '.navbar-nav',
        VISIBLE_ITEMS: '.dropdown-menu .dropdown-item:not(.disabled):not(:disabled)'
      };
      var AttachmentMap = {
        TOP: 'top-start',
        TOPEND: 'top-end',
        BOTTOM: 'bottom-start',
        BOTTOMEND: 'bottom-end',
        RIGHT: 'right-start',
        RIGHTEND: 'right-end',
        LEFT: 'left-start',
        LEFTEND: 'left-end'
      };
      var Default = {
        offset: 0,
        flip: true,
        boundary: 'scrollParent',
        reference: 'toggle',
        display: 'dynamic',
        popperConfig: null
      };
      var DefaultType = {
        offset: '(number|string|function)',
        flip: 'boolean',
        boundary: '(string|element)',
        reference: '(string|element)',
        display: 'string',
        popperConfig: '(null|object)'
      };
      /**
       * ------------------------------------------------------------------------
       * Class Definition
       * ------------------------------------------------------------------------
       */

      var Dropdown = /*#__PURE__*/function () {
        function Dropdown(element, config) {
          this._element = element;
          this._popper = null;
          this._config = this._getConfig(config);
          this._menu = this._getMenuElement();
          this._inNavbar = this._detectNavbar();

          this._addEventListeners();
        } // Getters


        var _proto = Dropdown.prototype; // Public

        _proto.toggle = function toggle() {
          if (this._element.disabled || $(this._element).hasClass(ClassName.DISABLED)) {
            return;
          }

          var isActive = $(this._menu).hasClass(ClassName.SHOW);

          Dropdown._clearMenus();

          if (isActive) {
            return;
          }

          this.show(true);
        };

        _proto.show = function show(usePopper) {
          if (usePopper === void 0) {
            usePopper = false;
          }

          if (this._element.disabled || $(this._element).hasClass(ClassName.DISABLED) || $(this._menu).hasClass(ClassName.SHOW)) {
            return;
          }

          var relatedTarget = {
            relatedTarget: this._element
          };
          var showEvent = $.Event(Event.SHOW, relatedTarget);

          var parent = Dropdown._getParentFromElement(this._element);

          $(parent).trigger(showEvent);

          if (showEvent.isDefaultPrevented()) {
            return;
          } // Disable totally Popper.js for Dropdown in Navbar


          if (!this._inNavbar && usePopper) {
            /**
             * Check for Popper dependency
             * Popper - https://popper.js.org
             */
            if (typeof Popper === 'undefined') {
              throw new TypeError('Bootstrap\'s dropdowns require Popper.js (https://popper.js.org/)');
            }

            var referenceElement = this._element;

            if (this._config.reference === 'parent') {
              referenceElement = parent;
            } else if (Util.isElement(this._config.reference)) {
              referenceElement = this._config.reference; // Check if it's jQuery element

              if (typeof this._config.reference.jquery !== 'undefined') {
                referenceElement = this._config.reference[0];
              }
            } // If boundary is not `scrollParent`, then set position to `static`
            // to allow the menu to "escape" the scroll parent's boundaries
            // https://github.com/twbs/bootstrap/issues/24251


            if (this._config.boundary !== 'scrollParent') {
              $(parent).addClass(ClassName.POSITION_STATIC);
            }

            this._popper = new Popper(referenceElement, this._menu, this._getPopperConfig());
          } // If this is a touch-enabled device we add extra
          // empty mouseover listeners to the body's immediate children;
          // only needed because of broken event delegation on iOS
          // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html


          if ('ontouchstart' in document.documentElement && $(parent).closest(Selector.NAVBAR_NAV).length === 0) {
            $(document.body).children().on('mouseover', null, $.noop);
          }

          this._element.focus();

          this._element.setAttribute('aria-expanded', true);

          $(this._menu).toggleClass(ClassName.SHOW);
          $(parent).toggleClass(ClassName.SHOW).trigger($.Event(Event.SHOWN, relatedTarget));
        };

        _proto.hide = function hide() {
          if (this._element.disabled || $(this._element).hasClass(ClassName.DISABLED) || !$(this._menu).hasClass(ClassName.SHOW)) {
            return;
          }

          var relatedTarget = {
            relatedTarget: this._element
          };
          var hideEvent = $.Event(Event.HIDE, relatedTarget);

          var parent = Dropdown._getParentFromElement(this._element);

          $(parent).trigger(hideEvent);

          if (hideEvent.isDefaultPrevented()) {
            return;
          }

          if (this._popper) {
            this._popper.destroy();
          }

          $(this._menu).toggleClass(ClassName.SHOW);
          $(parent).toggleClass(ClassName.SHOW).trigger($.Event(Event.HIDDEN, relatedTarget));
        };

        _proto.dispose = function dispose() {
          $.removeData(this._element, DATA_KEY);
          $(this._element).off(EVENT_KEY);
          this._element = null;
          this._menu = null;

          if (this._popper !== null) {
            this._popper.destroy();

            this._popper = null;
          }
        };

        _proto.update = function update() {
          this._inNavbar = this._detectNavbar();

          if (this._popper !== null) {
            this._popper.scheduleUpdate();
          }
        } // Private
        ;

        _proto._addEventListeners = function _addEventListeners() {
          var _this = this;

          $(this._element).on(Event.CLICK, function (event) {
            event.preventDefault();
            event.stopPropagation();

            _this.toggle();
          });
        };

        _proto._getConfig = function _getConfig(config) {
          config = _objectSpread2({}, this.constructor.Default, {}, $(this._element).data(), {}, config);
          Util.typeCheckConfig(NAME, config, this.constructor.DefaultType);
          return config;
        };

        _proto._getMenuElement = function _getMenuElement() {
          if (!this._menu) {
            var parent = Dropdown._getParentFromElement(this._element);

            if (parent) {
              this._menu = parent.querySelector(Selector.MENU);
            }
          }

          return this._menu;
        };

        _proto._getPlacement = function _getPlacement() {
          var $parentDropdown = $(this._element.parentNode);
          var placement = AttachmentMap.BOTTOM; // Handle dropup

          if ($parentDropdown.hasClass(ClassName.DROPUP)) {
            placement = AttachmentMap.TOP;

            if ($(this._menu).hasClass(ClassName.MENURIGHT)) {
              placement = AttachmentMap.TOPEND;
            }
          } else if ($parentDropdown.hasClass(ClassName.DROPRIGHT)) {
            placement = AttachmentMap.RIGHT;
          } else if ($parentDropdown.hasClass(ClassName.DROPLEFT)) {
            placement = AttachmentMap.LEFT;
          } else if ($(this._menu).hasClass(ClassName.MENURIGHT)) {
            placement = AttachmentMap.BOTTOMEND;
          }

          return placement;
        };

        _proto._detectNavbar = function _detectNavbar() {
          return $(this._element).closest('.navbar').length > 0;
        };

        _proto._getOffset = function _getOffset() {
          var _this2 = this;

          var offset = {};

          if (typeof this._config.offset === 'function') {
            offset.fn = function (data) {
              data.offsets = _objectSpread2({}, data.offsets, {}, _this2._config.offset(data.offsets, _this2._element) || {});
              return data;
            };
          } else {
            offset.offset = this._config.offset;
          }

          return offset;
        };

        _proto._getPopperConfig = function _getPopperConfig() {
          var popperConfig = {
            placement: this._getPlacement(),
            modifiers: {
              offset: this._getOffset(),
              flip: {
                enabled: this._config.flip
              },
              preventOverflow: {
                boundariesElement: this._config.boundary
              }
            }
          }; // Disable Popper.js if we have a static display

          if (this._config.display === 'static') {
            popperConfig.modifiers.applyStyle = {
              enabled: false
            };
          }

          return _objectSpread2({}, popperConfig, {}, this._config.popperConfig);
        } // Static
        ;

        Dropdown._jQueryInterface = function _jQueryInterface(config) {
          return this.each(function () {
            var data = $(this).data(DATA_KEY);

            var _config = _typeof(config) === 'object' ? config : null;

            if (!data) {
              data = new Dropdown(this, _config);
              $(this).data(DATA_KEY, data);
            }

            if (typeof config === 'string') {
              if (typeof data[config] === 'undefined') {
                throw new TypeError("No method named \"" + config + "\"");
              }

              data[config]();
            }
          });
        };

        Dropdown._clearMenus = function _clearMenus(event) {
          if (event && (event.which === RIGHT_MOUSE_BUTTON_WHICH || event.type === 'keyup' && event.which !== TAB_KEYCODE)) {
            return;
          }

          var toggles = [].slice.call(document.querySelectorAll(Selector.DATA_TOGGLE));

          for (var i = 0, len = toggles.length; i < len; i++) {
            var parent = Dropdown._getParentFromElement(toggles[i]);

            var context = $(toggles[i]).data(DATA_KEY);
            var relatedTarget = {
              relatedTarget: toggles[i]
            };

            if (event && event.type === 'click') {
              relatedTarget.clickEvent = event;
            }

            if (!context) {
              continue;
            }

            var dropdownMenu = context._menu;

            if (!$(parent).hasClass(ClassName.SHOW)) {
              continue;
            }

            if (event && (event.type === 'click' && /input|textarea/i.test(event.target.tagName) || event.type === 'keyup' && event.which === TAB_KEYCODE) && $.contains(parent, event.target)) {
              continue;
            }

            var hideEvent = $.Event(Event.HIDE, relatedTarget);
            $(parent).trigger(hideEvent);

            if (hideEvent.isDefaultPrevented()) {
              continue;
            } // If this is a touch-enabled device we remove the extra
            // empty mouseover listeners we added for iOS support


            if ('ontouchstart' in document.documentElement) {
              $(document.body).children().off('mouseover', null, $.noop);
            }

            toggles[i].setAttribute('aria-expanded', 'false');

            if (context._popper) {
              context._popper.destroy();
            }

            $(dropdownMenu).removeClass(ClassName.SHOW);
            $(parent).removeClass(ClassName.SHOW).trigger($.Event(Event.HIDDEN, relatedTarget));
          }
        };

        Dropdown._getParentFromElement = function _getParentFromElement(element) {
          var parent;
          var selector = Util.getSelectorFromElement(element);

          if (selector) {
            parent = document.querySelector(selector);
          }

          return parent || element.parentNode;
        } // eslint-disable-next-line complexity
        ;

        Dropdown._dataApiKeydownHandler = function _dataApiKeydownHandler(event) {
          // If not input/textarea:
          //  - And not a key in REGEXP_KEYDOWN => not a dropdown command
          // If input/textarea:
          //  - If space key => not a dropdown command
          //  - If key is other than escape
          //    - If key is not up or down => not a dropdown command
          //    - If trigger inside the menu => not a dropdown command
          if (/input|textarea/i.test(event.target.tagName) ? event.which === SPACE_KEYCODE || event.which !== ESCAPE_KEYCODE && (event.which !== ARROW_DOWN_KEYCODE && event.which !== ARROW_UP_KEYCODE || $(event.target).closest(Selector.MENU).length) : !REGEXP_KEYDOWN.test(event.which)) {
            return;
          }

          event.preventDefault();
          event.stopPropagation();

          if (this.disabled || $(this).hasClass(ClassName.DISABLED)) {
            return;
          }

          var parent = Dropdown._getParentFromElement(this);

          var isActive = $(parent).hasClass(ClassName.SHOW);

          if (!isActive && event.which === ESCAPE_KEYCODE) {
            return;
          }

          if (!isActive || isActive && (event.which === ESCAPE_KEYCODE || event.which === SPACE_KEYCODE)) {
            if (event.which === ESCAPE_KEYCODE) {
              var toggle = parent.querySelector(Selector.DATA_TOGGLE);
              $(toggle).trigger('focus');
            }

            $(this).trigger('click');
            return;
          }

          var items = [].slice.call(parent.querySelectorAll(Selector.VISIBLE_ITEMS)).filter(function (item) {
            return $(item).is(':visible');
          });

          if (items.length === 0) {
            return;
          }

          var index = items.indexOf(event.target);

          if (event.which === ARROW_UP_KEYCODE && index > 0) {
            // Up
            index--;
          }

          if (event.which === ARROW_DOWN_KEYCODE && index < items.length - 1) {
            // Down
            index++;
          }

          if (index < 0) {
            index = 0;
          }

          items[index].focus();
        };

        _createClass(Dropdown, null, [{
          key: "VERSION",
          get: function get() {
            return VERSION;
          }
        }, {
          key: "Default",
          get: function get() {
            return Default;
          }
        }, {
          key: "DefaultType",
          get: function get() {
            return DefaultType;
          }
        }]);

        return Dropdown;
      }();
      /**
       * ------------------------------------------------------------------------
       * Data Api implementation
       * ------------------------------------------------------------------------
       */


      $(document).on(Event.KEYDOWN_DATA_API, Selector.DATA_TOGGLE, Dropdown._dataApiKeydownHandler).on(Event.KEYDOWN_DATA_API, Selector.MENU, Dropdown._dataApiKeydownHandler).on(Event.CLICK_DATA_API + " " + Event.KEYUP_DATA_API, Dropdown._clearMenus).on(Event.CLICK_DATA_API, Selector.DATA_TOGGLE, function (event) {
        event.preventDefault();
        event.stopPropagation();

        Dropdown._jQueryInterface.call($(this), 'toggle');
      }).on(Event.CLICK_DATA_API, Selector.FORM_CHILD, function (e) {
        e.stopPropagation();
      });
      /**
       * ------------------------------------------------------------------------
       * jQuery
       * ------------------------------------------------------------------------
       */

      $.fn[NAME] = Dropdown._jQueryInterface;
      $.fn[NAME].Constructor = Dropdown;

      $.fn[NAME].noConflict = function () {
        $.fn[NAME] = JQUERY_NO_CONFLICT;
        return Dropdown._jQueryInterface;
      };

      return Dropdown;
    });
    /***/

  },

  /***/
  "./node_modules/bootstrap/js/dist/popover.js":
  /*!***************************************************!*\
    !*** ./node_modules/bootstrap/js/dist/popover.js ***!
    \***************************************************/

  /*! no static exports found */

  /***/
  function node_modulesBootstrapJsDistPopoverJs(module, exports, __webpack_require__) {
    /*!
      * Bootstrap popover.js v4.4.1 (https://getbootstrap.com/)
      * Copyright 2011-2019 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
      * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
      */
    (function (global, factory) {
      true ? module.exports = factory(__webpack_require__(
      /*! jquery */
      "jquery"), __webpack_require__(
      /*! ./tooltip.js */
      "./node_modules/bootstrap/js/dist/tooltip.js")) : undefined;
    })(this, function ($, Tooltip) {
      'use strict';

      $ = $ && $.hasOwnProperty('default') ? $['default'] : $;
      Tooltip = Tooltip && Tooltip.hasOwnProperty('default') ? Tooltip['default'] : Tooltip;

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

      function _objectSpread2(target) {
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

      function _inheritsLoose(subClass, superClass) {
        subClass.prototype = Object.create(superClass.prototype);
        subClass.prototype.constructor = subClass;
        subClass.__proto__ = superClass;
      }
      /**
       * ------------------------------------------------------------------------
       * Constants
       * ------------------------------------------------------------------------
       */


      var NAME = 'popover';
      var VERSION = '4.4.1';
      var DATA_KEY = 'bs.popover';
      var EVENT_KEY = "." + DATA_KEY;
      var JQUERY_NO_CONFLICT = $.fn[NAME];
      var CLASS_PREFIX = 'bs-popover';
      var BSCLS_PREFIX_REGEX = new RegExp("(^|\\s)" + CLASS_PREFIX + "\\S+", 'g');

      var Default = _objectSpread2({}, Tooltip.Default, {
        placement: 'right',
        trigger: 'click',
        content: '',
        template: '<div class="popover" role="tooltip">' + '<div class="arrow"></div>' + '<h3 class="popover-header"></h3>' + '<div class="popover-body"></div></div>'
      });

      var DefaultType = _objectSpread2({}, Tooltip.DefaultType, {
        content: '(string|element|function)'
      });

      var ClassName = {
        FADE: 'fade',
        SHOW: 'show'
      };
      var Selector = {
        TITLE: '.popover-header',
        CONTENT: '.popover-body'
      };
      var Event = {
        HIDE: "hide" + EVENT_KEY,
        HIDDEN: "hidden" + EVENT_KEY,
        SHOW: "show" + EVENT_KEY,
        SHOWN: "shown" + EVENT_KEY,
        INSERTED: "inserted" + EVENT_KEY,
        CLICK: "click" + EVENT_KEY,
        FOCUSIN: "focusin" + EVENT_KEY,
        FOCUSOUT: "focusout" + EVENT_KEY,
        MOUSEENTER: "mouseenter" + EVENT_KEY,
        MOUSELEAVE: "mouseleave" + EVENT_KEY
      };
      /**
       * ------------------------------------------------------------------------
       * Class Definition
       * ------------------------------------------------------------------------
       */

      var Popover = /*#__PURE__*/function (_Tooltip) {
        _inheritsLoose(Popover, _Tooltip);

        function Popover() {
          return _Tooltip.apply(this, arguments) || this;
        }

        var _proto = Popover.prototype; // Overrides

        _proto.isWithContent = function isWithContent() {
          return this.getTitle() || this._getContent();
        };

        _proto.addAttachmentClass = function addAttachmentClass(attachment) {
          $(this.getTipElement()).addClass(CLASS_PREFIX + "-" + attachment);
        };

        _proto.getTipElement = function getTipElement() {
          this.tip = this.tip || $(this.config.template)[0];
          return this.tip;
        };

        _proto.setContent = function setContent() {
          var $tip = $(this.getTipElement()); // We use append for html objects to maintain js events

          this.setElementContent($tip.find(Selector.TITLE), this.getTitle());

          var content = this._getContent();

          if (typeof content === 'function') {
            content = content.call(this.element);
          }

          this.setElementContent($tip.find(Selector.CONTENT), content);
          $tip.removeClass(ClassName.FADE + " " + ClassName.SHOW);
        } // Private
        ;

        _proto._getContent = function _getContent() {
          return this.element.getAttribute('data-content') || this.config.content;
        };

        _proto._cleanTipClass = function _cleanTipClass() {
          var $tip = $(this.getTipElement());
          var tabClass = $tip.attr('class').match(BSCLS_PREFIX_REGEX);

          if (tabClass !== null && tabClass.length > 0) {
            $tip.removeClass(tabClass.join(''));
          }
        } // Static
        ;

        Popover._jQueryInterface = function _jQueryInterface(config) {
          return this.each(function () {
            var data = $(this).data(DATA_KEY);

            var _config = _typeof(config) === 'object' ? config : null;

            if (!data && /dispose|hide/.test(config)) {
              return;
            }

            if (!data) {
              data = new Popover(this, _config);
              $(this).data(DATA_KEY, data);
            }

            if (typeof config === 'string') {
              if (typeof data[config] === 'undefined') {
                throw new TypeError("No method named \"" + config + "\"");
              }

              data[config]();
            }
          });
        };

        _createClass(Popover, null, [{
          key: "VERSION",
          // Getters
          get: function get() {
            return VERSION;
          }
        }, {
          key: "Default",
          get: function get() {
            return Default;
          }
        }, {
          key: "NAME",
          get: function get() {
            return NAME;
          }
        }, {
          key: "DATA_KEY",
          get: function get() {
            return DATA_KEY;
          }
        }, {
          key: "Event",
          get: function get() {
            return Event;
          }
        }, {
          key: "EVENT_KEY",
          get: function get() {
            return EVENT_KEY;
          }
        }, {
          key: "DefaultType",
          get: function get() {
            return DefaultType;
          }
        }]);

        return Popover;
      }(Tooltip);
      /**
       * ------------------------------------------------------------------------
       * jQuery
       * ------------------------------------------------------------------------
       */


      $.fn[NAME] = Popover._jQueryInterface;
      $.fn[NAME].Constructor = Popover;

      $.fn[NAME].noConflict = function () {
        $.fn[NAME] = JQUERY_NO_CONFLICT;
        return Popover._jQueryInterface;
      };

      return Popover;
    });
    /***/

  },

  /***/
  "./node_modules/bootstrap/js/dist/tooltip.js":
  /*!***************************************************!*\
    !*** ./node_modules/bootstrap/js/dist/tooltip.js ***!
    \***************************************************/

  /*! no static exports found */

  /***/
  function node_modulesBootstrapJsDistTooltipJs(module, exports, __webpack_require__) {
    /*!
      * Bootstrap tooltip.js v4.4.1 (https://getbootstrap.com/)
      * Copyright 2011-2019 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
      * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
      */
    (function (global, factory) {
      true ? module.exports = factory(__webpack_require__(
      /*! jquery */
      "jquery"), __webpack_require__(
      /*! popper.js */
      "./node_modules/popper.js/dist/esm/popper.js"), __webpack_require__(
      /*! ./util.js */
      "./node_modules/bootstrap/js/dist/util.js")) : undefined;
    })(this, function ($, Popper, Util) {
      'use strict';

      $ = $ && $.hasOwnProperty('default') ? $['default'] : $;
      Popper = Popper && Popper.hasOwnProperty('default') ? Popper['default'] : Popper;
      Util = Util && Util.hasOwnProperty('default') ? Util['default'] : Util;

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

      function _objectSpread2(target) {
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
      /**
       * --------------------------------------------------------------------------
       * Bootstrap (v4.4.1): tools/sanitizer.js
       * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
       * --------------------------------------------------------------------------
       */


      var uriAttrs = ['background', 'cite', 'href', 'itemtype', 'longdesc', 'poster', 'src', 'xlink:href'];
      var ARIA_ATTRIBUTE_PATTERN = /^aria-[\w-]*$/i;
      var DefaultWhitelist = {
        // Global attributes allowed on any supplied element below.
        '*': ['class', 'dir', 'id', 'lang', 'role', ARIA_ATTRIBUTE_PATTERN],
        a: ['target', 'href', 'title', 'rel'],
        area: [],
        b: [],
        br: [],
        col: [],
        code: [],
        div: [],
        em: [],
        hr: [],
        h1: [],
        h2: [],
        h3: [],
        h4: [],
        h5: [],
        h6: [],
        i: [],
        img: ['src', 'alt', 'title', 'width', 'height'],
        li: [],
        ol: [],
        p: [],
        pre: [],
        s: [],
        small: [],
        span: [],
        sub: [],
        sup: [],
        strong: [],
        u: [],
        ul: []
      };
      /**
       * A pattern that recognizes a commonly useful subset of URLs that are safe.
       *
       * Shoutout to Angular 7 https://github.com/angular/angular/blob/7.2.4/packages/core/src/sanitization/url_sanitizer.ts
       */

      var SAFE_URL_PATTERN = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi;
      /**
       * A pattern that matches safe data URLs. Only matches image, video and audio types.
       *
       * Shoutout to Angular 7 https://github.com/angular/angular/blob/7.2.4/packages/core/src/sanitization/url_sanitizer.ts
       */

      var DATA_URL_PATTERN = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+/]+=*$/i;

      function allowedAttribute(attr, allowedAttributeList) {
        var attrName = attr.nodeName.toLowerCase();

        if (allowedAttributeList.indexOf(attrName) !== -1) {
          if (uriAttrs.indexOf(attrName) !== -1) {
            return Boolean(attr.nodeValue.match(SAFE_URL_PATTERN) || attr.nodeValue.match(DATA_URL_PATTERN));
          }

          return true;
        }

        var regExp = allowedAttributeList.filter(function (attrRegex) {
          return attrRegex instanceof RegExp;
        }); // Check if a regular expression validates the attribute.

        for (var i = 0, l = regExp.length; i < l; i++) {
          if (attrName.match(regExp[i])) {
            return true;
          }
        }

        return false;
      }

      function sanitizeHtml(unsafeHtml, whiteList, sanitizeFn) {
        if (unsafeHtml.length === 0) {
          return unsafeHtml;
        }

        if (sanitizeFn && typeof sanitizeFn === 'function') {
          return sanitizeFn(unsafeHtml);
        }

        var domParser = new window.DOMParser();
        var createdDocument = domParser.parseFromString(unsafeHtml, 'text/html');
        var whitelistKeys = Object.keys(whiteList);
        var elements = [].slice.call(createdDocument.body.querySelectorAll('*'));

        var _loop = function _loop(i, len) {
          var el = elements[i];
          var elName = el.nodeName.toLowerCase();

          if (whitelistKeys.indexOf(el.nodeName.toLowerCase()) === -1) {
            el.parentNode.removeChild(el);
            return "continue";
          }

          var attributeList = [].slice.call(el.attributes);
          var whitelistedAttributes = [].concat(whiteList['*'] || [], whiteList[elName] || []);
          attributeList.forEach(function (attr) {
            if (!allowedAttribute(attr, whitelistedAttributes)) {
              el.removeAttribute(attr.nodeName);
            }
          });
        };

        for (var i = 0, len = elements.length; i < len; i++) {
          var _ret = _loop(i);

          if (_ret === "continue") continue;
        }

        return createdDocument.body.innerHTML;
      }
      /**
       * ------------------------------------------------------------------------
       * Constants
       * ------------------------------------------------------------------------
       */


      var NAME = 'tooltip';
      var VERSION = '4.4.1';
      var DATA_KEY = 'bs.tooltip';
      var EVENT_KEY = "." + DATA_KEY;
      var JQUERY_NO_CONFLICT = $.fn[NAME];
      var CLASS_PREFIX = 'bs-tooltip';
      var BSCLS_PREFIX_REGEX = new RegExp("(^|\\s)" + CLASS_PREFIX + "\\S+", 'g');
      var DISALLOWED_ATTRIBUTES = ['sanitize', 'whiteList', 'sanitizeFn'];
      var DefaultType = {
        animation: 'boolean',
        template: 'string',
        title: '(string|element|function)',
        trigger: 'string',
        delay: '(number|object)',
        html: 'boolean',
        selector: '(string|boolean)',
        placement: '(string|function)',
        offset: '(number|string|function)',
        container: '(string|element|boolean)',
        fallbackPlacement: '(string|array)',
        boundary: '(string|element)',
        sanitize: 'boolean',
        sanitizeFn: '(null|function)',
        whiteList: 'object',
        popperConfig: '(null|object)'
      };
      var AttachmentMap = {
        AUTO: 'auto',
        TOP: 'top',
        RIGHT: 'right',
        BOTTOM: 'bottom',
        LEFT: 'left'
      };
      var Default = {
        animation: true,
        template: '<div class="tooltip" role="tooltip">' + '<div class="arrow"></div>' + '<div class="tooltip-inner"></div></div>',
        trigger: 'hover focus',
        title: '',
        delay: 0,
        html: false,
        selector: false,
        placement: 'top',
        offset: 0,
        container: false,
        fallbackPlacement: 'flip',
        boundary: 'scrollParent',
        sanitize: true,
        sanitizeFn: null,
        whiteList: DefaultWhitelist,
        popperConfig: null
      };
      var HoverState = {
        SHOW: 'show',
        OUT: 'out'
      };
      var Event = {
        HIDE: "hide" + EVENT_KEY,
        HIDDEN: "hidden" + EVENT_KEY,
        SHOW: "show" + EVENT_KEY,
        SHOWN: "shown" + EVENT_KEY,
        INSERTED: "inserted" + EVENT_KEY,
        CLICK: "click" + EVENT_KEY,
        FOCUSIN: "focusin" + EVENT_KEY,
        FOCUSOUT: "focusout" + EVENT_KEY,
        MOUSEENTER: "mouseenter" + EVENT_KEY,
        MOUSELEAVE: "mouseleave" + EVENT_KEY
      };
      var ClassName = {
        FADE: 'fade',
        SHOW: 'show'
      };
      var Selector = {
        TOOLTIP: '.tooltip',
        TOOLTIP_INNER: '.tooltip-inner',
        ARROW: '.arrow'
      };
      var Trigger = {
        HOVER: 'hover',
        FOCUS: 'focus',
        CLICK: 'click',
        MANUAL: 'manual'
      };
      /**
       * ------------------------------------------------------------------------
       * Class Definition
       * ------------------------------------------------------------------------
       */

      var Tooltip = /*#__PURE__*/function () {
        function Tooltip(element, config) {
          if (typeof Popper === 'undefined') {
            throw new TypeError('Bootstrap\'s tooltips require Popper.js (https://popper.js.org/)');
          } // private


          this._isEnabled = true;
          this._timeout = 0;
          this._hoverState = '';
          this._activeTrigger = {};
          this._popper = null; // Protected

          this.element = element;
          this.config = this._getConfig(config);
          this.tip = null;

          this._setListeners();
        } // Getters


        var _proto = Tooltip.prototype; // Public

        _proto.enable = function enable() {
          this._isEnabled = true;
        };

        _proto.disable = function disable() {
          this._isEnabled = false;
        };

        _proto.toggleEnabled = function toggleEnabled() {
          this._isEnabled = !this._isEnabled;
        };

        _proto.toggle = function toggle(event) {
          if (!this._isEnabled) {
            return;
          }

          if (event) {
            var dataKey = this.constructor.DATA_KEY;
            var context = $(event.currentTarget).data(dataKey);

            if (!context) {
              context = new this.constructor(event.currentTarget, this._getDelegateConfig());
              $(event.currentTarget).data(dataKey, context);
            }

            context._activeTrigger.click = !context._activeTrigger.click;

            if (context._isWithActiveTrigger()) {
              context._enter(null, context);
            } else {
              context._leave(null, context);
            }
          } else {
            if ($(this.getTipElement()).hasClass(ClassName.SHOW)) {
              this._leave(null, this);

              return;
            }

            this._enter(null, this);
          }
        };

        _proto.dispose = function dispose() {
          clearTimeout(this._timeout);
          $.removeData(this.element, this.constructor.DATA_KEY);
          $(this.element).off(this.constructor.EVENT_KEY);
          $(this.element).closest('.modal').off('hide.bs.modal', this._hideModalHandler);

          if (this.tip) {
            $(this.tip).remove();
          }

          this._isEnabled = null;
          this._timeout = null;
          this._hoverState = null;
          this._activeTrigger = null;

          if (this._popper) {
            this._popper.destroy();
          }

          this._popper = null;
          this.element = null;
          this.config = null;
          this.tip = null;
        };

        _proto.show = function show() {
          var _this = this;

          if ($(this.element).css('display') === 'none') {
            throw new Error('Please use show on visible elements');
          }

          var showEvent = $.Event(this.constructor.Event.SHOW);

          if (this.isWithContent() && this._isEnabled) {
            $(this.element).trigger(showEvent);
            var shadowRoot = Util.findShadowRoot(this.element);
            var isInTheDom = $.contains(shadowRoot !== null ? shadowRoot : this.element.ownerDocument.documentElement, this.element);

            if (showEvent.isDefaultPrevented() || !isInTheDom) {
              return;
            }

            var tip = this.getTipElement();
            var tipId = Util.getUID(this.constructor.NAME);
            tip.setAttribute('id', tipId);
            this.element.setAttribute('aria-describedby', tipId);
            this.setContent();

            if (this.config.animation) {
              $(tip).addClass(ClassName.FADE);
            }

            var placement = typeof this.config.placement === 'function' ? this.config.placement.call(this, tip, this.element) : this.config.placement;

            var attachment = this._getAttachment(placement);

            this.addAttachmentClass(attachment);

            var container = this._getContainer();

            $(tip).data(this.constructor.DATA_KEY, this);

            if (!$.contains(this.element.ownerDocument.documentElement, this.tip)) {
              $(tip).appendTo(container);
            }

            $(this.element).trigger(this.constructor.Event.INSERTED);
            this._popper = new Popper(this.element, tip, this._getPopperConfig(attachment));
            $(tip).addClass(ClassName.SHOW); // If this is a touch-enabled device we add extra
            // empty mouseover listeners to the body's immediate children;
            // only needed because of broken event delegation on iOS
            // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html

            if ('ontouchstart' in document.documentElement) {
              $(document.body).children().on('mouseover', null, $.noop);
            }

            var complete = function complete() {
              if (_this.config.animation) {
                _this._fixTransition();
              }

              var prevHoverState = _this._hoverState;
              _this._hoverState = null;
              $(_this.element).trigger(_this.constructor.Event.SHOWN);

              if (prevHoverState === HoverState.OUT) {
                _this._leave(null, _this);
              }
            };

            if ($(this.tip).hasClass(ClassName.FADE)) {
              var transitionDuration = Util.getTransitionDurationFromElement(this.tip);
              $(this.tip).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
            } else {
              complete();
            }
          }
        };

        _proto.hide = function hide(callback) {
          var _this2 = this;

          var tip = this.getTipElement();
          var hideEvent = $.Event(this.constructor.Event.HIDE);

          var complete = function complete() {
            if (_this2._hoverState !== HoverState.SHOW && tip.parentNode) {
              tip.parentNode.removeChild(tip);
            }

            _this2._cleanTipClass();

            _this2.element.removeAttribute('aria-describedby');

            $(_this2.element).trigger(_this2.constructor.Event.HIDDEN);

            if (_this2._popper !== null) {
              _this2._popper.destroy();
            }

            if (callback) {
              callback();
            }
          };

          $(this.element).trigger(hideEvent);

          if (hideEvent.isDefaultPrevented()) {
            return;
          }

          $(tip).removeClass(ClassName.SHOW); // If this is a touch-enabled device we remove the extra
          // empty mouseover listeners we added for iOS support

          if ('ontouchstart' in document.documentElement) {
            $(document.body).children().off('mouseover', null, $.noop);
          }

          this._activeTrigger[Trigger.CLICK] = false;
          this._activeTrigger[Trigger.FOCUS] = false;
          this._activeTrigger[Trigger.HOVER] = false;

          if ($(this.tip).hasClass(ClassName.FADE)) {
            var transitionDuration = Util.getTransitionDurationFromElement(tip);
            $(tip).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
          } else {
            complete();
          }

          this._hoverState = '';
        };

        _proto.update = function update() {
          if (this._popper !== null) {
            this._popper.scheduleUpdate();
          }
        } // Protected
        ;

        _proto.isWithContent = function isWithContent() {
          return Boolean(this.getTitle());
        };

        _proto.addAttachmentClass = function addAttachmentClass(attachment) {
          $(this.getTipElement()).addClass(CLASS_PREFIX + "-" + attachment);
        };

        _proto.getTipElement = function getTipElement() {
          this.tip = this.tip || $(this.config.template)[0];
          return this.tip;
        };

        _proto.setContent = function setContent() {
          var tip = this.getTipElement();
          this.setElementContent($(tip.querySelectorAll(Selector.TOOLTIP_INNER)), this.getTitle());
          $(tip).removeClass(ClassName.FADE + " " + ClassName.SHOW);
        };

        _proto.setElementContent = function setElementContent($element, content) {
          if (_typeof(content) === 'object' && (content.nodeType || content.jquery)) {
            // Content is a DOM node or a jQuery
            if (this.config.html) {
              if (!$(content).parent().is($element)) {
                $element.empty().append(content);
              }
            } else {
              $element.text($(content).text());
            }

            return;
          }

          if (this.config.html) {
            if (this.config.sanitize) {
              content = sanitizeHtml(content, this.config.whiteList, this.config.sanitizeFn);
            }

            $element.html(content);
          } else {
            $element.text(content);
          }
        };

        _proto.getTitle = function getTitle() {
          var title = this.element.getAttribute('data-original-title');

          if (!title) {
            title = typeof this.config.title === 'function' ? this.config.title.call(this.element) : this.config.title;
          }

          return title;
        } // Private
        ;

        _proto._getPopperConfig = function _getPopperConfig(attachment) {
          var _this3 = this;

          var defaultBsConfig = {
            placement: attachment,
            modifiers: {
              offset: this._getOffset(),
              flip: {
                behavior: this.config.fallbackPlacement
              },
              arrow: {
                element: Selector.ARROW
              },
              preventOverflow: {
                boundariesElement: this.config.boundary
              }
            },
            onCreate: function onCreate(data) {
              if (data.originalPlacement !== data.placement) {
                _this3._handlePopperPlacementChange(data);
              }
            },
            onUpdate: function onUpdate(data) {
              return _this3._handlePopperPlacementChange(data);
            }
          };
          return _objectSpread2({}, defaultBsConfig, {}, this.config.popperConfig);
        };

        _proto._getOffset = function _getOffset() {
          var _this4 = this;

          var offset = {};

          if (typeof this.config.offset === 'function') {
            offset.fn = function (data) {
              data.offsets = _objectSpread2({}, data.offsets, {}, _this4.config.offset(data.offsets, _this4.element) || {});
              return data;
            };
          } else {
            offset.offset = this.config.offset;
          }

          return offset;
        };

        _proto._getContainer = function _getContainer() {
          if (this.config.container === false) {
            return document.body;
          }

          if (Util.isElement(this.config.container)) {
            return $(this.config.container);
          }

          return $(document).find(this.config.container);
        };

        _proto._getAttachment = function _getAttachment(placement) {
          return AttachmentMap[placement.toUpperCase()];
        };

        _proto._setListeners = function _setListeners() {
          var _this5 = this;

          var triggers = this.config.trigger.split(' ');
          triggers.forEach(function (trigger) {
            if (trigger === 'click') {
              $(_this5.element).on(_this5.constructor.Event.CLICK, _this5.config.selector, function (event) {
                return _this5.toggle(event);
              });
            } else if (trigger !== Trigger.MANUAL) {
              var eventIn = trigger === Trigger.HOVER ? _this5.constructor.Event.MOUSEENTER : _this5.constructor.Event.FOCUSIN;
              var eventOut = trigger === Trigger.HOVER ? _this5.constructor.Event.MOUSELEAVE : _this5.constructor.Event.FOCUSOUT;
              $(_this5.element).on(eventIn, _this5.config.selector, function (event) {
                return _this5._enter(event);
              }).on(eventOut, _this5.config.selector, function (event) {
                return _this5._leave(event);
              });
            }
          });

          this._hideModalHandler = function () {
            if (_this5.element) {
              _this5.hide();
            }
          };

          $(this.element).closest('.modal').on('hide.bs.modal', this._hideModalHandler);

          if (this.config.selector) {
            this.config = _objectSpread2({}, this.config, {
              trigger: 'manual',
              selector: ''
            });
          } else {
            this._fixTitle();
          }
        };

        _proto._fixTitle = function _fixTitle() {
          var titleType = _typeof(this.element.getAttribute('data-original-title'));

          if (this.element.getAttribute('title') || titleType !== 'string') {
            this.element.setAttribute('data-original-title', this.element.getAttribute('title') || '');
            this.element.setAttribute('title', '');
          }
        };

        _proto._enter = function _enter(event, context) {
          var dataKey = this.constructor.DATA_KEY;
          context = context || $(event.currentTarget).data(dataKey);

          if (!context) {
            context = new this.constructor(event.currentTarget, this._getDelegateConfig());
            $(event.currentTarget).data(dataKey, context);
          }

          if (event) {
            context._activeTrigger[event.type === 'focusin' ? Trigger.FOCUS : Trigger.HOVER] = true;
          }

          if ($(context.getTipElement()).hasClass(ClassName.SHOW) || context._hoverState === HoverState.SHOW) {
            context._hoverState = HoverState.SHOW;
            return;
          }

          clearTimeout(context._timeout);
          context._hoverState = HoverState.SHOW;

          if (!context.config.delay || !context.config.delay.show) {
            context.show();
            return;
          }

          context._timeout = setTimeout(function () {
            if (context._hoverState === HoverState.SHOW) {
              context.show();
            }
          }, context.config.delay.show);
        };

        _proto._leave = function _leave(event, context) {
          var dataKey = this.constructor.DATA_KEY;
          context = context || $(event.currentTarget).data(dataKey);

          if (!context) {
            context = new this.constructor(event.currentTarget, this._getDelegateConfig());
            $(event.currentTarget).data(dataKey, context);
          }

          if (event) {
            context._activeTrigger[event.type === 'focusout' ? Trigger.FOCUS : Trigger.HOVER] = false;
          }

          if (context._isWithActiveTrigger()) {
            return;
          }

          clearTimeout(context._timeout);
          context._hoverState = HoverState.OUT;

          if (!context.config.delay || !context.config.delay.hide) {
            context.hide();
            return;
          }

          context._timeout = setTimeout(function () {
            if (context._hoverState === HoverState.OUT) {
              context.hide();
            }
          }, context.config.delay.hide);
        };

        _proto._isWithActiveTrigger = function _isWithActiveTrigger() {
          for (var trigger in this._activeTrigger) {
            if (this._activeTrigger[trigger]) {
              return true;
            }
          }

          return false;
        };

        _proto._getConfig = function _getConfig(config) {
          var dataAttributes = $(this.element).data();
          Object.keys(dataAttributes).forEach(function (dataAttr) {
            if (DISALLOWED_ATTRIBUTES.indexOf(dataAttr) !== -1) {
              delete dataAttributes[dataAttr];
            }
          });
          config = _objectSpread2({}, this.constructor.Default, {}, dataAttributes, {}, _typeof(config) === 'object' && config ? config : {});

          if (typeof config.delay === 'number') {
            config.delay = {
              show: config.delay,
              hide: config.delay
            };
          }

          if (typeof config.title === 'number') {
            config.title = config.title.toString();
          }

          if (typeof config.content === 'number') {
            config.content = config.content.toString();
          }

          Util.typeCheckConfig(NAME, config, this.constructor.DefaultType);

          if (config.sanitize) {
            config.template = sanitizeHtml(config.template, config.whiteList, config.sanitizeFn);
          }

          return config;
        };

        _proto._getDelegateConfig = function _getDelegateConfig() {
          var config = {};

          if (this.config) {
            for (var key in this.config) {
              if (this.constructor.Default[key] !== this.config[key]) {
                config[key] = this.config[key];
              }
            }
          }

          return config;
        };

        _proto._cleanTipClass = function _cleanTipClass() {
          var $tip = $(this.getTipElement());
          var tabClass = $tip.attr('class').match(BSCLS_PREFIX_REGEX);

          if (tabClass !== null && tabClass.length) {
            $tip.removeClass(tabClass.join(''));
          }
        };

        _proto._handlePopperPlacementChange = function _handlePopperPlacementChange(popperData) {
          var popperInstance = popperData.instance;
          this.tip = popperInstance.popper;

          this._cleanTipClass();

          this.addAttachmentClass(this._getAttachment(popperData.placement));
        };

        _proto._fixTransition = function _fixTransition() {
          var tip = this.getTipElement();
          var initConfigAnimation = this.config.animation;

          if (tip.getAttribute('x-placement') !== null) {
            return;
          }

          $(tip).removeClass(ClassName.FADE);
          this.config.animation = false;
          this.hide();
          this.show();
          this.config.animation = initConfigAnimation;
        } // Static
        ;

        Tooltip._jQueryInterface = function _jQueryInterface(config) {
          return this.each(function () {
            var data = $(this).data(DATA_KEY);

            var _config = _typeof(config) === 'object' && config;

            if (!data && /dispose|hide/.test(config)) {
              return;
            }

            if (!data) {
              data = new Tooltip(this, _config);
              $(this).data(DATA_KEY, data);
            }

            if (typeof config === 'string') {
              if (typeof data[config] === 'undefined') {
                throw new TypeError("No method named \"" + config + "\"");
              }

              data[config]();
            }
          });
        };

        _createClass(Tooltip, null, [{
          key: "VERSION",
          get: function get() {
            return VERSION;
          }
        }, {
          key: "Default",
          get: function get() {
            return Default;
          }
        }, {
          key: "NAME",
          get: function get() {
            return NAME;
          }
        }, {
          key: "DATA_KEY",
          get: function get() {
            return DATA_KEY;
          }
        }, {
          key: "Event",
          get: function get() {
            return Event;
          }
        }, {
          key: "EVENT_KEY",
          get: function get() {
            return EVENT_KEY;
          }
        }, {
          key: "DefaultType",
          get: function get() {
            return DefaultType;
          }
        }]);

        return Tooltip;
      }();
      /**
       * ------------------------------------------------------------------------
       * jQuery
       * ------------------------------------------------------------------------
       */


      $.fn[NAME] = Tooltip._jQueryInterface;
      $.fn[NAME].Constructor = Tooltip;

      $.fn[NAME].noConflict = function () {
        $.fn[NAME] = JQUERY_NO_CONFLICT;
        return Tooltip._jQueryInterface;
      };

      return Tooltip;
    });
    /***/

  },

  /***/
  "./node_modules/bootstrap/js/dist/util.js":
  /*!************************************************!*\
    !*** ./node_modules/bootstrap/js/dist/util.js ***!
    \************************************************/

  /*! no static exports found */

  /***/
  function node_modulesBootstrapJsDistUtilJs(module, exports, __webpack_require__) {
    /*!
      * Bootstrap util.js v4.4.1 (https://getbootstrap.com/)
      * Copyright 2011-2019 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
      * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
      */
    (function (global, factory) {
      true ? module.exports = factory(__webpack_require__(
      /*! jquery */
      "jquery")) : undefined;
    })(this, function ($) {
      'use strict';

      $ = $ && $.hasOwnProperty('default') ? $['default'] : $;
      /**
       * --------------------------------------------------------------------------
       * Bootstrap (v4.4.1): util.js
       * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
       * --------------------------------------------------------------------------
       */

      /**
       * ------------------------------------------------------------------------
       * Private TransitionEnd Helpers
       * ------------------------------------------------------------------------
       */

      var TRANSITION_END = 'transitionend';
      var MAX_UID = 1000000;
      var MILLISECONDS_MULTIPLIER = 1000; // Shoutout AngusCroll (https://goo.gl/pxwQGp)

      function toType(obj) {
        return {}.toString.call(obj).match(/\s([a-z]+)/i)[1].toLowerCase();
      }

      function getSpecialTransitionEndEvent() {
        return {
          bindType: TRANSITION_END,
          delegateType: TRANSITION_END,
          handle: function handle(event) {
            if ($(event.target).is(this)) {
              return event.handleObj.handler.apply(this, arguments); // eslint-disable-line prefer-rest-params
            }

            return undefined; // eslint-disable-line no-undefined
          }
        };
      }

      function transitionEndEmulator(duration) {
        var _this = this;

        var called = false;
        $(this).one(Util.TRANSITION_END, function () {
          called = true;
        });
        setTimeout(function () {
          if (!called) {
            Util.triggerTransitionEnd(_this);
          }
        }, duration);
        return this;
      }

      function setTransitionEndSupport() {
        $.fn.emulateTransitionEnd = transitionEndEmulator;
        $.event.special[Util.TRANSITION_END] = getSpecialTransitionEndEvent();
      }
      /**
       * --------------------------------------------------------------------------
       * Public Util Api
       * --------------------------------------------------------------------------
       */


      var Util = {
        TRANSITION_END: 'bsTransitionEnd',
        getUID: function getUID(prefix) {
          do {
            // eslint-disable-next-line no-bitwise
            prefix += ~~(Math.random() * MAX_UID); // "~~" acts like a faster Math.floor() here
          } while (document.getElementById(prefix));

          return prefix;
        },
        getSelectorFromElement: function getSelectorFromElement(element) {
          var selector = element.getAttribute('data-target');

          if (!selector || selector === '#') {
            var hrefAttr = element.getAttribute('href');
            selector = hrefAttr && hrefAttr !== '#' ? hrefAttr.trim() : '';
          }

          try {
            return document.querySelector(selector) ? selector : null;
          } catch (err) {
            return null;
          }
        },
        getTransitionDurationFromElement: function getTransitionDurationFromElement(element) {
          if (!element) {
            return 0;
          } // Get transition-duration of the element


          var transitionDuration = $(element).css('transition-duration');
          var transitionDelay = $(element).css('transition-delay');
          var floatTransitionDuration = parseFloat(transitionDuration);
          var floatTransitionDelay = parseFloat(transitionDelay); // Return 0 if element or transition duration is not found

          if (!floatTransitionDuration && !floatTransitionDelay) {
            return 0;
          } // If multiple durations are defined, take the first


          transitionDuration = transitionDuration.split(',')[0];
          transitionDelay = transitionDelay.split(',')[0];
          return (parseFloat(transitionDuration) + parseFloat(transitionDelay)) * MILLISECONDS_MULTIPLIER;
        },
        reflow: function reflow(element) {
          return element.offsetHeight;
        },
        triggerTransitionEnd: function triggerTransitionEnd(element) {
          $(element).trigger(TRANSITION_END);
        },
        // TODO: Remove in v5
        supportsTransitionEnd: function supportsTransitionEnd() {
          return Boolean(TRANSITION_END);
        },
        isElement: function isElement(obj) {
          return (obj[0] || obj).nodeType;
        },
        typeCheckConfig: function typeCheckConfig(componentName, config, configTypes) {
          for (var property in configTypes) {
            if (Object.prototype.hasOwnProperty.call(configTypes, property)) {
              var expectedTypes = configTypes[property];
              var value = config[property];
              var valueType = value && Util.isElement(value) ? 'element' : toType(value);

              if (!new RegExp(expectedTypes).test(valueType)) {
                throw new Error(componentName.toUpperCase() + ": " + ("Option \"" + property + "\" provided type \"" + valueType + "\" ") + ("but expected type \"" + expectedTypes + "\"."));
              }
            }
          }
        },
        findShadowRoot: function findShadowRoot(element) {
          if (!document.documentElement.attachShadow) {
            return null;
          } // Can find the shadow root otherwise it'll return the document


          if (typeof element.getRootNode === 'function') {
            var root = element.getRootNode();
            return root instanceof ShadowRoot ? root : null;
          }

          if (element instanceof ShadowRoot) {
            return element;
          } // when we don't find a shadow root


          if (!element.parentNode) {
            return null;
          }

          return Util.findShadowRoot(element.parentNode);
        },
        jQueryDetection: function jQueryDetection() {
          if (typeof $ === 'undefined') {
            throw new TypeError('Bootstrap\'s JavaScript requires jQuery. jQuery must be included before Bootstrap\'s JavaScript.');
          }

          var version = $.fn.jquery.split(' ')[0].split('.');
          var minMajor = 1;
          var ltMajor = 2;
          var minMinor = 9;
          var minPatch = 1;
          var maxMajor = 4;

          if (version[0] < ltMajor && version[1] < minMinor || version[0] === minMajor && version[1] === minMinor && version[2] < minPatch || version[0] >= maxMajor) {
            throw new Error('Bootstrap\'s JavaScript requires at least jQuery v1.9.1 but less than v4.0.0');
          }
        }
      };
      Util.jQueryDetection();
      setTransitionEndSupport();
      return Util;
    });
    /***/

  },

  /***/
  "./node_modules/lodash/_DataView.js":
  /*!******************************************!*\
    !*** ./node_modules/lodash/_DataView.js ***!
    \******************************************/

  /*! no static exports found */

  /***/
  function node_modulesLodash_DataViewJs(module, exports, __webpack_require__) {
    var getNative = __webpack_require__(
    /*! ./_getNative */
    "./node_modules/lodash/_getNative.js"),
        root = __webpack_require__(
    /*! ./_root */
    "./node_modules/lodash/_root.js");
    /* Built-in method references that are verified to be native. */


    var DataView = getNative(root, 'DataView');
    module.exports = DataView;
    /***/
  },

  /***/
  "./node_modules/lodash/_Hash.js":
  /*!**************************************!*\
    !*** ./node_modules/lodash/_Hash.js ***!
    \**************************************/

  /*! no static exports found */

  /***/
  function node_modulesLodash_HashJs(module, exports, __webpack_require__) {
    var hashClear = __webpack_require__(
    /*! ./_hashClear */
    "./node_modules/lodash/_hashClear.js"),
        hashDelete = __webpack_require__(
    /*! ./_hashDelete */
    "./node_modules/lodash/_hashDelete.js"),
        hashGet = __webpack_require__(
    /*! ./_hashGet */
    "./node_modules/lodash/_hashGet.js"),
        hashHas = __webpack_require__(
    /*! ./_hashHas */
    "./node_modules/lodash/_hashHas.js"),
        hashSet = __webpack_require__(
    /*! ./_hashSet */
    "./node_modules/lodash/_hashSet.js");
    /**
     * Creates a hash object.
     *
     * @private
     * @constructor
     * @param {Array} [entries] The key-value pairs to cache.
     */


    function Hash(entries) {
      var index = -1,
          length = entries == null ? 0 : entries.length;
      this.clear();

      while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    } // Add methods to `Hash`.


    Hash.prototype.clear = hashClear;
    Hash.prototype['delete'] = hashDelete;
    Hash.prototype.get = hashGet;
    Hash.prototype.has = hashHas;
    Hash.prototype.set = hashSet;
    module.exports = Hash;
    /***/
  },

  /***/
  "./node_modules/lodash/_ListCache.js":
  /*!*******************************************!*\
    !*** ./node_modules/lodash/_ListCache.js ***!
    \*******************************************/

  /*! no static exports found */

  /***/
  function node_modulesLodash_ListCacheJs(module, exports, __webpack_require__) {
    var listCacheClear = __webpack_require__(
    /*! ./_listCacheClear */
    "./node_modules/lodash/_listCacheClear.js"),
        listCacheDelete = __webpack_require__(
    /*! ./_listCacheDelete */
    "./node_modules/lodash/_listCacheDelete.js"),
        listCacheGet = __webpack_require__(
    /*! ./_listCacheGet */
    "./node_modules/lodash/_listCacheGet.js"),
        listCacheHas = __webpack_require__(
    /*! ./_listCacheHas */
    "./node_modules/lodash/_listCacheHas.js"),
        listCacheSet = __webpack_require__(
    /*! ./_listCacheSet */
    "./node_modules/lodash/_listCacheSet.js");
    /**
     * Creates an list cache object.
     *
     * @private
     * @constructor
     * @param {Array} [entries] The key-value pairs to cache.
     */


    function ListCache(entries) {
      var index = -1,
          length = entries == null ? 0 : entries.length;
      this.clear();

      while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    } // Add methods to `ListCache`.


    ListCache.prototype.clear = listCacheClear;
    ListCache.prototype['delete'] = listCacheDelete;
    ListCache.prototype.get = listCacheGet;
    ListCache.prototype.has = listCacheHas;
    ListCache.prototype.set = listCacheSet;
    module.exports = ListCache;
    /***/
  },

  /***/
  "./node_modules/lodash/_Map.js":
  /*!*************************************!*\
    !*** ./node_modules/lodash/_Map.js ***!
    \*************************************/

  /*! no static exports found */

  /***/
  function node_modulesLodash_MapJs(module, exports, __webpack_require__) {
    var getNative = __webpack_require__(
    /*! ./_getNative */
    "./node_modules/lodash/_getNative.js"),
        root = __webpack_require__(
    /*! ./_root */
    "./node_modules/lodash/_root.js");
    /* Built-in method references that are verified to be native. */


    var Map = getNative(root, 'Map');
    module.exports = Map;
    /***/
  },

  /***/
  "./node_modules/lodash/_MapCache.js":
  /*!******************************************!*\
    !*** ./node_modules/lodash/_MapCache.js ***!
    \******************************************/

  /*! no static exports found */

  /***/
  function node_modulesLodash_MapCacheJs(module, exports, __webpack_require__) {
    var mapCacheClear = __webpack_require__(
    /*! ./_mapCacheClear */
    "./node_modules/lodash/_mapCacheClear.js"),
        mapCacheDelete = __webpack_require__(
    /*! ./_mapCacheDelete */
    "./node_modules/lodash/_mapCacheDelete.js"),
        mapCacheGet = __webpack_require__(
    /*! ./_mapCacheGet */
    "./node_modules/lodash/_mapCacheGet.js"),
        mapCacheHas = __webpack_require__(
    /*! ./_mapCacheHas */
    "./node_modules/lodash/_mapCacheHas.js"),
        mapCacheSet = __webpack_require__(
    /*! ./_mapCacheSet */
    "./node_modules/lodash/_mapCacheSet.js");
    /**
     * Creates a map cache object to store key-value pairs.
     *
     * @private
     * @constructor
     * @param {Array} [entries] The key-value pairs to cache.
     */


    function MapCache(entries) {
      var index = -1,
          length = entries == null ? 0 : entries.length;
      this.clear();

      while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    } // Add methods to `MapCache`.


    MapCache.prototype.clear = mapCacheClear;
    MapCache.prototype['delete'] = mapCacheDelete;
    MapCache.prototype.get = mapCacheGet;
    MapCache.prototype.has = mapCacheHas;
    MapCache.prototype.set = mapCacheSet;
    module.exports = MapCache;
    /***/
  },

  /***/
  "./node_modules/lodash/_Promise.js":
  /*!*****************************************!*\
    !*** ./node_modules/lodash/_Promise.js ***!
    \*****************************************/

  /*! no static exports found */

  /***/
  function node_modulesLodash_PromiseJs(module, exports, __webpack_require__) {
    var getNative = __webpack_require__(
    /*! ./_getNative */
    "./node_modules/lodash/_getNative.js"),
        root = __webpack_require__(
    /*! ./_root */
    "./node_modules/lodash/_root.js");
    /* Built-in method references that are verified to be native. */


    var Promise = getNative(root, 'Promise');
    module.exports = Promise;
    /***/
  },

  /***/
  "./node_modules/lodash/_Set.js":
  /*!*************************************!*\
    !*** ./node_modules/lodash/_Set.js ***!
    \*************************************/

  /*! no static exports found */

  /***/
  function node_modulesLodash_SetJs(module, exports, __webpack_require__) {
    var getNative = __webpack_require__(
    /*! ./_getNative */
    "./node_modules/lodash/_getNative.js"),
        root = __webpack_require__(
    /*! ./_root */
    "./node_modules/lodash/_root.js");
    /* Built-in method references that are verified to be native. */


    var Set = getNative(root, 'Set');
    module.exports = Set;
    /***/
  },

  /***/
  "./node_modules/lodash/_SetCache.js":
  /*!******************************************!*\
    !*** ./node_modules/lodash/_SetCache.js ***!
    \******************************************/

  /*! no static exports found */

  /***/
  function node_modulesLodash_SetCacheJs(module, exports, __webpack_require__) {
    var MapCache = __webpack_require__(
    /*! ./_MapCache */
    "./node_modules/lodash/_MapCache.js"),
        setCacheAdd = __webpack_require__(
    /*! ./_setCacheAdd */
    "./node_modules/lodash/_setCacheAdd.js"),
        setCacheHas = __webpack_require__(
    /*! ./_setCacheHas */
    "./node_modules/lodash/_setCacheHas.js");
    /**
     *
     * Creates an array cache object to store unique values.
     *
     * @private
     * @constructor
     * @param {Array} [values] The values to cache.
     */


    function SetCache(values) {
      var index = -1,
          length = values == null ? 0 : values.length;
      this.__data__ = new MapCache();

      while (++index < length) {
        this.add(values[index]);
      }
    } // Add methods to `SetCache`.


    SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
    SetCache.prototype.has = setCacheHas;
    module.exports = SetCache;
    /***/
  },

  /***/
  "./node_modules/lodash/_Stack.js":
  /*!***************************************!*\
    !*** ./node_modules/lodash/_Stack.js ***!
    \***************************************/

  /*! no static exports found */

  /***/
  function node_modulesLodash_StackJs(module, exports, __webpack_require__) {
    var ListCache = __webpack_require__(
    /*! ./_ListCache */
    "./node_modules/lodash/_ListCache.js"),
        stackClear = __webpack_require__(
    /*! ./_stackClear */
    "./node_modules/lodash/_stackClear.js"),
        stackDelete = __webpack_require__(
    /*! ./_stackDelete */
    "./node_modules/lodash/_stackDelete.js"),
        stackGet = __webpack_require__(
    /*! ./_stackGet */
    "./node_modules/lodash/_stackGet.js"),
        stackHas = __webpack_require__(
    /*! ./_stackHas */
    "./node_modules/lodash/_stackHas.js"),
        stackSet = __webpack_require__(
    /*! ./_stackSet */
    "./node_modules/lodash/_stackSet.js");
    /**
     * Creates a stack cache object to store key-value pairs.
     *
     * @private
     * @constructor
     * @param {Array} [entries] The key-value pairs to cache.
     */


    function Stack(entries) {
      var data = this.__data__ = new ListCache(entries);
      this.size = data.size;
    } // Add methods to `Stack`.


    Stack.prototype.clear = stackClear;
    Stack.prototype['delete'] = stackDelete;
    Stack.prototype.get = stackGet;
    Stack.prototype.has = stackHas;
    Stack.prototype.set = stackSet;
    module.exports = Stack;
    /***/
  },

  /***/
  "./node_modules/lodash/_Symbol.js":
  /*!****************************************!*\
    !*** ./node_modules/lodash/_Symbol.js ***!
    \****************************************/

  /*! no static exports found */

  /***/
  function node_modulesLodash_SymbolJs(module, exports, __webpack_require__) {
    var root = __webpack_require__(
    /*! ./_root */
    "./node_modules/lodash/_root.js");
    /** Built-in value references. */


    var _Symbol = root.Symbol;
    module.exports = _Symbol;
    /***/
  },

  /***/
  "./node_modules/lodash/_Uint8Array.js":
  /*!********************************************!*\
    !*** ./node_modules/lodash/_Uint8Array.js ***!
    \********************************************/

  /*! no static exports found */

  /***/
  function node_modulesLodash_Uint8ArrayJs(module, exports, __webpack_require__) {
    var root = __webpack_require__(
    /*! ./_root */
    "./node_modules/lodash/_root.js");
    /** Built-in value references. */


    var Uint8Array = root.Uint8Array;
    module.exports = Uint8Array;
    /***/
  },

  /***/
  "./node_modules/lodash/_WeakMap.js":
  /*!*****************************************!*\
    !*** ./node_modules/lodash/_WeakMap.js ***!
    \*****************************************/

  /*! no static exports found */

  /***/
  function node_modulesLodash_WeakMapJs(module, exports, __webpack_require__) {
    var getNative = __webpack_require__(
    /*! ./_getNative */
    "./node_modules/lodash/_getNative.js"),
        root = __webpack_require__(
    /*! ./_root */
    "./node_modules/lodash/_root.js");
    /* Built-in method references that are verified to be native. */


    var WeakMap = getNative(root, 'WeakMap');
    module.exports = WeakMap;
    /***/
  },

  /***/
  "./node_modules/lodash/_arrayFilter.js":
  /*!*********************************************!*\
    !*** ./node_modules/lodash/_arrayFilter.js ***!
    \*********************************************/

  /*! no static exports found */

  /***/
  function node_modulesLodash_arrayFilterJs(module, exports) {
    /**
     * A specialized version of `_.filter` for arrays without support for
     * iteratee shorthands.
     *
     * @private
     * @param {Array} [array] The array to iterate over.
     * @param {Function} predicate The function invoked per iteration.
     * @returns {Array} Returns the new filtered array.
     */
    function arrayFilter(array, predicate) {
      var index = -1,
          length = array == null ? 0 : array.length,
          resIndex = 0,
          result = [];

      while (++index < length) {
        var value = array[index];

        if (predicate(value, index, array)) {
          result[resIndex++] = value;
        }
      }

      return result;
    }

    module.exports = arrayFilter;
    /***/
  },

  /***/
  "./node_modules/lodash/_arrayLikeKeys.js":
  /*!***********************************************!*\
    !*** ./node_modules/lodash/_arrayLikeKeys.js ***!
    \***********************************************/

  /*! no static exports found */

  /***/
  function node_modulesLodash_arrayLikeKeysJs(module, exports, __webpack_require__) {
    var baseTimes = __webpack_require__(
    /*! ./_baseTimes */
    "./node_modules/lodash/_baseTimes.js"),
        isArguments = __webpack_require__(
    /*! ./isArguments */
    "./node_modules/lodash/isArguments.js"),
        isArray = __webpack_require__(
    /*! ./isArray */
    "./node_modules/lodash/isArray.js"),
        isBuffer = __webpack_require__(
    /*! ./isBuffer */
    "./node_modules/lodash/isBuffer.js"),
        isIndex = __webpack_require__(
    /*! ./_isIndex */
    "./node_modules/lodash/_isIndex.js"),
        isTypedArray = __webpack_require__(
    /*! ./isTypedArray */
    "./node_modules/lodash/isTypedArray.js");
    /** Used for built-in method references. */


    var objectProto = Object.prototype;
    /** Used to check objects for own properties. */

    var hasOwnProperty = objectProto.hasOwnProperty;
    /**
     * Creates an array of the enumerable property names of the array-like `value`.
     *
     * @private
     * @param {*} value The value to query.
     * @param {boolean} inherited Specify returning inherited property names.
     * @returns {Array} Returns the array of property names.
     */

    function arrayLikeKeys(value, inherited) {
      var isArr = isArray(value),
          isArg = !isArr && isArguments(value),
          isBuff = !isArr && !isArg && isBuffer(value),
          isType = !isArr && !isArg && !isBuff && isTypedArray(value),
          skipIndexes = isArr || isArg || isBuff || isType,
          result = skipIndexes ? baseTimes(value.length, String) : [],
          length = result.length;

      for (var key in value) {
        if ((inherited || hasOwnProperty.call(value, key)) && !(skipIndexes && ( // Safari 9 has enumerable `arguments.length` in strict mode.
        key == 'length' || // Node.js 0.10 has enumerable non-index properties on buffers.
        isBuff && (key == 'offset' || key == 'parent') || // PhantomJS 2 has enumerable non-index properties on typed arrays.
        isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset') || // Skip index properties.
        isIndex(key, length)))) {
          result.push(key);
        }
      }

      return result;
    }

    module.exports = arrayLikeKeys;
    /***/
  },

  /***/
  "./node_modules/lodash/_arrayMap.js":
  /*!******************************************!*\
    !*** ./node_modules/lodash/_arrayMap.js ***!
    \******************************************/

  /*! no static exports found */

  /***/
  function node_modulesLodash_arrayMapJs(module, exports) {
    /**
     * A specialized version of `_.map` for arrays without support for iteratee
     * shorthands.
     *
     * @private
     * @param {Array} [array] The array to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @returns {Array} Returns the new mapped array.
     */
    function arrayMap(array, iteratee) {
      var index = -1,
          length = array == null ? 0 : array.length,
          result = Array(length);

      while (++index < length) {
        result[index] = iteratee(array[index], index, array);
      }

      return result;
    }

    module.exports = arrayMap;
    /***/
  },

  /***/
  "./node_modules/lodash/_arrayPush.js":
  /*!*******************************************!*\
    !*** ./node_modules/lodash/_arrayPush.js ***!
    \*******************************************/

  /*! no static exports found */

  /***/
  function node_modulesLodash_arrayPushJs(module, exports) {
    /**
     * Appends the elements of `values` to `array`.
     *
     * @private
     * @param {Array} array The array to modify.
     * @param {Array} values The values to append.
     * @returns {Array} Returns `array`.
     */
    function arrayPush(array, values) {
      var index = -1,
          length = values.length,
          offset = array.length;

      while (++index < length) {
        array[offset + index] = values[index];
      }

      return array;
    }

    module.exports = arrayPush;
    /***/
  },

  /***/
  "./node_modules/lodash/_arraySome.js":
  /*!*******************************************!*\
    !*** ./node_modules/lodash/_arraySome.js ***!
    \*******************************************/

  /*! no static exports found */

  /***/
  function node_modulesLodash_arraySomeJs(module, exports) {
    /**
     * A specialized version of `_.some` for arrays without support for iteratee
     * shorthands.
     *
     * @private
     * @param {Array} [array] The array to iterate over.
     * @param {Function} predicate The function invoked per iteration.
     * @returns {boolean} Returns `true` if any element passes the predicate check,
     *  else `false`.
     */
    function arraySome(array, predicate) {
      var index = -1,
          length = array == null ? 0 : array.length;

      while (++index < length) {
        if (predicate(array[index], index, array)) {
          return true;
        }
      }

      return false;
    }

    module.exports = arraySome;
    /***/
  },

  /***/
  "./node_modules/lodash/_assignValue.js":
  /*!*********************************************!*\
    !*** ./node_modules/lodash/_assignValue.js ***!
    \*********************************************/

  /*! no static exports found */

  /***/
  function node_modulesLodash_assignValueJs(module, exports, __webpack_require__) {
    var baseAssignValue = __webpack_require__(
    /*! ./_baseAssignValue */
    "./node_modules/lodash/_baseAssignValue.js"),
        eq = __webpack_require__(
    /*! ./eq */
    "./node_modules/lodash/eq.js");
    /** Used for built-in method references. */


    var objectProto = Object.prototype;
    /** Used to check objects for own properties. */

    var hasOwnProperty = objectProto.hasOwnProperty;
    /**
     * Assigns `value` to `key` of `object` if the existing value is not equivalent
     * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons.
     *
     * @private
     * @param {Object} object The object to modify.
     * @param {string} key The key of the property to assign.
     * @param {*} value The value to assign.
     */

    function assignValue(object, key, value) {
      var objValue = object[key];

      if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) || value === undefined && !(key in object)) {
        baseAssignValue(object, key, value);
      }
    }

    module.exports = assignValue;
    /***/
  },

  /***/
  "./node_modules/lodash/_assocIndexOf.js":
  /*!**********************************************!*\
    !*** ./node_modules/lodash/_assocIndexOf.js ***!
    \**********************************************/

  /*! no static exports found */

  /***/
  function node_modulesLodash_assocIndexOfJs(module, exports, __webpack_require__) {
    var eq = __webpack_require__(
    /*! ./eq */
    "./node_modules/lodash/eq.js");
    /**
     * Gets the index at which the `key` is found in `array` of key-value pairs.
     *
     * @private
     * @param {Array} array The array to inspect.
     * @param {*} key The key to search for.
     * @returns {number} Returns the index of the matched value, else `-1`.
     */


    function assocIndexOf(array, key) {
      var length = array.length;

      while (length--) {
        if (eq(array[length][0], key)) {
          return length;
        }
      }

      return -1;
    }

    module.exports = assocIndexOf;
    /***/
  },

  /***/
  "./node_modules/lodash/_baseAssignValue.js":
  /*!*************************************************!*\
    !*** ./node_modules/lodash/_baseAssignValue.js ***!
    \*************************************************/

  /*! no static exports found */

  /***/
  function node_modulesLodash_baseAssignValueJs(module, exports, __webpack_require__) {
    var defineProperty = __webpack_require__(
    /*! ./_defineProperty */
    "./node_modules/lodash/_defineProperty.js");
    /**
     * The base implementation of `assignValue` and `assignMergeValue` without
     * value checks.
     *
     * @private
     * @param {Object} object The object to modify.
     * @param {string} key The key of the property to assign.
     * @param {*} value The value to assign.
     */


    function baseAssignValue(object, key, value) {
      if (key == '__proto__' && defineProperty) {
        defineProperty(object, key, {
          'configurable': true,
          'enumerable': true,
          'value': value,
          'writable': true
        });
      } else {
        object[key] = value;
      }
    }

    module.exports = baseAssignValue;
    /***/
  },

  /***/
  "./node_modules/lodash/_baseEach.js":
  /*!******************************************!*\
    !*** ./node_modules/lodash/_baseEach.js ***!
    \******************************************/

  /*! no static exports found */

  /***/
  function node_modulesLodash_baseEachJs(module, exports, __webpack_require__) {
    var baseForOwn = __webpack_require__(
    /*! ./_baseForOwn */
    "./node_modules/lodash/_baseForOwn.js"),
        createBaseEach = __webpack_require__(
    /*! ./_createBaseEach */
    "./node_modules/lodash/_createBaseEach.js");
    /**
     * The base implementation of `_.forEach` without support for iteratee shorthands.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @returns {Array|Object} Returns `collection`.
     */


    var baseEach = createBaseEach(baseForOwn);
    module.exports = baseEach;
    /***/
  },

  /***/
  "./node_modules/lodash/_baseFilter.js":
  /*!********************************************!*\
    !*** ./node_modules/lodash/_baseFilter.js ***!
    \********************************************/

  /*! no static exports found */

  /***/
  function node_modulesLodash_baseFilterJs(module, exports, __webpack_require__) {
    var baseEach = __webpack_require__(
    /*! ./_baseEach */
    "./node_modules/lodash/_baseEach.js");
    /**
     * The base implementation of `_.filter` without support for iteratee shorthands.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} predicate The function invoked per iteration.
     * @returns {Array} Returns the new filtered array.
     */


    function baseFilter(collection, predicate) {
      var result = [];
      baseEach(collection, function (value, index, collection) {
        if (predicate(value, index, collection)) {
          result.push(value);
        }
      });
      return result;
    }

    module.exports = baseFilter;
    /***/
  },

  /***/
  "./node_modules/lodash/_baseFor.js":
  /*!*****************************************!*\
    !*** ./node_modules/lodash/_baseFor.js ***!
    \*****************************************/

  /*! no static exports found */

  /***/
  function node_modulesLodash_baseForJs(module, exports, __webpack_require__) {
    var createBaseFor = __webpack_require__(
    /*! ./_createBaseFor */
    "./node_modules/lodash/_createBaseFor.js");
    /**
     * The base implementation of `baseForOwn` which iterates over `object`
     * properties returned by `keysFunc` and invokes `iteratee` for each property.
     * Iteratee functions may exit iteration early by explicitly returning `false`.
     *
     * @private
     * @param {Object} object The object to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @param {Function} keysFunc The function to get the keys of `object`.
     * @returns {Object} Returns `object`.
     */


    var baseFor = createBaseFor();
    module.exports = baseFor;
    /***/
  },

  /***/
  "./node_modules/lodash/_baseForOwn.js":
  /*!********************************************!*\
    !*** ./node_modules/lodash/_baseForOwn.js ***!
    \********************************************/

  /*! no static exports found */

  /***/
  function node_modulesLodash_baseForOwnJs(module, exports, __webpack_require__) {
    var baseFor = __webpack_require__(
    /*! ./_baseFor */
    "./node_modules/lodash/_baseFor.js"),
        keys = __webpack_require__(
    /*! ./keys */
    "./node_modules/lodash/keys.js");
    /**
     * The base implementation of `_.forOwn` without support for iteratee shorthands.
     *
     * @private
     * @param {Object} object The object to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @returns {Object} Returns `object`.
     */


    function baseForOwn(object, iteratee) {
      return object && baseFor(object, iteratee, keys);
    }

    module.exports = baseForOwn;
    /***/
  },

  /***/
  "./node_modules/lodash/_baseGet.js":
  /*!*****************************************!*\
    !*** ./node_modules/lodash/_baseGet.js ***!
    \*****************************************/

  /*! no static exports found */

  /***/
  function node_modulesLodash_baseGetJs(module, exports, __webpack_require__) {
    var castPath = __webpack_require__(
    /*! ./_castPath */
    "./node_modules/lodash/_castPath.js"),
        toKey = __webpack_require__(
    /*! ./_toKey */
    "./node_modules/lodash/_toKey.js");
    /**
     * The base implementation of `_.get` without support for default values.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {Array|string} path The path of the property to get.
     * @returns {*} Returns the resolved value.
     */


    function baseGet(object, path) {
      path = castPath(path, object);
      var index = 0,
          length = path.length;

      while (object != null && index < length) {
        object = object[toKey(path[index++])];
      }

      return index && index == length ? object : undefined;
    }

    module.exports = baseGet;
    /***/
  },

  /***/
  "./node_modules/lodash/_baseGetAllKeys.js":
  /*!************************************************!*\
    !*** ./node_modules/lodash/_baseGetAllKeys.js ***!
    \************************************************/

  /*! no static exports found */

  /***/
  function node_modulesLodash_baseGetAllKeysJs(module, exports, __webpack_require__) {
    var arrayPush = __webpack_require__(
    /*! ./_arrayPush */
    "./node_modules/lodash/_arrayPush.js"),
        isArray = __webpack_require__(
    /*! ./isArray */
    "./node_modules/lodash/isArray.js");
    /**
     * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
     * `keysFunc` and `symbolsFunc` to get the enumerable property names and
     * symbols of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {Function} keysFunc The function to get the keys of `object`.
     * @param {Function} symbolsFunc The function to get the symbols of `object`.
     * @returns {Array} Returns the array of property names and symbols.
     */


    function baseGetAllKeys(object, keysFunc, symbolsFunc) {
      var result = keysFunc(object);
      return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
    }

    module.exports = baseGetAllKeys;
    /***/
  },

  /***/
  "./node_modules/lodash/_baseGetTag.js":
  /*!********************************************!*\
    !*** ./node_modules/lodash/_baseGetTag.js ***!
    \********************************************/

  /*! no static exports found */

  /***/
  function node_modulesLodash_baseGetTagJs(module, exports, __webpack_require__) {
    var _Symbol2 = __webpack_require__(
    /*! ./_Symbol */
    "./node_modules/lodash/_Symbol.js"),
        getRawTag = __webpack_require__(
    /*! ./_getRawTag */
    "./node_modules/lodash/_getRawTag.js"),
        objectToString = __webpack_require__(
    /*! ./_objectToString */
    "./node_modules/lodash/_objectToString.js");
    /** `Object#toString` result references. */


    var nullTag = '[object Null]',
        undefinedTag = '[object Undefined]';
    /** Built-in value references. */

    var symToStringTag = _Symbol2 ? _Symbol2.toStringTag : undefined;
    /**
     * The base implementation of `getTag` without fallbacks for buggy environments.
     *
     * @private
     * @param {*} value The value to query.
     * @returns {string} Returns the `toStringTag`.
     */

    function baseGetTag(value) {
      if (value == null) {
        return value === undefined ? undefinedTag : nullTag;
      }

      return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
    }

    module.exports = baseGetTag;
    /***/
  },

  /***/
  "./node_modules/lodash/_baseHasIn.js":
  /*!*******************************************!*\
    !*** ./node_modules/lodash/_baseHasIn.js ***!
    \*******************************************/

  /*! no static exports found */

  /***/
  function node_modulesLodash_baseHasInJs(module, exports) {
    /**
     * The base implementation of `_.hasIn` without support for deep paths.
     *
     * @private
     * @param {Object} [object] The object to query.
     * @param {Array|string} key The key to check.
     * @returns {boolean} Returns `true` if `key` exists, else `false`.
     */
    function baseHasIn(object, key) {
      return object != null && key in Object(object);
    }

    module.exports = baseHasIn;
    /***/
  },

  /***/
  "./node_modules/lodash/_baseIsArguments.js":
  /*!*************************************************!*\
    !*** ./node_modules/lodash/_baseIsArguments.js ***!
    \*************************************************/

  /*! no static exports found */

  /***/
  function node_modulesLodash_baseIsArgumentsJs(module, exports, __webpack_require__) {
    var baseGetTag = __webpack_require__(
    /*! ./_baseGetTag */
    "./node_modules/lodash/_baseGetTag.js"),
        isObjectLike = __webpack_require__(
    /*! ./isObjectLike */
    "./node_modules/lodash/isObjectLike.js");
    /** `Object#toString` result references. */


    var argsTag = '[object Arguments]';
    /**
     * The base implementation of `_.isArguments`.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an `arguments` object,
     */

    function baseIsArguments(value) {
      return isObjectLike(value) && baseGetTag(value) == argsTag;
    }

    module.exports = baseIsArguments;
    /***/
  },

  /***/
  "./node_modules/lodash/_baseIsEqual.js":
  /*!*********************************************!*\
    !*** ./node_modules/lodash/_baseIsEqual.js ***!
    \*********************************************/

  /*! no static exports found */

  /***/
  function node_modulesLodash_baseIsEqualJs(module, exports, __webpack_require__) {
    var baseIsEqualDeep = __webpack_require__(
    /*! ./_baseIsEqualDeep */
    "./node_modules/lodash/_baseIsEqualDeep.js"),
        isObjectLike = __webpack_require__(
    /*! ./isObjectLike */
    "./node_modules/lodash/isObjectLike.js");
    /**
     * The base implementation of `_.isEqual` which supports partial comparisons
     * and tracks traversed objects.
     *
     * @private
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @param {boolean} bitmask The bitmask flags.
     *  1 - Unordered comparison
     *  2 - Partial comparison
     * @param {Function} [customizer] The function to customize comparisons.
     * @param {Object} [stack] Tracks traversed `value` and `other` objects.
     * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
     */


    function baseIsEqual(value, other, bitmask, customizer, stack) {
      if (value === other) {
        return true;
      }

      if (value == null || other == null || !isObjectLike(value) && !isObjectLike(other)) {
        return value !== value && other !== other;
      }

      return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
    }

    module.exports = baseIsEqual;
    /***/
  },

  /***/
  "./node_modules/lodash/_baseIsEqualDeep.js":
  /*!*************************************************!*\
    !*** ./node_modules/lodash/_baseIsEqualDeep.js ***!
    \*************************************************/

  /*! no static exports found */

  /***/
  function node_modulesLodash_baseIsEqualDeepJs(module, exports, __webpack_require__) {
    var Stack = __webpack_require__(
    /*! ./_Stack */
    "./node_modules/lodash/_Stack.js"),
        equalArrays = __webpack_require__(
    /*! ./_equalArrays */
    "./node_modules/lodash/_equalArrays.js"),
        equalByTag = __webpack_require__(
    /*! ./_equalByTag */
    "./node_modules/lodash/_equalByTag.js"),
        equalObjects = __webpack_require__(
    /*! ./_equalObjects */
    "./node_modules/lodash/_equalObjects.js"),
        getTag = __webpack_require__(
    /*! ./_getTag */
    "./node_modules/lodash/_getTag.js"),
        isArray = __webpack_require__(
    /*! ./isArray */
    "./node_modules/lodash/isArray.js"),
        isBuffer = __webpack_require__(
    /*! ./isBuffer */
    "./node_modules/lodash/isBuffer.js"),
        isTypedArray = __webpack_require__(
    /*! ./isTypedArray */
    "./node_modules/lodash/isTypedArray.js");
    /** Used to compose bitmasks for value comparisons. */


    var COMPARE_PARTIAL_FLAG = 1;
    /** `Object#toString` result references. */

    var argsTag = '[object Arguments]',
        arrayTag = '[object Array]',
        objectTag = '[object Object]';
    /** Used for built-in method references. */

    var objectProto = Object.prototype;
    /** Used to check objects for own properties. */

    var hasOwnProperty = objectProto.hasOwnProperty;
    /**
     * A specialized version of `baseIsEqual` for arrays and objects which performs
     * deep comparisons and tracks traversed objects enabling objects with circular
     * references to be compared.
     *
     * @private
     * @param {Object} object The object to compare.
     * @param {Object} other The other object to compare.
     * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
     * @param {Function} customizer The function to customize comparisons.
     * @param {Function} equalFunc The function to determine equivalents of values.
     * @param {Object} [stack] Tracks traversed `object` and `other` objects.
     * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
     */

    function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
      var objIsArr = isArray(object),
          othIsArr = isArray(other),
          objTag = objIsArr ? arrayTag : getTag(object),
          othTag = othIsArr ? arrayTag : getTag(other);
      objTag = objTag == argsTag ? objectTag : objTag;
      othTag = othTag == argsTag ? objectTag : othTag;
      var objIsObj = objTag == objectTag,
          othIsObj = othTag == objectTag,
          isSameTag = objTag == othTag;

      if (isSameTag && isBuffer(object)) {
        if (!isBuffer(other)) {
          return false;
        }

        objIsArr = true;
        objIsObj = false;
      }

      if (isSameTag && !objIsObj) {
        stack || (stack = new Stack());
        return objIsArr || isTypedArray(object) ? equalArrays(object, other, bitmask, customizer, equalFunc, stack) : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
      }

      if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
        var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
            othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

        if (objIsWrapped || othIsWrapped) {
          var objUnwrapped = objIsWrapped ? object.value() : object,
              othUnwrapped = othIsWrapped ? other.value() : other;
          stack || (stack = new Stack());
          return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
        }
      }

      if (!isSameTag) {
        return false;
      }

      stack || (stack = new Stack());
      return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
    }

    module.exports = baseIsEqualDeep;
    /***/
  },

  /***/
  "./node_modules/lodash/_baseIsMatch.js":
  /*!*********************************************!*\
    !*** ./node_modules/lodash/_baseIsMatch.js ***!
    \*********************************************/

  /*! no static exports found */

  /***/
  function node_modulesLodash_baseIsMatchJs(module, exports, __webpack_require__) {
    var Stack = __webpack_require__(
    /*! ./_Stack */
    "./node_modules/lodash/_Stack.js"),
        baseIsEqual = __webpack_require__(
    /*! ./_baseIsEqual */
    "./node_modules/lodash/_baseIsEqual.js");
    /** Used to compose bitmasks for value comparisons. */


    var COMPARE_PARTIAL_FLAG = 1,
        COMPARE_UNORDERED_FLAG = 2;
    /**
     * The base implementation of `_.isMatch` without support for iteratee shorthands.
     *
     * @private
     * @param {Object} object The object to inspect.
     * @param {Object} source The object of property values to match.
     * @param {Array} matchData The property names, values, and compare flags to match.
     * @param {Function} [customizer] The function to customize comparisons.
     * @returns {boolean} Returns `true` if `object` is a match, else `false`.
     */

    function baseIsMatch(object, source, matchData, customizer) {
      var index = matchData.length,
          length = index,
          noCustomizer = !customizer;

      if (object == null) {
        return !length;
      }

      object = Object(object);

      while (index--) {
        var data = matchData[index];

        if (noCustomizer && data[2] ? data[1] !== object[data[0]] : !(data[0] in object)) {
          return false;
        }
      }

      while (++index < length) {
        data = matchData[index];
        var key = data[0],
            objValue = object[key],
            srcValue = data[1];

        if (noCustomizer && data[2]) {
          if (objValue === undefined && !(key in object)) {
            return false;
          }
        } else {
          var stack = new Stack();

          if (customizer) {
            var result = customizer(objValue, srcValue, key, object, source, stack);
          }

          if (!(result === undefined ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG, customizer, stack) : result)) {
            return false;
          }
        }
      }

      return true;
    }

    module.exports = baseIsMatch;
    /***/
  },

  /***/
  "./node_modules/lodash/_baseIsNative.js":
  /*!**********************************************!*\
    !*** ./node_modules/lodash/_baseIsNative.js ***!
    \**********************************************/

  /*! no static exports found */

  /***/
  function node_modulesLodash_baseIsNativeJs(module, exports, __webpack_require__) {
    var isFunction = __webpack_require__(
    /*! ./isFunction */
    "./node_modules/lodash/isFunction.js"),
        isMasked = __webpack_require__(
    /*! ./_isMasked */
    "./node_modules/lodash/_isMasked.js"),
        isObject = __webpack_require__(
    /*! ./isObject */
    "./node_modules/lodash/isObject.js"),
        toSource = __webpack_require__(
    /*! ./_toSource */
    "./node_modules/lodash/_toSource.js");
    /**
     * Used to match `RegExp`
     * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
     */


    var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
    /** Used to detect host constructors (Safari). */

    var reIsHostCtor = /^\[object .+?Constructor\]$/;
    /** Used for built-in method references. */

    var funcProto = Function.prototype,
        objectProto = Object.prototype;
    /** Used to resolve the decompiled source of functions. */

    var funcToString = funcProto.toString;
    /** Used to check objects for own properties. */

    var hasOwnProperty = objectProto.hasOwnProperty;
    /** Used to detect if a method is native. */

    var reIsNative = RegExp('^' + funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&').replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');
    /**
     * The base implementation of `_.isNative` without bad shim checks.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a native function,
     *  else `false`.
     */

    function baseIsNative(value) {
      if (!isObject(value) || isMasked(value)) {
        return false;
      }

      var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
      return pattern.test(toSource(value));
    }

    module.exports = baseIsNative;
    /***/
  },

  /***/
  "./node_modules/lodash/_baseIsTypedArray.js":
  /*!**************************************************!*\
    !*** ./node_modules/lodash/_baseIsTypedArray.js ***!
    \**************************************************/

  /*! no static exports found */

  /***/
  function node_modulesLodash_baseIsTypedArrayJs(module, exports, __webpack_require__) {
    var baseGetTag = __webpack_require__(
    /*! ./_baseGetTag */
    "./node_modules/lodash/_baseGetTag.js"),
        isLength = __webpack_require__(
    /*! ./isLength */
    "./node_modules/lodash/isLength.js"),
        isObjectLike = __webpack_require__(
    /*! ./isObjectLike */
    "./node_modules/lodash/isObjectLike.js");
    /** `Object#toString` result references. */


    var argsTag = '[object Arguments]',
        arrayTag = '[object Array]',
        boolTag = '[object Boolean]',
        dateTag = '[object Date]',
        errorTag = '[object Error]',
        funcTag = '[object Function]',
        mapTag = '[object Map]',
        numberTag = '[object Number]',
        objectTag = '[object Object]',
        regexpTag = '[object RegExp]',
        setTag = '[object Set]',
        stringTag = '[object String]',
        weakMapTag = '[object WeakMap]';
    var arrayBufferTag = '[object ArrayBuffer]',
        dataViewTag = '[object DataView]',
        float32Tag = '[object Float32Array]',
        float64Tag = '[object Float64Array]',
        int8Tag = '[object Int8Array]',
        int16Tag = '[object Int16Array]',
        int32Tag = '[object Int32Array]',
        uint8Tag = '[object Uint8Array]',
        uint8ClampedTag = '[object Uint8ClampedArray]',
        uint16Tag = '[object Uint16Array]',
        uint32Tag = '[object Uint32Array]';
    /** Used to identify `toStringTag` values of typed arrays. */

    var typedArrayTags = {};
    typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
    typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
    /**
     * The base implementation of `_.isTypedArray` without Node.js optimizations.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
     */

    function baseIsTypedArray(value) {
      return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
    }

    module.exports = baseIsTypedArray;
    /***/
  },

  /***/
  "./node_modules/lodash/_baseIteratee.js":
  /*!**********************************************!*\
    !*** ./node_modules/lodash/_baseIteratee.js ***!
    \**********************************************/

  /*! no static exports found */

  /***/
  function node_modulesLodash_baseIterateeJs(module, exports, __webpack_require__) {
    var baseMatches = __webpack_require__(
    /*! ./_baseMatches */
    "./node_modules/lodash/_baseMatches.js"),
        baseMatchesProperty = __webpack_require__(
    /*! ./_baseMatchesProperty */
    "./node_modules/lodash/_baseMatchesProperty.js"),
        identity = __webpack_require__(
    /*! ./identity */
    "./node_modules/lodash/identity.js"),
        isArray = __webpack_require__(
    /*! ./isArray */
    "./node_modules/lodash/isArray.js"),
        property = __webpack_require__(
    /*! ./property */
    "./node_modules/lodash/property.js");
    /**
     * The base implementation of `_.iteratee`.
     *
     * @private
     * @param {*} [value=_.identity] The value to convert to an iteratee.
     * @returns {Function} Returns the iteratee.
     */


    function baseIteratee(value) {
      // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
      // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
      if (typeof value == 'function') {
        return value;
      }

      if (value == null) {
        return identity;
      }

      if (_typeof(value) == 'object') {
        return isArray(value) ? baseMatchesProperty(value[0], value[1]) : baseMatches(value);
      }

      return property(value);
    }

    module.exports = baseIteratee;
    /***/
  },

  /***/
  "./node_modules/lodash/_baseKeys.js":
  /*!******************************************!*\
    !*** ./node_modules/lodash/_baseKeys.js ***!
    \******************************************/

  /*! no static exports found */

  /***/
  function node_modulesLodash_baseKeysJs(module, exports, __webpack_require__) {
    var isPrototype = __webpack_require__(
    /*! ./_isPrototype */
    "./node_modules/lodash/_isPrototype.js"),
        nativeKeys = __webpack_require__(
    /*! ./_nativeKeys */
    "./node_modules/lodash/_nativeKeys.js");
    /** Used for built-in method references. */


    var objectProto = Object.prototype;
    /** Used to check objects for own properties. */

    var hasOwnProperty = objectProto.hasOwnProperty;
    /**
     * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names.
     */

    function baseKeys(object) {
      if (!isPrototype(object)) {
        return nativeKeys(object);
      }

      var result = [];

      for (var key in Object(object)) {
        if (hasOwnProperty.call(object, key) && key != 'constructor') {
          result.push(key);
        }
      }

      return result;
    }

    module.exports = baseKeys;
    /***/
  },

  /***/
  "./node_modules/lodash/_baseKeysIn.js":
  /*!********************************************!*\
    !*** ./node_modules/lodash/_baseKeysIn.js ***!
    \********************************************/

  /*! no static exports found */

  /***/
  function node_modulesLodash_baseKeysInJs(module, exports, __webpack_require__) {
    var isObject = __webpack_require__(
    /*! ./isObject */
    "./node_modules/lodash/isObject.js"),
        isPrototype = __webpack_require__(
    /*! ./_isPrototype */
    "./node_modules/lodash/_isPrototype.js"),
        nativeKeysIn = __webpack_require__(
    /*! ./_nativeKeysIn */
    "./node_modules/lodash/_nativeKeysIn.js");
    /** Used for built-in method references. */


    var objectProto = Object.prototype;
    /** Used to check objects for own properties. */

    var hasOwnProperty = objectProto.hasOwnProperty;
    /**
     * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names.
     */

    function baseKeysIn(object) {
      if (!isObject(object)) {
        return nativeKeysIn(object);
      }

      var isProto = isPrototype(object),
          result = [];

      for (var key in object) {
        if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
          result.push(key);
        }
      }

      return result;
    }

    module.exports = baseKeysIn;
    /***/
  },

  /***/
  "./node_modules/lodash/_baseMatches.js":
  /*!*********************************************!*\
    !*** ./node_modules/lodash/_baseMatches.js ***!
    \*********************************************/

  /*! no static exports found */

  /***/
  function node_modulesLodash_baseMatchesJs(module, exports, __webpack_require__) {
    var baseIsMatch = __webpack_require__(
    /*! ./_baseIsMatch */
    "./node_modules/lodash/_baseIsMatch.js"),
        getMatchData = __webpack_require__(
    /*! ./_getMatchData */
    "./node_modules/lodash/_getMatchData.js"),
        matchesStrictComparable = __webpack_require__(
    /*! ./_matchesStrictComparable */
    "./node_modules/lodash/_matchesStrictComparable.js");
    /**
     * The base implementation of `_.matches` which doesn't clone `source`.
     *
     * @private
     * @param {Object} source The object of property values to match.
     * @returns {Function} Returns the new spec function.
     */


    function baseMatches(source) {
      var matchData = getMatchData(source);

      if (matchData.length == 1 && matchData[0][2]) {
        return matchesStrictComparable(matchData[0][0], matchData[0][1]);
      }

      return function (object) {
        return object === source || baseIsMatch(object, source, matchData);
      };
    }

    module.exports = baseMatches;
    /***/
  },

  /***/
  "./node_modules/lodash/_baseMatchesProperty.js":
  /*!*****************************************************!*\
    !*** ./node_modules/lodash/_baseMatchesProperty.js ***!
    \*****************************************************/

  /*! no static exports found */

  /***/
  function node_modulesLodash_baseMatchesPropertyJs(module, exports, __webpack_require__) {
    var baseIsEqual = __webpack_require__(
    /*! ./_baseIsEqual */
    "./node_modules/lodash/_baseIsEqual.js"),
        get = __webpack_require__(
    /*! ./get */
    "./node_modules/lodash/get.js"),
        hasIn = __webpack_require__(
    /*! ./hasIn */
    "./node_modules/lodash/hasIn.js"),
        isKey = __webpack_require__(
    /*! ./_isKey */
    "./node_modules/lodash/_isKey.js"),
        isStrictComparable = __webpack_require__(
    /*! ./_isStrictComparable */
    "./node_modules/lodash/_isStrictComparable.js"),
        matchesStrictComparable = __webpack_require__(
    /*! ./_matchesStrictComparable */
    "./node_modules/lodash/_matchesStrictComparable.js"),
        toKey = __webpack_require__(
    /*! ./_toKey */
    "./node_modules/lodash/_toKey.js");
    /** Used to compose bitmasks for value comparisons. */


    var COMPARE_PARTIAL_FLAG = 1,
        COMPARE_UNORDERED_FLAG = 2;
    /**
     * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
     *
     * @private
     * @param {string} path The path of the property to get.
     * @param {*} srcValue The value to match.
     * @returns {Function} Returns the new spec function.
     */

    function baseMatchesProperty(path, srcValue) {
      if (isKey(path) && isStrictComparable(srcValue)) {
        return matchesStrictComparable(toKey(path), srcValue);
      }

      return function (object) {
        var objValue = get(object, path);
        return objValue === undefined && objValue === srcValue ? hasIn(object, path) : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
      };
    }

    module.exports = baseMatchesProperty;
    /***/
  },

  /***/
  "./node_modules/lodash/_basePickBy.js":
  /*!********************************************!*\
    !*** ./node_modules/lodash/_basePickBy.js ***!
    \********************************************/

  /*! no static exports found */

  /***/
  function node_modulesLodash_basePickByJs(module, exports, __webpack_require__) {
    var baseGet = __webpack_require__(
    /*! ./_baseGet */
    "./node_modules/lodash/_baseGet.js"),
        baseSet = __webpack_require__(
    /*! ./_baseSet */
    "./node_modules/lodash/_baseSet.js"),
        castPath = __webpack_require__(
    /*! ./_castPath */
    "./node_modules/lodash/_castPath.js");
    /**
     * The base implementation of  `_.pickBy` without support for iteratee shorthands.
     *
     * @private
     * @param {Object} object The source object.
     * @param {string[]} paths The property paths to pick.
     * @param {Function} predicate The function invoked per property.
     * @returns {Object} Returns the new object.
     */


    function basePickBy(object, paths, predicate) {
      var index = -1,
          length = paths.length,
          result = {};

      while (++index < length) {
        var path = paths[index],
            value = baseGet(object, path);

        if (predicate(value, path)) {
          baseSet(result, castPath(path, object), value);
        }
      }

      return result;
    }

    module.exports = basePickBy;
    /***/
  },

  /***/
  "./node_modules/lodash/_baseProperty.js":
  /*!**********************************************!*\
    !*** ./node_modules/lodash/_baseProperty.js ***!
    \**********************************************/

  /*! no static exports found */

  /***/
  function node_modulesLodash_basePropertyJs(module, exports) {
    /**
     * The base implementation of `_.property` without support for deep paths.
     *
     * @private
     * @param {string} key The key of the property to get.
     * @returns {Function} Returns the new accessor function.
     */
    function baseProperty(key) {
      return function (object) {
        return object == null ? undefined : object[key];
      };
    }

    module.exports = baseProperty;
    /***/
  },

  /***/
  "./node_modules/lodash/_basePropertyDeep.js":
  /*!**************************************************!*\
    !*** ./node_modules/lodash/_basePropertyDeep.js ***!
    \**************************************************/

  /*! no static exports found */

  /***/
  function node_modulesLodash_basePropertyDeepJs(module, exports, __webpack_require__) {
    var baseGet = __webpack_require__(
    /*! ./_baseGet */
    "./node_modules/lodash/_baseGet.js");
    /**
     * A specialized version of `baseProperty` which supports deep paths.
     *
     * @private
     * @param {Array|string} path The path of the property to get.
     * @returns {Function} Returns the new accessor function.
     */


    function basePropertyDeep(path) {
      return function (object) {
        return baseGet(object, path);
      };
    }

    module.exports = basePropertyDeep;
    /***/
  },

  /***/
  "./node_modules/lodash/_baseSet.js":
  /*!*****************************************!*\
    !*** ./node_modules/lodash/_baseSet.js ***!
    \*****************************************/

  /*! no static exports found */

  /***/
  function node_modulesLodash_baseSetJs(module, exports, __webpack_require__) {
    var assignValue = __webpack_require__(
    /*! ./_assignValue */
    "./node_modules/lodash/_assignValue.js"),
        castPath = __webpack_require__(
    /*! ./_castPath */
    "./node_modules/lodash/_castPath.js"),
        isIndex = __webpack_require__(
    /*! ./_isIndex */
    "./node_modules/lodash/_isIndex.js"),
        isObject = __webpack_require__(
    /*! ./isObject */
    "./node_modules/lodash/isObject.js"),
        toKey = __webpack_require__(
    /*! ./_toKey */
    "./node_modules/lodash/_toKey.js");
    /**
     * The base implementation of `_.set`.
     *
     * @private
     * @param {Object} object The object to modify.
     * @param {Array|string} path The path of the property to set.
     * @param {*} value The value to set.
     * @param {Function} [customizer] The function to customize path creation.
     * @returns {Object} Returns `object`.
     */


    function baseSet(object, path, value, customizer) {
      if (!isObject(object)) {
        return object;
      }

      path = castPath(path, object);
      var index = -1,
          length = path.length,
          lastIndex = length - 1,
          nested = object;

      while (nested != null && ++index < length) {
        var key = toKey(path[index]),
            newValue = value;

        if (index != lastIndex) {
          var objValue = nested[key];
          newValue = customizer ? customizer(objValue, key, nested) : undefined;

          if (newValue === undefined) {
            newValue = isObject(objValue) ? objValue : isIndex(path[index + 1]) ? [] : {};
          }
        }

        assignValue(nested, key, newValue);
        nested = nested[key];
      }

      return object;
    }

    module.exports = baseSet;
    /***/
  },

  /***/
  "./node_modules/lodash/_baseTimes.js":
  /*!*******************************************!*\
    !*** ./node_modules/lodash/_baseTimes.js ***!
    \*******************************************/

  /*! no static exports found */

  /***/
  function node_modulesLodash_baseTimesJs(module, exports) {
    /**
     * The base implementation of `_.times` without support for iteratee shorthands
     * or max array length checks.
     *
     * @private
     * @param {number} n The number of times to invoke `iteratee`.
     * @param {Function} iteratee The function invoked per iteration.
     * @returns {Array} Returns the array of results.
     */
    function baseTimes(n, iteratee) {
      var index = -1,
          result = Array(n);

      while (++index < n) {
        result[index] = iteratee(index);
      }

      return result;
    }

    module.exports = baseTimes;
    /***/
  },

  /***/
  "./node_modules/lodash/_baseToString.js":
  /*!**********************************************!*\
    !*** ./node_modules/lodash/_baseToString.js ***!
    \**********************************************/

  /*! no static exports found */

  /***/
  function node_modulesLodash_baseToStringJs(module, exports, __webpack_require__) {
    var _Symbol3 = __webpack_require__(
    /*! ./_Symbol */
    "./node_modules/lodash/_Symbol.js"),
        arrayMap = __webpack_require__(
    /*! ./_arrayMap */
    "./node_modules/lodash/_arrayMap.js"),
        isArray = __webpack_require__(
    /*! ./isArray */
    "./node_modules/lodash/isArray.js"),
        isSymbol = __webpack_require__(
    /*! ./isSymbol */
    "./node_modules/lodash/isSymbol.js");
    /** Used as references for various `Number` constants. */


    var INFINITY = 1 / 0;
    /** Used to convert symbols to primitives and strings. */

    var symbolProto = _Symbol3 ? _Symbol3.prototype : undefined,
        symbolToString = symbolProto ? symbolProto.toString : undefined;
    /**
     * The base implementation of `_.toString` which doesn't convert nullish
     * values to empty strings.
     *
     * @private
     * @param {*} value The value to process.
     * @returns {string} Returns the string.
     */

    function baseToString(value) {
      // Exit early for strings to avoid a performance hit in some environments.
      if (typeof value == 'string') {
        return value;
      }

      if (isArray(value)) {
        // Recursively convert values (susceptible to call stack limits).
        return arrayMap(value, baseToString) + '';
      }

      if (isSymbol(value)) {
        return symbolToString ? symbolToString.call(value) : '';
      }

      var result = value + '';
      return result == '0' && 1 / value == -INFINITY ? '-0' : result;
    }

    module.exports = baseToString;
    /***/
  },

  /***/
  "./node_modules/lodash/_baseUnary.js":
  /*!*******************************************!*\
    !*** ./node_modules/lodash/_baseUnary.js ***!
    \*******************************************/

  /*! no static exports found */

  /***/
  function node_modulesLodash_baseUnaryJs(module, exports) {
    /**
     * The base implementation of `_.unary` without support for storing metadata.
     *
     * @private
     * @param {Function} func The function to cap arguments for.
     * @returns {Function} Returns the new capped function.
     */
    function baseUnary(func) {
      return function (value) {
        return func(value);
      };
    }

    module.exports = baseUnary;
    /***/
  },

  /***/
  "./node_modules/lodash/_cacheHas.js":
  /*!******************************************!*\
    !*** ./node_modules/lodash/_cacheHas.js ***!
    \******************************************/

  /*! no static exports found */

  /***/
  function node_modulesLodash_cacheHasJs(module, exports) {
    /**
     * Checks if a `cache` value for `key` exists.
     *
     * @private
     * @param {Object} cache The cache to query.
     * @param {string} key The key of the entry to check.
     * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
     */
    function cacheHas(cache, key) {
      return cache.has(key);
    }

    module.exports = cacheHas;
    /***/
  },

  /***/
  "./node_modules/lodash/_castPath.js":
  /*!******************************************!*\
    !*** ./node_modules/lodash/_castPath.js ***!
    \******************************************/

  /*! no static exports found */

  /***/
  function node_modulesLodash_castPathJs(module, exports, __webpack_require__) {
    var isArray = __webpack_require__(
    /*! ./isArray */
    "./node_modules/lodash/isArray.js"),
        isKey = __webpack_require__(
    /*! ./_isKey */
    "./node_modules/lodash/_isKey.js"),
        stringToPath = __webpack_require__(
    /*! ./_stringToPath */
    "./node_modules/lodash/_stringToPath.js"),
        toString = __webpack_require__(
    /*! ./toString */
    "./node_modules/lodash/toString.js");
    /**
     * Casts `value` to a path array if it's not one.
     *
     * @private
     * @param {*} value The value to inspect.
     * @param {Object} [object] The object to query keys on.
     * @returns {Array} Returns the cast property path array.
     */


    function castPath(value, object) {
      if (isArray(value)) {
        return value;
      }

      return isKey(value, object) ? [value] : stringToPath(toString(value));
    }

    module.exports = castPath;
    /***/
  },

  /***/
  "./node_modules/lodash/_coreJsData.js":
  /*!********************************************!*\
    !*** ./node_modules/lodash/_coreJsData.js ***!
    \********************************************/

  /*! no static exports found */

  /***/
  function node_modulesLodash_coreJsDataJs(module, exports, __webpack_require__) {
    var root = __webpack_require__(
    /*! ./_root */
    "./node_modules/lodash/_root.js");
    /** Used to detect overreaching core-js shims. */


    var coreJsData = root['__core-js_shared__'];
    module.exports = coreJsData;
    /***/
  },

  /***/
  "./node_modules/lodash/_createBaseEach.js":
  /*!************************************************!*\
    !*** ./node_modules/lodash/_createBaseEach.js ***!
    \************************************************/

  /*! no static exports found */

  /***/
  function node_modulesLodash_createBaseEachJs(module, exports, __webpack_require__) {
    var isArrayLike = __webpack_require__(
    /*! ./isArrayLike */
    "./node_modules/lodash/isArrayLike.js");
    /**
     * Creates a `baseEach` or `baseEachRight` function.
     *
     * @private
     * @param {Function} eachFunc The function to iterate over a collection.
     * @param {boolean} [fromRight] Specify iterating from right to left.
     * @returns {Function} Returns the new base function.
     */


    function createBaseEach(eachFunc, fromRight) {
      return function (collection, iteratee) {
        if (collection == null) {
          return collection;
        }

        if (!isArrayLike(collection)) {
          return eachFunc(collection, iteratee);
        }

        var length = collection.length,
            index = fromRight ? length : -1,
            iterable = Object(collection);

        while (fromRight ? index-- : ++index < length) {
          if (iteratee(iterable[index], index, iterable) === false) {
            break;
          }
        }

        return collection;
      };
    }

    module.exports = createBaseEach;
    /***/
  },

  /***/
  "./node_modules/lodash/_createBaseFor.js":
  /*!***********************************************!*\
    !*** ./node_modules/lodash/_createBaseFor.js ***!
    \***********************************************/

  /*! no static exports found */

  /***/
  function node_modulesLodash_createBaseForJs(module, exports) {
    /**
     * Creates a base function for methods like `_.forIn` and `_.forOwn`.
     *
     * @private
     * @param {boolean} [fromRight] Specify iterating from right to left.
     * @returns {Function} Returns the new base function.
     */
    function createBaseFor(fromRight) {
      return function (object, iteratee, keysFunc) {
        var index = -1,
            iterable = Object(object),
            props = keysFunc(object),
            length = props.length;

        while (length--) {
          var key = props[fromRight ? length : ++index];

          if (iteratee(iterable[key], key, iterable) === false) {
            break;
          }
        }

        return object;
      };
    }

    module.exports = createBaseFor;
    /***/
  },

  /***/
  "./node_modules/lodash/_defineProperty.js":
  /*!************************************************!*\
    !*** ./node_modules/lodash/_defineProperty.js ***!
    \************************************************/

  /*! no static exports found */

  /***/
  function node_modulesLodash_definePropertyJs(module, exports, __webpack_require__) {
    var getNative = __webpack_require__(
    /*! ./_getNative */
    "./node_modules/lodash/_getNative.js");

    var defineProperty = function () {
      try {
        var func = getNative(Object, 'defineProperty');
        func({}, '', {});
        return func;
      } catch (e) {}
    }();

    module.exports = defineProperty;
    /***/
  },

  /***/
  "./node_modules/lodash/_equalArrays.js":
  /*!*********************************************!*\
    !*** ./node_modules/lodash/_equalArrays.js ***!
    \*********************************************/

  /*! no static exports found */

  /***/
  function node_modulesLodash_equalArraysJs(module, exports, __webpack_require__) {
    var SetCache = __webpack_require__(
    /*! ./_SetCache */
    "./node_modules/lodash/_SetCache.js"),
        arraySome = __webpack_require__(
    /*! ./_arraySome */
    "./node_modules/lodash/_arraySome.js"),
        cacheHas = __webpack_require__(
    /*! ./_cacheHas */
    "./node_modules/lodash/_cacheHas.js");
    /** Used to compose bitmasks for value comparisons. */


    var COMPARE_PARTIAL_FLAG = 1,
        COMPARE_UNORDERED_FLAG = 2;
    /**
     * A specialized version of `baseIsEqualDeep` for arrays with support for
     * partial deep comparisons.
     *
     * @private
     * @param {Array} array The array to compare.
     * @param {Array} other The other array to compare.
     * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
     * @param {Function} customizer The function to customize comparisons.
     * @param {Function} equalFunc The function to determine equivalents of values.
     * @param {Object} stack Tracks traversed `array` and `other` objects.
     * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
     */

    function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
          arrLength = array.length,
          othLength = other.length;

      if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
        return false;
      } // Assume cyclic values are equal.


      var stacked = stack.get(array);

      if (stacked && stack.get(other)) {
        return stacked == other;
      }

      var index = -1,
          result = true,
          seen = bitmask & COMPARE_UNORDERED_FLAG ? new SetCache() : undefined;
      stack.set(array, other);
      stack.set(other, array); // Ignore non-index properties.

      while (++index < arrLength) {
        var arrValue = array[index],
            othValue = other[index];

        if (customizer) {
          var compared = isPartial ? customizer(othValue, arrValue, index, other, array, stack) : customizer(arrValue, othValue, index, array, other, stack);
        }

        if (compared !== undefined) {
          if (compared) {
            continue;
          }

          result = false;
          break;
        } // Recursively compare arrays (susceptible to call stack limits).


        if (seen) {
          if (!arraySome(other, function (othValue, othIndex) {
            if (!cacheHas(seen, othIndex) && (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
              return seen.push(othIndex);
            }
          })) {
            result = false;
            break;
          }
        } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
          result = false;
          break;
        }
      }

      stack['delete'](array);
      stack['delete'](other);
      return result;
    }

    module.exports = equalArrays;
    /***/
  },

  /***/
  "./node_modules/lodash/_equalByTag.js":
  /*!********************************************!*\
    !*** ./node_modules/lodash/_equalByTag.js ***!
    \********************************************/

  /*! no static exports found */

  /***/
  function node_modulesLodash_equalByTagJs(module, exports, __webpack_require__) {
    var _Symbol4 = __webpack_require__(
    /*! ./_Symbol */
    "./node_modules/lodash/_Symbol.js"),
        Uint8Array = __webpack_require__(
    /*! ./_Uint8Array */
    "./node_modules/lodash/_Uint8Array.js"),
        eq = __webpack_require__(
    /*! ./eq */
    "./node_modules/lodash/eq.js"),
        equalArrays = __webpack_require__(
    /*! ./_equalArrays */
    "./node_modules/lodash/_equalArrays.js"),
        mapToArray = __webpack_require__(
    /*! ./_mapToArray */
    "./node_modules/lodash/_mapToArray.js"),
        setToArray = __webpack_require__(
    /*! ./_setToArray */
    "./node_modules/lodash/_setToArray.js");
    /** Used to compose bitmasks for value comparisons. */


    var COMPARE_PARTIAL_FLAG = 1,
        COMPARE_UNORDERED_FLAG = 2;
    /** `Object#toString` result references. */

    var boolTag = '[object Boolean]',
        dateTag = '[object Date]',
        errorTag = '[object Error]',
        mapTag = '[object Map]',
        numberTag = '[object Number]',
        regexpTag = '[object RegExp]',
        setTag = '[object Set]',
        stringTag = '[object String]',
        symbolTag = '[object Symbol]';
    var arrayBufferTag = '[object ArrayBuffer]',
        dataViewTag = '[object DataView]';
    /** Used to convert symbols to primitives and strings. */

    var symbolProto = _Symbol4 ? _Symbol4.prototype : undefined,
        symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;
    /**
     * A specialized version of `baseIsEqualDeep` for comparing objects of
     * the same `toStringTag`.
     *
     * **Note:** This function only supports comparing values with tags of
     * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
     *
     * @private
     * @param {Object} object The object to compare.
     * @param {Object} other The other object to compare.
     * @param {string} tag The `toStringTag` of the objects to compare.
     * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
     * @param {Function} customizer The function to customize comparisons.
     * @param {Function} equalFunc The function to determine equivalents of values.
     * @param {Object} stack Tracks traversed `object` and `other` objects.
     * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
     */

    function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
      switch (tag) {
        case dataViewTag:
          if (object.byteLength != other.byteLength || object.byteOffset != other.byteOffset) {
            return false;
          }

          object = object.buffer;
          other = other.buffer;

        case arrayBufferTag:
          if (object.byteLength != other.byteLength || !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
            return false;
          }

          return true;

        case boolTag:
        case dateTag:
        case numberTag:
          // Coerce booleans to `1` or `0` and dates to milliseconds.
          // Invalid dates are coerced to `NaN`.
          return eq(+object, +other);

        case errorTag:
          return object.name == other.name && object.message == other.message;

        case regexpTag:
        case stringTag:
          // Coerce regexes to strings and treat strings, primitives and objects,
          // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
          // for more details.
          return object == other + '';

        case mapTag:
          var convert = mapToArray;

        case setTag:
          var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
          convert || (convert = setToArray);

          if (object.size != other.size && !isPartial) {
            return false;
          } // Assume cyclic values are equal.


          var stacked = stack.get(object);

          if (stacked) {
            return stacked == other;
          }

          bitmask |= COMPARE_UNORDERED_FLAG; // Recursively compare objects (susceptible to call stack limits).

          stack.set(object, other);
          var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
          stack['delete'](object);
          return result;

        case symbolTag:
          if (symbolValueOf) {
            return symbolValueOf.call(object) == symbolValueOf.call(other);
          }

      }

      return false;
    }

    module.exports = equalByTag;
    /***/
  },

  /***/
  "./node_modules/lodash/_equalObjects.js":
  /*!**********************************************!*\
    !*** ./node_modules/lodash/_equalObjects.js ***!
    \**********************************************/

  /*! no static exports found */

  /***/
  function node_modulesLodash_equalObjectsJs(module, exports, __webpack_require__) {
    var getAllKeys = __webpack_require__(
    /*! ./_getAllKeys */
    "./node_modules/lodash/_getAllKeys.js");
    /** Used to compose bitmasks for value comparisons. */


    var COMPARE_PARTIAL_FLAG = 1;
    /** Used for built-in method references. */

    var objectProto = Object.prototype;
    /** Used to check objects for own properties. */

    var hasOwnProperty = objectProto.hasOwnProperty;
    /**
     * A specialized version of `baseIsEqualDeep` for objects with support for
     * partial deep comparisons.
     *
     * @private
     * @param {Object} object The object to compare.
     * @param {Object} other The other object to compare.
     * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
     * @param {Function} customizer The function to customize comparisons.
     * @param {Function} equalFunc The function to determine equivalents of values.
     * @param {Object} stack Tracks traversed `object` and `other` objects.
     * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
     */

    function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
          objProps = getAllKeys(object),
          objLength = objProps.length,
          othProps = getAllKeys(other),
          othLength = othProps.length;

      if (objLength != othLength && !isPartial) {
        return false;
      }

      var index = objLength;

      while (index--) {
        var key = objProps[index];

        if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
          return false;
        }
      } // Assume cyclic values are equal.


      var stacked = stack.get(object);

      if (stacked && stack.get(other)) {
        return stacked == other;
      }

      var result = true;
      stack.set(object, other);
      stack.set(other, object);
      var skipCtor = isPartial;

      while (++index < objLength) {
        key = objProps[index];
        var objValue = object[key],
            othValue = other[key];

        if (customizer) {
          var compared = isPartial ? customizer(othValue, objValue, key, other, object, stack) : customizer(objValue, othValue, key, object, other, stack);
        } // Recursively compare objects (susceptible to call stack limits).


        if (!(compared === undefined ? objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack) : compared)) {
          result = false;
          break;
        }

        skipCtor || (skipCtor = key == 'constructor');
      }

      if (result && !skipCtor) {
        var objCtor = object.constructor,
            othCtor = other.constructor; // Non `Object` object instances with different constructors are not equal.

        if (objCtor != othCtor && 'constructor' in object && 'constructor' in other && !(typeof objCtor == 'function' && objCtor instanceof objCtor && typeof othCtor == 'function' && othCtor instanceof othCtor)) {
          result = false;
        }
      }

      stack['delete'](object);
      stack['delete'](other);
      return result;
    }

    module.exports = equalObjects;
    /***/
  },

  /***/
  "./node_modules/lodash/_freeGlobal.js":
  /*!********************************************!*\
    !*** ./node_modules/lodash/_freeGlobal.js ***!
    \********************************************/

  /*! no static exports found */

  /***/
  function node_modulesLodash_freeGlobalJs(module, exports, __webpack_require__) {
    /* WEBPACK VAR INJECTION */
    (function (global) {
      /** Detect free variable `global` from Node.js. */
      var freeGlobal = _typeof(global) == 'object' && global && global.Object === Object && global;
      module.exports = freeGlobal;
      /* WEBPACK VAR INJECTION */
    }).call(this, __webpack_require__(
    /*! ./../webpack/buildin/global.js */
    "./node_modules/webpack/buildin/global.js"));
    /***/
  },

  /***/
  "./node_modules/lodash/_getAllKeys.js":
  /*!********************************************!*\
    !*** ./node_modules/lodash/_getAllKeys.js ***!
    \********************************************/

  /*! no static exports found */

  /***/
  function node_modulesLodash_getAllKeysJs(module, exports, __webpack_require__) {
    var baseGetAllKeys = __webpack_require__(
    /*! ./_baseGetAllKeys */
    "./node_modules/lodash/_baseGetAllKeys.js"),
        getSymbols = __webpack_require__(
    /*! ./_getSymbols */
    "./node_modules/lodash/_getSymbols.js"),
        keys = __webpack_require__(
    /*! ./keys */
    "./node_modules/lodash/keys.js");
    /**
     * Creates an array of own enumerable property names and symbols of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names and symbols.
     */


    function getAllKeys(object) {
      return baseGetAllKeys(object, keys, getSymbols);
    }

    module.exports = getAllKeys;
    /***/
  },

  /***/
  "./node_modules/lodash/_getAllKeysIn.js":
  /*!**********************************************!*\
    !*** ./node_modules/lodash/_getAllKeysIn.js ***!
    \**********************************************/

  /*! no static exports found */

  /***/
  function node_modulesLodash_getAllKeysInJs(module, exports, __webpack_require__) {
    var baseGetAllKeys = __webpack_require__(
    /*! ./_baseGetAllKeys */
    "./node_modules/lodash/_baseGetAllKeys.js"),
        getSymbolsIn = __webpack_require__(
    /*! ./_getSymbolsIn */
    "./node_modules/lodash/_getSymbolsIn.js"),
        keysIn = __webpack_require__(
    /*! ./keysIn */
    "./node_modules/lodash/keysIn.js");
    /**
     * Creates an array of own and inherited enumerable property names and
     * symbols of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names and symbols.
     */


    function getAllKeysIn(object) {
      return baseGetAllKeys(object, keysIn, getSymbolsIn);
    }

    module.exports = getAllKeysIn;
    /***/
  },

  /***/
  "./node_modules/lodash/_getMapData.js":
  /*!********************************************!*\
    !*** ./node_modules/lodash/_getMapData.js ***!
    \********************************************/

  /*! no static exports found */

  /***/
  function node_modulesLodash_getMapDataJs(module, exports, __webpack_require__) {
    var isKeyable = __webpack_require__(
    /*! ./_isKeyable */
    "./node_modules/lodash/_isKeyable.js");
    /**
     * Gets the data for `map`.
     *
     * @private
     * @param {Object} map The map to query.
     * @param {string} key The reference key.
     * @returns {*} Returns the map data.
     */


    function getMapData(map, key) {
      var data = map.__data__;
      return isKeyable(key) ? data[typeof key == 'string' ? 'string' : 'hash'] : data.map;
    }

    module.exports = getMapData;
    /***/
  },

  /***/
  "./node_modules/lodash/_getMatchData.js":
  /*!**********************************************!*\
    !*** ./node_modules/lodash/_getMatchData.js ***!
    \**********************************************/

  /*! no static exports found */

  /***/
  function node_modulesLodash_getMatchDataJs(module, exports, __webpack_require__) {
    var isStrictComparable = __webpack_require__(
    /*! ./_isStrictComparable */
    "./node_modules/lodash/_isStrictComparable.js"),
        keys = __webpack_require__(
    /*! ./keys */
    "./node_modules/lodash/keys.js");
    /**
     * Gets the property names, values, and compare flags of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the match data of `object`.
     */


    function getMatchData(object) {
      var result = keys(object),
          length = result.length;

      while (length--) {
        var key = result[length],
            value = object[key];
        result[length] = [key, value, isStrictComparable(value)];
      }

      return result;
    }

    module.exports = getMatchData;
    /***/
  },

  /***/
  "./node_modules/lodash/_getNative.js":
  /*!*******************************************!*\
    !*** ./node_modules/lodash/_getNative.js ***!
    \*******************************************/

  /*! no static exports found */

  /***/
  function node_modulesLodash_getNativeJs(module, exports, __webpack_require__) {
    var baseIsNative = __webpack_require__(
    /*! ./_baseIsNative */
    "./node_modules/lodash/_baseIsNative.js"),
        getValue = __webpack_require__(
    /*! ./_getValue */
    "./node_modules/lodash/_getValue.js");
    /**
     * Gets the native function at `key` of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {string} key The key of the method to get.
     * @returns {*} Returns the function if it's native, else `undefined`.
     */


    function getNative(object, key) {
      var value = getValue(object, key);
      return baseIsNative(value) ? value : undefined;
    }

    module.exports = getNative;
    /***/
  },

  /***/
  "./node_modules/lodash/_getPrototype.js":
  /*!**********************************************!*\
    !*** ./node_modules/lodash/_getPrototype.js ***!
    \**********************************************/

  /*! no static exports found */

  /***/
  function node_modulesLodash_getPrototypeJs(module, exports, __webpack_require__) {
    var overArg = __webpack_require__(
    /*! ./_overArg */
    "./node_modules/lodash/_overArg.js");
    /** Built-in value references. */


    var getPrototype = overArg(Object.getPrototypeOf, Object);
    module.exports = getPrototype;
    /***/
  },

  /***/
  "./node_modules/lodash/_getRawTag.js":
  /*!*******************************************!*\
    !*** ./node_modules/lodash/_getRawTag.js ***!
    \*******************************************/

  /*! no static exports found */

  /***/
  function node_modulesLodash_getRawTagJs(module, exports, __webpack_require__) {
    var _Symbol5 = __webpack_require__(
    /*! ./_Symbol */
    "./node_modules/lodash/_Symbol.js");
    /** Used for built-in method references. */


    var objectProto = Object.prototype;
    /** Used to check objects for own properties. */

    var hasOwnProperty = objectProto.hasOwnProperty;
    /**
     * Used to resolve the
     * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
     * of values.
     */

    var nativeObjectToString = objectProto.toString;
    /** Built-in value references. */

    var symToStringTag = _Symbol5 ? _Symbol5.toStringTag : undefined;
    /**
     * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
     *
     * @private
     * @param {*} value The value to query.
     * @returns {string} Returns the raw `toStringTag`.
     */

    function getRawTag(value) {
      var isOwn = hasOwnProperty.call(value, symToStringTag),
          tag = value[symToStringTag];

      try {
        value[symToStringTag] = undefined;
        var unmasked = true;
      } catch (e) {}

      var result = nativeObjectToString.call(value);

      if (unmasked) {
        if (isOwn) {
          value[symToStringTag] = tag;
        } else {
          delete value[symToStringTag];
        }
      }

      return result;
    }

    module.exports = getRawTag;
    /***/
  },

  /***/
  "./node_modules/lodash/_getSymbols.js":
  /*!********************************************!*\
    !*** ./node_modules/lodash/_getSymbols.js ***!
    \********************************************/

  /*! no static exports found */

  /***/
  function node_modulesLodash_getSymbolsJs(module, exports, __webpack_require__) {
    var arrayFilter = __webpack_require__(
    /*! ./_arrayFilter */
    "./node_modules/lodash/_arrayFilter.js"),
        stubArray = __webpack_require__(
    /*! ./stubArray */
    "./node_modules/lodash/stubArray.js");
    /** Used for built-in method references. */


    var objectProto = Object.prototype;
    /** Built-in value references. */

    var propertyIsEnumerable = objectProto.propertyIsEnumerable;
    /* Built-in method references for those with the same name as other `lodash` methods. */

    var nativeGetSymbols = Object.getOwnPropertySymbols;
    /**
     * Creates an array of the own enumerable symbols of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of symbols.
     */

    var getSymbols = !nativeGetSymbols ? stubArray : function (object) {
      if (object == null) {
        return [];
      }

      object = Object(object);
      return arrayFilter(nativeGetSymbols(object), function (symbol) {
        return propertyIsEnumerable.call(object, symbol);
      });
    };
    module.exports = getSymbols;
    /***/
  },

  /***/
  "./node_modules/lodash/_getSymbolsIn.js":
  /*!**********************************************!*\
    !*** ./node_modules/lodash/_getSymbolsIn.js ***!
    \**********************************************/

  /*! no static exports found */

  /***/
  function node_modulesLodash_getSymbolsInJs(module, exports, __webpack_require__) {
    var arrayPush = __webpack_require__(
    /*! ./_arrayPush */
    "./node_modules/lodash/_arrayPush.js"),
        getPrototype = __webpack_require__(
    /*! ./_getPrototype */
    "./node_modules/lodash/_getPrototype.js"),
        getSymbols = __webpack_require__(
    /*! ./_getSymbols */
    "./node_modules/lodash/_getSymbols.js"),
        stubArray = __webpack_require__(
    /*! ./stubArray */
    "./node_modules/lodash/stubArray.js");
    /* Built-in method references for those with the same name as other `lodash` methods. */


    var nativeGetSymbols = Object.getOwnPropertySymbols;
    /**
     * Creates an array of the own and inherited enumerable symbols of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of symbols.
     */

    var getSymbolsIn = !nativeGetSymbols ? stubArray : function (object) {
      var result = [];

      while (object) {
        arrayPush(result, getSymbols(object));
        object = getPrototype(object);
      }

      return result;
    };
    module.exports = getSymbolsIn;
    /***/
  },

  /***/
  "./node_modules/lodash/_getTag.js":
  /*!****************************************!*\
    !*** ./node_modules/lodash/_getTag.js ***!
    \****************************************/

  /*! no static exports found */

  /***/
  function node_modulesLodash_getTagJs(module, exports, __webpack_require__) {
    var DataView = __webpack_require__(
    /*! ./_DataView */
    "./node_modules/lodash/_DataView.js"),
        Map = __webpack_require__(
    /*! ./_Map */
    "./node_modules/lodash/_Map.js"),
        Promise = __webpack_require__(
    /*! ./_Promise */
    "./node_modules/lodash/_Promise.js"),
        Set = __webpack_require__(
    /*! ./_Set */
    "./node_modules/lodash/_Set.js"),
        WeakMap = __webpack_require__(
    /*! ./_WeakMap */
    "./node_modules/lodash/_WeakMap.js"),
        baseGetTag = __webpack_require__(
    /*! ./_baseGetTag */
    "./node_modules/lodash/_baseGetTag.js"),
        toSource = __webpack_require__(
    /*! ./_toSource */
    "./node_modules/lodash/_toSource.js");
    /** `Object#toString` result references. */


    var mapTag = '[object Map]',
        objectTag = '[object Object]',
        promiseTag = '[object Promise]',
        setTag = '[object Set]',
        weakMapTag = '[object WeakMap]';
    var dataViewTag = '[object DataView]';
    /** Used to detect maps, sets, and weakmaps. */

    var dataViewCtorString = toSource(DataView),
        mapCtorString = toSource(Map),
        promiseCtorString = toSource(Promise),
        setCtorString = toSource(Set),
        weakMapCtorString = toSource(WeakMap);
    /**
     * Gets the `toStringTag` of `value`.
     *
     * @private
     * @param {*} value The value to query.
     * @returns {string} Returns the `toStringTag`.
     */

    var getTag = baseGetTag; // Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.

    if (DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag || Map && getTag(new Map()) != mapTag || Promise && getTag(Promise.resolve()) != promiseTag || Set && getTag(new Set()) != setTag || WeakMap && getTag(new WeakMap()) != weakMapTag) {
      getTag = function getTag(value) {
        var result = baseGetTag(value),
            Ctor = result == objectTag ? value.constructor : undefined,
            ctorString = Ctor ? toSource(Ctor) : '';

        if (ctorString) {
          switch (ctorString) {
            case dataViewCtorString:
              return dataViewTag;

            case mapCtorString:
              return mapTag;

            case promiseCtorString:
              return promiseTag;

            case setCtorString:
              return setTag;

            case weakMapCtorString:
              return weakMapTag;
          }
        }

        return result;
      };
    }

    module.exports = getTag;
    /***/
  },

  /***/
  "./node_modules/lodash/_getValue.js":
  /*!******************************************!*\
    !*** ./node_modules/lodash/_getValue.js ***!
    \******************************************/

  /*! no static exports found */

  /***/
  function node_modulesLodash_getValueJs(module, exports) {
    /**
     * Gets the value at `key` of `object`.
     *
     * @private
     * @param {Object} [object] The object to query.
     * @param {string} key The key of the property to get.
     * @returns {*} Returns the property value.
     */
    function getValue(object, key) {
      return object == null ? undefined : object[key];
    }

    module.exports = getValue;
    /***/
  },

  /***/
  "./node_modules/lodash/_hasPath.js":
  /*!*****************************************!*\
    !*** ./node_modules/lodash/_hasPath.js ***!
    \*****************************************/

  /*! no static exports found */

  /***/
  function node_modulesLodash_hasPathJs(module, exports, __webpack_require__) {
    var castPath = __webpack_require__(
    /*! ./_castPath */
    "./node_modules/lodash/_castPath.js"),
        isArguments = __webpack_require__(
    /*! ./isArguments */
    "./node_modules/lodash/isArguments.js"),
        isArray = __webpack_require__(
    /*! ./isArray */
    "./node_modules/lodash/isArray.js"),
        isIndex = __webpack_require__(
    /*! ./_isIndex */
    "./node_modules/lodash/_isIndex.js"),
        isLength = __webpack_require__(
    /*! ./isLength */
    "./node_modules/lodash/isLength.js"),
        toKey = __webpack_require__(
    /*! ./_toKey */
    "./node_modules/lodash/_toKey.js");
    /**
     * Checks if `path` exists on `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {Array|string} path The path to check.
     * @param {Function} hasFunc The function to check properties.
     * @returns {boolean} Returns `true` if `path` exists, else `false`.
     */


    function hasPath(object, path, hasFunc) {
      path = castPath(path, object);
      var index = -1,
          length = path.length,
          result = false;

      while (++index < length) {
        var key = toKey(path[index]);

        if (!(result = object != null && hasFunc(object, key))) {
          break;
        }

        object = object[key];
      }

      if (result || ++index != length) {
        return result;
      }

      length = object == null ? 0 : object.length;
      return !!length && isLength(length) && isIndex(key, length) && (isArray(object) || isArguments(object));
    }

    module.exports = hasPath;
    /***/
  },

  /***/
  "./node_modules/lodash/_hashClear.js":
  /*!*******************************************!*\
    !*** ./node_modules/lodash/_hashClear.js ***!
    \*******************************************/

  /*! no static exports found */

  /***/
  function node_modulesLodash_hashClearJs(module, exports, __webpack_require__) {
    var nativeCreate = __webpack_require__(
    /*! ./_nativeCreate */
    "./node_modules/lodash/_nativeCreate.js");
    /**
     * Removes all key-value entries from the hash.
     *
     * @private
     * @name clear
     * @memberOf Hash
     */


    function hashClear() {
      this.__data__ = nativeCreate ? nativeCreate(null) : {};
      this.size = 0;
    }

    module.exports = hashClear;
    /***/
  },

  /***/
  "./node_modules/lodash/_hashDelete.js":
  /*!********************************************!*\
    !*** ./node_modules/lodash/_hashDelete.js ***!
    \********************************************/

  /*! no static exports found */

  /***/
  function node_modulesLodash_hashDeleteJs(module, exports) {
    /**
     * Removes `key` and its value from the hash.
     *
     * @private
     * @name delete
     * @memberOf Hash
     * @param {Object} hash The hash to modify.
     * @param {string} key The key of the value to remove.
     * @returns {boolean} Returns `true` if the entry was removed, else `false`.
     */
    function hashDelete(key) {
      var result = this.has(key) && delete this.__data__[key];
      this.size -= result ? 1 : 0;
      return result;
    }

    module.exports = hashDelete;
    /***/
  },

  /***/
  "./node_modules/lodash/_hashGet.js":
  /*!*****************************************!*\
    !*** ./node_modules/lodash/_hashGet.js ***!
    \*****************************************/

  /*! no static exports found */

  /***/
  function node_modulesLodash_hashGetJs(module, exports, __webpack_require__) {
    var nativeCreate = __webpack_require__(
    /*! ./_nativeCreate */
    "./node_modules/lodash/_nativeCreate.js");
    /** Used to stand-in for `undefined` hash values. */


    var HASH_UNDEFINED = '__lodash_hash_undefined__';
    /** Used for built-in method references. */

    var objectProto = Object.prototype;
    /** Used to check objects for own properties. */

    var hasOwnProperty = objectProto.hasOwnProperty;
    /**
     * Gets the hash value for `key`.
     *
     * @private
     * @name get
     * @memberOf Hash
     * @param {string} key The key of the value to get.
     * @returns {*} Returns the entry value.
     */

    function hashGet(key) {
      var data = this.__data__;

      if (nativeCreate) {
        var result = data[key];
        return result === HASH_UNDEFINED ? undefined : result;
      }

      return hasOwnProperty.call(data, key) ? data[key] : undefined;
    }

    module.exports = hashGet;
    /***/
  },

  /***/
  "./node_modules/lodash/_hashHas.js":
  /*!*****************************************!*\
    !*** ./node_modules/lodash/_hashHas.js ***!
    \*****************************************/

  /*! no static exports found */

  /***/
  function node_modulesLodash_hashHasJs(module, exports, __webpack_require__) {
    var nativeCreate = __webpack_require__(
    /*! ./_nativeCreate */
    "./node_modules/lodash/_nativeCreate.js");
    /** Used for built-in method references. */


    var objectProto = Object.prototype;
    /** Used to check objects for own properties. */

    var hasOwnProperty = objectProto.hasOwnProperty;
    /**
     * Checks if a hash value for `key` exists.
     *
     * @private
     * @name has
     * @memberOf Hash
     * @param {string} key The key of the entry to check.
     * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
     */

    function hashHas(key) {
      var data = this.__data__;
      return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
    }

    module.exports = hashHas;
    /***/
  },

  /***/
  "./node_modules/lodash/_hashSet.js":
  /*!*****************************************!*\
    !*** ./node_modules/lodash/_hashSet.js ***!
    \*****************************************/

  /*! no static exports found */

  /***/
  function node_modulesLodash_hashSetJs(module, exports, __webpack_require__) {
    var nativeCreate = __webpack_require__(
    /*! ./_nativeCreate */
    "./node_modules/lodash/_nativeCreate.js");
    /** Used to stand-in for `undefined` hash values. */


    var HASH_UNDEFINED = '__lodash_hash_undefined__';
    /**
     * Sets the hash `key` to `value`.
     *
     * @private
     * @name set
     * @memberOf Hash
     * @param {string} key The key of the value to set.
     * @param {*} value The value to set.
     * @returns {Object} Returns the hash instance.
     */

    function hashSet(key, value) {
      var data = this.__data__;
      this.size += this.has(key) ? 0 : 1;
      data[key] = nativeCreate && value === undefined ? HASH_UNDEFINED : value;
      return this;
    }

    module.exports = hashSet;
    /***/
  },

  /***/
  "./node_modules/lodash/_isIndex.js":
  /*!*****************************************!*\
    !*** ./node_modules/lodash/_isIndex.js ***!
    \*****************************************/

  /*! no static exports found */

  /***/
  function node_modulesLodash_isIndexJs(module, exports) {
    /** Used as references for various `Number` constants. */
    var MAX_SAFE_INTEGER = 9007199254740991;
    /** Used to detect unsigned integer values. */

    var reIsUint = /^(?:0|[1-9]\d*)$/;
    /**
     * Checks if `value` is a valid array-like index.
     *
     * @private
     * @param {*} value The value to check.
     * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
     * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
     */

    function isIndex(value, length) {
      var type = _typeof(value);

      length = length == null ? MAX_SAFE_INTEGER : length;
      return !!length && (type == 'number' || type != 'symbol' && reIsUint.test(value)) && value > -1 && value % 1 == 0 && value < length;
    }

    module.exports = isIndex;
    /***/
  },

  /***/
  "./node_modules/lodash/_isKey.js":
  /*!***************************************!*\
    !*** ./node_modules/lodash/_isKey.js ***!
    \***************************************/

  /*! no static exports found */

  /***/
  function node_modulesLodash_isKeyJs(module, exports, __webpack_require__) {
    var isArray = __webpack_require__(
    /*! ./isArray */
    "./node_modules/lodash/isArray.js"),
        isSymbol = __webpack_require__(
    /*! ./isSymbol */
    "./node_modules/lodash/isSymbol.js");
    /** Used to match property names within property paths. */


    var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
        reIsPlainProp = /^\w*$/;
    /**
     * Checks if `value` is a property name and not a property path.
     *
     * @private
     * @param {*} value The value to check.
     * @param {Object} [object] The object to query keys on.
     * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
     */

    function isKey(value, object) {
      if (isArray(value)) {
        return false;
      }

      var type = _typeof(value);

      if (type == 'number' || type == 'symbol' || type == 'boolean' || value == null || isSymbol(value)) {
        return true;
      }

      return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object != null && value in Object(object);
    }

    module.exports = isKey;
    /***/
  },

  /***/
  "./node_modules/lodash/_isKeyable.js":
  /*!*******************************************!*\
    !*** ./node_modules/lodash/_isKeyable.js ***!
    \*******************************************/

  /*! no static exports found */

  /***/
  function node_modulesLodash_isKeyableJs(module, exports) {
    /**
     * Checks if `value` is suitable for use as unique object key.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
     */
    function isKeyable(value) {
      var type = _typeof(value);

      return type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean' ? value !== '__proto__' : value === null;
    }

    module.exports = isKeyable;
    /***/
  },

  /***/
  "./node_modules/lodash/_isMasked.js":
  /*!******************************************!*\
    !*** ./node_modules/lodash/_isMasked.js ***!
    \******************************************/

  /*! no static exports found */

  /***/
  function node_modulesLodash_isMaskedJs(module, exports, __webpack_require__) {
    var coreJsData = __webpack_require__(
    /*! ./_coreJsData */
    "./node_modules/lodash/_coreJsData.js");
    /** Used to detect methods masquerading as native. */


    var maskSrcKey = function () {
      var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
      return uid ? 'Symbol(src)_1.' + uid : '';
    }();
    /**
     * Checks if `func` has its source masked.
     *
     * @private
     * @param {Function} func The function to check.
     * @returns {boolean} Returns `true` if `func` is masked, else `false`.
     */


    function isMasked(func) {
      return !!maskSrcKey && maskSrcKey in func;
    }

    module.exports = isMasked;
    /***/
  },

  /***/
  "./node_modules/lodash/_isPrototype.js":
  /*!*********************************************!*\
    !*** ./node_modules/lodash/_isPrototype.js ***!
    \*********************************************/

  /*! no static exports found */

  /***/
  function node_modulesLodash_isPrototypeJs(module, exports) {
    /** Used for built-in method references. */
    var objectProto = Object.prototype;
    /**
     * Checks if `value` is likely a prototype object.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
     */

    function isPrototype(value) {
      var Ctor = value && value.constructor,
          proto = typeof Ctor == 'function' && Ctor.prototype || objectProto;
      return value === proto;
    }

    module.exports = isPrototype;
    /***/
  },

  /***/
  "./node_modules/lodash/_isStrictComparable.js":
  /*!****************************************************!*\
    !*** ./node_modules/lodash/_isStrictComparable.js ***!
    \****************************************************/

  /*! no static exports found */

  /***/
  function node_modulesLodash_isStrictComparableJs(module, exports, __webpack_require__) {
    var isObject = __webpack_require__(
    /*! ./isObject */
    "./node_modules/lodash/isObject.js");
    /**
     * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` if suitable for strict
     *  equality comparisons, else `false`.
     */


    function isStrictComparable(value) {
      return value === value && !isObject(value);
    }

    module.exports = isStrictComparable;
    /***/
  },

  /***/
  "./node_modules/lodash/_listCacheClear.js":
  /*!************************************************!*\
    !*** ./node_modules/lodash/_listCacheClear.js ***!
    \************************************************/

  /*! no static exports found */

  /***/
  function node_modulesLodash_listCacheClearJs(module, exports) {
    /**
     * Removes all key-value entries from the list cache.
     *
     * @private
     * @name clear
     * @memberOf ListCache
     */
    function listCacheClear() {
      this.__data__ = [];
      this.size = 0;
    }

    module.exports = listCacheClear;
    /***/
  },

  /***/
  "./node_modules/lodash/_listCacheDelete.js":
  /*!*************************************************!*\
    !*** ./node_modules/lodash/_listCacheDelete.js ***!
    \*************************************************/

  /*! no static exports found */

  /***/
  function node_modulesLodash_listCacheDeleteJs(module, exports, __webpack_require__) {
    var assocIndexOf = __webpack_require__(
    /*! ./_assocIndexOf */
    "./node_modules/lodash/_assocIndexOf.js");
    /** Used for built-in method references. */


    var arrayProto = Array.prototype;
    /** Built-in value references. */

    var splice = arrayProto.splice;
    /**
     * Removes `key` and its value from the list cache.
     *
     * @private
     * @name delete
     * @memberOf ListCache
     * @param {string} key The key of the value to remove.
     * @returns {boolean} Returns `true` if the entry was removed, else `false`.
     */

    function listCacheDelete(key) {
      var data = this.__data__,
          index = assocIndexOf(data, key);

      if (index < 0) {
        return false;
      }

      var lastIndex = data.length - 1;

      if (index == lastIndex) {
        data.pop();
      } else {
        splice.call(data, index, 1);
      }

      --this.size;
      return true;
    }

    module.exports = listCacheDelete;
    /***/
  },

  /***/
  "./node_modules/lodash/_listCacheGet.js":
  /*!**********************************************!*\
    !*** ./node_modules/lodash/_listCacheGet.js ***!
    \**********************************************/

  /*! no static exports found */

  /***/
  function node_modulesLodash_listCacheGetJs(module, exports, __webpack_require__) {
    var assocIndexOf = __webpack_require__(
    /*! ./_assocIndexOf */
    "./node_modules/lodash/_assocIndexOf.js");
    /**
     * Gets the list cache value for `key`.
     *
     * @private
     * @name get
     * @memberOf ListCache
     * @param {string} key The key of the value to get.
     * @returns {*} Returns the entry value.
     */


    function listCacheGet(key) {
      var data = this.__data__,
          index = assocIndexOf(data, key);
      return index < 0 ? undefined : data[index][1];
    }

    module.exports = listCacheGet;
    /***/
  },

  /***/
  "./node_modules/lodash/_listCacheHas.js":
  /*!**********************************************!*\
    !*** ./node_modules/lodash/_listCacheHas.js ***!
    \**********************************************/

  /*! no static exports found */

  /***/
  function node_modulesLodash_listCacheHasJs(module, exports, __webpack_require__) {
    var assocIndexOf = __webpack_require__(
    /*! ./_assocIndexOf */
    "./node_modules/lodash/_assocIndexOf.js");
    /**
     * Checks if a list cache value for `key` exists.
     *
     * @private
     * @name has
     * @memberOf ListCache
     * @param {string} key The key of the entry to check.
     * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
     */


    function listCacheHas(key) {
      return assocIndexOf(this.__data__, key) > -1;
    }

    module.exports = listCacheHas;
    /***/
  },

  /***/
  "./node_modules/lodash/_listCacheSet.js":
  /*!**********************************************!*\
    !*** ./node_modules/lodash/_listCacheSet.js ***!
    \**********************************************/

  /*! no static exports found */

  /***/
  function node_modulesLodash_listCacheSetJs(module, exports, __webpack_require__) {
    var assocIndexOf = __webpack_require__(
    /*! ./_assocIndexOf */
    "./node_modules/lodash/_assocIndexOf.js");
    /**
     * Sets the list cache `key` to `value`.
     *
     * @private
     * @name set
     * @memberOf ListCache
     * @param {string} key The key of the value to set.
     * @param {*} value The value to set.
     * @returns {Object} Returns the list cache instance.
     */


    function listCacheSet(key, value) {
      var data = this.__data__,
          index = assocIndexOf(data, key);

      if (index < 0) {
        ++this.size;
        data.push([key, value]);
      } else {
        data[index][1] = value;
      }

      return this;
    }

    module.exports = listCacheSet;
    /***/
  },

  /***/
  "./node_modules/lodash/_mapCacheClear.js":
  /*!***********************************************!*\
    !*** ./node_modules/lodash/_mapCacheClear.js ***!
    \***********************************************/

  /*! no static exports found */

  /***/
  function node_modulesLodash_mapCacheClearJs(module, exports, __webpack_require__) {
    var Hash = __webpack_require__(
    /*! ./_Hash */
    "./node_modules/lodash/_Hash.js"),
        ListCache = __webpack_require__(
    /*! ./_ListCache */
    "./node_modules/lodash/_ListCache.js"),
        Map = __webpack_require__(
    /*! ./_Map */
    "./node_modules/lodash/_Map.js");
    /**
     * Removes all key-value entries from the map.
     *
     * @private
     * @name clear
     * @memberOf MapCache
     */


    function mapCacheClear() {
      this.size = 0;
      this.__data__ = {
        'hash': new Hash(),
        'map': new (Map || ListCache)(),
        'string': new Hash()
      };
    }

    module.exports = mapCacheClear;
    /***/
  },

  /***/
  "./node_modules/lodash/_mapCacheDelete.js":
  /*!************************************************!*\
    !*** ./node_modules/lodash/_mapCacheDelete.js ***!
    \************************************************/

  /*! no static exports found */

  /***/
  function node_modulesLodash_mapCacheDeleteJs(module, exports, __webpack_require__) {
    var getMapData = __webpack_require__(
    /*! ./_getMapData */
    "./node_modules/lodash/_getMapData.js");
    /**
     * Removes `key` and its value from the map.
     *
     * @private
     * @name delete
     * @memberOf MapCache
     * @param {string} key The key of the value to remove.
     * @returns {boolean} Returns `true` if the entry was removed, else `false`.
     */


    function mapCacheDelete(key) {
      var result = getMapData(this, key)['delete'](key);
      this.size -= result ? 1 : 0;
      return result;
    }

    module.exports = mapCacheDelete;
    /***/
  },

  /***/
  "./node_modules/lodash/_mapCacheGet.js":
  /*!*********************************************!*\
    !*** ./node_modules/lodash/_mapCacheGet.js ***!
    \*********************************************/

  /*! no static exports found */

  /***/
  function node_modulesLodash_mapCacheGetJs(module, exports, __webpack_require__) {
    var getMapData = __webpack_require__(
    /*! ./_getMapData */
    "./node_modules/lodash/_getMapData.js");
    /**
     * Gets the map value for `key`.
     *
     * @private
     * @name get
     * @memberOf MapCache
     * @param {string} key The key of the value to get.
     * @returns {*} Returns the entry value.
     */


    function mapCacheGet(key) {
      return getMapData(this, key).get(key);
    }

    module.exports = mapCacheGet;
    /***/
  },

  /***/
  "./node_modules/lodash/_mapCacheHas.js":
  /*!*********************************************!*\
    !*** ./node_modules/lodash/_mapCacheHas.js ***!
    \*********************************************/

  /*! no static exports found */

  /***/
  function node_modulesLodash_mapCacheHasJs(module, exports, __webpack_require__) {
    var getMapData = __webpack_require__(
    /*! ./_getMapData */
    "./node_modules/lodash/_getMapData.js");
    /**
     * Checks if a map value for `key` exists.
     *
     * @private
     * @name has
     * @memberOf MapCache
     * @param {string} key The key of the entry to check.
     * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
     */


    function mapCacheHas(key) {
      return getMapData(this, key).has(key);
    }

    module.exports = mapCacheHas;
    /***/
  },

  /***/
  "./node_modules/lodash/_mapCacheSet.js":
  /*!*********************************************!*\
    !*** ./node_modules/lodash/_mapCacheSet.js ***!
    \*********************************************/

  /*! no static exports found */

  /***/
  function node_modulesLodash_mapCacheSetJs(module, exports, __webpack_require__) {
    var getMapData = __webpack_require__(
    /*! ./_getMapData */
    "./node_modules/lodash/_getMapData.js");
    /**
     * Sets the map `key` to `value`.
     *
     * @private
     * @name set
     * @memberOf MapCache
     * @param {string} key The key of the value to set.
     * @param {*} value The value to set.
     * @returns {Object} Returns the map cache instance.
     */


    function mapCacheSet(key, value) {
      var data = getMapData(this, key),
          size = data.size;
      data.set(key, value);
      this.size += data.size == size ? 0 : 1;
      return this;
    }

    module.exports = mapCacheSet;
    /***/
  },

  /***/
  "./node_modules/lodash/_mapToArray.js":
  /*!********************************************!*\
    !*** ./node_modules/lodash/_mapToArray.js ***!
    \********************************************/

  /*! no static exports found */

  /***/
  function node_modulesLodash_mapToArrayJs(module, exports) {
    /**
     * Converts `map` to its key-value pairs.
     *
     * @private
     * @param {Object} map The map to convert.
     * @returns {Array} Returns the key-value pairs.
     */
    function mapToArray(map) {
      var index = -1,
          result = Array(map.size);
      map.forEach(function (value, key) {
        result[++index] = [key, value];
      });
      return result;
    }

    module.exports = mapToArray;
    /***/
  },

  /***/
  "./node_modules/lodash/_matchesStrictComparable.js":
  /*!*********************************************************!*\
    !*** ./node_modules/lodash/_matchesStrictComparable.js ***!
    \*********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesLodash_matchesStrictComparableJs(module, exports) {
    /**
     * A specialized version of `matchesProperty` for source values suitable
     * for strict equality comparisons, i.e. `===`.
     *
     * @private
     * @param {string} key The key of the property to get.
     * @param {*} srcValue The value to match.
     * @returns {Function} Returns the new spec function.
     */
    function matchesStrictComparable(key, srcValue) {
      return function (object) {
        if (object == null) {
          return false;
        }

        return object[key] === srcValue && (srcValue !== undefined || key in Object(object));
      };
    }

    module.exports = matchesStrictComparable;
    /***/
  },

  /***/
  "./node_modules/lodash/_memoizeCapped.js":
  /*!***********************************************!*\
    !*** ./node_modules/lodash/_memoizeCapped.js ***!
    \***********************************************/

  /*! no static exports found */

  /***/
  function node_modulesLodash_memoizeCappedJs(module, exports, __webpack_require__) {
    var memoize = __webpack_require__(
    /*! ./memoize */
    "./node_modules/lodash/memoize.js");
    /** Used as the maximum memoize cache size. */


    var MAX_MEMOIZE_SIZE = 500;
    /**
     * A specialized version of `_.memoize` which clears the memoized function's
     * cache when it exceeds `MAX_MEMOIZE_SIZE`.
     *
     * @private
     * @param {Function} func The function to have its output memoized.
     * @returns {Function} Returns the new memoized function.
     */

    function memoizeCapped(func) {
      var result = memoize(func, function (key) {
        if (cache.size === MAX_MEMOIZE_SIZE) {
          cache.clear();
        }

        return key;
      });
      var cache = result.cache;
      return result;
    }

    module.exports = memoizeCapped;
    /***/
  },

  /***/
  "./node_modules/lodash/_nativeCreate.js":
  /*!**********************************************!*\
    !*** ./node_modules/lodash/_nativeCreate.js ***!
    \**********************************************/

  /*! no static exports found */

  /***/
  function node_modulesLodash_nativeCreateJs(module, exports, __webpack_require__) {
    var getNative = __webpack_require__(
    /*! ./_getNative */
    "./node_modules/lodash/_getNative.js");
    /* Built-in method references that are verified to be native. */


    var nativeCreate = getNative(Object, 'create');
    module.exports = nativeCreate;
    /***/
  },

  /***/
  "./node_modules/lodash/_nativeKeys.js":
  /*!********************************************!*\
    !*** ./node_modules/lodash/_nativeKeys.js ***!
    \********************************************/

  /*! no static exports found */

  /***/
  function node_modulesLodash_nativeKeysJs(module, exports, __webpack_require__) {
    var overArg = __webpack_require__(
    /*! ./_overArg */
    "./node_modules/lodash/_overArg.js");
    /* Built-in method references for those with the same name as other `lodash` methods. */


    var nativeKeys = overArg(Object.keys, Object);
    module.exports = nativeKeys;
    /***/
  },

  /***/
  "./node_modules/lodash/_nativeKeysIn.js":
  /*!**********************************************!*\
    !*** ./node_modules/lodash/_nativeKeysIn.js ***!
    \**********************************************/

  /*! no static exports found */

  /***/
  function node_modulesLodash_nativeKeysInJs(module, exports) {
    /**
     * This function is like
     * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
     * except that it includes inherited enumerable properties.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names.
     */
    function nativeKeysIn(object) {
      var result = [];

      if (object != null) {
        for (var key in Object(object)) {
          result.push(key);
        }
      }

      return result;
    }

    module.exports = nativeKeysIn;
    /***/
  },

  /***/
  "./node_modules/lodash/_nodeUtil.js":
  /*!******************************************!*\
    !*** ./node_modules/lodash/_nodeUtil.js ***!
    \******************************************/

  /*! no static exports found */

  /***/
  function node_modulesLodash_nodeUtilJs(module, exports, __webpack_require__) {
    /* WEBPACK VAR INJECTION */
    (function (module) {
      var freeGlobal = __webpack_require__(
      /*! ./_freeGlobal */
      "./node_modules/lodash/_freeGlobal.js");
      /** Detect free variable `exports`. */


      var freeExports = true && exports && !exports.nodeType && exports;
      /** Detect free variable `module`. */

      var freeModule = freeExports && _typeof(module) == 'object' && module && !module.nodeType && module;
      /** Detect the popular CommonJS extension `module.exports`. */

      var moduleExports = freeModule && freeModule.exports === freeExports;
      /** Detect free variable `process` from Node.js. */

      var freeProcess = moduleExports && freeGlobal.process;
      /** Used to access faster Node.js helpers. */

      var nodeUtil = function () {
        try {
          // Use `util.types` for Node.js 10+.
          var types = freeModule && freeModule.require && freeModule.require('util').types;

          if (types) {
            return types;
          } // Legacy `process.binding('util')` for Node.js < 10.


          return freeProcess && freeProcess.binding && freeProcess.binding('util');
        } catch (e) {}
      }();

      module.exports = nodeUtil;
      /* WEBPACK VAR INJECTION */
    }).call(this, __webpack_require__(
    /*! ./../webpack/buildin/module.js */
    "./node_modules/webpack/buildin/module.js")(module));
    /***/
  },

  /***/
  "./node_modules/lodash/_objectToString.js":
  /*!************************************************!*\
    !*** ./node_modules/lodash/_objectToString.js ***!
    \************************************************/

  /*! no static exports found */

  /***/
  function node_modulesLodash_objectToStringJs(module, exports) {
    /** Used for built-in method references. */
    var objectProto = Object.prototype;
    /**
     * Used to resolve the
     * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
     * of values.
     */

    var nativeObjectToString = objectProto.toString;
    /**
     * Converts `value` to a string using `Object.prototype.toString`.
     *
     * @private
     * @param {*} value The value to convert.
     * @returns {string} Returns the converted string.
     */

    function objectToString(value) {
      return nativeObjectToString.call(value);
    }

    module.exports = objectToString;
    /***/
  },

  /***/
  "./node_modules/lodash/_overArg.js":
  /*!*****************************************!*\
    !*** ./node_modules/lodash/_overArg.js ***!
    \*****************************************/

  /*! no static exports found */

  /***/
  function node_modulesLodash_overArgJs(module, exports) {
    /**
     * Creates a unary function that invokes `func` with its argument transformed.
     *
     * @private
     * @param {Function} func The function to wrap.
     * @param {Function} transform The argument transform.
     * @returns {Function} Returns the new function.
     */
    function overArg(func, transform) {
      return function (arg) {
        return func(transform(arg));
      };
    }

    module.exports = overArg;
    /***/
  },

  /***/
  "./node_modules/lodash/_root.js":
  /*!**************************************!*\
    !*** ./node_modules/lodash/_root.js ***!
    \**************************************/

  /*! no static exports found */

  /***/
  function node_modulesLodash_rootJs(module, exports, __webpack_require__) {
    var freeGlobal = __webpack_require__(
    /*! ./_freeGlobal */
    "./node_modules/lodash/_freeGlobal.js");
    /** Detect free variable `self`. */


    var freeSelf = (typeof self === "undefined" ? "undefined" : _typeof(self)) == 'object' && self && self.Object === Object && self;
    /** Used as a reference to the global object. */

    var root = freeGlobal || freeSelf || Function('return this')();
    module.exports = root;
    /***/
  },

  /***/
  "./node_modules/lodash/_setCacheAdd.js":
  /*!*********************************************!*\
    !*** ./node_modules/lodash/_setCacheAdd.js ***!
    \*********************************************/

  /*! no static exports found */

  /***/
  function node_modulesLodash_setCacheAddJs(module, exports) {
    /** Used to stand-in for `undefined` hash values. */
    var HASH_UNDEFINED = '__lodash_hash_undefined__';
    /**
     * Adds `value` to the array cache.
     *
     * @private
     * @name add
     * @memberOf SetCache
     * @alias push
     * @param {*} value The value to cache.
     * @returns {Object} Returns the cache instance.
     */

    function setCacheAdd(value) {
      this.__data__.set(value, HASH_UNDEFINED);

      return this;
    }

    module.exports = setCacheAdd;
    /***/
  },

  /***/
  "./node_modules/lodash/_setCacheHas.js":
  /*!*********************************************!*\
    !*** ./node_modules/lodash/_setCacheHas.js ***!
    \*********************************************/

  /*! no static exports found */

  /***/
  function node_modulesLodash_setCacheHasJs(module, exports) {
    /**
     * Checks if `value` is in the array cache.
     *
     * @private
     * @name has
     * @memberOf SetCache
     * @param {*} value The value to search for.
     * @returns {number} Returns `true` if `value` is found, else `false`.
     */
    function setCacheHas(value) {
      return this.__data__.has(value);
    }

    module.exports = setCacheHas;
    /***/
  },

  /***/
  "./node_modules/lodash/_setToArray.js":
  /*!********************************************!*\
    !*** ./node_modules/lodash/_setToArray.js ***!
    \********************************************/

  /*! no static exports found */

  /***/
  function node_modulesLodash_setToArrayJs(module, exports) {
    /**
     * Converts `set` to an array of its values.
     *
     * @private
     * @param {Object} set The set to convert.
     * @returns {Array} Returns the values.
     */
    function setToArray(set) {
      var index = -1,
          result = Array(set.size);
      set.forEach(function (value) {
        result[++index] = value;
      });
      return result;
    }

    module.exports = setToArray;
    /***/
  },

  /***/
  "./node_modules/lodash/_stackClear.js":
  /*!********************************************!*\
    !*** ./node_modules/lodash/_stackClear.js ***!
    \********************************************/

  /*! no static exports found */

  /***/
  function node_modulesLodash_stackClearJs(module, exports, __webpack_require__) {
    var ListCache = __webpack_require__(
    /*! ./_ListCache */
    "./node_modules/lodash/_ListCache.js");
    /**
     * Removes all key-value entries from the stack.
     *
     * @private
     * @name clear
     * @memberOf Stack
     */


    function stackClear() {
      this.__data__ = new ListCache();
      this.size = 0;
    }

    module.exports = stackClear;
    /***/
  },

  /***/
  "./node_modules/lodash/_stackDelete.js":
  /*!*********************************************!*\
    !*** ./node_modules/lodash/_stackDelete.js ***!
    \*********************************************/

  /*! no static exports found */

  /***/
  function node_modulesLodash_stackDeleteJs(module, exports) {
    /**
     * Removes `key` and its value from the stack.
     *
     * @private
     * @name delete
     * @memberOf Stack
     * @param {string} key The key of the value to remove.
     * @returns {boolean} Returns `true` if the entry was removed, else `false`.
     */
    function stackDelete(key) {
      var data = this.__data__,
          result = data['delete'](key);
      this.size = data.size;
      return result;
    }

    module.exports = stackDelete;
    /***/
  },

  /***/
  "./node_modules/lodash/_stackGet.js":
  /*!******************************************!*\
    !*** ./node_modules/lodash/_stackGet.js ***!
    \******************************************/

  /*! no static exports found */

  /***/
  function node_modulesLodash_stackGetJs(module, exports) {
    /**
     * Gets the stack value for `key`.
     *
     * @private
     * @name get
     * @memberOf Stack
     * @param {string} key The key of the value to get.
     * @returns {*} Returns the entry value.
     */
    function stackGet(key) {
      return this.__data__.get(key);
    }

    module.exports = stackGet;
    /***/
  },

  /***/
  "./node_modules/lodash/_stackHas.js":
  /*!******************************************!*\
    !*** ./node_modules/lodash/_stackHas.js ***!
    \******************************************/

  /*! no static exports found */

  /***/
  function node_modulesLodash_stackHasJs(module, exports) {
    /**
     * Checks if a stack value for `key` exists.
     *
     * @private
     * @name has
     * @memberOf Stack
     * @param {string} key The key of the entry to check.
     * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
     */
    function stackHas(key) {
      return this.__data__.has(key);
    }

    module.exports = stackHas;
    /***/
  },

  /***/
  "./node_modules/lodash/_stackSet.js":
  /*!******************************************!*\
    !*** ./node_modules/lodash/_stackSet.js ***!
    \******************************************/

  /*! no static exports found */

  /***/
  function node_modulesLodash_stackSetJs(module, exports, __webpack_require__) {
    var ListCache = __webpack_require__(
    /*! ./_ListCache */
    "./node_modules/lodash/_ListCache.js"),
        Map = __webpack_require__(
    /*! ./_Map */
    "./node_modules/lodash/_Map.js"),
        MapCache = __webpack_require__(
    /*! ./_MapCache */
    "./node_modules/lodash/_MapCache.js");
    /** Used as the size to enable large array optimizations. */


    var LARGE_ARRAY_SIZE = 200;
    /**
     * Sets the stack `key` to `value`.
     *
     * @private
     * @name set
     * @memberOf Stack
     * @param {string} key The key of the value to set.
     * @param {*} value The value to set.
     * @returns {Object} Returns the stack cache instance.
     */

    function stackSet(key, value) {
      var data = this.__data__;

      if (data instanceof ListCache) {
        var pairs = data.__data__;

        if (!Map || pairs.length < LARGE_ARRAY_SIZE - 1) {
          pairs.push([key, value]);
          this.size = ++data.size;
          return this;
        }

        data = this.__data__ = new MapCache(pairs);
      }

      data.set(key, value);
      this.size = data.size;
      return this;
    }

    module.exports = stackSet;
    /***/
  },

  /***/
  "./node_modules/lodash/_stringToPath.js":
  /*!**********************************************!*\
    !*** ./node_modules/lodash/_stringToPath.js ***!
    \**********************************************/

  /*! no static exports found */

  /***/
  function node_modulesLodash_stringToPathJs(module, exports, __webpack_require__) {
    var memoizeCapped = __webpack_require__(
    /*! ./_memoizeCapped */
    "./node_modules/lodash/_memoizeCapped.js");
    /** Used to match property names within property paths. */


    var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
    /** Used to match backslashes in property paths. */

    var reEscapeChar = /\\(\\)?/g;
    /**
     * Converts `string` to a property path array.
     *
     * @private
     * @param {string} string The string to convert.
     * @returns {Array} Returns the property path array.
     */

    var stringToPath = memoizeCapped(function (string) {
      var result = [];

      if (string.charCodeAt(0) === 46
      /* . */
      ) {
          result.push('');
        }

      string.replace(rePropName, function (match, number, quote, subString) {
        result.push(quote ? subString.replace(reEscapeChar, '$1') : number || match);
      });
      return result;
    });
    module.exports = stringToPath;
    /***/
  },

  /***/
  "./node_modules/lodash/_toKey.js":
  /*!***************************************!*\
    !*** ./node_modules/lodash/_toKey.js ***!
    \***************************************/

  /*! no static exports found */

  /***/
  function node_modulesLodash_toKeyJs(module, exports, __webpack_require__) {
    var isSymbol = __webpack_require__(
    /*! ./isSymbol */
    "./node_modules/lodash/isSymbol.js");
    /** Used as references for various `Number` constants. */


    var INFINITY = 1 / 0;
    /**
     * Converts `value` to a string key if it's not a string or symbol.
     *
     * @private
     * @param {*} value The value to inspect.
     * @returns {string|symbol} Returns the key.
     */

    function toKey(value) {
      if (typeof value == 'string' || isSymbol(value)) {
        return value;
      }

      var result = value + '';
      return result == '0' && 1 / value == -INFINITY ? '-0' : result;
    }

    module.exports = toKey;
    /***/
  },

  /***/
  "./node_modules/lodash/_toSource.js":
  /*!******************************************!*\
    !*** ./node_modules/lodash/_toSource.js ***!
    \******************************************/

  /*! no static exports found */

  /***/
  function node_modulesLodash_toSourceJs(module, exports) {
    /** Used for built-in method references. */
    var funcProto = Function.prototype;
    /** Used to resolve the decompiled source of functions. */

    var funcToString = funcProto.toString;
    /**
     * Converts `func` to its source code.
     *
     * @private
     * @param {Function} func The function to convert.
     * @returns {string} Returns the source code.
     */

    function toSource(func) {
      if (func != null) {
        try {
          return funcToString.call(func);
        } catch (e) {}

        try {
          return func + '';
        } catch (e) {}
      }

      return '';
    }

    module.exports = toSource;
    /***/
  },

  /***/
  "./node_modules/lodash/eq.js":
  /*!***********************************!*\
    !*** ./node_modules/lodash/eq.js ***!
    \***********************************/

  /*! no static exports found */

  /***/
  function node_modulesLodashEqJs(module, exports) {
    /**
     * Performs a
     * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * comparison between two values to determine if they are equivalent.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
     * @example
     *
     * var object = { 'a': 1 };
     * var other = { 'a': 1 };
     *
     * _.eq(object, object);
     * // => true
     *
     * _.eq(object, other);
     * // => false
     *
     * _.eq('a', 'a');
     * // => true
     *
     * _.eq('a', Object('a'));
     * // => false
     *
     * _.eq(NaN, NaN);
     * // => true
     */
    function eq(value, other) {
      return value === other || value !== value && other !== other;
    }

    module.exports = eq;
    /***/
  },

  /***/
  "./node_modules/lodash/filter.js":
  /*!***************************************!*\
    !*** ./node_modules/lodash/filter.js ***!
    \***************************************/

  /*! no static exports found */

  /***/
  function node_modulesLodashFilterJs(module, exports, __webpack_require__) {
    var arrayFilter = __webpack_require__(
    /*! ./_arrayFilter */
    "./node_modules/lodash/_arrayFilter.js"),
        baseFilter = __webpack_require__(
    /*! ./_baseFilter */
    "./node_modules/lodash/_baseFilter.js"),
        baseIteratee = __webpack_require__(
    /*! ./_baseIteratee */
    "./node_modules/lodash/_baseIteratee.js"),
        isArray = __webpack_require__(
    /*! ./isArray */
    "./node_modules/lodash/isArray.js");
    /**
     * Iterates over elements of `collection`, returning an array of all elements
     * `predicate` returns truthy for. The predicate is invoked with three
     * arguments: (value, index|key, collection).
     *
     * **Note:** Unlike `_.remove`, this method returns a new array.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the new filtered array.
     * @see _.reject
     * @example
     *
     * var users = [
     *   { 'user': 'barney', 'age': 36, 'active': true },
     *   { 'user': 'fred',   'age': 40, 'active': false }
     * ];
     *
     * _.filter(users, function(o) { return !o.active; });
     * // => objects for ['fred']
     *
     * // The `_.matches` iteratee shorthand.
     * _.filter(users, { 'age': 36, 'active': true });
     * // => objects for ['barney']
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.filter(users, ['active', false]);
     * // => objects for ['fred']
     *
     * // The `_.property` iteratee shorthand.
     * _.filter(users, 'active');
     * // => objects for ['barney']
     */


    function filter(collection, predicate) {
      var func = isArray(collection) ? arrayFilter : baseFilter;
      return func(collection, baseIteratee(predicate, 3));
    }

    module.exports = filter;
    /***/
  },

  /***/
  "./node_modules/lodash/get.js":
  /*!************************************!*\
    !*** ./node_modules/lodash/get.js ***!
    \************************************/

  /*! no static exports found */

  /***/
  function node_modulesLodashGetJs(module, exports, __webpack_require__) {
    var baseGet = __webpack_require__(
    /*! ./_baseGet */
    "./node_modules/lodash/_baseGet.js");
    /**
     * Gets the value at `path` of `object`. If the resolved value is
     * `undefined`, the `defaultValue` is returned in its place.
     *
     * @static
     * @memberOf _
     * @since 3.7.0
     * @category Object
     * @param {Object} object The object to query.
     * @param {Array|string} path The path of the property to get.
     * @param {*} [defaultValue] The value returned for `undefined` resolved values.
     * @returns {*} Returns the resolved value.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c': 3 } }] };
     *
     * _.get(object, 'a[0].b.c');
     * // => 3
     *
     * _.get(object, ['a', '0', 'b', 'c']);
     * // => 3
     *
     * _.get(object, 'a.b.c', 'default');
     * // => 'default'
     */


    function get(object, path, defaultValue) {
      var result = object == null ? undefined : baseGet(object, path);
      return result === undefined ? defaultValue : result;
    }

    module.exports = get;
    /***/
  },

  /***/
  "./node_modules/lodash/hasIn.js":
  /*!**************************************!*\
    !*** ./node_modules/lodash/hasIn.js ***!
    \**************************************/

  /*! no static exports found */

  /***/
  function node_modulesLodashHasInJs(module, exports, __webpack_require__) {
    var baseHasIn = __webpack_require__(
    /*! ./_baseHasIn */
    "./node_modules/lodash/_baseHasIn.js"),
        hasPath = __webpack_require__(
    /*! ./_hasPath */
    "./node_modules/lodash/_hasPath.js");
    /**
     * Checks if `path` is a direct or inherited property of `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The object to query.
     * @param {Array|string} path The path to check.
     * @returns {boolean} Returns `true` if `path` exists, else `false`.
     * @example
     *
     * var object = _.create({ 'a': _.create({ 'b': 2 }) });
     *
     * _.hasIn(object, 'a');
     * // => true
     *
     * _.hasIn(object, 'a.b');
     * // => true
     *
     * _.hasIn(object, ['a', 'b']);
     * // => true
     *
     * _.hasIn(object, 'b');
     * // => false
     */


    function hasIn(object, path) {
      return object != null && hasPath(object, path, baseHasIn);
    }

    module.exports = hasIn;
    /***/
  },

  /***/
  "./node_modules/lodash/identity.js":
  /*!*****************************************!*\
    !*** ./node_modules/lodash/identity.js ***!
    \*****************************************/

  /*! no static exports found */

  /***/
  function node_modulesLodashIdentityJs(module, exports) {
    /**
     * This method returns the first argument it receives.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Util
     * @param {*} value Any value.
     * @returns {*} Returns `value`.
     * @example
     *
     * var object = { 'a': 1 };
     *
     * console.log(_.identity(object) === object);
     * // => true
     */
    function identity(value) {
      return value;
    }

    module.exports = identity;
    /***/
  },

  /***/
  "./node_modules/lodash/isArguments.js":
  /*!********************************************!*\
    !*** ./node_modules/lodash/isArguments.js ***!
    \********************************************/

  /*! no static exports found */

  /***/
  function node_modulesLodashIsArgumentsJs(module, exports, __webpack_require__) {
    var baseIsArguments = __webpack_require__(
    /*! ./_baseIsArguments */
    "./node_modules/lodash/_baseIsArguments.js"),
        isObjectLike = __webpack_require__(
    /*! ./isObjectLike */
    "./node_modules/lodash/isObjectLike.js");
    /** Used for built-in method references. */


    var objectProto = Object.prototype;
    /** Used to check objects for own properties. */

    var hasOwnProperty = objectProto.hasOwnProperty;
    /** Built-in value references. */

    var propertyIsEnumerable = objectProto.propertyIsEnumerable;
    /**
     * Checks if `value` is likely an `arguments` object.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an `arguments` object,
     *  else `false`.
     * @example
     *
     * _.isArguments(function() { return arguments; }());
     * // => true
     *
     * _.isArguments([1, 2, 3]);
     * // => false
     */

    var isArguments = baseIsArguments(function () {
      return arguments;
    }()) ? baseIsArguments : function (value) {
      return isObjectLike(value) && hasOwnProperty.call(value, 'callee') && !propertyIsEnumerable.call(value, 'callee');
    };
    module.exports = isArguments;
    /***/
  },

  /***/
  "./node_modules/lodash/isArray.js":
  /*!****************************************!*\
    !*** ./node_modules/lodash/isArray.js ***!
    \****************************************/

  /*! no static exports found */

  /***/
  function node_modulesLodashIsArrayJs(module, exports) {
    /**
     * Checks if `value` is classified as an `Array` object.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an array, else `false`.
     * @example
     *
     * _.isArray([1, 2, 3]);
     * // => true
     *
     * _.isArray(document.body.children);
     * // => false
     *
     * _.isArray('abc');
     * // => false
     *
     * _.isArray(_.noop);
     * // => false
     */
    var isArray = Array.isArray;
    module.exports = isArray;
    /***/
  },

  /***/
  "./node_modules/lodash/isArrayLike.js":
  /*!********************************************!*\
    !*** ./node_modules/lodash/isArrayLike.js ***!
    \********************************************/

  /*! no static exports found */

  /***/
  function node_modulesLodashIsArrayLikeJs(module, exports, __webpack_require__) {
    var isFunction = __webpack_require__(
    /*! ./isFunction */
    "./node_modules/lodash/isFunction.js"),
        isLength = __webpack_require__(
    /*! ./isLength */
    "./node_modules/lodash/isLength.js");
    /**
     * Checks if `value` is array-like. A value is considered array-like if it's
     * not a function and has a `value.length` that's an integer greater than or
     * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
     * @example
     *
     * _.isArrayLike([1, 2, 3]);
     * // => true
     *
     * _.isArrayLike(document.body.children);
     * // => true
     *
     * _.isArrayLike('abc');
     * // => true
     *
     * _.isArrayLike(_.noop);
     * // => false
     */


    function isArrayLike(value) {
      return value != null && isLength(value.length) && !isFunction(value);
    }

    module.exports = isArrayLike;
    /***/
  },

  /***/
  "./node_modules/lodash/isBuffer.js":
  /*!*****************************************!*\
    !*** ./node_modules/lodash/isBuffer.js ***!
    \*****************************************/

  /*! no static exports found */

  /***/
  function node_modulesLodashIsBufferJs(module, exports, __webpack_require__) {
    /* WEBPACK VAR INJECTION */
    (function (module) {
      var root = __webpack_require__(
      /*! ./_root */
      "./node_modules/lodash/_root.js"),
          stubFalse = __webpack_require__(
      /*! ./stubFalse */
      "./node_modules/lodash/stubFalse.js");
      /** Detect free variable `exports`. */


      var freeExports = true && exports && !exports.nodeType && exports;
      /** Detect free variable `module`. */

      var freeModule = freeExports && _typeof(module) == 'object' && module && !module.nodeType && module;
      /** Detect the popular CommonJS extension `module.exports`. */

      var moduleExports = freeModule && freeModule.exports === freeExports;
      /** Built-in value references. */

      var Buffer = moduleExports ? root.Buffer : undefined;
      /* Built-in method references for those with the same name as other `lodash` methods. */

      var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;
      /**
       * Checks if `value` is a buffer.
       *
       * @static
       * @memberOf _
       * @since 4.3.0
       * @category Lang
       * @param {*} value The value to check.
       * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
       * @example
       *
       * _.isBuffer(new Buffer(2));
       * // => true
       *
       * _.isBuffer(new Uint8Array(2));
       * // => false
       */

      var isBuffer = nativeIsBuffer || stubFalse;
      module.exports = isBuffer;
      /* WEBPACK VAR INJECTION */
    }).call(this, __webpack_require__(
    /*! ./../webpack/buildin/module.js */
    "./node_modules/webpack/buildin/module.js")(module));
    /***/
  },

  /***/
  "./node_modules/lodash/isFunction.js":
  /*!*******************************************!*\
    !*** ./node_modules/lodash/isFunction.js ***!
    \*******************************************/

  /*! no static exports found */

  /***/
  function node_modulesLodashIsFunctionJs(module, exports, __webpack_require__) {
    var baseGetTag = __webpack_require__(
    /*! ./_baseGetTag */
    "./node_modules/lodash/_baseGetTag.js"),
        isObject = __webpack_require__(
    /*! ./isObject */
    "./node_modules/lodash/isObject.js");
    /** `Object#toString` result references. */


    var asyncTag = '[object AsyncFunction]',
        funcTag = '[object Function]',
        genTag = '[object GeneratorFunction]',
        proxyTag = '[object Proxy]';
    /**
     * Checks if `value` is classified as a `Function` object.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a function, else `false`.
     * @example
     *
     * _.isFunction(_);
     * // => true
     *
     * _.isFunction(/abc/);
     * // => false
     */

    function isFunction(value) {
      if (!isObject(value)) {
        return false;
      } // The use of `Object#toString` avoids issues with the `typeof` operator
      // in Safari 9 which returns 'object' for typed arrays and other constructors.


      var tag = baseGetTag(value);
      return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
    }

    module.exports = isFunction;
    /***/
  },

  /***/
  "./node_modules/lodash/isLength.js":
  /*!*****************************************!*\
    !*** ./node_modules/lodash/isLength.js ***!
    \*****************************************/

  /*! no static exports found */

  /***/
  function node_modulesLodashIsLengthJs(module, exports) {
    /** Used as references for various `Number` constants. */
    var MAX_SAFE_INTEGER = 9007199254740991;
    /**
     * Checks if `value` is a valid array-like length.
     *
     * **Note:** This method is loosely based on
     * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
     * @example
     *
     * _.isLength(3);
     * // => true
     *
     * _.isLength(Number.MIN_VALUE);
     * // => false
     *
     * _.isLength(Infinity);
     * // => false
     *
     * _.isLength('3');
     * // => false
     */

    function isLength(value) {
      return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
    }

    module.exports = isLength;
    /***/
  },

  /***/
  "./node_modules/lodash/isObject.js":
  /*!*****************************************!*\
    !*** ./node_modules/lodash/isObject.js ***!
    \*****************************************/

  /*! no static exports found */

  /***/
  function node_modulesLodashIsObjectJs(module, exports) {
    /**
     * Checks if `value` is the
     * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
     * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an object, else `false`.
     * @example
     *
     * _.isObject({});
     * // => true
     *
     * _.isObject([1, 2, 3]);
     * // => true
     *
     * _.isObject(_.noop);
     * // => true
     *
     * _.isObject(null);
     * // => false
     */
    function isObject(value) {
      var type = _typeof(value);

      return value != null && (type == 'object' || type == 'function');
    }

    module.exports = isObject;
    /***/
  },

  /***/
  "./node_modules/lodash/isObjectLike.js":
  /*!*********************************************!*\
    !*** ./node_modules/lodash/isObjectLike.js ***!
    \*********************************************/

  /*! no static exports found */

  /***/
  function node_modulesLodashIsObjectLikeJs(module, exports) {
    /**
     * Checks if `value` is object-like. A value is object-like if it's not `null`
     * and has a `typeof` result of "object".
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
     * @example
     *
     * _.isObjectLike({});
     * // => true
     *
     * _.isObjectLike([1, 2, 3]);
     * // => true
     *
     * _.isObjectLike(_.noop);
     * // => false
     *
     * _.isObjectLike(null);
     * // => false
     */
    function isObjectLike(value) {
      return value != null && _typeof(value) == 'object';
    }

    module.exports = isObjectLike;
    /***/
  },

  /***/
  "./node_modules/lodash/isSymbol.js":
  /*!*****************************************!*\
    !*** ./node_modules/lodash/isSymbol.js ***!
    \*****************************************/

  /*! no static exports found */

  /***/
  function node_modulesLodashIsSymbolJs(module, exports, __webpack_require__) {
    var baseGetTag = __webpack_require__(
    /*! ./_baseGetTag */
    "./node_modules/lodash/_baseGetTag.js"),
        isObjectLike = __webpack_require__(
    /*! ./isObjectLike */
    "./node_modules/lodash/isObjectLike.js");
    /** `Object#toString` result references. */


    var symbolTag = '[object Symbol]';
    /**
     * Checks if `value` is classified as a `Symbol` primitive or object.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
     * @example
     *
     * _.isSymbol(Symbol.iterator);
     * // => true
     *
     * _.isSymbol('abc');
     * // => false
     */

    function isSymbol(value) {
      return _typeof(value) == 'symbol' || isObjectLike(value) && baseGetTag(value) == symbolTag;
    }

    module.exports = isSymbol;
    /***/
  },

  /***/
  "./node_modules/lodash/isTypedArray.js":
  /*!*********************************************!*\
    !*** ./node_modules/lodash/isTypedArray.js ***!
    \*********************************************/

  /*! no static exports found */

  /***/
  function node_modulesLodashIsTypedArrayJs(module, exports, __webpack_require__) {
    var baseIsTypedArray = __webpack_require__(
    /*! ./_baseIsTypedArray */
    "./node_modules/lodash/_baseIsTypedArray.js"),
        baseUnary = __webpack_require__(
    /*! ./_baseUnary */
    "./node_modules/lodash/_baseUnary.js"),
        nodeUtil = __webpack_require__(
    /*! ./_nodeUtil */
    "./node_modules/lodash/_nodeUtil.js");
    /* Node.js helper references. */


    var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
    /**
     * Checks if `value` is classified as a typed array.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
     * @example
     *
     * _.isTypedArray(new Uint8Array);
     * // => true
     *
     * _.isTypedArray([]);
     * // => false
     */

    var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
    module.exports = isTypedArray;
    /***/
  },

  /***/
  "./node_modules/lodash/keys.js":
  /*!*************************************!*\
    !*** ./node_modules/lodash/keys.js ***!
    \*************************************/

  /*! no static exports found */

  /***/
  function node_modulesLodashKeysJs(module, exports, __webpack_require__) {
    var arrayLikeKeys = __webpack_require__(
    /*! ./_arrayLikeKeys */
    "./node_modules/lodash/_arrayLikeKeys.js"),
        baseKeys = __webpack_require__(
    /*! ./_baseKeys */
    "./node_modules/lodash/_baseKeys.js"),
        isArrayLike = __webpack_require__(
    /*! ./isArrayLike */
    "./node_modules/lodash/isArrayLike.js");
    /**
     * Creates an array of the own enumerable property names of `object`.
     *
     * **Note:** Non-object values are coerced to objects. See the
     * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
     * for more details.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.keys(new Foo);
     * // => ['a', 'b'] (iteration order is not guaranteed)
     *
     * _.keys('hi');
     * // => ['0', '1']
     */


    function keys(object) {
      return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
    }

    module.exports = keys;
    /***/
  },

  /***/
  "./node_modules/lodash/keysIn.js":
  /*!***************************************!*\
    !*** ./node_modules/lodash/keysIn.js ***!
    \***************************************/

  /*! no static exports found */

  /***/
  function node_modulesLodashKeysInJs(module, exports, __webpack_require__) {
    var arrayLikeKeys = __webpack_require__(
    /*! ./_arrayLikeKeys */
    "./node_modules/lodash/_arrayLikeKeys.js"),
        baseKeysIn = __webpack_require__(
    /*! ./_baseKeysIn */
    "./node_modules/lodash/_baseKeysIn.js"),
        isArrayLike = __webpack_require__(
    /*! ./isArrayLike */
    "./node_modules/lodash/isArrayLike.js");
    /**
     * Creates an array of the own and inherited enumerable property names of `object`.
     *
     * **Note:** Non-object values are coerced to objects.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Object
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.keysIn(new Foo);
     * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
     */


    function keysIn(object) {
      return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
    }

    module.exports = keysIn;
    /***/
  },

  /***/
  "./node_modules/lodash/memoize.js":
  /*!****************************************!*\
    !*** ./node_modules/lodash/memoize.js ***!
    \****************************************/

  /*! no static exports found */

  /***/
  function node_modulesLodashMemoizeJs(module, exports, __webpack_require__) {
    var MapCache = __webpack_require__(
    /*! ./_MapCache */
    "./node_modules/lodash/_MapCache.js");
    /** Error message constants. */


    var FUNC_ERROR_TEXT = 'Expected a function';
    /**
     * Creates a function that memoizes the result of `func`. If `resolver` is
     * provided, it determines the cache key for storing the result based on the
     * arguments provided to the memoized function. By default, the first argument
     * provided to the memoized function is used as the map cache key. The `func`
     * is invoked with the `this` binding of the memoized function.
     *
     * **Note:** The cache is exposed as the `cache` property on the memoized
     * function. Its creation may be customized by replacing the `_.memoize.Cache`
     * constructor with one whose instances implement the
     * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
     * method interface of `clear`, `delete`, `get`, `has`, and `set`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {Function} func The function to have its output memoized.
     * @param {Function} [resolver] The function to resolve the cache key.
     * @returns {Function} Returns the new memoized function.
     * @example
     *
     * var object = { 'a': 1, 'b': 2 };
     * var other = { 'c': 3, 'd': 4 };
     *
     * var values = _.memoize(_.values);
     * values(object);
     * // => [1, 2]
     *
     * values(other);
     * // => [3, 4]
     *
     * object.a = 2;
     * values(object);
     * // => [1, 2]
     *
     * // Modify the result cache.
     * values.cache.set(object, ['a', 'b']);
     * values(object);
     * // => ['a', 'b']
     *
     * // Replace `_.memoize.Cache`.
     * _.memoize.Cache = WeakMap;
     */

    function memoize(func, resolver) {
      if (typeof func != 'function' || resolver != null && typeof resolver != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }

      var memoized = function memoized() {
        var args = arguments,
            key = resolver ? resolver.apply(this, args) : args[0],
            cache = memoized.cache;

        if (cache.has(key)) {
          return cache.get(key);
        }

        var result = func.apply(this, args);
        memoized.cache = cache.set(key, result) || cache;
        return result;
      };

      memoized.cache = new (memoize.Cache || MapCache)();
      return memoized;
    } // Expose `MapCache`.


    memoize.Cache = MapCache;
    module.exports = memoize;
    /***/
  },

  /***/
  "./node_modules/lodash/pickBy.js":
  /*!***************************************!*\
    !*** ./node_modules/lodash/pickBy.js ***!
    \***************************************/

  /*! no static exports found */

  /***/
  function node_modulesLodashPickByJs(module, exports, __webpack_require__) {
    var arrayMap = __webpack_require__(
    /*! ./_arrayMap */
    "./node_modules/lodash/_arrayMap.js"),
        baseIteratee = __webpack_require__(
    /*! ./_baseIteratee */
    "./node_modules/lodash/_baseIteratee.js"),
        basePickBy = __webpack_require__(
    /*! ./_basePickBy */
    "./node_modules/lodash/_basePickBy.js"),
        getAllKeysIn = __webpack_require__(
    /*! ./_getAllKeysIn */
    "./node_modules/lodash/_getAllKeysIn.js");
    /**
     * Creates an object composed of the `object` properties `predicate` returns
     * truthy for. The predicate is invoked with two arguments: (value, key).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The source object.
     * @param {Function} [predicate=_.identity] The function invoked per property.
     * @returns {Object} Returns the new object.
     * @example
     *
     * var object = { 'a': 1, 'b': '2', 'c': 3 };
     *
     * _.pickBy(object, _.isNumber);
     * // => { 'a': 1, 'c': 3 }
     */


    function pickBy(object, predicate) {
      if (object == null) {
        return {};
      }

      var props = arrayMap(getAllKeysIn(object), function (prop) {
        return [prop];
      });
      predicate = baseIteratee(predicate);
      return basePickBy(object, props, function (value, path) {
        return predicate(value, path[0]);
      });
    }

    module.exports = pickBy;
    /***/
  },

  /***/
  "./node_modules/lodash/property.js":
  /*!*****************************************!*\
    !*** ./node_modules/lodash/property.js ***!
    \*****************************************/

  /*! no static exports found */

  /***/
  function node_modulesLodashPropertyJs(module, exports, __webpack_require__) {
    var baseProperty = __webpack_require__(
    /*! ./_baseProperty */
    "./node_modules/lodash/_baseProperty.js"),
        basePropertyDeep = __webpack_require__(
    /*! ./_basePropertyDeep */
    "./node_modules/lodash/_basePropertyDeep.js"),
        isKey = __webpack_require__(
    /*! ./_isKey */
    "./node_modules/lodash/_isKey.js"),
        toKey = __webpack_require__(
    /*! ./_toKey */
    "./node_modules/lodash/_toKey.js");
    /**
     * Creates a function that returns the value at `path` of a given object.
     *
     * @static
     * @memberOf _
     * @since 2.4.0
     * @category Util
     * @param {Array|string} path The path of the property to get.
     * @returns {Function} Returns the new accessor function.
     * @example
     *
     * var objects = [
     *   { 'a': { 'b': 2 } },
     *   { 'a': { 'b': 1 } }
     * ];
     *
     * _.map(objects, _.property('a.b'));
     * // => [2, 1]
     *
     * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
     * // => [1, 2]
     */


    function property(path) {
      return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
    }

    module.exports = property;
    /***/
  },

  /***/
  "./node_modules/lodash/stubArray.js":
  /*!******************************************!*\
    !*** ./node_modules/lodash/stubArray.js ***!
    \******************************************/

  /*! no static exports found */

  /***/
  function node_modulesLodashStubArrayJs(module, exports) {
    /**
     * This method returns a new empty array.
     *
     * @static
     * @memberOf _
     * @since 4.13.0
     * @category Util
     * @returns {Array} Returns the new empty array.
     * @example
     *
     * var arrays = _.times(2, _.stubArray);
     *
     * console.log(arrays);
     * // => [[], []]
     *
     * console.log(arrays[0] === arrays[1]);
     * // => false
     */
    function stubArray() {
      return [];
    }

    module.exports = stubArray;
    /***/
  },

  /***/
  "./node_modules/lodash/stubFalse.js":
  /*!******************************************!*\
    !*** ./node_modules/lodash/stubFalse.js ***!
    \******************************************/

  /*! no static exports found */

  /***/
  function node_modulesLodashStubFalseJs(module, exports) {
    /**
     * This method returns `false`.
     *
     * @static
     * @memberOf _
     * @since 4.13.0
     * @category Util
     * @returns {boolean} Returns `false`.
     * @example
     *
     * _.times(2, _.stubFalse);
     * // => [false, false]
     */
    function stubFalse() {
      return false;
    }

    module.exports = stubFalse;
    /***/
  },

  /***/
  "./node_modules/lodash/toString.js":
  /*!*****************************************!*\
    !*** ./node_modules/lodash/toString.js ***!
    \*****************************************/

  /*! no static exports found */

  /***/
  function node_modulesLodashToStringJs(module, exports, __webpack_require__) {
    var baseToString = __webpack_require__(
    /*! ./_baseToString */
    "./node_modules/lodash/_baseToString.js");
    /**
     * Converts `value` to a string. An empty string is returned for `null`
     * and `undefined` values. The sign of `-0` is preserved.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {string} Returns the converted string.
     * @example
     *
     * _.toString(null);
     * // => ''
     *
     * _.toString(-0);
     * // => '-0'
     *
     * _.toString([1, 2, 3]);
     * // => '1,2,3'
     */


    function toString(value) {
      return value == null ? '' : baseToString(value);
    }

    module.exports = toString;
    /***/
  },

  /***/
  "./node_modules/popper.js/dist/esm/popper.js":
  /*!***************************************************!*\
    !*** ./node_modules/popper.js/dist/esm/popper.js ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesPopperJsDistEsmPopperJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* WEBPACK VAR INJECTION */


    (function (global) {
      /**!
      * @fileOverview Kickass library to create and place poppers near their reference elements.
      * @version 1.16.1
      * @license
      * Copyright (c) 2016 Federico Zivolo and contributors
      *
      * Permission is hereby granted, free of charge, to any person obtaining a copy
      * of this software and associated documentation files (the "Software"), to deal
      * in the Software without restriction, including without limitation the rights
      * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
      * copies of the Software, and to permit persons to whom the Software is
      * furnished to do so, subject to the following conditions:
      *
      * The above copyright notice and this permission notice shall be included in all
      * copies or substantial portions of the Software.
      *
      * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
      * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
      * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
      * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
      * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
      * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
      * SOFTWARE.
      */
      var isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined' && typeof navigator !== 'undefined';

      var timeoutDuration = function () {
        var longerTimeoutBrowsers = ['Edge', 'Trident', 'Firefox'];

        for (var i = 0; i < longerTimeoutBrowsers.length; i += 1) {
          if (isBrowser && navigator.userAgent.indexOf(longerTimeoutBrowsers[i]) >= 0) {
            return 1;
          }
        }

        return 0;
      }();

      function microtaskDebounce(fn) {
        var called = false;
        return function () {
          if (called) {
            return;
          }

          called = true;
          window.Promise.resolve().then(function () {
            called = false;
            fn();
          });
        };
      }

      function taskDebounce(fn) {
        var scheduled = false;
        return function () {
          if (!scheduled) {
            scheduled = true;
            setTimeout(function () {
              scheduled = false;
              fn();
            }, timeoutDuration);
          }
        };
      }

      var supportsMicroTasks = isBrowser && window.Promise;
      /**
      * Create a debounced version of a method, that's asynchronously deferred
      * but called in the minimum time possible.
      *
      * @method
      * @memberof Popper.Utils
      * @argument {Function} fn
      * @returns {Function}
      */

      var debounce = supportsMicroTasks ? microtaskDebounce : taskDebounce;
      /**
       * Check if the given variable is a function
       * @method
       * @memberof Popper.Utils
       * @argument {Any} functionToCheck - variable to check
       * @returns {Boolean} answer to: is a function?
       */

      function isFunction(functionToCheck) {
        var getType = {};
        return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
      }
      /**
       * Get CSS computed property of the given element
       * @method
       * @memberof Popper.Utils
       * @argument {Eement} element
       * @argument {String} property
       */


      function getStyleComputedProperty(element, property) {
        if (element.nodeType !== 1) {
          return [];
        } // NOTE: 1 DOM access here


        var window = element.ownerDocument.defaultView;
        var css = window.getComputedStyle(element, null);
        return property ? css[property] : css;
      }
      /**
       * Returns the parentNode or the host of the element
       * @method
       * @memberof Popper.Utils
       * @argument {Element} element
       * @returns {Element} parent
       */


      function getParentNode(element) {
        if (element.nodeName === 'HTML') {
          return element;
        }

        return element.parentNode || element.host;
      }
      /**
       * Returns the scrolling parent of the given element
       * @method
       * @memberof Popper.Utils
       * @argument {Element} element
       * @returns {Element} scroll parent
       */


      function getScrollParent(element) {
        // Return body, `getScroll` will take care to get the correct `scrollTop` from it
        if (!element) {
          return document.body;
        }

        switch (element.nodeName) {
          case 'HTML':
          case 'BODY':
            return element.ownerDocument.body;

          case '#document':
            return element.body;
        } // Firefox want us to check `-x` and `-y` variations as well


        var _getStyleComputedProp = getStyleComputedProperty(element),
            overflow = _getStyleComputedProp.overflow,
            overflowX = _getStyleComputedProp.overflowX,
            overflowY = _getStyleComputedProp.overflowY;

        if (/(auto|scroll|overlay)/.test(overflow + overflowY + overflowX)) {
          return element;
        }

        return getScrollParent(getParentNode(element));
      }
      /**
       * Returns the reference node of the reference object, or the reference object itself.
       * @method
       * @memberof Popper.Utils
       * @param {Element|Object} reference - the reference element (the popper will be relative to this)
       * @returns {Element} parent
       */


      function getReferenceNode(reference) {
        return reference && reference.referenceNode ? reference.referenceNode : reference;
      }

      var isIE11 = isBrowser && !!(window.MSInputMethodContext && document.documentMode);
      var isIE10 = isBrowser && /MSIE 10/.test(navigator.userAgent);
      /**
       * Determines if the browser is Internet Explorer
       * @method
       * @memberof Popper.Utils
       * @param {Number} version to check
       * @returns {Boolean} isIE
       */

      function isIE(version) {
        if (version === 11) {
          return isIE11;
        }

        if (version === 10) {
          return isIE10;
        }

        return isIE11 || isIE10;
      }
      /**
       * Returns the offset parent of the given element
       * @method
       * @memberof Popper.Utils
       * @argument {Element} element
       * @returns {Element} offset parent
       */


      function getOffsetParent(element) {
        if (!element) {
          return document.documentElement;
        }

        var noOffsetParent = isIE(10) ? document.body : null; // NOTE: 1 DOM access here

        var offsetParent = element.offsetParent || null; // Skip hidden elements which don't have an offsetParent

        while (offsetParent === noOffsetParent && element.nextElementSibling) {
          offsetParent = (element = element.nextElementSibling).offsetParent;
        }

        var nodeName = offsetParent && offsetParent.nodeName;

        if (!nodeName || nodeName === 'BODY' || nodeName === 'HTML') {
          return element ? element.ownerDocument.documentElement : document.documentElement;
        } // .offsetParent will return the closest TH, TD or TABLE in case
        // no offsetParent is present, I hate this job...


        if (['TH', 'TD', 'TABLE'].indexOf(offsetParent.nodeName) !== -1 && getStyleComputedProperty(offsetParent, 'position') === 'static') {
          return getOffsetParent(offsetParent);
        }

        return offsetParent;
      }

      function isOffsetContainer(element) {
        var nodeName = element.nodeName;

        if (nodeName === 'BODY') {
          return false;
        }

        return nodeName === 'HTML' || getOffsetParent(element.firstElementChild) === element;
      }
      /**
       * Finds the root node (document, shadowDOM root) of the given element
       * @method
       * @memberof Popper.Utils
       * @argument {Element} node
       * @returns {Element} root node
       */


      function getRoot(node) {
        if (node.parentNode !== null) {
          return getRoot(node.parentNode);
        }

        return node;
      }
      /**
       * Finds the offset parent common to the two provided nodes
       * @method
       * @memberof Popper.Utils
       * @argument {Element} element1
       * @argument {Element} element2
       * @returns {Element} common offset parent
       */


      function findCommonOffsetParent(element1, element2) {
        // This check is needed to avoid errors in case one of the elements isn't defined for any reason
        if (!element1 || !element1.nodeType || !element2 || !element2.nodeType) {
          return document.documentElement;
        } // Here we make sure to give as "start" the element that comes first in the DOM


        var order = element1.compareDocumentPosition(element2) & Node.DOCUMENT_POSITION_FOLLOWING;
        var start = order ? element1 : element2;
        var end = order ? element2 : element1; // Get common ancestor container

        var range = document.createRange();
        range.setStart(start, 0);
        range.setEnd(end, 0);
        var commonAncestorContainer = range.commonAncestorContainer; // Both nodes are inside #document

        if (element1 !== commonAncestorContainer && element2 !== commonAncestorContainer || start.contains(end)) {
          if (isOffsetContainer(commonAncestorContainer)) {
            return commonAncestorContainer;
          }

          return getOffsetParent(commonAncestorContainer);
        } // one of the nodes is inside shadowDOM, find which one


        var element1root = getRoot(element1);

        if (element1root.host) {
          return findCommonOffsetParent(element1root.host, element2);
        } else {
          return findCommonOffsetParent(element1, getRoot(element2).host);
        }
      }
      /**
       * Gets the scroll value of the given element in the given side (top and left)
       * @method
       * @memberof Popper.Utils
       * @argument {Element} element
       * @argument {String} side `top` or `left`
       * @returns {number} amount of scrolled pixels
       */


      function getScroll(element) {
        var side = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'top';
        var upperSide = side === 'top' ? 'scrollTop' : 'scrollLeft';
        var nodeName = element.nodeName;

        if (nodeName === 'BODY' || nodeName === 'HTML') {
          var html = element.ownerDocument.documentElement;
          var scrollingElement = element.ownerDocument.scrollingElement || html;
          return scrollingElement[upperSide];
        }

        return element[upperSide];
      }
      /*
       * Sum or subtract the element scroll values (left and top) from a given rect object
       * @method
       * @memberof Popper.Utils
       * @param {Object} rect - Rect object you want to change
       * @param {HTMLElement} element - The element from the function reads the scroll values
       * @param {Boolean} subtract - set to true if you want to subtract the scroll values
       * @return {Object} rect - The modifier rect object
       */


      function includeScroll(rect, element) {
        var subtract = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
        var scrollTop = getScroll(element, 'top');
        var scrollLeft = getScroll(element, 'left');
        var modifier = subtract ? -1 : 1;
        rect.top += scrollTop * modifier;
        rect.bottom += scrollTop * modifier;
        rect.left += scrollLeft * modifier;
        rect.right += scrollLeft * modifier;
        return rect;
      }
      /*
       * Helper to detect borders of a given element
       * @method
       * @memberof Popper.Utils
       * @param {CSSStyleDeclaration} styles
       * Result of `getStyleComputedProperty` on the given element
       * @param {String} axis - `x` or `y`
       * @return {number} borders - The borders size of the given axis
       */


      function getBordersSize(styles, axis) {
        var sideA = axis === 'x' ? 'Left' : 'Top';
        var sideB = sideA === 'Left' ? 'Right' : 'Bottom';
        return parseFloat(styles['border' + sideA + 'Width']) + parseFloat(styles['border' + sideB + 'Width']);
      }

      function getSize(axis, body, html, computedStyle) {
        return Math.max(body['offset' + axis], body['scroll' + axis], html['client' + axis], html['offset' + axis], html['scroll' + axis], isIE(10) ? parseInt(html['offset' + axis]) + parseInt(computedStyle['margin' + (axis === 'Height' ? 'Top' : 'Left')]) + parseInt(computedStyle['margin' + (axis === 'Height' ? 'Bottom' : 'Right')]) : 0);
      }

      function getWindowSizes(document) {
        var body = document.body;
        var html = document.documentElement;
        var computedStyle = isIE(10) && getComputedStyle(html);
        return {
          height: getSize('Height', body, html, computedStyle),
          width: getSize('Width', body, html, computedStyle)
        };
      }

      var classCallCheck = function classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      };

      var createClass = function () {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }

        return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);
          if (staticProps) defineProperties(Constructor, staticProps);
          return Constructor;
        };
      }();

      var defineProperty = function defineProperty(obj, key, value) {
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
      };

      var _extends = Object.assign || function (target) {
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
      /**
       * Given element offsets, generate an output similar to getBoundingClientRect
       * @method
       * @memberof Popper.Utils
       * @argument {Object} offsets
       * @returns {Object} ClientRect like output
       */


      function getClientRect(offsets) {
        return _extends({}, offsets, {
          right: offsets.left + offsets.width,
          bottom: offsets.top + offsets.height
        });
      }
      /**
       * Get bounding client rect of given element
       * @method
       * @memberof Popper.Utils
       * @param {HTMLElement} element
       * @return {Object} client rect
       */


      function getBoundingClientRect(element) {
        var rect = {}; // IE10 10 FIX: Please, don't ask, the element isn't
        // considered in DOM in some circumstances...
        // This isn't reproducible in IE10 compatibility mode of IE11

        try {
          if (isIE(10)) {
            rect = element.getBoundingClientRect();
            var scrollTop = getScroll(element, 'top');
            var scrollLeft = getScroll(element, 'left');
            rect.top += scrollTop;
            rect.left += scrollLeft;
            rect.bottom += scrollTop;
            rect.right += scrollLeft;
          } else {
            rect = element.getBoundingClientRect();
          }
        } catch (e) {}

        var result = {
          left: rect.left,
          top: rect.top,
          width: rect.right - rect.left,
          height: rect.bottom - rect.top
        }; // subtract scrollbar size from sizes

        var sizes = element.nodeName === 'HTML' ? getWindowSizes(element.ownerDocument) : {};
        var width = sizes.width || element.clientWidth || result.width;
        var height = sizes.height || element.clientHeight || result.height;
        var horizScrollbar = element.offsetWidth - width;
        var vertScrollbar = element.offsetHeight - height; // if an hypothetical scrollbar is detected, we must be sure it's not a `border`
        // we make this check conditional for performance reasons

        if (horizScrollbar || vertScrollbar) {
          var styles = getStyleComputedProperty(element);
          horizScrollbar -= getBordersSize(styles, 'x');
          vertScrollbar -= getBordersSize(styles, 'y');
          result.width -= horizScrollbar;
          result.height -= vertScrollbar;
        }

        return getClientRect(result);
      }

      function getOffsetRectRelativeToArbitraryNode(children, parent) {
        var fixedPosition = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
        var isIE10 = isIE(10);
        var isHTML = parent.nodeName === 'HTML';
        var childrenRect = getBoundingClientRect(children);
        var parentRect = getBoundingClientRect(parent);
        var scrollParent = getScrollParent(children);
        var styles = getStyleComputedProperty(parent);
        var borderTopWidth = parseFloat(styles.borderTopWidth);
        var borderLeftWidth = parseFloat(styles.borderLeftWidth); // In cases where the parent is fixed, we must ignore negative scroll in offset calc

        if (fixedPosition && isHTML) {
          parentRect.top = Math.max(parentRect.top, 0);
          parentRect.left = Math.max(parentRect.left, 0);
        }

        var offsets = getClientRect({
          top: childrenRect.top - parentRect.top - borderTopWidth,
          left: childrenRect.left - parentRect.left - borderLeftWidth,
          width: childrenRect.width,
          height: childrenRect.height
        });
        offsets.marginTop = 0;
        offsets.marginLeft = 0; // Subtract margins of documentElement in case it's being used as parent
        // we do this only on HTML because it's the only element that behaves
        // differently when margins are applied to it. The margins are included in
        // the box of the documentElement, in the other cases not.

        if (!isIE10 && isHTML) {
          var marginTop = parseFloat(styles.marginTop);
          var marginLeft = parseFloat(styles.marginLeft);
          offsets.top -= borderTopWidth - marginTop;
          offsets.bottom -= borderTopWidth - marginTop;
          offsets.left -= borderLeftWidth - marginLeft;
          offsets.right -= borderLeftWidth - marginLeft; // Attach marginTop and marginLeft because in some circumstances we may need them

          offsets.marginTop = marginTop;
          offsets.marginLeft = marginLeft;
        }

        if (isIE10 && !fixedPosition ? parent.contains(scrollParent) : parent === scrollParent && scrollParent.nodeName !== 'BODY') {
          offsets = includeScroll(offsets, parent);
        }

        return offsets;
      }

      function getViewportOffsetRectRelativeToArtbitraryNode(element) {
        var excludeScroll = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        var html = element.ownerDocument.documentElement;
        var relativeOffset = getOffsetRectRelativeToArbitraryNode(element, html);
        var width = Math.max(html.clientWidth, window.innerWidth || 0);
        var height = Math.max(html.clientHeight, window.innerHeight || 0);
        var scrollTop = !excludeScroll ? getScroll(html) : 0;
        var scrollLeft = !excludeScroll ? getScroll(html, 'left') : 0;
        var offset = {
          top: scrollTop - relativeOffset.top + relativeOffset.marginTop,
          left: scrollLeft - relativeOffset.left + relativeOffset.marginLeft,
          width: width,
          height: height
        };
        return getClientRect(offset);
      }
      /**
       * Check if the given element is fixed or is inside a fixed parent
       * @method
       * @memberof Popper.Utils
       * @argument {Element} element
       * @argument {Element} customContainer
       * @returns {Boolean} answer to "isFixed?"
       */


      function isFixed(element) {
        var nodeName = element.nodeName;

        if (nodeName === 'BODY' || nodeName === 'HTML') {
          return false;
        }

        if (getStyleComputedProperty(element, 'position') === 'fixed') {
          return true;
        }

        var parentNode = getParentNode(element);

        if (!parentNode) {
          return false;
        }

        return isFixed(parentNode);
      }
      /**
       * Finds the first parent of an element that has a transformed property defined
       * @method
       * @memberof Popper.Utils
       * @argument {Element} element
       * @returns {Element} first transformed parent or documentElement
       */


      function getFixedPositionOffsetParent(element) {
        // This check is needed to avoid errors in case one of the elements isn't defined for any reason
        if (!element || !element.parentElement || isIE()) {
          return document.documentElement;
        }

        var el = element.parentElement;

        while (el && getStyleComputedProperty(el, 'transform') === 'none') {
          el = el.parentElement;
        }

        return el || document.documentElement;
      }
      /**
       * Computed the boundaries limits and return them
       * @method
       * @memberof Popper.Utils
       * @param {HTMLElement} popper
       * @param {HTMLElement} reference
       * @param {number} padding
       * @param {HTMLElement} boundariesElement - Element used to define the boundaries
       * @param {Boolean} fixedPosition - Is in fixed position mode
       * @returns {Object} Coordinates of the boundaries
       */


      function getBoundaries(popper, reference, padding, boundariesElement) {
        var fixedPosition = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false; // NOTE: 1 DOM access here

        var boundaries = {
          top: 0,
          left: 0
        };
        var offsetParent = fixedPosition ? getFixedPositionOffsetParent(popper) : findCommonOffsetParent(popper, getReferenceNode(reference)); // Handle viewport case

        if (boundariesElement === 'viewport') {
          boundaries = getViewportOffsetRectRelativeToArtbitraryNode(offsetParent, fixedPosition);
        } else {
          // Handle other cases based on DOM element used as boundaries
          var boundariesNode = void 0;

          if (boundariesElement === 'scrollParent') {
            boundariesNode = getScrollParent(getParentNode(reference));

            if (boundariesNode.nodeName === 'BODY') {
              boundariesNode = popper.ownerDocument.documentElement;
            }
          } else if (boundariesElement === 'window') {
            boundariesNode = popper.ownerDocument.documentElement;
          } else {
            boundariesNode = boundariesElement;
          }

          var offsets = getOffsetRectRelativeToArbitraryNode(boundariesNode, offsetParent, fixedPosition); // In case of HTML, we need a different computation

          if (boundariesNode.nodeName === 'HTML' && !isFixed(offsetParent)) {
            var _getWindowSizes = getWindowSizes(popper.ownerDocument),
                height = _getWindowSizes.height,
                width = _getWindowSizes.width;

            boundaries.top += offsets.top - offsets.marginTop;
            boundaries.bottom = height + offsets.top;
            boundaries.left += offsets.left - offsets.marginLeft;
            boundaries.right = width + offsets.left;
          } else {
            // for all the other DOM elements, this one is good
            boundaries = offsets;
          }
        } // Add paddings


        padding = padding || 0;
        var isPaddingNumber = typeof padding === 'number';
        boundaries.left += isPaddingNumber ? padding : padding.left || 0;
        boundaries.top += isPaddingNumber ? padding : padding.top || 0;
        boundaries.right -= isPaddingNumber ? padding : padding.right || 0;
        boundaries.bottom -= isPaddingNumber ? padding : padding.bottom || 0;
        return boundaries;
      }

      function getArea(_ref) {
        var width = _ref.width,
            height = _ref.height;
        return width * height;
      }
      /**
       * Utility used to transform the `auto` placement to the placement with more
       * available space.
       * @method
       * @memberof Popper.Utils
       * @argument {Object} data - The data object generated by update method
       * @argument {Object} options - Modifiers configuration and options
       * @returns {Object} The data object, properly modified
       */


      function computeAutoPlacement(placement, refRect, popper, reference, boundariesElement) {
        var padding = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;

        if (placement.indexOf('auto') === -1) {
          return placement;
        }

        var boundaries = getBoundaries(popper, reference, padding, boundariesElement);
        var rects = {
          top: {
            width: boundaries.width,
            height: refRect.top - boundaries.top
          },
          right: {
            width: boundaries.right - refRect.right,
            height: boundaries.height
          },
          bottom: {
            width: boundaries.width,
            height: boundaries.bottom - refRect.bottom
          },
          left: {
            width: refRect.left - boundaries.left,
            height: boundaries.height
          }
        };
        var sortedAreas = Object.keys(rects).map(function (key) {
          return _extends({
            key: key
          }, rects[key], {
            area: getArea(rects[key])
          });
        }).sort(function (a, b) {
          return b.area - a.area;
        });
        var filteredAreas = sortedAreas.filter(function (_ref2) {
          var width = _ref2.width,
              height = _ref2.height;
          return width >= popper.clientWidth && height >= popper.clientHeight;
        });
        var computedPlacement = filteredAreas.length > 0 ? filteredAreas[0].key : sortedAreas[0].key;
        var variation = placement.split('-')[1];
        return computedPlacement + (variation ? '-' + variation : '');
      }
      /**
       * Get offsets to the reference element
       * @method
       * @memberof Popper.Utils
       * @param {Object} state
       * @param {Element} popper - the popper element
       * @param {Element} reference - the reference element (the popper will be relative to this)
       * @param {Element} fixedPosition - is in fixed position mode
       * @returns {Object} An object containing the offsets which will be applied to the popper
       */


      function getReferenceOffsets(state, popper, reference) {
        var fixedPosition = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
        var commonOffsetParent = fixedPosition ? getFixedPositionOffsetParent(popper) : findCommonOffsetParent(popper, getReferenceNode(reference));
        return getOffsetRectRelativeToArbitraryNode(reference, commonOffsetParent, fixedPosition);
      }
      /**
       * Get the outer sizes of the given element (offset size + margins)
       * @method
       * @memberof Popper.Utils
       * @argument {Element} element
       * @returns {Object} object containing width and height properties
       */


      function getOuterSizes(element) {
        var window = element.ownerDocument.defaultView;
        var styles = window.getComputedStyle(element);
        var x = parseFloat(styles.marginTop || 0) + parseFloat(styles.marginBottom || 0);
        var y = parseFloat(styles.marginLeft || 0) + parseFloat(styles.marginRight || 0);
        var result = {
          width: element.offsetWidth + y,
          height: element.offsetHeight + x
        };
        return result;
      }
      /**
       * Get the opposite placement of the given one
       * @method
       * @memberof Popper.Utils
       * @argument {String} placement
       * @returns {String} flipped placement
       */


      function getOppositePlacement(placement) {
        var hash = {
          left: 'right',
          right: 'left',
          bottom: 'top',
          top: 'bottom'
        };
        return placement.replace(/left|right|bottom|top/g, function (matched) {
          return hash[matched];
        });
      }
      /**
       * Get offsets to the popper
       * @method
       * @memberof Popper.Utils
       * @param {Object} position - CSS position the Popper will get applied
       * @param {HTMLElement} popper - the popper element
       * @param {Object} referenceOffsets - the reference offsets (the popper will be relative to this)
       * @param {String} placement - one of the valid placement options
       * @returns {Object} popperOffsets - An object containing the offsets which will be applied to the popper
       */


      function getPopperOffsets(popper, referenceOffsets, placement) {
        placement = placement.split('-')[0]; // Get popper node sizes

        var popperRect = getOuterSizes(popper); // Add position, width and height to our offsets object

        var popperOffsets = {
          width: popperRect.width,
          height: popperRect.height
        }; // depending by the popper placement we have to compute its offsets slightly differently

        var isHoriz = ['right', 'left'].indexOf(placement) !== -1;
        var mainSide = isHoriz ? 'top' : 'left';
        var secondarySide = isHoriz ? 'left' : 'top';
        var measurement = isHoriz ? 'height' : 'width';
        var secondaryMeasurement = !isHoriz ? 'height' : 'width';
        popperOffsets[mainSide] = referenceOffsets[mainSide] + referenceOffsets[measurement] / 2 - popperRect[measurement] / 2;

        if (placement === secondarySide) {
          popperOffsets[secondarySide] = referenceOffsets[secondarySide] - popperRect[secondaryMeasurement];
        } else {
          popperOffsets[secondarySide] = referenceOffsets[getOppositePlacement(secondarySide)];
        }

        return popperOffsets;
      }
      /**
       * Mimics the `find` method of Array
       * @method
       * @memberof Popper.Utils
       * @argument {Array} arr
       * @argument prop
       * @argument value
       * @returns index or -1
       */


      function find(arr, check) {
        // use native find if supported
        if (Array.prototype.find) {
          return arr.find(check);
        } // use `filter` to obtain the same behavior of `find`


        return arr.filter(check)[0];
      }
      /**
       * Return the index of the matching object
       * @method
       * @memberof Popper.Utils
       * @argument {Array} arr
       * @argument prop
       * @argument value
       * @returns index or -1
       */


      function findIndex(arr, prop, value) {
        // use native findIndex if supported
        if (Array.prototype.findIndex) {
          return arr.findIndex(function (cur) {
            return cur[prop] === value;
          });
        } // use `find` + `indexOf` if `findIndex` isn't supported


        var match = find(arr, function (obj) {
          return obj[prop] === value;
        });
        return arr.indexOf(match);
      }
      /**
       * Loop trough the list of modifiers and run them in order,
       * each of them will then edit the data object.
       * @method
       * @memberof Popper.Utils
       * @param {dataObject} data
       * @param {Array} modifiers
       * @param {String} ends - Optional modifier name used as stopper
       * @returns {dataObject}
       */


      function runModifiers(modifiers, data, ends) {
        var modifiersToRun = ends === undefined ? modifiers : modifiers.slice(0, findIndex(modifiers, 'name', ends));
        modifiersToRun.forEach(function (modifier) {
          if (modifier['function']) {
            // eslint-disable-line dot-notation
            console.warn('`modifier.function` is deprecated, use `modifier.fn`!');
          }

          var fn = modifier['function'] || modifier.fn; // eslint-disable-line dot-notation

          if (modifier.enabled && isFunction(fn)) {
            // Add properties to offsets to make them a complete clientRect object
            // we do this before each modifier to make sure the previous one doesn't
            // mess with these values
            data.offsets.popper = getClientRect(data.offsets.popper);
            data.offsets.reference = getClientRect(data.offsets.reference);
            data = fn(data, modifier);
          }
        });
        return data;
      }
      /**
       * Updates the position of the popper, computing the new offsets and applying
       * the new style.<br />
       * Prefer `scheduleUpdate` over `update` because of performance reasons.
       * @method
       * @memberof Popper
       */


      function update() {
        // if popper is destroyed, don't perform any further update
        if (this.state.isDestroyed) {
          return;
        }

        var data = {
          instance: this,
          styles: {},
          arrowStyles: {},
          attributes: {},
          flipped: false,
          offsets: {}
        }; // compute reference element offsets

        data.offsets.reference = getReferenceOffsets(this.state, this.popper, this.reference, this.options.positionFixed); // compute auto placement, store placement inside the data object,
        // modifiers will be able to edit `placement` if needed
        // and refer to originalPlacement to know the original value

        data.placement = computeAutoPlacement(this.options.placement, data.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding); // store the computed placement inside `originalPlacement`

        data.originalPlacement = data.placement;
        data.positionFixed = this.options.positionFixed; // compute the popper offsets

        data.offsets.popper = getPopperOffsets(this.popper, data.offsets.reference, data.placement);
        data.offsets.popper.position = this.options.positionFixed ? 'fixed' : 'absolute'; // run the modifiers

        data = runModifiers(this.modifiers, data); // the first `update` will call `onCreate` callback
        // the other ones will call `onUpdate` callback

        if (!this.state.isCreated) {
          this.state.isCreated = true;
          this.options.onCreate(data);
        } else {
          this.options.onUpdate(data);
        }
      }
      /**
       * Helper used to know if the given modifier is enabled.
       * @method
       * @memberof Popper.Utils
       * @returns {Boolean}
       */


      function isModifierEnabled(modifiers, modifierName) {
        return modifiers.some(function (_ref) {
          var name = _ref.name,
              enabled = _ref.enabled;
          return enabled && name === modifierName;
        });
      }
      /**
       * Get the prefixed supported property name
       * @method
       * @memberof Popper.Utils
       * @argument {String} property (camelCase)
       * @returns {String} prefixed property (camelCase or PascalCase, depending on the vendor prefix)
       */


      function getSupportedPropertyName(property) {
        var prefixes = [false, 'ms', 'Webkit', 'Moz', 'O'];
        var upperProp = property.charAt(0).toUpperCase() + property.slice(1);

        for (var i = 0; i < prefixes.length; i++) {
          var prefix = prefixes[i];
          var toCheck = prefix ? '' + prefix + upperProp : property;

          if (typeof document.body.style[toCheck] !== 'undefined') {
            return toCheck;
          }
        }

        return null;
      }
      /**
       * Destroys the popper.
       * @method
       * @memberof Popper
       */


      function destroy() {
        this.state.isDestroyed = true; // touch DOM only if `applyStyle` modifier is enabled

        if (isModifierEnabled(this.modifiers, 'applyStyle')) {
          this.popper.removeAttribute('x-placement');
          this.popper.style.position = '';
          this.popper.style.top = '';
          this.popper.style.left = '';
          this.popper.style.right = '';
          this.popper.style.bottom = '';
          this.popper.style.willChange = '';
          this.popper.style[getSupportedPropertyName('transform')] = '';
        }

        this.disableEventListeners(); // remove the popper if user explicitly asked for the deletion on destroy
        // do not use `remove` because IE11 doesn't support it

        if (this.options.removeOnDestroy) {
          this.popper.parentNode.removeChild(this.popper);
        }

        return this;
      }
      /**
       * Get the window associated with the element
       * @argument {Element} element
       * @returns {Window}
       */


      function getWindow(element) {
        var ownerDocument = element.ownerDocument;
        return ownerDocument ? ownerDocument.defaultView : window;
      }

      function attachToScrollParents(scrollParent, event, callback, scrollParents) {
        var isBody = scrollParent.nodeName === 'BODY';
        var target = isBody ? scrollParent.ownerDocument.defaultView : scrollParent;
        target.addEventListener(event, callback, {
          passive: true
        });

        if (!isBody) {
          attachToScrollParents(getScrollParent(target.parentNode), event, callback, scrollParents);
        }

        scrollParents.push(target);
      }
      /**
       * Setup needed event listeners used to update the popper position
       * @method
       * @memberof Popper.Utils
       * @private
       */


      function setupEventListeners(reference, options, state, updateBound) {
        // Resize event listener on window
        state.updateBound = updateBound;
        getWindow(reference).addEventListener('resize', state.updateBound, {
          passive: true
        }); // Scroll event listener on scroll parents

        var scrollElement = getScrollParent(reference);
        attachToScrollParents(scrollElement, 'scroll', state.updateBound, state.scrollParents);
        state.scrollElement = scrollElement;
        state.eventsEnabled = true;
        return state;
      }
      /**
       * It will add resize/scroll events and start recalculating
       * position of the popper element when they are triggered.
       * @method
       * @memberof Popper
       */


      function enableEventListeners() {
        if (!this.state.eventsEnabled) {
          this.state = setupEventListeners(this.reference, this.options, this.state, this.scheduleUpdate);
        }
      }
      /**
       * Remove event listeners used to update the popper position
       * @method
       * @memberof Popper.Utils
       * @private
       */


      function removeEventListeners(reference, state) {
        // Remove resize event listener on window
        getWindow(reference).removeEventListener('resize', state.updateBound); // Remove scroll event listener on scroll parents

        state.scrollParents.forEach(function (target) {
          target.removeEventListener('scroll', state.updateBound);
        }); // Reset state

        state.updateBound = null;
        state.scrollParents = [];
        state.scrollElement = null;
        state.eventsEnabled = false;
        return state;
      }
      /**
       * It will remove resize/scroll events and won't recalculate popper position
       * when they are triggered. It also won't trigger `onUpdate` callback anymore,
       * unless you call `update` method manually.
       * @method
       * @memberof Popper
       */


      function disableEventListeners() {
        if (this.state.eventsEnabled) {
          cancelAnimationFrame(this.scheduleUpdate);
          this.state = removeEventListeners(this.reference, this.state);
        }
      }
      /**
       * Tells if a given input is a number
       * @method
       * @memberof Popper.Utils
       * @param {*} input to check
       * @return {Boolean}
       */


      function isNumeric(n) {
        return n !== '' && !isNaN(parseFloat(n)) && isFinite(n);
      }
      /**
       * Set the style to the given popper
       * @method
       * @memberof Popper.Utils
       * @argument {Element} element - Element to apply the style to
       * @argument {Object} styles
       * Object with a list of properties and values which will be applied to the element
       */


      function setStyles(element, styles) {
        Object.keys(styles).forEach(function (prop) {
          var unit = ''; // add unit if the value is numeric and is one of the following

          if (['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(prop) !== -1 && isNumeric(styles[prop])) {
            unit = 'px';
          }

          element.style[prop] = styles[prop] + unit;
        });
      }
      /**
       * Set the attributes to the given popper
       * @method
       * @memberof Popper.Utils
       * @argument {Element} element - Element to apply the attributes to
       * @argument {Object} styles
       * Object with a list of properties and values which will be applied to the element
       */


      function setAttributes(element, attributes) {
        Object.keys(attributes).forEach(function (prop) {
          var value = attributes[prop];

          if (value !== false) {
            element.setAttribute(prop, attributes[prop]);
          } else {
            element.removeAttribute(prop);
          }
        });
      }
      /**
       * @function
       * @memberof Modifiers
       * @argument {Object} data - The data object generated by `update` method
       * @argument {Object} data.styles - List of style properties - values to apply to popper element
       * @argument {Object} data.attributes - List of attribute properties - values to apply to popper element
       * @argument {Object} options - Modifiers configuration and options
       * @returns {Object} The same data object
       */


      function applyStyle(data) {
        // any property present in `data.styles` will be applied to the popper,
        // in this way we can make the 3rd party modifiers add custom styles to it
        // Be aware, modifiers could override the properties defined in the previous
        // lines of this modifier!
        setStyles(data.instance.popper, data.styles); // any property present in `data.attributes` will be applied to the popper,
        // they will be set as HTML attributes of the element

        setAttributes(data.instance.popper, data.attributes); // if arrowElement is defined and arrowStyles has some properties

        if (data.arrowElement && Object.keys(data.arrowStyles).length) {
          setStyles(data.arrowElement, data.arrowStyles);
        }

        return data;
      }
      /**
       * Set the x-placement attribute before everything else because it could be used
       * to add margins to the popper margins needs to be calculated to get the
       * correct popper offsets.
       * @method
       * @memberof Popper.modifiers
       * @param {HTMLElement} reference - The reference element used to position the popper
       * @param {HTMLElement} popper - The HTML element used as popper
       * @param {Object} options - Popper.js options
       */


      function applyStyleOnLoad(reference, popper, options, modifierOptions, state) {
        // compute reference element offsets
        var referenceOffsets = getReferenceOffsets(state, popper, reference, options.positionFixed); // compute auto placement, store placement inside the data object,
        // modifiers will be able to edit `placement` if needed
        // and refer to originalPlacement to know the original value

        var placement = computeAutoPlacement(options.placement, referenceOffsets, popper, reference, options.modifiers.flip.boundariesElement, options.modifiers.flip.padding);
        popper.setAttribute('x-placement', placement); // Apply `position` to popper before anything else because
        // without the position applied we can't guarantee correct computations

        setStyles(popper, {
          position: options.positionFixed ? 'fixed' : 'absolute'
        });
        return options;
      }
      /**
       * @function
       * @memberof Popper.Utils
       * @argument {Object} data - The data object generated by `update` method
       * @argument {Boolean} shouldRound - If the offsets should be rounded at all
       * @returns {Object} The popper's position offsets rounded
       *
       * The tale of pixel-perfect positioning. It's still not 100% perfect, but as
       * good as it can be within reason.
       * Discussion here: https://github.com/FezVrasta/popper.js/pull/715
       *
       * Low DPI screens cause a popper to be blurry if not using full pixels (Safari
       * as well on High DPI screens).
       *
       * Firefox prefers no rounding for positioning and does not have blurriness on
       * high DPI screens.
       *
       * Only horizontal placement and left/right values need to be considered.
       */


      function getRoundedOffsets(data, shouldRound) {
        var _data$offsets = data.offsets,
            popper = _data$offsets.popper,
            reference = _data$offsets.reference;
        var round = Math.round,
            floor = Math.floor;

        var noRound = function noRound(v) {
          return v;
        };

        var referenceWidth = round(reference.width);
        var popperWidth = round(popper.width);
        var isVertical = ['left', 'right'].indexOf(data.placement) !== -1;
        var isVariation = data.placement.indexOf('-') !== -1;
        var sameWidthParity = referenceWidth % 2 === popperWidth % 2;
        var bothOddWidth = referenceWidth % 2 === 1 && popperWidth % 2 === 1;
        var horizontalToInteger = !shouldRound ? noRound : isVertical || isVariation || sameWidthParity ? round : floor;
        var verticalToInteger = !shouldRound ? noRound : round;
        return {
          left: horizontalToInteger(bothOddWidth && !isVariation && shouldRound ? popper.left - 1 : popper.left),
          top: verticalToInteger(popper.top),
          bottom: verticalToInteger(popper.bottom),
          right: horizontalToInteger(popper.right)
        };
      }

      var isFirefox = isBrowser && /Firefox/i.test(navigator.userAgent);
      /**
       * @function
       * @memberof Modifiers
       * @argument {Object} data - The data object generated by `update` method
       * @argument {Object} options - Modifiers configuration and options
       * @returns {Object} The data object, properly modified
       */

      function computeStyle(data, options) {
        var x = options.x,
            y = options.y;
        var popper = data.offsets.popper; // Remove this legacy support in Popper.js v2

        var legacyGpuAccelerationOption = find(data.instance.modifiers, function (modifier) {
          return modifier.name === 'applyStyle';
        }).gpuAcceleration;

        if (legacyGpuAccelerationOption !== undefined) {
          console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!');
        }

        var gpuAcceleration = legacyGpuAccelerationOption !== undefined ? legacyGpuAccelerationOption : options.gpuAcceleration;
        var offsetParent = getOffsetParent(data.instance.popper);
        var offsetParentRect = getBoundingClientRect(offsetParent); // Styles

        var styles = {
          position: popper.position
        };
        var offsets = getRoundedOffsets(data, window.devicePixelRatio < 2 || !isFirefox);
        var sideA = x === 'bottom' ? 'top' : 'bottom';
        var sideB = y === 'right' ? 'left' : 'right'; // if gpuAcceleration is set to `true` and transform is supported,
        //  we use `translate3d` to apply the position to the popper we
        // automatically use the supported prefixed version if needed

        var prefixedProperty = getSupportedPropertyName('transform'); // now, let's make a step back and look at this code closely (wtf?)
        // If the content of the popper grows once it's been positioned, it
        // may happen that the popper gets misplaced because of the new content
        // overflowing its reference element
        // To avoid this problem, we provide two options (x and y), which allow
        // the consumer to define the offset origin.
        // If we position a popper on top of a reference element, we can set
        // `x` to `top` to make the popper grow towards its top instead of
        // its bottom.

        var left = void 0,
            top = void 0;

        if (sideA === 'bottom') {
          // when offsetParent is <html> the positioning is relative to the bottom of the screen (excluding the scrollbar)
          // and not the bottom of the html element
          if (offsetParent.nodeName === 'HTML') {
            top = -offsetParent.clientHeight + offsets.bottom;
          } else {
            top = -offsetParentRect.height + offsets.bottom;
          }
        } else {
          top = offsets.top;
        }

        if (sideB === 'right') {
          if (offsetParent.nodeName === 'HTML') {
            left = -offsetParent.clientWidth + offsets.right;
          } else {
            left = -offsetParentRect.width + offsets.right;
          }
        } else {
          left = offsets.left;
        }

        if (gpuAcceleration && prefixedProperty) {
          styles[prefixedProperty] = 'translate3d(' + left + 'px, ' + top + 'px, 0)';
          styles[sideA] = 0;
          styles[sideB] = 0;
          styles.willChange = 'transform';
        } else {
          // othwerise, we use the standard `top`, `left`, `bottom` and `right` properties
          var invertTop = sideA === 'bottom' ? -1 : 1;
          var invertLeft = sideB === 'right' ? -1 : 1;
          styles[sideA] = top * invertTop;
          styles[sideB] = left * invertLeft;
          styles.willChange = sideA + ', ' + sideB;
        } // Attributes


        var attributes = {
          'x-placement': data.placement
        }; // Update `data` attributes, styles and arrowStyles

        data.attributes = _extends({}, attributes, data.attributes);
        data.styles = _extends({}, styles, data.styles);
        data.arrowStyles = _extends({}, data.offsets.arrow, data.arrowStyles);
        return data;
      }
      /**
       * Helper used to know if the given modifier depends from another one.<br />
       * It checks if the needed modifier is listed and enabled.
       * @method
       * @memberof Popper.Utils
       * @param {Array} modifiers - list of modifiers
       * @param {String} requestingName - name of requesting modifier
       * @param {String} requestedName - name of requested modifier
       * @returns {Boolean}
       */


      function isModifierRequired(modifiers, requestingName, requestedName) {
        var requesting = find(modifiers, function (_ref) {
          var name = _ref.name;
          return name === requestingName;
        });
        var isRequired = !!requesting && modifiers.some(function (modifier) {
          return modifier.name === requestedName && modifier.enabled && modifier.order < requesting.order;
        });

        if (!isRequired) {
          var _requesting = '`' + requestingName + '`';

          var requested = '`' + requestedName + '`';
          console.warn(requested + ' modifier is required by ' + _requesting + ' modifier in order to work, be sure to include it before ' + _requesting + '!');
        }

        return isRequired;
      }
      /**
       * @function
       * @memberof Modifiers
       * @argument {Object} data - The data object generated by update method
       * @argument {Object} options - Modifiers configuration and options
       * @returns {Object} The data object, properly modified
       */


      function arrow(data, options) {
        var _data$offsets$arrow; // arrow depends on keepTogether in order to work


        if (!isModifierRequired(data.instance.modifiers, 'arrow', 'keepTogether')) {
          return data;
        }

        var arrowElement = options.element; // if arrowElement is a string, suppose it's a CSS selector

        if (typeof arrowElement === 'string') {
          arrowElement = data.instance.popper.querySelector(arrowElement); // if arrowElement is not found, don't run the modifier

          if (!arrowElement) {
            return data;
          }
        } else {
          // if the arrowElement isn't a query selector we must check that the
          // provided DOM node is child of its popper node
          if (!data.instance.popper.contains(arrowElement)) {
            console.warn('WARNING: `arrow.element` must be child of its popper element!');
            return data;
          }
        }

        var placement = data.placement.split('-')[0];
        var _data$offsets = data.offsets,
            popper = _data$offsets.popper,
            reference = _data$offsets.reference;
        var isVertical = ['left', 'right'].indexOf(placement) !== -1;
        var len = isVertical ? 'height' : 'width';
        var sideCapitalized = isVertical ? 'Top' : 'Left';
        var side = sideCapitalized.toLowerCase();
        var altSide = isVertical ? 'left' : 'top';
        var opSide = isVertical ? 'bottom' : 'right';
        var arrowElementSize = getOuterSizes(arrowElement)[len]; //
        // extends keepTogether behavior making sure the popper and its
        // reference have enough pixels in conjunction
        //
        // top/left side

        if (reference[opSide] - arrowElementSize < popper[side]) {
          data.offsets.popper[side] -= popper[side] - (reference[opSide] - arrowElementSize);
        } // bottom/right side


        if (reference[side] + arrowElementSize > popper[opSide]) {
          data.offsets.popper[side] += reference[side] + arrowElementSize - popper[opSide];
        }

        data.offsets.popper = getClientRect(data.offsets.popper); // compute center of the popper

        var center = reference[side] + reference[len] / 2 - arrowElementSize / 2; // Compute the sideValue using the updated popper offsets
        // take popper margin in account because we don't have this info available

        var css = getStyleComputedProperty(data.instance.popper);
        var popperMarginSide = parseFloat(css['margin' + sideCapitalized]);
        var popperBorderSide = parseFloat(css['border' + sideCapitalized + 'Width']);
        var sideValue = center - data.offsets.popper[side] - popperMarginSide - popperBorderSide; // prevent arrowElement from being placed not contiguously to its popper

        sideValue = Math.max(Math.min(popper[len] - arrowElementSize, sideValue), 0);
        data.arrowElement = arrowElement;
        data.offsets.arrow = (_data$offsets$arrow = {}, defineProperty(_data$offsets$arrow, side, Math.round(sideValue)), defineProperty(_data$offsets$arrow, altSide, ''), _data$offsets$arrow);
        return data;
      }
      /**
       * Get the opposite placement variation of the given one
       * @method
       * @memberof Popper.Utils
       * @argument {String} placement variation
       * @returns {String} flipped placement variation
       */


      function getOppositeVariation(variation) {
        if (variation === 'end') {
          return 'start';
        } else if (variation === 'start') {
          return 'end';
        }

        return variation;
      }
      /**
       * List of accepted placements to use as values of the `placement` option.<br />
       * Valid placements are:
       * - `auto`
       * - `top`
       * - `right`
       * - `bottom`
       * - `left`
       *
       * Each placement can have a variation from this list:
       * - `-start`
       * - `-end`
       *
       * Variations are interpreted easily if you think of them as the left to right
       * written languages. Horizontally (`top` and `bottom`), `start` is left and `end`
       * is right.<br />
       * Vertically (`left` and `right`), `start` is top and `end` is bottom.
       *
       * Some valid examples are:
       * - `top-end` (on top of reference, right aligned)
       * - `right-start` (on right of reference, top aligned)
       * - `bottom` (on bottom, centered)
       * - `auto-end` (on the side with more space available, alignment depends by placement)
       *
       * @static
       * @type {Array}
       * @enum {String}
       * @readonly
       * @method placements
       * @memberof Popper
       */


      var placements = ['auto-start', 'auto', 'auto-end', 'top-start', 'top', 'top-end', 'right-start', 'right', 'right-end', 'bottom-end', 'bottom', 'bottom-start', 'left-end', 'left', 'left-start']; // Get rid of `auto` `auto-start` and `auto-end`

      var validPlacements = placements.slice(3);
      /**
       * Given an initial placement, returns all the subsequent placements
       * clockwise (or counter-clockwise).
       *
       * @method
       * @memberof Popper.Utils
       * @argument {String} placement - A valid placement (it accepts variations)
       * @argument {Boolean} counter - Set to true to walk the placements counterclockwise
       * @returns {Array} placements including their variations
       */

      function clockwise(placement) {
        var counter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        var index = validPlacements.indexOf(placement);
        var arr = validPlacements.slice(index + 1).concat(validPlacements.slice(0, index));
        return counter ? arr.reverse() : arr;
      }

      var BEHAVIORS = {
        FLIP: 'flip',
        CLOCKWISE: 'clockwise',
        COUNTERCLOCKWISE: 'counterclockwise'
      };
      /**
       * @function
       * @memberof Modifiers
       * @argument {Object} data - The data object generated by update method
       * @argument {Object} options - Modifiers configuration and options
       * @returns {Object} The data object, properly modified
       */

      function flip(data, options) {
        // if `inner` modifier is enabled, we can't use the `flip` modifier
        if (isModifierEnabled(data.instance.modifiers, 'inner')) {
          return data;
        }

        if (data.flipped && data.placement === data.originalPlacement) {
          // seems like flip is trying to loop, probably there's not enough space on any of the flippable sides
          return data;
        }

        var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, options.boundariesElement, data.positionFixed);
        var placement = data.placement.split('-')[0];
        var placementOpposite = getOppositePlacement(placement);
        var variation = data.placement.split('-')[1] || '';
        var flipOrder = [];

        switch (options.behavior) {
          case BEHAVIORS.FLIP:
            flipOrder = [placement, placementOpposite];
            break;

          case BEHAVIORS.CLOCKWISE:
            flipOrder = clockwise(placement);
            break;

          case BEHAVIORS.COUNTERCLOCKWISE:
            flipOrder = clockwise(placement, true);
            break;

          default:
            flipOrder = options.behavior;
        }

        flipOrder.forEach(function (step, index) {
          if (placement !== step || flipOrder.length === index + 1) {
            return data;
          }

          placement = data.placement.split('-')[0];
          placementOpposite = getOppositePlacement(placement);
          var popperOffsets = data.offsets.popper;
          var refOffsets = data.offsets.reference; // using floor because the reference offsets may contain decimals we are not going to consider here

          var floor = Math.floor;
          var overlapsRef = placement === 'left' && floor(popperOffsets.right) > floor(refOffsets.left) || placement === 'right' && floor(popperOffsets.left) < floor(refOffsets.right) || placement === 'top' && floor(popperOffsets.bottom) > floor(refOffsets.top) || placement === 'bottom' && floor(popperOffsets.top) < floor(refOffsets.bottom);
          var overflowsLeft = floor(popperOffsets.left) < floor(boundaries.left);
          var overflowsRight = floor(popperOffsets.right) > floor(boundaries.right);
          var overflowsTop = floor(popperOffsets.top) < floor(boundaries.top);
          var overflowsBottom = floor(popperOffsets.bottom) > floor(boundaries.bottom);
          var overflowsBoundaries = placement === 'left' && overflowsLeft || placement === 'right' && overflowsRight || placement === 'top' && overflowsTop || placement === 'bottom' && overflowsBottom; // flip the variation if required

          var isVertical = ['top', 'bottom'].indexOf(placement) !== -1; // flips variation if reference element overflows boundaries

          var flippedVariationByRef = !!options.flipVariations && (isVertical && variation === 'start' && overflowsLeft || isVertical && variation === 'end' && overflowsRight || !isVertical && variation === 'start' && overflowsTop || !isVertical && variation === 'end' && overflowsBottom); // flips variation if popper content overflows boundaries

          var flippedVariationByContent = !!options.flipVariationsByContent && (isVertical && variation === 'start' && overflowsRight || isVertical && variation === 'end' && overflowsLeft || !isVertical && variation === 'start' && overflowsBottom || !isVertical && variation === 'end' && overflowsTop);
          var flippedVariation = flippedVariationByRef || flippedVariationByContent;

          if (overlapsRef || overflowsBoundaries || flippedVariation) {
            // this boolean to detect any flip loop
            data.flipped = true;

            if (overlapsRef || overflowsBoundaries) {
              placement = flipOrder[index + 1];
            }

            if (flippedVariation) {
              variation = getOppositeVariation(variation);
            }

            data.placement = placement + (variation ? '-' + variation : ''); // this object contains `position`, we want to preserve it along with
            // any additional property we may add in the future

            data.offsets.popper = _extends({}, data.offsets.popper, getPopperOffsets(data.instance.popper, data.offsets.reference, data.placement));
            data = runModifiers(data.instance.modifiers, data, 'flip');
          }
        });
        return data;
      }
      /**
       * @function
       * @memberof Modifiers
       * @argument {Object} data - The data object generated by update method
       * @argument {Object} options - Modifiers configuration and options
       * @returns {Object} The data object, properly modified
       */


      function keepTogether(data) {
        var _data$offsets = data.offsets,
            popper = _data$offsets.popper,
            reference = _data$offsets.reference;
        var placement = data.placement.split('-')[0];
        var floor = Math.floor;
        var isVertical = ['top', 'bottom'].indexOf(placement) !== -1;
        var side = isVertical ? 'right' : 'bottom';
        var opSide = isVertical ? 'left' : 'top';
        var measurement = isVertical ? 'width' : 'height';

        if (popper[side] < floor(reference[opSide])) {
          data.offsets.popper[opSide] = floor(reference[opSide]) - popper[measurement];
        }

        if (popper[opSide] > floor(reference[side])) {
          data.offsets.popper[opSide] = floor(reference[side]);
        }

        return data;
      }
      /**
       * Converts a string containing value + unit into a px value number
       * @function
       * @memberof {modifiers~offset}
       * @private
       * @argument {String} str - Value + unit string
       * @argument {String} measurement - `height` or `width`
       * @argument {Object} popperOffsets
       * @argument {Object} referenceOffsets
       * @returns {Number|String}
       * Value in pixels, or original string if no values were extracted
       */


      function toValue(str, measurement, popperOffsets, referenceOffsets) {
        // separate value from unit
        var split = str.match(/((?:\-|\+)?\d*\.?\d*)(.*)/);
        var value = +split[1];
        var unit = split[2]; // If it's not a number it's an operator, I guess

        if (!value) {
          return str;
        }

        if (unit.indexOf('%') === 0) {
          var element = void 0;

          switch (unit) {
            case '%p':
              element = popperOffsets;
              break;

            case '%':
            case '%r':
            default:
              element = referenceOffsets;
          }

          var rect = getClientRect(element);
          return rect[measurement] / 100 * value;
        } else if (unit === 'vh' || unit === 'vw') {
          // if is a vh or vw, we calculate the size based on the viewport
          var size = void 0;

          if (unit === 'vh') {
            size = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
          } else {
            size = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
          }

          return size / 100 * value;
        } else {
          // if is an explicit pixel unit, we get rid of the unit and keep the value
          // if is an implicit unit, it's px, and we return just the value
          return value;
        }
      }
      /**
       * Parse an `offset` string to extrapolate `x` and `y` numeric offsets.
       * @function
       * @memberof {modifiers~offset}
       * @private
       * @argument {String} offset
       * @argument {Object} popperOffsets
       * @argument {Object} referenceOffsets
       * @argument {String} basePlacement
       * @returns {Array} a two cells array with x and y offsets in numbers
       */


      function parseOffset(offset, popperOffsets, referenceOffsets, basePlacement) {
        var offsets = [0, 0]; // Use height if placement is left or right and index is 0 otherwise use width
        // in this way the first offset will use an axis and the second one
        // will use the other one

        var useHeight = ['right', 'left'].indexOf(basePlacement) !== -1; // Split the offset string to obtain a list of values and operands
        // The regex addresses values with the plus or minus sign in front (+10, -20, etc)

        var fragments = offset.split(/(\+|\-)/).map(function (frag) {
          return frag.trim();
        }); // Detect if the offset string contains a pair of values or a single one
        // they could be separated by comma or space

        var divider = fragments.indexOf(find(fragments, function (frag) {
          return frag.search(/,|\s/) !== -1;
        }));

        if (fragments[divider] && fragments[divider].indexOf(',') === -1) {
          console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');
        } // If divider is found, we divide the list of values and operands to divide
        // them by ofset X and Y.


        var splitRegex = /\s*,\s*|\s+/;
        var ops = divider !== -1 ? [fragments.slice(0, divider).concat([fragments[divider].split(splitRegex)[0]]), [fragments[divider].split(splitRegex)[1]].concat(fragments.slice(divider + 1))] : [fragments]; // Convert the values with units to absolute pixels to allow our computations

        ops = ops.map(function (op, index) {
          // Most of the units rely on the orientation of the popper
          var measurement = (index === 1 ? !useHeight : useHeight) ? 'height' : 'width';
          var mergeWithPrevious = false;
          return op // This aggregates any `+` or `-` sign that aren't considered operators
          // e.g.: 10 + +5 => [10, +, +5]
          .reduce(function (a, b) {
            if (a[a.length - 1] === '' && ['+', '-'].indexOf(b) !== -1) {
              a[a.length - 1] = b;
              mergeWithPrevious = true;
              return a;
            } else if (mergeWithPrevious) {
              a[a.length - 1] += b;
              mergeWithPrevious = false;
              return a;
            } else {
              return a.concat(b);
            }
          }, []) // Here we convert the string values into number values (in px)
          .map(function (str) {
            return toValue(str, measurement, popperOffsets, referenceOffsets);
          });
        }); // Loop trough the offsets arrays and execute the operations

        ops.forEach(function (op, index) {
          op.forEach(function (frag, index2) {
            if (isNumeric(frag)) {
              offsets[index] += frag * (op[index2 - 1] === '-' ? -1 : 1);
            }
          });
        });
        return offsets;
      }
      /**
       * @function
       * @memberof Modifiers
       * @argument {Object} data - The data object generated by update method
       * @argument {Object} options - Modifiers configuration and options
       * @argument {Number|String} options.offset=0
       * The offset value as described in the modifier description
       * @returns {Object} The data object, properly modified
       */


      function offset(data, _ref) {
        var offset = _ref.offset;
        var placement = data.placement,
            _data$offsets = data.offsets,
            popper = _data$offsets.popper,
            reference = _data$offsets.reference;
        var basePlacement = placement.split('-')[0];
        var offsets = void 0;

        if (isNumeric(+offset)) {
          offsets = [+offset, 0];
        } else {
          offsets = parseOffset(offset, popper, reference, basePlacement);
        }

        if (basePlacement === 'left') {
          popper.top += offsets[0];
          popper.left -= offsets[1];
        } else if (basePlacement === 'right') {
          popper.top += offsets[0];
          popper.left += offsets[1];
        } else if (basePlacement === 'top') {
          popper.left += offsets[0];
          popper.top -= offsets[1];
        } else if (basePlacement === 'bottom') {
          popper.left += offsets[0];
          popper.top += offsets[1];
        }

        data.popper = popper;
        return data;
      }
      /**
       * @function
       * @memberof Modifiers
       * @argument {Object} data - The data object generated by `update` method
       * @argument {Object} options - Modifiers configuration and options
       * @returns {Object} The data object, properly modified
       */


      function preventOverflow(data, options) {
        var boundariesElement = options.boundariesElement || getOffsetParent(data.instance.popper); // If offsetParent is the reference element, we really want to
        // go one step up and use the next offsetParent as reference to
        // avoid to make this modifier completely useless and look like broken

        if (data.instance.reference === boundariesElement) {
          boundariesElement = getOffsetParent(boundariesElement);
        } // NOTE: DOM access here
        // resets the popper's position so that the document size can be calculated excluding
        // the size of the popper element itself


        var transformProp = getSupportedPropertyName('transform');
        var popperStyles = data.instance.popper.style; // assignment to help minification

        var top = popperStyles.top,
            left = popperStyles.left,
            transform = popperStyles[transformProp];
        popperStyles.top = '';
        popperStyles.left = '';
        popperStyles[transformProp] = '';
        var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, boundariesElement, data.positionFixed); // NOTE: DOM access here
        // restores the original style properties after the offsets have been computed

        popperStyles.top = top;
        popperStyles.left = left;
        popperStyles[transformProp] = transform;
        options.boundaries = boundaries;
        var order = options.priority;
        var popper = data.offsets.popper;
        var check = {
          primary: function primary(placement) {
            var value = popper[placement];

            if (popper[placement] < boundaries[placement] && !options.escapeWithReference) {
              value = Math.max(popper[placement], boundaries[placement]);
            }

            return defineProperty({}, placement, value);
          },
          secondary: function secondary(placement) {
            var mainSide = placement === 'right' ? 'left' : 'top';
            var value = popper[mainSide];

            if (popper[placement] > boundaries[placement] && !options.escapeWithReference) {
              value = Math.min(popper[mainSide], boundaries[placement] - (placement === 'right' ? popper.width : popper.height));
            }

            return defineProperty({}, mainSide, value);
          }
        };
        order.forEach(function (placement) {
          var side = ['left', 'top'].indexOf(placement) !== -1 ? 'primary' : 'secondary';
          popper = _extends({}, popper, check[side](placement));
        });
        data.offsets.popper = popper;
        return data;
      }
      /**
       * @function
       * @memberof Modifiers
       * @argument {Object} data - The data object generated by `update` method
       * @argument {Object} options - Modifiers configuration and options
       * @returns {Object} The data object, properly modified
       */


      function shift(data) {
        var placement = data.placement;
        var basePlacement = placement.split('-')[0];
        var shiftvariation = placement.split('-')[1]; // if shift shiftvariation is specified, run the modifier

        if (shiftvariation) {
          var _data$offsets = data.offsets,
              reference = _data$offsets.reference,
              popper = _data$offsets.popper;
          var isVertical = ['bottom', 'top'].indexOf(basePlacement) !== -1;
          var side = isVertical ? 'left' : 'top';
          var measurement = isVertical ? 'width' : 'height';
          var shiftOffsets = {
            start: defineProperty({}, side, reference[side]),
            end: defineProperty({}, side, reference[side] + reference[measurement] - popper[measurement])
          };
          data.offsets.popper = _extends({}, popper, shiftOffsets[shiftvariation]);
        }

        return data;
      }
      /**
       * @function
       * @memberof Modifiers
       * @argument {Object} data - The data object generated by update method
       * @argument {Object} options - Modifiers configuration and options
       * @returns {Object} The data object, properly modified
       */


      function hide(data) {
        if (!isModifierRequired(data.instance.modifiers, 'hide', 'preventOverflow')) {
          return data;
        }

        var refRect = data.offsets.reference;
        var bound = find(data.instance.modifiers, function (modifier) {
          return modifier.name === 'preventOverflow';
        }).boundaries;

        if (refRect.bottom < bound.top || refRect.left > bound.right || refRect.top > bound.bottom || refRect.right < bound.left) {
          // Avoid unnecessary DOM access if visibility hasn't changed
          if (data.hide === true) {
            return data;
          }

          data.hide = true;
          data.attributes['x-out-of-boundaries'] = '';
        } else {
          // Avoid unnecessary DOM access if visibility hasn't changed
          if (data.hide === false) {
            return data;
          }

          data.hide = false;
          data.attributes['x-out-of-boundaries'] = false;
        }

        return data;
      }
      /**
       * @function
       * @memberof Modifiers
       * @argument {Object} data - The data object generated by `update` method
       * @argument {Object} options - Modifiers configuration and options
       * @returns {Object} The data object, properly modified
       */


      function inner(data) {
        var placement = data.placement;
        var basePlacement = placement.split('-')[0];
        var _data$offsets = data.offsets,
            popper = _data$offsets.popper,
            reference = _data$offsets.reference;
        var isHoriz = ['left', 'right'].indexOf(basePlacement) !== -1;
        var subtractLength = ['top', 'left'].indexOf(basePlacement) === -1;
        popper[isHoriz ? 'left' : 'top'] = reference[basePlacement] - (subtractLength ? popper[isHoriz ? 'width' : 'height'] : 0);
        data.placement = getOppositePlacement(placement);
        data.offsets.popper = getClientRect(popper);
        return data;
      }
      /**
       * Modifier function, each modifier can have a function of this type assigned
       * to its `fn` property.<br />
       * These functions will be called on each update, this means that you must
       * make sure they are performant enough to avoid performance bottlenecks.
       *
       * @function ModifierFn
       * @argument {dataObject} data - The data object generated by `update` method
       * @argument {Object} options - Modifiers configuration and options
       * @returns {dataObject} The data object, properly modified
       */

      /**
       * Modifiers are plugins used to alter the behavior of your poppers.<br />
       * Popper.js uses a set of 9 modifiers to provide all the basic functionalities
       * needed by the library.
       *
       * Usually you don't want to override the `order`, `fn` and `onLoad` props.
       * All the other properties are configurations that could be tweaked.
       * @namespace modifiers
       */


      var modifiers = {
        /**
         * Modifier used to shift the popper on the start or end of its reference
         * element.<br />
         * It will read the variation of the `placement` property.<br />
         * It can be one either `-end` or `-start`.
         * @memberof modifiers
         * @inner
         */
        shift: {
          /** @prop {number} order=100 - Index used to define the order of execution */
          order: 100,

          /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
          enabled: true,

          /** @prop {ModifierFn} */
          fn: shift
        },

        /**
         * The `offset` modifier can shift your popper on both its axis.
         *
         * It accepts the following units:
         * - `px` or unit-less, interpreted as pixels
         * - `%` or `%r`, percentage relative to the length of the reference element
         * - `%p`, percentage relative to the length of the popper element
         * - `vw`, CSS viewport width unit
         * - `vh`, CSS viewport height unit
         *
         * For length is intended the main axis relative to the placement of the popper.<br />
         * This means that if the placement is `top` or `bottom`, the length will be the
         * `width`. In case of `left` or `right`, it will be the `height`.
         *
         * You can provide a single value (as `Number` or `String`), or a pair of values
         * as `String` divided by a comma or one (or more) white spaces.<br />
         * The latter is a deprecated method because it leads to confusion and will be
         * removed in v2.<br />
         * Additionally, it accepts additions and subtractions between different units.
         * Note that multiplications and divisions aren't supported.
         *
         * Valid examples are:
         * ```
         * 10
         * '10%'
         * '10, 10'
         * '10%, 10'
         * '10 + 10%'
         * '10 - 5vh + 3%'
         * '-10px + 5vh, 5px - 6%'
         * ```
         * > **NB**: If you desire to apply offsets to your poppers in a way that may make them overlap
         * > with their reference element, unfortunately, you will have to disable the `flip` modifier.
         * > You can read more on this at this [issue](https://github.com/FezVrasta/popper.js/issues/373).
         *
         * @memberof modifiers
         * @inner
         */
        offset: {
          /** @prop {number} order=200 - Index used to define the order of execution */
          order: 200,

          /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
          enabled: true,

          /** @prop {ModifierFn} */
          fn: offset,

          /** @prop {Number|String} offset=0
           * The offset value as described in the modifier description
           */
          offset: 0
        },

        /**
         * Modifier used to prevent the popper from being positioned outside the boundary.
         *
         * A scenario exists where the reference itself is not within the boundaries.<br />
         * We can say it has "escaped the boundaries" — or just "escaped".<br />
         * In this case we need to decide whether the popper should either:
         *
         * - detach from the reference and remain "trapped" in the boundaries, or
         * - if it should ignore the boundary and "escape with its reference"
         *
         * When `escapeWithReference` is set to`true` and reference is completely
         * outside its boundaries, the popper will overflow (or completely leave)
         * the boundaries in order to remain attached to the edge of the reference.
         *
         * @memberof modifiers
         * @inner
         */
        preventOverflow: {
          /** @prop {number} order=300 - Index used to define the order of execution */
          order: 300,

          /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
          enabled: true,

          /** @prop {ModifierFn} */
          fn: preventOverflow,

          /**
           * @prop {Array} [priority=['left','right','top','bottom']]
           * Popper will try to prevent overflow following these priorities by default,
           * then, it could overflow on the left and on top of the `boundariesElement`
           */
          priority: ['left', 'right', 'top', 'bottom'],

          /**
           * @prop {number} padding=5
           * Amount of pixel used to define a minimum distance between the boundaries
           * and the popper. This makes sure the popper always has a little padding
           * between the edges of its container
           */
          padding: 5,

          /**
           * @prop {String|HTMLElement} boundariesElement='scrollParent'
           * Boundaries used by the modifier. Can be `scrollParent`, `window`,
           * `viewport` or any DOM element.
           */
          boundariesElement: 'scrollParent'
        },

        /**
         * Modifier used to make sure the reference and its popper stay near each other
         * without leaving any gap between the two. Especially useful when the arrow is
         * enabled and you want to ensure that it points to its reference element.
         * It cares only about the first axis. You can still have poppers with margin
         * between the popper and its reference element.
         * @memberof modifiers
         * @inner
         */
        keepTogether: {
          /** @prop {number} order=400 - Index used to define the order of execution */
          order: 400,

          /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
          enabled: true,

          /** @prop {ModifierFn} */
          fn: keepTogether
        },

        /**
         * This modifier is used to move the `arrowElement` of the popper to make
         * sure it is positioned between the reference element and its popper element.
         * It will read the outer size of the `arrowElement` node to detect how many
         * pixels of conjunction are needed.
         *
         * It has no effect if no `arrowElement` is provided.
         * @memberof modifiers
         * @inner
         */
        arrow: {
          /** @prop {number} order=500 - Index used to define the order of execution */
          order: 500,

          /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
          enabled: true,

          /** @prop {ModifierFn} */
          fn: arrow,

          /** @prop {String|HTMLElement} element='[x-arrow]' - Selector or node used as arrow */
          element: '[x-arrow]'
        },

        /**
         * Modifier used to flip the popper's placement when it starts to overlap its
         * reference element.
         *
         * Requires the `preventOverflow` modifier before it in order to work.
         *
         * **NOTE:** this modifier will interrupt the current update cycle and will
         * restart it if it detects the need to flip the placement.
         * @memberof modifiers
         * @inner
         */
        flip: {
          /** @prop {number} order=600 - Index used to define the order of execution */
          order: 600,

          /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
          enabled: true,

          /** @prop {ModifierFn} */
          fn: flip,

          /**
           * @prop {String|Array} behavior='flip'
           * The behavior used to change the popper's placement. It can be one of
           * `flip`, `clockwise`, `counterclockwise` or an array with a list of valid
           * placements (with optional variations)
           */
          behavior: 'flip',

          /**
           * @prop {number} padding=5
           * The popper will flip if it hits the edges of the `boundariesElement`
           */
          padding: 5,

          /**
           * @prop {String|HTMLElement} boundariesElement='viewport'
           * The element which will define the boundaries of the popper position.
           * The popper will never be placed outside of the defined boundaries
           * (except if `keepTogether` is enabled)
           */
          boundariesElement: 'viewport',

          /**
           * @prop {Boolean} flipVariations=false
           * The popper will switch placement variation between `-start` and `-end` when
           * the reference element overlaps its boundaries.
           *
           * The original placement should have a set variation.
           */
          flipVariations: false,

          /**
           * @prop {Boolean} flipVariationsByContent=false
           * The popper will switch placement variation between `-start` and `-end` when
           * the popper element overlaps its reference boundaries.
           *
           * The original placement should have a set variation.
           */
          flipVariationsByContent: false
        },

        /**
         * Modifier used to make the popper flow toward the inner of the reference element.
         * By default, when this modifier is disabled, the popper will be placed outside
         * the reference element.
         * @memberof modifiers
         * @inner
         */
        inner: {
          /** @prop {number} order=700 - Index used to define the order of execution */
          order: 700,

          /** @prop {Boolean} enabled=false - Whether the modifier is enabled or not */
          enabled: false,

          /** @prop {ModifierFn} */
          fn: inner
        },

        /**
         * Modifier used to hide the popper when its reference element is outside of the
         * popper boundaries. It will set a `x-out-of-boundaries` attribute which can
         * be used to hide with a CSS selector the popper when its reference is
         * out of boundaries.
         *
         * Requires the `preventOverflow` modifier before it in order to work.
         * @memberof modifiers
         * @inner
         */
        hide: {
          /** @prop {number} order=800 - Index used to define the order of execution */
          order: 800,

          /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
          enabled: true,

          /** @prop {ModifierFn} */
          fn: hide
        },

        /**
         * Computes the style that will be applied to the popper element to gets
         * properly positioned.
         *
         * Note that this modifier will not touch the DOM, it just prepares the styles
         * so that `applyStyle` modifier can apply it. This separation is useful
         * in case you need to replace `applyStyle` with a custom implementation.
         *
         * This modifier has `850` as `order` value to maintain backward compatibility
         * with previous versions of Popper.js. Expect the modifiers ordering method
         * to change in future major versions of the library.
         *
         * @memberof modifiers
         * @inner
         */
        computeStyle: {
          /** @prop {number} order=850 - Index used to define the order of execution */
          order: 850,

          /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
          enabled: true,

          /** @prop {ModifierFn} */
          fn: computeStyle,

          /**
           * @prop {Boolean} gpuAcceleration=true
           * If true, it uses the CSS 3D transformation to position the popper.
           * Otherwise, it will use the `top` and `left` properties
           */
          gpuAcceleration: true,

          /**
           * @prop {string} [x='bottom']
           * Where to anchor the X axis (`bottom` or `top`). AKA X offset origin.
           * Change this if your popper should grow in a direction different from `bottom`
           */
          x: 'bottom',

          /**
           * @prop {string} [x='left']
           * Where to anchor the Y axis (`left` or `right`). AKA Y offset origin.
           * Change this if your popper should grow in a direction different from `right`
           */
          y: 'right'
        },

        /**
         * Applies the computed styles to the popper element.
         *
         * All the DOM manipulations are limited to this modifier. This is useful in case
         * you want to integrate Popper.js inside a framework or view library and you
         * want to delegate all the DOM manipulations to it.
         *
         * Note that if you disable this modifier, you must make sure the popper element
         * has its position set to `absolute` before Popper.js can do its work!
         *
         * Just disable this modifier and define your own to achieve the desired effect.
         *
         * @memberof modifiers
         * @inner
         */
        applyStyle: {
          /** @prop {number} order=900 - Index used to define the order of execution */
          order: 900,

          /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
          enabled: true,

          /** @prop {ModifierFn} */
          fn: applyStyle,

          /** @prop {Function} */
          onLoad: applyStyleOnLoad,

          /**
           * @deprecated since version 1.10.0, the property moved to `computeStyle` modifier
           * @prop {Boolean} gpuAcceleration=true
           * If true, it uses the CSS 3D transformation to position the popper.
           * Otherwise, it will use the `top` and `left` properties
           */
          gpuAcceleration: undefined
        }
      };
      /**
       * The `dataObject` is an object containing all the information used by Popper.js.
       * This object is passed to modifiers and to the `onCreate` and `onUpdate` callbacks.
       * @name dataObject
       * @property {Object} data.instance The Popper.js instance
       * @property {String} data.placement Placement applied to popper
       * @property {String} data.originalPlacement Placement originally defined on init
       * @property {Boolean} data.flipped True if popper has been flipped by flip modifier
       * @property {Boolean} data.hide True if the reference element is out of boundaries, useful to know when to hide the popper
       * @property {HTMLElement} data.arrowElement Node used as arrow by arrow modifier
       * @property {Object} data.styles Any CSS property defined here will be applied to the popper. It expects the JavaScript nomenclature (eg. `marginBottom`)
       * @property {Object} data.arrowStyles Any CSS property defined here will be applied to the popper arrow. It expects the JavaScript nomenclature (eg. `marginBottom`)
       * @property {Object} data.boundaries Offsets of the popper boundaries
       * @property {Object} data.offsets The measurements of popper, reference and arrow elements
       * @property {Object} data.offsets.popper `top`, `left`, `width`, `height` values
       * @property {Object} data.offsets.reference `top`, `left`, `width`, `height` values
       * @property {Object} data.offsets.arrow] `top` and `left` offsets, only one of them will be different from 0
       */

      /**
       * Default options provided to Popper.js constructor.<br />
       * These can be overridden using the `options` argument of Popper.js.<br />
       * To override an option, simply pass an object with the same
       * structure of the `options` object, as the 3rd argument. For example:
       * ```
       * new Popper(ref, pop, {
       *   modifiers: {
       *     preventOverflow: { enabled: false }
       *   }
       * })
       * ```
       * @type {Object}
       * @static
       * @memberof Popper
       */

      var Defaults = {
        /**
         * Popper's placement.
         * @prop {Popper.placements} placement='bottom'
         */
        placement: 'bottom',

        /**
         * Set this to true if you want popper to position it self in 'fixed' mode
         * @prop {Boolean} positionFixed=false
         */
        positionFixed: false,

        /**
         * Whether events (resize, scroll) are initially enabled.
         * @prop {Boolean} eventsEnabled=true
         */
        eventsEnabled: true,

        /**
         * Set to true if you want to automatically remove the popper when
         * you call the `destroy` method.
         * @prop {Boolean} removeOnDestroy=false
         */
        removeOnDestroy: false,

        /**
         * Callback called when the popper is created.<br />
         * By default, it is set to no-op.<br />
         * Access Popper.js instance with `data.instance`.
         * @prop {onCreate}
         */
        onCreate: function onCreate() {},

        /**
         * Callback called when the popper is updated. This callback is not called
         * on the initialization/creation of the popper, but only on subsequent
         * updates.<br />
         * By default, it is set to no-op.<br />
         * Access Popper.js instance with `data.instance`.
         * @prop {onUpdate}
         */
        onUpdate: function onUpdate() {},

        /**
         * List of modifiers used to modify the offsets before they are applied to the popper.
         * They provide most of the functionalities of Popper.js.
         * @prop {modifiers}
         */
        modifiers: modifiers
      };
      /**
       * @callback onCreate
       * @param {dataObject} data
       */

      /**
       * @callback onUpdate
       * @param {dataObject} data
       */
      // Utils
      // Methods

      var Popper = function () {
        /**
         * Creates a new Popper.js instance.
         * @class Popper
         * @param {Element|referenceObject} reference - The reference element used to position the popper
         * @param {Element} popper - The HTML / XML element used as the popper
         * @param {Object} options - Your custom options to override the ones defined in [Defaults](#defaults)
         * @return {Object} instance - The generated Popper.js instance
         */
        function Popper(reference, popper) {
          var _this = this;

          var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
          classCallCheck(this, Popper);

          this.scheduleUpdate = function () {
            return requestAnimationFrame(_this.update);
          }; // make update() debounced, so that it only runs at most once-per-tick


          this.update = debounce(this.update.bind(this)); // with {} we create a new object with the options inside it

          this.options = _extends({}, Popper.Defaults, options); // init state

          this.state = {
            isDestroyed: false,
            isCreated: false,
            scrollParents: []
          }; // get reference and popper elements (allow jQuery wrappers)

          this.reference = reference && reference.jquery ? reference[0] : reference;
          this.popper = popper && popper.jquery ? popper[0] : popper; // Deep merge modifiers options

          this.options.modifiers = {};
          Object.keys(_extends({}, Popper.Defaults.modifiers, options.modifiers)).forEach(function (name) {
            _this.options.modifiers[name] = _extends({}, Popper.Defaults.modifiers[name] || {}, options.modifiers ? options.modifiers[name] : {});
          }); // Refactoring modifiers' list (Object => Array)

          this.modifiers = Object.keys(this.options.modifiers).map(function (name) {
            return _extends({
              name: name
            }, _this.options.modifiers[name]);
          }) // sort the modifiers by order
          .sort(function (a, b) {
            return a.order - b.order;
          }); // modifiers have the ability to execute arbitrary code when Popper.js get inited
          // such code is executed in the same order of its modifier
          // they could add new properties to their options configuration
          // BE AWARE: don't add options to `options.modifiers.name` but to `modifierOptions`!

          this.modifiers.forEach(function (modifierOptions) {
            if (modifierOptions.enabled && isFunction(modifierOptions.onLoad)) {
              modifierOptions.onLoad(_this.reference, _this.popper, _this.options, modifierOptions, _this.state);
            }
          }); // fire the first update to position the popper in the right place

          this.update();
          var eventsEnabled = this.options.eventsEnabled;

          if (eventsEnabled) {
            // setup event listeners, they will take care of update the position in specific situations
            this.enableEventListeners();
          }

          this.state.eventsEnabled = eventsEnabled;
        } // We can't use class properties because they don't get listed in the
        // class prototype and break stuff like Sinon stubs


        createClass(Popper, [{
          key: 'update',
          value: function update$$1() {
            return update.call(this);
          }
        }, {
          key: 'destroy',
          value: function destroy$$1() {
            return destroy.call(this);
          }
        }, {
          key: 'enableEventListeners',
          value: function enableEventListeners$$1() {
            return enableEventListeners.call(this);
          }
        }, {
          key: 'disableEventListeners',
          value: function disableEventListeners$$1() {
            return disableEventListeners.call(this);
          }
          /**
           * Schedules an update. It will run on the next UI update available.
           * @method scheduleUpdate
           * @memberof Popper
           */

          /**
           * Collection of utilities useful when writing custom modifiers.
           * Starting from version 1.7, this method is available only if you
           * include `popper-utils.js` before `popper.js`.
           *
           * **DEPRECATION**: This way to access PopperUtils is deprecated
           * and will be removed in v2! Use the PopperUtils module directly instead.
           * Due to the high instability of the methods contained in Utils, we can't
           * guarantee them to follow semver. Use them at your own risk!
           * @static
           * @private
           * @type {Object}
           * @deprecated since version 1.8
           * @member Utils
           * @memberof Popper
           */

        }]);
        return Popper;
      }();
      /**
       * The `referenceObject` is an object that provides an interface compatible with Popper.js
       * and lets you use it as replacement of a real DOM node.<br />
       * You can use this method to position a popper relatively to a set of coordinates
       * in case you don't have a DOM node to use as reference.
       *
       * ```
       * new Popper(referenceObject, popperNode);
       * ```
       *
       * NB: This feature isn't supported in Internet Explorer 10.
       * @name referenceObject
       * @property {Function} data.getBoundingClientRect
       * A function that returns a set of coordinates compatible with the native `getBoundingClientRect` method.
       * @property {number} data.clientWidth
       * An ES6 getter that will return the width of the virtual reference element.
       * @property {number} data.clientHeight
       * An ES6 getter that will return the height of the virtual reference element.
       */


      Popper.Utils = (typeof window !== 'undefined' ? window : global).PopperUtils;
      Popper.placements = placements;
      Popper.Defaults = Defaults;
      /* harmony default export */

      __webpack_exports__["default"] = Popper;
      /* WEBPACK VAR INJECTION */
    }).call(this, __webpack_require__(
    /*! ./../../../webpack/buildin/global.js */
    "./node_modules/webpack/buildin/global.js"));
    /***/
  },

  /***/
  "./node_modules/webpack/buildin/global.js":
  /*!***********************************!*\
    !*** (webpack)/buildin/global.js ***!
    \***********************************/

  /*! no static exports found */

  /***/
  function node_modulesWebpackBuildinGlobalJs(module, exports) {
    var g; // This works in non-strict mode

    g = function () {
      return this;
    }();

    try {
      // This works if eval is allowed (see CSP)
      g = g || new Function("return this")();
    } catch (e) {
      // This works if the window reference is available
      if ((typeof window === "undefined" ? "undefined" : _typeof(window)) === "object") g = window;
    } // g can still be undefined, but nothing to do about it...
    // We return undefined, instead of nothing here, so it's
    // easier to handle this case. if(!global) { ...}


    module.exports = g;
    /***/
  },

  /***/
  "./node_modules/webpack/buildin/module.js":
  /*!***********************************!*\
    !*** (webpack)/buildin/module.js ***!
    \***********************************/

  /*! no static exports found */

  /***/
  function node_modulesWebpackBuildinModuleJs(module, exports) {
    module.exports = function (module) {
      if (!module.webpackPolyfill) {
        module.deprecate = function () {};

        module.paths = []; // module.parent = undefined by default

        if (!module.children) module.children = [];
        Object.defineProperty(module, "loaded", {
          enumerable: true,
          get: function get() {
            return module.l;
          }
        });
        Object.defineProperty(module, "id", {
          enumerable: true,
          get: function get() {
            return module.i;
          }
        });
        module.webpackPolyfill = 1;
      }

      return module;
    };
    /***/

  },

  /***/
  "./src/js/frontend.js":
  /*!****************************!*\
    !*** ./src/js/frontend.js ***!
    \****************************/

  /*! no exports provided */

  /***/
  function srcJsFrontendJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var bootstrap_js_dist_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! bootstrap/js/dist/util */
    "./node_modules/bootstrap/js/dist/util.js");
    /* harmony import */


    var bootstrap_js_dist_util__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bootstrap_js_dist_util__WEBPACK_IMPORTED_MODULE_0__);
    /* harmony import */


    var bootstrap_js_dist_collapse__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! bootstrap/js/dist/collapse */
    "./node_modules/bootstrap/js/dist/collapse.js");
    /* harmony import */


    var bootstrap_js_dist_collapse__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bootstrap_js_dist_collapse__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var bootstrap_js_dist_dropdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! bootstrap/js/dist/dropdown */
    "./node_modules/bootstrap/js/dist/dropdown.js");
    /* harmony import */


    var bootstrap_js_dist_dropdown__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bootstrap_js_dist_dropdown__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var bootstrap_js_dist_tooltip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! bootstrap/js/dist/tooltip */
    "./node_modules/bootstrap/js/dist/tooltip.js");
    /* harmony import */


    var bootstrap_js_dist_tooltip__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bootstrap_js_dist_tooltip__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */


    var bootstrap_js_dist_popover__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! bootstrap/js/dist/popover */
    "./node_modules/bootstrap/js/dist/popover.js");
    /* harmony import */


    var bootstrap_js_dist_popover__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(bootstrap_js_dist_popover__WEBPACK_IMPORTED_MODULE_4__);
    /* harmony import */


    var _plugins_wecodeart_Component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./plugins/wecodeart-Component */
    "./src/js/plugins/wecodeart-Component.js");
    /* harmony import */


    var _plugins_wecodeart_JSManager__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./plugins/wecodeart-JSManager */
    "./src/js/plugins/wecodeart-JSManager.js");
    /* harmony import */


    var _plugins_wecodeart_Template__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./plugins/wecodeart-Template */
    "./src/js/plugins/wecodeart-Template.js");
    /* harmony import */


    var _helpers_createParams__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./helpers/createParams */
    "./src/js/helpers/createParams.js");
    /* harmony import */


    var _helpers_parseData__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./helpers/parseData */
    "./src/js/helpers/parseData.js");
    /* harmony import */


    var _helpers_HasScrollbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./helpers/HasScrollbar */
    "./src/js/helpers/HasScrollbar.js");

    var addAction = wp.hooks.addAction;
    addAction('wecodeart.route', 'wecodeart/developer/log', filterLog, 10);

    function filterLog(route, func, args) {
      var _wecodeart = wecodeart,
          _wecodeart$isDevMode = _wecodeart.isDevMode,
          isDevMode = _wecodeart$isDevMode === void 0 ? false : _wecodeart$isDevMode;

      if (isDevMode) {
        console.log('Loaded: ', route, '::', func);
        if (args) console.log(args);
      }
    }

    (function (wecodeart, $) {
      /**
       * Base WCA Functions
       * @since 3.6
       */
      wecodeart.plugins = {};
      wecodeart.fn = {
        hasScrollbar: _helpers_HasScrollbar__WEBPACK_IMPORTED_MODULE_10__["default"],
        createParams: _helpers_createParams__WEBPACK_IMPORTED_MODULE_8__["default"],
        getOptions: _helpers_parseData__WEBPACK_IMPORTED_MODULE_9__["default"]
      };
      wecodeart.routes = {
        common: {
          init: function init() {
            Object(_helpers_HasScrollbar__WEBPACK_IMPORTED_MODULE_10__["handleBodyJSClass"])();
            Object(_helpers_HasScrollbar__WEBPACK_IMPORTED_MODULE_10__["handleDocumentScrollbar"])();
            window.onresize = _helpers_HasScrollbar__WEBPACK_IMPORTED_MODULE_10__["handleDocumentScrollbar"];
          },
          complete: function complete() {
            var getOptions = wecodeart.fn.getOptions;
            $('[data-toggle="tooltip"]').tooltip();
            var customTooltips = document.querySelectorAll('.has-tooltip');

            var _iterator = _createForOfIteratorHelper(customTooltips),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var item = _step.value;
                var $item = $(item);
                var options = getOptions(item.getAttribute('options'));
                var type = options.type;
                delete options.type;

                if (type === 'popover') {
                  $item.popover(options);
                }

                if (type === 'tooltip') {
                  $item.tooltip(options);
                }
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }
          }
        }
      };
    }).apply(undefined, [window.wecodeart, jQuery]);
    /***/
  },

  /***/
  "./src/js/helpers/HasScrollbar.js":
  /*!****************************************!*\
    !*** ./src/js/helpers/HasScrollbar.js ***!
    \****************************************/

  /*! exports provided: default, handleBodyJSClass, handleDocumentScrollbar */

  /***/
  function srcJsHelpersHasScrollbarJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "default", function () {
      return hasScrollbar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "handleBodyJSClass", function () {
      return handleBodyJSClass;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "handleDocumentScrollbar", function () {
      return handleDocumentScrollbar;
    });

    function hasScrollbar(el) {
      // The Modern solution
      if (typeof window.innerWidth === 'number') return window.innerWidth > document.documentElement.clientWidth; // Elem for quirksmode

      var elem = el || document.documentElement || document.body; // Check overflow style property on body for fauxscrollbars

      var overflowStyle;
      if (typeof elem.currentStyle !== 'undefined') overflowStyle = elem.currentStyle.overflow;
      overflowStyle = overflowStyle || window.getComputedStyle(elem, '').overflow; // Also need to check the Y axis overflow

      var overflowYStyle;
      if (typeof elem.currentStyle !== 'undefined') overflowYStyle = elem.currentStyle.overflowY;
      overflowYStyle = overflowYStyle || window.getComputedStyle(elem, '').overflowY;
      var contentOverflows = elem.scrollHeight > elem.clientHeight;
      var overflowShown = /^(visible|auto)$/.test(overflowStyle) || /^(visible|auto)$/.test(overflowYStyle);
      var alwaysShowScroll = overflowStyle === 'scroll' || overflowYStyle === 'scroll';
      return contentOverflows && overflowShown || alwaysShowScroll;
    }

    ;

    var handleDocumentScrollbar = function handleDocumentScrollbar() {
      var html = document.documentElement;
      if (hasScrollbar()) html.classList.add('has-scrollbar');else html.classList.remove('has-scrollbar');
    };

    var handleBodyJSClass = function handleBodyJSClass() {
      var html = document.documentElement;
      html.classList.remove('no-js');
      html.classList.add('js');
    };
    /***/

  },

  /***/
  "./src/js/helpers/camelCase.js":
  /*!*************************************!*\
    !*** ./src/js/helpers/camelCase.js ***!
    \*************************************/

  /*! exports provided: default */

  /***/
  function srcJsHelpersCamelCaseJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /**
     * camelCase
     * @param {string} str String that isn't camel-case, e.g., CAMeL_CaSEiS-harD
     * @return {string} String converted to camel-case, e.g., camelCaseIsHard
     */

    /* harmony default export */


    __webpack_exports__["default"] = function (str) {
      return "".concat(str.charAt(0).toLowerCase()).concat(str.replace(/[\W_]/g, '|').split('|').map(function (part) {
        return "".concat(part.charAt(0).toUpperCase()).concat(part.slice(1));
      }).join('').slice(1));
    };
    /***/

  },

  /***/
  "./src/js/helpers/createParams.js":
  /*!****************************************!*\
    !*** ./src/js/helpers/createParams.js ***!
    \****************************************/

  /*! exports provided: default */

  /***/
  function srcJsHelpersCreateParamsJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /**
     * Generate String Params
     * @param   object 
     * @return  {string}
     */

    /* harmony default export */


    __webpack_exports__["default"] = function (query) {
      var params = '';

      for (var key in query) {
        if (params !== '') params += '&';
        params += key + '=' + encodeURIComponent(query[key]);
      }

      return params;
    };

    ;
    /***/
  },

  /***/
  "./src/js/helpers/parseData.js":
  /*!*************************************!*\
    !*** ./src/js/helpers/parseData.js ***!
    \*************************************/

  /*! exports provided: default */

  /***/
  function srcJsHelpersParseDataJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "default", function () {
      return parseData;
    });
    /**
     * Parse data attrs
     * @param   {object/string} opts
     * @return  {object/string}
     */


    function parseData(opts) {
      if (_typeof(opts) == 'object') {
        return opts;
      } else if (typeof opts == 'string') {
        try {
          return JSON.parse(opts.replace(/'/g, '"').replace(';', ''));
        } catch (e) {
          return {};
        }
      } else {
        return {};
      }
    }

    ;
    /***/
  },

  /***/
  "./src/js/plugins/wecodeart-Component.js":
  /*!***********************************************!*\
    !*** ./src/js/plugins/wecodeart-Component.js ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcJsPluginsWecodeartComponentJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = function (wecodeart) {
      var Component = /*#__PURE__*/function () {
        /**
         * Generic constructor for all components
         * @constructor
         * @param {Element} el
         * @param {Object} options
         */
        function Component(classDef, el, options) {
          _classCallCheck(this, Component);

          // Display error if el is valid HTML Element
          if (!(el instanceof Element)) {
            console.error(Error(el + ' is not an HTML Element'));
          } // If exists, destroy and reinitialize in child


          var ins = classDef.getInstance(el);

          if (!!ins) {
            ins.destroy();
          }

          this.el = el;
        }
        /**
         * Initializes components
         * @param {class} classDef
         * @param {Element | NodeList | jQuery} els
         * @param {Object} options
         */


        _createClass2(Component, null, [{
          key: "init",
          value: function init(classDef, els, options) {
            var getOptions = wecodeart.fn.getOptions;
            var instances = null;

            if (els instanceof Element) {
              instances = new classDef(els, options);
            } else if (!!els && (els.jquery || els instanceof NodeList)) {
              var instancesArr = [];

              for (var i = 0; i < els.length; i++) {
                var mergedOptions = Object.assign({}, options, getOptions(els[i].dataset.options));
                instancesArr.push(new classDef(els[i], mergedOptions));
              }

              instances = instancesArr;
            }

            return instances;
          }
        }]);

        return Component;
      }();
      /**
       * @static
       * @memberof Component
       */


      wecodeart.Component = Component;
    }.apply(undefined, [window.wecodeart]);
    /***/

  },

  /***/
  "./src/js/plugins/wecodeart-JSManager.js":
  /*!***********************************************!*\
    !*** ./src/js/plugins/wecodeart-JSManager.js ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcJsPluginsWecodeartJSManagerJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var lodash_pickBy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! lodash/pickBy */
    "./node_modules/lodash/pickBy.js");
    /* harmony import */


    var lodash_pickBy__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_pickBy__WEBPACK_IMPORTED_MODULE_0__);
    /* harmony import */


    var lodash_filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! lodash/filter */
    "./node_modules/lodash/filter.js");
    /* harmony import */


    var lodash_filter__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_filter__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _helpers_camelCase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../helpers/camelCase */
    "./src/js/helpers/camelCase.js");
    /**
     * Utility to trigger JS code based on clasname routing
     */

    /* harmony default export */


    __webpack_exports__["default"] = function (wecodeart) {
      var JSManager = /*#__PURE__*/function () {
        /**
         * Generic constructor 
         * @constructor
         * @param {object} namespace 	| JS Object
         * @param {string} routes		| Key name containing routes 
         */
        function JSManager(namespace) {
          _classCallCheck(this, JSManager);

          var routes = namespace.routes;
          var _wp$hooks = wp.hooks,
              doAction = _wp$hooks.doAction,
              applyFilters = _wp$hooks.applyFilters;
          this.routes = routes;
          this.doAction = doAction;
          this.applyFilters = applyFilters;
          this.extendedR = lodash_pickBy__WEBPACK_IMPORTED_MODULE_0___default()(routes, function (v) {
            return v.extends && v.extends instanceof Array;
          });
        }
        /**
         * Meant to be run on load
         * @info 	It handles all necessary JS init from routes
         */


        _createClass2(JSManager, [{
          key: "fireRoute",
          value: function fireRoute(route, funcname, args) {
            var fire;
            funcname = funcname === undefined ? 'init' : funcname;
            fire = route !== '';
            fire = fire && this.routes[route];
            fire = fire && typeof this.routes[route][funcname] === 'function';

            if (fire) {
              args = this.applyFilters('wecodeart.route', args, route, funcname);
              this.routes[route][funcname](args);
              this.doAction('wecodeart.route', route, funcname, args);
              return;
            }
          }
          /**
           * Meant to be run on load
           * @info 	It handles all necessary JS init from routes
           */

        }, {
          key: "sequence",
          value: function sequence(route) {
            this.fireRoute(route);
            this.fireRoute(route, 'complete');
          }
          /**
           * Meant to be run on load
           * @info 	It handles all necessary JS init from routes
           */

        }, {
          key: "loadEvents",
          value: function loadEvents() {
            var _this6 = this;

            this.fireRoute('common');

            var _iterator2 = _createForOfIteratorHelper(document.body.classList),
                _step2;

            try {
              var _loop2 = function _loop2() {
                var cls = _step2.value;
                var route = Object(_helpers_camelCase__WEBPACK_IMPORTED_MODULE_2__["default"])(cls.toLowerCase().replace(/-/g, '_')); // Fire Manual Routes

                _this6.sequence(route); // Additional Extended Routes 


                lodash_filter__WEBPACK_IMPORTED_MODULE_1___default()(_this6.extendedR, function (v, k) {
                  return v.extends.includes(cls) && _this6.sequence(k);
                });
              };

              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                _loop2();
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }

            this.fireRoute('common', 'complete');
          }
        }]);

        return JSManager;
      }();
      /**
       * @static
       * @memberof JSManager
       */


      wecodeart.JSM = JSManager;
    }.apply(undefined, [window.wecodeart]);
    /***/

  },

  /***/
  "./src/js/plugins/wecodeart-Template.js":
  /*!**********************************************!*\
    !*** ./src/js/plugins/wecodeart-Template.js ***!
    \**********************************************/

  /*! exports provided: default */

  /***/
  function srcJsPluginsWecodeartTemplateJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /**
     * Template Submit
     * @author 	Bican Marian Valeriu
     * @version 1.0.0
     */

    /* harmony default export */


    __webpack_exports__["default"] = function (wecodeart) {
      var Component = wecodeart.Component;
      var pluginDefaults = {};

      var Template = /*#__PURE__*/function (_Component) {
        _inherits(Template, _Component);

        var _super = _createSuper(Template);

        /**
         * Construct Animate instance
         * @constructor
         * @param {Element} el
         * @param {Object} options
         */
        function Template(el, options) {
          var _this7;

          _classCallCheck(this, Template);

          _this7 = _super.call(this, Template, null, options);
          /**
           * Options for the animation
           * @member YTIframe#options
           */

          _this7.options = Object.assign({}, Template.defaults, {}, options);
          return _this7;
        }

        _createClass2(Template, null, [{
          key: "addTemplate",

          /**
           * Add a template
           *
           * @param {string} name Give the template a name
           * @param {function} render Render Function for the template
           */
          value: function addTemplate(name, render) {
            if (typeof render !== 'function') {
              return console.warn("Templates: ".concat(name, " - The 'render' argument must be a function."));
            }

            Template._templates.push({
              name: name,
              render: render
            });
          }
          /**
           * Render a template
           *
           * @param {object} data Data to be rendered into the template
           * @param {string} template Template Name
           */

        }, {
          key: "render",
          value: function render() {
            var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'sample';
            var data = arguments.length > 1 ? arguments[1] : undefined;

            var child = Template._templates.filter(function (item) {
              return item.name === name;
            }).shift();

            if (child) {
              return child.render(data);
            }

            return console.warn("Template:: There is no registered template with the name of \"".concat(name, "\"."));
          }
        }, {
          key: "defaults",
          get: function get() {
            return pluginDefaults;
          }
        }, {
          key: "registered",
          get: function get() {
            return Template._templates;
          }
        }]);

        return Template;
      }(Component);
      /**
       * @static
       * @memberof Template
       */


      Template._templates = [];
      wecodeart.Template = Template;
      /**
       * Add A Basic Sample Template
       */

      Template.addTemplate('sample', function (data) {
        var postHTML = document.createElement('div');
        var title = data.title;
        postHTML.classList.add('demo');
        postHTML.innerHTML = title;
        return postHTML;
      });
    }.apply(undefined, [window.wecodeart]);
    /***/

  },

  /***/
  "jquery":
  /*!*************************!*\
    !*** external "jQuery" ***!
    \*************************/

  /*! no static exports found */

  /***/
  function jquery(module, exports) {
    module.exports = jQuery;
    /***/
  }
  /******/

});
//# sourceMappingURL=frontend.js.map
