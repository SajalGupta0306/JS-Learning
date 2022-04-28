// memoize a function with single/ multiple args
// https://jsfiddle.net/0fqryga5/2/

function memoize_single(fn) {
  const cache = {};
  return function (param) {
    if (cache[param]) {
      return cache[param];
    } else {
      const result = fn(param);
      cache[param] = result;
      return result;
    }
  };
}

// memoize a function with multiple args
function memoize(fn) {
  const slice = Array.prototype.slice;
  const cache = {};
  return (...args) => {
    const params = slice.call(args);
    if (cache[params]) {
      return cache[params];
    } else {
      const result = fn(...args);
      cache[params] = result;
      return result;
    }
  };
}

function fib(n) {
  if (n <= 1) {
    return 1;
  }
  return fib(n - 1) + fib(n - 2);
}

fib = memoize(fib);
console.log(fib(100));
