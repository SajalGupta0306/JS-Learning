function deepFreeze(object) {
  for (const key in object) {
    const value = object[key];
    if (value && typeof value === "object") {
      deepFreeze(value);
    }
  }
  return Object.freeze(object);
}

const obj2 = {
  value1: "Test",
  value2: {
    internal: {
      a: null,
    },
  },
};

deepFreeze(obj2);
