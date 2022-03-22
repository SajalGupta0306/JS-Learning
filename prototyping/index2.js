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

var pet = new Dog("germanShepard", animalGroups.MAMMAL);
console.log(pet); // returns Dog {name: "germanShepard", type: 1, sound: "bow"}
// Link prototype chains

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;
var pet = new Dog("germanShepard", animalGroups.MAMMAL);
// Now shout method is available

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
