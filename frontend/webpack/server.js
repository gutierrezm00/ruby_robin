const path = require('path');
const webpack = require('webpack');

module.exports = {
	output: {
		publicPath: '//local.ruby_robin.mg:4000',
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
	],
	devServer: {
		public: 'local.ruby_robin.mg:4000',
		https: true,
		port: 4000,
		hot: true,
		overlay: true,
		compress: true,
		inline: true,
	},
};
