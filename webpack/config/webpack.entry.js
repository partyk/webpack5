const config = require('./webpack.config');
const path = require('path');

console.log(path.resolve(config.path.src, 'js/src/index.js'));

module.exports = {
    // src/js javascript files
    'main': path.resolve(config.path.src, 'js/src/index.js'),
    // css style
    'style': path.resolve(config.path.src, 'css/src/style.css'),
    'style-less': path.resolve(config.path.src, 'less/style.less'),
    'style-scss': path.resolve(config.path.src, 'scss/src/style.scss')
};
