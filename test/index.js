import test from 'ava';
import DatabaseManager from '../dist';
import Schema from '../dist/schemas/schema';

const driver = require('./helpers/driver');

test('throws - invalid connection options', t => {
	const DB = new DatabaseManager;
	const messages = 'Invalid connection options';
	t.throws(() => DB.setConnection({}), messages);
	t.throws(() => DB.setConnection([{}]), messages);
	t.throws(() => DB.setConnection({driver: {}}), messages);
	t.throws(() => DB.setConnection({driver: ''}), messages);
});

test('not throws - valid connection options', t => {
	const DB = new DatabaseManager;
	t.notThrows(() => DB.setConnection({driver: 'foo'}));
	t.notThrows(() => DB.setConnection(driver.mysql));
});

test('has connection with associated driver name', t => {
	const DB = new DatabaseManager;
	DB.setConnection({driver: 'foo'});
	t.true(DB.hasConnection('foo'));
});

test('get the connection', t => {
	const DB = new DatabaseManager;
	DB.setConnection(driver.mysql);

	t.truthy(DB.getConnection());
	t.is(typeof DB.getConnection(), 'object');
	t.true(typeof DB.getConnection() === 'object');
	t.deepEqual(DB.getConnection(), driver.mysql);
});

test('throws - Error no connection was provided', t => {
	const DB = new DatabaseManager;

	t.throws(() => DB.schema(), Error);
});

test('schema() - returns an instanceof Schema class', t => {
	const DB = new DatabaseManager;

	DB.setConnection(driver.mysql);
	t.true(DB.schema() instanceof Schema);
});
