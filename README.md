# fun-all

A small JavaScript utility library for numeric addition, value equality, and random identifiers.

[![npm version](https://img.shields.io/npm/v/fun-all.svg)](https://www.npmjs.com/package/fun-all)
[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](#license)

**English** | [简体中文](./README.zh-CN.md)

## Overview

`fun-all` provides three standalone helpers with a straightforward API:

- **`add`** — convert two values to numbers and add them.
- **`eq`** — compare values using SameValueZero equality, including `NaN`.
- **`randomId`** — generate a UUID v4-shaped string for non-security-sensitive use.

The library ships as a UMD bundle, usable through CommonJS or as the browser global `Fun`. It is a small utility collection, not a full functional-programming framework.

## Contents

- [Installation](#installation)
- [Quick start](#quick-start)
- [API reference](#api-reference)
- [TypeScript status](#typescript-status)
- [Local development](#local-development)
- [Contributing](#contributing)
- [License](#license)

## Installation

```sh
npm install fun-all
```

Or with Yarn:

```sh
yarn add fun-all
```

## Quick start

### Node.js / CommonJS

```js
const { add, eq, randomId } = require('fun-all');

add(2, 3);       // 5
eq(NaN, NaN);   // true
randomId();     // e.g. 'a71f892c-314b-4df0-8a90-09caa8c20635'
```

### With a JavaScript bundler

In bundlers that support named imports from CommonJS/UMD packages:

```js
import { add, eq, randomId } from 'fun-all';

add(10, 5);   // 15
eq('5', 5);   // false
randomId();   // a new UUID-shaped string
```

### Browser

Load the UMD bundle from a CDN. The version is pinned here for reproducibility:

```html
<script src="https://cdn.jsdelivr.net/npm/fun-all@0.1.5/lib/fun_all.js"></script>
<script>
  console.log(Fun.add(2, 3));     // 5
  console.log(Fun.eq(NaN, NaN)); // true
  console.log(Fun.randomId());
</script>
```

## API reference

### `add(a, b)`

Returns `Number(a) + Number(b)`.

| Parameter | Description |
| --- | --- |
| `a` | First value, converted with `Number()` |
| `b` | Second value, converted with `Number()` |

**Returns:** a number. If either conversion produces `NaN`, the result is `NaN`.

```js
add(1, 2);           // 3
add('1', '2');       // 3, not '12'
add(-2, 5);          // 3
add('hello', 2);     // NaN
add(0.1, 0.2);       // 0.30000000000000004
```

Standard JavaScript number conversion and floating-point behavior apply. Values that cannot be converted with `Number()`, such as symbols, throw an error.

### `eq(value, other)`

Compares two values using [SameValueZero](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Equality_comparisons_and_sameness#same-value-zero_equality) equality: strict equality (`===`), with `NaN` considered equal to `NaN`.

**Returns:** a boolean.

```js
eq(1, 1);           // true
eq(1, '1');         // false
eq(NaN, NaN);       // true
eq(0, -0);          // true
eq({ a: 1 }, { a: 1 }); // false

const value = { a: 1 };
eq(value, value);   // true
```

Objects and arrays are compared by reference, not by their contents. This is not a deep-equality helper.

### `randomId()`

Generates a lowercase hexadecimal string in the form `xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx`, where `y` is one of `8`, `9`, `a`, or `b`.

**Parameters:** none.

**Returns:** a string of 36 characters.

```js
const id = randomId();
// Example: 'a71f892c-314b-4df0-8a90-09caa8c20635'
```

> **Security:** this helper uses `Math.random()`. It is not cryptographically secure and does not guarantee uniqueness. Do not use it for passwords, authentication tokens, or other security-sensitive identifiers. Use [`crypto.randomUUID()`](https://developer.mozilla.org/en-US/docs/Web/API/Crypto/randomUUID) where supported when a cryptographically generated UUID is required.

## TypeScript status

TypeScript declarations are currently incomplete:

- Only `add(a: number, b: number): number` is declared; `eq` and `randomId` are not.
- `index.d.ts` references `types/math.d.ts`, but the current package `files` list does not include the `types` directory.

Do not assume complete TypeScript support in the published package. Improvements to the declarations and package contents are welcome.

## Local development

```sh
git clone https://github.com/Fullsize/fun.git
cd fun
yarn install
```

| Command | Purpose |
| --- | --- |
| `yarn dev` | Run Rollup in watch mode |
| `yarn build:umd` | Build `lib/fun_all.js` |
| `yarn build:umd:min` | Build `lib/fun_all.min.js` |
| `yarn build:cjs` | Run Babel on `source/`, writing output to `src/` |

Despite its name, `build:cjs` uses the current Babel configuration with `modules: false`; it does not transform ES module syntax into CommonJS.

Public exports are defined in [`source/index.js`](./source/index.js). `source/concat.js` is an unfinished placeholder and is not part of the public API. There is currently no automated test script configured.

## Contributing

Bug reports, documentation improvements, and focused pull requests are welcome.

1. [Open an issue](https://github.com/Fullsize/fun/issues) describing the problem or proposed change.
2. Keep changes focused and include examples of the expected behavior.
3. For API changes, update both README translations and the relevant TypeScript declarations.
4. Run the relevant build command before submitting a pull request.

## License

[ISC](https://opensource.org/license/isc), as declared in [`package.json`](./package.json).
