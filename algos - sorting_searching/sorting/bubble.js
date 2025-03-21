// Repeatedly compares adjacent elements and swaps them if they are in the wrong order. 
// This process is repeated until no swaps are needed, meaning the array is sorted. 

// Time Complexity: 
//   Best Case: O(n) (when the array is already sorted). 
//   Average Case: O(n 2 ). 
//   Worst Case: O (n 2 ) (when the array is sorted in reverse order). 

// Space Complexity: 
//   O(1) (in-place sorting, no additional memory is used). 

// Use Case: 

// Simple to implement but inefficient for large datasets. 
// Suitable for small datasets or educational purposes.


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

// optimised one if array is already sorted:
const bubbleSort = (arr) => {
  const len = arr.length
  const tArr = [...arr]
  for (let i = 0; i < len - 1; i++) {
    let isSwappingDone = false
    for (let j = 0; j < len - 1 - i; j++) {
      if (tArr[j] > tArr[j + 1]) {
        ;[tArr[j + 1], tArr[j]] = [tArr[j], tArr[j + 1]]
        isSwappingDone = true
      }
      if (!isSwappingDone) {
        // means that array is already sorted, no further calculation needed.
        break
      }
    }
  }
  return tArr
}

console.log(bubbleSort(arr));
