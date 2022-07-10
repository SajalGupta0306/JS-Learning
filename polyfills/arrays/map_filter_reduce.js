const arr = [1, 2, 3, 4, 5];

// map

var jsMap = arr.map((val) => val * 2);
/* console.log(jsMap); */

Array.prototype.myMap = function (cb, thisArg) {
  var result = [];
  for (let i = 0; i < this.length; i++) {
    result.push(cb.call(thisArg, this[i], i, this));
  }
  return result;
};

var customMap = arr.myMap((val) => val * 2);
/* console.log(customMap); */

// filter

var jsFilter = arr.filter((val) => val >= 3);
/* console.log(jsFilter); */

Array.prototype.myFilter = function (cb, thisArg) {
  var result = [];
  for (let i = 0; i < this.length; i++) {
    if (cb.call(thisArg, this[i], i, this)) {
      result.push(this[i]);
    }
  }
  return result;
};

var customFilter = arr.myFilter((val) => val >= 3);
/* console.log(customFilter); */

// reduce

var jsReduce = arr.reduce((acc, val) => acc + val, 0);
/* console.log(jsReduce); */

Array.prototype.myReduce = function (callback, initialValue) {
  let accumulator;
  let firstIndex;
  if (arguments.length === 1) {
    accumulator = this[0];
    firstIndex = 1;
  } else {
    accumulator = initialValue;
    firstIndex = 0;
  }
  for (let index = firstIndex; index < this.length; index++) {
    accumulator = callback(accumulator, this[index], index, this);
  }
  return accumulator;
};

var customReduce = arr.myReduce((acc, val) => acc + val);
/* console.log(customReduce); */
