//注意目录不要为空

var gulp = require('gulp'),
    less = require('gulp-less');
var cleanCSS = require('gulp-clean-css');
var rename = require("gulp-rename");

//编译less
gulp.task('testLess', function () {
  gulp.src('src/less/*.less')
      .pipe(less())
      .pipe(gulp.dest('src/css')); //生成目录
});


//压缩 css 文件
gulp.task('csscompress', function() {
  return  gulp.src('src/css/*.css')
      .pipe(rename({suffix: '.min'}))//重命名
      .pipe(cleanCSS())
      .pipe(gulp.dest('dist/css'));//输出目录
});


//监听
gulp.task('auto', function () {
  gulp.watch('src/css/*.css', ['csscompress']);
  gulp.watch('src/**/*.less', ['testLess']);

});


// 在命令行使用 gulp 启动 script 任务和 auto 任务
gulp.task('default', ['auto']);