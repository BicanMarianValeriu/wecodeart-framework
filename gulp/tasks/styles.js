import gulp from 'gulp';
import pump from 'pump';
import browserSync from 'browser-sync';
import autoprefixer from 'autoprefixer';
import gulpSASS from 'gulp-sass';
//import gulpRevAll from 'gulp-rev-all';
import gulpPostCSS from 'gulp-postcss';
import gulpCleanCSS from 'gulp-clean-css';
import gulpSourcemaps from 'gulp-sourcemaps';

import { srcPath, distPath } from './index';

import config from './../config';

// Build Styles Task
const processStyles = (mode, { entry, output }) => {
    let outputStyle;
    if (mode === 'development') outputStyle = 'nested';
    else if (mode === 'production') outputStyle = 'compressed';
    else outputStyle = undefined;

    const postcssPlugins = [
        autoprefixer(config.autoprefixer)
    ];

    return [
        gulp.src(entry),
        gulpSourcemaps.init({ loadMaps: true }),
        gulpSASS({ outputStyle }),
        ...((mode === 'production') ? [gulpCleanCSS(config.cleanCSS)] : []),
        gulpPostCSS(postcssPlugins),
        gulpSourcemaps.write('./'),
        /* ...((mode === 'production') ? [gulpRevAll.revision()] : []), */
        gulp.dest(output),
        browserSync.stream(),
    ];
};

// Build Styles Task
const buildStyles = (mode) => (done) => {
    const pumps = () => {
        // FrontEnd CSS ( Gutenberg Frontend CSS imported into frontend SCSS )
        pump(processStyles(mode, {
            entry: srcPath('scss'),
            output: (mode === 'production') ? distPath('minified/css') : distPath('unminified/css')
        }), done);

        // Admin CSS
        pump(processStyles(mode, {
            entry: srcPath('scss/admin'),
            output: (mode === 'production') ? distPath('minified/css/admin') : distPath('unminified/css/admin')
        }), done);

        // Customizer CSS
        pump(processStyles(mode, {
            entry: srcPath('scss/customizer'),
            output: (mode === 'production') ? distPath('minified/css/customizer') : distPath('unminified/css/customizer')
        }), done);
    };

    ['development', 'production'].includes(mode) ? pumps() : undefined;
};

export { buildStyles };