export default function hasScrollbar(el) {
	// The Modern solution
	if (typeof window.innerWidth === 'number') return window.innerWidth > document.documentElement.clientWidth;

	// Elem for quirksmode
	const elem = el || document.documentElement || document.body;

	// Check overflow style property on body for fauxscrollbars
	let overflowStyle;

	if (typeof elem.currentStyle !== 'undefined') overflowStyle = elem.currentStyle.overflow;

	overflowStyle = overflowStyle || window.getComputedStyle(elem, '').overflow;

	// Also need to check the Y axis overflow
	let overflowYStyle;

	if (typeof elem.currentStyle !== 'undefined') overflowYStyle = elem.currentStyle.overflowY;

	overflowYStyle = overflowYStyle || window.getComputedStyle(elem, '').overflowY;

	const contentOverflows = elem.scrollHeight > elem.clientHeight;
	const overflowShown = /^(visible|auto)$/.test(overflowStyle) || /^(visible|auto)$/.test(overflowYStyle);
	const alwaysShowScroll = overflowStyle === 'scroll' || overflowYStyle === 'scroll';

	return (contentOverflows && overflowShown) || (alwaysShowScroll);
};

const handleDocumentScrollbar = () => {
	const html = document.documentElement;
	if (hasScrollbar()) html.classList.add('has-scrollbar');
	else html.classList.remove('has-scrollbar');
};

const handleBodyJSClass = () => {
	const html = document.documentElement;
	html.classList.remove('no-js');
	html.classList.add('js');
};

export { handleBodyJSClass, handleDocumentScrollbar }; 