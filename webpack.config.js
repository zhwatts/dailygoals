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
            Handlebars: 'handlebars/dist/handlebars.js'
        }
    },
    module: {
        rules: [{
                test: /\.css$/,
                loaders: ["style-loader", "css-loader"]
            },
            {
                test: /\.handlebars$/,
                loader: "handlebars-loader"
            },
            {
                test: /\.(jpe?g|png|gif)$/i,
                loader: "file-loader",
                options: {
                    name: '[name].[ext]',
                    outputPath: 'assets/images/'
                    //the images will be emited to dist/assets/images/ folder
                }
            }
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            "$": "jquery",
            "jQuery": "jquery",
            "window.jQuery": "jquery",
            "window.$":"jquery"
        })]
};
