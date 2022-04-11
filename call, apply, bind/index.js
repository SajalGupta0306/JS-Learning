const user1 = {
    firstName: "Sajal",
    lastName: "Gupta"
}

const user2 = {
    firstName: "Saksham",
    lastName: "Gupta"
}

const printName = function (location) {
    console.log(this.firstName + " " + this.lastName + ". He lives in " + location);
}

// context borrowing is the main motive for call, apply and bind

// call: pass comma seperated params
// first argument: reference of this for that particular obj
printName.call(user1, "Ynr");
printName.call(user2, "Haryana");

// apply: pass array  params
printName.apply(user1, ["Ynr"]);

// bind: returns a copy as a function
// syntax: same as call
const print = printName.bind(user1);
print("Ynr");
