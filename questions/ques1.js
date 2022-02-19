// Length of the longest substring without repeating characters

function longestUniqueSubsttr(str) {
  var n = str.length;

  // Result
  var res = 0;

  for (var i = 0; i < n; i++) {
    // Note : Default values in visited are false
    var visited = new Array(256);

    for (var j = i; j < n; j++) {
      // If current character is visited
      // Break the loop
      if (visited[str.charCodeAt(j)] == true) break;
      // Else update the result if
      // this window is larger, and mark
      // current character as visited.
      else {
        res = Math.max(res, j - i + 1);
        visited[str.charCodeAt(j)] = true;
      }
    }
  }
  return res;
}

// Driver code
var data = "geeksforgeeks";
console.log(longestUniqueSubsttr(data));
