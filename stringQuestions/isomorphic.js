const isomorphic = (s1, s2) => {
  const obj1 = {};
  const obj2 = {};
  for (let i = 0; i < s1.length; i++) {
    if (obj1[s1[i]] !== obj2[s2[i]]) {
      return false;
    } else {
      obj1[s1[i]] = i;
      obj2[s2[i]] = i;
    }
  }
  return true;
};

const str1 = "egg";
const str2 = "add";
console.log(isomorphic(str1, str2));

// https://www.youtube.com/watch?v=gQfroVMJ_M0
