// momoization: caching the values for the already executed piece of code to avoid unnecessary processing time

// Memoization is an optimization technique used primarily to speed up computer programs by storing the results of expensive function calls and
// returning the cached result when the same inputs occur again

// eg: recursive function calls
// eg: fetch api call for same resource again and again
// calling the method with same set of input again and again

// Eg: 1
// square of a number

// https://jsfiddle.net/g1nha4wc/6/
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
const n = 106;
console.log(`Fibonnaci of ${n} is ${memoFib(n)}`);

//  Factorial of a number
const memoFac = (n, cached = {}) => {
  let result;
  if (n in cached) {
    return cached[n];
  }
  if (n === 0) {
    result = 0;
  } else if (n === 1) {
    return 1;
  } else {
    result = n * memoFac(n - 1, cached);
  }
  cached[n] = result;
  return result;
};
const t = 150;
console.log(`Factorial of ${t} is ${memoFac(t)}`);
