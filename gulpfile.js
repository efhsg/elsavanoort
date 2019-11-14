var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var sass        = require('gulp-sass');

//compile scss into css
function style() {
    return gulp.src(['node_modules/bootstrap/scss/bootstrap.scss', 'src/scss/*.scss'])
        .pipe(sass().on('error',sass.logError))
        .pipe(gulp.dest('src/css'))
        .pipe(browserSync.stream());
}
exports.style = style;

//dist js
function js() {
    return gulp.src(['node_modules/bootstrap/dist/js/bootstrap.min.js', 'node_modules/jquery/dist/jquery.min.js', 'node_modules/popper.js/dist/umd/popper.min.js'])
        .pipe(gulp.dest("src/js"))
        .pipe(browserSync.stream());
}
exports.js = js;

function watch() {
    browserSync.init({
        server: {
            baseDir: "./src",
            index: "/index.html"
        }
    });
    gulp.watch('src/scss/**/*.scss', style);
    gulp.watch('./src/*.html').on('change',browserSync.reload);
    gulp.watch('./src/js/**/*.js').on('change', browserSync.reload);
}
exports.watch = watch;

gulp.task('default', watch);