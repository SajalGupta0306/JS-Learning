// https://www.youtube.com/watch?v=E3dboLSBeJc&t=580s

// shallow copy
// it doesn't do deep copy of nested objects
const obj1 = {
  a: 1,
};

// 1. Object.assign
var assignObj = Object.assign({}, obj1);

// 2. spread operator
const spreadObj = { ...obj1 };

// deep copy
// 1. JSON.parse(JSON.stringify(obj))
// it misses cloning the functions
const parsedObj = JSON.parse(JSON.stringify(obj1));

// 2. Deep Copy Polyfill
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

const clonedObj = deepClone(obj1);

////// Examples

const person = {
  name: "Sajal",
  address: {
    city: "Ynr",
    state: "haryana",
  },
};

const updated = { ...person, name: "Saksham" };
updated.address.city = "Bangalore";

console.log(person); // this is also updated with city = Bangalore
console.log(updated);
