const config = require('./../config/webpack.config');

/* plugins */
const plugins = require('./../plugins/index');

module.exports = () => ({
    loader: 'postcss-loader',
    options: {
        sourceMap: config.isDevelop,
        postcssOptions: {
            plugins: [
                /* plugins.postCSSDiscardDuplicates(),
                plugins.pixrem(),
                plugins.prefixer(),
                ...(config.isProduction ? [plugins.cssnano()] : []) */
            ],
        },
    },
});
