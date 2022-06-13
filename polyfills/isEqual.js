function isEqual(obj1, obj2) {
  const obj1Type = getType(obj1);
  const obj2Type = getType(obj2);

  if (obj1Type !== obj2Type) {
    return false;
  }

  if (obj1Type === "array" || obj2Type === "array") {
    return areArraysEqual(obj1, obj2);
  } else if (obj1Type === "object" || obj2Type === "object") {
    return areObjectsEqual(obj1, obj2);
  } else if (obj1Type === "function" || obj2Type === "function") {
    return areFunctionsEqual(obj1, obj2);
  }
  return arePrimativesEqual(obj1, obj2);
}

function getType(obj) {
  return Object.prototype.toString.call(obj).slice(8, -1).toLowerCase();
}

function areArraysEqual(obj1, obj2) {
  if (obj1.length !== obj2.length) {
    return false;
  }
  for (let i = 0; i < obj1.length; i++) {
    if (!isEqual(obj1[i], obj2[i])) {
      return false;
    }
  }
  return true;
}

function areObjectsEqual(obj1, obj2) {
  if (Object.keys(obj1).length !== Object.keys(obj2).length) {
    return false;
  }
  for (const key in obj1) {
    if (Object.prototype.hasOwnProperty.call(obj1, key)) {
      if (!isEqual(obj1[key], obj2[key])) {
        return false;
      }
    }
  }
  return true;
}

function areFunctionsEqual(obj1, obj2) {
  return obj1.toString() === obj2.toString();
}

function arePrimativesEqual(obj1, obj2) {
  return obj1 === obj2;
}
