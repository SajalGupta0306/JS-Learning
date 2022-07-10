////////////////////////////////// IndexOf /////////////////////////////////////////
Array.prototype.myIndexOf = function (search, start) {
  for (let i = start || 0; i < this.length; i++) {
    if (this[i] === search) {
      return i;
    }
  }
  return -1;
};

////////////////////////////////// includes /////////////////////////////////////////
Array.prototype.myIncludes = function (search, start) {
  for (let i = start || 0; i < this.length; i++) {
    if (this[i] === search) {
      return true;
    }
  }
  return false;
};
