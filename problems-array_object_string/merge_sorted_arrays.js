function mergeTwo(arr1, arr2) {
  const merged = [];
  let index1 = 0;
  let index2 = 0;
  let current = 0;

  while (current < arr1.length + arr2.length) {
    const isArr1Valid = index1 >= arr1.length;
    const isArr2Valid = index2 >= arr2.length;

    if (!isArr1Valid && (isArr2Valid || arr1[index1] < arr2[index2])) {
      merged[current] = arr1[index1];
      index1++;
    } else {
      merged[current] = arr2[index2];
      index2++;
    }
    current++;
  }
  return merged;
}

const arr1 = [1, 2, 3, 4];
const arr2 = [5, 6, 7];
const arr3 = [8, 9, 10];
console.log(mergeTwo(mergeTwo(arr3, arr1), arr2));
