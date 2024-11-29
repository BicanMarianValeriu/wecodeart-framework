/**
 * --------------------------------------------------------------------------
 * Scrollbar Helper
 *
 * @author 	Bican Marian Valeriu
 * @version 1.0.0
 * --------------------------------------------------------------------------
 */
import { isElement } from './../helpers';

/**
 * Constants
 */
const SELECTOR_FIXED_CONTENT = '.fixed-top, .fixed-bottom, .is-fixed, .sticky-top';
const SELECTOR_STICKY_CONTENT = '.sticky-top';
const PROPERTY_PADDING = 'padding-right';
const PROPERTY_CUSTOM = '--wp--scrollbar-width';
const PROPERTY_MARGIN = 'margin-right';

export default (function (wecodeart) {

    const { Selector } = wecodeart;

    class ScrollBar {
        constructor() {
            this._element = document.body;
        }

        // Public
        getWidth() {
            // https://developer.mozilla.org/en-US/docs/Web/API/Window/innerWidth#usage_notes
            const documentWidth = document.documentElement.clientWidth;
            return Math.abs(window.innerWidth - documentWidth);
        }

        hide() {
            const width = this.getWidth();
            this._disableOverFlow();
            // give padding to element to balance the hidden scrollbar width
            this._setElementAttributes(this._element, PROPERTY_PADDING, calculatedValue => calculatedValue + width);
            // trick: We adjust positive paddingRight and negative marginRight to sticky-top elements to keep showing fullwidth
            this._setElementAttributes(SELECTOR_FIXED_CONTENT, PROPERTY_PADDING, calculatedValue => calculatedValue + width);
            this._setElementAttributes(SELECTOR_STICKY_CONTENT, PROPERTY_MARGIN, calculatedValue => calculatedValue - width);
        }

        reset() {
            this._resetElementAttributes(this._element, 'overflow');
            this._resetElementAttributes(this._element, PROPERTY_PADDING);
            this._resetElementAttributes(this._element, PROPERTY_CUSTOM);
            this._resetElementAttributes(SELECTOR_FIXED_CONTENT, PROPERTY_PADDING);
            this._resetElementAttributes(SELECTOR_STICKY_CONTENT, PROPERTY_MARGIN);
        }

        isOverflowing() {
            return this.getWidth() > 0;
        }

        // Private
        _disableOverFlow() {
            this._saveInitialAttribute(this._element, 'overflow');
            this._element.style.overflow = 'hidden';
        }

        _setElementAttributes(selector, styleProperty, callback) {
            const scrollbarWidth = this.getWidth();

            const manipulationCallBack = element => {
                if (element !== this._element && window.innerWidth > element.clientWidth + scrollbarWidth) {
                    return;
                }

                this._saveInitialAttribute(element, styleProperty);
                const calculatedValue = window.getComputedStyle(element).getPropertyValue(styleProperty);
                element.style.setProperty(styleProperty, `${callback(Number.parseFloat(calculatedValue))}px`);
                element.style.setProperty(PROPERTY_CUSTOM, `${callback(Number.parseFloat(calculatedValue))}px`);
            };

            this._applyManipulationCallback(selector, manipulationCallBack);
        }

        _saveInitialAttribute(element, styleProperty) {
            const actualValue = element.style.getPropertyValue(styleProperty);
            if (actualValue) {
                element.setAttribute(`data-wp-${this._normalizeDataKey(styleProperty)}`, actualValue);
            }
        }

        _resetElementAttributes(selector, styleProperty) {
            const manipulationCallBack = element => {
                const value = element.getAttribute(`data-wp-${this._normalizeDataKey(styleProperty)}`);
                // We only want to remove the property if the value is `null`; the value can also be zero
                if (value === null) {
                    element.style.removeProperty(styleProperty);
                    return;
                }

                element.removeAttribute(`data-wp-${this._normalizeDataKey(styleProperty)}`);
                element.style.setProperty(styleProperty, value);
                element.style.setProperty(PROPERTY_CUSTOM, value);
            };

            this._applyManipulationCallback(selector, manipulationCallBack);
        }

        _applyManipulationCallback(selector, callBack) {
            if (isElement(selector)) {
                callBack(selector);
                return;
            }

            for (const sel of Selector.find(selector, this._element)) {
                callBack(sel);
            }
        }

        _normalizeDataKey(key) {
            return key.replace(/[A-Z]/g, chr => `-${chr.toLowerCase()}`);
        }
    }

    wecodeart.ScrollBar = ScrollBar;
}).apply(this, [window.wecodeart]);