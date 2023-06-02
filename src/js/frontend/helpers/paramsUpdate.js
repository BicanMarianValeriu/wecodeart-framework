/**
 * Update String Params
 * @param  {string} uri The URI to update
 * @param  {string} key The parameter key to update
 * @param  {string} value The new value for the parameter
 * @return {string} The updated URI
 */
export default (uri, key, value) => {
	const re = new RegExp(`([?&])${key}=.*?(&|$)`, "i");
	const separator = uri.includes('?') ? "&" : "?";

	if (uri.match(re)) {
		return uri.replace(re, `$1${key}=${value}$2`);
	}

	return uri + separator + `${key}=${value}`;
};