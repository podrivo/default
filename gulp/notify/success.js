var gulp = require('gulp');
var notify = require('gulp-notify');

module.exports = function () {
    notify({
        title: '🍟 YAY!',
        message: 'Tasks completed!'
    }).write('./');
};
