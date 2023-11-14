// @link doc https://www.npmjs.com/package/webpack-concat-files-plugin
const WebpackConcatPlugin = require('webpack-concat-files-plugin');

module.exports = (options = {}) => {
    return new WebpackConcatPlugin(options);
};
