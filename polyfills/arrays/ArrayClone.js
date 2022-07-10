function array_Clone(arr) {
  const result = [];
  arr.forEach((elem, i) => {
    result[i] = elem;
  });
  return result;
}

const arr = [[0], 1, 2, 3, [4, 5, [6]], [7, 8], [9], [10]];
console.log(array_Clone(arr));
