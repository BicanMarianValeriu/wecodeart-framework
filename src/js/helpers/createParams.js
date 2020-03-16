/**
 * Generate String Params
 * @param   object 
 * @return  {string}
 */
export default function (query) {
	let params = '';
	for (let key in query) {
		if (params !== '') params += '&';
		params += key + '=' + encodeURIComponent(query[key]);
	}
	return params;
}; 