const path = require('path');
// const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const DependencyExtractionWebpackPlugin = require('@wordpress/dependency-extraction-webpack-plugin');
const defaultConfig = require('./node_modules/@wordpress/scripts/config/webpack.config.js');
const LiveReloadPlugin = require('webpack-livereload-plugin');

const devMode = process.env.NODE_ENV !== 'production';

const wplib = [
    'hooks',
];

// Livereload plugin
const getLiveReloadPort = (inputPort) => {
    const parsedPort = parseInt(inputPort, 10);

    return Number.isInteger(parsedPort) ? parsedPort : 35729;
};

module.exports = {
    ...defaultConfig,
    entry: {
        'frontend': path.resolve(process.cwd(), 'src', 'js', 'frontend', 'index.js'),
    },
    output: {
        path: path.resolve(process.cwd(), `assets/${devMode ? 'unminified' : 'minified'}`),
        filename: devMode ? 'js/[name].js' : 'js/[name].min.js',
    },
    externals: wplib.reduce((externals, lib) => {
        externals[`wp.${lib}`] = {
            window: ['wp', lib],
        };

        return externals;
    }, {
        'wp': 'wp',
        'lodash': '_',
        'jquery': 'jQuery',
        'react': 'React',
        'react-dom': 'ReactDOM',
    }),
    plugins: [
        // new CleanWebpackPlugin({ cleanOnceBeforeBuildPatterns: ['**/*', '!fonts/**', '!images/**'] }),
        process.env.WP_BUNDLE_ANALYZER && new BundleAnalyzerPlugin(),
        new MiniCssExtractPlugin({ filename: devMode ? 'css/[name].css' : 'css/[name].min.css' }),
        devMode && new LiveReloadPlugin({ port: getLiveReloadPort(process.env.WP_LIVE_RELOAD_PORT) }),
        !process.env.WP_NO_EXTERNALS && new DependencyExtractionWebpackPlugin({ injectPolyfill: true }),
    ].filter(Boolean),
};