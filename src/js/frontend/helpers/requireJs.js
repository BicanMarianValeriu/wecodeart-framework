export default function require(bundles, bundleIds, callbackFn) {
	const { fn: { loadJs } } = wecodeart;
	bundleIds.forEach((bundleId) => !loadJs.isDefined(bundleId) && loadJs(bundles[bundleId], bundleId, {
		async: false,
	}));
	loadJs.ready(bundleIds, callbackFn);
};