'use strict';

import gulp from 'gulp';
import babel from 'gulp-babel';
import uglify from 'gulp-uglify';
import sass from 'gulp-sass';
import rename from 'gulp-rename';
import sourcemaps from 'gulp-sourcemaps';
import autoprefixer from 'gulp-autoprefixer';
import cleanCSS from 'gulp-clean-css';
import svgSprite from 'gulp-svg-sprite';
import merge from 'merge-stream';
import browserify from 'browserify';
import browserSync from 'browser-sync';
import source from 'vinyl-source-stream';
import buffer from "vinyl-buffer";
import babelify from 'babelify';
import path from 'path';

var project_slug = 'wecodeart';

// Paths
var paths = {

	theme: __dirname,

	css: {
		src: './assets/css/*.css',
		dest: __dirname + '/assets/css/',
	},

	scss: {
		src: './src/scss/**/*',
		main: __dirname + '/src/scss/style.scss',
		customizer: __dirname + '/src/scss/customizer/**/*.scss'
	},

	js: {
		src: './src/js/**/*',
		main: __dirname + '/src/js/frontend.js',
		file: 'bundle.js',
		customizer: __dirname + '/src/js/customizer/**/*.js',
		dest: __dirname + '/assets/js/'
	},

	svg: {
		src: __dirname + '/src/svg/**/*.svg',
		dest: __dirname + '/assets/images/'
	}
};

// Autoprefixer options
var autoprefixerOptions = {
	browsers: ['last 3 versions', '> 5%', 'Firefox ESR']
};

// SVG Sprite Builder
var svgBuildOptions = {
	mode: {
		symbol: { // symbol mode to build the SVG
			dest: paths.svg.dest, // destination folder
			sprite: 'sprite.svg', //sprite name
			example: true // Build sample page
		}
	},
	svg: {
		xmlDeclaration: false, // strip out the XML attribute
		doctypeDeclaration: false // don't include the !DOCTYPE declaration
	}
};

// Bundle Options
var bundle = browserify({
	entries: [paths.js.main],
	debug: true
}).transform(babelify, { presets: ['@babel/preset-env'] });

// Browsersync
var bsync = function (proxy) {
	if (proxy) {
		browserSync.init({
			proxy: proxy
		});
	} else {
		browserSync.init({
			server: {
				baseDir: './'
			},
			online: true
		});
	}
};

/**
 * Listen to CSS/JS Changes
 */
// Watch JS
const watchScript = () => {
	var stream1 = bundle.bundle()
		.pipe(source(paths.js.file))
		.pipe(buffer())
		.pipe(babel())
		.pipe(gulp.dest(paths.js.dest))
		.pipe(browserSync.reload({ stream: true }));
	var stream2 = gulp.src(paths.js.customizer)
		.pipe(babel())
		.pipe(rename(function (file) {
			file.dirname = path.join('customizer', file.dirname);
			file.basename = file.basename;
			file.extname = '.js';
		}))
		.pipe(gulp.dest(paths.js.dest))
		.pipe(browserSync.reload({ stream: true }));
	// Run merge
	return merge(stream1, stream2);
};

// Watch CSS
const watchStyle = () => {
	var stream1 = gulp.src(paths.scss.main)
		.pipe(sourcemaps.init())
		.pipe(sass())
		.on('error', console.log.bind(console))
		.pipe(autoprefixer(autoprefixerOptions))
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest(paths.css.dest))
		.pipe(browserSync.reload({ stream: true }));
	// Customizer.css
	var stream2 = gulp.src(paths.scss.customizer)
		.pipe(sass())
		.on('error', console.log.bind(console))
		.pipe(autoprefixer(autoprefixerOptions))
		.pipe(rename(function (file) {
			file.dirname = path.join('customizer', file.dirname);
			file.basename = file.basename;
			file.extname = '.css';
		}))
		.pipe(gulp.dest(paths.css.dest))
		.pipe(browserSync.reload({ stream: true }));
	// Run merge
	return merge(stream1, stream2);
};


/**
 * Compile Tasks
 */
// Javascript
const compileScript = () => {
	var stream1 = bundle.bundle()
		.pipe(source(paths.js.file))
		.pipe(buffer())
		.pipe(babel())
		.pipe(uglify())
		.pipe(gulp.dest(paths.js.dest))
		.pipe(browserSync.reload({ stream: true }));
	var stream2 = gulp.src(paths.js.customizer)
		.pipe(babel())
		.pipe(uglify())
		.pipe(rename(function (file) {
			file.dirname = path.join('customizer', file.dirname);
			file.basename = file.basename;
			file.extname = '.js';
		}))
		.pipe(gulp.dest(paths.js.dest))
		.pipe(browserSync.reload({ stream: true }));
	// Run merge
	return merge(stream1, stream2);
};

// Styles
const compileStyle = () => {
	// Optimized css
	var options = { level: { 1: { specialComments: false } } };
	var stream1 = gulp.src(paths.scss.main)
		.pipe(sass())
		.pipe(autoprefixer(autoprefixerOptions))
		.pipe(cleanCSS(options))
		.pipe(gulp.dest(paths.css.dest));
	// Customizer.css
	var stream2 = gulp.src(paths.scss.customizer)
		.pipe(sass())
		.pipe(autoprefixer(autoprefixerOptions))
		.pipe(cleanCSS(options))
		.pipe(rename(function (file) {
			file.dirname = path.join('customizer', file.dirname);
			file.basename = file.basename;
			file.extname = '.css';
		}))
		.pipe(gulp.dest(paths.css.dest));
	// Theme style.css
	var stream3 = gulp.src(paths.scss.main)
		.pipe(sass())
		.pipe(autoprefixer(autoprefixerOptions))
		.pipe(cleanCSS({ level: { 1: { specialComments: true } } }))
		.pipe(gulp.dest(paths.theme));
	// Run merge
	return merge(stream1, stream2, stream3);
};

// SVG Image
const compileSVG = () => {
	return gulp.src(paths.svg.src).pipe(svgSprite(svgBuildOptions)).on('error', console.log.bind(console)).pipe(gulp.dest('.'));
};

// Start Dev Server
const startServer = () => {
	// If you are using other named local url than this change to localhost or your url
	bsync('http://working.on/' + project_slug);
	return gulp.watch(paths.scss.src, gulp.series('watchCSS')), gulp.watch(paths.js.src, gulp.series('watchJS'));
};

// Series/Parallel Tasks
const compile = gulp.parallel(compileScript, compileStyle);
const serve = gulp.series(compile, startServer); // Compile first then run server
const watch = gulp.parallel(watchStyle, watchScript); // Run both tasks in parallel

// Default Taks
const defaultTasks = gulp.parallel(serve, watch);

// Final Build Task
const build = gulp.series(compile, compileSVG);

// Tasks Description
watch.description = 'Watch for changes to CSS/JS source.';
serve.description = 'Serve compiled source on local server.';
build.description = 'Cleans and build the final source code.';

/**
 * Exports tasks
 * @note
 * You will mostly use the following
 * --- "gulp serve" to to compile fresh code and watch for future changes while live reloading
 * --- "gulp build" to bundle your code into a optimized file (css/js)
 * However other tasks are available and named bellow
 */
// Clean/Serve/Watch/Compile/Build/Revision
export {
	compileSVG as compileSVG,
	compileScript as compileJS,
	compileStyle as compileCSS,
	watchStyle as watchCSS,
	watchScript as watchJS,
	compile,
	serve,
	watch,
	build
};
// Default
export default defaultTasks;