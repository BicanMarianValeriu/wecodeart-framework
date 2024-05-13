/**
 * --------------------------------------------------------------------------
 * Base Config
 *
 * @author 	Bican Marian Valeriu
 * @version 1.0.0
 * --------------------------------------------------------------------------
 */
import { isElement, parseData, validateConfig } from '../helpers';

const { applyFilters } = wp.hooks;

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
			return applyFilters('wecodeart.config', config, this.NAME);
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
			return validateConfig(this.constructor.NAME, config, configTypes);
		}
	}

	wecodeart.Config = Config;
}).apply(this, [window.wecodeart]);