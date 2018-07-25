const gulp = require('gulp');
const modernizr = require('gulp-modernizr');

/****************************************************/
/*                                                 */
/*   Modernizr Gulp Task                          */
/*                                               */
/************************************************/
/*

  - Creates a modernizr script within ~/src/tmp,
    which can be referenced by ~/src/scripts/Vendors.js

  *************
  * Contents: *
  *************

  # Configs
  # Modernizr Task

*/

/*************************************/
/*   # Configs                      */
/***********************************/

var modernizrConfig = require('../../modernizr.config.json');
let src = [
  './src/assets/styles/**/*.css',
  './src/assets/scripts/**/*.js'
];


let tempDest = './src/assets/tmp';


/*************************************/
/*   # Modernizr Task               */
/***********************************/

gulp.task('modernizr', gulp.series(() => {
  return gulp.src(src)
  .pipe(modernizr(modernizrConfig))
  .pipe(gulp.dest(tempDest));
}));
