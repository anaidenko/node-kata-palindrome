var webpackConfig = require('./webpack.config');
var path = require('path');

module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    files: [{ pattern: 'src/**/*.spec.*' }],
    exclude: [],
    preprocessors: {
      'src/**/*.spec.*': ['webpack']
    },
    webpack: webpackConfig,
    reporters: ['spec', 'coverage-istanbul'],
    colors: true,
    logLevel: config.LOG_INFO,
    browsers: ['ChromeHeadless'],
    mime: {
      'text/x-typescript': ['ts', 'tsx']
    },
    coverageIstanbulReporter: {
      reports: ['html', 'text-summary'],
      dir: path.join(__dirname, 'coverage'),
      fixWebpackSourcePaths: true,
      'report-config': {
        html: { outdir: 'html' }
      }
    }
  });
};
