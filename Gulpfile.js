var gulp = require('gulp');
var ghPages = require('gulp-gh-pages');
var markdown = require('gulp-markdown');
var rename = require("gulp-rename");
var htmlreplace = require('gulp-html-replace');

gulp.task('markdown', function () {
    return gulp.src('README.md')
        .pipe(rename("index.md"))
        .pipe(markdown())
        .pipe(gulp.dest('examples'));
});

gulp.task('copy-minitracker', function () {
    return gulp.src('build/minitracker.js')
        .pipe(gulp.dest('dist'));
});

gulp.task('copy-examples', function () {
    return gulp.src('examples/**/*')
        .pipe(gulp.dest('dist'));
});

gulp.task('build', ['copy-examples', 'copy-minitracker', 'markdown'], function () {
    return gulp.src('examples/**/*.html')
        .pipe(htmlreplace({
            'minitracker': '../minitracker.js'
        }))
        .pipe(gulp.dest('dist'));
});

gulp.task('deploy', ['build'], function() {
    return gulp.src('./dist/**/*')
        .pipe(ghPages());
});
