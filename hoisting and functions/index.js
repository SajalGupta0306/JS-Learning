// hoisting: accessing the variables or functions before initializing it
// variables and function declarations are moved to the top of their scope before code execution
//  JavaScript only hoists declarations, not initialisation

// x  is undefined because memory allocation is done even before program runs and default value assigned in "undefined"
// getname() gets function assigned, as a result it displays the value
// var x;
// console.log(x);
// getname();

// x = 7;
// function getname() {
//   console.log("welcome");
// }

//Eg: 2
//a(); // since when the program runs, memory is assigned to function and we see answer > a
//b(); // error since b is treated a variable, hence it is undefined > b is not a function

// function statement or declaration
function a() {
  console.log("a");
}

// function expression
var b = function () {
  console.log("b");
};

// anonymous function
// function without a name : they can act as a value and assign it to a varaible: function expression

// first-class functions or first class citizens
// functions which are treated as arguments  and can be return as functions are known as first-class functions

function test() {
  console.log("test");
}

var c = function (value) {
  value();
};

c(test);

// first order functions
// functions which dont take another function as argument or return fnctions
// eg: console.log

// higher order functions
// function which takes func as an argument or returns functions as an argument
// functions passed to higher order functions are called callbacks
// Eg:
const values = [1, 2, 3, 4];
function areaCircle(radius) {
  return Math.PI * radius * radius;
}

function diameterCircle(radius) {
  return 2 * radius;
}

const calculate = (data, circleLogic) => {
  const results = [];
  data.forEach((d) => {
    results.push(circleLogic(d));
  });
  return results;
};

console.log(calculate(values, areaCircle));
console.log(calculate(values, diameterCircle));

// pure functions
// functions with no side effects
// (accessing/modifying the global variables inside function, no console statements(external API), no DOM Manipulations, no external Calls - Fetch/XHR)
// and always returns the same value for the given output
// they are predictable, readable, reusable and testable easily

// Impure
const x = 10;
function add(num) {
  return num * x;
}

console.log(add(20));

// Pure
// Pure ; Easier to test, run the functions in parallel, cacheable
function add(num, x) {
  return num * x;
}

console.log(add(20, 10));
// cannot use random values
// cannot use Date or time
// cannot change global states: such as DOM
