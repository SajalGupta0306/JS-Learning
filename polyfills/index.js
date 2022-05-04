const MyPromise = require("./MyPromise");
const MyPromiseMultipleThen = require("./MyPromiseMultipleThen");

// https://jsfiddle.net/rangoeq6/1/
// Calling function once only

// https://jsfiddle.net/br9dxmh8/4/

const arr = [1, 2, 3, 4, 5];

// Map
var jsMap = arr.map((val) => val * 2);
/* console.log(jsMap); */

Array.prototype.myMap = function (cb) {
  var result = [];
  for (let i = 0; i < this.length; i++) {
    result.push(cb(this[i]));
  }
  return result;
};

var customMap = arr.myMap((val) => val * 2);
/* console.log(customMap); */

// Filter
var jsFilter = arr.filter((val) => val >= 3);
/* console.log(jsFilter); */

Array.prototype.myFilter = function (cb) {
  var result = [];
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i])) {
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

// bind
const name = {
  firstName: "Sajal",
  lastName: "Gupta",
};

const printName = function (city, country) {
  console.log(
    this.firstName + " " + this.lastName + " " + city + " " + country
  );
};

const jsBind = printName.bind(name, "Ynr");
jsBind("India");

Function.prototype.myCall = function (obj, ...args) {
  obj.callFn = this;
  obj.callFn(...args);
};

Function.prototype.myApply = function (obj, args) {
  obj.callFn = this;
  obj.callFn(...args);
};

Function.prototype.myBind = function (val, ...args) {
  const context = this;
  return function (...insideArgs) {
    context.apply(val, [...args, ...insideArgs]);
  };
};

const customBind = printName.myBind(name);
customBind("Ynr", "India");

// prmoises
// 1. with sync data in resolve
// 2. with async data in resolve
// 3. with reject scenario
// 4. with finally scenario

//1.
// const MyPromise = function (executor) {
//   let isResolved = false;
//   let resolvedData;

//   function resolve(value) {
//     resolvedData = value;
//     isResolved = true;
//   }

//   this.then = function (fn) {
//     if (isResolved) {
//       fn(resolvedData);
//     }
//     return this;
//   };

//   executor(resolve);
//   executor(reject);
// };

// new MyPromise((resolve) => {
//   resolve(10);
// })
//   .then((data) => {
//     console.log(`data is ${data}`);
//   })
//   .then((value) => {
//     console.log(`value is ${value}`);
//   });

new MyPromise((resolve) => {
  setTimeout(() => {
    resolve(10);
  }, 1000);
}).then((data) => {
  console.log(`data is ${data}`);
});

new MyPromiseMultipleThen((resolve) => {
  setTimeout(() => {
    resolve(20);
  }, 1000);
})
  .then((data) => {
    return data * 5;
  })
  .then((data) => {
    console.log(`data is ${data}`);
  });
