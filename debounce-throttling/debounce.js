// debouncing - used for performance optimisation by limiting the requests which are triggered from client
// user event/action dependent  - pause/gap/ delay

// Debouncing will bunch a series of sequential calls to a function into a single call to that function.
// It ensures that one notification is made for an event that fires multiple times.

// A debounce is utilized when you only care about the final state.

// https://jsfiddle.net/Lz4o9qvp/2/
// http://hyrglobalsource.com/blog/2019/07/27/practical-use-of-debounce-and-throttle-in-web-development/
// https://codesandbox.io/s/ecstatic-tess-45gdm8?file=/src/App.js
// https://github.com/ankitsaxena21/react-debounce-tutorial

// https://towardsdev.com/debouncing-and-throttling-in-javascript-8862efe2b563

const debounceFn = (callback, delay) => {
  let timer = null;
  return function (...args) {
    let context = this;
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      callback.apply(context, args);
    }, delay);
  };
};

const getData = () => {
  console.log("test");
};

const betterImpl = debounceFn(getData, 1500);
