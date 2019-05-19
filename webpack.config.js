const path = require('path');
const webpack = require('webpack');

module.exports = {
    mode: "development",
    entry: {
        vendor: './src/scripts/vendor.js',
        index_ui: './src/scripts/index.ui.js',
    },
    output: {
        filename: '[name].js',
        path: __dirname + '/src/webpacked'
    },
    resolve: {
        alias: {
            // jquery: 'dist/jquery.js'
        }
    },

};

// new webpack.ProvidePlugin({
//   $: 'jquery',
//   jQuery: 'jquery'
// })