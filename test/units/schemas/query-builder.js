import test from 'ava';
import env from 'prop-env';
import QueryBuilder from '../../../dist/schemas/query-builder';

class MockDatabase {
	constructor() {
		this.connection = require('../../helpers/driver').mysql;
	}
	getConnection() {
		return this.connection;
	}
}

const query = new QueryBuilder({
	database: new MockDatabase()
});

test('query.createTable: should arguments must a valid type', t => {
	const table = query.createTable('foo-table');
	t.true(Array.isArray(table.statements));
	t.truthy(table.statements);
	t.true(table.statements.length > 0);
	t.deepEqual(table.statements, [
		`CREATE TABLE \`${env('DB_DATABASE')}\`.\`foo-table\``
	]);
});
