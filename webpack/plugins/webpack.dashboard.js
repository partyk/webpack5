const DashboardPlugin = require('webpack-dashboard/plugin');

/**
 * @param options {{}}
 * @return {webpack.DashboardPlugin}
 */
module.exports = (options = {}) => {
    return new DashboardPlugin(options);
};
