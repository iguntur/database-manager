'use strict';
const DatabaseManager = require('../../');
const driver = require('./driver');

const DB = new DatabaseManager();

DB.setConnection(driver.mysql);

module.exports = DB;
