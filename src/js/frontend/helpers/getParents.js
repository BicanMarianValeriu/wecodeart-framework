/**
 * Get element parents
 * @param   {object/string} opts
 * @return  {object/string}
 */
export default function getParents(elem, selector) {
	const parents = [];

	while (elem && elem !== document) {
		if (selector && elem.matches(selector)) {
			parents.push(elem);
		} else if (!selector) {
			parents.push(elem);
		}
		elem = elem.parentNode;
	}

	return parents;
};