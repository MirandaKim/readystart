const gulp  = require('gulp');
const imagemin = require('gulp-imagemin');
/****************************************************/
/*                                                 */
/*   Images Gulp Task                             */
/*                                               */
/************************************************/
/*

  - Gulp task for minimizing image files for for the destination directory
  - This file contains a task for development (images) and a task for production (images--prod)

  *************
  * Contents: *
  *************

  # Configs
  # Images Task
      > Development
      > Production

*/

/*************************************/
/*   # Configs                      */
/***********************************/

let prodDest = './dist/assets/images';
let devDest = './tmp/assets/images';

let imageSrc = [
    /* Images to optimize */
    `./src/assets/images/**/*`
    /* Exclude from optimization */
    //`!./src/assets/images/icons/**/*`, // consider excluding this path if a sprite is made of the icons
    //`!./src/assets/images/icons/**/*` // consider excluding this path if a sprite is made of the icons
  ];

  let imageConfig = {
      progressive: true, // optimize jpg
      interlaced: true, // optimize gif
      multipass: true // optimize svg
  }

/*************************************/
/*   # Images Task                  */
/***********************************/

/*******************
*  > Development   *
*******************/

gulp.task('images', gulp.series(() => {
  console.log('Optimizing images...')
  return gulp.src(imageSrc)
    .pipe(imagemin(imageConfig))
    .pipe(gulp.dest(devDest));
}));

/******************
*  > Production   *
******************/

gulp.task('images--prod', gulp.series(() => {
  console.log('Optimizing images...')
  return gulp.src(imageSrc)
    .pipe(imagemin(imageConfig))
    .pipe(gulp.dest(prodDest));
}));
