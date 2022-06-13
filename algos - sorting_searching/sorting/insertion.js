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

console.log(insertion(arr));
