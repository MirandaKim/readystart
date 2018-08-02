const gulp = require('gulp');
const browserSync = require('browser-sync').create();

/****************************************************/
/*                                                 */
/*   Preview Distribution Task                    */
/*                                               */
/************************************************/
/*

  - Run task 'gulp previewDist' to preview the distribution content in the browser.

  *************
  * Contents: *
  *************

  # Configs
  # Preview Dist

*/

/*************************************/
/*   # Configs                      */
/***********************************/

let distPath = 'dist';

/*************************************/
/*   # Preview Dist                 */
/***********************************/

gulp.task('previewDist', () => {
  browserSync.init({
    notify: false,
    server: {
      baseDir: distPath,
      port: 3010
    }
  });
});
