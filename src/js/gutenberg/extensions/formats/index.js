/**
 * Internal dependencies
 */
import { underline } from './underline';
import { justify } from './justify';
import { textColor } from './text-color';
import { backgroundColor } from './background-color';
import { markdown } from './markdown';
import { clear } from './clear';

/**
 * WordPress dependencies
 */
const { registerFormatType } = wp.richText;

function registerWeCodeArtFormats() {
	[
		underline,
		justify,
		textColor,
		backgroundColor,
		markdown,
		clear,
	].forEach( ( { name, ...settings } ) => {
		if ( name ) {
			registerFormatType( name, settings );
		}
	} );
}

wp.domReady(
	registerWeCodeArtFormats
);
