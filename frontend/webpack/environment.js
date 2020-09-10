const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
	// Sets the targeted environment
	entry: {
		public: [path.join(__dirname, '../src')],
	},
	target: 'web',
	resolve: {
		extensions: ['.js', '.jsx', '.scss', '.css'],
	},
	module: {
		rules: [
			// Babel loader for es6 support
			{
				test: /\.(js|jsx)?$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
				},
			},
			{
				test: /\.(css)?$/,
				use: [
					'style-loader',
					'css-loader',
				]
			},
			{
				test: /\.s[ac]ss$/i,
				use: [
					'style-loader',
					'css-loader',
					{
						loader: 'sass-loader',
						options: {
							implementation: require('sass'),
						},
					},
				],
			},
			{
				test: /\.svg$/,
				loader: 'svg-inline-loader'
			},
			{
				test: /.*\.(gif|png|jpe?g)$/i,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '[name]-[hash].[ext]',
							outputPath: '/images/',
							publicPath: '/assets/images/',
						},
					},
				],
			},
		],
	},
	output: {
		path: path.join(__dirname, '../public/assets/'),
		publicPath: '/assets/', // change /dev/assets/ for aws
		filename: '[name]-[hash:6].js',
		chunkFilename: '[name]-[hash:6].js',
	},
	optimization: {
		splitChunks: {
			chunks: 'all',
			cacheGroups: {
				react: {
					test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
					name: 'react',
					chunks: 'all',
				},
			},
		},
	},
	plugins: [
		new webpack.NoEmitOnErrorsPlugin(),
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			alwaysWriteToDisk: true,
			title: 'RubyRobin',
			chunks: ['public', 'react', 'vendors~public'],
			filename: path.join(__dirname, '../public/index.html'),
			template: path.join(__dirname, '/template.html'),
		}),
		new HtmlWebpackHarddiskPlugin(),
		new webpack.DefinePlugin({
			VERSION: Date.now()
		})
	],
};
