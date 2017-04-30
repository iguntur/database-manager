import test from 'ava';
import QueryBuilder from '../../../dist/schemas/query-builder';

test('not throws instance QueryBuilder class', t => {
	t.notThrows(() => new QueryBuilder());
});
