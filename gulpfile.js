/* Dependencias */
var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

/* Build que compila */
gulp.task('build', function () {
    gulp.src('source/js/*.js')
    .pipe(concat('scripts.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('build/js/'))
});