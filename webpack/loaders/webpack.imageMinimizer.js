/**
 * @DOC https://www.npmjs.com/package/image-minimizer-webpack-plugin
 */
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');

module.exports = ({include, exclude} = {}) => ({
    output: {
        assetModuleFilename: 'images/[hash][ext][query]'
    },
    module: {
        rules: [
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                include,
                exclude,
                type: 'asset',
                generator: {
                    filename: 'static/[name][contenthash][ext][query]'
                }
            }
        ]
    },
    optimization: {
        minimizer: [
            new ImageMinimizerPlugin({
                minimizer: {
                    implementation: ImageMinimizerPlugin.imageminMinify,
                    options: {
                        // Lossless optimization with custom option
                        // Feel free to experiment with options for better result for you
                        plugins: [
                            ['gifsicle', {interlaced: true}],
                            ['jpegtran', {progressive: true}],
                            ['optipng', {optimizationLevel: 5}],
                            // Svgo configuration here https://github.com/svg/svgo#configuration
                            [
                                'svgo',
                                {
                                    plugins: [
                                        {
                                            name: 'preset-default',
                                            params: {
                                                overrides: {
                                                    removeViewBox: false,
                                                    addAttributesToSVGElement: {
                                                        params: {
                                                            attributes: [
                                                                {xmlns: 'http://www.w3.org/2000/svg'}
                                                            ]
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    ]
                                }
                            ]
                        ]
                    }
                }
            })
        ]
    }
});