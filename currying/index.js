// calling single argument in a function and returning a function with a single argument

//1. using bind method

const add = (a, b) => a + b;

// const addWith2 = add.bind(this, 2); // 2 is assigned to a
// console.log(addWith2(6)); // 6 is assigned to b

// const addWith2 = add.bind(this);
// console.log(addWith2(2, 6)); // 2 is assigned to a, 6 is assigned to b

// const addWith2 = add.bind(this, 2, 6); // 2 is assigned to a, 6 is assigned to b
// console.log(addWith2());

//2. using closures
function addWithClosure(x) {
  return function (y) {
    return x + y;
  };
}

const addWith5 = addWithClosure(5); // addWith5 returns function
//console.log(addWith5(6));
// it internally forms a closure, has scope of 5 and 6 both

// let arr = [1, 2, 3, 4, 5];
// for (var i = 0; i < arr.length; i++) {
//   // function calling() {
//   setTimeout(() => {
//     var j = i;
//     console.log(j);
//   }, 2000);
//   // }
//   // calling(j);
// }


const arr1 = [1,2,3];
const arr2 = [2,3,4,5];
const result = arr1.filter(val => arr2.includes(val));
console.log(result);

// [2,3]