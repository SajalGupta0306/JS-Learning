// https://www.techiedelight.com/get-width-and-height-of-element-javascript/

// Height and width of the window

const windowWidth =
  window.innerWidth ||
  document.documentElement.clientWidth ||
  document.body.clientWidth;
const windowHeight =
  window.innerHeight ||
  document.documentElement.clientHeight ||
  document.body.clientHeight;
console.log(`Window: Width- ${windowWidth}px, Height- ${windowHeight}px`);

const container1 = document.getElementById("container1");
const container2 = document.getElementById("container2");

// getBoundingClientRect - Returns a DOMRect object with width, height, left, top, right, bottom, x, and y properties
// Returns the width & height of an element as floating-point after CSS transformation
// width and height of the element can be fractional and include padding and borders
var rect = container1.getBoundingClientRect();
var height = rect.height;
var width = rect.width;
console.log(`getBoundingClientRect: Width- ${width}px, Height- ${height}px`);

// clientWidth and clientHeight - Includes the padding but excludes the border, margins, or scrollbars of an element.
var clientWidth = container1.clientWidth;
var clientHeight = container1.clientHeight;
console.log(`Client: Width- ${clientWidth}px, Height- ${clientHeight}px`);

// offsetWidth and offsetHeight - Includes the padding, borders and scrollbars of an element.
var offsetWidth = container1.offsetWidth;
var offsetHeight = container1.offsetHeight;
console.log(`Offset: Width- ${offsetWidth}px, Height- ${offsetHeight}px`);

// Returns the actual height and width of an element with units intact.
// Works only when the element has width and height set using the style attribute
var normalWidth = container2.style.width;
var normalHeight = container2.style.height;
console.log(`Normal: Width- ${normalWidth}, Height- ${normalHeight}`);
