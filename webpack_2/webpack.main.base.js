const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: path.resolve(__dirname, '../app/main/electron.ts'),
  output: {
    filename: 'electron.js',
    path: path.resolve(__dirname, '../dist'),
  },
  target: 'electron-main',
  devtool: 'inline-source-map',
  resolve: {
    // 主进程不会存在 jsx、tsx，所以不用配置这些后缀
    // 至于为什么不需要，会在下一章节优化处说明
    extensions: ['.js', '.ts'],
  },
  module: {
    rules: [
      {
        test: /\.(js|ts)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  plugins: [
    // 用于打包后的主进程中正确获取__dirname
    new webpack.DefinePlugin({
      __dirname: '__dirname',
    }),
  ],
};