const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error("error block"));
  }, 800);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("i am resolved after 500");
  }, 500);
});

const p3 = 20;

// Promise.race polyfill
// https://jsfiddle.net/y1gkwm76/3/
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Promise.race([p1, p2]).then(
//   (val) => {
//     console.log("resolved");
//     console.log(val);
//   },
//   (err) => {
//     console.log("rejected");
//     console.log(err);
//   }
// );

Promise.myRace = function (promises) {
  return new Promise((resolve, reject) => {
    promises.forEach((promise) => {
      Promise.resolve(promise)
        .then((val) => {
          resolve(val);
        })
        .catch((err) => {
          reject(err);
        });
    });
  });
};

Promise.myRace([p1, p2, p3])
  .then((val) => {
    console.log("resolved");
    console.log(val);
  })
  .catch((err) => {
    console.log("rejected");
    console.log(err.message);
  });

// Promise.any polyfill
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// https://jsfiddle.net/kzL928w5/10/

// Promise.all polyfill
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// https://jsfiddle.net/bnatgu81/19/

// Promise.allSettled polyfill
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// https://jsfiddle.net/30eL4jxo/

// Simple Promise Implementation
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// https://jsfiddle.net/fpd1yg90/7/
// https://jsfiddle.net/5xutbk2g/6/
