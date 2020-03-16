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
			const { routes, hooks: { doAction } } = namespace;
			this.routes = routes;
			this.doAction = doAction;
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
				this.doAction('wecodeart.route', route, funcname);
				return this.routes[route][funcname](args);
			}
		}

		/**
		 * Meant to be run on load
		 * @info 	It handles all necessary JS init from routes
		 */
		sequence(route) {
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
		}
	}

	/**
	 * @static
	 * @memberof JSManager
	 */
	wecodeart.JSM = JSManager;

}).apply(this, [window.wecodeart]);