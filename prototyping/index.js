// prototyping and prototyping chain
// Prototype chaining is used to build new types of objects based on existing ones. It is similar to inheritance in a class based language.

// array
// const arr = ["Sajal"];
// console.log(arr.__proto__); // equivalent to Array.prototype
// console.log(arr.__proto__.__proto__); // equivalent to Object.prototype
// console.log(arr.__proto__.__proto__.__proto__); // equivalent to null: Since everything in JS is object and nothing beyond that

// object
// const obj = {
//   name: "Sajal",
// };
// console.log(obj.__proto__); // equivalent to Object.prototype
// console.log(obj.__proto__.__proto__); // equivalent to null: Since everything in JS is object and nothing beyond that

// function
// const fun = () => {
//   console.log("welcome");
// };
// console.log(fun.__proto__); // equivalent to Function.prototype
// console.log(fun.__proto__.__proto__); // equivalent to Object.prototype

//Eg:

const obj1 = {
  name: "Test",
  age: 30,
  getDetails: function () {
    return this.name + " " + this.age;
  },
};

const obj2 = {
  name: "Test1",
};

// obj2 inherits the properties of obj1.
// if nothing found in obj2, it will find in obj1
obj2.__proto__ = obj1;

console.log(obj2.getDetails());






