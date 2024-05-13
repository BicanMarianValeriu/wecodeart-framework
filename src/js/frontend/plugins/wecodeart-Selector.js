/**
 * --------------------------------------------------------------------------
 * Selector Engine
 *
 * @author 	Bican Marian Valeriu
 * @version 1.0.0
 * --------------------------------------------------------------------------
 */
import { isDisabled, isVisible } from './../helpers';

export default (function (wecodeart) {
	
	const Selector = {
		find(selector, element = document.documentElement) {
			return [].concat(...Element.prototype.querySelectorAll.call(element, selector));
		},
		findOne(selector, element = document.documentElement) {
			return Element.prototype.querySelector.call(element, selector);
		},
		children(element, selector) {
			return [].concat(...element.children).filter(child => child.matches(selector));
		},
		parents(element, selector) {
			const parents = [];
			let ancestor = element.parentNode.closest(selector);

			while (ancestor) {
				parents.push(ancestor);
				ancestor = ancestor.parentNode.closest(selector);
			}

			return parents;
		},
		prev(element, selector) {
			let previous = element.previousElementSibling;

			while (previous) {
				if (previous.matches(selector)) {
					return [previous];
				}

				previous = previous.previousElementSibling;
			}

			return [];
		},
		next(element, selector) {
			let next = element.nextElementSibling;

			while (next) {
				if (next.matches(selector)) {
					return [next];
				}

				next = next.nextElementSibling;
			}

			return [];
		},
		focusableChildren(element) {
			const focusables = [
				'a',
				'button',
				'input',
				'textarea',
				'select',
				'details',
				'[tabindex]',
				'[contenteditable="true"]'
			].map(selector => `${selector}:not([tabindex^="-"])`).join(',');

			return this.find(focusables, element).filter(el => !isDisabled(el) && isVisible(el));
		}
	};

	wecodeart.Selector = Selector;
}).apply(this, [window.wecodeart]);