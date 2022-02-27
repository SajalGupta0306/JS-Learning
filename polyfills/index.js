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

// console.log(reduceArr);

// custom reduce
function customReduce(callback, initialValue) {
  if (arr.length === 0) {
    return "No elements in the array";
  }
  let previous = initialValue;
  for (let i = previous ? 0 : 1; i < arr.length; i++) {
    previous = callback(previous ? previous : arr[0], arr[i], i, arr);
  }
  return previous;
}

function sum(a, b) {
  return a + b;
}

console.log(customReduce(sum, 0));

// bind
let obj = {
  name: 'Jack',
};

let myFunc = function (id, city) {
  console.log(`${this.name}, ${id}, ${city}`);  
};

Function.prototype.myBind = function (obj, ...args) {
  let func = this;
  return function (...newArgs) {
    func.apply(obj, [...args, ...newArgs]);
  };
};

let newFunc = myFunc.myBind(obj, 'a_random_id')
newFunc('New York') 