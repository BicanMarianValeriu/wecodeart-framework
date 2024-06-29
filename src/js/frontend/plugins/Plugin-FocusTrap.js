/**
 * --------------------------------------------------------------------------
 * Backdrop Component
 *
 * @author 	Bican Marian Valeriu
 * @version 1.0.0
 * --------------------------------------------------------------------------
 */
const NAME = 'focustrap';
const DATA_KEY = `wp.${NAME}`;
const EVENT_KEY = `.${DATA_KEY}`;
const EVENT_FOCUSIN = `focusin${EVENT_KEY}`;
const EVENT_KEYDOWN_TAB = `keydown.tab${EVENT_KEY}`;

const TAB_KEY = 'Tab';
const TAB_NAV_FORWARD = 'forward';
const TAB_NAV_BACKWARD = 'backward';

const Default = {
	autofocus: true,
	trapElement: null // The element to trap focus inside of
};

const DefaultType = {
	autofocus: 'boolean',
	trapElement: 'element'
};

export default (function (wecodeart) {

	const { Config, Events, Selector } = wecodeart;

	/**
	 * Class definition
	 */
	class FocusTrap extends Config {
		constructor(config) {
			super();
			this._config = this._getConfig(config);
			this._isActive = false;
			this._lastTabNavDirection = null;
		}

		// Getters
		static get Default() {
			return Default;
		}

		static get DefaultType() {
			return DefaultType;
		}

		static get NAME() {
			return NAME;
		}

		// Public
		activate() {
			if (this._isActive) {
				return;
			}

			if (this._config.autofocus) {
				this._config.trapElement.focus();
			}

			Events.off(document, EVENT_KEY); // guard against infinite focus loop
			Events.on(document, EVENT_FOCUSIN, event => this._handleFocusin(event));
			Events.on(document, EVENT_KEYDOWN_TAB, event => this._handleKeydown(event));

			this._isActive = true;
		}

		deactivate() {
			if (!this._isActive) {
				return;
			}

			this._isActive = false;
			Events.off(document, EVENT_KEY);
		}

		// Private
		_handleFocusin(event) {
			const { trapElement } = this._config;

			if (event.target === document || event.target === trapElement || trapElement.contains(event.target)) {
				return;
			}

			const elements = Selector.focusableChildren(trapElement);

			if (elements.length === 0) {
				trapElement.focus();
			} else if (this._lastTabNavDirection === TAB_NAV_BACKWARD) {
				elements[elements.length - 1].focus();
			} else {
				elements[0].focus();
			}
		}

		_handleKeydown(event) {
			if (event.key !== TAB_KEY) {
				return;
			}

			this._lastTabNavDirection = event.shiftKey ? TAB_NAV_BACKWARD : TAB_NAV_FORWARD;
		}
	}

	/**
	 * @static
	 * @memberof Component
	 */
	wecodeart.FocusTrap = FocusTrap;

}).apply(this, [window.wecodeart]);