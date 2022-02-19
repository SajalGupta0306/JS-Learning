// momoization: caching the values for the already executed piece of code to avoid unnecessary processing time
// eg: recursive function calls
// eg: fetch api call for same resource again and again
// calling the method with same set of input again and again

// Eg: 1
// square of a number

var previousResult = [];
function square(x) {
  if (previousResult[x] != null) {
    return previousResult[x];
  }
  var result = 0;
  for (var i = 1; i <= x; i++) {
    for (var j = 1; j <= x; j++) {
      result += 1;
    }
  }
  // storing the final result in the array
  previousResult[x] = result;
  return result;
}
// console.log(square(50000));
// console.log(square(50000));
// console.log(square(50000));
// console.log(square(50000));
// console.log(square(50000));
// console.log(square(50000));
// console.log(square(50000));
// console.log(square(50000));

// Eg: 2
// fibonnaci of a number
function fib(n, previousFib = []) {
  let result;
  if (previousFib[n] != null) {
    return previousFib[n];
  }
  if (n === 0) {
    result = 0;
  } else if (n <= 2) {
    result = 1;
  } else {
    result = fib(n - 1, previousFib) + fib(n - 2, previousFib);
  }
  previousFib[n] = result;
  return result;
}
console.log(fib(1000));
//1,1,2,3,5,8,13,21
