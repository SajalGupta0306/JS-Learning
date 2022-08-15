const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");

// stopPropagation still allows completion of al the events associated with the control until that level
// Prevents propagation of any handlers at top-level DOM hierarchy to execute

// stopImmediatePropagation will terminate from that event and not continue further for the events even for the same control too.
// Prevents both propagation of any other handlers at same level and those at top level

const oneClick = function (e) {
  this.style.backgroundColor = "pink";
};

const twoClick = function (e) {
  // e.stopPropagation();
  this.style.backgroundColor = "purple";
};

const twoClick2 = function (e) {
  e.stopImmediatePropagation();
  this.style.width = "250px";
};

const threeClick = function (e) {
  this.style.backgroundColor = "wheat";
};

one.addEventListener("click", oneClick);
two.addEventListener("click", twoClick2);
two.addEventListener("click", twoClick);

three.addEventListener("click", threeClick);
