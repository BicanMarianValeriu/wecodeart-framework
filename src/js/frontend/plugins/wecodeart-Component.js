/**
 * --------------------------------------------------------------------------
 * Plugin Component
 *
 * @author 	Bican Marian Valeriu
 * @version 1.0.0
 * --------------------------------------------------------------------------
 */
import { executeAfterTransition } from './../helpers';

export default (function (wecodeart) {

	const { Config, Data, Events, version } = wecodeart;

	class Component extends Config {
		constructor(element, config) {
			super();

			if (!element) {
				return;
			}

			this.el = element; // Deprecated
			this._element = element;
			this._config = this._getConfig(config);

			Data.set(this._element, this.constructor.DATA_KEY, this);
		}

		// Public
		dispose() {
			Data.remove(this._element, this.constructor.DATA_KEY);
			Events.off(this._element, this.constructor.EVENT_KEY);

			for (const propertyName of Object.getOwnPropertyNames(this)) {
				this[propertyName] = null;
			}
		}

		_queueCallback(callback, element, isAnimated = true) {
			executeAfterTransition(callback, element, isAnimated);
		}

		_getConfig(config) {
			config = this._mergeConfigObj(config, this._element);
			config = this._configAfterMerge(config);
			this._typeCheckConfig(config);

			return config;
		}

		// Static
		static getInstance(element) {
			return Data.get(element, this.DATA_KEY);
		}

		static getOrCreateInstance(element, config = {}) {
			return this.getInstance(element) || new this(element, typeof config === 'object' ? config : null);
		}

		static get VERSION() {
			return version;
		}

		static get DATA_KEY() {
			return `wp.${this.NAME}`;
		}

		static get EVENT_KEY() {
			return `.${this.DATA_KEY}`;
		}

		static eventName(name) {
			return `${name}${this.EVENT_KEY}`;
		}

		/**
		 * Initializes components
		 *
		 * @param	{class}	classDef
		 * @param	{Element | NodeList | jQuery} els
		 * @param	{Object} options
		 */
		static init(classDef, els, options) {
			let instances = [];

			if (els instanceof Element) {
				const instance = classDef.getOrCreateInstance(els, options);
				instances.push(instance);
			} else if (!!els && (els.jquery || els instanceof NodeList)) {
				for (let i = 0; i < els.length; i++) {
					instances.push(classDef.getOrCreateInstance(els[i], options));
				}
			}

			return instances;
		}
	}

	/**
	 * @static
	 * @memberof Component
	 */
	wecodeart.Component = Component;
	wecodeart.plugins.Component = Component;

}).apply(this, [window.wecodeart]);