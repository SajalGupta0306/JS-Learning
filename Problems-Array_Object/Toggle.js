// toggle
const toggle = (...list) => {
  let current = -1;
  const lastIndex = list.length - 1;
  return function () {
    if (current >= lastIndex) {
      current = 0;
    } else {
      current += 1;
    }
    return list[current];
  };
};
const hello = toggle("1", "2", "3");
console.log(hello()); // "1"
console.log(hello()); // "2"
console.log(hello()); // "3"
console.log(hello()); // "1"
console.log(hello()); // "2"
console.log(hello()); // "3"
