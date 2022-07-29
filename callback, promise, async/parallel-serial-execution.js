const test1 = new Promise((res, _) => {
  setTimeout(() => {
    res("welcome to india");
  }, 2000);
});

const test2 = new Promise((res, _) => {
  setTimeout(() => {
    res("welcome to india again");
  }, 5000);
});

const test3 = new Promise((res, _) => {
  res("welcome to india always");
});

const arr = [];
arr.push(test1, test2, test3);

///////////////////////////////////////////////////// Serial approach ////////////////////////////////////////////////

async function getData() {
  for (let i = 0; i < arr.length; i++) {
    const result = await arr[i];
    console.log(result);
  }
}

getData();

///////////////////////////////////////////////////// Parallel approach ////////////////////////////////////////////////

Promise.all(arr).then((val) => {
  val.forEach((data) => {
    console.log(data);
  });
});

//  Array of API in synchronous way
const apis = [
  "https://jsonplaceholder.typicode.com/todos/1",
  "https://jsonplaceholder.typicode.com/todos/2",
  "https://jsonplaceholder.typicode.com/todos/3",
];

const promiseArr = apis.map(async (url) => {
  const dataPromise = await fetch(url);
  return dataPromise.json();
});

Promise.all(promiseArr).then((data) => {
  data.forEach((val) => {
    console.log(val.title);
  });
});

//////////////////// restart promise execution after any failed promise ////////////////////

const a = new Promise((res, rej) => {
  res(1);
});
const b = new Promise((res, rej) => {
  res(2);
});
const c = new Promise((res, rej) => {
  rej(3);
});
const d = new Promise((res, rej) => {
  res(4);
});
const e = new Promise((res, rej) => {
  res(5);
});
const execute = async (...args) => {
  let result = [];
  for (let i = 0; i < args.length; i++) {
    try {
      const res = await args[i];
      console.log(res);
    } catch (err) {
      console.log("err" + err);
      args[2] = new Promise((res, rej) => {
        res(3);
      });
      execute(...args);
      break;
    }
  }
};
execute(a, b, c, d, e);

///////////////////// delay promise execution /////////////////////

function promiseDelay(delay) {
  let timeout;
  let resolveMethod;
  const result = new Promise((resolve, reject) => {
    resolveMethod = resolve;
    timeout = setTimeout(() => {
      resolve();
    }, delay);
  });
  result.clear = function () {
    if (timeout) {
      clearTimeout(timeout);
      resolveMethod();
    }
  };
  return result;
}
const answer = promiseDelay(5000);
// result.clear();

/* https://codesandbox.io/s/crazy-antonelli-h5wzr2?file=/src/index.js */
