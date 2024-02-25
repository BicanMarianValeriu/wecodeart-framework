/**
 * Require JS
 *
 * @param 	{String}
 * @param 	{Array}
 * @param 	{Function}
 */
export default function (bundles, bundleIds, callbackFn) {
	const { fn: { loadJs } } = wecodeart;
	
	bundleIds.forEach((bundleId) => !loadJs.isDefined(bundleId) && loadJs(bundles[bundleId], bundleId, {
		async: false,
	}));

	loadJs.ready(bundleIds, callbackFn);
};