// Promise.allSettled polyfill
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// https://jsfiddle.net/30eL4jxo/

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("i am rejected after 200");
  }, 200);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("i am resolved after 500");
  }, 500);
});

var p3 = 20;

Promise.myAllSettled = function (promises) {
  return new Promise((resolve, reject) => {
    let result = [];
    promises.forEach((promise) => {
      Promise.resolve(promise)
        .then((val) => {
          result.push({
            status: "fulfilled",
            value: val,
          });
          if (result.length === promises.length) {
            resolve(result);
          }
        })
        .catch((val) => {
          result.push({
            status: "rejected",
            reason: val,
          });
          if (result.length === promises.length) {
            reject(result);
          }
        });
    });
  });
};

Promise.myAllSettled([p1, p2, p3]).then((val) => console.log(val));
