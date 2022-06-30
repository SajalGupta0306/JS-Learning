String.prototype.myIncludes = function (search, start) {
  if (typeof start !== "number" || start === null) {
    start = 0;
  }
  if (start + search.length > this.length) {
    return false;
  }
  return this.indexOf(search, start) !== -1;
};

console.log("abc".myIncludes("ab", 0)); // true
