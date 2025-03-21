// A divide-and-conquer algorithm that splits the array into two halves, recursively sorts them, and then merges the two sorted halves.

// Efficient for large datasets and stable (maintains the relative order of equal elements).

// Time Complexity: 
//   Best Case: O(nlogn). 
//   Average Case: O(nlogn). 
//   Worst Case: O(nlogn). 

// Space Complexity: 
//   O(n) (requires additional memory for merging).


const arr = [4, 3, 2, 5, 6, 1, 7, 2, 9, 44, 12, 65];

function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));

  return merge(left, right);
}

function merge(left, right) {
  let result = [];
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }
  return [...result, ...left, ...right];
}

console.log(mergeSort(arr));
