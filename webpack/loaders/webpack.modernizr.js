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
                        /**
                         * @DOC https://github.com/Modernizr/Modernizr/blob/HEAD/lib/config-all.json
                         */
                        options: {
                            'minify': true,
                            'options': [
                                'setClasses',
                            ],
                            'feature-detects': [
                                'css/flexwrap',
                                'forcetouch',
                            ],
                        },
                    },
                ],
            },
        ],
    },
});
