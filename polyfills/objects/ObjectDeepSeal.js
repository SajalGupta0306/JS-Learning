// deep seal
// deepseal

function deepSeal(obj) {
  Object.seal(obj);
  for (const key in obj) {
    if (
      obj.hasOwnProperty(key) &&
      typeof obj[key] === "object" &&
      obj[key] !== null
    ) {
      deepSeal(obj[key]);
    }
  }
  return obj;
}
