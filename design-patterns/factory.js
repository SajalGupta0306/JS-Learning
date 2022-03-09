// 1. Creational Design Pattern which provides generic interface for creating objects
// 2. A factory is an object or class or a function in a functional programming paradigm for creating objects.

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

// Factory Function
const createGadget = function (gadgetType, attributes) {
  let returnValue = null;
  if (gadgetType === "Laptop") {
    returnValue = new Laptop(attributes);
  } else if (gadgetType === "Tablet") {
    returnValue = new Tablet(attributes);
  }
  return returnValue;
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
