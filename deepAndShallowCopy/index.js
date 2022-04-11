// https://www.youtube.com/watch?v=E3dboLSBeJc&t=580s

// shallow copy

// Object.assign
// spread operator only do shallow copy

// it doesn't do deep copy of nested objects


// deep copy
// JSON.parse(JSON.stringify(obj))
// it misses cloning the functions


const person = {
  name: "Sajal",
  address: {
    city: "Ynr",
    state: "haryana",
  },
};

const updated = {...person, name:"Saksham"};
updated.address.city = "Bangalore";

console.log(person); // this is also updated with city = Bangalore
console.log(updated);
