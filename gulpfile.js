var gulp = require('gulp');
var sass = require('gulp-sass');
var cleanCSS = require('gulp-clean-css');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

gulp.task('init', function () {
    return console.log("Gulp tasks for jQuery Tabs started!");
});

// compile sass file and minify css file
gulp.task('sass', function () {
    return gulp.src('src/scss/jquery.tabs.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('dist/'))
        .pipe(cleanCSS())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('dist/'));
});

// minify js
gulp.task('uglify', function () {
    return gulp.src('src/js/jquery.tabs.js')
        .pipe(uglify({
            output: {
                comments: /^!/
            }
        }))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('dist/'));
});

// watch files
gulp.task('watch', function () {
    gulp.watch('src/scss/*.scss', ['sass']);
    gulp.watch('src/js/jquery.tabs.js', ['uglify'])
});

// default tasks
gulp.task('default', ['init', 'sass', 'uglify']);