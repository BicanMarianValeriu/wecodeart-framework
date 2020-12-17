import _pickBy from 'lodash/pickBy';
import _filter from 'lodash/filter';
import camelCase from '../helpers/camelCase';

/**
 * Utility to trigger JS code based on clasname routing
 */
export default (function (wecodeart) {

	class JSManager {
		/**
		 * Generic constructor 
		 * @constructor
		 * @param {object} namespace 	| JS Object
		 * @param {string} routes		| Key name containing routes 
		 */
		constructor(namespace) {
			const { routes } = namespace;
			const { doAction, applyFilters } = wp.hooks;
			this.routes = routes;
			this.loaded = [];
			this.doAction = doAction;
			this.applyFilters = applyFilters;
			this.extendedR = _pickBy(routes, v => v.extends && v.extends instanceof Array);
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
			fire = fire && typeof this.routes[route][funcname] === 'function';

			if (fire) {
				args = this.applyFilters('wecodeart.route', args, route, funcname);
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
			if (this.loaded.includes(route)) return;
			this.fireRoute(route);
			this.fireRoute(route, 'complete');
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
				_filter(this.extendedR, (v, k) => v.extends.includes(cls) && this.sequence(k));
			}
			this.fireRoute('common', 'complete');
			this.loaded.push('common');
		}
	}

	/**
	 * @static
	 * @memberof JSManager
	 */
	wecodeart.JSM = JSManager;

}).apply(this, [window.wecodeart]);