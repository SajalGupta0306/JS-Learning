const user1 = {
  firstName: "Sajal",
  lastName: "Gupta",
};

const user2 = {
  firstName: "Saksham",
  lastName: "Gupta",
};

const printName = function (location) {
  console.log(
    this.firstName + " " + this.lastName + ". He lives in " + location
  );
};

//call()
// 1. It is function borrowing. It takes one argument as the object on which will be acting as ‘this’ for the called function.
// If function has arguments, then in this case, first arg of call will be object, and the rest comma separated arg will be corresponding args.
printName.call(user1, "Ynr");

// apply()
// 1. It is similar to call but instead of comma separated arg, this method need array of args for the original function.
printName.apply(user1, ["Ynr"]);

// bind()
// 1. i instead of calling the method, returns copy of the method and bind the method with the obj.
const print = printName.bind(user1);
print("Ynr");
