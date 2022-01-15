/**
 * Parse data attrs
 * @param   {object/string} opts
 * @return  {object/string}
 */
export default function parseData(opts) {
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