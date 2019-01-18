var gulp = require('gulp');
var server = require('gulp-server-livereload');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
 
gulp.task('autoprefix', function() {
  return gulp.src("css/main.css")
  .pipe(autoprefixer({
      browsers: ['last 10 version'],
      cascade: true
  }))
});
 
gulp.task('sass', function () {
  gulp.src('scss/main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('css'));
});
 
gulp.task('watch', function () {
  gulp.watch('scss/**/*.scss', ['sass']);
});

gulp.task('server', function() {
  gulp.src('')
    .pipe(server({
      livereload: true,
      defaultFile: "index.html",
      directoryListing: false,
      open: true
    }));
  });