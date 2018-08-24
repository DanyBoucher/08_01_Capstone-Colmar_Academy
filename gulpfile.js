var gulp = require('gulp'),
watch = require('gulp-watch');

gulp.task('default', function() {
  console.log('Hooray...________________________________________________________!');
});

gulp.task('html', function() {
  console.log("Imagine something useful being done to your HTML here____________html___________");
});

gulp.task('styles', function() {
  console.log("Imagine Sass or PostCSS tasks running here____________css________________");
});

gulp.task('watch', function() {
  watch('./index.html', function() {
    gulp.start('html');
  });

  watch('./resources/css/**/*.css', function() {
    gulp.start('styles');
  });
});
