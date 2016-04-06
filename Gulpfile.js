var gulp = require('gulp');
var ghPages = require('gulp-gh-pages');
var markdown = require('gulp-markdown');
var rename = require("gulp-rename");

gulp.task('markdown', function () {
    return gulp.src('README.md')
        .pipe(rename("index.md"))
        .pipe(markdown())
        .pipe(gulp.dest('examples'));
});

gulp.task('deploy', ['markdown'], function() {
    return gulp.src('./examples/**/*')
        .pipe(ghPages());
});
