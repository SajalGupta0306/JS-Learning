const arr = [4, 3, 2, 5, 6, 1, 7, 2, 9, 44, 12, 65];

const selectionSort = (arr) => {
  const len = arr.length;
  for (let i = 0; i < len - 1; i++) {
    let minElemIdx = i;
    for (let j = i + 1; j < len; j++) {
      if (arr[j] < arr[minElemIdx]) {
        minElemIdx = j;
      }
    }
    [arr[i], arr[minElemIdx]] = [arr[minElemIdx], arr[i]];
  }
  return arr;
};

console.log(selectionSort(arr));
