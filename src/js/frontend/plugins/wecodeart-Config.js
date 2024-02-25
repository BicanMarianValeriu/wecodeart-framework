/**
 * --------------------------------------------------------------------------
 * Base Config
 *
 * @author 	Bican Marian Valeriu
 * @version 1.0.0
 * --------------------------------------------------------------------------
 */
import { isElement, parseData, toType } from '../helpers';

export default (function (wecodeart) {

	class Config {
		// Getters
		static get Default() {
			return {};
		}

		static get DefaultType() {
			return {};
		}

		static get NAME() {
			throw new Error('You have to implement the static method "NAME", for each component!');
		}

		_getConfig(config) {
			config = this._mergeConfigObj(config);
			config = this._configAfterMerge(config);
			this._typeCheckConfig(config);
			
			return config;
		}
		
		_configAfterMerge(config) {
			return config;
		}

		_mergeConfigObj(config, element) {
			const dataConfig = isElement(element) ? parseData(element.dataset.options) : {}; // try to parse

			const mergedConfig = {
				...this.constructor.Default, // Defaults
				...(typeof config === 'object' ? config : {}), // Init Config
				...(typeof dataConfig === 'object' ? dataConfig : {}), // DOMElement Config
			};

			return mergedConfig;
		}

		_typeCheckConfig(config, configTypes = this.constructor.DefaultType) {
			for (const [property, expectedTypes] of Object.entries(configTypes)) {
				const value = config[property];
				const valueType = isElement(value) ? 'element' : toType(value);

				if (!new RegExp(expectedTypes).test(valueType)) {
					throw new TypeError(
						`${this.constructor.NAME.toUpperCase()}: Option "${property}" provided type "${valueType}" but expected type "${expectedTypes}".`
					);
				}
			}
		}
	}

	wecodeart.Config = Config;
}).apply(this, [window.wecodeart]);