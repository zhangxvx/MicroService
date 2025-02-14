const merge = require('webpack-merge')
const common = require('./webpack.common')
const webpack = require('webpack')

module.exports = merge(common, {
  devtool: 'source-map',
  plugins: [
    // new webpack.optimize.UglifyJsPlugin({ sourceMap: true }),
    new webpack.DefinePlugin({ 'process.env.NODE_ENV': JSON.stringify('production') })
  ]
})