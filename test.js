import test from 'ava';
import cloneArrayObjects from './index.js';

test('should return a new array with cloned objects', t => {
	const input = [
		{name: 'John', age: 30},
		{name: 'Jane', age: 25},
	];
	const output = cloneArrayObjects(input);

	t.not(output, input); // Should not modify the original array
	t.deepEqual(output, input); // Should have the same values as the input
});

test('should throw a TypeError if the input is not an array', t => {
	const input = 'not an array';

	const error = t.throws(() => cloneArrayObjects(input));

	t.is(error.message, `Expected an array, got ${typeof input}`);
});

test('should throw a TypeError if any object in the array is null', t => {
	const input = [{name: 'John', age: 30}, null];

	const error = t.throws(() => cloneArrayObjects(input));

	t.is(error.message, 'Expected an object, got object');
});

test('should throw a TypeError if any object in the array is not an object', t => {
	const input = [{name: 'John', age: 30}, 'not an object'];

	const error = t.throws(() => cloneArrayObjects(input));

	t.is(error.message, 'Expected an object, got string');
});

test('should return an empty array if the input is an empty array', t => {
	const input = [];
	const output = cloneArrayObjects(input);

	t.deepEqual(output, []);
});
