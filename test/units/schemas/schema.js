import test from 'ava';
import DB from '../../../dist';
import Schema from '../../../dist/schemas/schema';

test('create a new schema returns undefined', t => {
	const schema = new Schema();
	schema.database = new DB();
	t.is(schema.create('foo', () => {}), undefined);
});
