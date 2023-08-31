/**
 * @DOC https://webpack.js.org/loaders/val-loader/#modernizr
 * @DOC https://www.npmjs.com/package/val-loader
 */

module.exports = ({
    include,
    exclude,
} = {}) => ({
    module: {
        rules: [
            {
                test: /configModernizr.js$/,
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
