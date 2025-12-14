// webpack.config.js
const Dotenv = require('dotenv-webpack');

module.exports = (options = {}) => {
    return new Dotenv(options);
};
