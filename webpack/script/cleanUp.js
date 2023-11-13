const config = require('./../config/webpack.config');
const createDirectory = require('./modules/createDirectory');
const deleteDirectoryRecursive = require('./modules/deleteDirectoryRecursive');

const listDirectoryPaths = [
    config.path.temp,
    config.path.temp + '/fonts/icons',
    config.path.temp + '/download',
];

// smazu temp/webpack
deleteDirectoryRecursive(config.path.temp);
// pripravim si adresare v temp/webpack
listDirectoryPaths.forEach(path => createDirectory(path));
