/**
 * Internal dependencies
 */
import { abbreviation } from './abbreviation';
import { underline } from './underline';
import { justify } from './justify';
import { textColor } from './text-color';
import { backgroundColor } from './background-color';
import { markdown } from './markdown';
import { clear } from './clear';
import { tooltip } from './tooltip';

/**
 * WordPress dependencies
 */
const { registerFormatType } = wp.richText;

function registerWeCodeArtFormats() {
	[
		abbreviation,
		backgroundColor,
		clear,
		justify,
		markdown,
		textColor,
		underline,
		tooltip
	].forEach( ( { name, ...settings } ) => {
		if ( name ) {
			registerFormatType( name, settings );
		}
	} );
}

wp.domReady(
	registerWeCodeArtFormats
);
