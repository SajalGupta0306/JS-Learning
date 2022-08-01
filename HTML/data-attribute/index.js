// data-* attributes allow us to store extra information on standard, semantic HTML elements without other hacks
// such as non-standard attributes, or extra properties on DOM.

const article = document.querySelector("#electric-cars");
console.log(article.getAttribute("data-index-number="));
// or
console.log(article.dataset.indexNumber); // dataset converts - sperated values to camelcase values

// cons of data attribute
// 1. search crawlers may not index data attributes' values.
// 2. Internet Explorer 11+ provides support for the standard, but all earlier versions do not support dataset.
// To support IE 10 and under you need to access data attributes with getAttribute() instead
