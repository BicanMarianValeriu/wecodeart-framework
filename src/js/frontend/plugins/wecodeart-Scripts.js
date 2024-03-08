/**
 * --------------------------------------------------------------------------
 * Javascript Manager
 *
 * @author 	Bican Marian Valeriu
 * @version 1.0.0
 * --------------------------------------------------------------------------
 */
import { camelCase, requireJs } from '../helpers';

export default (function (wecodeart) {

	class Scripts {
		/**
		 * Generic constructor 
		 * @constructor
		 * @param {object} namespace 	| JS Object
		 * @param {string} routes		| Key name containing routes 
		 */
		constructor(namespace) {
			const { routes, lazyJs } = namespace;
			const { doAction, applyFilters } = wp.hooks;
			this.routes = routes;
			this.lazyJs = lazyJs;
			this.loaded = [];
			this.doAction = doAction;
			this.applyFilters = applyFilters;
			this.extendedR = Object.keys(routes).filter(k => routes[k]?.extends && routes[k].extends instanceof Array);
			this.loadEvents();
		}

		/**
		 * Meant to be run on load
		 * @info 	It handles all necessary JS init from routes
		 */
		fireRoute(route, funcname, args) {
			let fire;
			funcname = funcname === undefined ? 'init' : funcname;
			fire = route !== '';
			fire = fire && this.routes[route];
			fire = fire && (typeof this.routes[route][funcname] === 'function' || typeof this.routes[route][funcname] === 'object');

			if (fire) {
				args = this.applyFilters('wecodeart.route', args, route, funcname);

				if (typeof this.routes[route][funcname] === 'object') {
					const { id: bundleIds = [], callback = () => { }, condition = true } = this.routes[route][funcname];
					const condMeet = typeof condition === 'function' ? condition() !== false : condition;
					const missingBundles = [...bundleIds].filter(k => !Object.keys(this.lazyJs).includes(k));
					if (condMeet) {
						if (missingBundles.length) {
							const message = `WeCodeArt JSM - Route "${route}" is missing the lazy bundle(s): ${missingBundles.join(', ')}. Please add them before using.`;
							console.log(message);
							return;
						}

						requireJs(this.lazyJs, bundleIds, () => {
							callback(args);
							this.doAction('wecodeart.route', route, funcname, args);
							this.loaded.push(route);
						});
					}
					return;
				}

				this.routes[route][funcname](args);
				this.doAction('wecodeart.route', route, funcname, args);
				this.loaded.push(route);
				return;
			}
		}

		/**
		 * Meant to be run on load
		 * @info 	It handles all necessary JS init from routes
		 */
		sequence(route) {
			if (this.loaded.includes(route)) {
				return;
			}

			this.fireRoute(route);
			this.fireRoute(route, 'complete');
			this.fireRoute(route, 'lazy');
		}

		/**
		 * Meant to be run on load
		 * @info 	It handles all necessary JS init from routes
		 */
		loadEvents() {
			this.fireRoute('common');
			for (let cls of document.body.classList) {
				const route = camelCase(cls.toLowerCase().replace(/-/g, '_'));
				// Fire Manual Routes
				this.sequence(route);
				// Additional Extended Routes
				this.extendedR.filter(k => this.routes[k].extends.includes(cls) && this.sequence(k));
			}
			this.fireRoute('common', 'complete');
			this.fireRoute('common', 'lazy');
		}
	}

	/**
	 * @static
	 * @memberof JSManager
	 */
	wecodeart.Scripts = Scripts;

}).apply(this, [window.wecodeart]);