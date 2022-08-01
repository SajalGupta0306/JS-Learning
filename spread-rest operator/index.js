//spread operator : used to spread out array elements
// rest operator: used to combine elements into an array

// Rest
// The rest operator (…) allows us to call a function with any number of arguments and then access those excess arguments as an array.
// The rest operator also allows us in destructuring array or objects.

// spread
// The spread operator (…) allows us to expand an iterable like array into its individual elements.

// used to copy the object or array and store in a new object
const details = { name: "Sajal" };
const updatedDetails = { ...details, name: "Rob", age: "25" }; // it copies as well as updates name and adds age to the updated obj

console.log(updatedDetails);

// passing as an argument to a function

const arr = [1, 2, 3];

function test(v1, v2, v3) {
  return v1 + v2 + v3;
}

console.log(test(...arr));

// concating the arrays
let arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
arr1 = [...arr1, ...arr2];
console.log(arr1);

// adding elements of an array to another array
const data = [1, 2, 3];
const newData = [...data, 4, 5, 6];
console.log(newData);

// REST : condense multiple elements into an array
function multiplyBy2(multiplier, ...digits) {
  const result = [];
  digits.forEach(function (elem) {
    result.push(multiplier * elem);
  });
  return result;
}
console.log(multiplyBy2(2, 1, 2, 3));
