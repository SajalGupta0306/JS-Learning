//  functional programming concept -
// executes from left to right;

// Eg without pipe

function addby2(val) {
  return (val += 2);
}

function mulBy2(val) {
  return (val *= 2);
}

function subBy2(val) {
  return (val -= 2);
}

const result = addby2(4);
const result1 = mulBy2(result);
const final = subBy2(result1);

console.log(final);

// With pipe

// const pipe = (...func) => {
//   return (value) => {
//     return func.reduce((val, fn) => fn(val), value);
//   };
// };

// const pipe = function (...func) {
//   return (value) => {
//     return func.reduce((prev, currFn) => currFn(prev), value);
//   };
// };

const pipe =
  (...functions) =>
  (value) => {
    return functions.reduce((currentValue, currentFunction) => {
      return currentFunction(currentValue);
    }, value);
  };

const data = pipe(addby2, mulBy2, subBy2)(4);
console.log(data);
