const arr = [1, 2, 3, 4, 5, 8];

const binarySearch = (elem, arr) => {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const middle = left + Math.floor((right - left) / 2);

    if (elem === arr[middle]) {
      return middle;
    } else if (elem < arr[middle]) {
      right = middle - 1;
    } else {
      left = middle + 1;
    }
  }
  return -1;
};

console.log(binarySearch(5, arr));
