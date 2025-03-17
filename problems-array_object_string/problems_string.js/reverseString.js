function rotateArray(arr, steps) {
  const len = arr.length

  // Reverse the entire array
  /* reverse(arr, 0, len - 1) */

  // Reverse the first `steps` elements
  reverse(arr, 0, steps - 1)

  // Reverse the remaining elements
  /* reverse(arr, steps, len - 1) */

  return arr
}

// Helper function to reverse a portion of the array
function reverse(arr, start, end) {
  while (start < end) {
    const temp = arr[start]
    arr[start] = arr[end]
    arr[end] = temp
    start++
    end--
  }
}

// Example usage:
const array = [1, 2, 3, 4, 5]
const rotatedArray = rotateArray(array, 2)
console.log(rotatedArray)
