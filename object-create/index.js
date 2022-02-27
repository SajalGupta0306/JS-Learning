// 1. Using Object literals

const obj = {
  name: "Test",
  age: "15",
};
console.log(obj);

// 2. Using Constructor

function Car(name, model) {
  this.name = name;
  this.model = model;
}

const c1 = new Car("Tesla", 2019);
console.log(c1);

// 3. Using Obejct.create - Prototype approach

var car = {
  model: "BMW",
  color: "red",
};

var electricCar = Object.create(car);
console.log(electricCar.model);
console.log(electricCar.__proto__);

// 4. Using Class
class Test {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  printDetails() {
    console.log(`Name is ${this.name} and age is ${this.age}`);
  }
}

const obj1 = new Test("Sajal", 27);
obj1.printDetails();
