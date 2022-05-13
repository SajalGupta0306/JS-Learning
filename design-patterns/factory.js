// 1. Creational Design Pattern which provides generic interface for creating objects
// 2. A factory is an object or class or a function in a functional programming paradigm for creating objects.
// factory pattern can help centralize our object creation process by encapsulating all our constructor or class initialization logic
// https://blog.sessionstack.com/how-javascript-works-the-factory-design-pattern-4-use-cases-7b9f0d22151d

const Laptop = function ({ ram, hdd, name }) {
  this.ram = ram || 0;
  this.hdd = hdd || 0;
  this.name = name || "";
};

const Tablet = function ({ ram, hdd, name, network }) {
  this.ram = ram || 0;
  this.hdd = hdd || 0;
  this.network = network || 0;
  this.name = name || "";
};
const gadgets = {
  Laptop,
  Tablet,
};

// Factory Function
const createGadget = function (gadgetType, attributes) {
  const type = gadgets[gadgetType];
  if (type) {
    return new type(attributes);
  }
  return {};
  // if (gadgetType === "Laptop") {
  //   return new Laptop(attributes);
  // } else if (gadgetType === "Tablet") {
  //   return new Tablet(attributes);
  // }
  //
};

const myLaptop = createGadget("Laptop", {
  ram: 8,
  hdd: 256,
  name: "Bob's MacBook Pro",
});

const myTablet = createGadget("Tablet", {
  ram: 4,
  hdd: 128,
  name: "Bab's iPad",
  network: "4G",
});

console.log(myLaptop);
console.log(myTablet);

////////////////////////////
// Eg: 2

function personFactory(name) {
  return {
    introduce() {
      return `Hello, I am ${name}`;
    },
  };
}

const e1 = personFactory("Sajal");
e1.introduce();

const e2 = personFactory("Sam");
e2.introduce();
