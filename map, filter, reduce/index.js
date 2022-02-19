// array methods which are used to transform the array into the desired results

// map
// different syntaxes of using map function
// 1
const values = [12, 2, 3, 4, 5];
// function getDouble(x) {
//   return x * 2;
// }
// const output = values.map(getDouble);

// 2
const output = values.map(function getDouble(x) {
  return x * 2;
});
console.log(output);

// filter : filter values based on a certain condition
function numbersDividedBy2(x) {
  return x % 2 === 0;
}
const answer = values.filter(numbersDividedBy2);
console.log(answer);

// reduce
// always returns a single value  : sum of array or largest of array

// largest number in array
// acc: holds the result until last iteration
// curr: holds the current value/obj on which iteration will happen
const largest = values.reduce(function (acc, curr) {
  if (curr > acc) {
    acc = curr;
  }
  return acc;
}, 0);
console.log(`largest number is ${largest}`);
