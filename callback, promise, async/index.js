// callbacks: Used to handle async data.
// A callback function is a function passed into another function as an argument.
// This function is invoked inside the outer function to complete an action

// when making server calls, instead of waiting for response, we can procceed with further processing
// function is passed as a parameter

// https://dev.to/jerrycode06/callback-hell-and-how-to-rescue-it-ggj
// https://dev.to/swarnaliroy94/methods-of-promise-all-any-finally-o2e
// https://www.zealousweb.com/how-to-handle-asynchronous-javascript-the-2021-way/

const posts = [
  { title: "post 1", body: "this is post 1" },
  { title: "post 2", body: "this is post 2" },
];

// printing title after every second
function getPost() {
  setTimeout(() => {
    posts.forEach((post) => {
      console.log(post.title);
    });
  }, 1000);
}

// calling the callback immediately after the post is pushed insted of waiting for 2 seconds and then getting posts
// async comes imto picture
// function createPost(callback) {
//   setTimeout(() => {
//     posts.push({ title: "post 3", body: "this is post 3" });
//     callback();
//   }, 2000);
// }

// getPost();
// createPost(getPost);

// callback hell example
const finishProcess = () => {
  setTimeout(() => {
    console.log("step 1");
    setTimeout(() => {
      console.log("step 2");
      setTimeout(() => {
        console.log("step 3");
        setTimeout(() => {
          console.log("Final Step");
        }, 2000);
      }, 2000);
    }, 2000);
  }, 2000);
};

finishProcess();

// promise: Effective way to handle async data. Introduced in ES6.
// using same getPost and posts, only createPost changes
// PROMISE CHAINING : The process of executing a sequence of asynchronous tasks one after another using promises is known as Promise chaining

// A promise is an object that may produce a single value some time in the future with either a resolved value or a reason that it’s not resolved
// (for example, network error). It will be in one of the 3 possible states: fulfilled, rejected, or pending.

function createPost() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push({ title: "post 3", body: "this is post 3" });
      const error = false;
      if (!error) {
        resolve();
      } else {
        reject("not able to add");
      }
    }, 2000);
  });
}

// if promise is resolved, goes into then,otherwise in the catch block
// createPost()
//   .then(null, getPost)
//   .catch(() => {
//     console.log("error in the code");
//   });

// Promise.all
// Promise.all is a promise that takes an array of promises as an input (an iterable),
// and it gets resolved when all the promises get resolved or any one of them gets rejected
// whichever is the longest promise, it takes that time into consideration and print data in case of Promises.all
const promise1 = Promise.resolve("Welcome to promises");
const promise2 = "random promise";
const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("this is promise 3");
  }, 2000);
});

Promise.all([promise1, promise2, promise3]).then((values) =>
  console.log(values)
);

// Promise.race: return the promise instance which is firstly resolved or rejected

// Promise.allSettled ; returns the list of promises with their state, either resolved or rejected
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("The first promise has resolved");
    resolve(10);
  }, 1 * 1000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("The second promise has rejected");
    reject(20);
  }, 2 * 1000);
});

Promise.allSettled([p1, p2]).then((result) => {
  console.log(result);
});

// Output:
// The first promise has resolved
// The second promise has rejected
// [
//   {
//       "status": "fulfilled",
//       "value": 10
//   },
//   {
//       "status": "rejected",
//       "reason": 20
//   }
// ]

// async/ await : cleaner way of dealing with promises
// mostly used with fetch api
const testAsyncAwait = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  console.log(data);
};
testAsyncAwait();

// reason why promise is better than callback
// 1. to avoid callbackHell
// 2. avoid security issues - consuming third party libraries

//////////////////////////////////
// async tasks run in sync mode
const asyncTask = (val) => {
  return new Promise((res, _) => {
    setTimeout(() => {
      res("Resolving " + val);
    }, 100 * val);
  });
};

const promises = [
  asyncTask(3),
  asyncTask(1),
  asyncTask(7),
  asyncTask(2),
  asyncTask(5),
];

const executeAsyncTasks = async (promises) => {
  for (const promise of promises) {
    try {
      const result = await promise;
      console.log(result);
    } catch (error) {
      console.log("Error: " + error);
    }
  }
};
