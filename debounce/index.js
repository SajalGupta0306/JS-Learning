// debouncing - used for performance optimisation by limiting the requests which are triggered from client
// user event/action dependent  - pause/gap/ delay

const getData = () => {
  console.log("test");
};

const debounce = (func, delay) => {
  let timer;
  return function () {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func();
      console.log("welcome");
    }, delay);
  };
};

const betterImpl = debounce(getData, 500);
