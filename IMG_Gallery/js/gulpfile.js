var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('default', function(){

});

gulp.task('scss', function(){
    return gulp.src('../css/style.scss')
        .pipe(sass())
        .pipe(gulp.dest('../css'));
});

gulp.task('watch', function(){
    gulp.watch('../css/style.scss', ['scss'])
});