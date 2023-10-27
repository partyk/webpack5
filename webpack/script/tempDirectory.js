const config = require('./../config/webpack.config');
const tempDirectory = require('./modules/createDirectory');

const listDirectoryPaths = [
    config.path.temp,
    config.path.temp + '/fonts/icons',
    config.path.temp + '/download',
];

listDirectoryPaths.forEach(path => tempDirectory(path));
