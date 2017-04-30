import test from 'ava';
import DB from '../../../dist';
import Schema from '../../../dist/schemas/schema';

test('throws - Error missing database', t => {
	const messages = 'class Schema require DatabaseManager interface';
	t.throws(() => new Schema(), messages);
	t.throws(() => new Schema(Object), messages);
	t.throws(() => new Schema(new Object), messages);
});

test('not throws instance Schema class', t => {
	const db = new DB();
	t.notThrows(() => new Schema(db));
});

test('throws an exception - create a new schema', t => {
	const schema = new Schema(new DB());
	t.throws(() => schema.create(['foo']), /Expected 'table' to of type 'string'/);
	t.throws(() => schema.create('foo', {}), /Expected 'callable' to of type 'function'/);
});

test('not throws an exception - create a new schema', t => {
	const schema = new Schema(new DB());
	t.notThrows(() => {
		// function keyword
		schema.create('foo', function () {});
	});

	t.notThrows(() => {
		// arrow function
		schema.create('bar', () => {});
	});
});

test('create a new schema returns undefined', t => {
	const schema = new Schema(new DB());
	t.is(schema.create('x', () => {}), undefined);
});
