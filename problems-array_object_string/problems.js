// https://jsfiddle.net/z0ktc4u5/6/

// Deep Clone of an obj
// https://jsfiddle.net/dkvrL094/3/

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Filter array of objects with unique value of any one object property and maintain the count of records

const data = [
  { name: "freshworks1", id: 1 },
  { name: "amazon", id: 2 },
  { name: "freshworks", id: 2 },
  { name: "amazon", id: 1 },
  { name: "freshworks", id: 1 },
  { name: "google", id: 2 },
  { name: "google", id: 2 },
  { name: "freshworks", id: 11 },
];
const result = {};
const temp = [];
data.forEach((record) => {
  if (!result[record.name]) {
    result[record.name] = 1;
    temp.push(JSON.stringify(record));
  } else {
    if (!temp.includes(JSON.stringify(record))) {
      result[record.name] += 1;
    }
  }
});
console.log(result);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Filter unique objects from array

const dummy = [];
const final = [];
dummy.push(JSON.stringify(data[0]));
final.push(data[0]);
for (let i = 1; i < data.length; i++) {
  if (dummy.indexOf(JSON.stringify(data[i])) < 0) {
    dummy.push(JSON.stringify(data[i]));
    final.push(data[i]);
  }
}
console.log(final);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Run the callback function after the count interations

function message() {
  console.log("hello");
}

function sampler(fn, count, thisContext) {
  let counter = 0;
  return function (...args) {
    const context = this;
    counter += 1;
    if (counter !== count) {
      return;
    }
    fn.apply(context || thisContext, args);
    counter = 0;
  };
}

const sample = sampler(message, 4);
sample();
sample();
sample();
sample(); // this will be executed
sample();
sample();
sample();
sample(); // this will be executed

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// convert number to string without inbuilt functions

const toStringImpl = (number) => {
  let result = "";
  while (number) {
    const n = number % 10;
    number = Math.floor(number / 10);
    result = n + result;
  }
  return result;
};
console.log(toStringImpl(12304));

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// convert string to number without inbuilt functions

const toNumber = (str) => {
  const zeroAscii = "0".charCodeAt(0);
  let sum = 0;
  for (const char of str) {
    const charAscii = char.charCodeAt(0);
    sum = sum * 10 + charAscii - zeroAscii;
  }
  return sum;
};
console.log(toNumber("1110002345"));

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//remove all the occurences of the duplicated element from the array.

const array = [91, 2, 3, 14, 5, 2, 3, 7, 8, 9, 5];

const removeDupl = (arr) => {
  const result = [];
  arr.forEach((elem) => {
    if (!result.includes(elem)) {
      result.push(elem);
    } else {
      const index = result.indexOf(elem);
      result.splice(index, 1);
    }
  });
  return result;
};
console.log(removeDupl(array));

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Union of two arrays

const union = (a1, a2) => {
  const a3 = a1.filter((elem) => {
    if (!a2.includes(elem)) {
      return elem;
    }
    return;
  });
  return [...a3, ...a2];
};

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Intersection of two arrays

const intersection = (a1, a2) => {
  const a3 = a1.filter((elem) => {
    if (a2.includes(elem)) {
      return elem;
    }
  });
  return a3;
};

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Difference of two arrays

const difference = (a1, a2) => {
  const a3 = a1.filter((value) => {
    if (!a2.includes(value)) {
      return elem;
    }
  });
  const a4 = a2.filter((elem) => {
    if (!a1.includes(elem)) {
      return elem;
    }
  });
  return [...a3, ...a4];
};

console.log(union([1, 2, 3], [100, 2, 1, 10])); // [3, 100, 2, 1, 10]
console.log(intersection([1, 2, 3], [100, 2, 1, 10])); //[1, 2]
console.log(difference([1, 2, 3], [100, 2, 1, 10])); //[3, 100, 10]

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// move an array element from one position to another

const move = (arr, oldPos, newPos) => {
  if (oldPos < 0) {
    oldPos += arr.length;
  }
  if (newPos < 0) {
    newPos += arr.length;
  }
  arr.splice(newPos, 0, arr.splice(oldPos, 1)[0]);
  return arr;
};
console.log(move([10, 20, 30, 40, 50], 0, 2));

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// print first N Chars of an array

