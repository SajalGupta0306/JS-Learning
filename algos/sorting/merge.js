const arr = [4, 3, 2, 5, 6, 1, 7, 2, 9, 44, 12, 65];

const merge = (leftArr, rightArr) => {
  const output = [];
  let left = 0;
  let right = 0;

  while (left < leftArr.length && right < rightArr.length) {
    const leftElem = leftArr[left];
    const rightElem = rightArr[right];

    if (leftElem < rightElem) {
      output.push(leftElem);
      left++;
    } else {
      output.push(rightElem);
      right++;
    }
  }
  return [...output, ...leftArr.slice(left), ...rightArr.slice(right)];
};

const mergeSort = (arr) => {
  if (arr.length <= 1) {
    return arr;
  }
  const middle = Math.floor(arr.length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);
  return merge(mergeSort(left), mergeSort(right));
};

console.log(mergeSort(arr));
