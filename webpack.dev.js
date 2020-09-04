const path = require('path');
const { default: merge } = require('webpack-merge');
const { NamedModulesPlugin, HotModuleReplacementPlugin } = require('webpack');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: {
    app: [
      './src/js/vendors/vendor1.js',
      './src/js/vendors/vendor2.js'
    ],
  },
  plugins: [
    new NamedModulesPlugin(),
    new HotModuleReplacementPlugin(),
  ],
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    watchContentBase: false,
    hotOnly: true,
    overlay: true
  },
});
