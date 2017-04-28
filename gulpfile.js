var gulp = require('gulp');
var style = require('gulp-stylus');
var jade = require("gulp-jade");
var pref = require("gulp-autoprefixer");
var bs 	= require("browser-sync").create();
gulp.task('style-compile',function () {
	gulp.src('./app/style/*styl').pipe(style()).pipe(pref({pretty:true})).pipe(gulp.dest('./app/public/'));
})
gulp.task('jade-compile',function(){
	gulp.src('./app/page/*jade').pipe(jade({pretty:true})).pipe(gulp.dest("./"))
})

gulp.task('wach', function(){
	gulp.watch("./app/style/*styl",['style-compile'])
	gulp.watch("./app/page/*jade",['jade-compile'])

})
/*gulp.task('jade-compile',function(){
	gulp.src('./app/page/*jade').pipe(jade({pretty:true})).pipe(gulp.dest("./app/pagehtml/"))
})
*/                      


gulp.task('default',['style-compile',"jade-compile","wach"]);

 
