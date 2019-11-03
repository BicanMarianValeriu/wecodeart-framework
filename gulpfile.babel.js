'use strict';

import gulp from 'gulp';
import browserSync from 'browser-sync';
import config from './gulp/config';
import { deleteBuild, srcPath, buildScripts, buildStyles } from './gulp/tasks';

const projectSlug = 'wecodeart';

// Browsersync
const bsync = proxy => browserSync.init(config.browserSync(proxy));

// Generic Task
const genericTask = (mode, context = 'building') => {
	let modeName;

	if (mode === 'development') modeName = 'Development Mode';
	else if (mode === 'production') modeName = 'Production Mode';
	else modeName = undefined;

	// Combine all tasks into one array!
	const allBootingTasks = [
		Object.assign(deleteBuild(mode, 'minified/css'), { displayName: `Running Styles Task: Clean - ${modeName}` }),
		Object.assign(buildStyles(mode), { displayName: `Running Styles Task: Build - ${modeName}` }),
		Object.assign(deleteBuild(mode, 'minified/js'), { displayName: `Running Scripts Task: Clean - ${modeName}` }),
		Object.assign(buildScripts(mode), { displayName: `Running Scripts Task: Build - ${modeName}` })
	];

	// Browser Loading & Watching
	const browserLoadingWatching = done => {
		bsync('http://working.on/' + projectSlug);

		// Watch - Styles
		gulp.watch(srcPath('scss', true))
			.on('all', gulp.series(
				Object.assign(deleteBuild(mode, 'unminified/css'), { displayName: `Watching Styles Task: Clean - ${modeName}` }),
				Object.assign(buildStyles(mode), { displayName: `Watching Styles Task: Build - ${modeName}` }),
			), browserSync.reload);

		// Watch - Scripts
		gulp.watch(srcPath('js', true))
			.on('all', gulp.series(
				Object.assign(deleteBuild(mode, 'unminified/js'), { displayName: `Watching Scripts Task: Clean - ${modeName}` }),
				Object.assign(buildScripts(mode), { displayName: `Watching Scripts Task: Build - ${modeName}` }),
			), browserSync.reload);
	};

	// Returning Tasks based on Building Context
	if (context === 'building') {
		return [
			...allBootingTasks,
			Object.assign(browserLoadingWatching, { displayName: `Browser Loading & Watching Task - ${modeName}` }),
		];
	}

	if (context === 'compiling') {
		return [
			Object.assign(deleteBuild(mode, 'minified'), { displayName: `Running Cleaning Task: Clean - ${modeName}` }),
			...allBootingTasks,
		];
	}

	// No Side-Effects Please
	return undefined;
};

// Default Taks
const serve = gulp.series(...genericTask('development', 'building'));
const build = gulp.series(...genericTask('production', 'compiling'));
const defaultTask = gulp.series(...genericTask('development', 'building'));

// Tasks Description 
serve.description = 'Serve compiled source on local server.';
build.description = 'Cleans and build the final source code.';

/**
 * Exports tasks
 * @instructions 
 * `gulp serve` for running local server and watch for file changes 
 * `gulp build` for building final minified code and hash main css/js bundles
 */

// Named Exports
export { serve, build };

// Default
export default defaultTask;