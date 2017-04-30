var gulp = require('gulp');
var style = require('gulp-stylus');
var jade = require("gulp-jade");
const pref  = require('gulp-autoprefixer');

gulp.task('style-compile',function () {
	gulp.src('./app/style/*styl').pipe(style()).pipe(pref()).pipe(gulp.dest('./app/public/'));
	
})
gulp.task('jade-compile',function(){
	gulp.src('./app/page/*jade').pipe(jade({pretty:true})).pipe(gulp.dest("./"))
})
gulp.task('prefix',function(){
	gulp.src('./app/public/*css').pipe(pref({
		browsers: ['last 2 versions'],
  		cascade: false
	})).pipe(gulp.dest('./app/public/'))
})
gulp.task('wach', function(){
	gulp.watch("./app/style/*styl",['style-compile'])
	gulp.watch("./app/page/*jade",['jade-compile'])
	gulp.watch('./app/public/*css',['prefix'])

})

                   
gulp.task('default',['style-compile','jade-compile','wach'])