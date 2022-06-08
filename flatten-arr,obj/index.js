// https://jsfiddle.net/z0ktc4u5/6/

// Deep Clone of an obj
// https://jsfiddle.net/dkvrL094/3/

// merge two objects without inbuilt functions
const obj1 = {
  name: "prashant",
  age: 23,
};

const obj2 = {
  qualification: "BSC CS",
  loves: "Javascript",
};

const mergeObj = (...args) => {
  const result = {};
  for (let i = 0; i < args.length; i++) {
    merge(args[i]);
  }

  function merge(obj) {
    for (let key in obj) {
      const value = obj[key];
      result[key] = value;
    }
  }
  return result;
};

// flattened with depth
function* flattenWithDepth(array, depth) {
  if (depth === null || typeof depth === "undefined") {
    depth = Infinity;
  }

  for (const item of array) {
    if (Array.isArray(item) && depth > 0) {
      yield* flattenWithDepth(item, depth - 1);
    } else {
      yield item;
    }
  }
}

const arr = [1, 2, 3, [4, 5, [6, 7], 8], [10, 11, [12, [13]]], 9];
const flattenedArr = [...flattenWithDepth(arr, 1)];

// Deep Clone of an obj
const obj = {
  name: {
    firstName: "ABC",
    lastName: "XYZ",
  },
  address: {
    street: {
      number: 10,
      name: "Street",
    },
    district: function () {
      return new Date();
    },
  },
  phoneNumber: [100000, 200000],
};

function deepClone(object) {
  var newObject = {};
  for (var key in object) {
    if (object[key] && typeof object[key] === "object") {
      if (Array.isArray(object[key])) {
        newObject[key] = object[key];
      } else {
        newObject[key] = deepClone(object[key]);
      }
    } else {
      newObject[key] = object[key];
    }
  }
  return newObject;
}

const clonedObj = deepClone(obj);

console.log(clonedObj.address.district());

const data = [
  { name: "freshworks1", id: 1 },
  { name: "amazon", id: 2 },
  { name: "freshworks", id: 2 },
  { name: "amazon", id: 1 },
  { name: "freshworks", id: 1 },
  { name: "google", id: 2 },
  { name: "google", id: 2 },
  { name: "freshworks", id: 11 },
];
const result = {};
const temp = [];
data.forEach((record) => {
  if (!result[record.name]) {
    result[record.name] = 1;
    temp.push(JSON.stringify(record));
  } else {
    if (!temp.includes(JSON.stringify(record))) {
      result[record.name] += 1;
    }
  }
});
console.log(result);

////////////////////////////
// toggle

const toggle = (...list) => {
  let current = -1;
  const lastIndex = list.length - 1;
  return function () {
    if (current >= lastIndex) {
      current = 0;
    } else {
      current += 1;
    }
    return list[current];
  };
};
const hello = toggle("1", "2", "3");
console.log(hello()); // "1"
console.log(hello()); // "2"
console.log(hello()); // "3"
console.log(hello()); // "1"
console.log(hello()); // "2"
console.log(hello()); // "3"

//////////////////////////////
function message() {
  console.log("hello");
}

function sampler(fn, count, thisContext) {
  let counter = 0;
  return function (...args) {
    const context = this;
    if (++counter !== count) {
      return;
    }
    fn.apply(context || thisContext, args);
    counter = 0;
  };
}

const sample = sampler(message, 4);
sample();
sample();
sample();
sample(); // this will be executed
sample();
sample();
sample();
sample(); // this will be executed
