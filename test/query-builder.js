import test from 'ava';
import QB from '../dist/schemas/query-builder';

test('throws - create an instance from abstract class', t => {
	t.throws(() => new QB(), /Cannot create an instance of the abstract class/);
});

test('notThrows - class extends from abstract class', t => {
	t.notThrows(() => {
		class Foo extends QB {}
		new Foo();
	});

	t.notThrows(() => {
		class Foo extends QB {
			constructor() {
				super();
			}
		}
		new Foo();
	});
});
