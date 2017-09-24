var gulp = require('gulp');
var preview = require('gh-pages');

gulp.task('watchHTML', function() {
    gulp.watch('src/**/*.html', function() {
        gulp.start('HTML');
    })
});

gulp.task('HTML', function() {
    return gulp.src('src/**/*.html')
    .pipe(gulp.dest('build'));
});

gulp.task('deploy', function() {
    var opts = {
        branch: 'preview'
        // push: false
    };

    preview.publish('build', opts, function(err){console.log(err)});
});