// Divides the array into a sorted and an unsorted part.
// Repeatedly selects the smallest (or largest) element from the unsorted part and swaps it with the first unsorted element. 

// Time Complexity: 
//   Best Case: O(n 2 ). 
//   Average Case: O(n 2 ). 
//   Worst Case: O(n 2 ). 

// Space Complexity: 
//   O(1) (in-place sorting). 

// Use Case: Simple but inefficient for large datasets. Useful when memory usage is a concern.

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
