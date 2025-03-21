const arr = [4, 3, 2, 5, 6, 1, 7, 2, 9, 44, 12, 65];

const insertion = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    for (let j = i; j > 0; j--) {
      if (arr[j] < arr[j - 1]) {
        [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
      }
    }
  }
  return arr;
};

const insertionSort = (arr) => {
  const n = arr.length
  // reason to start i with 1 so that to show i as first element of unsorted array
  for (let i = 1; i < n; i++) {
    let currentElem = arr[i]
    let prevIdx = i - 1
    while (prevIdx >= 0 && arr[prevIdx] > currentElem) {
      arr[prevIdx + 1] = arr[prevIdx]
      prevIdx--
    }
    arr[prevIdx + 1] = currentElem
  }
  return arr
}


console.log(insertion(arr));
