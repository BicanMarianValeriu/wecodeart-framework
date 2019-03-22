import gulp from 'gulp';
import path from 'path';
import pump from 'pump';
//import merge from 'merge';
import gulpBabel from 'gulp-babel';
import gulpRename from 'gulp-rename';
import gulpUglify from 'gulp-uglify';
import gulpSourcemaps from 'gulp-sourcemaps';
import vinylNamed from 'vinyl-named';
import browserSync from 'browser-sync';
import through from 'through2';
import webpack from 'webpack';
import webpackStream from 'webpack-stream';

import { srcPath, distPath } from './index';

import paths from './../paths';

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
			gulpSourcemaps.init({ loadMaps: true }),
			through.obj(function (file, enc, cb) {
				const isSourceMap = /\.map$/.test(file.path);
				if (!isSourceMap) this.push(file);
				cb();
			}),
			gulpBabel(),
			...((mode === 'production') ? [gulpUglify()] : []),
			gulpSourcemaps.write('./'),
			gulp.dest(distPath('js')),
			browserSync.stream(),
		], done);

		// Customizer
		pump([
			gulp.src(paths.entry.js.customizer),
			vinylNamed(),
			gulpSourcemaps.init({ loadMaps: true }),
			through.obj(function (file, enc, cb) {
				const isSourceMap = /\.map$/.test(file.path);
				if (!isSourceMap) this.push(file);
				cb();
			}),
			gulpBabel(),
			...((mode === 'production') ? [gulpUglify()] : []),
			gulpRename(file => file.dirname = path.join('customizer', file.dirname)),
			gulpSourcemaps.write('./'),
			gulp.dest(distPath('js')),
			browserSync.stream(),
		], done);
	};

	['development', 'production'].includes(mode) ? pumps() : undefined;
};

export { buildScripts };