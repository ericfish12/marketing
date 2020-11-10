// const path = require('path');
// const webpack = require('webpack');


module.exports = {
    entry: './index.js', // assumes your entry point is the index.js in the root of your project folder
    mode: 'development',
    output: {
      path:  __dirname, // assumes your bundle.js will also be in the root of your project folder
      filename: './public/bundle.js'
    },
    devtool: 'source-maps',
  //   plugins: [
  //     new webpack.ProvidePlugin({
  //         $: "jquery",
  //         jQuery: "jquery",
  //         "window.jQuery": "jquery"
  //     })
  // ],
  // externals: {
  //   jquery: 'jQuery'
  // },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader'
          }
        }
      ]
    }
  }