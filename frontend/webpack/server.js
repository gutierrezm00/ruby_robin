const path = require('path');
const webpack = require('webpack');

module.exports = {
	// Make sure to set publicPath so Hot Reload will work correctly.
	output: {
		publicPath: '//local.ruby_robin.zz:4000/',
	},
	plugins: [
		new webpack.NamedModulesPlugin(),
		new webpack.HotModuleReplacementPlugin(),
	],
	devServer: {
		public: 'local.ruby_robin.zz:4000',
		https: true,
		contentBase: path.join(__dirname, '../public/'),
		port: 4000,
		historyApiFallback: true,
		hot: true,
		overlay: true,
		compress: true,
		inline: true,
	},
};
