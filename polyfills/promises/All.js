// Promise.all polyfill
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// https://jsfiddle.net/bnatgu81/19/

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("i am resolved after 200");
  }, 200);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("i am resolved after 500");
  }, 500);
});

var p3 = Promise.resolve(25);

Promise.myAll = function (promises) {
  const result = [];
  let promiseCompleted = 0;
  return new Promise((resolve, reject) => {
    promises.forEach((promise, index) => {
      Promise.resolve(promise)
        .then((val) => {
          promiseCompleted++;
          result[index] = val;
          if (promiseCompleted === promises.length) {
            resolve(result);
          }
        })
        .catch((err) => {
          reject(err);
        });
    });
  });
};

Promise.myAll([p1, p2, p3])
  .then((val) => {
    console.log(val);
  })
  .catch((error) => {
    console.log(error);
  });
