import test from 'ava';
import cloneArrayObjects from '.';

test('Return typeerror when arrayInput is not an array.', t => {
	const err = t.throws(() => {
		cloneArrayObjects(23);
	}, TypeError);
	t.is(err.message, 'Expected an array, got number');
});

test('Return empty array when no valid input passed.', t => {
	t.deepEqual(cloneArrayObjects(), []);
	t.deepEqual(cloneArrayObjects([]), []);
});

test('Test clone', t => {
	const actual = [{a: 1}, {b: 2}];
	const expected = [{a: 1}, {b: 2}];
	const modified = [{a: 1}, {b: 3}];
	t.deepEqual(cloneArrayObjects(actual), expected);
	expected[1].b = 3;
	t.notDeepEqual(cloneArrayObjects(actual), expected);
	t.deepEqual(modified, expected);
});
