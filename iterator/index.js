const arr = [1, 2, 3, 4];

// iterator functions returns an object
const iterator = (values) => {
  let initialIndex = 0;
  return {
    // mandatory next function
    next: () => {
      if (initialIndex < values.length) {
        return {
          value: values[initialIndex++],
          done: false,
        };
      } else {
        return {
          done: true,
        };
      }
    },
  };
};

const data = iterator(arr);
console.log(data.next());
console.log(data.next());
console.log(data.next());
console.log(data.next());
console.log(data.next());
console.log(data.next());
