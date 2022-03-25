const webpackMerge = require('webpack-merge');
const baseConfig = require('./webpack.render.base.js');

const prodConfig = {
  mode: 'production',
};

module.exports = webpackMerge.merge(baseConfig, prodConfig);