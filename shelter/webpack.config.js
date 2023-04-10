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

    entry: {
      main: './src/index.js',
      pets: './src/pets.js'
    },

    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'js/[name].js',
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
        filename: "style/[name].css",
      }),
      new HtmlWebpackPlugin( {
        filename: 'index.html',
        template: './src/index.html',
        chunks: ['main'],
      }),
      new HtmlWebpackPlugin( {
        filename: 'our-pets.html',
        template: './src/our-pets.html',
        chunks: ['pets'],
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
          test: /\.(png|jpg|svg|gif)$/i,
          type: 'asset/resource',
        },
        {
          test: /\.(woff|woff2|ttf)$/i,
          type: 'asset/resource',
          generator: {
            filename: 'fonts/[name].[ext]'
          }
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