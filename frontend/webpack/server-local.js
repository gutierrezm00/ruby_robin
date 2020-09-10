const { merge } = require('webpack-merge');
const local = require('./local');
const server = require('./server');

module.exports = merge(local, server, {
	devServer: {
		https: false,
	},
});
