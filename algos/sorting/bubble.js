const arr = [4, 3, 2, 5, 6, 1, 7, 2, 9, 44, 12, 65];

const bubbleSort = (arr) => {
  const len = arr.length;
  const tArr = [...arr];
  for (let i = 0; i < len - 1; i++) {
    for (let j = 0; j < len - 1 - i; j++) {
      if (tArr[j] > tArr[j + 1]) {
        [tArr[j + 1], tArr[j]] = [tArr[j], tArr[j + 1]];
      }
    }
  }
  return tArr;
};

console.log(bubbleSort(arr));
