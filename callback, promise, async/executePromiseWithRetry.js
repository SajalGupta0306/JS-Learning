// List of API endpoints
const apiUrls = [
  "https://jsonplaceholder.typicode.com/posts/1",
  "https://jsonplaceholder.typicode.com/posts/2",
  "https://jsonplaceholder.typicode.com/posts/3",
  "https://jsonplaceholder.typicode.com/posts/4000",
  "https://jsonplaceholder.typicode.com/posts/5",
]

// Function to fetch data from an API
async function fetchDataWithRetry(url, retries = 3) {
  for (let i = 0; i < retries; i++) {
    try {
      const response = await fetch(url)
      if (!response.ok) throw new Error(`Failed to fetch data from ${url}`)
      return response.json()
    } catch (error) {
      if (i === retries - 1) throw error // Throw error if all retries fail
      console.log(`Retrying ${url} (attempt ${i + 1})...`)
    }
  }
}

// Function to call all APIs and display results sequentially
async function callApisAndDisplayResults() {
  // Fetch all APIs concurrently using Promise.allSettled
  const promises = apiUrls.map((url) => fetchDataWithRetry(url))
  const results = await Promise.allSettled(promises)

  // Display results one after another
  results.forEach((result, index) => {
    if (result.status === "fulfilled") {
      console.log(`Result from API ${index + 1}:`, result.value)
    } else {
      console.error(`Error from API ${index + 1}:`, result.reason.message)
    }
  })
}

// Call the function
callApisAndDisplayResults()
