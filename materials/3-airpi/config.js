var nitrogen = require('nitrogen')
  , Store = require('nitrogen-leveldb-store');

var config = {
//    host: 'api.nitrogen.io',
//    http_port: 443,
//    protocol: 'https'
};

config.store = new Store(config);

config.log_levels = ['info', 'warn', 'error'];

module.exports = config;
