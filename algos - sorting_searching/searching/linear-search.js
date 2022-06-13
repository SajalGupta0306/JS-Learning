const arr = [1, 2, 3, 4, 5, 8];

const linearSearch = (num, arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (num === arr[i]) {
      return i;
    }
  }
  return -1;
};

console.log(linearSearch(4, arr));
