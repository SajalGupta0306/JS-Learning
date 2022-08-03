// 1. Design pattern is used when we want to create private methods and private state.
// 2. used as a IIFE and exported to be used afterwards

const Store = (function () {
  let val = 0;
  const get = () => {
    return val;
  };
  const set = (data) => {
    val += data;
  };

  const reset = () => {
    val = 0;
  };
  return {
    getStore: get,
    setStore: set,
    resetStore: reset,
  };
  // or
  // return {
  //    get,
  //    set,
  //    reset,
  // };
})();

const st1 = Store;
st1.setStore(10);
console.log(st1.getStore());
st1.setStore(10);
console.log(st1.getStore());
st1.resetStore();
console.log(st1.getStore());

const st2 = Store;
st2.setStore(10);
console.log(st2.getStore());
st2.setStore(10);
console.log(st2.getStore());
st2.resetStore();
console.log(st2.getStore());

// module.exports = Store;

// test.mainMethod();
// console.log(test.contents);
