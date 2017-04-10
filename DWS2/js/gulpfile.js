var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('default', function(){

});

gulp.task('sass', function(){
    return gulp.src('./css/search.sass')
        .pipe(sass())
        .pipe(gulp.dest('.css'));
});

gulp.task('watch', function(){
    gulp.watch('../css/search.sass', ['sass'])
});