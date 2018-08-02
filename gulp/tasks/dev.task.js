const gulp = require('gulp');

require('./copyGeneral.task');
require('./images.task');
require('./favicons.task');
require('./scripts.task');
require('./styles.task');
require('./html.task');

/****************************************************/
/*                                                 */
/*   Dev Gulp Task                                */
/*                                               */
/************************************************/
/*

  - Run task 'dev' to process src files into a tmp directory for development


  *************
  * Contents: *
  *************

  # Configs
  # Build Sub Tasks
    > Set Prod Env
    > Begin Clean
  # Build Task

*/

/*************************************/
/*   # Dev Sub Tasks                */
/***********************************/

/*******************
*  > Set Dev Env   *
*******************/

gulp.task('dev_setDevEnv', gulp.series((done) => {
  let envVal = "development";
  console.log(`Environment set to "${envVal}"`);
  process.env.NODE_ENV = envVal;
  done();
}));

/*************************************/
/*   # Dev Task                     */
/***********************************/

gulp.task('dev', gulp.series(
  'dev_setDevEnv',
  'styles',
  'scripts',
  'html',
(done) => {
  console.log(`
      -- --- ---------------------- --- --
      -- --- BUILD COMPLETE (~/tmp) --- --
      -- --- ---------------------- --- --
      `);
  done();
}));
