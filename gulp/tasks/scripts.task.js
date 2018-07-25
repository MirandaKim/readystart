
const gulp = require('gulp');
const webpack = require('webpack');

require('./modernizr.task');

/****************************************************/
/*                                                 */
/*   Scripts Gulp Task                            */
/*                                               */
/************************************************/
/*

  - Gulp task for managing/bundling script files.
  - Webpack is used for bundling, see webpack.config.js at root for more details.

  *************
  * Contents: *
  *************

  # Configs
  # Scripts Task
      > Development
      > Production
      > Common

*/

/*************************************/
/*   # Configs                      */
/***********************************/

  let webpackDev = '../../webpack.dev.js';
  let webpackProd = '../../webpack.prod.js';

/*************************************/
/*   # Scripts Task                 */
/***********************************/

/*******************
*  > Development   *
*******************/

gulp.task('scripts', gulp.series('modernizr',(done) => {
  webpack(require(webpackDev), (err, stats) => {
    handleResults(err, stats);
    done(); // DONE!
  });
}));

/******************
*  > Production   *
******************/

gulp.task('scripts--prod', gulp.series('modernizr', (done) => {
  webpack(require(webpackProd), (err, stats) => {
    handleResults(err, stats);
    done(); // DONE!
  });
}));


/**************
*  > Common   *
**************/


function handleResults(err, stats){
  if(err){
    // Show error message
    console.log('WEBPACK ERROR:');
    console.log(err.toString);
  }
  // Show stats in console
  console.log(stats.toString());
}
