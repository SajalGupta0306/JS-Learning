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
function printNTimes(value) {
  let i = 1;
  const timer = setInterval(() => {
    if (i <= value) {
      console.log("Hello");
      i += 1;
    } else {
      clearInterval(timer);
    }
  }, 2000);
}

printNTimes(5);

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

/// How to add a delay in a JavaScript loop?

for (let i = 0; i < 10; i++) {
  task(i);
}

function task(i) {
  setTimeout(function () {
    // Add tasks to do
  }, 2000 * i);
}

// In the code given above you have to do 2000 * i because setTimeout method inside the loop doesn’t makes the loop pause but actually adds a delay to each iteration.
// Remember that all the iteration start their time together.
// Thus if we only do 2000 there, that will make all the iterations execute together and it will just give 2000 ms delay
// in the first iteration and all other iteration will happen instantly after it.
// Thus to avoid that we add 0 to first, 2000 to second, 4000 to third and it goes on.
