import test from 'ava';
import Migrator from '../../../dist/schemas/migrator';
// Import QB from '../../../dist/schemas/query-builder';

test('throws - Error missing query builder instance', t => {
	t.throws(() => new Migrator(), /Should `query` arguments must be `instanceof QueryBuilder`/);
});
