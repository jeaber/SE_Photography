var gulp    = require('gulp');
var sync    = require('run-sequence');
var browser = require('browser-sync');
var webpack = require('webpack-stream');
var todo    = require('gulp-todoist');

/*
 map of paths for using with the tasks below
 */
var paths = {
    entry: 'src/app/app.js',
    app: ['src/**/*.{js,styl,html}', 'src/**/*.styl'],
    js: 'src/**/*!(.spec.js).js',
    styl: ['src/**/*.styl', 'src/**/*.styl'],
    toCopy: ['src/index.html'],
    html: ['src/index.html', 'src/**/*.html'],
    dest: 'build'
};

gulp.task('todo', function() {
    return gulp.src(paths.js)
        .pipe(todo({silent: false, verbose: true}));
});

gulp.task('build', ['todo'], function() {
    return gulp.src(paths.entry)
        .pipe(webpack(require('./webpack.config')))
        .pipe(gulp.dest(paths.dest));
});

gulp.task('serve', function() {
    browser({
        port: process.env.PORT || 3000,
        open: false,
        ghostMode: false,
        server: {
            baseDir: 'build'
        }
    });
});

/*
 simple task to copy over needed files to dist
 */
gulp.task('copy', function() {
    return gulp.src(paths.toCopy, { base: 'src' })
        .pipe(gulp.dest(paths.dest));
});

/*
 task to watch files for changes and call build and copy tasks
 */
gulp.task('watch', function() {
    gulp.watch(paths.app, ['build', browser.reload]);
    gulp.watch(paths.toCopy, ['copy', browser.reload]);
});

gulp.task('default', function(done) {
    sync('build', 'copy', 'serve', 'watch', done)
});
