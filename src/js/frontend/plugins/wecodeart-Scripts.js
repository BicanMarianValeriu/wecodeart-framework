/**
 * --------------------------------------------------------------------------
 * Javascript Manager
 *
 * @author 	Bican Marian Valeriu
 * @version 1.0.0
 * --------------------------------------------------------------------------
 */
import { camelCase, requireJs } from '../helpers';

const NAME = 'scripts';

const Default = {
	element: document.body, // The element
};

const DefaultType = {
	element: '(element|null)',
};

const { doAction, applyFilters } = wp.hooks;

export default (function (wecodeart) {

	const { Config } = wecodeart;

	class Scripts extends Config {
		constructor(config) {
			super();
			const { routes, lazyJs } = wecodeart;
			
			this._config = this._getConfig(config);
			this._routes = routes;
			this._lazyJs = lazyJs;

			this.loaded = [];
			this.doAction = doAction;
			this.applyFilters = applyFilters;
			this.extendedRoutes = Object.keys(routes).filter(k => routes[k]?.extends instanceof Array);

			this.loadEvents();
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

		/**
		 * Executes the specified function on a given route
		 * @param {string} route - Route name
		 * @param {string} [funcName='init'] - Function name to execute
		 * @param {Array} args - Arguments to pass to the function
		 */
		executeRouteFunction(route, funcName = 'init', args) {
			const routeExists = this._routes[route];
			const funcExists = routeExists && (typeof routeExists[funcName] === 'function' || typeof routeExists[funcName] === 'object');

			if (funcExists) {
				args = this.applyFilters('wecodeart.route', args, route, funcName);

				if (typeof routeExists[funcName] === 'object') {
					const { id: bundleIds = [], callback = () => { }, condition = true } = routeExists[funcName];
					const conditionMet = typeof condition === 'function' ? condition() !== false : condition;
					const missingBundles = bundleIds.filter(bundle => !Object.keys(this._lazyJs).includes(bundle));

					if (conditionMet) {
						if (missingBundles.length) {
							console.warn(`WeCodeArt JSM - Route "${route}" is missing the lazy bundle(s): ${missingBundles.join(', ')}. Please add them before using.`);
							return;
						}

						requireJs(this._lazyJs, bundleIds, () => {
							callback(args);
							this.doAction('wecodeart.route', route, funcName, args);
							this.loaded.push(route);
						});
					}
					return;
				}

				routeExists[funcName](args);
				this.doAction('wecodeart.route', route, funcName, args);
				this.loaded.push(route);
			}
		}

		/**
		 * Executes all necessary functions for a given route
		 * @param {string} route - Route name
		 */
		processRoute(route) {
			if (this.loaded.includes(route)) {
				return;
			}

			this.executeRouteFunction(route);
			this.executeRouteFunction(route, 'complete');
			this.executeRouteFunction(route, 'lazy');
		}

		/**
		 * Loads and initializes the appropriate routes based on body classes and predefined routes
		 */
		loadEvents() {
			this.executeRouteFunction('common');

			const { element } = this._config;

			element.classList.forEach(cls => {
				const route = camelCase(cls.toLowerCase().replace(/-/g, '_'));
				this.processRoute(route);

				this.extendedRoutes.forEach(extRoute => {
					if (this._routes[extRoute].extends.includes(cls)) {
						this.processRoute(extRoute);
					}
				});
			});

			this.executeRouteFunction('common', 'complete');
			this.executeRouteFunction('common', 'lazy');
		}
	}

	/**
	 * @static
	 * @memberof JSManager
	 */
	wecodeart.Scripts = Scripts;

}).apply(this, [window.wecodeart]);