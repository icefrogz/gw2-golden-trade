const webpack = require('webpack')
const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const autoprefixer = require('autoprefixer')

const config = {
  output: {
    path: path.resolve(__dirname, '/dist/public'),
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [
      path.join(__dirname, '../node_modules'),
      path.join(__dirname, '../src'),
      path.join(__dirname, '../src/api'),
    ],
    alias: {
      api: path.join(__dirname, '../src/api'),
      components: path.join(__dirname, '../src/components'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /.(css|scss)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: true,
            },
          },
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: [autoprefixer({})],
            },
          },
          'sass-loader',
        ],
      },
      {
        test: /.(jpg|jpeg|png|gif|mp3|svg)$/,
        loader: 'url-loader?limit=10000&name=img/[name].[ext]',
      },
      {
        test: /\.ico?$/,
        loader: 'file-loader?name=[name].[ext]',
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
    new webpack.DefinePlugin({
      NODE_ENV: `'${process.env.NODE_ENV}'`,
    }),
  ],
}

module.exports = config
