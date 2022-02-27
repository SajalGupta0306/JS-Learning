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
