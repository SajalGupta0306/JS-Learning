// async vs Promise
// asyncVsPromise
// when to use async and promise

// basic explanation
var explain = 'Use async/await when you want cleaner, synchronous-looking code with easier error handling. Use Promises directly when you need more control, chaining, or are working in non-async contexts.'

| Feature                | `async/await`                             | `.then()` / Promises                             |
| ---------------------- | ----------------------------------------- | ------------------------------------------------ |
| **Syntax**             | Looks like synchronous code ✅             | More nested and harder to read with many steps ❌ |
| **Readability**        | Easier for sequential steps               | Better for short or single operations            |
| **Error handling**     | Use `try/catch` — clean and clear ✅       | Use `.catch()` — can get messy if nested ❌       |
| **Parallel execution** | Needs manual control (e.g. `Promise.all`) | Easily composed with multiple promises           |
| **Control flow**       | Great for sequential logic                | Better when you need to compose dynamically      |
| **Context**            | Only inside `async` functions             | Can be used anywhere                             |


// using standard promise
  function fetchUser() {
  return new Promise(resolve => {
    setTimeout(() => resolve({ name: "Alice", age: 30 }), 1000);
  });
}

function processUser(user) {
  return new Promise(resolve => {
    setTimeout(() => resolve({ ...user, isActive: true }), 1000);
  });
}

function saveUser(user) {
  return new Promise(resolve => {
    setTimeout(() => resolve("User saved: " + JSON.stringify(user)), 1000);
  });
}

// Execution using .then()
fetchUser()
  .then(user => {
    console.log("Fetched user:", user);
    return processUser(user);
  })
  .then(processedUser => {
    console.log("Processed user:", processedUser);
    return saveUser(processedUser);
  })
  .then(finalMessage => {
    console.log("Save result:", finalMessage);
  })
  .catch(error => {
    console.error("Error:", error);
  });

// using async/await
async function run() {
  try {
    const user = await fetchUser();
    console.log("Fetched user:", user);

    const processedUser = await processUser(user);
    console.log("Processed user:", processedUser);

    const result = await saveUser(processedUser);
    console.log("Save result:", result);
  } catch (error) {
    console.error("Error:", error);
  }
}

run();
