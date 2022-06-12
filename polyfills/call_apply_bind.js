const name = {
  firstName: "Sajal",
  lastName: "Gupta",
};

const printName = function (city, country) {
  console.log(
    this.firstName + " " + this.lastName + " " + city + " " + country
  );
};

const jsBind = printName.bind(name, "Ynr");
jsBind("India");

// call

Function.prototype.myCall = function (obj, ...args) {
  obj.callFn = this;
  obj.callFn(...args);
};

printName.myCall(name, "Ynr", "India");

// Apply

Function.prototype.myApply = function (obj, args = []) {
  obj.callFn = this;
  obj.callFn(...args);
};

printName.myApply(name, ["Ynr", "India"]);

// Bind

Function.prototype.myBind = function (val, ...args) {
  const context = this;
  return function (...insideArgs) {
    context.apply(val, [...args, ...insideArgs]);
  };
};

const customBind = printName.myBind(name, "Ynr");
customBind("India");
