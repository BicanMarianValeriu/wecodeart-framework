export default (function (wecodeart) {

	class Component {
		/**
		 * Generic constructor for all components
		 * @constructor
		 * @param {Element} el
		 * @param {Object} options
		 */
		constructor(classDef, el, options) {
			// Display error if el is valid HTML Element
			if (!(el instanceof Element)) {
				console.error(Error(el + ' is not an HTML Element'));
			}

			// If exists, destroy and reinitialize in child
			const ins = classDef.getInstance(el);
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
		static init(classDef, els, options) {
			const { fn: { getOptions } } = wecodeart;
			let instances = null;
			if (els instanceof Element) {
				instances = new classDef(els, options);
			} else if (!!els && (els.jquery || els instanceof NodeList)) {
				let instancesArr = [];
				for (let i = 0; i < els.length; i++) {
					const mergedOptions = Object.assign({}, options, getOptions(els[i].dataset.options));
					instancesArr.push(new classDef(els[i], mergedOptions));
				}
				instances = instancesArr;
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