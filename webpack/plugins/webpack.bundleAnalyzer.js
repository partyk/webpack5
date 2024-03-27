/*
@link doc https://www.npmjs.com/package/webpack-bundle-analyzer
 */
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;


module.exports = (options = {}) => {
    console.log(process.argv.includes('--analyzer'));
    return new BundleAnalyzerPlugin(options);
};
