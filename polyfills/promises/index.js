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

// Promise.race polyfill
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
        }); // using Promise.resolve as there could be a normal value passed in promise array
    });
  });
};

Promise.myRace([p1, p2, p3]).then(
  (val) => {
    console.log("resolved");
    console.log(val);
  },
  (err) => {
    console.log("rejected");
    console.log(err);
  }
);

// Promise.any polyfill
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// https://jsfiddle.net/kzL928w5/10/

// Promise.all polyfill
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// https://jsfiddle.net/bnatgu81/19/


// Promise.allSettled polyfill
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// https://jsfiddle.net/8w5kmt9a/18/
