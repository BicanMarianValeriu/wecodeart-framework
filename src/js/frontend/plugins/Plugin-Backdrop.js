/**
 * --------------------------------------------------------------------------
 * Backdrop Component
 *
 * @author 	Bican Marian Valeriu
 * @version 1.0.0
 * --------------------------------------------------------------------------
 */
const NAME = 'backdrop';
const CLASS_NAME_FADE = 'fade';
const CLASS_NAME_SHOW = 'show';
const EVENT_MOUSEDOWN = `mousedown.wp.${NAME}`;

const Default = {
	className: 'wp-backdrop',
	clickCallback: null,
	isAnimated: false,
	isVisible: true, // if false, we use the backdrop helper without adding any element to the dom
	rootElement: 'body' // give the choice to place backdrop under different elements
};

const DefaultType = {
	className: 'string',
	clickCallback: '(function|null)',
	isAnimated: 'boolean',
	isVisible: 'boolean',
	rootElement: '(element|string)'
};

export default (function (wecodeart) {

	const { Config, Events, fn: { execute, executeAfterTransition, getElement, reflow } } = wecodeart;

	/**
	 * Class definition
	 */
	class Backdrop extends Config {
		constructor(config) {
			super();
			this._config = this._getConfig(config);
			this._isAppended = false;
			this._element = null;
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
		show(callback) {
			if (!this._config.isVisible) {
				execute(callback);
				return;
			}

			this._append();

			const element = this._getElement();
			if (this._config.isAnimated) {
				reflow(element);
			}

			element.classList.add(CLASS_NAME_SHOW);

			this._emulateAnimation(() => execute(callback));
		}

		hide(callback) {
			if (!this._config.isVisible) {
				execute(callback);
				return;
			}

			this._getElement().classList.remove(CLASS_NAME_SHOW);

			this._emulateAnimation(() => {
				this.dispose();
				execute(callback);
			});
		}

		dispose() {
			if (!this._isAppended) {
				return;
			}

			Events.off(this._element, EVENT_MOUSEDOWN);

			this._element.remove();
			this._isAppended = false;
		}

		// Private
		_getElement() {
			if (!this._element) {
				const backdrop = document.createElement('div');
				backdrop.className = this._config.className;

				if (this._config.isAnimated) {
					backdrop.classList.add(CLASS_NAME_FADE);
				}

				this._element = backdrop;
			}

			return this._element;
		}

		_configAfterMerge(config) {
			config.rootElement = getElement(config.rootElement);
			return config;
		}

		_append() {
			if (this._isAppended) {
				return;
			}

			const element = this._getElement();
			this._config.rootElement.append(element);

			Events.on(element, EVENT_MOUSEDOWN, () => execute(this._config.clickCallback, [this]));

			this._isAppended = true;
		}

		_emulateAnimation(callback) {
			executeAfterTransition(callback, this._getElement(), this._config.isAnimated);
		}
	}

	/**
	 * @static
	 * @memberof Component
	 */
	wecodeart.Backdrop = Backdrop;

}).apply(this, [window.wecodeart]);