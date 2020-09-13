/**
 * Internal dependencies
 */
import BackgroundAttributes from './attributes';
import BackgroundControls from './controls';
import BackgroundDropZone from './dropzone';
import BackgroundPanel from './panel';
import BackgroundTransforms from './transforms';
import BackgroundVideo from './video';
import { getBackgroundClasses, getBackgroundStyles } from './utils';

export {
	getBackgroundClasses,
	getBackgroundStyles,
	BackgroundAttributes,
	BackgroundControls,
	BackgroundDropZone,
	BackgroundTransforms,
	BackgroundVideo,
	BackgroundPanel,
};

export const ALLOWED_BG_MEDIA_TYPES = ['image', 'video'];