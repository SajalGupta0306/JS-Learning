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
