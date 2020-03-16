/**
 * Internal dependencies
 */
//import { textColor } from './text-color'; // Deprecated
import { clear } from './clear';
import { tooltip } from './tooltip';
import { justify } from './justify';
import { markdown } from './markdown';
import { underline } from './underline';
import { abbreviation } from './abbreviation';
import { backgroundColor } from './background-color';

/**
 * WordPress dependencies
 */
const { registerFormatType } = wp.richText;

function registerWeCodeArtFormats() {
	[
		abbreviation,
		backgroundColor,
		clear,
		markdown,
		justify,
		underline,
		tooltip,
		//textColor, 	// Deprecated
	].forEach( ( { name, ...settings } ) => {
		if ( name ) {
			registerFormatType( name, settings );
		}
	} );
}

wp.domReady(
	registerWeCodeArtFormats
);
