var gulp = require('gulp'),
watch = require('gulp-watch'),
browserSync = require('browser-sync').create();

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

  browserSync.init({
    notify: false,
    server: {
      baseDir: "../08_01_Capstone-Colmar_Academy"
    }
  });

  watch('./index.html', function() {
    browserSync.reload();
  });

  watch('./resources/css/**/*.css', function() {
    gulp.start('cssInject');
  });
});

gulp.task('cssInject', ['styles'],function() {
  return gulp.src('./resources/css/style.css')
    .pipe(browserSync.stream());
});
