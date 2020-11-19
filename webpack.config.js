// const path = require('path');
// const webpack = require('webpack');
const isDev = process.env.NODE_ENV === 'development'


module.exports = {
  mode: isDev ? 'development' : 'production',
    entry: ['./index.js', '@babel/polyfill'], // assumes your entry point is the index.js in the root of your project folder
 
    output: {
      path:  __dirname, // assumes your bundle.js will also be in the root of your project folder
      filename: './public/bundle.js'
    },
    resolve: {
      extensions: ['.js', '.jsx']
    },
    devtool: false,
    performance: {
      hints: false,
      maxEntrypointSize: 512000,
      maxAssetSize: 512000
  },
    watchOptions: {
      ignored: /node_modules/
    },
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
        }
      ]
    }
  }
  