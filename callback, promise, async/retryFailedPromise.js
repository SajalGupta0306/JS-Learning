// retry failed promise
// retry
// failed

function retryable(fn, retries = 3) {
  return new Promise((resolve, reject) => {
    const attempt = (count) => {
      fn()
        .then(resolve)
        .catch(err => {
          if (count > 0) {
            console.log("Retrying...");
            attempt(count - 1);
          } else {
            reject(err);
          }
        });
    };
    attempt(retries);
  });
}

// Example usage
const tasks = [
  () => Promise.resolve("A"),
  () => Promise.reject("B failed"),
  () => Promise.resolve("C"),
];

Promise.all(
  tasks.map(task => retryable(task, 2))
).then(console.log).catch(console.error);
