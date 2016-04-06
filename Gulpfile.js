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

gulp.task('build', ['copy-minitracker', 'markdown'], function () {
    return gulp.src('examples/**/*')
        .pipe(htmlreplace({
            'minitracker': '../minitracker.js'
        }))
        .pipe(gulp.dest('dist'));
});

gulp.task('deploy', ['build'], function() {
    return gulp.src('./examples/**/*')
        .pipe(ghPages());
});
