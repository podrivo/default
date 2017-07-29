var gulp = require('gulp');
var notify = require('gulp-notify');

module.exports = function(error) {
    notify.onError({
        title: '🚨 FAILED',
        message: error.message.split('\n\nStack Trace:\nundefined')[0],
    })(error);
    this.emit('end');
};
