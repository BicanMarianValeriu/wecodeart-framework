import wcaParseData from './plugins/wecodeart-parseData';
import wcaLoadScript from './plugins/wecodeart-loadScript';

var wecodeart = window.wecodeart || {};
// WeCodeArt 
wecodeart.fn = {
	// Get Plugin Options
	getOptions: wcaParseData,
	// Load Script Function
	loadScript: wcaLoadScript
};

export default (function (wecodeart, $) {
	'use strict';

	wecodeart = wecodeart || {};

	wecodeart.fn.init = function () {
		// HTML Classes
		var html = document.documentElement;
		html.classList.remove('no-js');
		html.classList.add('js');

		document.addEventListener('DOMContentLoaded', () => {
			let inOBJ = (wecodeart.assetsEnqueue.indexOf('wecodeart-core') > -1) ? true : null;
			if (!inOBJ) return;
			$(document).foundation();
		});
	};

	return wecodeart.fn.init();

}).apply(this, [window.wecodeart, jQuery]); 