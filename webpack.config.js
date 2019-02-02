var path = require('path');
var BundleTracker = require('webpack-bundle-tracker');
const TerserPlugin = require('terser-webpack-plugin'); 
var webpack = require('webpack');

module.exports = {
    mode: 'development',
    context: __dirname,
    entry: './products/static/js/index.js',
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
        })
    ]
}