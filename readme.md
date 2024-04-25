# clone-array-objects ![CI](https://github.com/palashmon/clone-array-objects/actions/workflows/main.yml/badge.svg)

> Tiny module to clone an array of objects

## Install

```
$ npm i clone-array-objects
```

## Usage

This module helps us to get cloned array of objects

```js
const cloneArrayObjects = require('clone-array-objects');
let users = [{ id: 1, username: 'bret' }, { id: 2, username: 'samantha' }];

// Clone this users array
let clonedUsers = cloneArrayObjects(users);
console.log(clonedUsers);
//=> [{ id: 1, username: 'bret' }, { id: 2, username: 'samantha' }];

// Let us modify one of the object key value in the actual users array
users[1].username = 'ava';

// So, actual users array has been updated now
console.log(users);
//=> [{ id: 1, username: 'bret' }, { id: 2, username: 'ava' }];

// But, the cloned users array is still the same
console.log(clonedUsers);
//=> [{ id: 1, username: 'bret' }, { id: 2, username: 'samantha' }];
```

## API

### cloneArrayObjects(arrayInput)

#### arrayInput

Type: `Array`<br>
Default: `[]`

Must be a JavaScript Array. This is main array of object that we will like to clone.

## License

MIT © [Palash Mondal](https://github.com/palashmon)
