/**
 * @DOC https://www.npmjs.com/package/css-loader
 * @DOC https://www.npmjs.com/package/less-loader
 * @DOC https://www.npmjs.com/package/style-loader
 */
const config = require('./../config/webpack.config');
/* modules */
// const modules = require('./../modules/index');
// loaders
const loader = require('./index');

// plugins
const plugins = require('./../plugins/index');
// libs
const getFinalStyleLoader = require('./../libs/getFinalStyleLoader');

module.exports = ({
    include,
    exclude,
    finalLoader,
} = {}) => ({
    plugins: [
        plugins.miniCssExtract(),
    ],
    module: {
        rules: [
            {
                test: /\.less$/,
                include,
                exclude,
                use: [
                    getFinalStyleLoader({
                        ...finalLoader,
                        config,
                    }),
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 4,
                            sourceMap: config.isDevelop,
                        },
                    },
                    loader.postCSS(),
                    {
                        loader: 'less-loader',
                        options: {
                            lessOptions: {
                                paths: [
                                    config.path.node_modules,
                                    config.path.src,
                                ],
                            },
                            sourceMap: config.isDevelop,
                        },
                    },
                ],
            },
        ],
    },
});
