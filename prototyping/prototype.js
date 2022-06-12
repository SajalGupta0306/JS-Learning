// prototyping and prototyping chain
// Prototype chaining is used to build new types of objects based on existing ones. It is similar to inheritance in a class based language.

// array
const arr = ["Sajal"];
console.log(arr.__proto__); // equivalent to Array.prototype
console.log(arr.__proto__.__proto__); // equivalent to Object.prototype
console.log(arr.__proto__.__proto__.__proto__); // equivalent to null: Since everything in JS is object and nothing beyond that

// object
const obj = {
  name: "Sajal",
};
console.log(obj.__proto__); // equivalent to Object.prototype
console.log(obj.__proto__.__proto__); // equivalent to null: Since everything in JS is object and nothing beyond that

// function
const fun = () => {
  console.log("welcome");
};
console.log(fun.__proto__); // equivalent to Function.prototype
console.log(fun.__proto__.__proto__); // equivalent to Object.prototype

// Prototype Inheritance
var animalGroups = {
  MAMMAL: 1,
  REPTILE: 2,
  AMPHIBIAN: 3,
  INVERTEBRATE: 4,
};

function Animal(name, type) {
  this.name = name;
  this.type = type;
}

var dog = new Animal("dog", animalGroups.MAMMAL);
var crocodile = new Animal("crocodile", animalGroups.REPTILE);

Animal.prototype.shout = function () {
  console.log(this.name + " is " + this.sound + "ing.");
};

function Dog(name, type) {
  Animal.call(this, name, type);
  this.sound = "bow";
}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

var pet = new Dog("germanShepard", animalGroups.MAMMAL);
// Now shout method is available
console.log(pet); // returns Dog {name: "germanShepard", type: 1, sound: "bow"}
// Link prototype chains

pet.shout(); // germanShepard is bowing.
pet.constructor; // returns Animal
Dog.prototype.constructor; // returns Animal

// These four things you should remember about prototypical inheritance.
// Class properties are bound using this
// Class methods are bound using prototype object
// To inherit properties, use call function passing "this" object
// To inherit methods, use Object.create to link prototypes of parent and child
// Always set child class constructor to itself for getting the right identity of its objects
// In JS, call function and prototype object provides inheritance
