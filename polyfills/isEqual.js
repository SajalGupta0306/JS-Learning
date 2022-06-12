function isEqual(obj1, obj2) {
  function getType(obj) {
    return Object.prototype.toString.call(obj).slice(8, -1).toLowerCase();
  }

  function areArraysEqual() {
    if (obj1.length !== obj2.length) return false;
    for (let i = 0; i < obj1.length; i++) {
      if (!isEqual(obj1[i], obj2[i])) return false;
    }
    return true;
  }

  function areObjectsEqual() {
    if (Object.keys(obj1).length !== Object.keys(obj2).length) return false;
    for (let key in obj1) {
      if (Object.prototype.hasOwnProperty.call(obj1, key)) {
        if (!isEqual(obj1[key], obj2[key])) return false;
      }
    }
    return true;
  }

  function areFunctionsEqual() {
    return obj1.toString() === obj2.toString();
  }

  function arePrimativesEqual() {
    return obj1 === obj2;
  }

  let type = getType(obj1);
  if (type !== getType(obj2)) return false;

  if (type === "array") return areArraysEqual();
  if (type === "object") return areObjectsEqual();
  if (type === "function") return areFunctionsEqual();
  return arePrimativesEqual();
}
