const path = require('path');
const pkg = require('./../../package.json');
const rootDir = path.resolve(__dirname + './../../');

const config = {
    pkg,
    dir: {
        src: 'src',
        dist: 'dist'
    },
    path: {
        root: rootDir,
        src: path.resolve(rootDir, 'src'),
        dist: path.resolve(rootDir, 'dist'),
        temp: path.resolve(rootDir, 'temp/webpack'),
        assets: path.resolve(rootDir, 'dist/assets'),
        node_modules: path.resolve(rootDir, 'node_modules'),
        publicPath: '/',
        publicPathAssets: 'http://localhost:8080/assets/'
    }
};

module.exports = config;
