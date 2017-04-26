const webpack = require('webpack');
const path = require('path');

const isDebug = process.env.NODE_ENV !== 'production';

module.exports = (watch = false) => ({
  output: {
    publicPath: '/assets/scripts/',
  },
  watch,
  devtool: isDebug ? 'cheap-module-inline-source-map' : false,
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: require.resolve('jquery'),
        loader: 'expose-loader?jQuery!expose-loader?$',
      },
    ],
  },
  resolve: {
    alias: {
      'inputmask.dependencyLib': path.join(__dirname, 'node_modules/jquery.inputmask/extra/dependencyLibs/inputmask.dependencyLib.js'),
      'inputmask': path.join(__dirname, 'node_modules/jquery.inputmask/dist/inputmask/inputmask.js'),
    },
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development'),
      },
    }),
    new webpack.NoErrorsPlugin(),
    !isDebug ? new webpack.optimize.UglifyJsPlugin() : f => f,
  ],
});
