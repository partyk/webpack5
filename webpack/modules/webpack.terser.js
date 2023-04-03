/**
 * @DOC https://webpack.js.org/plugins/terser-webpack-plugin
 * @DOC https://www.npmjs.com/package/terser-webpack-plugin
 * @type {TerserPlugin}
 */
const TerserPlugin = require('terser-webpack-plugin');
const {merge} = require('webpack-merge');

module.exports = ({
    options,
    test,
    include,
    exclude,
} = {}) => {
    /**
     * @DOC options https://github.com/terser/terser#minify-options
     * @type {{[p: string]: *}}
     */
    options = merge({
        ...{
            parse: {
                // parse options
            },
            compress: {
                // compress options
            },
            mangle: {
                // mangle options

                properties: {
                    // mangle property options
                },
            },
            format: {
                // format options (can also use `output` for backwards compatibility)
            },
            sourceMap: {
                // source map options
            },
            ecma: 5, // specify one of: 5, 2015, 2016, etc.
            enclose: false, // or specify true, or "args:values"
            keep_classnames: false,
            keep_fnames: false,
            ie8: false,
            module: false,
            nameCache: null, // or specify a name cache object
            safari10: false,
            toplevel: false,
        },
        ...options,
    });
    return {
        optimization: {
            minimize: true,
            minimizer: [
                new TerserPlugin({
                    include,
                    exclude,
                    test: test || /\.js(\?.*)?$/i,
                    terserOptions: options,
                }),
            ],
        },
    };
};
