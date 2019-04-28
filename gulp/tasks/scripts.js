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
	let streamMode;
	if (mode === 'development') streamMode = require('./../webpack/config.development.js');
	else if (mode === 'production') streamMode = require('./../webpack/config.production.js');
	else streamMode = undefined;

	const pumps = () => {
		// Main Frontend
		pump([
			gulp.src(srcPath('js')),
			vinylNamed(),
			webpackStream(streamMode, webpack),
			...afterBundler(mode, distPath('js'))
		], done);

		// Admin
		pump([ gulp.src(srcPath('js/admin')), vinylNamed(), ...afterBundler(mode, distPath('js/admin')) ], done);

		// Customizer
		pump([ gulp.src(srcPath('js/customizer')), vinylNamed(), ...afterBundler(mode, distPath('js/customizer')) ], done);
	};

	['development', 'production'].includes(mode) ? pumps() : undefined;
};

export { buildScripts };