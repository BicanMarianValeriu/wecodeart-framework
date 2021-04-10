export const maybeParseJson = (input) => {
	if (typeof input !== 'string') {
		return input;
	}
	try {
		JSON.parse(input);
	} catch (error) {
		return input;
	}
	return JSON.parse(input);
};

/**
 * Simple object check.
 *
 * @param {Object} item
 * @return {boolean} Is object?
 */
export const isObject = (item) => {
	return item && typeof item === 'object' && !Array.isArray(item);
};

/**
 * Deep merge objects.
 *
 * @param {...any} objects
 */
export const mergeDeep = (...objects) => {
	const isObjectValue = (obj) => obj && typeof obj === 'object';
	return objects.reduce((prev, obj) => {
		Object.keys(obj).forEach((key) => {
			const pVal = prev[key];
			const oVal = obj[key];
			if (Array.isArray(pVal) && Array.isArray(oVal)) {
				prev[key] = pVal.concat(...oVal);
			} else if (isObjectValue(pVal) && isObjectValue(oVal)) {
				prev[key] = mergeDeep(pVal, oVal);
			} else {
				prev[key] = oVal;
			}
		});
		return prev;
	}, {});
};

export const getIntValAsResponsive = (value) => {
	value = maybeParseJson(value);
	if (
		typeof value === 'object' &&
		Object.prototype.hasOwnProperty.call(value, 'desktop') &&
		Object.prototype.hasOwnProperty.call(value, 'tablet') &&
		Object.prototype.hasOwnProperty.call(value, 'mobile')
	) {
		return value;
	}
	if (typeof value === 'number') {
		value = {
			desktop: value,
			tablet: value,
			mobile: value,
		};
		return value;
	}

	return value;
};