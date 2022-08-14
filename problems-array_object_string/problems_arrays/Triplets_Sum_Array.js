const arr = [12, 3, 1, 10, 9];

const findTriplets = (array, sum) => {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    const set = new Set();
    const firstDiff = sum - array[i];
    for (let j = i + 1; j < array.length; j++) {
      const secondDiff = firstDiff - array[j];
      if (set.has(secondDiff)) {
        result.push([array[i], array[j], secondDiff]);
      }
      set.add(array[j]);
    }
  }
  return result;
};

console.log(findTriplets(arr, 24));
