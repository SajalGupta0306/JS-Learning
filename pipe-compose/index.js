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
console.log(final);

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

// async composition
const asyncCompose = (...fns) => (x) => 
  fns.reduceRight(
    (acc, fn) => acc.then(fn), 
    Promise.resolve(x)
  );

// Example usage:
const asyncAdd5 = async (x) => x + 5;
const asyncMultiply3 = async (x) => x * 3;

asyncCompose(asyncMultiply3, asyncAdd5)(10).then(console.log); // 45

const data_pipe = pipe(addby2, mulBy2, subBy2)(4);
const data_compose = compose(addby2, mulBy2, subBy2)(4);
console.log(data_pipe);
console.log(data_compose);
