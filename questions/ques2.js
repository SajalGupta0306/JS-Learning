// Given an array of integers, move zeros to the end while keeping the order of the rest.

const list = [1, 0, 0, 2, 3];

var count = 0;
function moveZeroes(list) {
  const newList = list.slice();
  for (var i = 0; i < newList.length; i++) {
    if (newList[i] === 0) {
      list.splice(i - count, 1);
      count += 1;
    }
  }

  for (let j = 0; j < count; j++) {
    list.push(0);
  }
}
moveZeroes(list);
console.log(list);
