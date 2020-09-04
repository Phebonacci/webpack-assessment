const path = require('path');
const { NamedModulesPlugin, HotModuleReplacementPlugin } = require('webpack');
const { default: merge } = require('webpack-merge');

const baseConfig = {
  entry: './src/js/index.js',
  devtool: 'source-map',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'app.bundle.js',
    publicPath: '/dist/'
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
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    publicPath: '/dist/',
    watchContentBase: false,
    hotOnly: true,
    overlay: true
  },
  plugins: []
};

module.exports = [
  function(env) {
    const isDevelopment = env === 'development';
    console.log(`This is the ${env || 'production'} build.`);

    if (isDevelopment) {
      merge(baseConfig, {
        plugins: [
          new NamedModulesPlugin(),
          new HotModuleReplacementPlugin(),
        ],
      });
    }

    baseConfig.name = 'base';
    baseConfig.mode = env;
    return baseConfig;
  }
];
