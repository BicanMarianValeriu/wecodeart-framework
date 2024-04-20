/**
 * --------------------------------------------------------------------------
 * Data Handler
 *
 * @author 	Bican Marian Valeriu
 * @version 1.0.0
 * --------------------------------------------------------------------------
 */
const elementMap = new Map();

export default (function (wecodeart) {
	
	const Data = {
		set(element, key, instance) {
			if (!elementMap.has(element)) {
				elementMap.set(element, new Map());
			}

			const instanceMap = elementMap.get(element);

			// make it clear we only want one instance per element
			// can be removed later when multiple key/instances are fine to be used
			if (!instanceMap.has(key) && instanceMap.size !== 0) {
				// eslint-disable-next-line no-console
				console.error(`WeCodeArt doesn't allow more than one instance per element. Bound instance: ${Array.from(instanceMap.keys())[0]}.`);
				return;
			}

			instanceMap.set(key, instance);
		},

		get(element, key) {
			if (elementMap.has(element)) {
				return elementMap.get(element).get(key) || null;
			}

			return null;
		},

		remove(element, key) {
			if (!elementMap.has(element)) {
				return;
			}

			const instanceMap = elementMap.get(element);

			instanceMap.delete(key);

			// free up element references if there are no instances left for an element
			if (instanceMap.size === 0) {
				elementMap.delete(element);
			}
		}
	};

	wecodeart.Data = Data;
}).apply(this, [window.wecodeart]);