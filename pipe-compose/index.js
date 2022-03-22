//  functional programming concept -
// executes from left to right;

// Eg without pipe

function addby2(val) {
  return val + 2;
}

function mulBy2(val) {
  return val * 2;
}

function subBy2(val) {
  return val - 2;
}

const result = addby2(4);
const result1 = mulBy2(result);
const final = subBy2(result1);

// console.log(final);

// With pipe

// const pipe =
//   (...functions) =>
//   (value) => {
//     return functions.reduce((currentValue, currentFunction) => {
//       return currentFunction(currentValue);
//     }, value);
//   };

const pipe = function (...functions) {
  return function (value) {
    return functions.reduce((curr, currentFunction) => {
      return currentFunction(curr);
    }, value);
  };
};

const compose = function (...functions) {
  return function (value) {
    return functions.reduceRight((curr, currentFunction) => {
      return currentFunction(curr);
    }, value);
  };
};

const data_pipe = pipe(addby2, mulBy2, subBy2)(4);
const data_compose = compose(addby2, mulBy2, subBy2)(4);
console.log(data_pipe);
console.log(data_compose);
