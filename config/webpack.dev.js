'use strict';

const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.common.js');

module.exports = webpackMerge(commonConfig, {
  plugins: [
    new webpack.DefinePlugin({
      APM_URL: process.env.HAWKULAR_APM_ADMIN_URL,
      APM_USER: process.env.HAWKULAR_APM_ADMIN_USERNAME,
      APM_PASSWORD: process.env.HAWKULAR_APM_ADMIN_PASSWORD
    })
  ]
});
