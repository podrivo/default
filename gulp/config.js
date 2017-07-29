var config = {
  'fonts': {
    'src': [
      './src/fonts/**/*'
    ],
    'dest': './dist/fonts'
  },
  'images': {
    'src': [
      './src/img/**/*.{gif,ico,png,jpg,jpeg,svg}'
    ],
    'dest': './dist/img'
  },
  'html': {
    'src': [
      './src/**/*.pug'
    ],
    'dest': 'dist'
  },
  'scripts': {
    'lint': {
      'src': [
        './src/js/**/*.js'
      ]
    },
    'build': {
      'src': ['./src/js/vendor/jquery.js', './src/js/vendor/plugins.js', './src/js/**/*.js'],
      'dest': './dist/js'
    }
  },
  'styles': {
    'lint': {
      'src' : [
        './src/scss/**/*.scss'
      ]
    },
    'build': {
      'src': [
        './src/scss/**/*.scss'
      ],
      'dest': './dist/css'
    }
  }
};

module.exports = config;