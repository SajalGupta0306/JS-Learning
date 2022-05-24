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
