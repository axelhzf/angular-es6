var gulp = require("gulp");
var traceur = require("gulp-traceur");


var gulp = require('gulp');
var gutil = require('gulp-util');
var source = require('vinyl-source-stream');
var watchify = require('watchify');
var es6ify = require("es6ify");

gulp.task('watch', function() {
  var bundler = watchify('./app/client/main.js');

  // Optionally, you can apply transforms
  // and other configuration options on the
  // bundler just as you would with browserify
  bundler.transform(es6ify);
  bundler.on('update', rebundle);

  function rebundle () {
    return bundler.bundle()
      // log errors if they happen
      .on('error', function(e) {
        gutil.log('Browserify Error', e);
      })
      .pipe(source('bundle.js'))
      .pipe(gulp.dest('./app/.client/'))
  }

  return rebundle()
})