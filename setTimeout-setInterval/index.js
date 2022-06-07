// implement setInterval using setTimeout
// https://jsfiddle.net/8x2erqwh/6/

function interval(cb, ms) {
  var a = {
    clear: function () {
      clearTimeout(a.timer);
    },
  };

  (function run() {
    cb();
    a.timer = setTimeout(run, ms);
  })();

  return a;
}

const test = () => {
  console.log("test");
};

var myInterval = interval(test, 1000);

setTimeout(() => {
  myInterval.clear();
}, 4000);

// print hello 5 times and then stop
let i = 1;
let timer = setInterval(() => {
  if (i <= 5) {
    console.log("Hello");
    i += 1;
  } else {
    clearInterval(timer);
  }
}, 2000);

// clearAllInterval

const MY_INTERVALS = {
  intervalIds: [],
  setInterval: function (fn, delay) {
    const id = setInterval(fn, delay);
    this.intervalIds.push(id);
  },
  clearAllInterval: function () {
    while (this.intervalIds.length) {
      clearInterval(this.intervalIds.pop());
    }
  },
};

MY_INTERVALS.setInterval(() => {
  console.log("Hello");
}, 2000);

MY_INTERVALS.setInterval(() => {
  console.log("Hello2");
}, 500);

MY_INTERVALS.clearAllInterval();

MY_INTERVALS.setInterval(() => {
  console.log("Hello3");
}, 1000);

MY_INTERVALS.clearAllInterval();

// clearAllTimeout

const MY_TIMERS = {
  timeoutIds: [],
  setTimeout: function (fn, delay) {
    const id = setTimeout(fn, delay);
    this.timeoutIds.push(id);
  },
  clearAllTimeout: function () {
    while (this.timeoutIds.length) {
      clearTimeout(this.timeoutIds.pop());
    }
  },
};

MY_TIMERS.setTimeout(() => {
  console.log("Hello");
}, 2000);

MY_TIMERS.setTimeout(() => {
  console.log("Hello2");
}, 500);

MY_TIMERS.clearAllTimeout();

MY_TIMERS.setTimeout(() => {
  console.log("Hello3");
}, 1000);

MY_TIMERS.clearAllTimeout();
