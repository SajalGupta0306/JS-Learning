const test1 = new Promise((res, _) => {
  setTimeout(() => {
    res("welcome to india");
  }, 2000);
});

const test2 = new Promise((res, _) => {
  setTimeout(() => {
    res("welcome to india again");
  }, 5000);
});

const test3 = new Promise((res, _) => {
  res("welcome to india always");
});

const arr = [];
arr.push(test1, test2, test3);

///////////////////////////////////////////////////// Serial approach ////////////////////////////////////////////////

async function getData() {
  for (let i = 0; i < arr.length; i++) {
    const result = await arr[i];
    console.log(result);
  }
}

getData();

///////////////////////////////////////////////////// Parallel approach ////////////////////////////////////////////////

Promise.all(arr).then((val) => {
  val.forEach((data) => {
    console.log(data);
  });
});
