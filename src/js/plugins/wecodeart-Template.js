/**
 * Template Submit
 * @author 	Bican Marian Valeriu
 * @version 1.0.0
 */
export default (function (wecodeart) {

	const { Component } = wecodeart;

	const pluginDefaults = {};

	class Template extends Component {
		/**
		 * Construct Animate instance
		 * @constructor
		 * @param {Element} el
		 * @param {Object} options
		 */
		constructor(el, options) {
			super(Template, null, options);
			/**
			 * Options for the animation
			 * @member YTIframe#options
			 */
			this.options = Object.assign({}, Template.defaults, {}, options);
		}

		static get defaults() {
			return pluginDefaults;
		}

		static get registered() {
			return Template._templates;
		}

		/**
		 * Add a template
		 *
		 * @param {string} name Give the template a name
		 * @param {function} render Render Function for the template
		 */
		static addTemplate(name, render) {
			if (typeof render !== 'function') {
				return console.warn(`Templates: ${name} - The 'render' argument must be a function.`);
			}
			Template._templates.push({ name, render });
		}

		/**
		 * Render a template
		 *
		 * @param 	{string} 	name	Template Name
		 * @param 	{object} 	data	Data to be rendered into the template
		 *
		 * @return 	DOM Element
		 */
		static render(name = 'sample', data) {
			const child = Template._templates.filter(item => item.name === name).shift();
			if (child) {
				return child.render(data);
			}
			return console.warn(`Template:: There is no registered template with the name of "${name}".`);
		};

		/**
		 * Render variables to string
		 *
		 * @param 	{string} string 	HTML String
		 * @param 	{object} variables	Data to be rendered into the string
		 *
		 * @return 	{string}
		 */
		static renderToString(string = '', variables = {}) {
			let rxp = /{{([^}]+)}}/g, curMatch;

			while (curMatch = rxp.exec(string)) {
				const trimd = curMatch[1].trim();
				const found = destruct(variables, trimd);
				if (found[trimd] === undefined) continue;
				string = string.replace(new RegExp(`{{${curMatch[1]}}}`, 'g'), found[trimd]);
			}

			return string;
		}
	}

	/**
	 * @static
	 * @memberof Template
	 */
	Template._templates = [];
	wecodeart.Template = Template;

	/**
	 * Add A Basic Sample Template
	 */
	Template.addTemplate('sample', data => {
		const postHTML = document.createElement('div');
		const { title } = data;

		postHTML.classList.add('demo');
		postHTML.innerHTML = title;

		return postHTML;
	});

}).apply(this, [window.wecodeart]);