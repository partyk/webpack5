/*
@link doc https://www.npmjs.com/package/imagemin-webpack-plugin
 */
/*
TODO doresit [DEP_WEBPACK_COMPILATION_ASSETS] DeprecationWarning.
https://github.com/Klathmon/imagemin-webpack-plugin/issues/116
 */
const config = require('./../config/webpack.config');
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const path = require('path');
const {merge} = require('webpack-merge');
// const imageminMozjpeg = require('imagemin-mozjpeg');

module.exports = (options = {}) => {
    options = merge({
        test: /\.(jpe?g|png|gif|svg)$/i,
        minFileSize: 10 * 1024, // Only apply this one to files equal to or more 10kb
        cacheFolder: path.resolve(config.path.temp, 'images'),
        optipng: {
            enabled: true
        },
        pngquant: ({
            quality: '65-90',
            speed: 4
        }),
        gifsicle: {
            interlaced: false
        },
        svgo: {
            plugins: [{
                removeViewBox: false,
                removeEmptyAttrs: true
            }],
        },
        jpegtran: {
            progressive: true
        },
        plugins: [
            /* ({
                progressive: true,
                quality: 65
            }) */
        ]
    },
    options);
    return new ImageminPlugin(options);
};
