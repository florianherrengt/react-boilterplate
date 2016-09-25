const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
require('style-loader');
require('css-loader');

module.exports = {
    entry: {
        app: ["./app/main.js"]
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel'
        }, {
            test: /\.scss$/,
            loader: ExtractTextPlugin.extract(
                'style', // backup loader when not building .css file
                'css!sass' // loaders to preprocess CSS
            )
        }]
    },
    devtool: ['source-map'],
    plugins: [
        new ExtractTextPlugin('[name].css'),
    ],
    output: {
        path: path.resolve(__dirname, "build"),
        publicPath: "/build/",
        filename: "bundle.js"
    }
};
