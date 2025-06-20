// closure: function along with its lexical scope bundled together
// A closure is the combination of a function and the lexical environment within which that function was declared. i.e
// It is an inner function that has access to the outer or enclosing function’s variables. The closure has three scope chains

//////////////////////////////////////////////////////////////////////////////////////////////////////

// A closure is a function defined inside another function and has access to its lexical scope even when it is executing outside its lexical scope.
// The closure has access to variables in three scopes:

// Variables declared in its own scope
// Variables declared in the scope of the parent function
// Variables declared in the global scope

//////////////////////////////////////////////////////////////////////////////////////////////////////

// A Closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment).
// That means, each function in JS has access to its surrounding environment (which includes variables and functions).

// Own scope where variables defined between its curly brackets
// Outer function’s variables
// Global variables

// https://dmitripavlutin.com/javascript-closures-interview-questions/

// Disadv
// 1: Till the time its active, the memory can’t be garbage collected.
// 2: It slows down the performance, because function within other function creates duplicate in memory.

// Adv
// 1. Protect the variable security within the function, and strengthen encapsulation
// 2. Closures are essential for timers, event handlers, and async logic, where inner functions need access to outer variables.

// Use-cases
// 1. When working with Event handler
// 2. Useful in callbacks
// 3. Useful in functional programming: Currying

Practical Case:
Encapsulation

function createCounter() {
  let count = 0;
  
  return {
    increment: function() {
      count++;
      return count;
    },
    decrement: function() {
      count--;
      return count;
    },
    getCount: function() {
      return count;
    }
  };
}

const counter = createCounter();
console.log(counter.increment()); // 1
console.log(counter.increment()); // 2
console.log(counter.decrement()); // 1

//////////////////////////////////////////////////////////////////

function test() {
  var a = 10;
  function test1() {
    console.log(a);
  }
  test1();
}
test();

// eg 2: using setTimeout
// setTimeout holds the lexical scope of i (reference of i) and at the end of setTimeout, value of i is 5,
// therefore it prints i 5 times (same memory location because of var)
function main() {
  for (var i = 0; i < 5; i++) {
    setTimeout(() => {
      console.log(i);
    }, i * 3000);
  }
}
main();

// eg 2: using setTimeout
// setTimeout holds the lexical scope of i (reference of i) and at the end of each setTimeout, value of i is 0,1,2,3,4
// therefore it prints i 0,1,2,3,4  (different memory location because of let)
function temp() {
  for (let x = 0; x < 5; x++) {
    setTimeout(() => {
      console.log(x);
    }, x * 1000);
  }
}
temp();

/// closure example

const Adder = () => {
  let result = 0;
  return function (...args) {
    result = args.reduce((acc, val) => acc + val, result);
    return result;
  };
};

const add = Adder();
add(20, 30, 40); // 20
add(25); // 45
// ...
