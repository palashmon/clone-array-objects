# clone-array-objects

[![Build Status](https://travis-ci.org/palashmon/clone-array-objects.svg?branch=master)](https://travis-ci.org/palashmon/clone-array-objects)
[![npm](https://img.shields.io/npm/v/clone-array-objects.svg)](https://www.npmjs.org/package/clone-array-objects)
[![codecov](https://codecov.io/gh/palashmon/clone-array-objects/branch/master/graph/badge.svg)](https://codecov.io/gh/palashmon/clone-array-objects)
[![Gzip Size](https://img.badgesize.io/https://unpkg.com/clone-array-objects?compression=gzip)](https://bundlephobia.com/result?p=clone-array-objects) 

Tiny module to clone an array of objects

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
