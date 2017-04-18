var gulp = require('gulp');
var less = require('gulp-less');
var cleanCSS = require('gulp-clean-css');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var plumber = require('gulp-plumber');
var notify = require('gulp-notify');
var pug = require('gulp-pug');
var imagemin = require('gulp-imagemin');

gulp.task('pug', function() {
  return gulp.src('app/index.pug')
    .pipe(pug())
    .on('error', notify.onError("<%= error.message %>"))
    .pipe(gulp.dest('public'))
    .pipe(reload({ stream:true }));
});

gulp.task('less', function() {
  return gulp.src('app/less/main.less')
    .pipe(plumber({errorHandler: notify.onError("<%= error.message %>")}))
    .pipe(sourcemaps.init())
    .pipe(less())
    .pipe(cleanCSS())
    .pipe(autoprefixer())
    .pipe(sourcemaps.write('.', { sourceRoot: 'css-source' }))
    .pipe(gulp.dest('public/css'))
    .pipe(reload({ stream:true }));
});

gulp.task('js', function() {
  return gulp.src('app/js/main.js')
    .pipe(gulp.dest('public/js'))
    .pipe(reload({ stream:true }));
});

gulp.task('images', function() {
  return gulp.src('app/images/**/*')
    .pipe(imagemin())
    .pipe(gulp.dest('public/images'))
    .pipe(reload({ stream:true }));
});

gulp.task('vendors', function() {
  return gulp.src('vendors/**/*')
    .pipe(gulp.dest('public/vendors'))
    .pipe(reload({ stream:true }));
});

gulp.task('resource', function() {
  return gulp.src('app/resource/**/*')
    .pipe(gulp.dest('public/resource'))
    .pipe(reload({ stream:true }));
});

gulp.task('default', ['less', 'pug', 'js', 'vendors', 'images', 'resource'])
