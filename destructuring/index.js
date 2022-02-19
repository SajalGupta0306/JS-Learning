// array and object destructuring

const arr = [1, 2, 3, 4, 5, 6, 7];

// ...rest is used to get the remaining elements
const [a, b, ...rest] = arr;
console.log(a);
console.log(b);
console.log(rest);

//
function calculate(a, b) {
  return [a + b, a * b, a / b];
}
// destructuring
// division holds the default value, if the value is returned, it is overriden
const [add, multiply, division = "test"] = calculate(3, 5);
console.log(add); // 8
console.log(multiply); // 15
console.log(division);

// destructuring
// division holds the default value, if the value is returned, it is overriden
const [add1, multiply1, division1 = "test"] = calculate(3, 5);
console.log(add); // 8
console.log(multiply); // 15
console.log(division); // 0.6 as the value is overriden during the functionr return

// OBJECT DESTRUCTURING

const person = {
  name: "Sajal",
  age: 27,
  address: {
    city: "Ynr",
    state: "Haryana",
  },
};

// matches name key with the key in the person obj
const { name } = person;
console.log(name);

const { address } = person;
console.log(address); // prints address obj

const {
  address: { city },
} = person;
console.log(address.city); // prints the value of city
console.log(city); // prints the value of city

// assign the destructured obj to desired name
// if age is not coming from person, prints 50 otherwise the actual value
const { name: fullName, age = 50 } = person;
console.log(fullName);
console.log(age);

// destructuring: when passing the parameters
function printDetails({ name, age }) {
  console.log(name);
  console.log(age);
}

printDetails(person);
