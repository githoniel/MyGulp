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
var rev = require('gulp-rev');
var revCollector = require('gulp-rev-collector');  
var less = require('gulp-less');
var minifyCSS = require('gulp-minify-css');

var es6Path = 'src/js/**/*.js';
var libPath = 'lib/**/*.*';
var dstPath = 'dist';

var lessPath ='src/less/**/*.less';
var dstCssPath = 'dist/css';
var commonPath = 'dist/common/';

//clean dstpath
gulp.task('clean',del.bind(
	null,
	[
		path.join(dstPath,'**/*.*')
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
		.pipe(gulp.dest(path.join(commonPath,'js/component'))) //未压缩
		.pipe(concat('app.js')) //合并方便测试
		// .pipe(gulp.dest(path.join(commonPath,'js')))//未压缩已合并
		.pipe(rename({suffix: '.min'}))
        //.pipe(uglify()) 测试不压缩
		.pipe(rev())
		.pipe(gulp.dest(path.join(dstPath,'assets')))
		.pipe(rev.manifest())
        .pipe(gulp.dest(path.join(dstPath,'rev')));

});

gulp.task('babel:rev', function() {
    gulp.src([
			'./dist/rev/*.json', 
			'./src/*.html'
    	])   //- 读取 rev-manifest.json 文件以及需要进行css名替换的文件
        .pipe(revCollector())  //- 执行文件名替换
        .pipe(gulp.dest(dstPath));   //- 替换后的文件输出的目录
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
			  .pipe(gulp.dest(path.join(commonPath,'css')))
			  .pipe(minifyCSS())
			  .pipe(gulp.dest(dstCssPath));
});

gulp.task('build', function (done) {
	runSequence('clean','babel','babel:rev','libs','less',done);
});


//watch
gulp.task('watch', function() {
	gulp.watch(es6Path, ['babel']);
	gulp.watch(libPath, ['libs']);
	gulp.watch(lessPath,['less']);
});


gulp.task('default', ['build','watch']);

