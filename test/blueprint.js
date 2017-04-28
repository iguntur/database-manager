import test from 'ava';
import Blueprint from '../dist/schemas/blueprint';

test('not throws instance Blueprint class', t => {
	t.notThrows(() => new Blueprint());
});
