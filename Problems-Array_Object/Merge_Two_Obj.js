// merge two objects without inbuilt functions
const obj1 = {
  name: "prashant",
  age: 23,
};

const obj2 = {
  qualification: "BSC CS",
  loves: "Javascript",
};

const mergeObj = (...args) => {
  const result = {};
  for (let i = 0; i < args.length; i++) {
    merge(args[i]);
  }

  function merge(obj) {
    for (let key in obj) {
      const value = obj[key];
      result[key] = value;
    }
  }
  return result;
};

const mergedObj = mergeObj(obj1, obj2);
