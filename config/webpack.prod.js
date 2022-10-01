const { ESBuildMinifyPlugin } = require('esbuild-loader')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { ProvidePlugin } = require('webpack')
const { merge } = require('webpack-merge')
const common = require('./webpack.common')

const ruleForStyles = {
  test: /\.css$/,
  use: [
    MiniCssExtractPlugin.loader,
    'css-loader',
    'postcss-loader',
    {
      loader: 'esbuild-loader',
      options: {
        loader: 'css',
        minify: true,
      },
    },
  ],
}

const ruleForJavascript = {
  test: /\.jsx$/,
  exclude: /node_modules/,
  loader: 'esbuild-loader',
  options: {
    loader: 'jsx',
    target: 'es2015',
  },
}

const rules = [ruleForJavascript, ruleForStyles]

/** @type {import('webpack').Configuration} */
const prodConfig = {
  mode: 'production',
  module: { rules },
  devtool: 'source-map',
  optimization: {
    minimizer: [
      new ESBuildMinifyPlugin({
        target: 'es2015',
        css: true,
      }),
    ],
    splitChunks: {
      chunks: 'all',
    },
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new ProvidePlugin({
      React: 'react',
    }),
  ],
}

module.exports = merge(common, prodConfig)
