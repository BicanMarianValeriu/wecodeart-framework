import gulp from 'gulp';
import pump from 'pump';
import gulpBabel from 'gulp-babel';
import gulpUglify from 'gulp-uglify';
import gulpSourcemaps from 'gulp-sourcemaps';
import vinylNamed from 'vinyl-named';
import browserSync from 'browser-sync';
import through from 'through2';
import webpack from 'webpack';
import webpackStream from 'webpack-stream';

import { srcPath, distPath } from './index';

// This runs the same after any compiler
const afterBundler = (mode, dest) => {
	return [
		gulpSourcemaps.init({ loadMaps: true }),
		through.obj(function (file, enc, cb) {
			const isSourceMap = /\.map$/.test(file.path);
			if (!isSourceMap) this.push(file);
			cb();
		}),
		gulpBabel(),
		...((mode === 'production') ? [gulpUglify()] : []),
		gulpSourcemaps.write('./'),
		gulp.dest(dest),
		browserSync.stream()
	];
};

// Build Scripts Task
const buildScripts = (mode) => (done) => {
	let streamMode, streamGutenberg;
	if (mode === 'development') {
		streamMode = require('./../webpack/config.development.js');
		streamGutenberg = require('./../webpack/config.gutenberg.development.js');
	} else if (mode === 'production') {
		streamMode = require('./../webpack/config.production.js');
		streamGutenberg = require('./../webpack/config.gutenberg.production.js');
	} else {
		streamMode = undefined;
		streamGutenberg = undefined;
	}

	const pumps = () => {
		// Main Frontend
		pump([
			gulp.src(srcPath('js')),
			vinylNamed(),
			webpackStream(streamMode, webpack),
			...afterBundler(mode, (mode === 'production') ? distPath('minified/js') : distPath('unminified/js'))
		], done);

		// Gutenberg
		pump([
			gulp.src(srcPath('js/gutenberg')), 
			vinylNamed(),
			webpackStream(streamGutenberg, webpack),
			...afterBundler(mode, (mode === 'production') ? distPath('minified/js/gutenberg') : distPath('unminified/js/gutenberg'))
		], done);

		// Admin
		pump([
			gulp.src(srcPath('js/admin')), 
			vinylNamed(), 
			...afterBundler(mode, (mode === 'production') ? distPath('minified/js/admin') : distPath('unminified/js/admin'))
		], done);

		// Customizer
		pump([
			gulp.src(srcPath('js/customizer')), 
			vinylNamed(), 
			...afterBundler(mode, (mode === 'production') ? distPath('minified/js/customizer') : distPath('unminified/js/customizer'))
		], done);
	};

	['development', 'production'].includes(mode) ? pumps() : undefined;
};

export { buildScripts };