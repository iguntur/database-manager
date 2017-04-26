'use strict';
const env = require('prop-env');

module.exports = {
	mysql: {
		driver: env('DB_CONNECTION', 'mysql'),
		host: env('DB_HOST', 'localhost'),
		database: env('DB_DATABASE'),
		username: env('DB_USERNAME', 'root'),
		password: env('DB_PASSWORD', ''),
		charset: env('DB_CHARSET', 'utf8'),
		collation: env('DB_COLLATE', 'utf8_unicode_ci'),
		prefix: env('DB_PREFIX', '')
	}
}
