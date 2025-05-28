// parallel execution
// serial execution
// parallel
// serial


// parallel approach
//1. Promise.all
const tasks = [
  () => delay(1000, "Task 1"),
  () => delay(500, "Task 2"),
  () => delay(700, "Task 3")
];

function delay(ms, value) {
  return new Promise(resolve => setTimeout(() => resolve(value), ms));
}

async function runParallel() {
  const results = await Promise.all(tasks.map(fn => fn()));
  console.log("Parallel results:", results);
}

runParallel();

//2. Promise.allSettles
Promise.allSettled(tasks.map(fn => fn()))
  .then(results => {
    results.forEach(result => {
      if (result.status === 'fulfilled') {
        console.log("Success:", result.value);
      } else {
        console.error("Failed:", result.reason);
      }
    });
  });

// serial approach
//1. for of loop
async function runSequential() {
  const results = [];
  for (const fn of tasks) {
    const result = await fn(); // waits before moving to next
    results.push(result);
  }
  console.log("Sequential results:", results);
}

runSequential();

//2. Using Reducs
function runSequentialChained() {
  return tasks.reduce((prev, curr) => {
    return prev.then(async results => {
      const result = await curr();
      return [...results, result];
    });
  }, Promise.resolve([]));
}

runSequentialChained().then(res => console.log("Chained results:", res));

//3. without async/await
function runSequentialWithoutAsync() {
  return tasks.reduce((promiseChain, currentTask) => {
    return promiseChain.then(results =>
      currentTask().then(result => [...results, result])
    );
  }, Promise.resolve([]));
}

runSequentialWithoutAsync().then(results => {
  console.log("Sequential without async/await:", results);
});
