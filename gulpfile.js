var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync= require('browser-sync');

gulp.task('sass', function(){
    return gulp.src(['node_modules/bootstrap/scss/bootstrap.scss','src/scss/*.scss'])
      .pipe(sass()) // Using gulp-sass
      .pipe(gulp.dest('src/css'));
  });

  gulp.task('js', function(){
    return gulp.src(['node_modules/bootstrap/dist/js/*.*'])
      .pipe(gulp.dest('src/js'));
  });


// gulp.task('serve', ['sass'], function(){
// browserSync.init({
//     server:'./src'
// });

// gulp.watch("scss/*.scss",['sass']);

// gulp.watch("index.html",browserSync.reload);

// });

// gulp.task("default", function(){

// gulp.watch(['serve'],function(){
//     console.log("inside function");
// })

// });


gulp.task('browser-sync', function() {  
    browserSync.init(["src/css/*.css", "src/js/*.js"], {
        server: {
            baseDir: "src"
        }
    });
 });
 
 gulp.task('default', ['js','sass', 'browser-sync'], function () {  
    gulp.watch(["src/scss/*.scss", "src/*.html"],  ['sass']);
 });