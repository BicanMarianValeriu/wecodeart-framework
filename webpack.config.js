const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const DependencyExtractionWebpackPlugin = require('@wordpress/dependency-extraction-webpack-plugin');
const defaultConfig = require('./node_modules/@wordpress/scripts/config/webpack.config.js');

const devMode = process.env.NODE_ENV !== 'production';

const wplib = [
    'hooks',
];

module.exports = {
    ...defaultConfig,
    entry: {
        'frontend': path.resolve(process.cwd(), 'src', 'js', 'frontend.js'),
    },
    output: {
        path: path.resolve(process.cwd(), `assets/${devMode ? 'unminified' : 'minified'}`),
        publicPath: `${devMode ? '/wecodeart' : ''}/wp-content/themes/wecodeart/assets/`,
        filename: devMode ? 'js/[name].js' : 'js/[name].min.js',
    },
    optimization: {
        ...defaultConfig.optimization,
        splitChunks: {},
        namedChunks: true,
    },
    externals: wplib.reduce((externals, lib) => {
        externals[`wp.${lib}`] = {
            window: ['wp', lib],
        };

        return externals;
    }, {
        'wp': 'wp',
        'jquery': 'jQuery',
        'react': 'React',
        'react-dom': 'ReactDOM',
    }),
    plugins: [
        process.env.WP_BUNDLE_ANALYZER && new BundleAnalyzerPlugin(),
        new MiniCssExtractPlugin({
            esModule: false,
            filename: devMode ? 'css/[name].css' : 'css/[name].min.css',
        }),
        !process.env.WP_NO_EXTERNALS && new DependencyExtractionWebpackPlugin({ injectPolyfill: true }),
        devMode ? new BrowserSyncPlugin({
            host: 'localhost',
            proxy: `http://working.on/wecodeart/`,
            port: 3000,
        }, {
            injectCss: true,
        }) : false
    ].filter(Boolean),
};