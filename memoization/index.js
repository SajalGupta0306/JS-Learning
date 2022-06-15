// momoization: caching the values for the already executed piece of code to avoid unnecessary processing time

// Memoization is an optimization technique used primarily to speed up computer programs by storing the results of expensive function calls and
// returning the cached result when the same inputs occur again

// eg: recursive function calls
// eg: fetch api call for same resource again and again
// calling the method with same set of input again and again

// Eg: 1
// square of a number

// https://jsfiddle.net/tLp5jys9/

// memoize a function with single/ multiple args
// https://jsfiddle.net/0fqryga5/2/

// Fibonacci Sequence
const memoFib = (n, cached = {}) => {
  let result;
  if (n in cached) {
    return cached[n];
  }
  if (n <= 2) {
    result = 1;
  } else {
    result = memoFib(n - 1, cached) + memoFib(n - 2, cached);
  }
  cached[n] = result;
  return result;
};
const n = 45;
console.log(`fibonacci number of ${n} is ${memoFib(n)}`);

//  Factorial of a number
const memoFact = (n, cached = {}) => {
  let result;
  if (n in cached) {
    return cached[n];
  }
  if (n === 0) {
    result = 0;
  } else if (n === 1) {
    result = 1;
  } else {
    result = n * memoFact(n - 1, cached);
  }
  cached[n] = result;
  return result;
};
const t = 36;
console.log(`Factorial of ${t} is ${memoFact(t)}`);

// Memoize a Function
function memoize(func) {
  const cache = {};
  return function (...args) {
    const argsIndex = JSON.stringify(args);
    if (!cache[argsIndex]) {
      cache[argsIndex] = func(...args);
    }
    return cache[argsIndex];
  };
}

const clumsysquare = (num1, num2) => {
  for (let i = 1; i <= 100000000; i++);
  return num1 * num2;
};

const result = memoize(clumsysquare);

console.time("First call");
console.log(result(1234, 5678));
console.timeEnd("First call");

console.time("Second call");
console.log(result(1234, 5678));
console.timeEnd("Second call");
