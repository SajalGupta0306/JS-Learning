// merge two objects without inbuilt functions
const obj1 = {
  name: "prashant",
  age: 23,
};

const obj2 = {
  qualification: "BSC CS",
  loves: "Javascript",
};

// 1.
const mergeObj = (...args) => {
  const result = {};
  for (const item of args) {
    merge(item);
  }

  function merge(obj) {
    for (const key in obj) {
      const value = obj[key];
      result[key] = value;
    }
  }
  return result;
};

// 2.
const mergeObj2 = (...args) => {
  let result = {};
  for (const item of args) {
    result = {
      ...result,
      ...item,
    };
  }
  return result;
};

const mergedObj = mergeObj(obj1, obj2);
