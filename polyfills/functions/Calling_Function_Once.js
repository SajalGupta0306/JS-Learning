// https://jsfiddle.net/rangoeq6/1/

function callFnOnce(func, context) {
  let callFn;
  return function (...args) {
    if (func) {
      callFn = func.apply(context || this, args);
      func = null;
    }
    return callFn;
  };
}

function dummyFunc() {
  console.log("Calling it once");
}

const fun1 = callFnOnce(dummyFunc);

fun1();
fun1();
fun1();
fun1();
fun1();
fun1();
