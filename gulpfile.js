var gulp = require('gulp');
var babel = require('gulp-babel');
var path = require('path');
var del = require('del');
var uglify = require('gulp-uglify');
var changed = require('gulp-changed');
var plumber = require('gulp-plumber');
var runSequence = require('run-sequence');
var concat = require('gulp-concat');
var rename = require("gulp-rename");

var less = require('gulp-less');
var minifyCSS = require('gulp-minify-css');

var es6Path = 'src/js/**/*.js';
var libPath = 'lib/**/*.*';
var dstPath = 'dist';

var lessPath ='src/less/**/*.less';
var dstCssPath = 'dist/css'

//clean dstpath
gulp.task('clean',del.bind(
	null,
	[
		path.join(dstPath,'**/*.{js|css}')
	],{
		force:true,
		dot:true
	}
));
//babel
gulp.task('babel',function(){
	return gulp.src([es6Path])
		.pipe(plumber())
		.pipe(babel())
		.pipe(concat('app.js'))
		.pipe(rename({suffix: '.min'}))
        .pipe(uglify())
        .pipe(gulp.dest('dist/common/js'))
		.pipe(gulp.dest(path.join(dstPath,'assets')));

});
//libs
gulp.task('libs', function () {
  return gulp.src(libPath)
    .pipe(changed(dstPath))
    .pipe(plumber())
    .pipe(gulp.dest(dstPath));
});
//less
gulp.task('less',function(){
	return gulp.src(lessPath)
			  .pipe(less())
			  .pipe(minifyCSS())
			  .pipe(gulp.dest(dstCssPath));
});

gulp.task('build', function (done) {
	runSequence('clean', 'babel','libs','less',done);
});


//watch
gulp.task('watch', function() {
	gulp.watch(es6Path, ['babel']);
	gulp.watch(libPath, ['libs']);
	gulp.watch(lessPath,['less']);
});


gulp.task('default', ['build','watch']);

