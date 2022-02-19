// shallow
// spread operator only do shallow copy

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
