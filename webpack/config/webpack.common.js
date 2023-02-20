const config = require('./webpack.config');
const path = require('path');
const entry = require('./webpack.entry');
const {merge} = require('webpack-merge');
// loader
const loaders = require('./../loaders/index');
// plugins
const plugins = require('./../plugins/index');

module.exports = merge(
    {
        entry,
        mode: 'development',
        // a complete list of "stats" setting is on https://webpack.js.org/configuration/stats/
        resolve: {
            // extensions: [/*'.vue', '.css', '.tsx', '.ts', '.js', '.json'*/],
            modules: [
                path.resolve(config.path.root, 'node_modules'),
            ]
        },
        output: {
            path: path.resolve(config.path.assets),
        },
        plugins: [
            plugins.clean(),
            plugins.copy(),
            plugins.imageMin(),
            plugins.webpackBar(),
            plugins.ESLint(),
        ],
    },
    loaders.javaScript(),
);
