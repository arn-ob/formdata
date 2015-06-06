var gulp = require('gulp'),
    mocha = require('gulp-mocha'),
    util = require('gulp-util');

gulp.task('test', function (done) {
    return gulp.src(['test/**/*.js'], { read: false })
        .pipe(mocha({ reporter: 'spec' }))
        .on('error', util.log);
});

gulp.task('watch-test', function () {
    gulp.watch(['views/**', 'public/**', 'app.js', 'framework/**', 'test/**'], ['test']);
});