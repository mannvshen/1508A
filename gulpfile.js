/**
 * Created by lenovo-pc on 2017/10/9.
 */
var gulp = require('gulp');
var uglify = require('gulp-uglify');//js压缩
var concat = require('gulp-concat');
//压缩js文件
gulp.task('uglify',function(){
    gulp.src(['aa.js','bb.js']).pipe(uglify()).pipe(gulp.dest('./dist'));
})

//合并文件
gulp.task('concat',function(){
    gulp.src(['./dist/aa.js','./dist/bb.js']).pipe(concat('cc.js')).pipe(gulp.dest('./dist'));
})


