const { merge } = require('webpack-merge');

const common = require('./webpack.common.js');
const paths = require('./paths');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(common, {
  mode: 'development',

  devtool: 'eval-cheap-source-map',
  output: {
    filename: '[name].js',
    // path: paths.BUILD_DIR,
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
      path: paths.SRC_DIR,
    }),
  ],

  devServer: {
    contentBase: paths.BUILD_DIR,
    publicPath: '',
    historyApiFallback: true,
    compress: true,
    port: 8080,
    // noInfo: true,
    quiet: false,
    // clientLogLevel: 'warn',
    // stats: 'minimal',
    open: false,
  },
});
