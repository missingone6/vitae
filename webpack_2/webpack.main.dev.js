
const webpackMerge = require('webpack-merge');
const baseConfig = require('./webpack.main.base.js');

const prodConfig = {
  mode: 'development',
};

module.exports = webpackMerge.merge(baseConfig, prodConfig);