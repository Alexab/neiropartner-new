/* JavaScript documentation generating */
var gulp = require('gulp'),
    config = require('./config'),
    shell = require('gulp-shell');

gulp.task('jsdoc', shell.task( [
    config.jsDocOptions
] ) );
