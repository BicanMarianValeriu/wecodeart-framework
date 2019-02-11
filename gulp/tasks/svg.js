import gulp from 'gulp';
import gulpSVGSprite from 'gulp-svg-sprite'; 
import config from './../config';

import { srcPath } from './index';

const compileSVG = () => {
    return gulp.src(srcPath('svg'))
        .pipe(gulpSVGSprite(config.svgSprite))
        .on('error', console.log.bind(console))
        .pipe(gulp.dest('.'));
};

export { compileSVG };