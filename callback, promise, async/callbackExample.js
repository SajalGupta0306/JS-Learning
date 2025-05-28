// callback

function step1(msg, cb) {
  setTimeout(() => {
    cb(`message from step 1: ${msg}`)
  }, 1000)
}

function step2(msg, cb) {
  setTimeout(() => {
    cb(`message from step 2: ${msg}`)
  }, 1000)
}

function step3(msg, cb) {
  setTimeout(() => {
    cb(`message from step 3: ${msg}`)
  }, 1000)
}

step1("I am 1", (val) => {
  console.log(val)
  step2("1 am 2", (val) => {
    console.log(val)
    step3("I am 3", (val) => {
      console.log(val)
    })
  })
}) 
