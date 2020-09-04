const path = require('path');
const { NamedModulesPlugin, HotModuleReplacementPlugin } = require('webpack');
const { default: merge } = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: [
      './src/js/index.js'
    ],
  },
  devtool: 'source-map',
  output: {
    filename: '[name].[hash].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /(node_modules)/,
      use: {
        loader: 'babel-loader'
      }
    }]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public/index.html'),
      filename: 'index.html',
      inject: 'body'
    }),
  ]
};
