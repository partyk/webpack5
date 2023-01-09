const config = require('./webpack.config');
const path = require('path');
const entry = require('./webpack.entry');

module.exports = {
    entry,
    mode: 'development',
    // a complete list of "stats" setting is on https://webpack.js.org/configuration/stats/
    resolve: {
        extensions: [/*'.vue', '.css', '.tsx', '.ts', '.js', '.json'*/],
        modules: [
            path.resolve(__dirname, 'node_modules')
        ]
    },
    output: {
        path: path.resolve(config.path.assets)
    },
};
