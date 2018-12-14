const CleanPlugin = require('clean-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const HtmlPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  devServer: {
    contentBase: path.resolve(__dirname, 'public'),
  },
  entry: {
    scripts: './src/index.js',
  },
  module: {
    rules: [
      {
        exclude: /node_modules/,
        test: /\.js$/,
        use: [
          'babel-loader',
        ],
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new CleanPlugin(['dist']),
    new Dotenv({
      safe: true,
    }),
    new HtmlPlugin({
      template: 'public/index.html',
    }),
  ],
};
