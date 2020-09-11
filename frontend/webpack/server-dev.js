const { merge } = require('webpack-merge');
const development = require('./development');
const server = require('./server');

module.exports = merge(development, server);
