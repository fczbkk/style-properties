const webpack_config = require('./webpack.config');
delete webpack_config.entry;
delete webpack_config.output;

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    files: ['test/**/*.spec.js'],
    preprocessors: {'test/**/*.spec.js': ['webpack']},
    webpack: webpack_config,
    webpackMiddleware: {noInfo: true},
    reporters: ['coverage', 'mocha'],
    mochaReporter: {output: 'minimal'},
    coverageReporter: {
      type: 'html',
      dir: 'temp/coverage'
    },
    browsers: ['ChromeHeadless'],
    singleRun: true
  });
};