const gulp = require('gulp');
const imagemin = require('gulp-imagemin');

gulp.task('message', ()=>{
    return console.log('Gulp is running...');
});

gulp.task('copyHTML', ()=>{
    return gulp.src('src/*html')
        .pipe(gulp.dest('dist'));
});

gulp.task('imageMin', ()=>{
    return gulp.src('src/images/*')
               .pipe(imagemin())
               .pipe(gulp.dest('dist/images'));
})