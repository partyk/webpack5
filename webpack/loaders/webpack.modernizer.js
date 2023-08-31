/**
 * @DOC https://webpack.js.org/loaders/val-loader/#modernizr
 * @DOC https://www.npmjs.com/package/val-loader
 */
const config = require('./../config/webpack.config');
/* modules */


module.exports = ({
    include,
    exclude,
} = {}) => ({
    module: {
        rules: [
            {
                test: /\.modernizr.js$/,
                include,
                exclude,
                use: [
                    {
                        loader: 'val-loader',
                        options: {
                            'minify': false,
                            'options': ['setClasses'],
                            'feature-detects': [
                                'test/css/flexbox',
                                'test/es6/promises',
                                'test/serviceworker',
                            ],
                        },
                    },
                ],
            },
        ],
    },
});
