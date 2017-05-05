import test from 'ava';
import Migrator from '../../../dist/schemas/migrator';

test(t => {
	t.notThrows(() => new Migrator());
});
