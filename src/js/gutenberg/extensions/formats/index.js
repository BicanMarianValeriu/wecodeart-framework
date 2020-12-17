/**
 * Internal dependencies
 */
import { markdown } from './markdown';
import { clear } from './clear';
import { abbreviation } from './abbreviation';
import { justify } from './justify';
import { underline } from './underline';
import { backgroundColor } from './background-color';
// import { tooltip } from './tooltip';

/**
 * WordPress dependencies
 */
const { registerFormatType } = wp.richText;

function registerWeCodeArtFormats() {
	[
		markdown,
		clear,
		abbreviation,
		justify,
		underline,
		backgroundColor,
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
