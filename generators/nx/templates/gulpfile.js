'use strict';

const gulp = require('gulp');
const usage = exec(`${cmd} -h`).toString().trim();

require('@jswork/next');
require('@jswork/next-absolute-package');
require('@jswork/next-get-key');

gulp.task('docs', function () {
  return gulp
    .src('docs/template.md')
    .pipe($.replace('__USAGE__', usage))
    .pipe(
      $.rename(function (path) {
        path.dirname = '..';
        path.basename = 'README';
        return path;
      })
    )
    .pipe(gulp.dest('dist'));
});

gulp.task('default', gulp.series(['clean', 'docs']));
