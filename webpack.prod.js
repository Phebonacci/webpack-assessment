const { default: merge } = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'production',
  entry: {
    vendor: [
      './src/js/vendors/vendor1.js',
      './src/js/vendors/vendor2.js'
    ]
  },
  module: {
    rules: [{
      exclude: /(node_modules)/
    }]
  }
});
