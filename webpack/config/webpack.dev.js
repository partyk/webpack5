/* config for develop mode */
const {merge} = require('webpack-merge');
const common = require('./webpack.common');
// plugins
const plugins = require('./../plugins/index');

module.exports = merge(common, {
    mode: 'development',
    stats: 'minimal',
    /* stats: {
        // copied from `'minimal'`
        preset: 'minimal',
        assets: false,
        modules: true,
        maxModules: 0,
        errors: false, // disabled errors
        warnings: false, // disabled warnings
        // our additional options
        moduleTrace: true,
        errorDetails: true
    }, */
    /**
     * @DOC https://webpack.js.org/configuration/cache/#cache
     */
    cache: {
        type: 'memory',
        cacheUnaffected: true,
    },
    // file cache
    /* cache: {
        allowCollectingMemory: true,
        type: 'filesystem',
        cacheDirectory: path.resolve(config.path.root, 'temp/webpack/cache'),
        compression: 'gzip',
    }, */
    devtool: 'source-map',
    watch: true,
    watchOptions: {
        ignored: /node_modules/,
    },
    plugins: [
        // plugins.friendlyErrors(),
        // plugins.bundleAnalyzer(),
        plugins.dashboard({
            port: 3001,
        }),
        // plugins.browserSync()
    ],
});
