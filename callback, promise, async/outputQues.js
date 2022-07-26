const p1 = new Promise((resolve) => setTimeout(resolve));

const x = new Promise((resolve) => resolve(p1));

x.then(() => {
  console.log("tick 3");
});

p1.then(() => {
  console.log("tick 1");
}).then(() => {
  console.log("tick 2");
});

//////////////////////////////////////////////

const a = new Promise((resolve) => setTimeout(resolve));

Promise.resolve(a).then(() => {
  console.log("tick 3");
});

p.then(() => {
  console.log("tick 1");
}).then(() => {
  console.log("tick 2");
});

//////////////////////////////////////////////

console.log("stack [1]");
setTimeout(() => console.log("macro [2]"), 0);
setTimeout(() => console.log("macro [3]"), 1);

const p = Promise.resolve();
for (let i = 0; i < 3; i++) {
  p.then(() => {
    setTimeout(() => {
      console.log("stack [4]");
      setTimeout(() => console.log("macro [5]"), 0);
      p.then(() => console.log("micro [6]"));
    }, 0);
    console.log("stack [7]");
  });
}

console.log("macro [8]");

//////////////////////////////////////////////
// Restarting promise resolve if any promise fails in betweem

const a = new Promise((res, rej) => {
  res(1);
});
const b = new Promise((res, rej) => {
  res(2);
});
const c = new Promise((res, rej) => {
  rej(3);
});
const d = new Promise((res, rej) => {
  res(4);
});
const e = new Promise((res, rej) => {
  res(5);
});
const execute = async (...args) => {
  for (let i = 0; i < args.length; i++) {
    try {
      const res = await args[i];
      console.log(res);
    } catch (err) {
      console.log("err" + err);
      args[2] = new Promise((res, rej) => {
        res(3);
      });
      execute(...args);
      break;
    }
  }
};
execute(a, b, c, d, e);
