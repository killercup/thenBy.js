thenBy.js
=========

`thenBy` is a javascript micro library that helps sorting arrays on multiple keys. It allows you to use the [native Array::sort() method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort) of javascript, but pass in multiple functions to sort that are composed with `firstBy().thenBy().thenBy()` style.

The original version was written by Teun Duynstee.

## Install

```sh
npm install --save killercup/thenBy.js
```

```js
var firstBy = require('then-by');
```

## Example:

```javascript
// first by length of name, then by population, then by ID
data.sort(
  firstBy(function (v1, v2) { return v1.name.length - v2.name.length; })
  .thenBy(function (v1, v2) { return v1.population - v2.population; })
  .thenBy(function (v1, v2) { return v1.id - v2.id; })
);

// Using property keys
data.sort(
  firstBy(function (v1, v2) { return v1.name.length - v2.name.length; })
  .thenBy('population')
  .thenBy('id')
);
```

Thanks a lot to https://github.com/bergus for his improvements.
