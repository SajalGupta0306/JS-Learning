var a = 1;
function b() {
  a = 10;
  return;
  function a() {}
}
b();
console.log(a);

// Output: 1

//////////////////////////

function foo() {
  function bar() {
    return 3;
  }
  return bar();

  function bar() {
    return 8;
  }
}
alert(foo());

// Output: 8

//////////////////////////

function parent() {
  var hoisted = "I'm a variable";
  function hoisted() {
    return "I'm a function";
  }
  return hoisted();
}
console.log(parent());

// Output: Error: not a function

//////////////////////////

alert(foo());
function foo() {
  var bar = function () {
    return 3;
  };
  return bar();
  var bar = function () {
    return 8;
  };
}

// Output: 3

//////////////////////////

var myVar = "foo";
(function () {
  console.log("Original value was: " + myVar);
  var myVar = "bar";
  console.log("New value is: " + myVar);
})();

// Output: Original value was: undefined New value is: bar
