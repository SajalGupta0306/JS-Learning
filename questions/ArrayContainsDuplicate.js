const arrayContainsDuplicates = (values) => {
  values.sort();
  let isArrayContainDuplicate = false;
  for (let i = 0; i < values.length; i++) {
    if (values[i] === values[i + 1]) {
      isArrayContainDuplicate = true;
    }
  }
  return isArrayContainDuplicate;
};

// using set
const arrayContainsDuplicates1 = (values) => {
  const data = new Set();
  let isDuplicate = false;
  values.forEach((value) => {
    if (data.has(value)) {
      isDuplicate = true;
    }
    data.add(value);
  });
  return isDuplicate;
};

const arr = [1, 2, 3, 4, 1];
console.log(arrayContainsDuplicates([...arr]));

console.log(arrayContainsDuplicates1([...arr]));
