/**
 * @DOC https://www.npmjs.com/package/dotenv-webpack
 */
const Dotenv = require('dotenv-webpack');

module.exports = (options = {}) => {
    return new Dotenv(options);
};
