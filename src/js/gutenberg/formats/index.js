/**
 * Internal dependencies
 */
import { clear } from './clear';
import { justify } from './justify';
import { underline } from './underline';
import { highlight } from './highlight';
import { abbreviation } from './abbreviation';
// import { tooltip } from './tooltip';

/**
 * WordPress dependencies
 */
const { registerFormatType } = wp.richText;

function registerWeCodeArtFormats() {
	[
		clear,
		justify,
		underline,
		highlight,
		abbreviation,
		// tooltip,
	].forEach(({ name, ...settings }) => {
		if (name) {
			registerFormatType(name, settings);
		}
	});
}

wp.domReady(
	registerWeCodeArtFormats
);
