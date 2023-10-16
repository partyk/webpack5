const path = require('node:path');
const pkg = require('./../../package.json');
// eslint-disable-next-line no-path-concat
const rootDir = path.resolve(__dirname + './../../');

const config = {
    pkg,
    dir: {
        src: 'app/ui',
        dist: 'www',
    },
    path: {
        root: rootDir,
        src: path.resolve(rootDir, 'app/ui'),
        dist: path.resolve(rootDir, 'www'),
        temp: path.resolve(rootDir, 'temp/webpack'),
        assets: path.resolve(rootDir, 'www/assets'),
        node_modules: path.resolve(rootDir, 'node_modules'),
        publicPath: '/',
        publicPathAssets: '/assets/',
    },
};

module.exports = config;
