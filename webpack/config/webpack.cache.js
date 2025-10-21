const config = require('./webpack.config');
const path = require('path');

/**
 * @DOC https://webpack.js.org/configuration/cache/#cache
 */
const memCache = {
    type: 'memory',
    cacheUnaffected: true,
};

const fileCache = {
    allowCollectingMemory: true,
    type: 'filesystem',
    cacheDirectory: path.resolve(config.path.root, 'temp/webpack/cache'),
    compression: 'gzip',
    buildDependencies: {config: [__filename]},
};

module.exports = {
    memCache,
    fileCache,
};
