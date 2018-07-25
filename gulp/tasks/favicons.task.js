const gulp = require('gulp');


let iconSrc = [
  './src/assets/favicons/*.png'
];

let devDest = 'tmp';
let prodDest = 'dist';

gulp.task('favicons', gulp.series(() => {
  return gulp.src(iconSrc)
  .pipe(gulp.dest(devDest));
}));

gulp.task('favicons--prod', gulp.series(() => {
  return gulp.src(iconSrc)
  .pipe(gulp.dest(prodDest));
}));
