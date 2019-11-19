/* eslint-disable */
// You can add other webpack configuration (plugins, loaders, etc).
// Apart from ES6 Import/Export, Gulp was able to do all my other work so this file is mainly empty.
const entry = require('./entry-gutenberg');

module.exports = {
	entry,
	mode: 'production',
	devtool: 'source-map',
	output: {
		filename: '[name].js',
	},
	module: {
		rules: [
			{ // This tests js files and bundles them
				test: /\.js?$/,
				exclude: /(node_modules|bower_components)/,
				use: ['babel-loader']
			},
			{
				test: /\.(gif|png|jpe?g)$/i,
				exclude: /(node_modules|bower_components)/,
				use: [
					'file-loader',
					{
						loader: 'image-webpack-loader',
						options: {
							bypassOnDebug: true,
						},
					},
				],
			}
		]
	}
};