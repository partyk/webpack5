/*
@link doc https://www.npmjs.com/package/webpack-bundle-analyzer
 */
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;


module.exports = (options = {}) => {
    return new BundleAnalyzerPlugin(options);
};
