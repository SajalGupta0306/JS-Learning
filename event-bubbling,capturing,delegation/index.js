// event propagation flow always starts from top - bottom
// it looks for property: useCapture (default value is false).
// if entire hierarchy is set to false, it proceeds with bubbling

// if the value is true (at any level - granparent, parent or child), it triggers callback at that time and ignores the callback during bubbling phase

// Note: to stop propagation in any phase, capturing or bubbling, we can make use of e.stopPropagation() , see line 10
// whatever line it is written, it stops further propagation

document.getElementById("child").addEventListener("click", function (e) {
  console.log("child clicked");
  // e.stopPropagation();
});

// if capture is true:
// putput would be:

// parent clicked
// child clicked
// grandparent clicked

// document.getElementById("parent").addEventListener(
//   "click",
//   function () {
//     console.log("parent clicked");
//   },
//   { capture: true }
// );

// above syntax can be written as below too:
document.getElementById("parent").addEventListener(
  "click",
  function (e) {
    console.log("parent clicked");
    e.stopPropagation();
  },
);

document.getElementById("grandparent").addEventListener("click", function () {
  console.log("grandparent clicked");
});
