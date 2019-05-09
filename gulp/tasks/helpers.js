import del from 'del';
import paths from './../paths';
import wpEntry from './../webpack/entry';

// Transform Entry point into an Array for defining in gulp file
const entryArray = Object.values(wpEntry);

const srcPath = (file, watch = false) => {
	if (file === 'scss' && watch === false) return paths.entry.scss.main;
	if (file === 'scss' && watch === true) return paths.entry.scss.watch;
	if (file === 'scss/admin' && watch === false) return paths.entry.scss.admin;
	if (file === 'scss/customizer' && watch === false) return paths.entry.scss.customizer;
	if (file === 'svg' && watch === false) return paths.entry.svg;
	if (file === 'svg' && watch === true) return paths.entry.svg;
	if (file === 'js' && watch === false) return entryArray;
	if (file === 'js' && watch === true) return paths.entry.js.watch;
	if (file === 'js/admin' && watch === false) return paths.entry.js.admin;
	if (file === 'js/customizer' && watch === false) return paths.entry.js.customizer;
	console.error('Unsupported file type entered into Gulp Task Runner for Source Path');
};

const distPath = (file) => {
	if ([
		'unminified/css',
		'unminified/css/admin',
		'unminified/css/customizer',
		'unminified/js',
		'unminified/js/admin',
		'unminified/js/customizer',
		'minified/css',
		'minified/css/admin',
		'minified/css/customizer',
		'minified/js',
		'minified/js/admin',
		'minified/js/customizer',
		'minified',
		'images',
	].includes(file)) return `./assets/${file}`;
	console.error('Unsupported file type entered into Gulp Task Runner for Dist Path');
};

const deleteBuild = (mode, assetType) => () => {
	return ['development', 'production'].includes(mode) ? del([distPath(assetType)]) : undefined;
};

export { srcPath, distPath, deleteBuild };