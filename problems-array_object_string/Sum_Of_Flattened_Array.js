// sum of a flattened array

const sumOfflatten = (arr, sum = 0) => {
  arr.forEach((val) => {
    if (Array.isArray(val)) {
      sum = sumOfflatten(val, sum);
    } else {
      sum += val;
    }
  });
  return sum;
};
const arrSum = [[0], 1, 2, 3, [4, 5, [6]], [7, 8], [9], [10]];

console.log(sumOfflatten(arrSum));
