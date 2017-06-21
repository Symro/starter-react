const webpack = require('webpack');
// Paths
const path = require('path');
const BUILD_DIR = path.resolve(__dirname, 'public');
const APP_DIR = path.resolve(__dirname, 'app');
const fonts = path.resolve(__dirname, 'app/assets/fonts');

// Templating
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './app/index.html',
  filename: 'index.html',
  minify: {
    removeComments: true,
    collapseWhitespace: true
  },
  inject: 'body'
});

module.exports = {
  entry: [
    path.join(APP_DIR, '/index.js')
  ],

  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /(\.css|\.sass)$/,
        loaders: [
          'style-loader',
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ]
      },
      {
        test: /\.(jpe?g|png|gif)$/i,
        loader: 'file-loader?name=./assets/images/[name].[ext]'
      },
      {
        test: /\.(ttf|eot|woff|woff2|svg)$/,
        loader: 'url-loader?name=./assets/fonts/[name].[ext]',
      }
    ]
  },

  plugins: [
    HtmlWebpackPluginConfig
  ],
}
