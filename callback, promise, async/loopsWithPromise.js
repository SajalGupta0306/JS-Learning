// loops with promise
// loops

function asyncFunction(i) {
  return new Promise(resolve => {
    setTimeout(() => resolve(`Result ${i}`), 1000 - i * 200);
  });
}

// for loop

// The loop runs synchronously, firing off all async calls immediately.
// Promises start executing in parallel (concurrently).
// The console.log in .then() runs when each Promise resolves, but order is not guaranteed unless your async functions resolve in order.
// The loop does not wait for each Promise to resolve before continuing to the next iteration.

for (let i = 0; i < 3; i++) {
  asyncFunction(i).then(result => {
    console.log(`for loop: ${result}`);
  });
}
// Output order is not guaranteed due to different delays

// for of loop

// Runs sequentially because of await.
// The next iteration starts only after the previous Promise resolves.
// Guarantees ordered execution.
// Suitable when the order matters or when calls depend on previous results.

async function runSequential() {
  for (const i of [0, 1, 2]) {
    const result = await asyncFunction(i);
    console.log(`for...of + await: ${result}`);
  }
}

runSequential();
// Output will always be:
// for...of + await: Result 0
// for...of + await: Result 1
// for...of + await: Result 2

// forEach

// forEach itself does not handle Promises.
// All async calls start immediately and run concurrently.
// You cannot use await directly inside a forEach callback to pause iteration.
// If you try to use await inside forEach callback, it won't wait for the Promise, causing unexpected behavior.

[1, 2, 3].forEach(item => {
  asyncFunction(item).then(result => console.log(result));
});

[0, 1, 2].forEach(async (i) => {
  const result = await asyncFunction(i);
  console.log(`forEach async: ${result}`);
});
// Output order is not guaranteed
// The loop does NOT wait for each asyncFunction to finish before moving on

// map

// Starts all Promises concurrently.
// Promise.all waits for all Promises to resolve.
// Returns results in order of the original array.
// Efficient for parallel execution when you want to wait for all results.

async function runAll() {
  const promises = [0, 1, 2].map(i => asyncFunction(i));
  const results = await Promise.all(promises);
  results.forEach(result => console.log(`Promise.all: ${result}`));
}

runAll();
// Output will always be:
// Promise.all: Result 0
// Promise.all: Result 1
// Promise.all: Result 2
