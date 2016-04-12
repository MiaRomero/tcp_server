const gulp = require('gulp');
const eslint = require('gulp-eslint');
const mocha = require('gulp-mocha');
var allFiles = ['/lib/*', '/test/**/*test.js', 'gulpfile.js', 'index.js'];

gulp.task('lint', function() {
  return gulp.src(allFiles)
   .pipe(eslint())
   .pipe(eslint.format());
});

gulp.task('mocha', function(){
  return gulp.src('test/readFiles_test.js')
   .pipe(mocha());
});

gulp.task('default', ['lint', 'mocha']);
