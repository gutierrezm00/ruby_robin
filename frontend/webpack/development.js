const { merge } = require('webpack-merge');
const webpack = require('webpack');
const environment = require('./environment');

module.exports = merge(environment, {
	mode: 'development',
	devtool: 'eval-cheap-module-source-map',
	// plugins: [
	// 	new webpack.DefinePlugin({
	// 		__API__: JSON.stringify('https://dev.api.prometheus.ms'),
	// 		// If Local: Use npm run start:local and run the server on port 5000
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
