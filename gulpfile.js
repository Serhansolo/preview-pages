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
    function formatDate(date) {
        function leadingZero(num) {
            return num < 10 ? '0' + num : num;
        }
        var hours = leadingZero(date.getHours());
        var minutes = leadingZero(date.getMinutes());
        var strTime = hours + ':' + minutes;

        var day = leadingZero(date.getDate());
        var month = leadingZero(date.getMonth() + 1);
        var year = date.getFullYear();

        var strDate = day + "/" + month + "/" + year;

        return strDate + " | " + strTime;
    }


    var opts = {
        branch: 'preview',
        message: 'Update: ' + formatDate(new Date())
    };

    preview.publish('build', opts, function(err){if(err)console.log(err)});
});