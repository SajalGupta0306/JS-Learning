const p = new Promise(resovle => setTimeout(resovle));

new Promise(resolve => resolve(p)).then(() => {
  console.log("tick 3");
});

p.then(() => {
  console.log("tick 1");
}).then(() => {
  console.log("tick 2");
});

//////////////////////////////////////////////

const a = new Promise(resolve => setTimeout(resolve));

Promise.resolve(a).then(() => {
  console.log("tick 3");
});

p.then(() => {
  console.log("tick 1");
}).then(() => {
  console.log("tick 2");
});
