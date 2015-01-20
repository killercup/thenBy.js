/**
 * Copyright 2013 Teun Duynstee
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * @license
 *
 * Updated 2015 by Pascal Hertleif for CommonJS support and property shorthand.
 */

function compareProp(c) {
  if (typeof c === 'function') { return c; }

  return function (v1, v2) { return v1[c] - v2[c]; };
}

var extend, tb;

/*
 * Mixin for the `thenBy` property
 */
extend = function extendThenBy(c) {
  var fn = compareProp(c);

  fn.thenBy = tb;
  return fn;
};

/*
 * Adds a secondary compare function to the target function (`this` context)
 * which is applied in case the first one returns 0 (equal) returns a new
 * compare function, which has a `thenBy` method as well
 */
tb = function thenBy(c) {
  var x = this;
  var y = compareProp(c);
  return extend(function (a, b) {
    return x(a, b) || y(a, b);
  });
};

module.exports = extend;
