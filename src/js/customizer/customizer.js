/**
 * This file adds some LIVE changes to WeCodeArt Framework Customizer
 * @author		Bican Marian Valeriu 
 * @author_url  https://www.wecodeart.com/about
 * @package 	WeCodeArt Framework
 * @since 		1.0
 * @version 	4.2.0
 */

import './../../scss/customizer/customizer.scss';

const {
	fields,
	googleFonts,
	palettes
} = wecodeartCustomizePreview;

const wecodeartPostMessage = {
	/**
	 * The fields.
	 *
	 * @since 4.2.0
	 */
	fields,
	/**
	 * Common utilities.
	 *
	 * @since 4.2.0
	 */
	util: {
		isGoogleFont: (family) => {
			return (googleFonts.filter((v) => v.toLowerCase().includes(family.toLowerCase())).length);
		},
		/**
		 * A collection of methods for the <link> tags.
		 *
		 * @since 4.2.0
		 */
		linkTag: {
			/**
			 * Add a <link> tag in <head> if it doesn't already exist.
			 *
			 * @since 	4.2.0
			 * @param 	{string} id - The field-ID.
			 * @returns {void}
			 */
			add: (id, href) => {
				const newNode = document.createElement('link');
				newNode.setAttribute('rel', 'stylesheet');
				newNode.setAttribute('id', id);
				newNode.setAttribute('href', href);
				newNode.setAttribute('type', 'text/css');
				newNode.setAttribute('media', 'all');
				document.querySelector('head').appendChild(newNode);
			},
			/**
			 * Add a <link> tag in <head> if it doesn't already exist,
			 * by calling the this.add method, and then set url to it.
			 *
			 * @since 	4.2.0
			 * @param 	{string} id - The field-ID.
			 * @param 	{string} href - The url to set.
			 * @returns {void}
			 */
			setLink: (id, href) => {
				const linkNode = document.getElementById(id);
				if (linkNode) {
					linkNode.setAttribute('href', href);
					return;
				}
				wecodeartPostMessage.util.linkTag.add(id, href);
			}
		},
		/**
		 * A collection of methods for the <style> tags.
		 *
		 * @since 4.2.0
		 */
		styleTag: {
			/**
			 * Add a <style> tag in <head> if it doesn't already exist.
			 *
			 * @since 	4.2.0
			 * @param 	{string} id - The field-ID.
			 * @returns {void}
			 */
			add: function (id) {
				if (
					null === document.getElementById('wca-postmessage-' + id) ||
					'undefined' === typeof document.getElementById('wca-postmessage-' + id)
				) {
					jQuery('head').append('<style id="wca-postmessage-' + id + '"></style>');
				}
			},
			/**
			 * Add a <style> tag in <head> if it doesn't already exist,
			 * by calling the this.add method, and then add styles inside it.
			 *
			 * @since 	4.2.0
			 * @param 	{string} id - The field-ID.
			 * @param 	{string} styles - The styles to add.
			 * @returns {void}
			 */
			addData: function (id, styles) {
				wecodeartPostMessage.util.styleTag.add(id);
				jQuery('#wca-postmessage-' + id).text(styles);
			}
		},
		/**
		 * Processes the value and applies any replacements and/or additions.
		 *
		 * @since 	4.2.0
		 * @param 	{Object} output - The control.
		 * @param 	{mixed}  value 	- The new value.
		 *
		 * @returns {string|false} 	- Returns false if value is excluded, otherwise a string.
		 */
		processValue: function (output, value) {
			const { util: { processValue } } = wecodeartPostMessage;
			let settings = window.parent.wp.customize.get(), excluded = false;

			if ('object' === typeof value) {
				_.each(value, (subValue, key) => value[key] = processValue(output, subValue));
				return value;
			}

			output = {
				prefix: '',
				units: '',
				suffix: '',
				pattern: '$',
				pattern_replace: {},
				exclude: [],
				...output
			};

			if (1 <= output.exclude.length) {
				_.each(output.exclude, (exclusion) => {
					if (value == exclusion) {
						excluded = true;
					}
				});
			}

			if (excluded) {
				return false;
			}

			// Apply Pattern
			if (typeof output.pattern === 'string') {
				value = output.pattern.replace(new RegExp('\\$', 'g'), value);
			}

			// Apply Pattern replace
			if (output.pattern_replace.length) {
				_.each(output.pattern_replace, (id, placeholder) => {
					if (!_.isUndefined(settings[id])) {
						value = value.replace(placeholder, settings[id]);
					}
				});
			}

			return output.prefix + value + output.units + output.suffix;
		},
		/**
		 * Make sure urls are properly formatted for background-image properties.
		 *
		 * @since 	4.2.0
		 * @param 	{string} url - The URL.
		 *
		 * @returns {string}
		 */
		backgroundImageValue: function (url) {
			return (-1 === url.indexOf('url(')) ? 'url(' + url + ')' : url;
		}
	},
	/**
	 * A collection of utilities for CSS generation.
	 *
	 * @since 4.2.0
	 */
	css: {
		/**
		 * Generates the CSS from the output (js_vars) parameter.
		 *
		 * @since 	4.2.0
		 * @param 	{object} field - The control.
		 * @param 	{mixed}  value - The new value.
		 *
		 * @returns {string}
		 */
		fromOutput: function (output, value, { control, name }) {
			const { util: { processValue, backgroundImageValue, linkTag, isGoogleFont } } = wecodeartPostMessage;

			let styles = '', mediaQuery = false, processedValue;

			if (output.js_callback && 'function' === typeof window[output.js_callback]) {
				value = window[output.js_callback[0]](value, output.js_callback[1]);
			}

			switch (control) {
				case 'wecodeart-fonts':
					styles += output.element + '{';
					_.each(value, function (val, key) {
						if (key === 'font-weight') return;
						if (output.choice && key !== output.choice) {
							return;
						}
						processedValue = processValue(output, val);
						if (false !== processedValue) {
							styles += output.property + ':' + processedValue + ';';
						}
					});
					styles += '}';

					if (isGoogleFont(value['font-family'])) {
						let fontUrl = '//fonts.googleapis.com/css?family=';
						let variants = [];
						let family = value['font-family'].replace(' ', '+').replace(/\"/g, '&quot;');
						if (value['font-weight'].length) {
							[...value['font-weight']].map(v => {
								if ('regular' === v) v = '400';
								if ('italic' === v) v = '400i';
								variants = [...variants, v.substring(0, 4)];
							});
							family += `:${variants.join(':')}`;
						}
						fontUrl += family + '&display=swap';
						linkTag.setLink(name, fontUrl);
					}

					break;
				case 'wecodeart-palette':
					const { colors } = palettes.filter(({ slug }) => slug === value).pop();
					processedValue = processValue(output, colors[output.key]);
					if (false !== processedValue) {
						styles += output.element + '{' + output.property + ':' + processedValue + ';}';
					}
					break;
				case 'wecodeart-background':
				case 'wecodeart-dimensions':
				case 'wecodeart-sortable':
					styles += output.element + '{';
					_.each(value, function (val, key) {
						if (output.choice && key !== output.choice) {
							return;
						}

						if ('background-image' === key) {
							val = backgroundImageValue(val);
						}

						processedValue = processValue(output, val);

						if (false !== processedValue) {
							// Mostly used for padding, margin & position properties.
							if (output.property) {
								styles += output.property;
								if ('' !== output.property && ('top' === key || 'bottom' === key || 'left' === key || 'right' === key)) {
									styles += '-' + key;
								}
								styles += ':' + processedValue + ';';
							} else {
								styles += key + ':' + processedValue + ';';
							}
						}
					});
					styles += '}';
					break;
				default:
					if ('wecodeart-image' === control) {
						value = (!_.isUndefined(value.url)) ? backgroundImageValue(value.url) : backgroundImageValue(value);
					}

					if (_.isObject(value)) {
						styles += output.element + '{';
						_.each(value, (val, key) => {
							if (output.choice && key !== output.choice) {
								return;
							}

							processedValue = processValue(output, val);

							if (!output.property) {
								output.property = key;
							}

							if (false !== processedValue) {
								styles += output.property + ':' + processedValue + ';';
							}
						});
						styles += '}';
					} else {
						processedValue = processValue(output, value);

						if (false !== processedValue) {
							styles += output.element + '{' + output.property + ':' + processedValue + ';}';
						}
					}
					break;
			}

			// Get the media-query.
			if (output.media_query && 'string' === typeof output.media_query && !_.isEmpty(output.media_query)) {
				mediaQuery = output.media_query;
				if (-1 === mediaQuery.indexOf('@media')) {
					mediaQuery = '@media ' + mediaQuery;
				}
			}

			// If we have a media-query, add it and return.
			if (mediaQuery) {
				return mediaQuery + '{' + styles + '}';
			}

			// Return the styles.
			return styles;
		}
	},
	/**
	 * A collection of utilities to change the HTML in the document.
	 *
	 * @since 4.2.0
	 */
	html: {
		/**
		 * Modifies the HTML from the output (js_vars) parameter.
		 *
		 * @since 	4.2.0
		 * @param 	{Object} field 	- The control.
		 * @param 	{mixed}  value 	- The new value.
		 *
		 * @returns {string}
		 */
		fromOutput: function (output, value) {
			const { util: { processValue } } = wecodeartPostMessage;
			const $element = jQuery(output.element);

			if (output.js_callback && 'function' === typeof window[output.js_callback]) {
				value = window[output.js_callback[0]](value, output.js_callback[1]);
			}

			if (_.isObject(value) || _.isArray(value)) {
				if (!output.choice) return;
				_.each(value, (val, key) => {
					if (output.choice && key !== output.choice) return;
					value = val;
				});
			}

			value = processValue(output, value);

			if (output.attr) {
				if (output.attr === 'class') {
					if ('undefined' !== typeof output.value) {
						// If is multiple then we switch the class
						if (_.isArray(output.value)) {
							$element.removeClass(output.value.join(' ')).addClass(value);
						} else {
							// Else we toggle
							$element.toggleClass(output.value);
						}
					}
				} else {
					$element.attr(output.attr, value);
				}
			} else if (output.text) {
				$element.text(value);
			} else {
				$element.html(value);
			}
		}
	},
};

(function (wp, $) {
	const api = wp.customize;
	const { util: { styleTag }, fields } = wecodeartPostMessage;

	// Blog Branding
	api('blogname', value => value.bind(to => $('.site-title a').text(to)));
	api('blogdescription', value => value.bind(to => $('.site-description').text(to)));

	// Process Controls
	_.each(fields, ({ output, name, control }) => {
		const args = { name, control };
		api(name, (value) => {
			value.bind(function (newVal) {
				let styles = '';
				_.each(output, (parse) => {
					if (!parse.function || 'undefined' === typeof wecodeartPostMessage[parse.function]) {
						parse.function = 'css';
					}
					if ('css' === parse.function) {
						styles += wecodeartPostMessage.css.fromOutput(parse, newVal, args);
					} else {
						wecodeartPostMessage[parse.function].fromOutput(parse, newVal, args);
					}
				});
				styleTag.addData(name, styles);
			});
		});
	});
})(wp, jQuery);