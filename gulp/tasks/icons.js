var gulp = require("gulp");
var sketch = require("gulp-sketch");
var config = require('../config').icons;

gulp.task('icons', function(){
  gulp.src(config.src)
    .pipe(sketch({
      export: 'artboards',
      formats: 'svg'
    }))
    .pipe(gulp.dest(config.dest));

  console.log('build icons to ' + config.dest);
});