const MyPromise = require("./MyPromise");
const MyPromiseMultipleThen = require("./MyPromiseMultipleThen");

// https://jsfiddle.net/1wsfaj8x/7/


// map

const arr = [1, 2, 3, 4];

const newArr = arr.map((val) => val * val);
// console.log(newArr);

// custom Map
// Map works on data< hence arr and it takes callback as argument, hence callback
// map returns a new array, hence newCustomArr
function customMap(data, callback) {
  let newCustomArr = [];
  for (let i = 0; i < data.length; i++) {
    newCustomArr.push(callback(data[i]));
  }
  return newCustomArr;
}

function squareItself(x) {
  return x * x;
}
// console.log(customMap(arr, squareItself));

// filter
const filterArr = arr.filter((val) => val > 2);
// console.log(filterArr);

// custom filter
function customFilter(data, callback) {
  let newFilterArr = [];
  for (let i = 0; i < data.length; i++) {
    if (callback(arr[i])) {
      newFilterArr.push(arr[i]);
    }
  }
  return newFilterArr;
}

function numberGreaterThan2(x) {
  if (x > 2) {
    return x;
  }
}
// console.log(customFilter(arr, numberGreaterThan2));

// reduce
const reduceArr = arr.reduce((acc, val) => {
  acc += val;
  return acc;
}, 0);

Array.prototype.customReduce = function(callback, initialValue) {
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
}

const result = arr.customReduce((acc, currVal) => {
  return acc + currVal;
}, 50);

console.log(result);

// bind
let name = {
  firstName: "Jack",
  lastName: "Sharma"
};

const myFunc = function (id, city) {
  console.log(`${this.name}, ${id}, ${city}`);
};

Function.prototype.myBind = function (val, ...args) {
  const func = this;
  return function (...newArgs) {
    func.apply(val, [...args, ...newArgs]);
  };
};

const newFunc = myFunc.myBind(name);

newFunc("New York");

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
