/* Dependencias */
var gulp = require('gulp');
const imagemin = require('gulp-imagemin');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');

/* Comprime imagenes */
gulp.task('imagenes', () =>
    gulp.src('source/images/*/**')
        .pipe(imagemin())
        .pipe(gulp.dest('build/images'))
);

/* Actualiza el css en build/css cuando hay cambios en el scss de src/scss */
gulp.task('css', function () {
    console.log('Cambios en el scss actualiza css...');
    gulp.src('source/scss/*.scss')
        .pipe(sass({ outputStyle: "compressed" }))
        .pipe(gulp.dest('build/css'));
});

/* Javascript minified  */
gulp.task('minify', function () {
    gulp.src('source/js/*.js')
        .pipe(concat('scripts.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('build/js/'))
});

/* Browsersync */
gulp.task('browserSync', function () {
    browserSync.init({
        server: {
            baseDir: 'build'
        }
    });
});

gulp.task('watch-js', ['browserSync'], function () {
    gulp.watch('build/index.html', browserSync.reload); //  Actualiza automaticamente el index
    gulp.watch('build/css/*.css', browserSync.reload);	//  Actualiza automaticamente la carpeta css
    gulp.watch('source/js/*.js', ['minify']);  // Automatización del js, no es necesario correr gulp para actualizar el archivo minificado
    gulp.watch('source/scss/**/*.scss', ['css']); // Automatización del css, no es necesario correr gulp de nuevo
});

/* Build que compila */
gulp.task('build', ['watch-js', 'css', 'imagenes'], function () {
    console.log('Gulp se está ejecutando...');
});