const MiniCssExtractPlugin = require('mini-css-extract-plugin');
/**
 * @param type {type}
 * @param config
 */
module.exports = ({
    type,
    config,
    loader,
}) => {
    switch (type) {
        case 'miniCssExtrac':
            return {
                loader: 'style-loader',
            };
        case 'custom':
            return loader;
        default:
            return {
                loader: MiniCssExtractPlugin.loader,
                options: {
                    publicPath: config.path.publicPathAssets,
                    // TODO mrknout na hot reaload. Asi už nebude potřeba
                    // only enable hot in development
                    // hmr: config.isDevelop,
                    // if hmr does not work, this is a forceful method.
                    // reloadAll: config.isProduction
                },
            };
    }
};
