/**
 * camelCase
 * @param 	{string} str String that isn't camel-case, e.g., CAMeL_CaSEiS-harD
 * @return 	{string} String converted to camel-case, e.g., camelCaseIsHard
 */
export default function camelCase(str) {
	return str.replace(/[\W_]/g, '|').split('|').map((part, index) => {
		const isFirstPart = index === 0;
		const capitalizedPart = part.charAt(0).toUpperCase() + part.slice(1);
		return isFirstPart ? part.toLowerCase() : capitalizedPart;
	}).join('');
}