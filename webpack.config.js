const webpack = require('webpack')
const merge = require('webpack-merge')
const path = require('path')
const common = require('./webpack/common')
const HtmlWebPackPlugin = require("html-webpack-plugin");
// 'webpack-hot-middleware/client?path=/__webpack_hmr&reload=true',

module.exports = merge(common, {
  name: 'client',
  mode: 'development',
  entry: [
    path.join(__dirname, './src/assets/stylesheets/application.scss'),
    path.join(__dirname, './src/index.js'),
  ],
  target: 'web',
  output: {
    path: path.join(__dirname, './dist'),
    filename: 'app.client.js',
    chunkFilename: '[name].client.js',
    publicPath: '',
  },
  optimization: {
    namedChunks: true,
    splitChunks: {
      chunks: 'all',
    },
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebPackPlugin({
      template: "./public/index.html",
      filename: "./index.html"
    })
  ],
})
