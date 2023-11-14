/**
 * @link https://www.npmjs.com/package/html-webpack-plugin
 */
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (options = {}) => {
    return new HtmlWebpackPlugin(options);
};
