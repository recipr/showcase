var gulp = require('gulp');
var svgstore = require('gulp-svgstore');
var svgmin = require('gulp-svgmin');
var config = require('../config').icons;

gulp.task('svgstore', function () {
  return gulp
    .src(config.dest + '/*.svg')
    .pipe(svgmin())
    .pipe(svgstore())
    .pipe(gulp.dest(config.dest));
});