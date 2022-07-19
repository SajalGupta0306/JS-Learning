function evenproduct(arr, length) {
  // Total number of subarrays
  var total_subarray = (length * (length + 1)) / 2;

  // Counter variables
  var total_odd = 0;
  var count_odd = 0;

  // Traverse the array
  for (i = 0; i < arr.length; ++i) {
    // If current element is odd
    if (arr[i] % 2 == 0) {
      count_odd = 0;
    } else {
      ++count_odd;

      // Update count of subarrays
      // with odd product up to index i
      total_odd += count_odd;
    }
  }

  // Print count of subarrays
  // with even product
  document.write(total_subarray - total_odd);
}

var arr = [7, 5, 4, 9];

// Length of an array
var length = arr.length;

// Function call to count
// even product subarrays
evenproduct(arr, length);
