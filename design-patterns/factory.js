// const Laptop = function (configurations) {
//   const { ram, hdd } = configurations;
//   printConfiguration({ ram, hdd });
// };

// const Tablet = function (configurations) {
//   const { ram, hdd } = configurations;
//   printConfiguration({ ram, hdd });
// };

// function printConfiguration({ ram, hdd }) {
//   return `details are ${ram}`;
// }

// const gadget = {
//   Laptop,
//   Tablet,
// };

// // factory
// const createGadget = function (type, attributes) {
//   const GadgetType = gadget[type];
//   return new GadgetType(attributes);
// };

// // Usage:
// const myLaptop = createGadget("Laptop", {
//   ram: 8,
//   hdd: 256,
//   name: "Bob's MacBook Pro",
// });

// const myTablet = createGadget("Tablet", {
//   ram: 4,
//   hdd: 128,
//   name: "Bab's iPad",
//   network: "4G",
// });

// console.log(myLaptop);
// console.log(myTablet);

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

// const gadget = { Laptop, Tablet };

// Factory Function
const createGadget = function (type, attributes) {
  if (type === "Laptop") {
    return new Laptop(attributes);
  } else if (type === "Tablet") {
    return new Tablet(attributes);
  }
  // const GadgetType = gadget[type];
  // return new GadgetType(attributes);
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
console.log(myLaptop.ram);
