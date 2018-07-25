const gulp = require('gulp');
const del = require('del');
const browserSync = require('browser-sync').create();

require('./copyGeneral.task');
require('./images.task');
require('./scripts.task');
require('./styles.task');
require('./html.task');

/****************************************************/
/*                                                 */
/*   Build Gulp Task                              */
/*                                               */
/************************************************/
/*

  - Run task 'build' to optimize src content within the dist directory
  - Run task 'previewDist' to view dist content in the browser

  *************
  * Contents: *
  *************

  # Configs
  # Preview Dist
  # Build Sub Tasks
    > Set Prod Env
    > Begin Clean
  # Build Task

*/

/*************************************/
/*   # Configs                      */
/***********************************/

let distPath = './dist';
let workingPath = './src';

/*************************************/
/*   # Preview Dist                 */
/***********************************/

gulp.task('previewDist', () => {
  browserSync.init({
    notify: false,
    server: {
      baseDir: 'dist'
    }
  });
});

/*************************************/
/*   # Build Sub Tasks              */
/***********************************/

/********************
*  > Set Prod Env   *
********************/

gulp.task('build_setProdEnv', gulp.series((done)=>{
  let envVal = "production";
  console.log(`Environment set to "${envVal}"`);
  process.env.NODE_ENV = envVal;
  done();
}));

/*******************
*  > Begin Clean   *
*******************/

gulp.task('build_beginClean', gulp.series(() => {
  console.log('Deleting distribution directory...');
  return del(distPath);
}));


/*************************************/
/*   # Build Task                   */
/***********************************/

gulp.task('build', gulp.series(
  'build_setProdEnv',
  'build_beginClean',
  'copyGeneral--prod',
  'images--prod',
  'scripts--prod',
  'styles--prod',
  'html--prod',
  (done) => {
    console.log(`
      -- --- ----------------------- --- --
      -- --- BUILD COMPLETE (~/dist) --- --
      -- --- ----------------------- --- --
      `);
    done();
}));
