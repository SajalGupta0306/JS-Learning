// momoization: caching the values for the already executed piece of code to avoid unnecessary processing time

// Memoization is an optimization technique used primarily to speed up computer programs by storing the results of expensive function calls and
// returning the cached result when the same inputs occur again

// eg: recursive function calls
// eg: fetch api call for same resource again and again
// calling the method with same set of input again and again

// Eg: 1
// square of a number

// https://jsfiddle.net/tLp5jys9/
// Fibonacci Sequence
// Factorial

// program to display fibonacci sequence using recursion
function fibonacci(num) {
  if (num < 2) {
    return num;
  } else {
    return fibonacci(num - 1) + fibonacci(num - 2);
  }
}

for (let i = 0; i < 25; i++) {
  console.log(fibonacci(i));
}
