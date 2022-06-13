// flatten an object
const obj = {
  a: 1,
  b: {
    c: {
      d: 4,
      e: 5,
    },
  },
};

const flattenObj = (obj, ans = {}) => {
  for (let val in obj) {
    const value = obj[val];
    if (value && typeof value === "object") {
      if (!Array.isArray(value)) {
        flattenObj(value, ans);
      } else {
        ans[val] = value;
      }
    } else {
      ans[val] = value;
    }
  }
  return ans;
};

/* console.log(flattenObj(obj)); */

// flatten an object by adding prefix
const flattenWithPrefix = (obj, prefix, output = {}) => {
  for (const key in obj) {
    const val = obj[key];
    const newKey = prefix ? prefix + "_" + key : key;
    if (val && typeof val === "object") {
      const newObj = flatten(val, newKey, output);
      output = {
        ...output,
        ...newObj,
      };
    } else {
      output = {
        ...output,
        [newKey]: val,
      };
    }
  }
  return output;
};

console.log(flattenWithPrefix(obj, "test"));
