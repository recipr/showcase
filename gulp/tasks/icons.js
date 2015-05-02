var gulp = require("gulp");
var sketch = require("gulp-sketch");
var svgstore = require('gulp-svgstore');
var svgmin = require('gulp-svgmin');
var cheerio = require('gulp-cheerio');
var config = require('../config').icons;

gulp.task('icons', function(){
  gulp.src(config.src)
    .pipe(sketch({
      export: 'artboards',
      formats: 'svg'
    }))
    .pipe(cheerio({
      run: function ($) {
          $('[fill]').removeAttr('fill');
      },
      parserOptions: { xmlMode: true }
    }))
    .pipe(svgmin())
    .pipe(gulp.dest(config.dest))
    .pipe(svgmin())
    .pipe(svgstore())
    .pipe(gulp.dest(config.dest));
});