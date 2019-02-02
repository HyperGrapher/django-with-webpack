var path = require('path');
var BundleTracker = require('webpack-bundle-tracker');
const TerserPlugin = require('terser-webpack-plugin'); 
var webpack = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    mode: 'development',
    context: __dirname,
    entry: ['./products/static/js/index.js', './products/static/css/style.css'],
    output: {
        path: path.resolve('./products/static/webpack_bundles/'),
        filename: "[name]-[hash].js"
    },
    // Required for error 'Cannot read property 'minify' of undefined terser-webpack-plugin/dist/minify.js'
    optimization: {
        minimizer: [new TerserPlugin()],
      },

    plugins: [
        new BundleTracker({
            filename: './webpack-stats.json'
        }),
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: "[name].css",
            chunkFilename: "[id].css"
          })
    ],
    module: {
        rules: [
          {
            test: /\.css$/,
            use: [
              {
                loader: MiniCssExtractPlugin.loader,
                options: {
                  // you can specify a publicPath here
                  // by default it use publicPath in webpackOptions.output
                }
              },
              "css-loader"
            ]
          }
        ]
      }
}