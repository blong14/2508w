'use strict';

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  entry: './app/app.js',
  output: {
    path: path.join(__dirname, '..', 'public'),
    publicPath: "/public/",
    filename: 'bundle.js'
  },
  module: {
    rules: [
      { test: /\.js$/, use: ['ng-annotate-loader', 'babel-loader'], exclude: /node_modules/ },
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
      { test: /\.scss$/, use: ['style-loader', 'css-loader', {loader: 'sass-loader', options: {sourceMap: true}} ]},
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: [
          {loader: 'file-loader', options: {hash: 'sha512', digest: 'hex', name: '[hash].[ext]'}},
          {loader: 'image-webpack-loader', options: {bypassOnDebug: true, optimizationLevel: 7, progressive: true, interlaced: false}}
        ]
      },
      { test: /\.html$/, use: [ {loader: 'raw-loader'}] },
      { test: /\.jade$/, use: [{loader: 'jade-loader'}] },
    ]
  },
  devtool: 'eval-source-map',
  externals: {
    foundation: 'Foundation'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: '2508wApp',
      template: 'app/index.html',
      minify: {
        collapseWhitespace: true,
        removeComments: false,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true
      }
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery'
    })
  ]
};
