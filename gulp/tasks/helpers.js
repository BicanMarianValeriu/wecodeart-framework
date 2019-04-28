import gulp from 'gulp';
import del from 'del';
import merge from 'merge-stream';
import gulpRevAll from 'gulp-rev-all';
import paths from './../paths';
import wpEntry from './../webpack/entry';

// Transform Entry point into an Array for defining in gulp file
const entryArray = Object.values(wpEntry);

const srcPath = (file, watch = false) => {
	if (file === 'scss' && watch === false) return paths.entry.scss.main;
	if (file === 'scss/admin' && watch === false) return paths.entry.scss.admin;
	if (file === 'scss/customizer' && watch === false) return paths.entry.scss.customizer;
	if (file === 'scss' && watch === true) return paths.entry.scss.watch;
	if (file === 'svg' && watch === false) return paths.entry.svg;
	if (file === 'svg' && watch === true) return paths.entry.svg;
	if (file === 'js' && watch === false) return entryArray;
	if (file === 'js/admin' && watch === false) return paths.entry.js.admin;
	if (file === 'js/customizer' && watch === false) return paths.entry.js.customizer;
	if (file === 'js' && watch === true) return paths.entry.js.watch;
	console.error('Unsupported file type entered into Gulp Task Runner for Source Path');
};

const distPath = (file) => {
	if ([
		'css',
		'css/admin',
		'css/customizer',
		'js',
		'js/admin',
		'js/customizer',
		'images', 
		'svg', 
		'build'
	].includes(file)) return `./assets/${file}`;
	console.error('Unsupported file type entered into Gulp Task Runner for Dist Path');
};

const deleteBuild = (mode, assetType) => () => {
	return ['development', 'production'].includes(mode) ? del([distPath(assetType)]) : undefined;
};

const revisionFiles = () => { 
	let stream1 = gulp.src(distPath('css').concat('/**/*.css'))
		.pipe(gulpRevAll.revision())
		.pipe(gulp.dest(paths.output.build.concat('/css')));
	let stream2 = gulp.src(distPath('js').concat('/**/*.js'))
		.pipe(gulpRevAll.revision())
		.pipe(gulp.dest(paths.output.build.concat('js')));
	// Run merge
	return merge(stream1, stream2);
};

export { srcPath, distPath, deleteBuild, revisionFiles };