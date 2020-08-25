const path = require('path');
const webpack = require('webpack');

module.exports = {
	// Make sure to set publicPath so Hot Reload will work correctly.
	output: {
		publicPath: '//local.temp.ms:3000/assets/',
	},
	plugins: [
		new webpack.NamedModulesPlugin(),
		new webpack.HotModuleReplacementPlugin(),
	],
	devServer: {
		public: 'local.temp.ms:3000',
		https: true,
		contentBase: path.join(__dirname, '../public/'),
		port: 3000,
		historyApiFallback: true,
		hot: true,
		overlay: true,
		compress: true,
		inline: true,
	},
};
