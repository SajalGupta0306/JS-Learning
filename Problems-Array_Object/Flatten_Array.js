// flatten an array

const flatten = (arr, ans = []) => {
  arr.forEach((val) => {
    if (Array.isArray(val)) {
      flatten(val, ans);
    } else {
      ans.push(val);
    }
  });
  return ans;
};
const arr = [[0], 1, 2, 3, [4, 5, [6]], [7, 8], [9], [10]];
/* console.log(flatten(arr)); */

// flattened an array with depth
function* flattenWithDepth(array, depth) {
  if (depth === null || typeof depth === "undefined") {
    depth = Infinity;
  }

  for (const item of array) {
    if (Array.isArray(item) && depth > 0) {
      yield* flattenWithDepth(item, depth - 1);
    } else {
      yield item;
    }
  }
}

const depthArr = [1, 2, 3, [4, 5, [6, 7], 8], [10, 11, [12, [13]]], 9];
const flattenedArr = [...flattenWithDepth(depthArr, 1)];
