// throttling : used for performance enhancment by limiting the requests which are triggered from client
// triggered on regular intervals - based on intervals
// Throttling will delay executing a function. It will reduce the notifications of an event that fires multiple times.

// Defining event listener function
function displayWindowSize() {
  // Get width and height of the window excluding scrollbars
  var w = document.documentElement.clientWidth;
  var h = document.documentElement.clientHeight;

  // Display result inside a div element
  document.getElementById("result").innerHTML =
    "Width: " + w + ", " + "Height: " + h;

  console.log("triggered");
}

const throttleWindowSize = (func, delay) => {
  let firstCall = true;
  return function () {
    if (firstCall) {
      func();
      firstCall = false;
      setTimeout(() => {
        firstCall = true;
      }, delay);
    }
  };
};

// Attaching the event listener function to window's resize event
window.addEventListener("resize", throttleWindowSize(displayWindowSize, 1000));

// Calling the function for the first time
throttleWindowSize();
