const webpack = require('webpack');
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (env, options) => {

  const isProduction = options.mode === 'production';

  const config = {

    mode: isProduction ? 'production' : 'development',

    devtool: 'source-map',


    entry: './src/index.js',

    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'main.js',
      assetModuleFilename: 'assets/[name]-[hash][ext]'
    },

    plugins: [
      new CleanWebpackPlugin(),
      new MiniCssExtractPlugin(),
       new HtmlWebpackPlugin( {
         template: './index.html'
       }),
    ],
    module: {
      rules: [
        {
          test: /\.html$/i,
          loader: "html-loader",
        },
        {
          test: /\.scss$/,
          use: [ MiniCssExtractPlugin.loader , 'css-loader', 'sass-loader'],
        },
        {
          test: /\.(png|jpg|gif)$/i,
          type: 'asset/resource',
        },
      ]
    },
    devServer : {
      compress: true,
      port: 3000,
    },
  }
  return config;
};