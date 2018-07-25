const gulp = require('gulp');
const postcss = require('gulp-postcss');
const cssnano = require('gulp-cssnano');
const autoprefixer = require('autoprefixer');
const cssvars = require('postcss-simple-vars');
const nested = require('postcss-nested');
const cssImport = require('postcss-import');
const mixins = require('postcss-mixins');
const hexRgba = require('postcss-hexrgba');
const presetEnv = require('postcss-preset-env');

/****************************************************/
/*                                                 */
/*   Styles Gulp Task                             */
/*                                               */
/************************************************/
/*

  - Postcss is used to process the style files.
  - An error handler is included so browserSync will not be interrupted
    if watch task is active
  - This file contains a task for development (styles) and a task for production (styles--prod)

  *************
  * Contents: *
  *************

  # Configs
  # Style Tasks
    > Development
    > Production

*/

/*************************************/
/*   # Configs                      */
/***********************************/

var srcStyles = './src/assets/styles/styles.css';
var destDev = './tmp/styles';
var destProd = './dist/assets';

let basePlugins = [ // include plugins common to all process environments
  cssImport,
  mixins,
  cssvars,
  nested,
  hexRgba,
  autoprefixer,
  presetEnv
];

let devPlugins = []; // include any plugins unique to the development environment

let prodPlugins = []; // include any plugins unique to the production environment

/*************************************/
/*   # Styles Tasks                 */
/***********************************/

/*******************
*  > Development   *
*******************/

gulp.task('styles', gulp.series(() => {
  console.log('Loading styles for a development environment...');
  let plugins = basePlugins.concat(devPlugins);
  console.log(`Post CSS plugin count: ${plugins.length}`);
  return gulp.src(srcStyles)
  .pipe(postcss(plugins)) // postcss processing
  .on('error', function(errorInfo){ // hande error (keep the watch task from breaking)
    console.log(errorInfo.toString());
    this.emit('end');
  })
  .pipe(gulp.dest(destDev));
}));

/*******************
*  > Production   *
*******************/

gulp.task('styles--prod', gulp.series(() => {
  console.log('Loading styles for a production environment...');
  let plugins = basePlugins.concat(prodPlugins);
  console.log(`Post CSS plugin count: ${plugins.length}`);
  return gulp.src(srcStyles)
  .pipe(postcss(plugins)) // postcss processing
  .pipe(cssnano()) // minimize resulting css
  .on('error', function(errorInfo){ // handle error
    console.log(errorInfo.toString());
    this.emit('end');
  })
  .pipe(gulp.dest(destProd));
}));
