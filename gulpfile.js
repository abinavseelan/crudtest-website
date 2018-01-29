const gulp = require('gulp');
const sass = require('gulp-sass');
const cleanCSS = require('gulp-clean-css');
const connect = require('gulp-connect');

gulp
  .task('sass:dev', () => (
    gulp
      .src('./styles/**/*.scss')
      .pipe(sass())
      .pipe(gulp.dest('./styles'))
      .pipe(connect.reload())
  ));


gulp
  .task('sass:prod', () => (
    gulp
      .src('./styles/**/*.scss')
      .pipe(sass())
      .pipe(cleanCSS({ compatibility: 'ie8' }))
      .pipe(gulp.dest('./styles'))
  ));

gulp.task('start', () => {
  connect.server({
    port: 8080
  });
});

gulp.task('default', ['sass:dev', 'start', 'watch']);

gulp.task('watch', () => {
  gulp.watch('./styles/**/*.scss', ['sass:dev']);
});
