/**
 * Generate String Params
 *
 * @param   {Object}
 *
 * @return  {string}
 */
const paramsCreate = (query) => {
	return Object.entries(query).map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`).join('&');
};

/**
 * Update String Params
 *
 * @param  {String} uri The URI to update
 * @param  {String} key The parameter key to update
 * @param  {String} value The new value for the parameter
 *
 * @return {String} The updated URI
 */
const paramsUpdate = (uri, key, value) => {
	const re = new RegExp(`([?&])${key}=.*?(&|$)`, "i");
	const separator = uri.includes('?') ? "&" : "?";

	if (uri.match(re)) {
		return uri.replace(re, `$1${key}=${value}$2`);
	}

	return uri + separator + `${key}=${value}`;
};

/**
 * Parse data attrs
 *
 * @param   {object/string} opts
 *
 * @return  {object/string}
 */
const parseData = (opts) => {
	if (typeof (opts) == 'object') {
		return opts;
	} else if (typeof (opts) == 'string') {
		try {
			return JSON.parse(opts.replace(/'/g, '"').replace(';', ''));
		} catch (e) {
			return {};
		}
	} else {
		return {};
	}
};

// Exports
export { paramsCreate, paramsUpdate, parseData };