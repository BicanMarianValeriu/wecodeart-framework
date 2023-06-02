/**
 * Generate String Params
 * @param   object 
 * @return  {string}
 */
export default function (query) {
	return Object.entries(query).map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`).join('&');
}; 