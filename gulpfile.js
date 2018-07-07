
var gulp = require('gulp'),
    sass = require('gulp-sass');

gulp.task('css', function () {
    gulp.src(
        'scss/**/*.scss'
    ).pipe(sass({
        outputStyle: 'compressed',
        errLogToConsole: true
    })
    .on('error', function() {
        sass.logError.apply(this, arguments);
    }))
    .pipe(gulp.dest('static/css'))
});

gulp.task('watch', function() {
  gulp.watch(['scss/**/*.scss', 'scss/**/*.scss'], ['css']);
});

gulp.task('default', ['watch']);
