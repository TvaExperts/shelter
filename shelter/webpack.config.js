const webpack = require('webpack');
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");

const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (env, options) => {

  const isProduction = options.mode === 'production';

  const config = {

    mode: isProduction ? 'production' : 'development',

    devtool: 'source-map',


    entry: './src/index.js',

    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'script.js',
      assetModuleFilename: 'assets/[name][ext]'
    },

    plugins: [
      new CleanWebpackPlugin(),
      new CopyPlugin({
        patterns: [
          { from: './src/assets/img/pets', to: "assets" },
        ],
      }),
      new MiniCssExtractPlugin({
        filename: "style.css",
      }),
      new HtmlWebpackPlugin( {
        filename: 'index.html',
        template: './src/pages/index.html'
      }),
      new HtmlWebpackPlugin( {
        filename: 'our-pets.html',
        template: './src/pages/our-pets.html'
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