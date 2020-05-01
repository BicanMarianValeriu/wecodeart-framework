const path = require('path');
const autoprefixer = require('autoprefixer');
const postcssPresetEnv = require('postcss-preset-env');
const IgnoreEmitPlugin = require('ignore-emit-webpack-plugin');
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
        'js/frontend': path.resolve(process.cwd(), 'src', 'js', 'frontend.js'),
        'css/frontend': path.resolve(process.cwd(), 'src', 'scss', 'frontend', 'style.scss'),
    },
    output: {
        path: path.resolve(process.cwd(), `assets/${devMode ? 'unminified' : 'minified'}`),
        publicPath: `${devMode ? '/wecodeart' : ''}/wp-content/themes/wecodeart/assets/`,
        filename: (chunkData) => {
            let { chunk: { name, entryModule: { rawRequest } } } = chunkData;

            let filename = '[name].js';
            
            if (name === 'index') {
                rawRequest = rawRequest ? rawRequest : `[name].js`;
                const serviceName = rawRequest.replace('../', '').replace('./', '').replace('src/', '');
                filename = serviceName;
            }

            if (name === 'index.scss' || name === 'index.scss.css') {
                const serviceName = rawRequest.replace('../', '').replace('./', '').replace('src/scss', 'css/');
                filename = serviceName.split('/').slice(0, -1).filter(Boolean).join('/') + '/index.js';
            }

            return filename;
        },
        chunkFilename: '[name].js',
    },
    optimization: {
        ...defaultConfig.optimization,
        namedChunks: true,
        splitChunks: {
            cacheGroups: {
                gutenberg: {
                    test: /^[^\/]+\/gutenberg\/?(?:[^\/]+\/?)*$/,
                    name: "gutenberg",
                    chunks: 'all',
                },
                default: false,
            },
        },
    },
    module: {
        ...defaultConfig.module,
        rules: [
            ...defaultConfig.module.rules,
            {
                test: /\.(sc|sa|c)ss$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            hmr: devMode,
                            reloadAll: true,
                        }
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: devMode,
                            url: false,
                        },
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            ident: 'postcss',
                            sourceMap: devMode,
                            plugins: [
                                postcssPresetEnv(),
                                autoprefixer({
                                    'overrideBrowserslist': ['> 1%', 'last 3 versions']
                                }),
                            ]
                        },
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: devMode,
                        },
                    },
                ],
            },
        ],
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
        /* ...defaultConfig.plugins, */ // We Use custom similar setup but with BSync
        process.env.WP_BUNDLE_ANALYZER && new BundleAnalyzerPlugin(),
        new MiniCssExtractPlugin(),
        new IgnoreEmitPlugin([
            'css/frontend.js',
            'css/frontend.asset.php',
            'css/frontend.deps.json',

        ]),
        !devMode ? new DependencyExtractionWebpackPlugin({
            injectPolyfill: true
        }) : false,
        devMode ? new BrowserSyncPlugin({
            host: 'localhost',
            proxy: `http://working.on/wecodeart/`,
            port: 3000,
        }, {
            injectCss: true,
        }) : false
    ].filter(Boolean),
};