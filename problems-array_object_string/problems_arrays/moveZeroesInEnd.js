// approach 1

const moveZeroes = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      arr.push(0);
      arr.splice(i, 1);
    }
  }
  return arr;
};

console.log(moveZeroes([0, 1, 0, 3, 12]));

// approach 2

const moveZeroes2 = (arr) => {
  let j = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      [arr[j], arr[i]] = [arr[i], arr[j]];
      j++;
    }
  }
  return arr;
};

console.log(moveZeroes2([2, 1, 0, 3, 12]));
