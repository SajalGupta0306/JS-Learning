// closure: function along with its lexical scope bundled together

// Eg 1;

function test() {
  const a = 10;
  function test1() {
    console.log(a);
  }
  test1();
}
test();

// eg 2: using setTimeout
// setTimeout holds the lexical scope of i (reference of i) and at the end of setTimeout, value of i is 5,
// therefore it prints i 5 times (same memory location because of var)
function main() {
  for (var i = 0; i < 5; i++) {
    setTimeout(() => {
      console.log(i);
    }, i * 3000);
  }
}
main();

// eg 2: using setTimeout
// setTimeout holds the lexical scope of i (reference of i) and at the end of each setTimeout, value of i is 0,1,2,3,4
// therefore it prints i 0,1,2,3,4  (different memory location because of let)
function temp() {
  for (let x = 0; x < 5; x++) {
    setTimeout(() => {
      console.log(x);
    }, x * 1000);
  }
}
temp();
