'use strict'

const gulp = require('gulp');
const clean = require('gulp-clean');
const usemin = require('gulp-usemin');
const uglify = require('gulp-uglify');
const autoprefixer = require('gulp-autoprefixer');
const cssmin = require('gulp-cssmin');

const cleaner = () => gulp.src('./dist', { allowEmpty: true }).pipe(clean())

const copier = () => {
    gulp.src(['./*.html', './robots.txt']).pipe(gulp.dest('./dist'));

    gulp.src('./scripts/**/*').pipe(gulp.dest('./dist/scripts'));

    gulp.src('./stylesheets/**/*').pipe(gulp.dest('./dist/stylesheets'));

    return gulp.src('././assets/**/*').pipe(gulp.dest('./dist/./assets'));
};

const minifier = () =>
    gulp.src('./dist/**/*.html')
        .pipe(
            usemin({
                js: [uglify],
                css: [autoprefixer, cssmin],
            })
        )
        .pipe(gulp.dest('./dist'));

exports.default = gulp.series(
    cleaner,
    copier,
    minifier
);
