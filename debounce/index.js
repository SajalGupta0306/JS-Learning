// debouncing - used for performance optimisation by limiting the requests which are triggered from client
// user event/action dependent  - pause/gap/ delay

// Debouncing will bunch a series of sequential calls to a function into a single call to that function.
// It ensures that one notification is made for an event that fires multiple times.

// A debounce is utilized when you only care about the final state.
// A throttle is best used when you want to handle all intermediate states but at a controlled rate.

// https://jsfiddle.net/Lz4o9qvp/2/
// http://hyrglobalsource.com/blog/2019/07/27/practical-use-of-debounce-and-throttle-in-web-development/

const getData = () => {
  console.log("test");
};

const debounce = (func, delay) => {
  let timer;
  return function () {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func();
    }, delay);
  };
};

const betterImpl = debounce(getData, 1500);
