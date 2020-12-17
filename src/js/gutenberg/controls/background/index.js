/**
 * Internal dependencies
 */
import attributes from './attributes';
import Controls from './controls';
import DropZone from './dropzone';
import Inspector from './inspector';
import { getBackgroundClasses, getBackgroundStyles } from './utils';

export {
	getBackgroundClasses,
	getBackgroundStyles,
	Inspector,
	attributes,
	Controls,
	DropZone,
};

export const ALLOWED_BG_MEDIA_TYPES = ['image', 'video'];