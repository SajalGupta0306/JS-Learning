// Promise.any polyfill
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// https://jsfiddle.net/kzL928w5/10/

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

Promise.any([p1, p2, p3])
  .then((val) => {
    console.log(val);
  })
  .catch((err) => {
    console.log(err);
  });

Promise.myAny = function (promises) {
  let rejectedPromises = 0;
  const error = new AggregateError(
    [new Error("Error Occured")],
    "All promises were rejected"
  );
  return new Promise((resolve, reject) => {
    if (promises.length === 0) {
      reject(error);
    }
    promises.forEach((promise) => {
      Promise.resolve(promise)
        .then((val) => {
          resolve(val);
        })
        .catch(() => {
          rejectedPromises++;
          if (promises.length === rejectedPromises) {
            reject(error);
          }
        });
    });
  });
};

Promise.myAny([p1])
  .then((val) => {
    console.log(val);
  })
  .catch((err) => {
    console.log(err);
  });
