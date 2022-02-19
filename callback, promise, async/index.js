// callbacks: Used to handle async data.
// when making server calls, instead of waiting for response, we can procceed with further processing
// function is passed as a parameter

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

// promise: Effective way to handle async data. Introduced in ES6.
// using same getPost and posts, only createPost changes

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

// async/ await : cleaner way of dealing with promises
// mostly used with fetch api
const testAsyncAwait = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json;
  return data;
};
testAsyncAwait();

// reason why promise is better than callback
// 1. to avoid callbackHell
// 2. avoid security issues - consuming third party libraries
