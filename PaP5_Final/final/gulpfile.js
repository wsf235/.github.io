/**
 * Created by MasterAnseen on 10/7/17.
 */
var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('default', function(){

});

gulp.task('sass', function(){
    return gulp.src('./src/sass/*.sass')
        .pipe(sass())
        .pipe(gulp.dest('./src'));
});

gulp.task('watch', function(){
    gulp.watch('./css/sub_css/*.sass', ['sass'])
});