/**
 * This is a rudimentary build script. It doesn't webpack or compress. It just copies
 * known dependencies (hard coded below) into the dist/ folder for use with `firebase deploy`.
 */
const gulp = require('gulp');

gulp.task('build', ['copy_root', 'copy_app', 'copy_node_modules']);

gulp.task('copy_root', function() {
  gulp.src([
    './index.html',
    './styles.css',
    './systemjs.config.js'
  ])
    .pipe(gulp.dest('./dist/'));
});

gulp.task('copy_app', function() {
  gulp.src([
    './app/**.js',
    './app/**.js.map',
    './app/**.css'
  ])
    .pipe(gulp.dest('./dist/app'));
});

gulp.task('copy_node_modules', function() {
  gulp.src([
    'node_modules/firebase/firebase.js',
    'node_modules/@angular/**',
    'node_modules/angular2-in-memory-web-api/**',
    'node_modules/rxjs/**',
    'node_modules/firebase/firebase.js',
    'node_modules/angularfire2/**',
    'node_modules/core-js/client/shim.min.js',
    'node_modules/zone.js/dist/zone.js',
    'node_modules/reflect-metadata/Reflect.js',
    'node_modules/systemjs/dist/system.src.js',
    'systemjs.config.js'
  ], { "base" : "." })
  .pipe(gulp.dest('./dist/'));
});