'use strict';

import gulp from 'gulp';
import browserSync from 'browser-sync';
import config from './gulp/config';
import { compileSVG, deleteBuild, srcPath, buildScripts, buildStyles, revisionFiles } from './gulp/tasks';

var project_slug = 'wecodeart';

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
		Object.assign(deleteBuild(mode, 'css'), { displayName: `Running Styles Task: Clean - ${modeName}` }),
		Object.assign(buildStyles(mode), { displayName: `Running Styles Task: Build - ${modeName}` }),
		Object.assign(deleteBuild(mode, 'js'), { displayName: `Running Scripts Task: Clean - ${modeName}` }),
		Object.assign(buildScripts(mode), { displayName: `Running Scripts Task: Build - ${modeName}` })
	];

	// Browser Loading & Watching
	const browserLoadingWatching = done => {
		bsync('http://working.on/' + project_slug);

		// Watch - Styles
		gulp.watch(srcPath('scss', true))
			.on('all', gulp.series(
				Object.assign(deleteBuild(mode, 'css'), { displayName: `Watching Styles Task: Clean - ${modeName}` }),
				Object.assign(buildStyles(mode), { displayName: `Watching Styles Task: Build - ${modeName}` }),
			), browserSync.reload);

		// Watch - Scripts
		gulp.watch(srcPath('js', true))
			.on('all', gulp.series(
				Object.assign(deleteBuild(mode, 'js'), { displayName: `Watching Scripts Task: Clean - ${modeName}` }),
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
			...allBootingTasks,
			Object.assign(compileSVG, { displayName: `Running SVG Task - ${modeName}` }),
			/* Object.assign(deleteBuild(mode, 'build'), { displayName: `Running Cache Busting Task: Clean - ${modeName}` }), */
			/* Object.assign(revisionFiles, { displayName: `Running Cache Busting Task: Revision - ${modeName}` }) */
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
 * `gulp compileSVG` for rebuilding svg sprite if any and is necessary
 * `gulp revision` for re-hashing main css/js bundles if JS bundlers fails to build js before this task
 */

// Named Exports
export { serve, build, compileSVG, revisionFiles as revision };

// Default
export default defaultTask;