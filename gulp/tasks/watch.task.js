const gulp = require('gulp');
const watch = require('gulp-watch');
const browserSync = require('browser-sync').create();

/****************************************************/
/*                                                 */
/*   Watch Gulp Task                             */
/*                                               */
/************************************************/
/*

  - Watch tasks intend to update the browser when changes are made to
    the specified files. These updates will trigger either a broser refresh
    or an injection (files changed without refresh).
  - Watch task uses BrowserSync to connect with the browser(s)

  *************
  * Contents: *
  *************

  # Imports
  # Watch Task
    > HTML
    > Scripts
    > Styles

*/

/********************************/
/*   # Watch Task              */
/******************************/

gulp.task('watch', gulp.series(() => {
  browserSync.init({
    notify: false,
    server: {
      baseDir: "tmp"
    }
  });

  /*************
  *   > HTML   *
  **************
  If the working index.html is modified, reload the browser(s)
  */
  watch('./src/index.html', gulp.series('html', () => {
    browserSync.reload();
  }));

  /****************
  *   > Scripts   *
  *****************
  If any of the working script files are modified, reload the browser(s)
  */
  watch('./src/assets/scripts/**/*.js', gulp.series('scripts', () => {
    browserSync.reload();
  }));

  /***************
  *   > Styles   *
  ****************
  If any of the working style files are modified, sync the css (task: cssInject)
  (this will update the browser window to the current css WITHOUT refreshing)
  */
  watch('./src/assets/styles/**/*.css', gulp.series('styles', () => {
    return gulp.src('./tmp/styles/styles.css')
    .pipe(browserSync.stream());
  }));
}));
