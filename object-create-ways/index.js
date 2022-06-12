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


// Can I add getters and setters using defineProperty method
var obj = {counter : 0};

// Define getters
Object.defineProperty(obj, "increment", {
  get : function () {this.counter++;}
});
Object.defineProperty(obj, "decrement", {
  get : function () {this.counter--;}
});

// Define setters
Object.defineProperty(obj, "add", {
  set : function (value) {this.counter += value;}
});
Object.defineProperty(obj, "subtract", {
  set : function (value) {this.counter -= value;}
});

obj.add = 10;
obj.subtract = 5;
console.log(obj.increment); //6
console.log(obj.decrement); //5
