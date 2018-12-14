const CleanPlugin = require('clean-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const HtmlPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  devServer: {
    contentBase: path.resolve(__dirname, 'public'),
    port: 3000,
  },
  entry: {
    scripts: './src/index.jsx',
  },
  module: {
    rules: [
      {
        exclude: /node_modules/,
        test: /\.jsx?$/,
        use: [
          'babel-loader',
        ],
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
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
  resolve: {
    alias: {
      Components: path.resolve(__dirname, 'src/components/'),
      Constants: path.resolve(__dirname, 'src/constants.js'),
      Views: path.resolve(__dirname, 'src/views/'),
    },
    extensions: ['.js', '.jsx'],
  },
};
