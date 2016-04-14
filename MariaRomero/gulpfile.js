const gulp = require('gulp');
const eslint = require('gulp-eslint');
const mocha = require('gulp-mocha');
var allFiles = ['lib/*', 'test/**/*test.js', 'gulpfile.js', 'index.js'];

gulp.task('lint', () => {
  return gulp.src(allFiles)
   .pipe(eslint())
   .pipe(eslint.format());
});

gulp.task('mocha', () => {
  return gulp.src('test/server_test.js')
   .pipe(mocha());
});

gulp.task('default', ['lint', 'mocha']);
