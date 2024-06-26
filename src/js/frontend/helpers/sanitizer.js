/**
 * A pattern that recognizes Aria attributes.
 */
const PATTERN_ARIA_ATTRIBUTE = /^aria-[\w-]*$/i;

/**
 * A pattern that recognizes URLs that are safe wrt. XSS in URL navigation contexts.
 *
 * Shout-out to Angular https://github.com/angular/angular/blob/15.2.8/packages/core/src/sanitization/url_sanitizer.ts#L38
 */
const PATTERN_SAFE_URL = /^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i;

const DefaultAllowlist = {
	// Global attributes allowed on any supplied element below.
	'*': ['class', 'dir', 'id', 'lang', 'role', PATTERN_ARIA_ATTRIBUTE],
	a: ['target', 'href', 'title', 'rel'],
	button: ['type', 'data-wp-close'],
	area: [],
	b: [],
	br: [],
	col: [],
	code: [],
	dd: [],
	div: [],
	dl: [],
	dt: [],
	em: [],
	hr: [],
	h1: [],
	h2: [],
	h3: [],
	h4: [],
	h5: [],
	h6: [],
	i: [],
	img: ['src', 'srcset', 'alt', 'title', 'width', 'height'],
	li: [],
	ol: [],
	p: [],
	pre: [],
	s: [],
	small: [],
	span: [],
	sub: [],
	sup: [],
	strong: [],
	u: [],
	ul: []
};

const uriAttributes = new Set([
	'background',
	'cite',
	'href',
	'itemtype',
	'longdesc',
	'poster',
	'src',
	'xlink:href'
]);

const allowedAttribute = (attribute, allowedAttributeList) => {
	const attributeName = attribute.nodeName.toLowerCase();

	if (allowedAttributeList.includes(attributeName)) {
		if (uriAttributes.has(attributeName)) {
			return Boolean(PATTERN_SAFE_URL.test(attribute.nodeValue));
		}

		return true;
	}

	// Check if a regular expression validates the attribute.
	return allowedAttributeList.filter(attributeRegex => attributeRegex instanceof RegExp).some(regex => regex.test(attributeName));
};

// Exports
export { DefaultAllowlist, sanitizeHtml };
export default function sanitizeHtml(unsafeHtml, allowList, sanitizeFunction) {
	if (!unsafeHtml.length) {
		return unsafeHtml;
	}

	if (sanitizeFunction && typeof sanitizeFunction === 'function') {
		return sanitizeFunction(unsafeHtml);
	}

	const domParser = new window.DOMParser();
	const createdDocument = domParser.parseFromString(unsafeHtml, 'text/html');
	const elements = [].concat(...createdDocument.body.querySelectorAll('*'));

	for (const element of elements) {
		const elementName = element.nodeName.toLowerCase();

		if (!Object.keys(allowList).includes(elementName)) {
			element.remove();
			continue;
		}

		const attributeList = [].concat(...element.attributes);
		const allowedAttributes = [].concat(allowList['*'] || [], allowList[elementName] || []);

		for (const attribute of attributeList) {
			if (!allowedAttribute(attribute, allowedAttributes)) {
				element.removeAttribute(attribute.nodeName);
			}
		}
	}

	return createdDocument.body.innerHTML;
}