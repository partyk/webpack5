/*
@link doc https://www.npmjs.com/package/@soda/friendly-errors-webpack-plugin
 */
const FriendlyErrorsWebpackPlugin = require('@soda/friendly-errors-webpack-plugin');

module.exports = (options = {}) => {
    return new FriendlyErrorsWebpackPlugin(options);
};
