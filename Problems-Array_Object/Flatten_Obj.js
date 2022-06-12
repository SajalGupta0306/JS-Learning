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
