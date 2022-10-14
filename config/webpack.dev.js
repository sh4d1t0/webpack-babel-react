const { merge } = require('webpack-merge')
const common = require('./webpack.common')
const { ProvidePlugin } = require('webpack')

const ruleForStyles = {
  test: /\.css$/,
  use: ['style-loader', 'css-loader', 'postcss-loader'],
}

const ruleForJavascript = {
  test: /\.jsx$/,
  loader: 'esbuild-loader',
  options: {
    loader: 'jsx',
    target: 'esnext',
  },
}

const rules = [ruleForJavascript, ruleForStyles]

/** @type {import('webpack').Configuration} */
const devConfig = {
  mode: 'development',
  module: { rules },
  devServer: {
    open: false, // open browser
    port: 3000,
    compress: true,
    client: {
      overlay: {
        errors: true,
        warnings: true,
      }, // overlay with errors and/or warnings
    },
    historyApiFallback: true,
    hot: true,
  },
  plugins: [
    new ProvidePlugin({
      React: 'react',
    }),
  ],
  devtool: 'eval-source-map',
}

module.exports = merge(common, devConfig)
