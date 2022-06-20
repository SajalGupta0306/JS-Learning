// throttling : used for performance enhancment by limiting the requests which are triggered from client
// triggered on regular intervals - based on intervals
// Throttling will delay executing a function. It will reduce the notifications of an event that fires multiple times.

function displayWindowSize() {
  console.log("inside");
  const width = document.documentElement.clientWidth;
  const height = document.documentElement.clientHeight;
  document.getElementById("result").innerHTML =
    "Width: " + width + ", " + "Height: " + height;
}

const throttleFn = (callback, delay) => {
  let firstTimeApiCalled = true;
  return function (...args) {
    const context = this;
    if (firstTimeApiCalled) {
      callback.apply(context, args);
      firstTimeApiCalled = false;
      setTimeout(() => {
        firstTimeApiCalled = true;
      }, delay);
    }
  };
};

displayWindowSize();
window.addEventListener("resize", throttleFn(displayWindowSize, 300));
