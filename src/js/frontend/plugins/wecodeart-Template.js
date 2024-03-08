/**
 * --------------------------------------------------------------------------
 * Template Factory
 *
 * @author 	Bican Marian Valeriu
 * @version 1.0.0
 * --------------------------------------------------------------------------
 */
import { sanitizeHtml, DefaultAllowlist, execute, isElement } from '../helpers';

const NAME = 'TemplateFactory';

const Default = {
	allowList: DefaultAllowlist,
	content: {}, // { selector : text ,  selector2 : text2 , }
	extraClass: '',
	html: false,
	sanitize: true,
	sanitizeFn: null,
	template: '<div></div>'
}

const DefaultType = {
	allowList: 'object',
	content: 'object',
	extraClass: '(string|function)',
	html: 'boolean',
	sanitize: 'boolean',
	sanitizeFn: '(null|function)',
	template: 'string'
}

const DefaultContentType = {
	entry: '(string|element|function|null)',
	selector: '(string|element)'
}

export default (function (wecodeart) {

	const { Config } = wecodeart;

	class Template extends Config {
		constructor(config) {
			super();
			this._config = this._getConfig(config);
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
		 * Render variables to string
		 *
		 * @param 	{string} string 	HTML String
		 * @param 	{object} variables	Data to be rendered into the string
		 *
		 * @return 	{string}
		 */
		static renderToString(string = '', variables = {}) {
			const destruct = (obj, v) => v.split(/\.|\|/).reduce((v, k) => v?.[k], obj); // Multiple
			const rxp = /{{([^}]+)}}/g;
			let match;

			while ((match = rxp.exec(string))) {
				const expression = match[1];
				const value = destruct(variables, expression.trim());

				if (value === undefined) {
					continue;
				}

				string = string.replace(new RegExp(`{{${expression}}}`, 'g'), value);
			}

			return string;
		}

		/**
		 * Render variables to HTML Object
		 *
		 * @param 	{string} string 	HTML String
		 * @param 	{object} variables	Data to be rendered into the string
		 *
		 * @return 	{HTMLElement}
		 */
		static renderToHTML(string = '', variables = {}, sanitize = true, allowList = DefaultAllowlist) {
			const wrapper = document.createElement('div');
			wrapper.innerHTML = Template.renderToString(string, variables);

			let template = wrapper.firstChild;

			if (sanitize) {
				template = sanitizeHtml(template, allowList);
			}

			return template;
		}

		// Public
		getContent() {
			return Object.values(this._config.content).map(cfg => this._resolvePossibleFunction(cfg)).filter(Boolean);
		}

		hasContent() {
			return this.getContent().length > 0;
		}

		changeContent(content) {
			this._checkContent(content);
			this._config.content = { ...this._config.content, ...content };

			return this;
		}

		toHtml() {
			const templateWrapper = document.createElement('div');
			templateWrapper.innerHTML = this._maybeSanitize(this._config.template);

			for (const [selector, text] of Object.entries(this._config.content)) {
				this._setContent(templateWrapper, text, selector);
			}

			const template = templateWrapper.children[0];
			const extraClass = this._resolvePossibleFunction(this._config.extraClass);

			if (extraClass) {
				template.classList.add(...extraClass.split(' '));
			}

			return template;
		}

		// Private
		_typeCheckConfig(config) {
			super._typeCheckConfig(config);
			this._checkContent(config.content);
		}

		_checkContent(arg) {
			for (const [selector, content] of Object.entries(arg)) {
				super._typeCheckConfig({ selector, entry: content }, DefaultContentType);
			}
		}

		_setContent(template, content, selector) {
			const templateElement = Element.prototype.querySelector.call(template, selector);

			if (!templateElement) {
				return
			}

			content = this._resolvePossibleFunction(content);

			if (!content) {
				templateElement.remove();
				return;
			}

			if (isElement(content)) {
				this._putElementInTemplate(content, templateElement);
				return
			}

			if (this._config.html) {
				templateElement.innerHTML = this._maybeSanitize(content);
				return;
			}

			templateElement.textContent = content;
		}

		_maybeSanitize(arg) {
			return this._config.sanitize ? sanitizeHtml(arg, this._config.allowList, this._config.sanitizeFn) : arg;
		}

		_resolvePossibleFunction(arg) {
			return execute(arg, [this]);
		}

		_putElementInTemplate(element, templateElement) {
			if (this._config.html) {
				templateElement.innerHTML = '';
				templateElement.append(element);
				return;
			}

			templateElement.textContent = element.textContent
		}
	}

	/**
	 * @static
	 * @memberof Template
	 */
	wecodeart.Template = Template;

	// const markup = new Template({
	// 	content: {
	// 		'.tooltip-inner': 'My tooltip'
	// 	},
	// 	template: '<div class="tooltip" role="tooltip">' +
	// 		'<div class="tooltip-arrow"></div>' +
	// 		'<div class="tooltip-inner"></div>' +
	// 		'</div>',
	// });

	// const templateString = `<div class="tooltip" role="tooltip">
	// 	<div class="tooltip-header">{{ header }}</div>
	// 	<div class="tooltip-inner">
	// 		<h3>{{ content.name }}</h3>
	// 		<p>{{ content.profesion }}</p>
	// 	</div>
	// </div>`;

	// Template.renderToHTML(templateString, {
	// 	header: 'Header',
	// 	content: {
	// 		name: 'Bican',
	// 		profesion: 'WordPress Developer'
	// 	}
	// });

}).apply(this, [window.wecodeart]);