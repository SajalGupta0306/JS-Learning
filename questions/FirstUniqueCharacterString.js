const firstCharacter = (value) => {
  const obj = {};
  for (let i = 0; i < value.length; i++) {
    if (!obj[value[i]]) {
      obj[value[i]] = 1;
    } else {
      obj[value[i]]++;
    }
  }

  for (let key of Object.keys(obj)) {
    if (obj[key] === 1) {
      return key;
    }
  }
  return -1;
};

console.log(firstCharacter("avscript"));
