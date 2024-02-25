/**
 * Execute Function
 *
 * @param 	{Function}
 * @param 	{Array}
 * @param 	{Function}
 */
const execute = (possibleCallback, args = [], defaultValue = possibleCallback) => {
	return typeof possibleCallback === 'function' ? possibleCallback(...args) : defaultValue;
};

/**
 * Execute Function after DOMElement transition
 *
 * @param 	{Function}
 * @param 	{DOMElement}
 * @param 	{Boolean}
 */
const executeAfterTransition = (callback, transitionElement, waitForTransition = true) => {
	if (!waitForTransition) {
		execute(callback);
		return;
	}

	const durationPadding = 5;
	const emulatedDuration = wecodeart.fn.getTransitionDuration(transitionElement) + durationPadding;

	let called = false;

	const handler = ({ target }) => {
		if (target !== transitionElement) {
			return;
		}

		called = true;
		transitionElement.removeEventListener('transitionend', handler);
		execute(callback);
	};

	transitionElement.addEventListener('transitionend', handler);

	setTimeout(() => {
		if (!called) {
			transitionElement.dispatchEvent(new Event('transitionend'));
		}
	}, emulatedDuration);
};

export { executeAfterTransition, execute };

export default execute;