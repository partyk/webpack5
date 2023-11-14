/**
 * @DOC https://webpack.js.org/loaders/val-loader/#modernizr
 * @DOC https://www.npmjs.com/package/val-loader
 */
const modernizr = require('modernizr');

/**
 * @param options {{}}
 * @DOC https://github.com/Modernizr/Modernizr/blob/HEAD/lib/config-all.json
 * @returns {Promise<unknown>}
 */
module.exports = function (options) {
    return new Promise(function (resolve) {
        // It is impossible to throw an error because modernizr causes the process.exit(1)
        modernizr.build(options, function (output) {
            resolve({
                cacheable: true,
                code: `var modernizr; var hadGlobal = 'Modernizr' in window; var oldGlobal = window.Modernizr; ${output} modernizr = window.Modernizr; if (hadGlobal) { window.Modernizr = oldGlobal; } else { delete window.Modernizr; } export default modernizr;`,
            });
        });
    });
};
