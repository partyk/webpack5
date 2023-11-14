const config = require('./webpack.config');
const path = require('path');
const entry = require('./webpack.entry');
const {merge} = require('webpack-merge');
// loader
const loaders = require('./../loaders/index');
// plugins
const plugins = require('./../plugins/index');

module.exports = merge(
    {
        entry,
        mode: 'development',
        // a complete list of "stats" setting is on https://webpack.js.org/configuration/stats/
        resolve: {
            extensions: ['.vue', '.js'/*, '.css', '.tsx', '.ts','.json' */],
            modules: [
                path.resolve(__dirname, 'node_modules'),
                path.resolve(__dirname, 'bower'),
                path.resolve(__dirname, 'www/vendor'), // bower
            ],
            alias: {
                '@ui': path.resolve(__dirname, 'app/ui'),
                '@bower': path.resolve(__dirname, 'www/vendor'),
                '@src': path.resolve(config.path.root, 'app/ui'),
                '@js': path.resolve(config.path.root, 'app/ui/js'),
                '@scss': path.resolve(config.path.root, 'app/ui/scss'),
                '@images': path.resolve(config.path.root, 'app/ui/images'),
                '@node_modules': path.resolve(config.path.root, 'node_modules'),
            },
        },
        output: {
            path: path.resolve(config.path.assets),
            publicPath: path.resolve(config.path.publicPathAssets),
            clean: true,
        },
        plugins: [
            plugins.clean(),
            plugins.copy(),
            plugins.miniCssExtract(),
            // plugins.imageMin(),
            plugins.webpackBar(),
            plugins.ESLint({
                extensions: [
                    '.js',
                    '.vue',
                ],
            }),
            // aktualne se nevyuziva
            /* plugins.htmlWebpack({
                ver: Math.floor(Math.random() * (100000 - 1) + 1),
                filename: path.resolve(config.path.dist, 'index.html'),
                template: path.resolve(config.path.src, 'template/index.html'),
                inject: false,
                hash: true,
            }), */
        ],
    },
    loaders.modernizr({
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
    }),
    loaders.vue(),
    loaders.javaScript(),
    loaders.styleCSS({
        exclude: [
            path.resolve(config.path.src, 'css'),
        ],
    }),
    loaders.styleCSS({
        include: [
            path.resolve(config.path.src, 'css'),
        ],
        finalLoader: {
            type: 'miniCssExtrac',
        },
    }),
    loaders.styleLess({
        exclude: [
            path.resolve(config.path.src, 'less'),
        ],
    }),
    loaders.styleLess({
        include: [
            path.resolve(config.path.src, 'less'),
        ],
        finalLoader: {
            type: 'miniCssExtrac',
        },
    }),
    loaders.styleScss({
        exclude: [
            path.resolve(config.path.src, 'scss'),
        ],
    }),
    loaders.styleScss({
        include: [
            path.resolve(config.path.src, 'scss'),
        ],
        finalLoader: {
            type: 'miniCssExtrac',
        },
    }),
    loaders.imageMinimizer(),
);
