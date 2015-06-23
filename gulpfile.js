var gulp = require('gulp'),
    del = require('del'),
    connect = require('gulp-connect'),
    appFiles;

appFiles = ['index.html',
            'bower_components/**/*',
            'src/**/*',
            'styles/**/*',
            'views/**/*'];

gulp.task('clean', function(cb) {
  del('build', cb);
});

gulp.task('build', ['clean'], function() {
  return gulp.src(appFiles, {base: '.'})
             .pipe(gulp.dest('build'));
});

gulp.task('watch', function() {
  gulp.watch(appFiles, ['build']);
});

gulp.task('server', function() {
  connect.server({
    root: 'build'
  });
});

gulp.task('default', ['build', 'server', 'watch']);
