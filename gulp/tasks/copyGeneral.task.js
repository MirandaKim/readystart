const gulp = require('gulp');

/****************************************************/
/*                                                 */
/*   Copy General Files Gulp Task                 */
/*                                               */
/************************************************/
/*

  - Task for moving general files to the destination directory.
    These are files that would not otherwise be moved by the styles, scripts, index, or image processing tasks.
  - This file contains a task for development (copyGeneral) and a task for production (copyGeneral--prod)

  *************
  * Contents: *
  *************

  # Configs
  # Copy General Tasks
    > Development
    > Production

*/

/*************************************/
/*   # Configs                      */
/***********************************/

let devDest = 'tmp';
let prodDest = 'dist';

let copyPaths = [
  // Paths to copy:
  `.src/**/*`,
  // Exclude from copy:
  `!.src/index.html`,
  `!.src/assets`,
  `!.src/assets/images/**`,
  `!.src/assets/styles/**`,
  `!.src/assets/scripts/**`,
  `!.src/tmp`,
  `!.src/tmp/**`
];

/*************************************/
/*   # Copy General Task            */
/***********************************/

/*******************
*  > Development   *
*******************/

gulp.task('copyGeneral', gulp.series(() => {
  console.log(`Copying General to directory ${devDest}`);
  return gulp.src(copyPaths)
    .pipe(gulp.dest(devDest));
}));

/*******************
*  > Production   *
*******************/

gulp.task('copyGeneral--prod', gulp.series(() => {
  console.log(`Copying General to directory ${prodDest}`);
  return gulp.src(copyPaths)
    .pipe(gulp.dest(prodDest));
}));
