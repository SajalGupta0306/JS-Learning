// javascript generator has 3 main functions: next, throw and return

function* generator() {
  let id = 1;
  while (id < 10) {
    yield id;
    id++;
  }
}

const test = generator();
console.log(test.next());
console.log(test.next());
// return will perform last action on the input passed in next
console.log(test.return(5));
console.log(test.next());
