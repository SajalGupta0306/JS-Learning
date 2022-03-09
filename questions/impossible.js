function solution(arr) {
  if (isAestheticlyPleasing(arr)) {
    return 0;
  }
  let answer = 0;
  for (let j = 0; j < arr.length; j++) {
    const resultArr = skipElement(arr, j);
    if (isAestheticlyPleasing(resultArr)) {
      answer++;
    }
  }
  if (answer === 0) {
    return -1;
  } else {
    return answer;
  }
}

function skipElement(arr, indexToRemove) {
  const size = arr.length;
  const result = [];
  let temp = 0;
  for (let k = 0; k < size; k++) {
    if (k !== indexToRemove) {
      result[temp] = arr[k];
      temp++;
    }
  }
  return result;
}

function isAestheticlyPleasing(arr) {
  const n = arr.length;
  let counter = 0;
  let boolResult = true;
  for (let i = 0; i < n; i++) {
    if (counter === 0) {
      if (arr[i] < arr[i + 1]) {
        counter = 1;
      } else {
        counter = 2;
      }
    } else if (counter === 1) {
      if (i % 2 === 1 && arr[i] > arr[i - 1]) {
        // continue
      } else if (i % 2 === 0 && arr[i] < arr[i - 1]) {
        // continue
      } else {
        boolResult = false;
      }
    } else {
      if (i % 2 === 1 && arr[i] < arr[i - 1]) {
        // continue
      } else if (i % 2 === 0 && arr[i] > arr[i - 1]) {
        // continue
      } else {
        boolResult = false;
      }
    }
  }
  return boolResult;
}

console.log(solution([1, 3, 1, 2]));
console.log(solution([1, 2, 3, 4]));
console.log(solution([3, 4, 5, 3, 7]));