function firstNChars(arr, n) {
  const result = [];
  if (n === null || typeof n === "undefined" || n === 0) {
    return arr[0];
  }
  if (arr.length <= n) {
    return arr;
  }
  for (let i = 0; i < n; i++) {
    result.push(arr[i]);
  }
  return result;
}

console.log(firstNChars([7, 9, 0, -2]));
console.log(firstNChars([], 3));
console.log(firstNChars([7, 9, 0, -2], 3));
console.log(firstNChars([7, 9, 0, -2], 6));
console.log(firstNChars([7, 9, 0, -2], -3));

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// insert dashes between two consecutive even numbers

const insertDashes = (number) => {
  const str = String(number);
  const result = [str[0]];
  for (let i = 1; i < str.length; i++) {
    if (str[i - 1] % 2 === 0 && str[i] % 2 === 0) {
      result.push("-");
      result.push(str[i]);
    } else {
      result.push(str[i]);
    }
  }
  return result.join("");
};

console.log(insertDashes(125468));

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// convert uppercase to lower and vice-versa for each character

const checkCase = (str) => {
  const arr = str.split("");
  arr.forEach((item, i) => {
    if (item === item.toUpperCase()) {
      arr[i] = item.toLowerCase();
    } else if (item === item.toLowerCase()) {
      arr[i] = item.toUpperCase();
    }
  });
  return arr.join("");
};

console.log(checkCase("The Quick Brown Fox"));

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// sum of 2 arrays matching their indexes

const array1 = [1, 0, 2, 3, 4];
const array2 = [3, 5, 6, 7, 8, 13];

const findSum = (arr1, arr2) => {
  const result = [];
  const len = arr1.length <= arr2.length ? arr2.length : arr1.length;
  for (let i = 0; i < len; i++) {
    if (!arr1[i]) {
      result[i] = arr2[i];
    } else if (!arr2[i]) {
      result[i] = arr1[i];
    } else {
      result[i] = arr1[i] + arr2[i];
    }
  }
  return result;
};

console.log(findSum(array1, array2));

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// reduce string to a single character by summing up

function getNum(str) {
  let sum = 0;
  if (str.length === 1) {
    return str;
  }
  for (let i = 0; i < str.length; i++) {
    sum += Number(str[i]);
  }
  return getNum(String(sum));
}

const strNum = "12345789";
console.log(getNum(strNum));

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// remove elements from array

function remove_array_element(arr, num) {
  const index = arr.indexOf(num);
  arr.splice(index, 1);
  return arr;
}

console.log(remove_array_element([2, 5, 9, 6], 5));

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// return max occuring element from array

function getMax(arr1) {
  const temp = {};
  arr1.forEach((item) => {
    if (!temp[item]) {
      temp[item] = 1;
    } else {
      temp[item] += 1;
    }
  });
  const max = Math.max(...Object.values(temp));
  for (const key in temp) {
    if (temp[key] === max) {
      return key;
    }
  }
}

var arrData = [3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3];
console.log(getMax(arrData));

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// return largest common starting substring

function longest_common_substring(arr) {
  arr.sort((a, b) => {
    if (a.length < b.length) {
      return -1;
    } else {
      return 1;
    }
  });
  let shortest = arr[0];
  while (!arr.every((elem) => elem.includes(shortest))) {
    if (shortest.length === 0) {
      return;
    }
    shortest = shortest.slice(0, -1);
  }
  return shortest;
}

console.log(longest_common_substring(["improper", "ampo"]));

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// common elements from n arrays
var arrays = [
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  [0, 2, 4, 6, 8],
  [4, 5, 7],
];
const resp = arrays.reduce((p, c) => p.filter((e) => c.includes(e)));
console.log(resp);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// group by a particular objet key

const users = [
  { id: 1, name: "Rahul", age: 30 },
  { id: 7, name: "John", age: 30 },
  { id: 3, name: "John", age: 50 },
  { id: 4, name: "Abhi", age: 40 },
  { id: 5, name: "Smith", age: 40 },
];

function groupBy(array, key) {
  return array.reduce((output, obj) => {
    const val = output[obj[key]] || [];
    return {
      ...output,
      [obj[key]]: [...val, obj],
    };
  }, {});
}
console.log(groupBy(users, "name"));
