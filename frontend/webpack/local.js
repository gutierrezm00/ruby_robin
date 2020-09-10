const path = require('path');
const { merge } = require('webpack-merge');
const webpack = require('webpack');
const environment = require('./environment');

module.exports = merge(environment, {
	mode: 'development',
	devtool: 'eval-cheap-module-source-map',
	// plugins: [
	// 	new webpack.DefinePlugin({
	// 		__API__: JSON.stringify('//local.prometheus.ms:5000'),
	// 	})
	// ],
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'eslint-loader',
				options: {
					// emitWarning: true,
					// eslint options (if necessary)
				},
			},
		]
	}
});
