var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    sass = require('gulp-sass'),
    livereload = require('gulp-livereload'),
    prefix = require('gulp-autoprefixer'),
    imagemin = require('gulp-imagemin'),
    rename = require('gulp-rename'),
    jade = require('gulp-jade'),
    include = require('gulp-include'),
    plumber = require('gulp-plumber'),
    notify = require('gulp-notify'),
    sourcemaps = require('gulp-sourcemaps'),
    sassdoc = require('sassdoc'),
    jsdoc = require('gulp-jsdoc'),
    uncss = require('gulp-uncss'),
    express = require('express');

var express = require('express')
var app = express()
app.use('/', express.static(__dirname + '/build'))
app.use('/sassdocs', express.static(__dirname + '/public/sassdocs'));
app.listen(3000)
console.log('Express site on 3000!')

var config = {
    projectPath: 'build/',
    assetsPath: 'build/assets/',
    componentPath: 'components/'
}

// Find errors!
function errorLog(error) {
  console.error.bind(error);
  this.emit('end');
}

// Watch the homepage!
gulp.task('homepage', function(){
    gulp.src('index.html')
    .pipe(livereload());
});

// Uglify, to compress JS files
gulp.task('scripts', function(){
    gulp.src('js/main.js')
    .pipe(include())
      .on('error', console.log)
    .pipe(plumber())
         .pipe(uglify())
    .on("error", notify.onError("Error:" + errorLog))
    .pipe(rename('main.min.js'))
    .pipe(gulp.dest(config.assetsPath + 'js'))
    .pipe(notify({
        message: 'JS Uglified!',
        onLast: true
    }))
    .pipe(livereload());
});

// Convert all the SASS to CSS
var sassInput = 'sass/main.scss';
var sassOptions = { 
    outputStyle: 'expanded' 
};
var autoprefixerOptions = { browsers: ['last 2 versions', '> 5%', 'Firefox ESR'] };
var sassdocOptions = { dest: 'public/sassdocs' };

gulp.task('sass', function () {
  return gulp
    .src(sassInput)
    .pipe(sourcemaps.init())
    .pipe(sass(sassOptions).on('error', sass.logError))
    .on("error", notify.onError("Error:" + errorLog))
    .pipe(sourcemaps.write())
    .pipe(rename("style.min.css"))
    .pipe(gulp.dest(config.assetsPath + 'css'))
    .pipe(notify({
        message: 'Sass Processed!',
        onLast: true
    }))
    .pipe(livereload());
});

gulp.task('uncss', function () {
  return gulp
    .src(config.assetsPath + 'css/style.min.css')
    .pipe(uncss({
        html: ['build/**/**/*.html']
    }))
    .pipe(minifyCSS())
    .pipe(gulp.dest(config.assetsPath + 'css'))
    .pipe(notify({
        message: 'CSS Trimmed!',
        onLast: true
    }))
});


// Start building the Sass Docs! Must be run separately!
gulp.task('sassdoc', function () {
  return gulp
    .src('sass/**/**/*.scss')
    .on("error", notify.onError("Error:" + errorLog))
    .pipe(sassdoc(sassdocOptions))
    .pipe(notify({
        message: 'Sass Documented!',
        onLast: true
    }))
    .resume();
});

// Generate documentation for the JS with JSDoc! Must also be run separately!
gulp.task('jsdoc', function () {
  return gulp
    .src('js/**/**/*.js')
    .pipe(notify({
        message: 'JS Documented!',
        onLast: true
    }))
    .on("error", notify.onError("Error:" + errorLog))
    .pipe(jsdoc('./public/jsdocs'))
    .pipe(livereload());
});

// Compress all the image things!
gulp.task('images', function () {
    return gulp.src('jade/img/*')
        .pipe(imagemin({
            progressive: true
        }))
        .on("error", notify.onError("Error:" + errorLog))
        .pipe(gulp.dest(config.assetsPath + 'assets/img'))
        .pipe(notify({
        message: 'Images Optimized!',
        onLast: true
    }))
        .pipe(livereload());
});

// Get all the Jade things!
gulp.task('jade', function() {
    var my_locals = {};

    gulp.src('jade/**/**/*.jade')
        .pipe(jade({
            locals: my_locals
        }))
        // .on("error", notify.onError("Error:" + errorLog))
        .pipe(gulp.dest(config.projectPath))
        .pipe(notify({
            message: 'HTML Jaded!',
            onLast: true
        }))
        .pipe(livereload());
});

// Task to watch the things!
gulp.task('watch', function(){
  livereload.listen();
    gulp.watch('js/*.js', ['scripts']);
    gulp.watch('sass/**/**/*.scss', ['sass']);
    gulp.watch('jade/**/**/*.jade', ['jade']);
    gulp.watch('img/*', ['images']);
    gulp.watch('index.html', ['homepage']);
});

gulp.task('docwatch', ['sassdoc','jsdoc'], function(){
  livereload.listen();
    gulp.watch('sass/**/**/*.scss', ['sassdoc']);
    gulp.watch('js/**/**/*.js', ['jsdoc']);
});

gulp.task('default', ['scripts', 'sass', 'jade', 'images', 'watch']);
gulp.task('prod', ['sassdoc', 'jsdoc', 'prod-init', 'uncss']);