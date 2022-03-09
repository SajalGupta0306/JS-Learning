// 1. Design pattern is used when we want to create private methods and private state.
// 2. used as a IIFE and exported to be used afterwards

const test = (function () {
  var contents = "Welcome to India";

  var callInner = function () {
    console.log("Welcome Bangalore");
  };

  return {
    mainMethod: function () {
      callInner();
      console.log(contents);
    },
  };
})();

test.mainMethod();
console.log(test.contents);
