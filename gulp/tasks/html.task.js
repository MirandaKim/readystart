const gulp = require('gulp');
const inject = require('gulp-inject');
const htmlmin = require('gulp-htmlmin');

/****************************************************/
/*                                                 */
/*   HTML Gulp Task                               */
/*                                               */
/************************************************/
/*

  - Run task 'html' to copy index.html to it's destination while injecting script and style links.
  - This file contains tasks for both development ('html') and production ('html--prod')

  *************
  * Contents: *
  *************

  # Configs
  # HTML Task
    > Development
    > Production
*/

/*************************************/
/*   # Configs                      */
/***********************************/

let srcRoot = 'src/index.html';

let devDest = 'tmp';
let devInjectSrc = [
  'tmp/styles/*.css',
  'tmp/scripts/*.js'
];

let prodDest = 'dist';
let prodInjectSrc = [
  'dist/**/*.js',
  'dist/**/*.css'
];

/*************************************/
/*   # HTML Task                    */
/***********************************/

/*******************
*  > Development   *
*******************/

gulp.task('html', gulp.series(() => {
  return gulp.src(srcRoot) // get index template from src
  .pipe(gulp.dest(devDest)) // copy it into the destination directory
  .pipe(inject(gulp.src( // inject copied version with script and style links
    devInjectSrc,
    {read: false}
  ), {relative: true}))
  .pipe(gulp.dest(devDest)); // save copied version into destination directory
}));


/******************
*  > Production   *
******************/

gulp.task('html--prod', gulp.series(() => {
  return gulp.src(srcRoot) // get index template from src
  .pipe(gulp.dest(prodDest)) // copy it into the destination directory
  .pipe(inject(gulp.src( // inject copied version with script and style links
    prodInjectSrc,
    {read: false}
  ), {relative: true}))
  .pipe(htmlmin({ // minify html
    collapseWhitespace: true,
    removeComments: true
    }))
  .pipe(gulp.dest(prodDest)); // save modified version into destination directory
}));
