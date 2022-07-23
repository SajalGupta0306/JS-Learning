// A multiset or a bag is a collection of elements that can be repeated. Contrast with a set, where elements cannot be repeated.
// Multisets can be intersected just like sets can be intersected.

// Input :
let A = [0, 1, 1, 2, 2, 5];
let B = [0, 1, 2, 2, 2, 6];

// Output :
//  [0,1,2,2]

// Input :
let A1 = [0, 1, 1];
let B1 = [0, 1, 2, 3, 4, 5, 6];

// Output :
// [0,1]

function findDiff(a, b) {
  const temp = {};
  const result = [];
  for (let val of a) {
    if (temp[val]) {
      temp[val] += 1;
    } else {
      temp[val] = 1;
    }
  }

  for (let val of b) {
    if (temp[val] > 0) {
      result.push(val);
      temp[val] -= 1;
    }
  }
  return result;
}

console.log(findDiff(A, B));
