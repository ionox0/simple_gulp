var gulp = require('gulp');
var gutil = require('gulp-util');

var sass = require('gulp-ruby-sass');

gulp.task('sass', function () {
  gulp.src('./assets/styles/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./assets/styles'));
    console.log("1");
});

gulp.task('default', ['sass']);